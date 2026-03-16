import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Check, X, Minus, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type CellValue = 'yes' | 'no' | 'partial' | 'limited';

interface ProductData {
  name: string;
  data: CellValue[];
}

const featureKeys = [
  'sshTerminal',
  'sftpManager',
  'rdpClient',
  'vncClient',
  'sshTunnels',
  'broadcastMode',
  'mcpIntegration',
  'nativeMacOS',
  'keychainIntegration',
  'macAppStore',
] as const;

const products: ProductData[] = [
  {
    name: 'SSHive',
    data: ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes'],
  },
  {
    name: 'MobaXterm',
    data: ['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no'],
  },
  {
    name: 'iTerm2',
    data: ['yes', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'no'],
  },
  {
    name: 'Termius',
    data: ['yes', 'yes', 'no', 'no', 'yes', 'no', 'no', 'yes', 'no', 'yes'],
  },
];

function CellIcon({ value }: { value: CellValue }) {
  switch (value) {
    case 'yes':
      return <Check className="w-4 h-4 text-success mx-auto" />;
    case 'no':
      return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
    case 'partial':
    case 'limited':
      return <Minus className="w-4 h-4 text-muted-foreground mx-auto" />;
  }
}

export function ComparisonTeaser() {
  const t = useTranslations('comparison');

  return (
    <section className="relative py-14 md:py-20">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="section-label mb-4 block">Compare</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {t('title')}
            </h2>
          </div>
        </ScrollReveal>

        {/* Table wrapper */}
        <ScrollReveal>
          <div className="overflow-x-auto">
            <div className="macos-window min-w-[600px]">
              <div className="macos-window-bar">
                <span className="macos-dot macos-dot-red" />
                <span className="macos-dot macos-dot-yellow" />
                <span className="macos-dot macos-dot-green" />
                <span className="ml-4 text-xs text-muted-foreground">Comparison</span>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-muted-foreground py-3 px-4 border-b border-white/5 uppercase tracking-wider">
                      {t('feature')}
                    </th>
                    {products.map((product, idx) => (
                      <th
                        key={product.name}
                        className={`text-center text-sm font-semibold py-3 px-4 border-b border-white/5 ${
                          idx === 0
                            ? 'text-primary'
                            : 'text-foreground'
                        }`}
                        style={idx === 0 ? { fontFamily: 'var(--font-space-grotesk)' } : undefined}
                      >
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureKeys.map((featureKey, rowIdx) => (
                    <tr
                      key={featureKey}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="text-sm text-foreground/80 py-3 px-4 border-b border-white/[0.03]">
                        {t(featureKey)}
                      </td>
                      {products.map((product, colIdx) => (
                        <td
                          key={product.name}
                          className={`text-center py-3 px-4 border-b border-white/[0.03] ${
                            colIdx === 0 ? 'bg-primary/[0.03]' : ''
                          }`}
                        >
                          <CellIcon value={product.data[rowIdx]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/compare"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-base link-underline"
            >
              {t('seeFullComparison')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
