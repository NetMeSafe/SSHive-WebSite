import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle, Mail, AlertTriangle } from 'lucide-react';
import { DownloadButton } from '@/components/download/DownloadButton';
import { CopyButton } from '@/components/ui/CopyButton';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { APP_VERSION, BREW_COMMAND } from '@/lib/constants';

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

          {/* Secondary options */}
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Homebrew */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">{t('or')}</span>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary border border-border font-mono text-sm">
                <code className="text-foreground">{BREW_COMMAND}</code>
                <CopyButton text={BREW_COMMAND} />
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

      {/* Gatekeeper Notice */}
      <section className="py-12 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t('gatekeeperTitle')}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {t('gatekeeperText').split('xattr -cr /Applications/SSHive.app')[0]}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border font-mono text-sm">
                  <code className="text-foreground">xattr -cr /Applications/SSHive.app</code>
                  <CopyButton text="xattr -cr /Applications/SSHive.app" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t('gatekeeperText').split('xattr -cr /Applications/SSHive.app')[1]}
                </p>
              </div>
            </div>
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
