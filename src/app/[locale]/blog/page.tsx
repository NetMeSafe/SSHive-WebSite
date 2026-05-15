import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PenLine, Mail } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'blog' });

  return getPageMetadata({
    locale,
    path: '/blog',
    title: t('title'),
    description: t('metaDescription'),
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/blog' },
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

      {/* Coming soon */}
      <section className="mt-16 bg-card border border-border rounded-xl p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
          <PenLine className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          {t('comingSoonTitle')}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
          {t('comingSoonText')}
        </p>
      </section>

      {/* Subscribe */}
      <section className="mt-16 text-center">
        <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-xl font-bold text-foreground">
          {t('subscribeTitle')}
        </h2>
        <div className="mt-6 max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder={t('subscribePlaceholder')}
            className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            {t('subscribeButton')}
          </button>
        </div>
      </section>
    </div>
    </>
  );
}
