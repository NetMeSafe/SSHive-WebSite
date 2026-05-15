import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AppStoreLink } from '@/components/download/AppStoreLink';

export function PricingPreview() {
  const t = useTranslations('pricing');

  const freeFeatures = t.raw('free.features') as string[];
  const proFeatures = t.raw('pro.features') as string[];

  return (
    <section className="relative py-14 md:py-20">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(122,162,247,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="section-label mb-4 block">Pricing</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free card */}
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3
                  className="text-xl font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {t('free.name')}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-4xl font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {t('free.price')}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    / {t('free.period')}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {freeFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/download"
                className="block text-center border border-border/50 text-foreground px-6 py-3 rounded-xl font-medium hover:bg-white/5 hover:border-primary/30 transition-all duration-300"
              >
                {t('free.cta')}
              </Link>
            </div>
          </ScrollReveal>

          {/* Pro card */}
          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl p-8 flex flex-col h-full border border-primary/30 bg-gradient-to-b from-primary/[0.06] to-transparent backdrop-blur-sm">
              {/* Glow effect behind card */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-50 blur-sm -z-10" />

              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(122,162,247,0.3)]">
                  {t('pro.badge')}
                </span>
              </div>

              <div className="mb-6">
                <h3
                  className="text-xl font-semibold text-foreground"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {t('pro.name')}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className="text-4xl font-bold gradient-text"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {t('pro.price')}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    / {t('pro.period')}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {proFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AppStoreLink className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(122,162,247,0.2)]">
                {t('pro.cta')}
              </AppStoreLink>
            </div>
          </ScrollReveal>
        </div>

        {/* No subscription note */}
        <ScrollReveal delay={200}>
          <p className="mt-10 text-center text-muted-foreground text-sm">
            {t('noSubscription')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
