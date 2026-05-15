import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/seo/JsonLd';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { AppStoreLink } from '@/components/download/AppStoreLink';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'pricing' });

  return getPageMetadata({
    locale,
    path: '/pricing',
    title: t('title'),
    description: t('subtitle'),
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pricing' });

  const freeFeatures: string[] = [
    t('free.features.0'),
    t('free.features.1'),
    t('free.features.2'),
    t('free.features.3'),
    t('free.features.4'),
    t('free.features.5'),
  ];

  const proFeatures: string[] = [
    t('pro.features.0'),
    t('pro.features.1'),
    t('pro.features.2'),
    t('pro.features.3'),
    t('pro.features.4'),
    t('pro.features.5'),
    t('pro.features.6'),
    t('pro.features.7'),
    t('pro.features.8'),
    t('pro.features.9'),
    t('pro.features.10'),
    t('pro.features.11'),
    t('pro.features.12'),
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ];

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/pricing' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: a,
            },
          })),
          url: `${SITE_URL}/${locale}/pricing`,
        }}
      />

      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('title')}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Card */}
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-foreground">
                {t('free.name')}
              </h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">
                  {t('free.price')}
                </span>
                <span className="text-muted-foreground">
                  {t('free.period')}
                </span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/download"
                className="mt-8 block text-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                {t('free.cta')}
              </Link>
            </div>

            {/* Pro Card */}
            <div className="relative bg-card border-2 border-primary rounded-xl p-8 flex flex-col">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {t('pro.badge')}
              </span>
              <h2 className="text-2xl font-bold text-foreground">
                {t('pro.name')}
              </h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">
                  {t('pro.price')}
                </span>
                <span className="text-muted-foreground">
                  {t('pro.period')}
                </span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <AppStoreLink className="mt-8 block text-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                {t('pro.cta')}
              </AppStoreLink>
            </div>
          </div>

          {/* No subscription note */}
          <p className="mt-12 text-center text-lg text-muted-foreground">
            {t('noSubscription')}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('faq.title')}
          </h2>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-lg font-semibold text-foreground">{q}</h3>
                <p className="mt-2 text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
