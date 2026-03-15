import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Download } from 'lucide-react';
import { APP_VERSION, BREW_COMMAND } from '@/lib/constants';
import { CopyButton } from '@/components/ui/CopyButton';

export function DownloadCTA() {
  const t = useTranslations('download');

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #1a1b26, #24283b)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          {t('subtitle')}
        </p>

        {/* Download options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {/* DMG download */}
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
          >
            <Download className="w-5 h-5" />
            {t('dmgButton', { version: APP_VERSION })}
          </Link>
        </div>

        {/* Homebrew command */}
        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-lg px-4 py-2.5 font-mono text-sm text-foreground">
          <span className="text-muted-foreground select-none">$</span>
          <code className="select-all">{BREW_COMMAND}</code>
          <CopyButton text={BREW_COMMAND} />
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>{t('noAccount')}</span>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <span>{t('noAds')}</span>
          <span className="hidden sm:inline" aria-hidden="true">|</span>
          <span>{t('keychainSecurity')}</span>
        </div>
      </div>
    </section>
  );
}
