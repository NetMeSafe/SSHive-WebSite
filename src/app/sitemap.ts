import type { MetadataRoute } from 'next';
import { SITE_URL, FEATURES, COMPETITORS, LOCALES } from '@/lib/constants';
import { USE_CASE_SLUGS } from '@/lib/seo/use-cases';
import { HOW_TO_SLUGS } from '@/lib/seo/how-tos';

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
    '/privacy',
    '/mcp',
    '/use-cases',
    '/how-to',
  ];

  FEATURES.forEach((f) => pages.push(`/features/${f}`));
  COMPETITORS.forEach((c) => pages.push(`/compare/${c}`));
  USE_CASE_SLUGS.forEach((s) => pages.push(`/use-cases/${s}`));
  HOW_TO_SLUGS.forEach((s) => pages.push(`/how-to/${s}`));

  const entries: MetadataRoute.Sitemap = [];

  function priorityFor(page: string): number {
    if (page === '') return 1;
    if (
      page.startsWith('/features') ||
      page.startsWith('/compare') ||
      page.startsWith('/use-cases') ||
      page.startsWith('/how-to')
    ) {
      // index pages slightly higher than leaves
      const isIndex = page.endsWith('/use-cases') || page.endsWith('/how-to') || page === '/features' || page === '/compare';
      return isIndex ? 0.85 : 0.8;
    }
    return 0.6;
  }

  for (const page of pages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: priorityFor(page),
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
