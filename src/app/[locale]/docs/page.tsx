import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'docs' });

  return getPageMetadata({
    locale,
    path: '/docs',
    title: t('title'),
    description: t('metaDescription'),
  });
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'docs' });

  const faqItems = FAQ_KEYS.map((key) => ({
    question: t(`faq.${key}`),
    answer: t(`faq.a${key.slice(1)}`),
  }));

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/docs' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {t('subtitle')}
        </p>

        {/* FAQ */}
        <section className="mt-12 space-y-0 divide-y divide-border">
          {faqItems.map((item, index) => (
            <div key={index} className="py-8 first:pt-0 last:pb-0">
              <h2 className="text-lg font-bold text-foreground">
                {item.question}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
