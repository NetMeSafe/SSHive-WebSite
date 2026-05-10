import { JsonLd } from './JsonLd';

export interface ItemListEntry {
  position: number;
  name: string;
  description?: string;
  url?: string;
}

export function ItemListSchema({
  name,
  description,
  items,
}: {
  name: string;
  description?: string;
  items: ItemListEntry[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name,
        description,
        numberOfItems: items.length,
        itemListElement: items.map((item) => ({
          '@type': 'ListItem',
          position: item.position,
          name: item.name,
          description: item.description,
          url: item.url,
        })),
      }}
    />
  );
}
