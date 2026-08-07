import { buildSitemapIndexXml, sitemapResponse } from '@/lib/seo/sitemap-sections';

// Sitemap index. This URL is already submitted in Search Console, so it stays
// the single entry point; the per-section children below let GSC report an
// indexed count per content type.
export const dynamic = 'force-static';

export function GET(): Response {
  return sitemapResponse(buildSitemapIndexXml());
}
