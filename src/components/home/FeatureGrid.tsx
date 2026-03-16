import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  Terminal,
  FolderOpen,
  Monitor,
  Eye,
  ArrowLeftRight,
  Bot,
  Radio,
  Code,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const featureItems = [
  { key: 'ssh', icon: Terminal, href: '/features/ssh' as const, gradient: 'from-blue-500/20 to-cyan-500/20' },
  { key: 'sftp', icon: FolderOpen, href: '/features/sftp' as const, gradient: 'from-emerald-500/20 to-teal-500/20' },
  { key: 'rdp', icon: Monitor, href: '/features/rdp' as const, gradient: 'from-purple-500/20 to-pink-500/20' },
  { key: 'vnc', icon: Eye, href: '/features/vnc' as const, gradient: 'from-amber-500/20 to-orange-500/20' },
  { key: 'tunnels', icon: ArrowLeftRight, href: '/features/tunnels' as const, gradient: 'from-rose-500/20 to-red-500/20' },
  { key: 'mcp', icon: Bot, href: '/features/mcp' as const, gradient: 'from-violet-500/20 to-indigo-500/20' },
  { key: 'broadcast', icon: Radio, href: '/features/broadcast' as const, gradient: 'from-sky-500/20 to-blue-500/20' },
  { key: 'snippets', icon: Code, href: '/features/snippets' as const, gradient: 'from-lime-500/20 to-green-500/20' },
] as const;

export function FeatureGrid() {
  const t = useTranslations('features');

  return (
    <section className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="section-label mb-4 block">Features</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureItems.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.key} delay={i * 60}>
                <div className="glass-card rounded-xl p-6 h-full group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t(`${feature.key}.shortDesc`)}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center text-sm text-primary font-medium link-underline transition-colors hover:text-accent"
                  >
                    {t('learnMore')} &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
