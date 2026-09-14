import { JsonLd } from './JsonLd';
import { SITE_URL, APP_VERSION, APP_STORE_URL, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SSHive',
        operatingSystem: 'macOS 12+, iOS 17+, iPadOS 17+',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'SSH Client',
        description:
          'Native Apple SSH, SFTP, FTP, FTPS, RDP, VNC, Telnet and serial console client for Mac, iPhone and iPad. Reach a router or switch through a USB-to-serial adapter, open SSH tunnels, and keep every secret in the Touch ID / Face ID Keychain.',
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
            price: '8.99',
            priceCurrency: 'USD',
            name: 'SSHive Pro',
            availability: 'https://schema.org/InStock',
            url: APP_STORE_URL,
          },
        ],
        downloadUrl: APP_STORE_UNIVERSAL_URL,
        installUrl: APP_STORE_UNIVERSAL_URL,
        softwareVersion: APP_VERSION,
        fileSize: '260MB',
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
          'SSH terminal (Mac, iPhone, iPad), xterm-256color, 8 themes, pinch-to-zoom',
          'SFTP file manager (Mac, iPhone, iPad), built-in remote text editor',
          'RDP remote desktop (Mac, iPhone, iPad), FreeRDP 3, NLA, Active Directory',
          'VNC viewer (Mac, iPhone, iPad), RoyalVNC, TLS, ARD',
          'VPN client (iPhone, iPad), IKEv2, IPSec/Xauth, OpenVPN, NetworkExtension',
          'SSH tunnels: local (-L), remote (-R) and SOCKS5 (-D) on Mac; local (-L) on iPhone and iPad',
          'Broadcast mode for multi-server commands (Mac)',
          'MCP server for AI integration (Claude Code, Cursor, Claude Desktop), macOS only',
          'Network tools (Mac, iPhone, iPad), ping, traceroute, DNS, MX, whois, DNSBL',
          'Touch ID / Face ID-secured Keychain credential storage',
          'Quick commands / snippet library',
          'TOTP / HOTP authenticator with encrypted vault (Mac)',
          'Serial console over USB-to-serial adapters (Mac), baud rate, parity, flow control, BREAK signal, session logging',
          'Telnet client, RFC 854, with optional authentication (Mac, iPhone, iPad)',
          'FTP and FTPS (AUTH TLS) file transfer alongside SFTP (Mac)',
          'RDP server certificate pinning with fingerprint change detection (Mac)',
          'Customizable keyboard shortcuts (Mac)',
        ],
        softwareRequirements: 'macOS 12 Monterey or later, iOS 17+, iPadOS 17+',
        processorRequirements: 'Apple Silicon (M1 or later) on Mac; A12 Bionic or later on iPhone/iPad',
        releaseNotes: `${SITE_URL}/en/changelog`,
        screenshot: `${SITE_URL}/opengraph-image`,
      }}
    />
  );
}
