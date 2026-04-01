import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import { APP_VERSION, APP_STORE_URL } from '@/lib/constants';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function DownloadCTA() {
  const t = useTranslations('download');

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(122,162,247,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-[30%] w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(42,195,222,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline */}
        <ScrollReveal>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {t('title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </ScrollReveal>

        {/* Download options */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(122,162,247,0.35)] hover:-translate-y-px text-base"
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-px" />
              {t('dmgButton', { version: APP_VERSION })}
            </a>
          </div>
        </ScrollReveal>

        {/* Trust signals */}
        <ScrollReveal delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              {t('noAccount')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              {t('noAds')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              {t('keychainSecurity')}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
