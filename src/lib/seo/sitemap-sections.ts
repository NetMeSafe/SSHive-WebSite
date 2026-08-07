import { SITE_URL, FEATURES, COMPETITORS, LOCALES } from '@/lib/constants';
import { USE_CASE_SLUGS } from '@/lib/seo/use-cases';
import { HOW_TO_SLUGS } from '@/lib/seo/how-tos';
import { BEST_PAGE_SLUGS } from '@/lib/seo/best-pages';
import { IOS_PAGE_SLUGS } from '@/lib/seo/ios-pages';
import { INTEGRATION_SLUGS } from '@/lib/seo/integrations';
import { NETWORK_TOOL_SLUGS } from '@/lib/seo/network-tools';

/**
 * Date of the last real content change. Google cross-checks <lastmod> against
 * the page it actually fetched and starts ignoring the field site-wide when
 * every deploy claims "modified today" — so this is bumped by hand, never
 * derived from `new Date()`.
 */
export const LAST_CONTENT_UPDATE = '2026-08-07';

/**
 * The sitemap is split per content type rather than shipped as one 130-URL
 * file. Google Search Console reports indexed/discovered counts *per submitted
 * sitemap*, so this turns "113 pages not indexed" into "which kind of page is
 * Google refusing?" — the split is a diagnostic instrument, not a ranking
 * trick. Keep sections small enough that a single number is meaningful.
 */
export interface SitemapSection {
  /** Filename fragment: /sitemap-<id>.xml */
  id: string;
  /** Locale-less paths, '' being the locale home. */
  paths: string[];
  priority: (path: string) => number;
  changeFrequency: 'daily' | 'weekly' | 'monthly';
}

const CORE_PATHS = [
  '',
  '/download',
  '/pricing',
  '/mcp',
  '/features',
  '/compare',
  '/use-cases',
  '/how-to',
  '/integrations',
  '/network-tools',
  '/roadmap',
  '/changelog',
  '/docs',
  '/about',
  // '/contact' and '/privacy' are intentionally absent: both are noindexed
  // utility pages. They stay linked in the footer and keep passing equity.
];

export const SITEMAP_SECTIONS: SitemapSection[] = [
  {
    id: 'core',
    paths: CORE_PATHS,
    changeFrequency: 'weekly',
    priority: (p) => {
      if (p === '') return 1;
      if (p === '/download' || p === '/pricing' || p === '/mcp') return 0.9;
      if (['/features', '/compare', '/use-cases', '/how-to', '/integrations', '/network-tools'].includes(p)) return 0.85;
      if (p === '/roadmap' || p === '/changelog') return 0.7;
      return 0.5;
    },
  },
  {
    id: 'features',
    paths: FEATURES.map((f) => `/features/${f}`),
    changeFrequency: 'monthly',
    priority: () => 0.8,
  },
  {
    id: 'compare',
    paths: COMPETITORS.map((c) => `/compare/${c}`),
    changeFrequency: 'monthly',
    priority: () => 0.8,
  },
  {
    id: 'guides',
    paths: [
      ...USE_CASE_SLUGS.map((s) => `/use-cases/${s}`),
      ...HOW_TO_SLUGS.map((s) => `/how-to/${s}`),
    ],
    changeFrequency: 'monthly',
    priority: () => 0.8,
  },
  {
    id: 'apple',
    paths: [
      ...IOS_PAGE_SLUGS.map((s) => `/${s}`),
      ...BEST_PAGE_SLUGS.map((s) => `/${s}`),
    ],
    changeFrequency: 'monthly',
    priority: () => 0.85,
  },
  {
    id: 'network-tools',
    paths: NETWORK_TOOL_SLUGS.map((s) => `/network-tools/${s}`),
    changeFrequency: 'monthly',
    priority: () => 0.85,
  },
  {
    id: 'integrations',
    paths: INTEGRATION_SLUGS.map((s) => `/integrations/${s}`),
    changeFrequency: 'monthly',
    priority: () => 0.85,
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** One <url> per (path × locale), each carrying reciprocal hreflang alternates. */
export function buildUrlsetXml(section: SitemapSection): string {
  const urls: string[] = [];

  for (const path of section.paths) {
    for (const locale of LOCALES) {
      const alternates = [
        ...LOCALES.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l}" href="${escapeXml(`${SITE_URL}/${l}${path}`)}" />`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${SITE_URL}/en${path}`)}" />`,
      ].join('\n');

      urls.push(
        [
          '  <url>',
          `    <loc>${escapeXml(`${SITE_URL}/${locale}${path}`)}</loc>`,
          alternates,
          `    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>`,
          `    <changefreq>${section.changeFrequency}</changefreq>`,
          `    <priority>${section.priority(path)}</priority>`,
          '  </url>',
        ].join('\n'),
      );
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls.join('\n'),
    '</urlset>',
    '',
  ].join('\n');
}

export function buildSitemapIndexXml(): string {
  const entries = SITEMAP_SECTIONS.filter((s) => s.paths.length > 0).map((s) =>
    [
      '  <sitemap>',
      `    <loc>${SITE_URL}/sitemap-${s.id}.xml</loc>`,
      `    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>`,
      '  </sitemap>',
    ].join('\n'),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries.join('\n'),
    '</sitemapindex>',
    '',
  ].join('\n');
}

export function sitemapResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export function getSection(id: string): SitemapSection {
  const section = SITEMAP_SECTIONS.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown sitemap section: ${id}`);
  return section;
}
