import { Link } from '@/i18n/navigation';
import { Download, ArrowRight, CheckCircle, Bot, Laptop } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import type { IntegrationSEO } from '@/lib/seo/integrations';
import { BreadcrumbSchema } from './BreadcrumbSchema';
import { FAQSchema } from './FAQSchema';
import { FAQSection } from './FAQSection';
import { ArticleSchema } from './ArticleSchema';
import { CopyButton } from '@/components/ui/CopyButton';

interface Props {
  data: IntegrationSEO;
  locale: string;
  loc: Locale;
  homeBreadcrumb: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  faqHeading: string;
  integrationsBreadcrumb: string;
}

export function IntegrationPageRenderer({
  data,
  locale,
  loc,
  homeBreadcrumb,
  ctaTitle,
  ctaDescription,
  ctaButton,
  faqHeading,
  integrationsBreadcrumb,
}: Props) {
  const url = `${SITE_URL}/${locale}/integrations/${data.slug}`;
  const faqItems = data.faq.map((q) => ({
    question: q.question[loc],
    answer: q.answer[loc],
  }));

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: integrationsBreadcrumb, href: '/integrations' },
          { name: data.clientName, href: `/integrations/${data.slug}` },
        ]}
      />
      <FAQSchema items={faqItems} />
      <ArticleSchema headline={data.h1[loc]} description={data.hero[loc]} url={url} />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← {integrationsBreadcrumb}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
              <Bot className="w-7 h-7 text-indigo-400" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary">
              <Laptop className="w-3.5 h-3.5" />
              {locale === 'fr' ? 'macOS uniquement' : 'macOS only'}
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-2">
            {data.clientTagline[loc]}
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
              href="/mcp"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-secondary transition-colors"
            >
              {locale === 'fr' ? 'Voir la page MCP' : 'See the MCP overview'}
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

      {/* Steps */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {locale === 'fr' ? `Setup ${data.clientName} avec SSHive en 4 etapes` : `Set up ${data.clientName} with SSHive in 4 steps`}
          </h2>
          <ol className="space-y-6">
            {data.steps.map((step, idx) => (
              <li key={idx} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title[loc]}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.body[loc]}
                    </p>
                    {step.code && (
                      <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] overflow-hidden">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
                          <span className="text-xs font-medium text-muted-foreground">
                            {locale === 'fr' ? 'A copier' : 'Copy this'}
                          </span>
                          <CopyButton text={step.code} />
                        </div>
                        <pre className="p-4 text-xs font-mono text-muted-foreground overflow-x-auto leading-relaxed whitespace-pre">
                          {step.code}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Examples */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {data.examplesHeading[loc]}
          </h2>
          <div className="space-y-5">
            {data.examples.map((ex, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-6">
                <div className="text-sm text-primary mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {locale === 'fr' ? 'Vous demandez' : 'You ask'}
                </div>
                <p className="text-foreground italic mb-4 leading-relaxed">{ex.prompt[loc]}</p>
                <div className="text-sm text-muted-foreground mb-1">
                  {locale === 'fr' ? 'Ce qui se passe' : 'What happens'}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{ex.behaviour[loc]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {data.whyHeading[loc]}
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {data.why[loc]}
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
