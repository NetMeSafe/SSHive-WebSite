import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match every path except:
  // - The bare root '/' (handled by src/app/page.tsx with a 308 permanent
  //   redirect to the chosen locale, instead of next-intl's default 307).
  // - API routes (/api/*)
  // - Next.js internals (/_next/*, /_vercel/*)
  // - opengraph-image (route handler, must not be locale-prefixed)
  // - Anything with a file extension (covers sitemap.xml, robots.txt,
  //   feed.xml, manifest.json, icon.svg, apple-icon.png, favicon.ico,
  //   safari-pinned-tab.svg, etc.)
  matcher: ['/((?!api|_next|_vercel|opengraph-image|.*\\..*).+)'],
};
