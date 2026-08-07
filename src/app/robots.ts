import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SITEMAP_SECTIONS } from '@/lib/seo/sitemap-sections';

// Non-content paths. Under RFC 9309 a crawler obeys exactly ONE group — the
// most specific user-agent match — and ignores `*` entirely, so every named
// group below has to repeat these or it silently opts that crawler out of
// them. That is why this list is a shared const rather than inline.
const COMMON_DISALLOW = [
  '/api/',
  // Bait paths bots scan: keep crawlers away so any 404/500 noise around them
  // never bleeds into the indexable set.
  '/wp-login.php',
  '/wp-admin/',
  '/.env',
  '/.git/',
];

// AI crawlers we explicitly welcome. Being readable by them is a distribution
// channel, but note the honest limit: for Google's AI surfaces, a page must
// first be indexed and snippet-eligible in ordinary Search, so this file
// grants access, it does not grant visibility.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'meta-externalagent',
  'meta-webindexer',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Never disallow rendering resources (/_next/static/*): Google renders
        // pages and needs the CSS, JS and fonts to evaluate them.
        disallow: COMMON_DISALLOW,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: COMMON_DISALLOW,
      })),
      // Throttle aggressive SEO crawlers
      { userAgent: 'AhrefsBot', crawlDelay: 10 },
      { userAgent: 'SemrushBot', crawlDelay: 10 },
      { userAgent: 'MJ12bot', crawlDelay: 10 },
    ],
    // The index plus every child: declaring children explicitly lets Search
    // Console report indexed counts per content type even before it expands
    // the index, which is how we find out *which* pages Google is refusing.
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      ...SITEMAP_SECTIONS.filter((s) => s.paths.length > 0).map(
        (s) => `${SITE_URL}/sitemap-${s.id}.xml`,
      ),
    ],
  };
}
