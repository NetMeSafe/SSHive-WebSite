import { Link } from '@/i18n/navigation';
import {
  Download,
  Activity,
  Route,
  Globe,
  Search,
  Mail,
  ShieldAlert,
  Network,
  CheckCircle,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import type { NetworkToolSEO } from '@/lib/seo/network-tools';
import { getNetworkTool } from '@/lib/seo/network-tools';
import { BreadcrumbSchema } from './BreadcrumbSchema';
import { FAQSchema } from './FAQSchema';
import { FAQSection } from './FAQSection';
import { ArticleSchema } from './ArticleSchema';
import { HowToSchema } from './HowToSchema';

const ICONS = {
  Activity,
  Route,
  Globe,
  Search,
  Mail,
  ShieldAlert,
  Network,
} as const;

interface Props {
  data: NetworkToolSEO;
  locale: string;
  loc: Locale;
  ctaButton: string;
  faqHeading: string;
}

export function NetworkToolPageRenderer({
  data,
  locale,
  loc,
  ctaButton,
  faqHeading,
}: Props) {
  const isHub = data.slug === '';
  const path = isHub ? '/network-tools' : `/network-tools/${data.slug}`;
  const url = `${SITE_URL}/${locale}${path}`;
  const Icon = ICONS[data.iconName];
  const fr = loc === 'fr';

  const faqItems = data.faq.map((q) => ({
    question: q.question[loc],
    answer: q.answer[loc],
  }));

  const breadcrumb = [
    { name: 'SSHive', href: '' },
    {
      name: fr ? 'Outils réseau' : 'Network tools',
      href: '/network-tools' as const,
    },
    ...(isHub ? [] : [{ name: data.h1[loc], href: path }]),
  ];

  const related = data.relatedTools
    .map((slug) => getNetworkTool(slug))
    .filter((t): t is NetworkToolSEO => Boolean(t));

  return (
    <>
      <BreadcrumbSchema locale={locale} items={breadcrumb} />
      <FAQSchema items={faqItems} />
      <ArticleSchema
        headline={data.h1[loc]}
        description={data.hero[loc]}
        url={url}
      />
      <HowToSchema
        name={data.h1[loc]}
        description={data.hero[loc]}
        steps={data.steps.map((s) => ({
          name: s.title[loc],
          text: s.body[loc],
        }))}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={isHub ? '/' : '/network-tools'}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← {isHub ? (fr ? 'Accueil' : 'Home') : fr ? 'Outils réseau' : 'Network tools'}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
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
            {!isHub && (
              <Link
                href="/network-tools"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-secondary transition-colors"
              >
                {fr ? 'Tous les outils réseau' : 'All network tools'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
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

      {/* Capabilities */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {fr ? 'Ce que fait SSHive' : 'What SSHive does'}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {data.capabilities.map((cap, idx) => (
              <article key={idx} className="rounded-xl border border-border bg-card p-6">
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

      {/* Steps */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {fr ? 'Comment faire, étape par étape' : 'How to do it, step by step'}
          </h2>
          <ol className="space-y-6">
            {data.steps.map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {step.title[loc]}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.body[loc]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Interpret — the differentiating section */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-accent/25 bg-accent/5 p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-start gap-3">
              <Lightbulb className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              {data.interpret.title[loc]}
            </h2>
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {data.interpret.body[loc]}
            </div>
          </div>
        </div>
      </section>

      <FAQSection heading={faqHeading} items={faqItems} />

      {/* Deep dive */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {data.deepDive.title[loc]}
          </h2>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {data.deepDive.body[loc]}
          </div>
        </div>
      </section>

      {/* Related tools */}
      {related.length > 0 && (
        <section className="py-12 md:py-16 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              {fr ? 'Outils liés' : 'Related tools'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/network-tools/${tool.slug}` as `/network-tools/${string}`}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {tool.h1[loc]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {tool.hero[loc]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
