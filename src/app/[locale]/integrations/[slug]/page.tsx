import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { INTEGRATION_SLUGS, getIntegration } from '@/lib/seo/integrations';
import { IntegrationPageRenderer } from '@/components/seo/IntegrationPageRenderer';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    INTEGRATION_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const data = getIntegration(slug);
  if (!data) return {};
  const loc = locale as Locale;

  return getPageMetadata({
    locale,
    path: `/integrations/${slug}`,
    title: data.metaTitle[loc],
    description: data.metaDescription[loc],
    ogType: 'article',
  });
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const data = getIntegration(slug);
  if (!data) notFound();

  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });

  return (
    <IntegrationPageRenderer
      data={data}
      locale={locale}
      loc={loc}
      homeBreadcrumb={locale === 'fr' ? 'Accueil' : 'Home'}
      integrationsBreadcrumb={locale === 'fr' ? 'Integrations IA' : 'AI Integrations'}
      ctaTitle={t('tryFreeTitle')}
      ctaDescription={t('tryFreeDescription')}
      ctaButton={t('downloadCta')}
      faqHeading={t('faqHeading')}
    />
  );
}
