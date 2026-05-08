import { JsonLd } from './JsonLd';
import { SITE_URL } from '@/lib/constants';

export interface HowToStep {
  name: string;
  text: string;
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime = 'PT5M',
}: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        totalTime,
        image: `${SITE_URL}/icon.svg`,
        supply: [],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'SSHive',
          },
          {
            '@type': 'HowToTool',
            name: 'macOS 13 or later',
          },
        ],
        step: steps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      }}
    />
  );
}
