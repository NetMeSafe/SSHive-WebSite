import { JsonLd } from './JsonLd';

/**
 * FAQPage markup. Note the honest status: Google removed FAQ rich results
 * from Search on 2026-05-07 (documentation deleted 2026-07-15), so this earns
 * no SERP treatment. It stays because it is still valid vocabulary that marks
 * question/answer boundaries for anything parsing the page, and Google states
 * unused structured data is not penalised. Do not add it to a new page
 * expecting a SERP gain.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  );
}
