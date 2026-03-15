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

const featureItems = [
  { key: 'ssh', icon: Terminal, href: '/features/ssh' as const },
  { key: 'sftp', icon: FolderOpen, href: '/features/sftp' as const },
  { key: 'rdp', icon: Monitor, href: '/features/rdp' as const },
  { key: 'vnc', icon: Eye, href: '/features/vnc' as const },
  { key: 'tunnels', icon: ArrowLeftRight, href: '/features/tunnels' as const },
  { key: 'mcp', icon: Bot, href: '/features/mcp' as const },
  { key: 'broadcast', icon: Radio, href: '/features/broadcast' as const },
  { key: 'snippets', icon: Code, href: '/features/snippets' as const },
] as const;

export function FeatureGrid() {
  const t = useTranslations('features');

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(`${feature.key}.shortDesc`)}
                </p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center text-sm text-primary font-medium hover:underline"
                >
                  {t('learnMore')} &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
