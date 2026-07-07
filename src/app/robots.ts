import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

// AI/LLM crawlers we explicitly welcome: being cited by ChatGPT, Claude,
// Perplexity & co. is a distribution channel (generative engine optimization).
// The `*` rule already allows them, but explicit entries are immune to future
// tightening of the default rule and act as a clear opt-in signal.
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
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Only block true non-content. Never disallow rendering resources
        // (/_next/static/*): Google renders pages and needs CSS/JS/fonts,
        // and blocked resources degrade the "page experience" evaluation.
        disallow: [
          '/api/',
          // Bait paths bots scan: keep crawlers away from them so any future
          // 404/500 noise around these doesn't bleed into the indexable set.
          '/wp-login.php',
          '/wp-admin/',
          '/.env',
          '/.git/',
        ],
      },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
      // Throttle aggressive SEO crawlers
      { userAgent: 'AhrefsBot', crawlDelay: 10 },
      { userAgent: 'SemrushBot', crawlDelay: 10 },
      { userAgent: 'MJ12bot', crawlDelay: 10 },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
