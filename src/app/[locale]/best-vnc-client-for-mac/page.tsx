import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { getBestPage } from '@/lib/seo/best-pages';
import { BestPageRenderer } from '@/components/seo/BestPageRenderer';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

const SLUG = 'best-vnc-client-for-mac';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const data = getBestPage(SLUG);
  if (!data) return {};
  const loc = locale as Locale;

  return getPageMetadata({
    locale,
    path: `/${SLUG}`,
    title: data.metaTitle[loc],
    description: data.metaDescription[loc],
    ogType: 'article',
  });
}

export default async function BestVNCClientForMacPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = getBestPage(SLUG);
  if (!data) notFound();

  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });

  return (
    <BestPageRenderer
      data={data}
      locale={locale}
      loc={loc}
      homeBreadcrumb={locale === 'fr' ? 'Accueil' : 'Home'}
      ctaTitle={t('tryFreeTitle')}
      ctaDescription={t('tryFreeDescription')}
      ctaButton={t('downloadCta')}
      faqHeading={t('faqHeading')}
    />
  );
}
