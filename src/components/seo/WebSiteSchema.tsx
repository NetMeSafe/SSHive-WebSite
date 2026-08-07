import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

/**
 * WebSite schema — site identity, not a rich result.
 *
 * It does NOT produce a sitelinks searchbox: Google removed that feature on
 * 2024-11-21. It is kept because it names the site as one entity across both
 * hreflang variants and gives an extractor an unambiguous publisher, which is
 * what actually matters for an assistant trying to attribute a claim.
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
          'Native Apple SSH, SFTP, RDP, VNC and VPN client for Mac, iPhone and iPad, with a built-in MCP server for Claude Code, Cursor and Claude Desktop.',
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
