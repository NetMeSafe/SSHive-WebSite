import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Clock } from 'lucide-react';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { HOW_TOS } from '@/lib/seo/how-tos';
import { RelatedLinks } from '@/components/seo/RelatedLinks';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { JsonLd } from '@/components/seo/JsonLd';
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
  const t = await getTranslations({ locale, namespace: 'seoCommon.howTo' });

  return getPageMetadata({
    locale,
    path: '/how-to',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function HowToIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon.howTo' });
  const tCommon = await getTranslations({ locale, namespace: 'seoCommon' });

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/how-to' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: t('title'),
          description: t('subtitle'),
          url: `${SITE_URL}/${locale}/how-to`,
          hasPart: HOW_TOS.map((h) => ({
            '@type': 'HowTo',
            name: h.h1[loc],
            url: `${SITE_URL}/${locale}/how-to/${h.slug}`,
            totalTime: `PT${h.estimatedMinutes}M`,
          })),
        }}
      />
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOW_TOS.map((h) => (
              <Link
                key={h.slug}
                href={`/how-to/${h.slug}`}
                className="group block rounded-xl border border-border bg-card hover:border-primary/40 transition-colors p-6"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  {h.estimatedMinutes} {tCommon('minutes')}
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-start justify-between gap-3">
                  <span>{h.h1[loc]}</span>
                  <ArrowRight className="w-4 h-4 mt-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {h.hero[loc]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        heading={tCommon('exploreMore')}
        items={[
          {
            href: '/use-cases',
            title: tCommon('useCasesHubTitle'),
            description: tCommon('useCasesHubDesc'),
          },
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
            href: '/compare',
            title: tCommon('compareHubTitle'),
            description: tCommon('compareHubDesc'),
          },
          {
            href: '/features',
            title: tCommon('featuresHubTitle'),
            description: tCommon('featuresHubDesc'),
          },
        ]}
      />
    </>
  );
}
