import { JsonLd } from './JsonLd';
import { SITE_URL, APP_VERSION, DOWNLOAD_URL, APP_STORE_URL } from '@/lib/constants';

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SSHive',
        operatingSystem: 'macOS 13+',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'SSH Client',
        description:
          'SSH, SFTP, RDP & VNC client for macOS. All-in-one terminal with Keychain security, SSH tunnels, broadcast mode, and AI integration via MCP.',
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
        installUrl: APP_STORE_URL,
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
          'SSH Terminal with GPU-accelerated rendering',
          'SFTP dual-pane file manager with drag & drop',
          'RDP remote desktop via IronRDP',
          'VNC viewer via noVNC',
          'SSH tunnels (local, remote, SOCKS5)',
          'Broadcast mode for multi-server commands',
          'MCP server for AI integration (Claude, Cursor)',
          'macOS Keychain credential encryption',
          'Quick commands library',
        ],
        softwareRequirements: 'macOS 13 Ventura or later',
        processorRequirements: 'Apple Silicon (M1/M2/M3/M4) or Intel x64',
        releaseNotes: `${SITE_URL}/en/changelog`,
        screenshot: `${SITE_URL}/opengraph-image`,
      }}
    />
  );
}
