import { JsonLd } from './JsonLd';
import { SITE_URL, APP_VERSION, APP_STORE_URL, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SSHive',
        operatingSystem: 'macOS 13+, iOS 17+, iPadOS 17+',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'SSH Client',
        description:
          'Native Apple SSH, SFTP, RDP, VNC and VPN client for Mac, iPhone and iPad. SSH tunnels, broadcast and Touch ID Keychain on every device. Built-in MCP server for Claude Code, Cursor and Claude Desktop on macOS.',
        offers: [
          {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            name: 'SSHive Free',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            price: '9.99',
            priceCurrency: 'USD',
            name: 'SSHive Pro',
            availability: 'https://schema.org/InStock',
            url: APP_STORE_URL,
          },
        ],
        downloadUrl: APP_STORE_UNIVERSAL_URL,
        installUrl: APP_STORE_UNIVERSAL_URL,
        softwareVersion: APP_VERSION,
        fileSize: '150MB',
        author: {
          '@type': 'Organization',
          name: 'NetMeSafe',
          url: 'https://netmesafe.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'NetMeSafe',
          url: 'https://netmesafe.com',
        },
        url: SITE_URL,
        featureList: [
          'SSH terminal (Mac, iPhone, iPad) — xterm-256color, 8 themes, pinch-to-zoom',
          'SFTP file manager (Mac, iPhone, iPad) — built-in remote text editor',
          'RDP remote desktop (Mac, iPhone, iPad) — FreeRDP 3, NLA, Active Directory',
          'VNC viewer (Mac, iPhone, iPad) — RoyalVNC, TLS, ARD',
          'VPN client (iPhone, iPad) — IKEv2, IPSec/Xauth, OpenVPN, NetworkExtension',
          'SSH tunnels (Mac, iPhone, iPad) — local, remote, SOCKS5 dynamic',
          'Broadcast mode for multi-server commands (Mac, iPhone, iPad)',
          'MCP server for AI integration (Claude Code, Cursor, Claude Desktop) — macOS only',
          'Network tools (Mac, iPhone, iPad) — ping, traceroute, DNS, MX, whois, DNSBL',
          'Touch ID / Face ID-secured Keychain credential storage',
          'Quick commands / snippet library',
          'TOTP / HOTP authenticator with encrypted vault',
        ],
        softwareRequirements: 'macOS 13 Ventura or later, iOS 17+, iPadOS 17+',
        processorRequirements: 'Apple Silicon (M1/M2/M3/M4) or Intel x64 on Mac; A12 Bionic or later on iPhone/iPad',
        releaseNotes: `${SITE_URL}/en/changelog`,
        screenshot: `${SITE_URL}/opengraph-image`,
      }}
    />
  );
}
