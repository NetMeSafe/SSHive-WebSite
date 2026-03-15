# SSHive Website

Site promotionnel pour **SSHive** — client SSH/SFTP/RDP/VNC pour macOS.

## Stack

- **Next.js 15** (App Router, React Server Components, SSG)
- **Tailwind CSS 4** avec theme Tokyo Night
- **next-intl** pour l'internationalisation (EN/FR)
- **PostHog EU** pour l'analytics (https://eu.posthog.com/)
- **Lucide React** pour les icones
- **TypeScript** strict

## Structure

```
src/
├── app/
│   ├── [locale]/          # Pages par locale (en, fr)
│   │   ├── page.tsx       # Homepage
│   │   ├── features/      # Pages fonctionnalites (8 pages)
│   │   ├── compare/       # Pages comparaison (7 concurrents)
│   │   ├── pricing/       # Tarification Free vs Pro
│   │   ├── download/      # Page de telechargement
│   │   ├── blog/          # Blog (coming soon)
│   │   ├── docs/          # Documentation / FAQ
│   │   ├── about/         # A propos
│   │   ├── contact/       # Contact
│   │   ├── changelog/     # Historique des versions
│   │   └── privacy/       # Politique de confidentialite
│   ├── sitemap.ts         # Sitemap auto-genere
│   └── robots.ts          # robots.txt
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── home/              # Hero, FeatureGrid, WhySSHive, ComparisonTeaser, PricingPreview, DownloadCTA
│   ├── download/          # DownloadButton (PostHog tracking)
│   ├── providers/         # PostHogProvider
│   ├── seo/               # JsonLd, SoftwareApplicationSchema, OrganizationSchema
│   └── ui/                # CopyButton
├── i18n/                  # Config next-intl (routing, navigation, request)
├── lib/                   # Constants, PostHog, competitors data
└── middleware.ts          # Detection locale automatique
messages/
├── en.json                # Traductions anglaises
└── fr.json                # Traductions francaises
```

## Commandes

```bash
npm run dev        # Serveur de dev (http://localhost:3000)
npm run build      # Build statique (57 pages EN+FR)
npm run start      # Serveur de production
npm run lint       # ESLint
```

## Configuration

### PostHog

Remplacer la cle dans `.env.local` :

```
NEXT_PUBLIC_POSTHOG_KEY=phc_VOTRE_CLE_ICI
NEXT_PUBLIC_POSTHOG_HOST=https://eu.posthog.com
```

### Domaine

Le site est configure pour `sshive.app`. Modifier `SITE_URL` dans `src/lib/constants.ts` si besoin.

### URLs de telechargement

Mettre a jour dans `src/lib/constants.ts` :

- `DOWNLOAD_URL` — lien direct vers le DMG
- `APP_STORE_URL` — lien Mac App Store (quand Pro sera disponible)

## Deploiement

Deployer sur **Vercel** :

1. Connecter le repo GitHub
2. Ajouter les variables d'environnement (`NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`)
3. Configurer le domaine custom `sshive.app`

## Modele freemium

- **Free** : 2 sessions SSH, 5 profils, SFTP basique — telechargement DMG gratuit
- **Pro** : $9.99 achat unique — sessions illimitees, RDP, VNC, tunnels, broadcast, MCP (Coming Soon)

---

Made with love by [NetMeSafe](https://netmesafe.com/)
