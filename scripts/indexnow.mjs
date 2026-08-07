#!/usr/bin/env node
/**
 * Submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * Google ignores IndexNow, but Bing does not — and Bing's index is what
 * ChatGPT Search reads, so this is the fastest path to being citable by an
 * answer engine. Run it after a deploy that changes content:
 *
 *   node scripts/indexnow.mjs
 *   node scripts/indexnow.mjs --dry-run
 *
 * The key file must stay reachable at https://sshive.app/<KEY>.txt.
 */

const HOST = 'sshive.app';
const KEY = 'd7bbb9c38776275eb145d38df87c3323';
const ORIGIN = `https://${HOST}`;
const DRY = process.argv.includes('--dry-run');

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'sshive-indexnow' } });
  if (!res.ok) throw new Error(`${res.status} on ${url}`);
  return res.text();
}

function extract(xml, tag) {
  return [...xml.matchAll(new RegExp(`<${tag}>([^<]+)</${tag}>`, 'g'))].map((m) => m[1].trim());
}

async function collectUrls() {
  const index = await fetchText(`${ORIGIN}/sitemap.xml`);
  const children = extract(index, 'loc');
  // A plain urlset (no children) means the index was replaced by a flat sitemap.
  if (!children.some((u) => u.includes('sitemap-'))) return children;

  const urls = new Set();
  for (const child of children) {
    for (const loc of extract(await fetchText(child), 'loc')) urls.add(loc);
  }
  return [...urls];
}

async function submit(urlList) {
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${ORIGIN}/${KEY}.txt`,
      urlList,
    }),
  });
  return res.status;
}

const keyCheck = await fetch(`${ORIGIN}/${KEY}.txt`);
if (!keyCheck.ok) {
  console.error(`Key file not reachable at ${ORIGIN}/${KEY}.txt (HTTP ${keyCheck.status}). Deploy first.`);
  process.exit(1);
}

const urls = await collectUrls();
console.log(`${urls.length} URLs collected from the sitemap index.`);

if (DRY) {
  console.log(urls.slice(0, 10).join('\n'));
  console.log('--dry-run: nothing submitted.');
  process.exit(0);
}

// IndexNow accepts up to 10 000 URLs per call; batch anyway to stay polite.
for (let i = 0; i < urls.length; i += 100) {
  const batch = urls.slice(i, i + 100);
  const status = await submit(batch);
  console.log(`batch ${i / 100 + 1}: ${batch.length} URLs -> HTTP ${status}`);
  if (status !== 200 && status !== 202) {
    console.error('Unexpected status, stopping. 403 usually means the key file does not match.');
    process.exit(1);
  }
}
console.log('Done. Bing/Yandex will crawl these on their own schedule.');
