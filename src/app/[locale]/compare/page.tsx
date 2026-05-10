import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Check, X, Minus, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { OVERVIEW_COMPETITORS, OVERVIEW_FEATURES } from '@/lib/competitors';
import type { OverviewCellValue } from '@/lib/competitors';
import { RelatedLinks } from '@/components/seo/RelatedLinks';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'comparePage' });

  return {
    title: t('overviewMetaTitle'),
    description: t('overviewMetaDescription'),
    alternates: {
      canonical: `/${locale}/compare`,
      languages: { en: '/en/compare', fr: '/fr/compare' },
    },
  };
}

function CellIcon({ value }: { value: OverviewCellValue }) {
  switch (value) {
    case 'yes':
      return <Check className="w-5 h-5 text-success mx-auto" />;
    case 'no':
      return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
    case 'partial':
      return <Minus className="w-5 h-5 text-yellow-500 mx-auto" />;
  }
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'comparePage' });
  const tc = await getTranslations({ locale, namespace: 'comparison' });
  const tCommon = await getTranslations({ locale, namespace: 'seoCommon' });

  const whySwitchReasons = [
    t('whySwitchReasons.allInOne'),
    t('whySwitchReasons.securePrivate'),
    t('whySwitchReasons.nativeMac'),
    t('whySwitchReasons.oneTimePrice'),
    t('whySwitchReasons.aiIntegration'),
    t('whySwitchReasons.appStore'),
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {t('overviewTitle')}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('overviewSubtitle')}
          </p>
        </div>
      </section>

      {/* Master Comparison Table */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-muted-foreground py-4 px-4 border-b border-border bg-card sticky left-0 z-10 min-w-[160px]">
                    {tc('feature')}
                  </th>
                  {OVERVIEW_COMPETITORS.map((product) => (
                    <th
                      key={product.name}
                      className={`text-center text-sm font-semibold py-4 px-3 border-b border-border min-w-[100px] ${
                        product.slug === null
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground bg-card'
                      }`}
                    >
                      {product.slug !== null ? (
                        <Link
                          href={`/compare/${product.slug}` as '/compare/mobaxterm'}
                          className="hover:text-primary transition-colors"
                        >
                          {product.name}
                        </Link>
                      ) : (
                        <span>{product.name}</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {OVERVIEW_FEATURES.map((featureKey, rowIdx) => (
                  <tr
                    key={featureKey}
                    className={rowIdx % 2 === 0 ? 'bg-card/50' : ''}
                  >
                    <td className="text-sm text-foreground font-medium py-4 px-4 border-b border-border/50 sticky left-0 z-10 bg-inherit">
                      {tc(featureKey)}
                    </td>
                    {OVERVIEW_COMPETITORS.map((product) => (
                      <td
                        key={product.name}
                        className={`text-center py-4 px-3 border-b border-border/50 ${
                          product.slug === null ? 'bg-primary/5' : ''
                        }`}
                      >
                        <CellIcon value={product.data[rowIdx]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Comparison Links */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('featureByFeature')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OVERVIEW_COMPETITORS.filter((c) => c.slug !== null).map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/compare/${competitor.slug}` as '/compare/mobaxterm'}
                className="group flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div>
                  <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    SSHive vs {competitor.name}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">
            {t('whySwitch')}
          </h2>
          <div className="space-y-4">
            {whySwitchReasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        heading={tCommon('exploreMore')}
        items={[
          {
            href: '/best-ssh-client-for-mac',
            title: tCommon('bestSshTitle'),
            description: tCommon('bestSshDesc'),
          },
          {
            href: '/best-sftp-client-for-mac',
            title: tCommon('bestSftpTitle'),
            description: tCommon('bestSftpDesc'),
          },
          {
            href: '/use-cases',
            title: tCommon('useCasesHubTitle'),
            description: tCommon('useCasesHubDesc'),
          },
          {
            href: '/how-to',
            title: tCommon('howToHubTitle'),
            description: tCommon('howToHubDesc'),
          },
          {
            href: '/features',
            title: tCommon('featuresHubTitle'),
            description: tCommon('featuresHubDesc'),
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('downloadFree')}
          </h2>
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
