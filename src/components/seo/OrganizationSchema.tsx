import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SSHive',
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        sameAs: ['https://twitter.com/sshiveapp'],
      }}
    />
  );
}
