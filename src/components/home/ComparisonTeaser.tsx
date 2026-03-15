import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Check, X, Minus } from 'lucide-react';

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
      return <Check className="w-5 h-5 text-success mx-auto" />;
    case 'no':
      return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
    case 'partial':
    case 'limited':
      return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />;
  }
}

export function ComparisonTeaser() {
  const t = useTranslations('comparison');

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-muted-foreground py-3 px-4 border-b border-border">
                  {t('feature')}
                </th>
                {products.map((product, idx) => (
                  <th
                    key={product.name}
                    className={`text-center text-sm font-semibold py-3 px-4 border-b border-border ${
                      idx === 0
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground'
                    }`}
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
                  className={rowIdx % 2 === 0 ? '' : 'bg-secondary/20'}
                >
                  <td className="text-sm text-foreground py-3 px-4 border-b border-border/50">
                    {t(featureKey)}
                  </td>
                  {products.map((product, colIdx) => (
                    <td
                      key={product.name}
                      className={`text-center py-3 px-4 border-b border-border/50 ${
                        colIdx === 0 ? 'bg-primary/5' : ''
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

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/compare"
            className="inline-flex items-center text-primary font-medium hover:underline text-base"
          >
            {t('seeFullComparison')} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
