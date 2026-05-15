import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Laptop, Smartphone, Tablet, Mail, ArrowRight } from 'lucide-react';
import { LOCALES, SITE_URL } from '@/lib/constants';
import type { Locale } from '@/lib/constants';
import { ROADMAP, STATUS_LABEL } from '@/lib/seo/roadmap';
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
      ? 'Roadmap SSHive, ce qui arrive ensuite | SSHive'
      : 'SSHive Roadmap, what is coming next | SSHive';
  const description =
    locale === 'fr'
      ? 'Sync iCloud, Mosh, support YubiKey NFC, multi-fenetres iPad, et corrections de bugs. La roadmap publique de SSHive sur Mac, iPhone et iPad, on ecoute vos retours.'
      : 'iCloud sync, Mosh, YubiKey NFC support, multi-window on iPad, and bug fixes. SSHive\'s public roadmap on Mac, iPhone and iPad, we listen to your feedback.';

  return getPageMetadata({
    locale,
    path: '/roadmap',
    title,
    description,
  });
}

const STATUS_STYLE: Record<string, string> = {
  'in-progress': 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  planned: 'border-primary/30 bg-primary/10 text-primary',
  considering: 'border-muted-foreground/30 bg-muted-foreground/10 text-muted-foreground',
};

const PLATFORM_ICON = {
  mac: Laptop,
  iphone: Smartphone,
  ipad: Tablet,
} as const;

const PLATFORM_LABEL = {
  mac: { en: 'Mac', fr: 'Mac' },
  iphone: { en: 'iPhone', fr: 'iPhone' },
  ipad: { en: 'iPad', fr: 'iPad' },
} as const;

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'seoCommon' });

  const title = locale === 'fr' ? 'Roadmap' : 'Roadmap';
  const subtitle =
    locale === 'fr'
      ? 'Ce qui arrive bientot dans SSHive, et les bugs sur lesquels on travaille. Si vous voulez voter pour un item ou en proposer un autre, ecrivez-nous, on ecoute.'
      : 'What is coming to SSHive next, and the bugs we are working on. If you want to vote for an item or propose another one, write to us, we listen.';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: title, href: '/roadmap' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: locale === 'fr' ? 'Roadmap SSHive' : 'SSHive Roadmap',
          description: subtitle,
          url: `${SITE_URL}/${locale}/roadmap`,
          hasPart: ROADMAP.map((item) => ({
            '@type': 'CreativeWork',
            name: item.title[loc],
            description: item.body[loc].split('\n\n')[0],
          })),
        }}
      />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {ROADMAP.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="rounded-xl border border-border bg-card p-6 md:p-8 scroll-mt-24"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug flex-1">
                    {item.title[loc]}
                  </h2>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${STATUS_STYLE[item.status]}`}
                  >
                    {STATUS_LABEL[item.status][loc]}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {item.platforms.map((p) => {
                    const Icon = PLATFORM_ICON[p];
                    return (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        <Icon className="w-3 h-3" />
                        {PLATFORM_LABEL[p][loc]}
                      </span>
                    );
                  })}
                </div>

                <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {item.body[loc]}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {locale === 'fr'
              ? 'Une idee, un vote, un bug ?'
              : 'An idea, a vote, a bug?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {locale === 'fr'
              ? 'On lit chaque message. Si un item de cette page compte pour vous, dites-le, ca aide a prioriser. Si rien ne couvre votre cas, dites-le aussi.'
              : 'We read every message. If an item on this page matters to you, say so, it helps us prioritize. If nothing here covers your case, say that too.'}
          </p>
          <a
            href="mailto:contact@netmesafe.com?subject=SSHive%20roadmap%20feedback"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            contact@netmesafe.com
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            {locale === 'fr' ? (
              <>
                Voir aussi le{' '}
                <Link href="/changelog" className="text-primary hover:underline">
                  changelog
                </Link>{' '}
                pour ce qui est deja livre.
              </>
            ) : (
              <>
                See also the{' '}
                <Link href="/changelog" className="text-primary hover:underline">
                  changelog
                </Link>{' '}
                for what has shipped already.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-6">
            {t('tryFreeDescription')}
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            {t('downloadCta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
