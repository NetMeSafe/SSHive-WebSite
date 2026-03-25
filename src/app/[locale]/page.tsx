import { setRequestLocale } from 'next-intl/server';
import { HomeShowcase } from '@/components/home/HomeShowcase';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeShowcase />;
}
