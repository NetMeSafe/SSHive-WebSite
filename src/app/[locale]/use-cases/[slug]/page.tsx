import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Download, ArrowRight } from 'lucide-react';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { USE_CASES, USE_CASE_SLUGS, getUseCase } from '@/lib/seo/use-cases';
import { getHowTo } from '@/lib/seo/how-tos';
import { FEATURE_SEO } from '@/lib/seo/features';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { FAQSection } from '@/components/seo/FAQSection';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { RelatedLinks } from '@/components/seo/RelatedLinks';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    USE_CASE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  const loc = locale as Locale;

  return {
    title: useCase.metaTitle[loc],
    description: useCase.metaDescription[loc],
    alternates: {
      canonical: `/${locale}/use-cases/${slug}`,
      languages: {
        en: `/en/use-cases/${slug}`,
        fr: `/fr/use-cases/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: useCase.metaTitle[loc],
      description: useCase.metaDescription[loc],
      url: `${SITE_URL}/${locale}/use-cases/${slug}`,
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });
  const tFeatures = await getTranslations({ locale, namespace: 'features' });
  const tCompare = await getTranslations({ locale, namespace: 'comparePage' });

  const faqItems = useCase.faq.map((q) => ({
    question: q.question[loc],
    answer: q.answer[loc],
  }));

  const featureLinks = useCase.relatedFeatures.map((featSlug) => ({
    href: `/features/${featSlug}`,
    title: tFeatures(`${featSlug}.title`),
    description: tFeatures(`${featSlug}.shortDesc`),
  }));

  const howToLinks = (useCase.relatedHowTos ?? [])
    .map((s) => getHowTo(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h))
    .map((h) => ({
      href: `/how-to/${h.slug}`,
      title: h.h1[loc],
      description: h.hero[loc],
    }));

  const useCaseLinks = (useCase.relatedUseCases ?? [])
    .map((s) => getUseCase(s))
    .filter((u): u is NonNullable<typeof u> => Boolean(u))
    .map((u) => ({
      href: `/use-cases/${u.slug}`,
      title: u.h1[loc],
      description: u.hero[loc],
    }));

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('useCases.title'), href: '/use-cases' },
          { name: useCase.h1[loc], href: `/use-cases/${slug}` },
        ]}
      />
      <FAQSchema items={faqItems} />
      <ArticleSchema
        headline={useCase.h1[loc]}
        description={useCase.hero[loc]}
        url={`${SITE_URL}/${locale}/use-cases/${slug}`}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('useCases.title')}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {useCase.h1[loc]}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {useCase.hero[loc]}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {useCase.intro[loc]}
          </div>
        </div>
      </section>

      {/* Sections */}
      {useCase.sections.map((section, idx) => (
        <section key={idx} className="py-12 md:py-16 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {section.heading[loc]}
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.body[loc]}
            </div>
          </div>
        </section>
      ))}

      <FAQSection heading={t('faqHeading')} items={faqItems} />

      <RelatedLinks heading={t('relatedFeatures')} items={featureLinks} />
      {howToLinks.length > 0 && (
        <RelatedLinks heading={t('relatedHowTos')} items={howToLinks} />
      )}
      {useCaseLinks.length > 0 && (
        <RelatedLinks heading={t('relatedUseCases')} items={useCaseLinks} />
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              {t('downloadCta')}
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              {tCompare('overviewTitle')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
