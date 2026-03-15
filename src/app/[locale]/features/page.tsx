import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FEATURES } from '@/lib/constants';
import {
  Terminal,
  FolderOpen,
  Monitor,
  Eye,
  ArrowLeftRight,
  Bot,
  Radio,
  Code,
  ArrowRight,
} from 'lucide-react';

const featureIcons: Record<string, typeof Terminal> = {
  ssh: Terminal,
  sftp: FolderOpen,
  rdp: Monitor,
  vnc: Eye,
  tunnels: ArrowLeftRight,
  mcp: Bot,
  broadcast: Radio,
  snippets: Code,
};

const featureGradients: Record<string, string> = {
  ssh: 'from-blue-500/20 to-cyan-500/20',
  sftp: 'from-green-500/20 to-emerald-500/20',
  rdp: 'from-purple-500/20 to-violet-500/20',
  vnc: 'from-amber-500/20 to-orange-500/20',
  tunnels: 'from-rose-500/20 to-pink-500/20',
  mcp: 'from-indigo-500/20 to-blue-500/20',
  broadcast: 'from-red-500/20 to-rose-500/20',
  snippets: 'from-teal-500/20 to-cyan-500/20',
};

const featureIconColors: Record<string, string> = {
  ssh: 'text-blue-400',
  sftp: 'text-green-400',
  rdp: 'text-purple-400',
  vnc: 'text-amber-400',
  tunnels: 'text-rose-400',
  mcp: 'text-indigo-400',
  broadcast: 'text-red-400',
  snippets: 'text-teal-400',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'featuresPage' });

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/features`,
      languages: { en: '/en/features', fr: '/fr/features' },
    },
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'featuresPage' });
  const tFeatures = await getTranslations({ locale, namespace: 'features' });

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {t('title')}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature) => {
              const Icon = featureIcons[feature];
              const gradient = featureGradients[feature];
              const iconColor = featureIconColors[feature];

              return (
                <Link
                  key={feature}
                  href={`/features/${feature}` as '/features/ssh'}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    {tFeatures(`${feature}.title`)}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {tFeatures(`${feature}.description`)}
                  </p>

                  {/* Learn more link */}
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    {tFeatures('learnMore')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
