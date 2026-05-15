import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/static/media/',
          '/manifest.json',
          '/opengraph-image',
          // Bait paths bots scan: keep crawlers away from them so any future
          // 404/500 noise around these doesn't bleed into the indexable set.
          '/wp-login.php',
          '/wp-admin/',
          '/.env',
          '/.git/',
        ],
      },
      // Throttle aggressive SEO crawlers
      { userAgent: 'AhrefsBot', crawlDelay: 10 },
      { userAgent: 'SemrushBot', crawlDelay: 10 },
      { userAgent: 'MJ12bot', crawlDelay: 10 },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
