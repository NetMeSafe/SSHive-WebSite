import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { getNetworkTool, NETWORK_TOOL_SLUGS } from '@/lib/seo/network-tools';
import { NetworkToolPageRenderer } from '@/components/seo/NetworkToolPageRenderer';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    NETWORK_TOOL_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const data = getNetworkTool(slug);
  if (!data) return {};
  const loc = locale as Locale;

  return getPageMetadata({
    locale,
    path: `/network-tools/${slug}`,
    title: data.metaTitle[loc],
    description: data.metaDescription[loc],
    ogType: 'article',
  });
}

export default async function NetworkToolPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const data = getNetworkTool(slug);
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
