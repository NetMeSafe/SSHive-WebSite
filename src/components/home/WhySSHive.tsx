import { useTranslations } from 'next-intl';
import { Apple, Layers, Lock } from 'lucide-react';

const reasons = [
  { key: 'native', icon: Apple },
  { key: 'allInOne', icon: Layers },
  { key: 'secure', icon: Lock },
] as const;

export function WhySSHive() {
  const t = useTranslations('whySSHive');

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.key} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`${reason.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {t(`${reason.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
