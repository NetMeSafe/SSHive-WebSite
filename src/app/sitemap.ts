import type { MetadataRoute } from 'next';
import { SITE_URL, FEATURES, COMPETITORS, LOCALES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/features',
    '/compare',
    '/pricing',
    '/download',
    '/blog',
    '/docs',
    '/about',
    '/changelog',
    '/contact',
  ];

  // Add feature pages
  FEATURES.forEach((f) => pages.push(`/features/${f}`));
  // Add comparison pages
  COMPETITORS.forEach((c) => pages.push(`/compare/${c}`));

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page.startsWith('/features') || page.startsWith('/compare') ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${SITE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
