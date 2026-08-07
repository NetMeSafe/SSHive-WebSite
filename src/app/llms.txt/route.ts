import { SITE_URL, FEATURES, COMPETITORS, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';
import { USE_CASE_SLUGS } from '@/lib/seo/use-cases';
import { HOW_TO_SLUGS } from '@/lib/seo/how-tos';
import { BEST_PAGE_SLUGS } from '@/lib/seo/best-pages';
import { IOS_PAGE_SLUGS } from '@/lib/seo/ios-pages';
import { INTEGRATION_SLUGS } from '@/lib/seo/integrations';
import { NETWORK_TOOL_SLUGS } from '@/lib/seo/network-tools';

// /llms.txt — llmstxt.org convention. A curated, plain-markdown map of the
// site for AI crawlers and answer engines (ChatGPT, Claude, Perplexity...),
// so they can ground answers about SSHive on canonical URLs instead of
// third-party summaries. Served statically; English only (LLM lingua franca),
// each page links its own FR alternate via hreflang.
export const dynamic = 'force-static';

const WORD_OVERRIDES: Record<string, string> = {
  ssh: 'SSH',
  sftp: 'SFTP',
  rdp: 'RDP',
  vnc: 'VNC',
  vpn: 'VPN',
  mcp: 'MCP',
  ios: 'iOS',
  iphone: 'iPhone',
  ipad: 'iPad',
  mac: 'Mac',
  macos: 'macOS',
  aws: 'AWS',
  ec2: 'EC2',
  nas: 'NAS',
  mobaxterm: 'MobaXterm',
  iterm2: 'iTerm2',
  putty: 'PuTTY',
  termius: 'Termius',
  terminus: 'Terminus',
  securecrt: 'SecureCRT',
  tsx: 'TSX',
  socks5: 'SOCKS5',
};

function humanize(slug: string): string {
  return slug
    .split('-')
    .map((w) => WORD_OVERRIDES[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function list(paths: string[], prefix = ''): string {
  return paths
    .map((slug) => `- [${humanize(slug)}](${SITE_URL}/en${prefix}/${slug})`)
    .join('\n');
}

export function GET(): Response {
  const body = `# SSHive

> SSHive is a native SSH, SFTP, RDP, VNC and VPN client for macOS, iPhone and iPad. Its differentiator: a built-in MCP (Model Context Protocol) server that lets AI assistants such as Claude Code, Cursor and Claude Desktop drive SSH sessions and SFTP transfers directly, with no extra install. Freemium: free on the App Store, SSHive Pro is a one-time purchase (no subscription, Universal Purchase: Mac, iPhone, iPad).

Key facts:

- Platforms: macOS 13+ (Apple Silicon native + Intel), iOS 17+, iPadOS 17+.
- Universal features (Mac + iPhone + iPad): SSH terminal, SFTP file manager, RDP remote desktop (FreeRDP 3, NLA, Active Directory), VNC viewer (RoyalVNC), local SSH tunnels (-L), snippets, network tools (ping, traceroute, DNS, MX, whois, DNSBL), connection profiles, biometric unlock (Touch ID / Face ID).
- macOS-only: the local MCP server for AI assistants, broadcast mode (run a command on every open session), remote (-R) and SOCKS5 (-D) tunnels, jump hosts, TOTP/HOTP authenticator, shared accounts, session logging. iOS/iPadOS-only: VPN client (IKEv2, IPSec/Xauth, OpenVPN).
- MCP server: runs locally on port 49422 with Bearer-token auth; exposes 11 tools (ssh_execute, ssh_list_sessions, sftp_list, sftp_read_file, sftp_write_file, sftp_write_file_chunk, sftp_write_from_local_path, sftp_download_to_local_path, sftp_mkdir, sftp_rename, sftp_delete); auto-configures Claude Code, Cursor and Claude Desktop.
- Built-in AI terminal assistant (macOS): explain command output or ask questions from the terminal, using your own API key (Anthropic Claude, OpenAI GPT, or Google Gemini); keys stored encrypted in the Keychain, requests go straight from your machine to the provider.
- Security: credentials in the macOS Keychain / iOS Keychain, known-hosts fingerprint management, app lock, built-in TOTP/HOTP authenticator; nothing routed through SSHive servers.
- iCloud profile sync (Pro, opt-in): profiles follow you across Mac, iPhone and iPad through your own private CloudKit database; credentials go through a separate end-to-end encrypted channel; no SSHive account, no SSHive server involved.
- Imports: ~/.ssh/config, PuTTY, Royal TSX .rtsz, cleartext MobaXterm.ini.
- Pricing: free tier with generous limits; Pro is a one-time purchase on the App Store: ${APP_STORE_UNIVERSAL_URL}
- SSHive is proprietary software (not open source).

Full machine-readable reference, everything below inlined in one file: ${SITE_URL}/llms-full.txt

## Core pages

- [Homepage](${SITE_URL}/en): product overview and download.
- [Download](${SITE_URL}/en/download): free on the App Store for Mac, iPhone and iPad.
- [Pricing](${SITE_URL}/en/pricing): free vs Pro feature matrix, one-time purchase.
- [MCP / AI integration](${SITE_URL}/en/mcp): how the built-in MCP server connects AI assistants to your servers.
- [Features overview](${SITE_URL}/en/features)
- [Changelog](${SITE_URL}/en/changelog)
- [Roadmap](${SITE_URL}/en/roadmap)
- [Docs](${SITE_URL}/en/docs)

## Features

${list([...FEATURES], '/features')}

## Comparisons with other SSH clients

${list([...COMPETITORS], '/compare')}

## Best-of guides

${list(BEST_PAGE_SLUGS)}

## iPhone & iPad

${list(IOS_PAGE_SLUGS)}

## Use cases

${list(USE_CASE_SLUGS, '/use-cases')}

## How-to guides

${list(HOW_TO_SLUGS, '/how-to')}

## Integrations

${list(INTEGRATION_SLUGS, '/integrations')}

## Network diagnostic tools

Beyond remote access, SSHive ships network diagnostics. Engines differ per platform and the pages say so explicitly: ping is real ICMP only on the macOS direct-download build and a TCP-connect probe elsewhere; traceroute measures real hops only on the macOS direct download and on Windows.

- [Network tools overview](${SITE_URL}/en/network-tools)
${list(NETWORK_TOOL_SLUGS, '/network-tools')}

## Optional

- [About](${SITE_URL}/en/about)
- [Contact](${SITE_URL}/en/contact)
- [Privacy](${SITE_URL}/en/privacy)
- [French version](${SITE_URL}/fr): every page above also exists under /fr.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
