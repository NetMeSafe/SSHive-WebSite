import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Bot, Laptop } from 'lucide-react';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { INTEGRATIONS } from '@/lib/seo/integrations';
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

  const title =
    locale === 'fr'
      ? 'Integrations IA — Claude Code, Cursor, Claude Desktop | SSHive'
      : 'AI Integrations — Claude Code, Cursor, Claude Desktop | SSHive';
  const description =
    locale === 'fr'
      ? 'SSHive expose un serveur MCP local sur macOS pour Claude Code, Cursor et Claude Desktop. Guides de setup pour chaque client, 100 % local, Bearer token.'
      : 'SSHive exposes a local MCP server on macOS for Claude Code, Cursor and Claude Desktop. Per-client setup guides, 100% local, Bearer-token auth.';

  return getPageMetadata({
    locale,
    path: '/integrations',
    title,
    description,
  });
}

export default async function IntegrationsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });

  const title = locale === 'fr' ? 'Integrations IA' : 'AI Integrations';
  const subtitle =
    locale === 'fr'
      ? 'Connectez Claude Code, Cursor ou Claude Desktop a vos sessions SSH et SFTP via le serveur MCP integre de SSHive — uniquement sur macOS, 100 % local.'
      : 'Connect Claude Code, Cursor or Claude Desktop to your live SSH and SFTP sessions through SSHive\'s built-in MCP server — macOS only, 100% local.';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: title, href: '/integrations' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: title,
          description: subtitle,
          url: `${SITE_URL}/${locale}/integrations`,
          hasPart: INTEGRATIONS.map((i) => ({
            '@type': 'HowTo',
            name: i.h1[loc],
            url: `${SITE_URL}/${locale}/integrations/${i.slug}`,
          })),
        }}
      />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-6">
            <Bot className="w-3.5 h-3.5" />
            <Laptop className="w-3.5 h-3.5" />
            {locale === 'fr' ? 'macOS uniquement (MCP)' : 'macOS only (MCP)'}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTEGRATIONS.map((i) => (
              <Link
                key={i.slug}
                href={`/integrations/${i.slug}` as `/integrations/${string}`}
                className="group block rounded-xl border border-border bg-card hover:border-primary/40 transition-colors p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-start justify-between gap-3">
                  <span>{i.clientName}</span>
                  <ArrowRight className="w-4 h-4 mt-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </h2>
                <p className="mt-2 text-xs text-muted-foreground">{i.clientTagline[loc]}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {i.metaDescription[loc]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('tryFreeTitle')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('tryFreeDescription')}
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {t('downloadCta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
