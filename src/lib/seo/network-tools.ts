import type { Bilingual, QA } from './features';

export interface NetworkToolSection {
  title: Bilingual;
  body: Bilingual;
}

export type NetworkToolIcon =
  | 'Activity'
  | 'Route'
  | 'Globe'
  | 'Search'
  | 'Mail'
  | 'ShieldAlert'
  | 'Network';

export interface NetworkToolSEO {
  /** Empty string for the /network-tools hub page. */
  slug: string;
  iconName: NetworkToolIcon;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  /** Long-form opener, 250-350 words. */
  intro: Bilingual;
  /** 4-6 capability tiles. */
  capabilities: NetworkToolSection[];
  /** Real UI steps, rendered as visible content and as HowTo structured data. */
  steps: NetworkToolSection[];
  /** The differentiator: how to actually read the tool's output. */
  interpret: NetworkToolSection;
  faq: QA[];
  /** Technical long-form close, 400-550 words. */
  deepDive: NetworkToolSection;
  /** Sibling tool slugs for internal linking. */
  relatedTools: string[];
}

export const NETWORK_TOOLS: NetworkToolSEO[] = [];

/** Tool pages only — the hub (empty slug) is excluded. */
export const NETWORK_TOOL_SLUGS = NETWORK_TOOLS.filter((t) => t.slug !== '').map(
  (t) => t.slug,
);

export function getNetworkTool(slug: string): NetworkToolSEO | undefined {
  return NETWORK_TOOLS.find((t) => t.slug === slug);
}

export function getNetworkToolsHub(): NetworkToolSEO | undefined {
  return NETWORK_TOOLS.find((t) => t.slug === '');
}
