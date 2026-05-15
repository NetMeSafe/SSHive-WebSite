import type { MetadataRoute } from 'next';
import { SITE_URL, FEATURES, COMPETITORS, LOCALES } from '@/lib/constants';
import { USE_CASE_SLUGS } from '@/lib/seo/use-cases';
import { HOW_TO_SLUGS } from '@/lib/seo/how-tos';
import { BEST_PAGE_SLUGS } from '@/lib/seo/best-pages';
import { IOS_PAGE_SLUGS } from '@/lib/seo/ios-pages';
import { INTEGRATION_SLUGS } from '@/lib/seo/integrations';

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
    '/integrations',
    '/roadmap',
  ];

  FEATURES.forEach((f) => pages.push(`/features/${f}`));
  COMPETITORS.forEach((c) => pages.push(`/compare/${c}`));
  USE_CASE_SLUGS.forEach((s) => pages.push(`/use-cases/${s}`));
  HOW_TO_SLUGS.forEach((s) => pages.push(`/how-to/${s}`));
  BEST_PAGE_SLUGS.forEach((s) => pages.push(`/${s}`));
  IOS_PAGE_SLUGS.forEach((s) => pages.push(`/${s}`));
  INTEGRATION_SLUGS.forEach((s) => pages.push(`/integrations/${s}`));

  const entries: MetadataRoute.Sitemap = [];

  const iosSlugs = new Set(IOS_PAGE_SLUGS.map((s) => `/${s}`));
  const bestSlugs = new Set(BEST_PAGE_SLUGS.map((s) => `/${s}`));

  function priorityFor(page: string): number {
    if (page === '') return 1;
    if (page === '/download' || page === '/pricing' || page === '/mcp') return 0.9;
    if (page === '/integrations') return 0.9;
    if (page === '/roadmap') return 0.75;
    if (page.startsWith('/integrations/')) return 0.85;
    if (iosSlugs.has(page)) return 0.9; // high-intent iOS landing pages
    if (bestSlugs.has(page)) return 0.85;
    if (
      page.startsWith('/features') ||
      page.startsWith('/compare') ||
      page.startsWith('/use-cases') ||
      page.startsWith('/how-to')
    ) {
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
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}${page}`])),
            'x-default': `${SITE_URL}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
