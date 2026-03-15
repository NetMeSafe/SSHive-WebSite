import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Check } from 'lucide-react';

export function PricingPreview() {
  const t = useTranslations('pricing');

  const freeFeatures = t.raw('free.features') as string[];
  const proFeatures = t.raw('pro.features') as string[];

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free card */}
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                {t('free.name')}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {t('free.price')}
                </span>
                <span className="text-muted-foreground text-sm">
                  / {t('free.period')}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/download"
              className="block text-center border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              {t('free.cta')}
            </Link>
          </div>

          {/* Pro card */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 flex flex-col relative">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {t('pro.badge')}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                {t('pro.name')}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {t('pro.price')}
                </span>
                <span className="text-muted-foreground text-sm">
                  / {t('pro.period')}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {proFeatures.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <span
              className="block text-center bg-muted text-muted-foreground px-6 py-3 rounded-lg font-medium cursor-not-allowed"
            >
              {t('pro.cta')}
            </span>
          </div>
        </div>

        {/* No subscription note */}
        <p className="mt-10 text-center text-muted-foreground text-sm">
          {t('noSubscription')}
        </p>
      </div>
    </section>
  );
}
