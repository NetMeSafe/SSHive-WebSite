import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';


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

  const sections: { title: string; items: { q: string; a: string }[] }[] =
    t.raw('sections');
  const faqItems = sections.flatMap((section) =>
    section.items.map((item) => ({ question: item.q, answer: item.a })),
  );

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

        {/* Sections */}
        {sections.map((section) => (
          <section key={section.title} className="mt-14">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pb-3 border-b border-border">
              {section.title}
            </h2>
            <div className="divide-y divide-border">
              {section.items.map((item) => (
                <article key={item.q} className="py-7">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
