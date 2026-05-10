import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match every path except:
  // - API routes (/api/*)
  // - Next.js internals (/_next/*, /_vercel/*)
  // - opengraph-image (route handler, must not be locale-prefixed)
  // - Anything with a file extension (covers sitemap.xml, robots.txt,
  //   feed.xml, manifest.json, icon.svg, apple-icon.png, favicon.ico,
  //   safari-pinned-tab.svg, etc.)
  matcher: ['/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)'],
};
