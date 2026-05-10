import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { USE_CASES } from '@/lib/seo/use-cases';
import { RelatedLinks } from '@/components/seo/RelatedLinks';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seoCommon.useCases' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/use-cases`,
      languages: {
        en: '/en/use-cases',
        fr: '/fr/use-cases',
      },
    },
    openGraph: {
      type: 'website',
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${SITE_URL}/${locale}/use-cases`,
    },
  };
}

export default async function UseCasesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon.useCases' });
  const tCommon = await getTranslations({ locale, namespace: 'seoCommon' });

  return (
    <>
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
            {USE_CASES.map((u) => (
              <Link
                key={u.slug}
                href={`/use-cases/${u.slug}`}
                className="group block rounded-xl border border-border bg-card hover:border-primary/40 transition-colors p-6"
              >
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-start justify-between gap-3">
                  <span>{u.h1[loc]}</span>
                  <ArrowRight className="w-4 h-4 mt-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {u.hero[loc]}
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
            href: '/how-to',
            title: tCommon('howToHubTitle'),
            description: tCommon('howToHubDesc'),
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
