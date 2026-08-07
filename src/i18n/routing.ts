import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  // Every public URL must carry a locale prefix (/en or /fr). A locale-less
  // URL (e.g. /pricing) is redirected server-side to its prefixed version.
  localePrefix: 'always',
  // Locale detection is OFF here on purpose: a locale-less URL always resolves
  // to the default locale (= the hreflang x-default, /en). Keeping the target
  // deterministic (never request-dependent) is what lets the middleware serve
  // that redirect as a *permanent* 308 (see src/middleware.ts) without risking
  // shared-cache poisoning. In-app navigation is always locale-prefixed via the
  // next-intl <Link>, so a visitor's chosen language is preserved; only direct
  // hits on a bare URL (Googlebot, external deep-links) land on /en.
  // Per-visitor language negotiation still happens on the homepage `/`
  // (handled by src/app/page.tsx via cookie + Accept-Language).
  localeDetection: false,
  // next-intl otherwise emits an HTTP `Link:` hreflang header whose x-default
  // points at the locale-LESS URL, which 308-redirects. An hreflang cluster
  // that points at a redirect is self-contradicting, and it disagreed with the
  // <link rel="alternate"> tags the pages already render correctly. The HTML
  // tags are the single source of truth.
  alternateLinks: false,
  // No Set-Cookie on responses that carry a long s-maxage without Vary: Cookie.
  localeCookie: false,
});
