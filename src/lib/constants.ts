export const SITE_URL = 'https://sshive.app';
export const APP_VERSION = '1.0.0';
export const APP_STORE_URL = 'https://apps.apple.com/fr/app/sshive/id6760705487?mt=12';
// Universal App Store URL (no mt= so it resolves to iOS App Store on iPhone/iPad and Mac App Store on Mac).
export const APP_STORE_UNIVERSAL_URL = 'https://apps.apple.com/app/sshive/id6760705487';

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const FEATURES = ['ssh', 'sftp', 'rdp', 'vnc', 'tunnels', 'mcp', 'broadcast', 'snippets'] as const;
export type Feature = (typeof FEATURES)[number];

export const COMPETITORS = ['mobaxterm', 'iterm2', 'terminus', 'putty', 'termius', 'royal-tsx', 'securecrt'] as const;
export type Competitor = (typeof COMPETITORS)[number];
