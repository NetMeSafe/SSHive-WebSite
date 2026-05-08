import { JsonLd } from './JsonLd';
import { SITE_URL, APP_VERSION, DOWNLOAD_URL, APP_STORE_URL, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SSHive',
        operatingSystem: 'macOS 13+, iOS, iPadOS',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'SSH Client',
        description:
          'Native Apple SSH/SFTP client for Mac, iPhone and iPad. Adds embedded RDP, VNC, SSH tunnels and broadcast on macOS. Touch ID-secured Keychain credentials and a built-in MCP server for Claude Code, Cursor and Claude Desktop.',
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
        downloadUrl: DOWNLOAD_URL,
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
          'SSH Terminal (Mac, iPhone, iPad) with GPU-accelerated rendering on macOS',
          'SFTP dual-pane file manager (Mac, iPhone, iPad)',
          'RDP remote desktop on macOS via IronRDP / freerdp-native',
          'VNC viewer on macOS via noVNC',
          'SSH tunnels (local, remote, SOCKS5) on macOS',
          'Broadcast mode for multi-server commands on macOS',
          'MCP server for AI integration (Claude Code, Cursor, Claude Desktop) on macOS',
          'Touch ID-secured Keychain credential storage',
          'Quick commands / snippet library',
          'TOTP / HOTP authenticator with encrypted vault',
        ],
        softwareRequirements: 'macOS 13 Ventura or later, iOS 16+, iPadOS 16+',
        processorRequirements: 'Apple Silicon (M1/M2/M3/M4) or Intel x64 on Mac; A12 Bionic or later on iPhone/iPad',
        releaseNotes: `${SITE_URL}/en/changelog`,
        screenshot: `${SITE_URL}/opengraph-image`,
      }}
    />
  );
}
