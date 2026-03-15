import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Cpu, Download } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: '/en/about', fr: '/fr/about' },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });

  const techItems: string[] = t.raw('techItems');

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        {t('title')}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        {t('description')}
      </p>

      {/* Story */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">
          {t('storyTitle')}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {t('storyText')}
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <Cpu className="w-6 h-6 text-primary" />
          {t('techTitle')}
        </h2>
        <ul className="mt-6 space-y-4">
          {techItems.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground leading-relaxed"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTAs */}
      <section className="mt-16 flex flex-col sm:flex-row gap-4">
        <Link
          href="/download"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <Download className="w-5 h-5" />
          {t('downloadCta')}
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
        >
          {t('contactCta')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
