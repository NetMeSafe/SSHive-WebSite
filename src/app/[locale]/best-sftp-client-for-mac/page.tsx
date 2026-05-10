import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { getBestPage } from '@/lib/seo/best-pages';
import { BestPageRenderer } from '@/components/seo/BestPageRenderer';

const SLUG = 'best-sftp-client-for-mac';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = getBestPage(SLUG);
  if (!data) return {};
  const loc = locale as Locale;

  return {
    title: data.metaTitle[loc],
    description: data.metaDescription[loc],
    alternates: {
      canonical: `/${locale}/${SLUG}`,
      languages: {
        en: `/en/${SLUG}`,
        fr: `/fr/${SLUG}`,
      },
    },
    openGraph: {
      type: 'article',
      title: data.metaTitle[loc],
      description: data.metaDescription[loc],
      url: `${SITE_URL}/${locale}/${SLUG}`,
    },
  };
}

export default async function BestSFTPClientForMacPage({
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
