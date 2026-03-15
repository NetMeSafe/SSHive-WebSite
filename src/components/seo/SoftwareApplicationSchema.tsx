import { JsonLd } from './JsonLd';
import { SITE_URL, APP_VERSION, DOWNLOAD_URL } from '@/lib/constants';

export function SoftwareApplicationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SSHive',
        operatingSystem: 'macOS',
        applicationCategory: 'DeveloperApplication',
        description: 'SSH, SFTP, RDP & VNC client for macOS with Keychain security',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'SSHive Free' },
          { '@type': 'Offer', price: '9.99', priceCurrency: 'USD', name: 'SSHive Pro' },
        ],
        downloadUrl: DOWNLOAD_URL,
        softwareVersion: APP_VERSION,
        author: { '@type': 'Person', name: 'Lucas Russo' },
        url: SITE_URL,
      }}
    />
  );
}
