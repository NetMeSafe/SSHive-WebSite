import { useTranslations } from 'next-intl';
import { Apple, Layers, Lock } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const reasons = [
  { key: 'native', icon: Apple, color: 'text-foreground', glow: 'rgba(255,255,255,0.06)' },
  { key: 'allInOne', icon: Layers, color: 'text-primary', glow: 'rgba(122,162,247,0.08)' },
  { key: 'secure', icon: Lock, color: 'text-accent', glow: 'rgba(42,195,222,0.08)' },
] as const;

export function WhySSHive() {
  const t = useTranslations('whySSHive');

  return (
    <section className="relative py-14 md:py-20">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="section-label mb-4 block">Why SSHive</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {t('title')}
            </h2>
          </div>
        </ScrollReveal>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.key} delay={i * 100}>
                <div className="glass-card rounded-2xl p-8 text-center h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110"
                    style={{ background: reason.glow }}
                  >
                    <Icon className={`w-7 h-7 ${reason.color}`} />
                  </div>
                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {t(`${reason.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`${reason.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
