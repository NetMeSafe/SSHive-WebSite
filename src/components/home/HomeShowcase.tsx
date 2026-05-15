'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { APP_VERSION } from '@/lib/constants';
import { AppStoreLink } from '@/components/download/AppStoreLink';
import { AIHeroDiagram } from '@/components/home/AIHeroDiagram';
import {
  Download,
  ArrowRight,
  Terminal,
  FolderOpen,
  Monitor,
  Eye,
  ArrowLeftRight,
  Bot,
  Radio,
  Code,
  Check,
  X,
  Minus,
  Apple,
  Layers,
  Lock,
  Search,
  Settings,
  Globe,
  Wifi,
  Shield,
  Zap,
  ChevronRight,
  Server,
  Database,
  Cloud,
  Upload,
  FileText,
  Rocket,
  Play,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/* ═══════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════ */

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => { setY(window.scrollY); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return y;
}

/* ═══════════════════════════════════════════
   macOS Window Chrome
   ═══════════════════════════════════════════ */

function MacWindow({ title, children, className = '', glow = false }: {
  title: string; children: ReactNode; className?: string; glow?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/15 rounded-3xl blur-2xl opacity-60 -z-10" />
      )}
      <div className="macos-window shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="macos-window-bar">
          <span className="macos-dot macos-dot-red" />
          <span className="macos-dot macos-dot-yellow" />
          <span className="macos-dot macos-dot-green" />
          <span className="ml-4 text-xs text-muted-foreground font-mono">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Sidebar item (connection profile)
   ═══════════════════════════════════════════ */

function SidebarProfile({ name, host, active = false, icon }: {
  name: string; host: string; active?: boolean; icon?: ReactNode;
}) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${active ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/[0.03]'}`}>
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${active ? 'bg-green-400' : 'bg-muted-foreground/30'}`} />
      {icon}
      <div className="min-w-0">
        <div className={`text-xs font-medium truncate ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{name}</div>
        <div className="text-[10px] text-muted-foreground/60 truncate">{host}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Full SSHive App Mockup — Hero (Interactive)
   ═══════════════════════════════════════════ */

type MockupTab = 'terminal' | 'sftp' | 'rdp';

function TerminalPane() {
  return (
    <div className="flex-1 p-4 md:p-5 font-mono text-xs leading-6 overflow-hidden">
      <div className="flex items-center gap-2">
        <span className="text-green-400">deploy@prod</span>
        <span className="text-primary">~</span>
        <span className="text-muted-foreground">$</span>
        <span className="text-foreground">docker ps --format &quot;table {'{{'}.Names{'}}'}\t{'{{'}.Status{'}}'}\t{'{{'}.Ports{'}}'}&quot;</span>
      </div>
      <div className="mt-2 text-muted-foreground/80">
        <div className="grid grid-cols-3 gap-x-4 text-[10px]">
          <span className="text-muted-foreground/50 font-semibold">NAMES</span>
          <span className="text-muted-foreground/50 font-semibold">STATUS</span>
          <span className="text-muted-foreground/50 font-semibold">PORTS</span>
        </div>
        {[
          ['api-gateway', 'Up 14 days', '0.0.0.0:443→8080'],
          ['web-frontend', 'Up 14 days', '0.0.0.0:80→3000'],
          ['postgres-db', 'Up 14 days', '5432→5432'],
          ['redis-cache', 'Up 14 days', '6379→6379'],
          ['nginx-proxy', 'Up 14 days', '0.0.0.0:443→443'],
        ].map(([name, status, ports]) => (
          <div key={name} className="grid grid-cols-3 gap-x-4 text-[10px] mt-0.5">
            <span>{name}</span><span className="text-green-400/70">{status}</span><span>{ports}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-green-400">deploy@prod</span>
        <span className="text-primary">~</span>
        <span className="text-muted-foreground">$</span>
        <span className="text-foreground">uptime</span>
      </div>
      <div className="text-muted-foreground/80 text-[10px] mt-1">
        10:42:18 up 47 days, 3:12, 2 users, load average: 0.08, 0.12, 0.09
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-green-400">deploy@prod</span>
        <span className="text-primary">~</span>
        <span className="text-muted-foreground">$</span>
        <span className="animate-blink text-foreground">_</span>
      </div>
    </div>
  );
}

function SftpPane({ t }: { t: (key: string) => string }) {
  const remoteFiles = [
    { name: 'docker-compose.yml', size: '2.4 KB', icon: <FileText className="w-3 h-3 text-blue-400" /> },
    { name: 'nginx.conf', size: '1.8 KB', icon: <FileText className="w-3 h-3 text-amber-400" /> },
    { name: '.env.production', size: '0.5 KB', icon: <Lock className="w-3 h-3 text-red-400" /> },
    { name: 'deploy.sh', size: '3.1 KB', icon: <Code className="w-3 h-3 text-green-400" /> },
    { name: 'backup/', size: '—', icon: <FolderOpen className="w-3 h-3 text-yellow-400" /> },
    { name: 'logs/', size: '—', icon: <FolderOpen className="w-3 h-3 text-yellow-400" /> },
    { name: 'ssl/', size: '—', icon: <FolderOpen className="w-3 h-3 text-yellow-400" /> },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Breadcrumbs */}
      <div className="flex border-b border-white/[0.06]">
        <div className="flex-1 px-3 py-1.5 border-r border-white/[0.06] bg-white/[0.01]">
          <div className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1">
            <span className="text-primary">{t('mockup.local')}</span>
            <ChevronRight className="w-2.5 h-2.5" /> ~/Documents/project/
          </div>
        </div>
        <div className="flex-1 px-3 py-1.5 bg-white/[0.01]">
          <div className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1">
            <span className="text-green-400">{t('mockup.remote')}</span>
            <ChevronRight className="w-2.5 h-2.5" /> /opt/app/
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        {/* Local */}
        <div className="flex-1 border-r border-white/[0.06] p-2 space-y-0.5">
          {['src/', 'public/', 'package.json', 'tsconfig.json', 'README.md'].map((f) => (
            <div key={f} className="flex items-center gap-2 px-2 py-1 rounded text-[10px] text-muted-foreground/70 hover:bg-white/[0.04] cursor-default transition-colors">
              {f.endsWith('/') ? <FolderOpen className="w-3 h-3 text-yellow-400" /> : <FileText className="w-3 h-3 text-blue-400/60" />}
              {f}
            </div>
          ))}
        </div>
        {/* Transfer arrows (visual mockup) */}
        <div className="flex flex-col items-center justify-center gap-2 px-2 bg-white/[0.01]" aria-hidden="true">
          <button tabIndex={-1} aria-hidden="true" className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors">
            <ArrowRight className="w-3 h-3" />
          </button>
          <button tabIndex={-1} aria-hidden="true" className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:bg-white/10 transition-colors">
            <ArrowRight className="w-3 h-3 rotate-180" />
          </button>
        </div>
        {/* Remote */}
        <div className="flex-1 p-2 space-y-0.5">
          {remoteFiles.map((f) => (
            <div key={f.name} className="flex items-center gap-2 px-2 py-1 rounded text-[10px] hover:bg-white/[0.04] cursor-default transition-colors">
              {f.icon}
              <span className="flex-1 text-muted-foreground/80">{f.name}</span>
              <span className="text-muted-foreground/40">{f.size}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Transfer bar */}
      <div className="mx-2 mb-2 p-2 rounded-lg bg-primary/5 border border-primary/15">
        <div className="flex items-center justify-between text-[10px] mb-1">
          <span className="text-primary font-medium flex items-center gap-1">
            <Upload className="w-3 h-3" /> {t('mockup.uploading')}
          </span>
          <span className="text-muted-foreground/50">2.4 MB / 3.1 MB</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-[77%] bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
      </div>
    </div>
  );
}

function RdpPane({ t }: { t: (key: string) => string }) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Windows 11 wallpaper gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c] via-[#0e2a47] to-[#0c1929]">
        {/* Bloom / light accent like Win11 wallpaper */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0078d4]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-[#6b4fa0]/15 rounded-full blur-[80px]" />
      </div>

      <div className="absolute inset-0 flex flex-col">
        {/* Desktop icons grid */}
        <div className="flex-1 p-3 flex flex-col gap-2 content-start">
          {[
            { name: 'Recycle Bin', icon: <X className="w-4 h-4 text-white/50" />, bg: 'bg-white/10' },
            { name: 'Documents', icon: <FolderOpen className="w-4 h-4 text-amber-400" />, bg: 'bg-amber-500/15' },
            { name: 'SQL Server', icon: <Database className="w-4 h-4 text-red-400" />, bg: 'bg-red-500/15' },
            { name: 'IIS Manager', icon: <Globe className="w-4 h-4 text-[#0078d4]" />, bg: 'bg-[#0078d4]/15' },
            { name: 'PowerShell', icon: <Terminal className="w-4 h-4 text-blue-300" />, bg: 'bg-blue-500/15' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 cursor-default w-fit transition-colors group">
              <div className={`w-7 h-7 rounded ${item.bg} flex items-center justify-center`}>{item.icon}</div>
              <span className="text-[9px] text-white/80 drop-shadow-sm">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Floating Server Manager window */}
        <div className="absolute top-6 left-[38%] w-[58%] max-w-[320px] hidden md:block">
          <div className="rounded-lg border border-white/10 overflow-hidden shadow-2xl shadow-black/40 bg-[#202020]">
            {/* Win11 title bar */}
            <div className="h-7 bg-[#1f1f1f] flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5">
                <Server className="w-3 h-3 text-[#0078d4]" />
                <span className="text-[9px] text-white/70">Server Manager</span>
              </div>
              <div className="flex items-center gap-0.5">
                <div className="w-7 h-5 flex items-center justify-center hover:bg-white/10 rounded-sm">
                  <Minus className="w-2.5 h-2.5 text-white/50" />
                </div>
                <div className="w-7 h-5 flex items-center justify-center hover:bg-white/10 rounded-sm">
                  <div className="w-2 h-2 border border-white/50 rounded-[1px]" />
                </div>
                <div className="w-7 h-5 flex items-center justify-center hover:bg-[#c42b1c] rounded-sm">
                  <X className="w-2.5 h-2.5 text-white/50" />
                </div>
              </div>
            </div>
            {/* Window content */}
            <div className="p-2.5 space-y-2">
              <div className="text-[9px] text-white/40 uppercase tracking-wider font-semibold">Dashboard</div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { label: 'Local Server', status: 'Online', color: 'bg-green-400' },
                  { label: 'AD DS', status: 'Running', color: 'bg-green-400' },
                  { label: 'DNS', status: 'Running', color: 'bg-green-400' },
                  { label: 'File Services', status: '2 alerts', color: 'bg-amber-400' },
                ].map((svc) => (
                  <div key={svc.label} className="bg-white/[0.04] rounded px-2 py-1.5 border border-white/[0.06]">
                    <div className="text-[8px] text-white/50">{svc.label}</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className={`w-1 h-1 rounded-full ${svc.color}`} />
                      <span className="text-[8px] text-white/70">{svc.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.04] rounded px-2 py-1.5 border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-white/50">CPU</span>
                  <span className="text-[8px] text-[#0078d4]">23%</span>
                </div>
                <div className="mt-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[23%] bg-[#0078d4] rounded-full" />
                </div>
              </div>
              <div className="bg-white/[0.04] rounded px-2 py-1.5 border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-white/50">Memory</span>
                  <span className="text-[8px] text-[#0078d4]">6.2 / 16 GB</span>
                </div>
                <div className="mt-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[39%] bg-[#0078d4] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Windows 11 Taskbar */}
        <div className="h-10 bg-[#1c1c1c]/90 backdrop-blur-xl border-t border-white/[0.06] flex items-center px-2 relative">
          {/* Center icons */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
            {/* Start button */}
            <div className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#0078d4]" fill="currentColor">
                <rect x="1" y="1" width="6.5" height="6.5" rx="1" />
                <rect x="8.5" y="1" width="6.5" height="6.5" rx="1" />
                <rect x="1" y="8.5" width="6.5" height="6.5" rx="1" />
                <rect x="8.5" y="8.5" width="6.5" height="6.5" rx="1" />
              </svg>
            </div>
            {/* Search */}
            <div className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Search className="w-3.5 h-3.5 text-white/60" />
            </div>
            {/* File Explorer */}
            <div className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
            </div>
            {/* Edge browser */}
            <div className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-[#0078d4]" />
            </div>
            {/* Terminal */}
            <div className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 bg-white/[0.06] transition-colors cursor-pointer relative">
              <Terminal className="w-3.5 h-3.5 text-white/70" />
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-[2px] bg-[#0078d4] rounded-full" />
            </div>
            {/* Server Manager - active */}
            <div className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/10 bg-white/[0.06] transition-colors cursor-pointer relative">
              <Server className="w-3.5 h-3.5 text-white/70" />
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-[2px] bg-[#0078d4] rounded-full" />
            </div>
          </div>
          {/* Right system tray */}
          <div className="ml-auto flex items-center gap-2">
            <Wifi className="w-3 h-3 text-white/40" />
            <Layers className="w-3 h-3 text-white/40" />
            <div className="text-right leading-tight">
              <div className="text-[8px] text-white/50 font-mono">10:42 AM</div>
              <div className="text-[8px] text-white/40 font-mono">3/25/2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* SSHive RDP connection badge */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[8px] text-white/70 font-mono">{t('mockup.rdpConnected')}</span>
      </div>
    </div>
  );
}

function SSHiveAppMockup({ t }: { t: (key: string) => string }) {
  const [activeTab, setActiveTab] = useState<MockupTab>('terminal');

  const tabs: { id: MockupTab; label: string; icon: typeof Terminal }[] = [
    { id: 'terminal', label: 'production', icon: Terminal },
    { id: 'sftp', label: 'SFTP', icon: FolderOpen },
    { id: 'rdp', label: 'RDP', icon: Monitor },
  ];

  return (
    <MacWindow title="SSHive" glow>
      <div className="flex min-h-[380px] md:min-h-[420px]">
        {/* Sidebar */}
        <div className="w-[200px] border-r border-white/[0.06] bg-white/[0.01] flex-shrink-0 hidden sm:flex flex-col">
          <div className="px-3 pt-3 pb-2">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-2">
              {t('mockup.connections')}
            </div>
            <button className="w-full text-xs text-center py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium">
              + {t('mockup.newConnection')}
            </button>
          </div>
          <div className="px-3 py-1.5">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] text-muted-foreground/50">
              <Search className="w-3 h-3" />
              {t('mockup.searchProfile')}
            </div>
          </div>
          <div className="px-2 py-1 space-y-0.5">
            <div className="flex items-center gap-2 px-2.5 py-1.5 text-[10px] text-muted-foreground/70">
              <Terminal className="w-3 h-3" /> {t('mockup.localTerminal')}
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 text-[10px] text-muted-foreground/70">
              <Globe className="w-3 h-3" /> {t('mockup.networkTools')}
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 text-[10px] text-muted-foreground/70">
              <Settings className="w-3 h-3" /> {t('mockup.settings')}
            </div>
          </div>
          <div className="px-3 pt-2">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {t('mockup.recents')}
            </div>
          </div>
          <div className="px-2 space-y-0.5 flex-1">
            <SidebarProfile name="production" host="deploy@10.0.1.42:22" active />
            <SidebarProfile name="staging" host="admin@staging.corp:22" />
            <SidebarProfile name="db-master" host="postgres@db.internal:5432" />
            <SidebarProfile name="monitoring" host="root@grafana.local:22" />
          </div>
          <div className="px-3 py-2 border-t border-white/[0.04] flex items-center justify-between">
            <span className="text-[9px] text-muted-foreground/40">4 {t('mockup.sessions')}</span>
            <span className="text-[9px] text-green-400/70 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
              PRO
            </span>
          </div>
        </div>

        {/* Main content — Interactive tabs */}
        <div className="flex-1 flex flex-col">
          {/* Tab bar */}
          <div className="flex items-center border-b border-white/[0.06] bg-white/[0.01]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 border-r border-white/[0.06] text-xs transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.04] text-foreground'
                      : 'text-muted-foreground/60 hover:text-muted-foreground hover:bg-white/[0.02]'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-primary' : ''}`} />
                  {tab.label}
                  {isActive && tab.id === 'terminal' && <span className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                </button>
              );
            })}
          </div>

          {/* Tab content with crossfade */}
          <div className="flex-1 relative overflow-hidden">
            <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'terminal' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <TerminalPane />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'sftp' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <SftpPane t={t} />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'rdp' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <RdpPane t={t} />
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

/* ═══════════════════════════════════════════
   SFTP File Manager Mockup
   ═══════════════════════════════════════════ */

function SftpMockup({ t }: { t: (key: string) => string }) {
  const files = [
    { name: 'docker-compose.yml', size: '2.4 KB', date: 'Mar 15', icon: <FileText className="w-3.5 h-3.5 text-blue-400" /> },
    { name: 'nginx.conf', size: '1.8 KB', date: 'Mar 12', icon: <FileText className="w-3.5 h-3.5 text-amber-400" /> },
    { name: '.env.production', size: '0.5 KB', date: 'Mar 10', icon: <Lock className="w-3.5 h-3.5 text-red-400" /> },
    { name: 'deploy.sh', size: '3.1 KB', date: 'Mar 14', icon: <Code className="w-3.5 h-3.5 text-green-400" /> },
    { name: 'backup/', size: '—', date: 'Mar 13', icon: <FolderOpen className="w-3.5 h-3.5 text-yellow-400" /> },
    { name: 'logs/', size: '—', date: 'Mar 15', icon: <FolderOpen className="w-3.5 h-3.5 text-yellow-400" /> },
    { name: 'ssl/', size: '—', date: 'Feb 28', icon: <FolderOpen className="w-3.5 h-3.5 text-yellow-400" /> },
  ];

  return (
    <MacWindow title={`SSHive — SFTP — deploy@production:/opt/app`}>
      <div className="flex min-h-[320px]">
        {/* Local pane */}
        <div className="flex-1 border-r border-white/[0.06]">
          <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1">
              <span className="text-primary">{t('mockup.local')}</span>
              <ChevronRight className="w-2.5 h-2.5" />
              ~/Documents/project/
            </div>
          </div>
          <div className="p-2 space-y-0.5">
            {['src/', 'public/', 'package.json', 'tsconfig.json', 'README.md'].map((f) => (
              <div key={f} className="flex items-center gap-2 px-2 py-1 rounded text-[10px] text-muted-foreground/70 hover:bg-white/[0.03]">
                {f.endsWith('/') ? <FolderOpen className="w-3 h-3 text-yellow-400" /> : <FileText className="w-3 h-3 text-blue-400/60" />}
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Transfer arrows (visual mockup) */}
        <div className="flex flex-col items-center justify-center gap-2 px-2 bg-white/[0.01]" aria-hidden="true">
          <button tabIndex={-1} aria-hidden="true" className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button tabIndex={-1} aria-hidden="true" className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </button>
        </div>

        {/* Remote pane */}
        <div className="flex-1">
          <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1">
              <span className="text-green-400">{t('mockup.remote')}</span>
              <ChevronRight className="w-2.5 h-2.5" />
              /opt/app/
            </div>
          </div>
          <div className="p-2 space-y-0.5">
            {files.map((f) => (
              <div key={f.name} className="flex items-center gap-2 px-2 py-1 rounded text-[10px] hover:bg-white/[0.03]">
                {f.icon}
                <span className="flex-1 text-muted-foreground/80">{f.name}</span>
                <span className="text-muted-foreground/40">{f.size}</span>
                <span className="text-muted-foreground/30">{f.date}</span>
              </div>
            ))}
          </div>

          {/* Transfer progress */}
          <div className="mx-2 mt-2 p-2 rounded-lg bg-primary/5 border border-primary/15">
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-primary font-medium flex items-center gap-1">
                <Upload className="w-3 h-3" /> {t('mockup.uploading')}
              </span>
              <span className="text-muted-foreground/50">2.4 MB / 3.1 MB</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[77%] bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

/* ═══════════════════════════════════════════
   RDP Mockup — Remote Desktop
   ═══════════════════════════════════════════ */

function RdpMockup({ t }: { t: (key: string) => string }) {
  return (
    <MacWindow title={`SSHive — RDP — admin@windows-server`}>
      <div className="relative min-h-[340px] overflow-hidden">
        {/* Windows 11 wallpaper gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c] via-[#0e2a47] to-[#0c1929]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0078d4]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-[#6b4fa0]/15 rounded-full blur-[80px]" />
        </div>

        <div className="absolute inset-0 flex flex-col">
          {/* Desktop icons */}
          <div className="flex-1 p-3 flex flex-col gap-2 content-start">
            {[
              { name: 'Recycle Bin', icon: <X className="w-4 h-4 text-white/50" />, bg: 'bg-white/10' },
              { name: 'Documents', icon: <FolderOpen className="w-4 h-4 text-amber-400" />, bg: 'bg-amber-500/15' },
              { name: 'SQL Server', icon: <Database className="w-4 h-4 text-red-400" />, bg: 'bg-red-500/15' },
              { name: 'IIS Manager', icon: <Globe className="w-4 h-4 text-[#0078d4]" />, bg: 'bg-[#0078d4]/15' },
              { name: 'PowerShell', icon: <Terminal className="w-4 h-4 text-blue-300" />, bg: 'bg-blue-500/15' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 cursor-default w-fit transition-colors">
                <div className={`w-7 h-7 rounded ${item.bg} flex items-center justify-center`}>{item.icon}</div>
                <span className="text-[9px] text-white/80 drop-shadow-sm">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Floating Server Manager window */}
          <div className="absolute top-4 right-4 w-[55%] max-w-[280px]">
            <div className="rounded-lg border border-white/10 overflow-hidden shadow-2xl shadow-black/40 bg-[#202020]">
              <div className="h-7 bg-[#1f1f1f] flex items-center justify-between px-2">
                <div className="flex items-center gap-1.5">
                  <Server className="w-3 h-3 text-[#0078d4]" />
                  <span className="text-[9px] text-white/70">Server Manager</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-5 flex items-center justify-center hover:bg-white/10 rounded-sm"><Minus className="w-2.5 h-2.5 text-white/50" /></div>
                  <div className="w-6 h-5 flex items-center justify-center hover:bg-white/10 rounded-sm"><div className="w-2 h-2 border border-white/50 rounded-[1px]" /></div>
                  <div className="w-6 h-5 flex items-center justify-center hover:bg-[#c42b1c] rounded-sm"><X className="w-2.5 h-2.5 text-white/50" /></div>
                </div>
              </div>
              <div className="p-2 space-y-1.5">
                <div className="text-[8px] text-white/40 uppercase tracking-wider font-semibold">Dashboard</div>
                <div className="grid grid-cols-2 gap-1">
                  {[
                    { label: 'Local Server', status: 'Online', color: 'bg-green-400' },
                    { label: 'AD DS', status: 'Running', color: 'bg-green-400' },
                    { label: 'DNS', status: 'Running', color: 'bg-green-400' },
                    { label: 'File Services', status: '2 alerts', color: 'bg-amber-400' },
                  ].map((svc) => (
                    <div key={svc.label} className="bg-white/[0.04] rounded px-1.5 py-1 border border-white/[0.06]">
                      <div className="text-[7px] text-white/50">{svc.label}</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className={`w-1 h-1 rounded-full ${svc.color}`} />
                        <span className="text-[7px] text-white/70">{svc.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.04] rounded px-1.5 py-1 border border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] text-white/50">CPU</span>
                    <span className="text-[7px] text-[#0078d4]">23%</span>
                  </div>
                  <div className="mt-0.5 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[23%] bg-[#0078d4] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Windows 11 Taskbar */}
          <div className="h-9 bg-[#1c1c1c]/90 backdrop-blur-xl border-t border-white/[0.06] flex items-center px-2 relative">
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
              <div className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#0078d4]" fill="currentColor">
                  <rect x="1" y="1" width="6.5" height="6.5" rx="1" />
                  <rect x="8.5" y="1" width="6.5" height="6.5" rx="1" />
                  <rect x="1" y="8.5" width="6.5" height="6.5" rx="1" />
                  <rect x="8.5" y="8.5" width="6.5" height="6.5" rx="1" />
                </svg>
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Search className="w-3 h-3 text-white/60" />
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <FolderOpen className="w-3 h-3 text-amber-400" />
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer">
                <Globe className="w-3 h-3 text-[#0078d4]" />
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/10 bg-white/[0.06] cursor-pointer relative">
                <Terminal className="w-3 h-3 text-white/70" />
                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-[2px] bg-[#0078d4] rounded-full" />
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/10 bg-white/[0.06] cursor-pointer relative">
                <Server className="w-3 h-3 text-white/70" />
                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-[2px] bg-[#0078d4] rounded-full" />
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Wifi className="w-2.5 h-2.5 text-white/40" />
              <Layers className="w-2.5 h-2.5 text-white/40" />
              <div className="text-right leading-tight">
                <div className="text-[7px] text-white/50 font-mono">10:42 AM</div>
                <div className="text-[7px] text-white/40 font-mono">3/25/2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* SSHive RDP connection badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-white/70 font-mono">{t('mockup.rdpConnected')}</span>
        </div>
      </div>
    </MacWindow>
  );
}

/* ═══════════════════════════════════════════
   Broadcast Mode Mockup
   ═══════════════════════════════════════════ */

function BroadcastMockup({ t }: { t: (key: string) => string }) {
  const servers = ['web-01', 'web-02', 'web-03', 'api-01'];
  return (
    <MacWindow title={`SSHive — ${t('mockup.broadcastMode')}`}>
      <div className="p-4 space-y-3 min-h-[280px]">
        {/* Broadcast input */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/5 border border-red-500/20">
          <Radio className="w-4 h-4 text-red-400 animate-pulse" />
          <span className="text-xs text-red-400 font-medium">{t('mockup.broadcastActive')}</span>
          <span className="ml-auto text-[10px] text-muted-foreground/50">⌘⇧B</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono text-xs">
          <span className="text-primary">$</span>
          <span className="text-foreground">systemctl restart nginx && systemctl status nginx</span>
          <span className="animate-blink text-foreground">_</span>
        </div>

        {/* Server outputs */}
        <div className="grid grid-cols-2 gap-2">
          {servers.map((srv, i) => (
            <div key={srv} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] font-mono text-foreground font-medium">{srv}</span>
              </div>
              <div className="text-[9px] font-mono text-green-400/70 leading-tight">
                ● nginx.service - active (running)
              </div>
              <div className="text-[9px] font-mono text-muted-foreground/50 leading-tight">
                Active: active since {i < 2 ? '2s ago' : '1s ago'}
              </div>
            </div>
          ))}
        </div>

        {/* Toast */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-[10px] text-green-400">
          <CheckCircle className="w-3.5 h-3.5" />
          {t('mockup.broadcastSent')}
        </div>
      </div>
    </MacWindow>
  );
}

/* ═══════════════════════════════════════════
   MCP AI Integration Mockup
   ═══════════════════════════════════════════ */

function McpMockup({ t }: { t: (key: string) => string }) {
  return (
    <div className="relative">
      <div className="rounded-xl border border-white/[0.08] bg-[#2b2b2b] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex min-h-[400px]">
          {/* Claude Desktop sidebar — matches real app */}
          <div className="w-[48px] bg-[#2b2b2b] border-r border-white/[0.08] flex flex-col items-center pt-4 pb-3 gap-2.5 flex-shrink-0">
            {/* New chat */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer mb-1">
              <span className="text-white/50 text-lg leading-none">+</span>
            </div>
            {/* Claude starburst logo */}
            <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#d97757] to-[#c4644a] flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 2L13.5 8.5L18 4L14.5 9.5L22 10L15.5 12L22 14L14.5 14.5L18 20L13.5 15.5L12 22L10.5 15.5L6 20L9.5 14.5L2 14L8.5 12L2 10L9.5 9.5L6 4L10.5 8.5Z" />
              </svg>
            </div>
            {/* Search */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <Search className="w-4 h-4 text-white/40" />
            </div>
            {/* Recents */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <Clock className="w-4 h-4 text-white/40" />
            </div>
            {/* Projects */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <FolderOpen className="w-4 h-4 text-white/40" />
            </div>
            {/* MCP / Integrations */}
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center cursor-pointer relative">
              <Bot className="w-4 h-4 text-white/60" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 border-2 border-[#2b2b2b]" />
            </div>

            <div className="flex-1" />
            {/* Download */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <Download className="w-4 h-4 text-white/40" />
            </div>
            {/* User avatar */}
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white/70">A</span>
            </div>
          </div>

          {/* MCP Extensions panel */}
          {/* Chat area */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            {/* Title bar area */}
            <div className="h-9 border-b border-white/[0.06] flex items-center justify-center gap-0">
              {['Chat', 'Cowork', 'Code'].map((tab, i) => (
                <span
                  key={tab}
                  className={`px-3 py-1.5 text-[10px] font-medium rounded-md ${
                    i === 0
                      ? 'bg-white/[0.08] text-white/70'
                      : 'text-white/30'
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-hidden">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-br-sm bg-[#3d3d3d]">
                  <div className="text-[11px] text-white/90">{t('mockup.mcpPrompt')}</div>
                </div>
              </div>

              {/* Claude response */}
              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#d97757] to-[#c4644a] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
                    <path d="M12 2L13.5 8.5L18 4L14.5 9.5L22 10L15.5 12L22 14L14.5 14.5L18 20L13.5 15.5L12 22L10.5 15.5L6 20L9.5 14.5L2 14L8.5 12L2 10L9.5 9.5L6 4L10.5 8.5Z" />
                  </svg>
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="text-[9px] text-white/30">{t('mockup.mcpThinking')}</div>

                  {/* Tool calls */}
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-[9px] text-[#d97757] font-medium font-mono">ssh_execute</span>
                      </div>
                      <div className="text-[9px] text-white/40 mt-0.5 font-mono">
                        session: <span className="text-white/60">&quot;production&quot;</span> &middot; cmd: <span className="text-white/60">&quot;df -h / && free -h&quot;</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-[9px] text-[#d97757] font-medium font-mono">sftp_read_file</span>
                      </div>
                      <div className="text-[9px] text-white/40 mt-0.5 font-mono">
                        path: <span className="text-white/60">&quot;/var/log/nginx/error.log&quot;</span>
                      </div>
                    </div>
                  </div>

                  {/* Response */}
                  <div className="text-[11px] text-white/75 leading-relaxed">
                    {t('mockup.mcpResponse')}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat input */}
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#2b2b2b] border border-white/[0.1]">
                <span className="text-[11px] text-white/25 flex-1">Reply to Claude...</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SSH Tunnel Visualization
   ═══════════════════════════════════════════ */

function TunnelsMockup({ t }: { t: (key: string) => string }) {
  const tunnels = [
    { type: 'Local', local: '3306', remote: '3306', host: 'db.internal', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { type: 'Local', local: '8080', remote: '80', host: 'web.internal', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
    { type: 'SOCKS5', local: '1080', remote: '*', host: 'Dynamic proxy', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { type: 'Remote', local: '3000', remote: '3000', host: 'Expose localhost', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  ];

  return (
    <MacWindow title={`SSHive — SSH Tunnels — production`}>
      <div className="p-4 space-y-3 min-h-[280px]">
        {tunnels.map((tun, i) => (
          <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${tun.bg}`}>
            <div className={`text-[10px] font-bold uppercase tracking-wide ${tun.color} w-14`}>{tun.type}</div>
            <div className="flex-1 flex items-center gap-2 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-white/[0.05] text-foreground/80">:{tun.local}</span>
              <ArrowRight className={`w-3 h-3 ${tun.color}`} />
              <span className="px-2 py-0.5 rounded bg-white/[0.05] text-foreground/80">{tun.host}:{tun.remote}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
        ))}

        <div className="pt-2 flex items-center gap-3 text-[10px] text-muted-foreground/50">
          <Shield className="w-3.5 h-3.5" />
          {t('mockup.tunnelsEncrypted')}
        </div>
      </div>
    </MacWindow>
  );
}

/* ═══════════════════════════════════════════
   MAIN HOMEPAGE COMPONENT
   ═══════════════════════════════════════════ */

export function HomeShowcase() {
  const t = useTranslations('hero');
  const tF = useTranslations('features');
  const tW = useTranslations('whySSHive');
  const tC = useTranslations('comparison');
  const tP = useTranslations('pricing');
  const tD = useTranslations('download');
  const tHome = useTranslations('homeShowcase');
  const scrollY = useScrollY();

  const featureItems = [
    { key: 'ssh', icon: Terminal, gradient: 'from-blue-500/20 to-cyan-500/20', href: '/features/ssh' as const },
    { key: 'sftp', icon: FolderOpen, gradient: 'from-emerald-500/20 to-teal-500/20', href: '/features/sftp' as const },
    { key: 'rdp', icon: Monitor, gradient: 'from-purple-500/20 to-pink-500/20', href: '/features/rdp' as const },
    { key: 'vnc', icon: Eye, gradient: 'from-amber-500/20 to-orange-500/20', href: '/features/vnc' as const },
    { key: 'tunnels', icon: ArrowLeftRight, gradient: 'from-rose-500/20 to-red-500/20', href: '/features/tunnels' as const },
    { key: 'mcp', icon: Bot, gradient: 'from-violet-500/20 to-indigo-500/20', href: '/mcp' as const },
    { key: 'broadcast', icon: Radio, gradient: 'from-sky-500/20 to-blue-500/20', href: '/features/broadcast' as const },
    { key: 'snippets', icon: Code, gradient: 'from-lime-500/20 to-green-500/20', href: '/features/snippets' as const },
  ];

  /* comparison data */
  type CellValue = 'yes' | 'no' | 'partial';
  const featureKeys = ['sshTerminal', 'sftpManager', 'rdpClient', 'vncClient', 'sshTunnels', 'broadcastMode', 'mcpIntegration', 'nativeMacOS', 'keychainIntegration', 'macAppStore'] as const;
  const products: { name: string; data: CellValue[] }[] = [
    { name: 'SSHive', data: ['yes','yes','yes','yes','yes','yes','yes','yes','yes','yes'] },
    { name: 'MobaXterm', data: ['yes','yes','yes','yes','yes','no','no','no','no','no'] },
    { name: 'iTerm2', data: ['yes','no','no','no','no','no','no','yes','no','no'] },
    { name: 'Termius', data: ['yes','yes','no','no','yes','no','no','yes','no','yes'] },
  ];

  function CellIcon({ value }: { value: CellValue }) {
    if (value === 'yes') return <Check className="w-4 h-4 text-success mx-auto" />;
    if (value === 'no') return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
    return <Minus className="w-4 h-4 text-muted-foreground mx-auto" />;
  }

  const reasons = [
    { key: 'native', icon: Apple, color: 'text-foreground', glow: 'rgba(255,255,255,0.06)' },
    { key: 'allInOne', icon: Layers, color: 'text-primary', glow: 'rgba(122,162,247,0.08)' },
    { key: 'secure', icon: Lock, color: 'text-accent', glow: 'rgba(42,195,222,0.08)' },
  ] as const;

  return (
    <>
      {/* ═══════════════════════════════════════
         HERO — Full app mockup with parallax
         ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-16">
        {/* Parallax ambient glows */}
        <div
          className="absolute top-0 right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(122,162,247,0.1)_0%,transparent_70%)] pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute bottom-0 left-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(42,195,222,0.07)_0%,transparent_70%)] pointer-events-none"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(167,139,250,0.05)_0%,transparent_70%)] pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />

        {/* Background terminal prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none" aria-hidden="true">
          <pre className="font-mono text-[14vw] leading-tight text-foreground whitespace-nowrap">
            <span>{'>'}</span><span className="animate-blink">_</span>
          </pre>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 md:pt-8 md:pb-14 z-10 w-full">
          {/* Headline */}
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-5xl mx-auto leading-[1.05] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t('title')}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <AppStoreLink className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(122,162,247,0.3)] hover:-translate-y-px text-base">
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-px" />
                  {t('downloadCta')}
                </AppStoreLink>
                <Link
                  href="/features"
                  className="group inline-flex items-center gap-2 border border-border/50 text-foreground px-7 py-3.5 rounded-xl font-medium hover:bg-white/5 hover:border-primary/30 transition-all duration-300 text-base"
                >
                  {t('featuresCta')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              {/* Secondary path for iPhone/iPad users */}
              <p className="mt-3 text-xs text-muted-foreground">
                <Link href="/download" className="underline-offset-2 hover:underline">
                  {t('moreOptions')}
                </Link>
              </p>
            </div>
          </ScrollReveal>

          {/* SSHive App Mockup */}
          <ScrollReveal delay={200} scale>
            <div className="max-w-5xl mx-auto">
              <SSHiveAppMockup t={tHome} />
            </div>
          </ScrollReveal>

          {/* Trust line */}
          <ScrollReveal delay={400}>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {t('universalBinary')}
            </p>
          </ScrollReveal>

          {/* AI-ready hero diagram — Claude → MCP → SSH/SFTP */}
          <ScrollReveal delay={500}>
            <AIHeroDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         SHOWCASE — Interactive Feature Demos
         ═══════════════════════════════════════ */}

      {/* --- SFTP Demo --- */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="section-label mb-6 block">{tHome('sftp.label')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {tHome('sftp.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{tHome('sftp.desc')}</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ul className="mt-6 space-y-3">
                  {[tHome('sftp.b1'), tHome('sftp.b2'), tHome('sftp.b3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200} scale>
              <SftpMockup t={tHome} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- RDP Demo --- */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <RdpMockup t={tHome} />
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <span className="section-label mb-6 block">{tHome('rdp.label')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {tHome('rdp.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{tHome('rdp.desc')}</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ul className="mt-6 space-y-3">
                  {[tHome('rdp.b1'), tHome('rdp.b2'), tHome('rdp.b3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Broadcast Mode --- */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="section-label mb-6 block">{tHome('broadcast.label')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {tHome('broadcast.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{tHome('broadcast.desc')}</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ul className="mt-6 space-y-3">
                  {[tHome('broadcast.b1'), tHome('broadcast.b2'), tHome('broadcast.b3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200} scale>
              <BroadcastMockup t={tHome} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- SSH Tunnels --- */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <TunnelsMockup t={tHome} />
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <span className="section-label mb-6 block">{tHome('tunnels.label')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {tHome('tunnels.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{tHome('tunnels.desc')}</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ul className="mt-6 space-y-3">
                  {[tHome('tunnels.b1'), tHome('tunnels.b2'), tHome('tunnels.b3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- MCP / AI Integration --- */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="section-label mb-6 block">{tHome('mcp.label')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {tHome('mcp.title')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{tHome('mcp.desc')}</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ul className="mt-6 space-y-3">
                  {[tHome('mcp.b1'), tHome('mcp.b2'), tHome('mcp.b3')].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link
                  href="/mcp"
                  className="group inline-flex items-center gap-2 mt-6 text-primary font-medium link-underline text-sm"
                >
                  {tHome('mcp.learnMore')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200} scale>
              <McpMockup t={tHome} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         FEATURES GRID
         ═══════════════════════════════════════ */}
      <section className="relative py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-label mb-4 block">Features</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {tF('title')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{tF('subtitle')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureItems.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.key} delay={i * 60}>
                  <div className="glass-card rounded-xl p-6 h-full group">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {tF(`${feature.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tF(`${feature.key}.shortDesc`)}</p>
                    <Link href={feature.href} className="inline-flex items-center text-sm text-primary font-medium link-underline transition-colors hover:text-accent">
                      {tF('learnMore')} &rarr;
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         WHY SSHIVE
         ═══════════════════════════════════════ */}
      <section className="relative py-14 md:py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-label mb-4 block">Why SSHive</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {tW('title')}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={reason.key} delay={i * 100}>
                  <div className="glass-card rounded-2xl p-8 text-center h-full">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110" style={{ background: reason.glow }}>
                      <Icon className={`w-7 h-7 ${reason.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {tW(`${reason.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{tW(`${reason.key}.description`)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         COMPARISON TABLE
         ═══════════════════════════════════════ */}
      <section className="relative py-14 md:py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-label mb-4 block">Compare</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                {tC('title')}
              </h2>
            </div>
          </ScrollReveal>
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
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-4 border-b border-white/5 uppercase tracking-wider">{tC('feature')}</th>
                      {products.map((p, idx) => (
                        <th key={p.name} className={`text-center text-sm font-semibold py-3 px-4 border-b border-white/5 ${idx === 0 ? 'text-primary' : 'text-foreground'}`} style={idx === 0 ? { fontFamily: 'var(--font-display)' } : undefined}>
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureKeys.map((fk, rowIdx) => (
                      <tr key={fk} className="hover:bg-white/[0.02] transition-colors">
                        <td className="text-sm text-foreground/80 py-3 px-4 border-b border-white/[0.03]">{tC(fk)}</td>
                        {products.map((p, colIdx) => (
                          <td key={p.name} className={`text-center py-3 px-4 border-b border-white/[0.03] ${colIdx === 0 ? 'bg-primary/[0.03]' : ''}`}>
                            <CellIcon value={p.data[rowIdx]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 text-center">
              <Link href="/compare" className="group inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors text-base link-underline">
                {tC('seeFullComparison')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Old pricing section removed — replaced by launch offer section below */}

      {/* ═══════════════════════════════════════
         DOWNLOAD CTA
         ═══════════════════════════════════════ */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(122,162,247,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {tD('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{tD('subtitle')}</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <AppStoreLink className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(122,162,247,0.35)] hover:-translate-y-px text-base">
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-px" />
                {tD('dmgButton', { version: APP_VERSION })}
              </AppStoreLink>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" />{tD('noAccount')}</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" />{tD('noAds')}</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" />{tD('keychainSecurity')}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         PRICING — Free + Pro side by side
         ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(122,162,247,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label mb-4 justify-center">{tHome('offer.label')}</span>
              <h2
                className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {tHome('offer.title')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                {tHome('offer.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* FREE card */}
            <ScrollReveal delay={100}>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{tHome('offer.free.name')}</h3>
                  <div className="mb-1">
                    <span className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      {tHome('offer.free.price')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">{tHome('offer.free.period')}</p>

                  <div className="space-y-3 mb-8 flex-1">
                    {(['0','1','2','3','4','5'] as const).map((i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{tHome(`offer.free.features.${i}`)}</span>
                      </div>
                    ))}
                  </div>

                  <AppStoreLink className="w-full py-3.5 px-6 border border-border text-foreground font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                    <Download className="w-4 h-4" />
                    {tHome('offer.free.cta')}
                  </AppStoreLink>
                </div>
              </div>
            </ScrollReveal>

            {/* PRO card */}
            <ScrollReveal delay={200}>
              <div className="h-full relative">
                {/* Glow border */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-[#a78bfa]/40 blur-sm opacity-60" />

                <div className="relative h-full rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden flex flex-col">
                  {/* Launch badge ribbon */}
                  <div className="bg-gradient-to-r from-primary via-accent to-[#a78bfa] px-4 py-2 text-center">
                    <span className="text-xs font-bold text-white tracking-wide uppercase">{tHome('offer.pro.badge')} — {tHome('offer.pro.savings')}</span>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Pro</h3>
                    <div className="flex items-end gap-2.5 mb-1">
                      <span className="text-xl text-muted-foreground/40 line-through font-medium">{tHome('offer.pro.originalPrice')}</span>
                      <span className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                        {tHome('offer.pro.price')}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-8">{tHome('offer.pro.period')}</p>

                    <div className="space-y-3 mb-8 flex-1">
                      {([
                        { i: '0', icon: <Terminal className="w-3.5 h-3.5 text-primary/60" /> },
                        { i: '1', icon: <Monitor className="w-3.5 h-3.5 text-purple-400/60" /> },
                        { i: '2', icon: <ArrowLeftRight className="w-3.5 h-3.5 text-rose-400/60" /> },
                        { i: '3', icon: <Radio className="w-3.5 h-3.5 text-sky-400/60" /> },
                        { i: '4', icon: <Bot className="w-3.5 h-3.5 text-violet-400/60" /> },
                        { i: '5', icon: <Zap className="w-3.5 h-3.5 text-amber-400/60" /> },
                      ] as const).map(({ i, icon }) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80 flex-1">{tHome(`offer.pro.features.${i}`)}</span>
                          {icon}
                        </div>
                      ))}
                    </div>

                    <AppStoreLink className="w-full py-3.5 px-6 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-primary/20">
                      <Rocket className="w-4 h-4" />
                      {tHome('offer.pro.cta')}
                    </AppStoreLink>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-sm text-muted-foreground/50 mt-8">{tHome('offer.guarantee')}</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
