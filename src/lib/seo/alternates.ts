import type { Metadata } from 'next';
import { LOCALES, SITE_URL } from '@/lib/constants';

type Locale = (typeof LOCALES)[number];

function localeOgTag(locale: Locale): 'en_US' | 'fr_FR' {
  return locale === 'fr' ? 'fr_FR' : 'en_US';
}

/**
 * Build alternates + openGraph + twitter blocks for a page in one shot.
 *
 * - `locale`: current locale ('en' or 'fr')
 * - `path`: path WITHOUT the locale prefix, e.g. '/features/ssh'.
 *           Pass '' for the locale root (home).
 * - `title` / `description`: per-page values (already localized).
 * - `ogType` (optional): 'website' | 'article' | 'product' — defaults to 'website'.
 *
 * Emits canonical + hreflang en/fr/x-default + a fully-qualified openGraph
 * (url, title, description, locale, siteName, image) + twitter card.
 */
export function getPageMetadata({
  locale,
  path,
  title,
  description,
  ogType = 'website',
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
}): Metadata {
  const normalized = path === '' || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${SITE_URL}/${locale}${normalized}`;
  const enUrl = `${SITE_URL}/en${normalized}`;
  const frUrl = `${SITE_URL}/fr${normalized}`;

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl,
      languages: {
        en: enUrl,
        fr: frUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      type: ogType,
      siteName: 'SSHive',
      locale: localeOgTag(locale),
      alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
      url: fullUrl,
      title,
      description,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'SSHive — SSH/SFTP client for Mac, iPhone and iPad',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'SSHive — SSH/SFTP client for Mac, iPhone and iPad',
        },
      ],
    },
  };
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
