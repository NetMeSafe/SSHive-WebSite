import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Tag } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'changelog' });

  return getPageMetadata({
    locale,
    path: '/changelog',
    title: t('title'),
    description: t('metaDescription'),
  });
}

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'changelog' });

  const v100Features: string[] = t.raw('v100.features');

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/changelog' },
        ]}
      />
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        {t('title')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        {t('subtitle')}
      </p>

      {/* Version 1.0.0 */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Tag className="w-4 h-4 text-primary" />
            <span className="font-mono font-bold text-primary">
              {t('v100.version')}
            </span>
          </div>
          <span className="text-muted-foreground">
            {t('v100.date')}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t('v100.title')}
        </h2>

        <ul className="space-y-3">
          {v100Features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  );
}
