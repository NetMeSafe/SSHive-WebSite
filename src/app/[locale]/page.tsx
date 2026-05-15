import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HomeShowcase } from '@/components/home/HomeShowcase';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return getPageMetadata({
    locale,
    path: '',
    title: t('title'),
    description: t('description'),
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeShowcase />;
}
