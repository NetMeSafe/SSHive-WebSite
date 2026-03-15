import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Shield, Eye, Cookie, Lock } from 'lucide-react';

const SECTIONS = [
  { key: 'noData', icon: Shield, color: 'text-green-400', gradient: 'from-green-500/20 to-emerald-500/20' },
  { key: 'noAnalytics', icon: Eye, color: 'text-blue-400', gradient: 'from-blue-500/20 to-cyan-500/20' },
  { key: 'noCookies', icon: Cookie, color: 'text-amber-400', gradient: 'from-amber-500/20 to-orange-500/20' },
  { key: 'keychain', icon: Lock, color: 'text-purple-400', gradient: 'from-purple-500/20 to-violet-500/20' },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('title'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: '/en/privacy', fr: '/fr/privacy' },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        {t('title')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        {t('subtitle')}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {t('lastUpdated')}
      </p>

      {/* Sections */}
      <div className="mt-12 space-y-10">
        {SECTIONS.map(({ key, icon: Icon, color, gradient }) => (
          <section key={key} className="flex items-start gap-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 mt-1`}>
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                {t(`sections.${key}Title`)}
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {t(`sections.${key}Text`)}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <section className="mt-16">
        <p className="text-muted-foreground">
          {t('contactNote')}
        </p>
      </section>
    </div>
  );
}
