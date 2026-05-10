import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

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
          'NetMeSafe develops SSHive, an all-in-one SSH, SFTP, RDP & VNC client for macOS.',
        email: 'contact@netmesafe.com',
        sameAs: ['https://www.linkedin.com/company/netmesafe/'],
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
