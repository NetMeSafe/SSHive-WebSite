'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: '/features' as const, label: t('features') },
    { href: '/compare' as const, label: t('compare') },
    { href: '/pricing' as const, label: t('pricing') },
    { href: '/blog' as const, label: t('blog') },
    { href: '/docs' as const, label: t('docs') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-[0_1px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <svg width="32" height="32" viewBox="0 0 1024 1024" className="rounded-lg">
              <defs>
                <linearGradient id="nav-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#141414" />
                  <stop offset="100%" stopColor="#1a1a1a" />
                </linearGradient>
                <linearGradient id="nav-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7aa2f7" />
                  <stop offset="100%" stopColor="#2ac3de" />
                </linearGradient>
              </defs>
              <rect width="1024" height="1024" rx="228" fill="url(#nav-bg)" />
              <path d="M280 340 L480 512 L280 684" stroke="url(#nav-accent)" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="540" y1="684" x2="760" y2="684" stroke="#7aa2f7" strokeWidth="64" strokeLinecap="round" opacity="0.8" />
            </svg>
            <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            SSHive
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={switchLocale}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/5"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            {locale.toUpperCase()}
          </button>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_20px_rgba(122,162,247,0.3)] transition-all duration-300 hover:-translate-y-px"
          >
            <Download className="w-3.5 h-3.5" />
            {t('download')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu — full overlay with blur */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
          <div className="relative px-6 py-8 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-2xl font-medium text-foreground hover:text-primary transition-colors py-3 animate-fade-in-up"
                style={{ fontFamily: 'var(--font-space-grotesk)', animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-border mt-6 space-y-4">
              <button
                onClick={() => { switchLocale(); setMenuOpen(false); }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground py-2 w-full transition-colors"
              >
                <Globe className="w-4 h-4" />
                {locale === 'en' ? 'Francais' : 'English'}
              </button>
              <Link
                href="/download"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_rgba(122,162,247,0.3)] transition-all"
              >
                {t('download')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
