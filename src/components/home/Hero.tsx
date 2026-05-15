import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Download, ArrowRight, Laptop, Smartphone, Tablet } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { APP_STORE_URL } from '@/lib/constants';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden pt-16">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-0 right-[10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(122,162,247,0.08)_0%,transparent_70%)] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(42,195,222,0.06)_0%,transparent_70%)] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-[30%] left-[50%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-4s' }} />

      {/* Background terminal prompt decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none"
        aria-hidden="true"
      >
        <pre className="font-mono text-[12vw] leading-tight text-foreground whitespace-nowrap">
          <span>{'>'}</span>
          <span className="animate-blink">_</span>
        </pre>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-16 lg:pb-20 flex flex-col items-center text-center z-10">
        {/* Headline */}
        <ScrollReveal>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-5xl leading-[1.05] tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {t('title')}
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={100}>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </ScrollReveal>

        {/* Platform badges */}
        <ScrollReveal delay={150}>
          <div className="mt-7 flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm">
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Laptop className="w-4 h-4 text-primary" />
                Mac
              </span>
              <span className="text-muted-foreground/60">·</span>
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Smartphone className="w-4 h-4 text-primary" />
                iPhone
              </span>
              <span className="text-muted-foreground/60">·</span>
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Tablet className="w-4 h-4 text-primary" />
                iPad
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{t('platformsHint')}</p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={200}>
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(122,162,247,0.3)] hover:-translate-y-px text-base"
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-px" />
              {t('downloadCta')}
            </a>
            <Link
              href="/features"
              className="group inline-flex items-center gap-2 border border-border/50 text-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-white/5 hover:border-primary/30 transition-all duration-300 text-base"
            >
              {t('featuresCta')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* macOS Terminal Preview */}
        <ScrollReveal delay={300} scale>
          <div className="mt-10 md:mt-14 w-full max-w-3xl mx-auto">
            <div className="macos-window shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="macos-window-bar">
                <span className="macos-dot macos-dot-red" />
                <span className="macos-dot macos-dot-yellow" />
                <span className="macos-dot macos-dot-green" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">SSHive, Terminal</span>
              </div>
              <div className="p-6 font-mono text-sm leading-7 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-success">~</span>
                  <span className="text-primary">$</span>
                  <span className="text-foreground">ssh deploy@production.server</span>
                </div>
                <div className="text-muted-foreground mt-1">Connected to production.server (10.0.1.42)</div>
                <div className="text-muted-foreground">Last login: Mon Mar 16 09:14:22 2026</div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-accent">deploy@prod</span>
                  <span className="text-primary">$</span>
                  <span className="text-foreground">docker ps --format &quot;table {'{{'}.Names{'}}'}\t{'{{'}.Status{'}}'}&quot;</span>
                </div>
                <div className="text-muted-foreground mt-1">
                  <div>NAMES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS</div>
                  <div>api-gateway &nbsp;&nbsp;&nbsp;Up 14 days</div>
                  <div>web-frontend &nbsp;&nbsp;Up 14 days</div>
                  <div>postgres-db &nbsp;&nbsp;&nbsp;Up 14 days</div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-accent">deploy@prod</span>
                  <span className="text-primary">$</span>
                  <span className="animate-blink text-foreground">_</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Universal Binary note */}
        <ScrollReveal delay={400}>
          <p className="mt-8 text-sm text-muted-foreground">
            {t('universalBinary')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
