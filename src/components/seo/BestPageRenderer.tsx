import { Link } from '@/i18n/navigation';
import { Download, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import type { BestPageSEO } from '@/lib/seo/best-pages';
import { BreadcrumbSchema } from './BreadcrumbSchema';
import { FAQSchema } from './FAQSchema';
import { FAQSection } from './FAQSection';
import { ArticleSchema } from './ArticleSchema';

interface Props {
  data: BestPageSEO;
  locale: string;
  loc: Locale;
  homeBreadcrumb: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  faqHeading: string;
}

export function BestPageRenderer({
  data,
  locale,
  loc,
  homeBreadcrumb,
  ctaTitle,
  ctaDescription,
  ctaButton,
  faqHeading,
}: Props) {
  const faqItems = data.faq.map((q) => ({
    question: q.question[loc],
    answer: q.answer[loc],
  }));

  const url = `${SITE_URL}/${locale}/${data.slug}`;

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
      <ArticleSchema
        headline={data.h1[loc]}
        description={data.hero[loc]}
        url={url}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← {homeBreadcrumb}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {data.h1[loc]}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {data.hero[loc]}
          </p>
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

      {/* Our pick (rank #1) */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-7 h-7 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                #1 — {data.ourPickHeading[loc]}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {data.ourPickBody[loc]}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-5 h-5" />
                {ctaButton}
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                {locale === 'fr' ? 'Voir les fonctionnalites' : 'See features'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shortlist */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {data.shortlistHeading[loc]}
          </h2>
          <div className="space-y-6">
            {data.shortlist.map((entry) => (
              <article
                key={entry.rank}
                className="rounded-xl border border-border bg-card p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-foreground font-semibold flex items-center justify-center text-sm">
                    #{entry.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {entry.name}
                      </h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {entry.pricing[loc]}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {entry.bestFor[loc]}
                    </p>
                    {entry.compareSlug && (
                      <Link
                        href={`/compare/${entry.compareSlug}` as `/compare/${string}`}
                        className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
                      >
                        {locale === 'fr'
                          ? `Comparaison detaillee SSHive vs ${entry.name}`
                          : `Detailed SSHive vs ${entry.name} comparison`}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {data.reasonsHeading[loc]}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {data.reasons.map((r, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {r.title[loc]}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {r.body[loc]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
