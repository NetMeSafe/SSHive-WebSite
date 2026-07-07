import { SITE_URL, FEATURES, COMPETITORS, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';
import { USE_CASE_SLUGS } from '@/lib/seo/use-cases';
import { HOW_TO_SLUGS } from '@/lib/seo/how-tos';
import { BEST_PAGE_SLUGS } from '@/lib/seo/best-pages';
import { IOS_PAGE_SLUGS } from '@/lib/seo/ios-pages';
import { INTEGRATION_SLUGS } from '@/lib/seo/integrations';

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

> SSHive is a native SSH, SFTP, RDP and VNC client for macOS, iPhone and iPad. Its differentiator: a built-in MCP (Model Context Protocol) server that lets AI assistants such as Claude Code, Cursor and Claude Desktop drive SSH sessions and SFTP transfers directly, with no extra install. Freemium: the macOS app is a free direct download (DMG), SSHive Pro is a one-time purchase (no subscription) on the App Store (Universal Purchase: Mac, iPhone, iPad).

Key facts:

- Platforms: macOS 13+ (Apple Silicon native), iOS 16+, iPadOS 16+.
- Universal features (Mac + iPhone + iPad): SSH terminal, SFTP file manager, connection profiles, jump hosts, biometric unlock (Touch ID / Face ID).
- macOS-only features: embedded RDP, embedded VNC, SSH tunnels (local -L, remote -R, SOCKS5 -D), multi-host broadcast, snippet library, network tools, local MCP server.
- MCP server: runs locally on port 49422 with Bearer-token auth; exposes ssh_execute and sftp_list / sftp_read_file / sftp_write_file tools; auto-configures Claude Code, Cursor and Claude Desktop.
- Security: credentials in the macOS Keychain / iOS Keychain, known-hosts fingerprint management, app lock, built-in TOTP/HOTP authenticator; no cloud sync, nothing leaves the device.
- Imports: ~/.ssh/config, PuTTY, Royal TSX .rtsz, cleartext MobaXterm.ini.
- Pricing: free tier with generous limits; Pro is a one-time purchase on the App Store: ${APP_STORE_UNIVERSAL_URL}
- SSHive is proprietary software (not open source).

## Core pages

- [Homepage](${SITE_URL}/en): product overview and download.
- [Download](${SITE_URL}/en/download): free DMG for macOS + App Store links.
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
