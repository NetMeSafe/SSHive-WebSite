import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return getPageMetadata({
    locale,
    path: '/privacy',
    title: t('title'),
    description: t('metaDescription'),
  });
}

const SECTIONS = [
  'intro',
  'dataCollection',
  'localData',
  'website',
  'thirdParty',
  'children',
  'security',
  'retention',
  'rights',
  'changes',
  'contact',
] as const;

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/privacy' },
        ]}
      />
    <div className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        {t('title')}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {t('lastUpdated')}
      </p>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((key, index) => (
          <section key={key}>
            <h2 className="text-xl font-semibold text-foreground">
              {`${index + 1}. ${t(`sections.${key}.title`)}`}
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed whitespace-pre-line">
              {t(`sections.${key}.text`)}
            </p>
          </section>
        ))}
      </div>
    </div>
    </>
  );
}
