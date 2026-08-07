import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { getNetworkToolsHub } from '@/lib/seo/network-tools';
import { NetworkToolPageRenderer } from '@/components/seo/NetworkToolPageRenderer';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

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
  const data = getNetworkToolsHub();
  if (!data) return {};
  const loc = locale as Locale;

  return getPageMetadata({
    locale,
    path: '/network-tools',
    title: data.metaTitle[loc],
    description: data.metaDescription[loc],
    ogType: 'article',
  });
}

export default async function NetworkToolsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = getNetworkToolsHub();
  if (!data) notFound();

  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });

  return (
    <NetworkToolPageRenderer
      data={data}
      locale={locale}
      loc={loc}
      ctaButton={t('downloadCta')}
      faqHeading={t('faqHeading')}
    />
  );
}
