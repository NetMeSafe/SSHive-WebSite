import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FEATURES, LOCALES } from '@/lib/constants';
import type { Feature } from '@/lib/constants';
import {
  Terminal,
  FolderOpen,
  Monitor,
  Eye,
  ArrowLeftRight,
  Bot,
  Radio,
  Code,
  CheckCircle,
  Download,
  ArrowLeft,
} from 'lucide-react';

const featureIcons: Record<Feature, typeof Terminal> = {
  ssh: Terminal,
  sftp: FolderOpen,
  rdp: Monitor,
  vnc: Eye,
  tunnels: ArrowLeftRight,
  mcp: Bot,
  broadcast: Radio,
  snippets: Code,
};

const featureGradients: Record<Feature, string> = {
  ssh: 'from-blue-500/20 to-cyan-500/20',
  sftp: 'from-green-500/20 to-emerald-500/20',
  rdp: 'from-purple-500/20 to-violet-500/20',
  vnc: 'from-amber-500/20 to-orange-500/20',
  tunnels: 'from-rose-500/20 to-pink-500/20',
  mcp: 'from-indigo-500/20 to-blue-500/20',
  broadcast: 'from-red-500/20 to-rose-500/20',
  snippets: 'from-teal-500/20 to-cyan-500/20',
};

const featureIconColors: Record<Feature, string> = {
  ssh: 'text-blue-400',
  sftp: 'text-green-400',
  rdp: 'text-purple-400',
  vnc: 'text-amber-400',
  tunnels: 'text-rose-400',
  mcp: 'text-indigo-400',
  broadcast: 'text-red-400',
  snippets: 'text-teal-400',
};

const featureBorderColors: Record<Feature, string> = {
  ssh: 'border-blue-500/30',
  sftp: 'border-green-500/30',
  rdp: 'border-purple-500/30',
  vnc: 'border-amber-500/30',
  tunnels: 'border-rose-500/30',
  mcp: 'border-indigo-500/30',
  broadcast: 'border-red-500/30',
  snippets: 'border-teal-500/30',
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    FEATURES.map((feature) => ({ locale, feature }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; feature: string }>;
}): Promise<Metadata> {
  const { locale, feature } = await params;

  if (!FEATURES.includes(feature as Feature)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'featurePages' });

  return {
    title: t(`${feature}.metaTitle`),
    description: t(`${feature}.metaDescription`),
    alternates: {
      canonical: `/${locale}/features/${feature}`,
      languages: {
        en: `/en/features/${feature}`,
        fr: `/fr/features/${feature}`,
      },
    },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ locale: string; feature: string }>;
}) {
  const { locale, feature } = await params;

  if (!FEATURES.includes(feature as Feature)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'featurePages' });
  const tFeatures = await getTranslations({ locale, namespace: 'features' });

  const featureKey = feature as Feature;
  const Icon = featureIcons[featureKey];
  const gradient = featureGradients[featureKey];
  const iconColor = featureIconColors[featureKey];
  const borderColor = featureBorderColors[featureKey];

  const bullets = [
    t(`${feature}.bullets.0`),
    t(`${feature}.bullets.1`),
    t(`${feature}.bullets.2`),
    t(`${feature}.bullets.3`),
  ];

  const title = tFeatures(`${feature}.title`);
  const description = tFeatures(`${feature}.description`);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToFeatures')}
          </Link>

          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8`}
          >
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      {/* Bullet Points */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 p-6 rounded-xl bg-card border ${borderColor}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-2xl bg-gradient-to-br ${gradient} border ${borderColor} p-10 md:p-14 text-center`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('tryFeature', { feature: title })}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
              >
                <Download className="w-5 h-5" />
                {t('downloadCta')}
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors text-base"
              >
                {t('backToFeatures')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
