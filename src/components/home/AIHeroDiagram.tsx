import { useTranslations } from 'next-intl';
import { Bot, ArrowRight, Server, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export function AIHeroDiagram() {
  const t = useTranslations('aiHero');

  return (
    <div className="mt-12 md:mt-16 mx-auto max-w-5xl">
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider border border-primary/20">
            <Sparkles className="w-3 h-3" />
            {t('label')}
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Flow diagram: AI Client → MCP → Servers */}
        <div className="grid gap-3 md:gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch">
          {/* Step 1: AI Client */}
          <article className="relative rounded-xl border border-border bg-card p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#a78bfa]/10 border border-[#a78bfa]/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#a78bfa]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t('clientLabel')}
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug">
              {t('clients')}
            </p>
          </article>

          {/* Arrow */}
          <div
            className="hidden md:flex items-center justify-center text-primary/40"
            aria-hidden="true"
          >
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* Step 2: MCP server */}
          <article className="relative rounded-xl border-2 border-primary/40 bg-primary/5 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary">
                {t('mcpLabel')}
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug">
              {t('mcpDetail')}
            </p>
          </article>

          {/* Arrow */}
          <div
            className="hidden md:flex items-center justify-center text-primary/40"
            aria-hidden="true"
          >
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* Step 3: Servers */}
          <article className="relative rounded-xl border border-border bg-card p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center">
                <Server className="w-4 h-4 text-success" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {t('serversLabel')}
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug">
              {t('serversDetail')}
            </p>
          </article>
        </div>

        {/* Tools list */}
        <div className="mt-6 md:mt-8 rounded-lg border border-border bg-background/50 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex-shrink-0">
              {t('toolsLabel')}
            </span>
            <code className="mt-2 sm:mt-0 text-xs md:text-sm text-foreground font-mono break-all">
              {t('tools')}
            </code>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/mcp"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
