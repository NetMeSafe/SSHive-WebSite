import { permanentRedirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

/**
 * The bare root always sends to the default locale, never to a
 * header-negotiated one.
 *
 * A 308 is permanent and cacheable: making its target depend on
 * Accept-Language or on a cookie without advertising that in `Vary` lets any
 * shared cache serve one visitor's language to the next, and tells Google
 * (which sends no Accept-Language) that `/` permanently *is* `/en` while
 * telling a French browser it permanently *is* `/fr`. Deterministic here also
 * matches hreflang x-default, and matches how the middleware already resolves
 * every other locale-less URL. Visitors switch language from the navbar, and
 * that choice is preserved by in-app links.
 */
export default function RootRedirect() {
  permanentRedirect(`/${routing.defaultLocale}`);
}
