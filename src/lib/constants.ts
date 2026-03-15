export const SITE_URL = 'https://sshive.app';
export const DOWNLOAD_URL = '/SSHive.dmg';
export const APP_VERSION = '1.0.0';
export const APP_STORE_URL = '#'; // TODO: Add real App Store URL
export const BREW_COMMAND = 'brew install --cask sshive';

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const FEATURES = ['ssh', 'sftp', 'rdp', 'vnc', 'tunnels', 'mcp', 'broadcast', 'snippets'] as const;
export type Feature = (typeof FEATURES)[number];

export const COMPETITORS = ['mobaxterm', 'iterm2', 'terminus', 'putty', 'termius', 'royal-tsx', 'securecrt'] as const;
export type Competitor = (typeof COMPETITORS)[number];
