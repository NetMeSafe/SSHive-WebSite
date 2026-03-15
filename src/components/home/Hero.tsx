import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Download, ArrowRight } from 'lucide-react';
import { APP_VERSION } from '@/lib/constants';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #1a1b26, #24283b)' }}
    >
      {/* Background terminal prompt decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      >
        <pre className="font-mono text-[10vw] leading-tight text-foreground whitespace-nowrap">
          <span>{'>'}</span>
          <span className="animate-blink">_</span>
        </pre>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44 flex flex-col items-center text-center">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground">
          <span>{t('version', { version: APP_VERSION })}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl leading-tight">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          {t('subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
          >
            <Download className="w-5 h-5" />
            {t('downloadCta')}
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors text-base"
          >
            <ArrowRight className="w-5 h-5" />
            {t('featuresCta')}
          </Link>
        </div>

        {/* Universal Binary note */}
        <p className="mt-6 text-sm text-muted-foreground">
          {t('universalBinary')}
        </p>
      </div>

      {/* CSS blinking cursor animation */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
