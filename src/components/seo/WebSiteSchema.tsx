import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

/**
 * WebSite schema. Helps Google render a sitelinks searchbox once the site
 * earns enough authority, and consolidates the site identity across hreflang
 * variants by declaring a single inLanguage list.
 */
export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SSHive',
        alternateName: 'SSHive App',
        url: SITE_URL,
        inLanguage: ['en', 'fr'],
        description:
          'Native Apple SSH/SFTP client for Mac, iPhone and iPad with embedded RDP, VNC, tunnels and AI MCP integration.',
        publisher: {
          '@type': 'Organization',
          name: 'NetMeSafe',
          url: 'https://netmesafe.com',
          logo: `${SITE_URL}/icon.svg`,
        },
      }}
    />
  );
}
