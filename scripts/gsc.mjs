#!/usr/bin/env node
/**
 * Google Search Console client — no npm dependencies.
 *
 * Signs a service-account JWT with node:crypto and talks to the REST API
 * directly, so there is nothing to install and nothing to keep updated.
 *
 * Setup, once:
 *   1. console.cloud.google.com → new project → enable "Google Search Console API"
 *   2. IAM → Service accounts → create one → Keys → Add key → JSON → download
 *   3. Search Console → Paramètres → Utilisateurs et autorisations → add the
 *      service account's email address (…@….iam.gserviceaccount.com) as a user
 *   4. export GSC_KEY=/path/to/key.json
 *
 * Usage:
 *   node scripts/gsc.mjs sitemaps            list submitted sitemaps + counts
 *   node scripts/gsc.mjs inspect <url>       indexing verdict for one URL
 *   node scripts/gsc.mjs audit [limit]       inspect every sitemap URL, summarise
 *   node scripts/gsc.mjs queries [days]      top search queries
 *   node scripts/gsc.mjs pages [days]        top pages by impressions
 *
 * Note on what the API cannot do: Google's Indexing API only accepts
 * JobPosting and BroadcastEvent pages. There is no supported way to request
 * indexing of ordinary pages programmatically — that stays a manual action in
 * the Search Console UI. Everything else below is fully automatable.
 */

import { createSign } from 'node:crypto';
import { readFileSync } from 'node:fs';

const SITE = process.env.GSC_SITE ?? 'sc-domain:sshive.app';
const KEY_PATH = process.env.GSC_KEY;
const SCOPE = 'https://www.googleapis.com/auth/webmasters';

if (!KEY_PATH) {
  console.error('Set GSC_KEY to the path of the service-account JSON key.');
  console.error('See the header of this file for the one-time setup.');
  process.exit(1);
}

const key = JSON.parse(readFileSync(KEY_PATH, 'utf8'));

function b64url(input) {
  return Buffer.from(input).toString('base64url');
}

async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope: SCOPE,
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    }),
  );
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const jwt = `${header}.${claims}.${signer.sign(key.private_key, 'base64url')}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const json = await res.json();
  if (!json.access_token) {
    throw new Error(`Token exchange failed: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

async function api(url, { method = 'GET', body } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${await token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`${res.status} ${url}\n${JSON.stringify(json, null, 2)}`);
  }
  return json;
}

const encodedSite = encodeURIComponent(SITE);
const WM = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}`;

async function sitemaps() {
  const { sitemap = [] } = await api(`${WM}/sitemaps`);
  if (!sitemap.length) return console.log('No sitemap submitted for', SITE);
  for (const s of sitemap) {
    const web = (s.contents ?? []).find((c) => c.type === 'web') ?? {};
    const name = s.path.replace(/^https?:\/\/[^/]+\//, '');
    console.log(
      `${name.padEnd(30)} submitted=${web.submitted ?? '-'} indexed=${web.indexed ?? '-'}` +
        `  lastRead=${(s.lastDownloaded ?? '').slice(0, 10) || 'never'}` +
        `${s.errors > 0 ? `  ERRORS=${s.errors}` : ''}` +
        `${s.warnings > 0 ? `  warnings=${s.warnings}` : ''}`,
    );
  }
}

async function inspect(url) {
  const { inspectionResult } = await api(
    'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
    { method: 'POST', body: { inspectionUrl: url, siteUrl: SITE, languageCode: 'fr' } },
  );
  return inspectionResult?.indexStatusResult ?? {};
}

async function inspectOne(url) {
  const r = await inspect(url);
  console.log(url);
  console.log(`  verdict          ${r.verdict ?? '-'}`);
  console.log(`  coverageState    ${r.coverageState ?? '-'}`);
  console.log(`  robotsTxtState   ${r.robotsTxtState ?? '-'}`);
  console.log(`  indexingState    ${r.indexingState ?? '-'}`);
  console.log(`  lastCrawlTime    ${r.lastCrawlTime ?? 'never crawled'}`);
  console.log(`  pageFetchState   ${r.pageFetchState ?? '-'}`);
  console.log(`  googleCanonical  ${r.googleCanonical ?? '-'}`);
  console.log(`  userCanonical    ${r.userCanonical ?? '-'}`);
  if (r.referringUrls?.length) console.log(`  referringUrls    ${r.referringUrls.length}`);
}

/** Pull every <loc> out of the sitemap index and its children. */
async function sitemapUrls() {
  const origin = SITE.startsWith('sc-domain:')
    ? `https://${SITE.slice('sc-domain:'.length)}`
    : SITE.replace(/\/$/, '');
  const text = async (u) => (await fetch(u)).text();
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

  const index = await text(`${origin}/sitemap.xml`);
  const children = locs(index);
  if (!children.some((u) => u.includes('sitemap-'))) return children;

  const urls = new Set();
  for (const child of children) for (const u of locs(await text(child))) urls.add(u);
  return [...urls];
}

