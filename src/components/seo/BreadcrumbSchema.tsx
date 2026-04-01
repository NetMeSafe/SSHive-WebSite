import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({
  locale,
  items,
}: {
  locale: string;
  items: BreadcrumbItem[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}/${locale}${item.href}`,
        })),
      }}
    />
  );
}
