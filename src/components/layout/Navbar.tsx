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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 1024 1024" className="rounded-lg">
            <defs>
              <linearGradient id="nav-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1b26" />
                <stop offset="100%" stopColor="#24283b" />
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
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            SSHive
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-secondary"
            aria-label="Switch language"
          >
            <Globe className="w-4 h-4" />
            {locale.toUpperCase()}
          </button>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            {t('download')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <button
              onClick={() => { switchLocale(); setMenuOpen(false); }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground py-2 w-full"
            >
              <Globe className="w-4 h-4" />
              {locale === 'en' ? 'Francais' : 'English'}
            </button>
            <Link
              href="/download"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              {t('download')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
