import { Link } from '@/i18n/navigation';
import { Download, Terminal, FolderOpen, Monitor, Eye, Shield, CheckCircle, ArrowRight, Smartphone, Tablet } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import type { IosFeatureSEO } from '@/lib/seo/ios-pages';
import { BreadcrumbSchema } from './BreadcrumbSchema';
import { FAQSchema } from './FAQSchema';
import { FAQSection } from './FAQSection';
import { ArticleSchema } from './ArticleSchema';

const ICONS = {
  Terminal,
  FolderOpen,
  Monitor,
  Eye,
  Shield,
} as const;

interface Props {
  data: IosFeatureSEO;
  locale: string;
  loc: Locale;
  homeBreadcrumb: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  faqHeading: string;
}

export function IosFeaturePageRenderer({
  data,
  locale,
  loc,
  homeBreadcrumb,
  ctaTitle,
  ctaDescription,
  ctaButton,
  faqHeading,
}: Props) {
  const url = `${SITE_URL}/${locale}/${data.slug}`;
  const faqItems = data.faq.map((q) => ({
    question: q.question[loc],
    answer: q.answer[loc],
  }));
  const Icon = ICONS[data.iconName];

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: data.h1[loc], href: `/${data.slug}` },
        ]}
      />
      <FAQSchema items={faqItems} />
      <ArticleSchema headline={data.h1[loc]} description={data.hero[loc]} url={url} />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← {homeBreadcrumb}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary">
              <Smartphone className="w-3.5 h-3.5" />
              <Tablet className="w-3.5 h-3.5" />
              iOS 17+ · iPadOS 17+
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {data.h1[loc]}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {data.hero[loc]}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(122,162,247,0.3)] hover:-translate-y-px transition-all"
            >
              <Download className="w-5 h-5" />
              {ctaButton}
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-secondary transition-colors"
            >
              {locale === 'fr' ? 'Voir toutes les fonctionnalites' : 'See all features'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {data.intro[loc]}
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {locale === 'fr' ? 'Ce qui marche sur iPhone et iPad' : 'What works on iPhone and iPad'}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {data.capabilities.map((cap, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  {cap.title[loc]}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {cap.body[loc]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why SSHive */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {data.whyHeading[loc]}
          </h2>
          <div className="space-y-5">
            {data.why.map((w, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-primary/20 bg-primary/5 p-6"
              >
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {w.title[loc]}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {w.body[loc]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitors */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {data.competitorsHeading[loc]}
          </h2>
          <div className="space-y-4">
            {data.competitors.map((c, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{c.pricing[loc]}</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {c.pitch[loc]}
                </p>
                {c.compareSlug && (
                  <Link
                    href={`/compare/${c.compareSlug}` as `/compare/${string}`}
                    className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
                  >
                    {locale === 'fr'
                      ? `Comparaison detaillee SSHive vs ${c.name}`
                      : `Detailed SSHive vs ${c.name} comparison`}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dive */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {data.deepDiveHeading[loc]}
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {data.deepDive[loc]}
          </div>
        </div>
      </section>

      <FAQSection heading={faqHeading} items={faqItems} />

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {ctaDescription}
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            {ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