async function audit(limit) {
  const urls = await sitemapUrls();
  const slice = limit ? urls.slice(0, Number(limit)) : urls;
  console.log(`Inspecting ${slice.length} of ${urls.length} sitemap URLs (quota: 2000/day)\n`);

  const byState = new Map();
  const notIndexed = [];

  for (const [i, url] of slice.entries()) {
    let r;
    try {
      r = await inspect(url);
    } catch (err) {
      console.error(`  ! ${url}: ${String(err).split('\n')[0]}`);
      continue;
    }
    const state = r.coverageState ?? 'unknown';
    byState.set(state, (byState.get(state) ?? 0) + 1);
    if (r.verdict !== 'PASS') notIndexed.push({ url, state, lastCrawl: r.lastCrawlTime });
    if ((i + 1) % 20 === 0) process.stderr.write(`  ${i + 1}/${slice.length}\n`);
  }

  console.log('\n=== coverageState ===');
  for (const [state, n] of [...byState].sort((a, b) => b[1] - a[1])) {
    console.log(`${String(n).padStart(4)}  ${state}`);
  }

  const never = notIndexed.filter((u) => !u.lastCrawl);
  console.log(`\n${notIndexed.length} URLs not indexed, of which ${never.length} never crawled.`);
  console.log('\n=== first 25 not indexed ===');
  for (const u of notIndexed.slice(0, 25)) {
    console.log(`  ${u.state.padEnd(38)} ${u.url}`);
  }
}

async function searchAnalytics(days, dimension) {
  const end = new Date();
  const start = new Date(end.getTime() - Number(days) * 86400_000);
  const iso = (d) => d.toISOString().slice(0, 10);
  const { rows = [] } = await api(`${WM}/searchAnalytics/query`, {
    method: 'POST',
    body: {
      startDate: iso(start),
      endDate: iso(end),
      dimensions: [dimension],
      rowLimit: 40,
    },
  });
  if (!rows.length) return console.log(`No ${dimension} data over the last ${days} days.`);
  console.log(`${dimension.padEnd(60)} clicks  impr   ctr   pos`);
  for (const r of rows) {
    console.log(
      `${r.keys[0].slice(0, 58).padEnd(60)} ${String(r.clicks).padStart(5)} ` +
        `${String(r.impressions).padStart(5)}  ${(r.ctr * 100).toFixed(1)}%  ${r.position.toFixed(1)}`,
    );
  }
}

const token = accessToken();
const [cmd, arg] = process.argv.slice(2);

try {
  if (cmd === 'sitemaps') await sitemaps();
  else if (cmd === 'inspect' && arg) await inspectOne(arg);
  else if (cmd === 'audit') await audit(arg);
  else if (cmd === 'queries') await searchAnalytics(arg ?? 28, 'query');
  else if (cmd === 'pages') await searchAnalytics(arg ?? 28, 'page');
  else {
    console.error('Usage: gsc.mjs sitemaps | inspect <url> | audit [limit] | queries [days] | pages [days]');
    process.exit(1);
  }
} catch (err) {
  console.error(String(err));
  process.exit(1);
}
