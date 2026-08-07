import { JsonLd } from './JsonLd';
import { SITE_URL, APP_STORE_UNIVERSAL_URL } from '@/lib/constants';

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NetMeSafe',
        url: 'https://netmesafe.com',
        logo: `${SITE_URL}/icon.svg`,
        description:
          'NetMeSafe develops SSHive, a native Apple SSH, SFTP, RDP, VNC and VPN client for Mac, iPhone and iPad.',
        email: 'contact@netmesafe.com',
        // sameAs is how a knowledge graph (and an LLM reading it) ties this
        // name to profiles it already trusts. Only canonical, verifiable
        // properties belong here — a wrong entry merges us with someone else.
        sameAs: [
          'https://www.linkedin.com/company/netmesafe/',
          APP_STORE_UNIVERSAL_URL,
          'https://netmesafe.com',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'contact@netmesafe.com',
          contactType: 'customer support',
          url: `${SITE_URL}/en/contact`,
          availableLanguage: ['English', 'French'],
        },
        brand: {
          '@type': 'Brand',
          name: 'SSHive',
          url: SITE_URL,
          logo: `${SITE_URL}/icon.svg`,
        },
      }}
    />
  );
}
