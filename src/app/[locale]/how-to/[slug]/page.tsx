import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Download, Clock } from 'lucide-react';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { HOW_TO_SLUGS, getHowTo } from '@/lib/seo/how-tos';
import { getUseCase } from '@/lib/seo/use-cases';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { FAQSection } from '@/components/seo/FAQSection';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { RelatedLinks } from '@/components/seo/RelatedLinks';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    HOW_TO_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const howTo = getHowTo(slug);
  if (!howTo) return {};
  const loc = locale as Locale;

  return getPageMetadata({
    locale,
    path: `/how-to/${slug}`,
    title: howTo.metaTitle[loc],
    description: howTo.metaDescription[loc],
    ogType: 'article',
  });
}

export default async function HowToPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const howTo = getHowTo(slug);
  if (!howTo) notFound();

  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });
  const tFeatures = await getTranslations({ locale, namespace: 'features' });

  const faqItems = howTo.faq.map((q) => ({
    question: q.question[loc],
    answer: q.answer[loc],
  }));

  const stepData = howTo.steps.map((s) => ({
    name: s.name[loc],
    text: s.text[loc],
  }));

  const featureLinks = howTo.relatedFeatures.map((s) => ({
    href: `/features/${s}`,
    title: tFeatures(`${s}.title`),
    description: tFeatures(`${s}.shortDesc`),
  }));

  const useCaseLinks = (howTo.relatedUseCases ?? [])
    .map((s) => getUseCase(s))
    .filter((u): u is NonNullable<typeof u> => Boolean(u))
    .map((u) => ({
      href: `/use-cases/${u.slug}`,
      title: u.h1[loc],
      description: u.hero[loc],
    }));

  const howToLinks = (howTo.relatedHowTos ?? [])
    .map((s) => getHowTo(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h))
    .map((h) => ({
      href: `/how-to/${h.slug}`,
      title: h.h1[loc],
      description: h.hero[loc],
    }));

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('howTo.title'), href: '/how-to' },
          { name: howTo.h1[loc], href: `/how-to/${slug}` },
        ]}
      />
      <FAQSchema items={faqItems} />
      <HowToSchema
        name={howTo.h1[loc]}
        description={howTo.hero[loc]}
        steps={stepData}
        totalTime={`PT${howTo.estimatedMinutes}M`}
      />
      <ArticleSchema
        headline={howTo.h1[loc]}
        description={howTo.hero[loc]}
        url={`${SITE_URL}/${locale}/how-to/${slug}`}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/how-to"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('howTo.title')}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {howTo.h1[loc]}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {howTo.hero[loc]}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {t('estimatedTime')}: {howTo.estimatedMinutes} {t('minutes')}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {howTo.intro[loc]}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {t('stepsHeading')}
          </h2>
          <ol className="space-y-8">
            {howTo.steps.map((step, idx) => (
              <li key={idx} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.name[loc]}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {step.text[loc]}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection heading={t('faqHeading')} items={faqItems} />

      <RelatedLinks heading={t('relatedFeatures')} items={featureLinks} />
      {useCaseLinks.length > 0 && (
        <RelatedLinks heading={t('relatedUseCases')} items={useCaseLinks} />
      )}
      {howToLinks.length > 0 && (
        <RelatedLinks heading={t('relatedHowTos')} items={howToLinks} />
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('tryFreeTitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('tryFreeDescription')}
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            {t('downloadCta')}
          </Link>
        </div>
      </section>
    </>
  );
}
