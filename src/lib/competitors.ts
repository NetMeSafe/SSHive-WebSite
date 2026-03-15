import type { Competitor } from './constants';

export interface FeatureComparison {
  key: string;
  sshive: string | boolean;
  competitor: string | boolean;
}

export interface CompetitorData {
  name: string;
  slug: Competitor;
  description: {
    en: string;
    fr: string;
  };
  verdict: {
    en: string;
    fr: string;
  };
  features: FeatureComparison[];
}

export const COMPETITOR_DATA: Record<Competitor, CompetitorData> = {
  mobaxterm: {
    name: 'MobaXterm',
    slug: 'mobaxterm',
    description: {
      en: 'MobaXterm is a popular all-in-one terminal for Windows. SSHive brings the same concept to macOS with native integration, Keychain security, and AI capabilities that MobaXterm lacks.',
      fr: 'MobaXterm est un terminal tout-en-un populaire pour Windows. SSHive apporte le meme concept sur macOS avec une integration native, la securite Trousseau et des capacites IA que MobaXterm n\'a pas.',
    },
    verdict: {
      en: 'If you\'re looking for a MobaXterm-like experience on macOS, SSHive is the closest alternative — with the added benefits of Keychain security, AI integration, and running natively on Apple Silicon.',
      fr: 'Si vous cherchez une experience similaire a MobaXterm sur macOS, SSHive est l\'alternative la plus proche — avec les avantages supplementaires de la securite Trousseau, de l\'integration IA et de tourner nativement sur Apple Silicon.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: true },
      { key: 'rdpClient', sshive: true, competitor: true },
      { key: 'vncClient', sshive: true, competitor: true },
      { key: 'sshTunnels', sshive: true, competitor: true },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: false },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'macAppStore', sshive: true, competitor: false },
      { key: 'price', sshive: 'Free / $9.99 Pro', competitor: 'Free / $69 Pro' },
    ],
  },
  iterm2: {
    name: 'iTerm2',
    slug: 'iterm2',
    description: {
      en: 'iTerm2 is the most popular terminal emulator for macOS. While it excels as a terminal, SSHive goes further with built-in SFTP, RDP, VNC, and SSH tunnel management.',
      fr: 'iTerm2 est l\'emulateur de terminal le plus populaire pour macOS. Bien qu\'il excelle en tant que terminal, SSHive va plus loin avec SFTP integre, RDP, VNC et la gestion des tunnels SSH.',
    },
    verdict: {
      en: 'iTerm2 is a great terminal emulator, but SSHive offers a complete remote management suite. If you need more than just SSH, SSHive saves you from juggling multiple apps.',
      fr: 'iTerm2 est un excellent emulateur de terminal, mais SSHive offre une suite complete de gestion a distance. Si vous avez besoin de plus que du SSH, SSHive vous evite de jongler entre plusieurs applications.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: false },
      { key: 'rdpClient', sshive: true, competitor: false },
      { key: 'vncClient', sshive: true, competitor: false },
      { key: 'sshTunnels', sshive: true, competitor: false },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: true },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'macAppStore', sshive: true, competitor: false },
      { key: 'connectionProfiles', sshive: true, competitor: false },
      { key: 'price', sshive: 'Free / $9.99 Pro', competitor: 'Free' },
    ],
  },
  terminus: {
    name: 'Tabby (Terminus)',
    slug: 'terminus',
    description: {
      en: 'Terminus (now Tabby) is a cross-platform terminal with a modern UI. SSHive focuses exclusively on macOS with deeper native integration and built-in remote desktop support.',
      fr: 'Terminus (maintenant Tabby) est un terminal multi-plateforme avec une interface moderne. SSHive se concentre exclusivement sur macOS avec une integration native plus profonde et le support bureau a distance integre.',
    },
    verdict: {
      en: 'Both are modern terminals, but SSHive\'s focus on macOS means better native integration. SSHive also includes RDP, VNC, and AI integration that Tabby lacks.',
      fr: 'Les deux sont des terminaux modernes, mais la focalisation de SSHive sur macOS signifie une meilleure integration native. SSHive inclut aussi RDP, VNC et l\'integration IA que Tabby n\'a pas.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: 'partial' },
      { key: 'rdpClient', sshive: true, competitor: false },
      { key: 'vncClient', sshive: true, competitor: false },
      { key: 'sshTunnels', sshive: true, competitor: 'partial' },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: true },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'macAppStore', sshive: true, competitor: false },
      { key: 'price', sshive: 'Free / $9.99 Pro', competitor: 'Free' },
    ],
  },
  putty: {
    name: 'PuTTY',
    slug: 'putty',
    description: {
      en: 'PuTTY is a classic SSH client beloved by generations of administrators. While it\'s simple and reliable, SSHive offers a modern, feature-rich alternative with a native macOS experience.',
      fr: 'PuTTY est un client SSH classique aime par des generations d\'administrateurs. Bien qu\'il soit simple et fiable, SSHive offre une alternative moderne et riche en fonctionnalites avec une experience macOS native.',
    },
    verdict: {
      en: 'PuTTY is a timeless classic, but SSHive brings SSH management into 2026 with a modern UI, SFTP, RDP, VNC, and AI integration — all in one native macOS app.',
      fr: 'PuTTY est un classique intemporel, mais SSHive amene la gestion SSH en 2026 avec une interface moderne, SFTP, RDP, VNC et l\'integration IA — le tout dans une seule app macOS native.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: false },
      { key: 'rdpClient', sshive: true, competitor: false },
      { key: 'vncClient', sshive: true, competitor: false },
      { key: 'sshTunnels', sshive: true, competitor: 'partial' },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: 'via unofficial port' },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'modernUI', sshive: true, competitor: false },
      { key: 'price', sshive: 'Free / $9.99 Pro', competitor: 'Free' },
    ],
  },
  termius: {
    name: 'Termius',
    slug: 'termius',
    description: {
      en: 'Termius is a polished SSH client available on multiple platforms. SSHive offers a comparable experience on macOS with the advantage of Keychain security, one-time pricing, and AI integration.',
      fr: 'Termius est un client SSH soigne disponible sur plusieurs plateformes. SSHive offre une experience comparable sur macOS avec l\'avantage de la securite Trousseau, un prix unique et l\'integration IA.',
    },
    verdict: {
      en: 'Termius is feature-rich but requires a $10/month subscription for advanced features. SSHive offers comparable functionality with a one-time $9.99 Pro upgrade and no recurring costs.',
      fr: 'Termius est riche en fonctionnalites mais necessite un abonnement a 10 $/mois pour les fonctionnalites avancees. SSHive offre une fonctionnalite comparable avec un achat unique a 9,99 $ sans frais recurrents.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: true },
      { key: 'rdpClient', sshive: true, competitor: false },
      { key: 'vncClient', sshive: true, competitor: false },
      { key: 'sshTunnels', sshive: true, competitor: 'Pro only' },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: true },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'macAppStore', sshive: true, competitor: true },
      { key: 'price', sshive: '$9.99 one-time', competitor: '$10/month' },
    ],
  },
  'royal-tsx': {
    name: 'Royal TSX',
    slug: 'royal-tsx',
    description: {
      en: 'Royal TSX is a remote management tool for macOS supporting multiple protocols. SSHive offers a similar feature set with Keychain security, modern AI integration, and a more affordable price.',
      fr: 'Royal TSX est un outil de gestion a distance pour macOS supportant plusieurs protocoles. SSHive offre un ensemble de fonctionnalites similaire avec la securite Trousseau, une integration IA moderne et un prix plus accessible.',
    },
    verdict: {
      en: 'Royal TSX is a solid choice for macOS remote management, but SSHive matches its core features while including modern AI integration via MCP and costing a fraction of the price.',
      fr: 'Royal TSX est un choix solide pour la gestion a distance sur macOS, mais SSHive correspond a ses fonctionnalites principales tout en incluant l\'integration IA moderne via MCP et en coutant une fraction du prix.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: true },
      { key: 'rdpClient', sshive: true, competitor: true },
      { key: 'vncClient', sshive: true, competitor: true },
      { key: 'sshTunnels', sshive: true, competitor: true },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: true },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'macAppStore', sshive: true, competitor: true },
      { key: 'price', sshive: '$9.99 one-time', competitor: '$29' },
    ],
  },
  securecrt: {
    name: 'SecureCRT',
    slug: 'securecrt',
    description: {
      en: 'SecureCRT is an enterprise SSH client from VanDyke Software. SSHive provides a modern alternative with comparable features at a fraction of the price.',
      fr: 'SecureCRT est un client SSH entreprise de VanDyke Software. SSHive fournit une alternative moderne avec des fonctionnalites comparables a une fraction du prix.',
    },
    verdict: {
      en: 'SecureCRT is aimed at enterprise users with deep pockets ($119/license). SSHive provides comparable SSH/SFTP functionality with modern additions like RDP, VNC, and AI — all for free or $9.99.',
      fr: 'SecureCRT vise les utilisateurs entreprise avec un budget consequent (119 $/licence). SSHive fournit une fonctionnalite SSH/SFTP comparable avec des ajouts modernes comme RDP, VNC et l\'IA — le tout gratuit ou a 9,99 $.',
    },
    features: [
      { key: 'sshTerminal', sshive: true, competitor: true },
      { key: 'sftpManager', sshive: true, competitor: true },
      { key: 'rdpClient', sshive: true, competitor: false },
      { key: 'vncClient', sshive: true, competitor: false },
      { key: 'sshTunnels', sshive: true, competitor: true },
      { key: 'broadcastMode', sshive: true, competitor: false },
      { key: 'mcpIntegration', sshive: true, competitor: false },
      { key: 'nativeMacOS', sshive: true, competitor: true },
      { key: 'keychainIntegration', sshive: true, competitor: false },
      { key: 'macAppStore', sshive: true, competitor: false },
      { key: 'price', sshive: '$9.99 one-time', competitor: '$119' },
    ],
  },
};

