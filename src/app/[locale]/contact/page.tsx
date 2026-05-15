import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, Linkedin, LifeBuoy } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'contact' });

  return getPageMetadata({
    locale,
    path: '/contact',
    title: t('title'),
    description: t('metaDescription'),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: t('title'), href: '/contact' },
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

      {/* Contact cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-lg font-bold text-foreground">
            {t('emailTitle')}
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {t('emailDescription')}
          </p>
          <a
            href="mailto:contact@netmesafe.com"
            className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            contact@netmesafe.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-4">
            <Linkedin className="w-6 h-6 text-sky-400" />
          </div>
          <h2 className="text-lg font-bold text-foreground">
            {t('linkedinTitle')}
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {t('linkedinDescription')}
          </p>
          <a
            href="https://www.linkedin.com/company/netmesafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {t('linkedinHandle')}
          </a>
        </div>

        {/* Support */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center mb-4">
            <LifeBuoy className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-lg font-bold text-foreground">
            {t('supportTitle')}
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {t('supportDescription')}
          </p>
          <a
            href="mailto:contact@netmesafe.com"
            className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            contact@netmesafe.com
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
