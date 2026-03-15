import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('product')}</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{nav('features')}</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{nav('pricing')}</Link></li>
              <li><Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{nav('download')}</Link></li>
              <li><Link href="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('changelog')}</Link></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{nav('docs')}</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{nav('blog')}</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('about')}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          {/* Compare */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('comparisons')}</h3>
            <ul className="space-y-2">
              <li><Link href="/compare/mobaxterm" className="text-sm text-muted-foreground hover:text-foreground transition-colors">vs MobaXterm</Link></li>
              <li><Link href="/compare/iterm2" className="text-sm text-muted-foreground hover:text-foreground transition-colors">vs iTerm2</Link></li>
              <li><Link href="/compare/termius" className="text-sm text-muted-foreground hover:text-foreground transition-colors">vs Termius</Link></li>
              <li><Link href="/compare/putty" className="text-sm text-muted-foreground hover:text-foreground transition-colors">vs PuTTY</Link></li>
            </ul>
          </div>
          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('community')}</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/sshiveapp" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('twitter')}</a></li>
              <li><a href="https://fosstodon.org/@sshive" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('mastodon')}</a></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t('support')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://netmesafe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('madeBy')}
            </a>
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{t('license')}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
