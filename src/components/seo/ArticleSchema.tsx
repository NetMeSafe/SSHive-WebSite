import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished = '2026-03-17',
  dateModified,
  imageUrl,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline,
        description,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: {
          '@type': 'Organization',
          name: 'NetMeSafe',
          url: 'https://netmesafe.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'NetMeSafe',
          url: 'https://netmesafe.com',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/icon.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
        image: imageUrl ?? `${SITE_URL}/icon.svg`,
      }}
    />
  );
}
