import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  worksFor?: string;
  url?: string;
  sameAs?: string[];
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  worksFor = 'NetMeSafe',
  url,
  sameAs,
}: PersonSchemaProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name,
        jobTitle,
        description,
        url: url ?? `${SITE_URL}/en/about`,
        worksFor: {
          '@type': 'Organization',
          name: worksFor,
          url: 'https://netmesafe.com',
        },
        ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
      }}
    />
  );
}
