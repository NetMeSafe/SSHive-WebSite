import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { WhySSHive } from '@/components/home/WhySSHive';
import { ComparisonTeaser } from '@/components/home/ComparisonTeaser';
import { PricingPreview } from '@/components/home/PricingPreview';
import { DownloadCTA } from '@/components/home/DownloadCTA';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeatureGrid />
      <WhySSHive />
      <ComparisonTeaser />
      <PricingPreview />
      <DownloadCTA />
    </>
  );
}