/** All competitor slugs for static generation */
export const ALL_COMPETITOR_SLUGS = Object.keys(COMPETITOR_DATA) as Competitor[];

/** Feature labels for the master comparison table on the overview page */
export const OVERVIEW_FEATURES = [
  'sshTerminal',
  'sftpManager',
  'rdpClient',
  'vncClient',
  'sshTunnels',
  'broadcastMode',
  'mcpIntegration',
  'nativeMacOS',
  'keychainIntegration',
  'macAppStore',
] as const;

/** Overview table data — value per competitor per feature */
export type OverviewCellValue = 'yes' | 'no' | 'partial';

export interface OverviewCompetitor {
  name: string;
  slug: Competitor | null; // null for SSHive itself
  data: OverviewCellValue[];
}

export const OVERVIEW_COMPETITORS: OverviewCompetitor[] = [
  {
    name: 'SSHive',
    slug: null,
    data: ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes'],
  },
  {
    name: 'MobaXterm',
    slug: 'mobaxterm',
    data: ['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no'],
  },
  {
    name: 'iTerm2',
    slug: 'iterm2',
    data: ['yes', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'no'],
  },
  {
    name: 'Tabby',
    slug: 'terminus',
    data: ['yes', 'partial', 'no', 'no', 'partial', 'no', 'no', 'yes', 'no', 'no'],
  },
  {
    name: 'PuTTY',
    slug: 'putty',
    data: ['yes', 'no', 'no', 'no', 'partial', 'no', 'no', 'partial', 'no', 'no'],
  },
  {
    name: 'Termius',
    slug: 'termius',
    data: ['yes', 'yes', 'no', 'no', 'partial', 'no', 'no', 'yes', 'no', 'yes'],
  },
  {
    name: 'Royal TSX',
    slug: 'royal-tsx',
    data: ['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'yes', 'no', 'yes'],
  },
  {
    name: 'SecureCRT',
    slug: 'securecrt',
    data: ['yes', 'yes', 'no', 'no', 'yes', 'no', 'no', 'yes', 'no', 'no'],
  },
];
