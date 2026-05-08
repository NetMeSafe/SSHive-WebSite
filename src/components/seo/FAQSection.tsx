import type { FAQItem } from './FAQSchema';

export function FAQSection({
  heading,
  items,
}: {
  heading: string;
  items: FAQItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          {heading}
        </h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-border bg-card p-6 open:border-primary/40 transition-colors"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground flex items-start justify-between gap-4">
                <span>{item.question}</span>
                <span className="flex-shrink-0 text-primary transition-transform group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <div className="mt-4 text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
