import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Check, X, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { COMPETITOR_DATA, ALL_COMPETITOR_SLUGS } from '@/lib/competitors';
import { COMPETITORS } from '@/lib/constants';
import type { Competitor } from '@/lib/constants';
import type { Locale } from '@/lib/constants';

export function generateStaticParams() {
  return ALL_COMPETITOR_SLUGS.map((competitor) => ({ competitor }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; competitor: string }>;
}): Promise<Metadata> {
  const { locale, competitor } = await params;
  const slug = competitor as Competitor;

  if (!COMPETITORS.includes(slug)) {
    return {};
  }

  const data = COMPETITOR_DATA[slug];
  const t = await getTranslations({ locale, namespace: 'comparePage' });

  const title = t('metaTitleTemplate', { competitor: data.name });
  const description = t('description', { competitor: data.name });

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/compare/${slug}`,
      languages: {
        en: `/en/compare/${slug}`,
        fr: `/fr/compare/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
    },
  };
}

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-success mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  }
  // String value — could be "partial", "Pro only", price, etc.
  if (value === 'partial') {
    return (
      <span className="inline-block px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">
        Partial
      </span>
    );
  }
  return (
    <span className="text-sm text-foreground">{value}</span>
  );
}

export default async function CompetitorPage({
  params,
}: {
  params: Promise<{ locale: string; competitor: string }>;
}) {
  const { locale, competitor } = await params;
  setRequestLocale(locale);

  const slug = competitor as Competitor;
  if (!COMPETITORS.includes(slug)) {
    notFound();
  }

  const data = COMPETITOR_DATA[slug];
  const t = await getTranslations({ locale, namespace: 'comparePage' });
  const tc = await getTranslations({ locale, namespace: 'comparison' });
  const loc = locale as Locale;

  const whySwitchReasons = [
    t('whySwitchReasons.allInOne'),
    t('whySwitchReasons.securePrivate'),
    t('whySwitchReasons.nativeMac'),
    t('whySwitchReasons.oneTimePrice'),
    t('whySwitchReasons.aiIntegration'),
    t('whySwitchReasons.appStore'),
  ];

  // Get the feature label for a given key
  function getFeatureLabel(key: string): string {
    // Try known comparison keys first, fall back to comparePage keys
    const knownKeys: Record<string, string> = {
      sshTerminal: tc('sshTerminal'),
      sftpManager: tc('sftpManager'),
      rdpClient: tc('rdpClient'),
      vncClient: tc('vncClient'),
      sshTunnels: tc('sshTunnels'),
      broadcastMode: tc('broadcastMode'),
      mcpIntegration: tc('mcpIntegration'),
      nativeMacOS: tc('nativeMacOS'),
      keychainIntegration: tc('keychainIntegration'),
      macAppStore: tc('macAppStore'),
      price: tc('price'),
    };

    if (knownKeys[key]) return knownKeys[key];

    // comparePage-level keys
    const pageKeys: Record<string, string> = {
      keychainIntegration: t('keychainIntegration'),
      connectionProfiles: t('connectionProfiles'),
      modernUI: t('modernUI'),
    };

    if (pageKeys[key]) return pageKeys[key];

    // Fallback: capitalize the key
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
  }

  // Separate price row from feature rows
  const featureRows = data.features.filter((f) => f.key !== 'price');
  const priceRow = data.features.find((f) => f.key === 'price');

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/compare"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('overviewTitle')}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('introTitle', { competitor: data.name })}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {data.description[loc]}
          </p>
        </div>
      </section>

      {/* Detailed Introduction */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {t(`detailedIntro.${slug}`)}
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t('featureByFeature')}
          </h2>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-muted-foreground py-4 px-5 border-b border-border bg-card w-1/3">
                    {tc('feature')}
                  </th>
                  <th className="text-center text-sm font-semibold py-4 px-5 border-b border-border bg-primary/10 text-primary w-1/3">
                    SSHive
                  </th>
                  <th className="text-center text-sm font-semibold py-4 px-5 border-b border-border bg-card text-foreground w-1/3">
                    {data.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((feature, idx) => (
                  <tr
                    key={feature.key}
                    className={idx % 2 === 0 ? 'bg-card/50' : ''}
                  >
                    <td className="text-sm text-foreground font-medium py-4 px-5 border-b border-border/50">
                      {getFeatureLabel(feature.key)}
                    </td>
                    <td className="text-center py-4 px-5 border-b border-border/50 bg-primary/5">
                      <FeatureValue value={feature.sshive} />
                    </td>
                    <td className="text-center py-4 px-5 border-b border-border/50">
                      <FeatureValue value={feature.competitor} />
                    </td>
                  </tr>
                ))}
                {priceRow && (
                  <tr className="bg-secondary/30">
                    <td className="text-sm text-foreground font-semibold py-4 px-5 border-b border-border/50">
                      {getFeatureLabel('price')}
                    </td>
                    <td className="text-center py-4 px-5 border-b border-border/50 bg-primary/5">
                      <span className="inline-block px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold">
                        {priceRow.sshive as string}
                      </span>
                    </td>
                    <td className="text-center py-4 px-5 border-b border-border/50">
                      <span className="text-sm text-foreground font-medium">
                        {priceRow.competitor as string}
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border-2 border-primary bg-primary/5 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('verdict')}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {data.verdict[loc]}
            </p>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t('whySwitch')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whySwitchReasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('tryFree')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {data.description[loc]}
          </p>
          <div className="mt-8">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              {t('downloadFree')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
