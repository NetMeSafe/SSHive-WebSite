import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

// Matches a path that already starts with a supported locale segment.
const HAS_LOCALE_PREFIX = /^\/(en|fr)(?:\/|$)/;

/**
 * Locales the apps can be set to but the site has never served. Shipped
 * versions of the macOS app build their Help-menu links from the interface
 * language, so a user running it in Spanish or German lands on /es/docs or
 * /de/docs. Without this, next-intl treats `es` as an ordinary path segment
 * and sends them to /en/es/docs, i.e. a 404 — a dead Help menu, which is
 * exactly what turns into a one-star review. The app now clamps its own URLs
 * to a served locale, but that only helps people who update; this covers
 * every copy already installed.
 */
const UNSERVED_LOCALE = /^\/(es|de|it|pt)(?=\/|$)/;

/** Support URL printed on the App Store listing; it must never 404. */
const SUPPORT_PATH = /^\/(?:(en|fr)\/)?support\/?$/;

export default function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const support = SUPPORT_PATH.exec(pathname);
  if (support) {
    return NextResponse.redirect(
      new URL(`/${support[1] ?? 'en'}/contact`, request.nextUrl.origin),
      { status: 308 },
    );
  }

  if (UNSERVED_LOCALE.test(pathname)) {
    return NextResponse.redirect(
      new URL(pathname.replace(UNSERVED_LOCALE, '/en'), request.nextUrl.origin),
      { status: 308 },
    );
  }

  const response = handleI18nRouting(request);

  // next-intl emits a temporary 307 when it adds the locale prefix to a
  // locale-less URL (e.g. /pricing -> /en/pricing). For SEO we upgrade that to
  // a permanent 308: it tells Google to drop the locale-less URL from the index
  // and consolidate ranking signals onto the canonical /en URL, clearing the
  // "Introuvable (404)" reports that those bare URLs previously produced.
  //
  // This is only safe because the redirect target is deterministic — locale
  // detection is disabled (see src/i18n/routing.ts), so a bare URL always maps
  // to /en regardless of request headers, and a shared cache can never serve
  // the wrong locale's redirect.
  if (response.status === 307) {
    const location = response.headers.get('location');
    if (
      location &&
      !HAS_LOCALE_PREFIX.test(request.nextUrl.pathname) &&
      HAS_LOCALE_PREFIX.test(new URL(location, request.nextUrl.origin).pathname)
    ) {
      const permanent = NextResponse.redirect(
        new URL(location, request.nextUrl.origin),
        { status: 308 },
      );
      // Carry over any headers next-intl set (e.g. the NEXT_LOCALE cookie),
      // except the location we have already applied above.
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'location') {
          permanent.headers.set(key, value);
        }
      });
      return permanent;
    }
  }

  return response;
}

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
