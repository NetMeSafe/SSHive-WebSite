# SSHive Website — Guide de developpement

## Projet

Site promotionnel pour SSHive, client SSH/SFTP/RDP/VNC pour macOS.
Objectif : SEO organique + tunnel de vente vers le telechargement du DMG gratuit.

## Conventions

- **UI et traductions** : francais + anglais (via next-intl)
- **Code (variables, fonctions, types)** : en anglais
- **Style** : Tailwind CSS 4 avec theme Tokyo Night (dark par defaut)
- **Composants** : React Server Components par defaut, `'use client'` seulement quand necessaire
- **Pas de shadcn/ui** : composants custom

## Important

- SSHive est une app **payante freemium** — PAS open source, PAS de GitHub public
- Ne jamais ajouter de references GitHub, open-source, ou MIT
- Pro est actuellement en "Coming Soon" — pas encore sur l'App Store
- Le DMG gratuit est le seul telechargement disponible pour l'instant

## Architecture

```
src/app/[locale]/     # Pages (SSG via generateStaticParams)
src/components/       # Composants React (layout, home, download, seo, ui)
src/lib/              # Constants, PostHog, donnees concurrents
src/i18n/             # Configuration next-intl
messages/             # Fichiers de traduction EN/FR
```

### i18n

- Routing via `[locale]` (en, fr)
- Middleware detecte la langue du navigateur
- Toutes les traductions dans `messages/en.json` et `messages/fr.json`
- Ajouter une nouvelle page : creer le composant + ajouter les traductions dans les deux fichiers

### SEO

- Sitemap auto-genere (`src/app/sitemap.ts`)
- JSON-LD : SoftwareApplicationSchema, OrganizationSchema
- hreflang sur chaque page (EN + FR)
- Metadata avec canonical URLs

### PostHog

- Instance EU : `https://eu.posthog.com/`
- Client init dans `src/lib/posthog.ts`
- Provider dans `src/components/providers/PostHogProvider.tsx`
- Events customs : `dmg_download_clicked`, `feature_page_viewed`, etc.

## Commandes

```bash
npm run dev        # Dev avec HMR
npm run build      # Build statique
npm run lint       # ESLint
```

## Palette de couleurs

| Token | Hex | Usage |
|-------|-----|-------|
| background | #1a1b26 | Fond principal (dark) |
| foreground | #c0caf5 | Texte principal |
| primary | #7aa2f7 | CTAs, liens, boutons |
| accent | #2ac3de | Gradients, icones |
| card | #1f2233 | Cartes, surfaces |
| muted-foreground | #565f89 | Texte secondaire |

## Fichiers cles

| Fichier | Role |
|---------|------|
| `src/lib/constants.ts` | URLs, version, locales, features, concurrents |
| `src/lib/competitors.ts` | Donnees de comparaison (7 concurrents) |
| `src/lib/posthog.ts` | Init PostHog EU |
| `messages/en.json` | Traductions anglaises |
| `messages/fr.json` | Traductions francaises |
| `src/app/[locale]/layout.tsx` | Layout racine (fonts, providers, navbar, footer) |

## Domaine

- Production : `sshive.app`
- Configure dans `SITE_URL` de `src/lib/constants.ts`
