import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();
  const fr = locale === 'fr';

  return (
    <footer className="relative border-t border-white/[0.04] mt-auto">
      {/* Subtle glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">{t('product')}</h3>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('features')}</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('pricing')}</Link></li>
              <li><Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('download')}</Link></li>
              <li><Link href="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{t('changelog')}</Link></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">{t('resources')}</h3>
            <ul className="space-y-3">
              <li><Link href="/use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('useCases')}</Link></li>
              <li><Link href="/how-to" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('howTo')}</Link></li>
              <li><Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('docs')}</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{nav('blog')}</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{t('about')}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{t('contact')}</Link></li>
            </ul>
          </div>
          {/* Best for Mac + Compare */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">{fr ? 'Pour Mac' : 'For Mac'}</h3>
            <ul className="space-y-3">
              <li><Link href={'/best-ssh-client-for-mac' as '/best-ssh-client-for-mac'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'Meilleur client SSH Mac' : 'Best SSH client for Mac'}</Link></li>
              <li><Link href={'/best-sftp-client-for-mac' as '/best-sftp-client-for-mac'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'Meilleur client SFTP Mac' : 'Best SFTP client for Mac'}</Link></li>
              <li><Link href={'/best-rdp-client-for-mac' as '/best-rdp-client-for-mac'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'Meilleur client RDP Mac' : 'Best RDP client for Mac'}</Link></li>
              <li><Link href={'/best-vnc-client-for-mac' as '/best-vnc-client-for-mac'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'Meilleur client VNC Mac' : 'Best VNC viewer for Mac'}</Link></li>
              <li><Link href="/compare/termius" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">vs Termius</Link></li>
              <li><Link href="/compare/mobaxterm" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">vs MobaXterm</Link></li>
            </ul>
          </div>

          {/* Apple ecosystem (iOS + integrations) */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">{fr ? 'iPhone et iPad' : 'iPhone & iPad'}</h3>
            <ul className="space-y-3">
              <li><Link href={'/ios-ssh-client' as '/ios-ssh-client'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'Client SSH iOS' : 'iOS SSH client'}</Link></li>
              <li><Link href={'/ios-sftp-app' as '/ios-sftp-app'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'App SFTP iOS' : 'iOS SFTP app'}</Link></li>
              <li><Link href={'/iphone-remote-desktop' as '/iphone-remote-desktop'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'RDP iPhone' : 'iPhone RDP'}</Link></li>
              <li><Link href={'/iphone-vnc-client' as '/iphone-vnc-client'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'VNC iPhone' : 'iPhone VNC'}</Link></li>
              <li><Link href={'/iphone-vpn-client' as '/iphone-vpn-client'} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'VPN iPhone' : 'iPhone VPN'}</Link></li>
              <li><Link href="/integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{fr ? 'Integrations IA' : 'AI integrations'}</Link></li>
            </ul>
          </div>
          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-5 uppercase tracking-wider">{t('community')}</h3>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/company/netmesafe/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{t('linkedin')}</a></li>
              <li><a href="mailto:contact@netmesafe.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{t('email')}</a></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">{t('support')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Logo mark */}
            <svg width="20" height="20" viewBox="0 0 1024 1024" className="rounded opacity-40">
              <rect width="1024" height="1024" rx="228" fill="#141414" />
              <path d="M280 340 L480 512 L280 684" stroke="#7aa2f7" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="540" y1="684" x2="760" y2="684" stroke="#7aa2f7" strokeWidth="64" strokeLinecap="round" opacity="0.8" />
            </svg>
            <a
              href="https://netmesafe.com/?utm_source=sshive.app&utm_medium=website&utm_campaign=footer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t('madeBy')}
            </a>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-muted-foreground border border-white/[0.04]">{t('license')}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
