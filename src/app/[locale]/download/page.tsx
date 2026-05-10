import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle, Mail, Smartphone, Tablet, Laptop, ExternalLink } from 'lucide-react';
import { DownloadButton } from '@/components/download/DownloadButton';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { APP_VERSION, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'download' });

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/download`,
      languages: { en: '/en/download', fr: '/fr/download' },
    },
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'download' });

  const trustSignals = [
    t('noAccount'),
    t('noAds'),
    t('keychainSecurity'),
    t('upgradeLater'),
  ];

  return (
    <>
      <SoftwareApplicationSchema />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {t('title')}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            {t('subtitle')}
          </p>

          {/* Primary CTA */}
          <div className="mt-12">
            <DownloadButton
              label={t('dmgButton', { version: APP_VERSION })}
            />
            <p className="mt-4 text-sm text-muted-foreground">
              {t('dmgSubtitle')}
            </p>
          </div>

        </div>
      </section>

      {/* iOS / iPadOS section */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <Tablet className="w-5 h-5 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-wider text-primary">{t('iosBadge')}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t('iosSectionTitle')}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                  {t('iosSectionDescription')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={APP_STORE_UNIVERSAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  {t('iosCta')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Platform split */}
            <div className="mt-8 pt-6 border-t border-primary/10 space-y-3">
              <h3 className="text-sm font-semibold text-foreground mb-3">{t('platformSplitTitle')}</h3>
              <div className="flex items-start gap-3 text-sm">
                <Laptop className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{t('platformSplitMacAll')}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Smartphone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{t('platformSplitIos')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground">
            {t('emailTitle')}
          </h2>
          <div className="mt-6 flex gap-3">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              {t('emailSubscribe')}
            </button>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            {t('systemReq')}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t('systemReqDetails')}
          </p>
        </div>
      </section>
    </>
  );
}
