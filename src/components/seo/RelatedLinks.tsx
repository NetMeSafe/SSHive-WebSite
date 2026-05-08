import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

export function RelatedLinks({
  heading,
  items,
}: {
  heading: string;
  items: RelatedLink[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-colors p-6"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {item.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
