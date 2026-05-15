'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CopyButton } from '@/components/ui/CopyButton';
import {
  Bot,
  ArrowLeft,
  Download,
  Shield,
  Zap,
  Settings,
  Terminal,
  FolderOpen,
  CheckCircle,
  Copy,
  ArrowRight,
  Cpu,
  Lock,
  Sparkles,
} from 'lucide-react';

/* ─── macOS window chrome ─── */
function MacWindow({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`macos-window shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}>
      <div className="macos-window-bar">
        <span className="macos-dot macos-dot-red" />
        <span className="macos-dot macos-dot-yellow" />
        <span className="macos-dot macos-dot-green" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* ─── Animated status pill ─── */
function StatusPill({ active, label }: { active: boolean; label: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${active ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-white/5 text-muted-foreground border border-white/10'}`}>
      <span className={`w-2 h-2 rounded-full ${active ? 'bg-green-400 animate-pulse' : 'bg-muted-foreground/50'}`} />
      {label}
    </span>
  );
}

/* ─── MCP Settings Mockup (inspired by the screenshot) ─── */
function McpSettingsMockup({ t }: { t: (key: string) => string }) {
  return (
    <MacWindow title="SSHive, Settings / MCP">
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Bot className="w-5 h-5 text-indigo-400" />
            {t('mockup.settingsTitle')}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{t('mockup.settingsDesc')}</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <div>
            <div className="text-sm font-medium text-foreground">{t('mockup.enableServer')}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t('mockup.enableServerDesc')}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-green-400 font-medium">{t('mockup.active')}</span>
            <div className="w-11 h-6 bg-green-500 rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </div>

        {/* Port + Token */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs text-muted-foreground mb-2">{t('mockup.port')}</div>
            <div className="font-mono text-sm text-foreground bg-white/[0.04] px-3 py-2 rounded-lg border border-white/[0.08]">
              49422
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs text-muted-foreground mb-2">{t('mockup.token')}</div>
            <div className="font-mono text-xs text-foreground bg-white/[0.04] px-3 py-2 rounded-lg border border-white/[0.08] truncate">
              988ca074-565f-444a-918…
            </div>
          </div>
        </div>

        {/* Compatible clients */}
        <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
          <div className="text-xs text-indigo-300 font-medium mb-3">{t('mockup.autoConfigured')}</div>
          <div className="flex flex-wrap gap-2">
            {['Claude Code', 'Cursor', 'Claude Desktop'].map((client) => (
              <span key={client} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
                <CheckCircle className="w-3 h-3" />
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

/* ─── Claude Code demo mockup ─── */
function ClaudeCodeDemoMockup({ t }: { t: (key: string) => string }) {
  return (
    <MacWindow title="Claude Code, Terminal">
      <div className="p-6 font-mono text-sm leading-7 text-left">
        <div className="flex items-center gap-2">
          <span className="text-primary">claude</span>
          <span className="text-muted-foreground">&gt;</span>
          <span className="text-foreground">{t('mockup.claudePrompt')}</span>
        </div>
        <div className="mt-3 text-muted-foreground text-xs">{t('mockup.claudeThinking')}</div>

        {/* Tool call */}
        <div className="mt-3 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
          <div className="text-xs text-indigo-400 font-medium mb-1">ssh_execute</div>
          <div className="text-xs text-muted-foreground">
            <span className="text-indigo-300">session:</span> <span className="text-foreground">&quot;NMS&quot;</span> &nbsp;
            <span className="text-indigo-300">command:</span> <span className="text-foreground">&quot;docker ps --format &apos;table {'{{'}.Names{'}}'}\t{'{{'}​.Status{'}}'}&apos;&quot;</span>
          </div>
        </div>

        {/* Result */}
        <div className="mt-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
          <div className="text-xs text-green-400 font-medium mb-1">{t('mockup.result')}</div>
          <pre className="text-xs text-muted-foreground whitespace-pre">
{`NAMES            STATUS
api-gateway      Up 14 days
web-frontend     Up 14 days
postgres-db      Up 14 days`}
          </pre>
        </div>

        <div className="mt-3 text-foreground text-xs leading-relaxed">
          {t('mockup.claudeResponse')}
        </div>
      </div>
    </MacWindow>
  );
}

/* ─── SFTP demo mockup ─── */
function SftpDemoMockup({ t }: { t: (key: string) => string }) {
  return (
    <MacWindow title="Claude Code, SFTP via MCP">
      <div className="p-6 font-mono text-sm leading-7 text-left">
        <div className="flex items-center gap-2">
          <span className="text-primary">claude</span>
          <span className="text-muted-foreground">&gt;</span>
          <span className="text-foreground">{t('mockup.sftpPrompt')}</span>
        </div>

        {/* sftp_list call */}
        <div className="mt-3 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
          <div className="text-xs text-indigo-400 font-medium mb-1">sftp_list</div>
          <div className="text-xs text-muted-foreground">
            <span className="text-indigo-300">session:</span> <span className="text-foreground">&quot;NMS&quot;</span> &nbsp;
            <span className="text-indigo-300">path:</span> <span className="text-foreground">&quot;/etc/nginx/sites-enabled/&quot;</span>
          </div>
        </div>

        {/* sftp_read_file call */}
        <div className="mt-2 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
          <div className="text-xs text-indigo-400 font-medium mb-1">sftp_read_file</div>
          <div className="text-xs text-muted-foreground">
            <span className="text-indigo-300">session:</span> <span className="text-foreground">&quot;NMS&quot;</span> &nbsp;
            <span className="text-indigo-300">path:</span> <span className="text-foreground">&quot;/etc/nginx/sites-enabled/api.conf&quot;</span>
          </div>
        </div>

        {/* Result */}
        <div className="mt-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
          <pre className="text-xs text-muted-foreground whitespace-pre">
{`server {
    listen 443 ssl;
    server_name api.example.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}`}
          </pre>
        </div>

        <div className="mt-3 text-foreground text-xs leading-relaxed">
          {t('mockup.sftpResponse')}
        </div>
      </div>
    </MacWindow>
  );
}

/* ─── JSON config block ─── */
function ConfigBlock({ title, config }: { title: string; config: string }) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <CopyButton text={config} />
      </div>
      <pre className="p-4 text-xs font-mono text-muted-foreground overflow-x-auto leading-relaxed">{config}</pre>
    </div>
  );
}

/* ─── Main MCP page component ─── */
export function McpPage() {
  const t = useTranslations('mcpPage');

  const tools = [
    { name: 'ssh_list_sessions', icon: Terminal, desc: t('tools.sshList') },
    { name: 'ssh_execute', icon: Terminal, desc: t('tools.sshExecute') },
    { name: 'sftp_list', icon: FolderOpen, desc: t('tools.sftpList') },
    { name: 'sftp_read_file', icon: FolderOpen, desc: t('tools.sftpRead') },
    { name: 'sftp_write_file', icon: FolderOpen, desc: t('tools.sftpWrite') },
    { name: 'sftp_write_file_chunk', icon: FolderOpen, desc: t('tools.sftpWriteChunk') },
    { name: 'sftp_write_from_local_path', icon: FolderOpen, desc: t('tools.sftpWriteFromLocal') },
  ];

  const streamableHttpConfig = `{
  "mcpServers": {
    "sshive": {
      "type": "http",
      "url": "http://127.0.0.1:49422/mcp",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}`;

  const sseConfig = `{
  "mcpServers": {
    "sshive": {
      "type": "sse",
      "url": "http://127.0.0.1:49422/sse",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}`;

  const claudeCliCommand = `claude mcp remove sshive --scope user 2>/dev/null; claude mcp add --transport http --scope user sshive http://127.0.0.1:49422/mcp --header "Authorization:Bearer <your-token>"`;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-16">
        {/* Ambient glows */}
        <div className="absolute top-0 right-[10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(122,162,247,0.06)_0%,transparent_70%)] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-14 md:pb-20 z-10">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backToFeatures')}
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <ScrollReveal>
                <div className="section-label mb-6">{t('sectionLabel')}</div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {t('heroTitle')}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {t('heroSubtitle')}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <StatusPill active label={t('hero.statusMcp')} />
                  <StatusPill active label={t('hero.statusAuto')} />
                  <StatusPill active label={t('hero.statusSecure')} />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/download"
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(122,162,247,0.3)] hover:-translate-y-px text-base"
                  >
                    <Download className="w-5 h-5" />
                    {t('heroCta')}
                  </Link>
                  <a
                    href="#setup"
                    className="group inline-flex items-center gap-2 border border-border/50 text-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-white/5 hover:border-primary/30 transition-all duration-300 text-base"
                  >
                    {t('heroSetupCta')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Settings mockup */}
            <ScrollReveal delay={300} scale>
              <McpSettingsMockup t={t} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── What is MCP ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="section-label mb-6">{t('whatIsMcp.label')}</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
              {t('whatIsMcp.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {t('whatIsMcp.description')}
            </p>
          </ScrollReveal>

          {/* 3-column value props */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: t('whatIsMcp.fast.title'), desc: t('whatIsMcp.fast.desc'), color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
              { icon: Shield, title: t('whatIsMcp.secure.title'), desc: t('whatIsMcp.secure.desc'), color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
              { icon: Settings, title: t('whatIsMcp.auto.title'), desc: t('whatIsMcp.auto.desc'), color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className={`glass-card rounded-2xl p-6 md:p-8 h-full border ${item.bg}`}>
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Demo: SSH via Claude ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <ClaudeCodeDemoMockup t={t} />
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <div className="section-label mb-6">{t('demoSsh.label')}</div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {t('demoSsh.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t('demoSsh.description')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <ul className="mt-6 space-y-3">
                  {[t('demoSsh.bullet1'), t('demoSsh.bullet2'), t('demoSsh.bullet3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Demo: SFTP via Claude ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="section-label mb-6">{t('demoSftp.label')}</div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {t('demoSftp.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t('demoSftp.description')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <ul className="mt-6 space-y-3">
                  {[t('demoSftp.bullet1'), t('demoSftp.bullet2'), t('demoSftp.bullet3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <SftpDemoMockup t={t} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 5 MCP Tools ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="section-label mb-6">{t('tools.label')}</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              {t('tools.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{t('tools.subtitle')}</p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool.name} delay={i * 80}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <tool.icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <code className="text-sm font-mono text-foreground">{tool.name}</code>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Setup / Configuration ─── */}
      <section id="setup" className="py-20 md:py-28 border-t border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="section-label mb-6">{t('setup.label')}</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              {t('setup.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{t('setup.subtitle')}</p>
          </ScrollReveal>

          {/* Steps */}
          <div className="mt-14 space-y-10">
            {/* Step 1 */}
            <ScrollReveal>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-sm font-bold text-indigo-400">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{t('setup.step1.title')}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t('setup.step1.desc')}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-sm font-bold text-indigo-400">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{t('setup.step2.title')}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed mb-4">{t('setup.step2.desc')}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3, paste config or run CLI */}
            <ScrollReveal delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{t('setup.step3.title')}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t('setup.step3.desc')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Config blocks */}
          <div className="mt-14 space-y-6">
            <ScrollReveal>
              <ConfigBlock
                title={t('setup.claudeCli')}
                config={claudeCliCommand}
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScrollReveal>
                <ConfigBlock
                  title={t('setup.streamableHttp')}
                  config={streamableHttpConfig}
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <ConfigBlock
                  title={t('setup.sse')}
                  config={sseConfig}
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Compatible Clients ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="section-label mb-6">{t('clients.label')}</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              {t('clients.title')}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Claude Code', desc: t('clients.claudeCode'), auto: true },
              { name: 'Cursor', desc: t('clients.cursor'), auto: true },
              { name: 'Claude Desktop', desc: t('clients.claudeDesktop'), auto: true },
              { name: 'Cline', desc: t('clients.cline'), auto: false },
            ].map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 80}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">{client.name}</span>
                    {client.auto && (
                      <span className="text-[10px] font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                        Auto
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{client.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security ─── */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Lock className="w-10 h-10 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                {t('security.title')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {t('security.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[t('security.bullet1'), t('security.bullet2'), t('security.bullet3'), t('security.bullet4'), t('security.bullet5'), t('security.bullet6')].map((b, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal scale>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/15 to-blue-500/15 border border-indigo-500/25 p-10 md:p-14 text-center">
              <Sparkles className="w-10 h-10 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {t('cta.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
                >
                  <Download className="w-5 h-5" />
                  {t('cta.downloadCta')}
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors text-base"
                >
                  {t('cta.featuresCta')}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
