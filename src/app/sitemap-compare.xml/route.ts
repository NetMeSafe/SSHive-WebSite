import { buildUrlsetXml, getSection, sitemapResponse } from '@/lib/seo/sitemap-sections';

export const dynamic = 'force-static';

export function GET(): Response {
  return sitemapResponse(buildUrlsetXml(getSection('compare')));
}
