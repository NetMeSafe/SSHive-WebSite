# SSHive.app — Audit SEO complet & Plan de remédiation

> **Date** : 15 mai 2026
> **Domaine** : `sshive.app` (sc-domain)
> **Stack** : Next.js 15 (App Router), Vercel, i18n `/en` + `/fr`
> **Sitemap** : `https://sshive.app/sitemap.xml` — 106 URLs déclarées
> **État actuel** : **3 pages indexées sur 220 connues** (1.4% d'indexation)

---

## 1. Résumé exécutif

Le site sshive.app est en situation de **crise d'indexation**. En 6 semaines (31 mars → 11 mai 2026), le nombre de pages indexées est passé de **64 à 3**, soit une perte de **95%** de la visibilité Google.

### Chiffres clés Search Console (11 mai 2026)

| Métrique | Valeur |
|---|---|
| Pages indexées | 3 |
| Pages non indexées | 217 |
| Erreurs serveur (5xx) | 22 |
| Pages 404 | 27 |
| Pages "explorée, non indexée" | 63 |
| Pages "détectée, non indexée" | 50 |
| Problèmes canoniques | 53 + 1 |
| Impressions quotidiennes moyennes | 0–8 |

### Timeline de la dé-indexation

| Date | Non indexées | Indexées | Événement probable |
|---|---|---|---|
| 31/03 | 90 | 64 | Baseline normal |
| 11/04 | 119 | 49 | Début de la chute (-15 pages) |
| 14/04 | 153 | 15 | **Chute brutale** (-34 pages en 3 jours) |
| 21/04 | 159 | 9 | Chute continue |
| 25/04 | 162 | 6 | |
| 02/05 | 165 | 3 | Stabilisation au plancher |
| 09/05 | 217 | 3 | +52 URLs découvertes, toujours 3 indexées |

---

## 2. Problèmes critiques (PRIORITÉ 1 — Semaine 1)

### 2.1 Erreurs serveur 5xx — 22 pages

**Impact** : CATASTROPHIQUE
**Raison GSC** : "Erreur serveur (5xx)" — Source : Site Web — Validation : Commencé

Quand Googlebot reçoit des erreurs 500 répétées sur un petit site, il :
- Réduit drastiquement le crawl rate
- Commence à dé-indexer les pages existantes
- Considère le site comme "instable" ou "non fiable"

La corrélation temporelle est très forte : la chute brutale du 11-14 avril correspond probablement à un incident serveur.

**Causes probables** :
- Déploiement Vercel cassé (route dynamique en erreur)
- Build ISR/SSR défaillant sur certaines pages
- Timeout sur des API calls côté serveur (generateMetadata, fetch data)
- Problème de mémoire/limite d'exécution sur les serverless functions

**Actions** :

```
[ ] Vérifier les logs Vercel (Functions > Logs) sur la période 8-15 avril 2026
[ ] Identifier les routes qui retournent 500 (probablement des pages dynamiques)
[ ] Vérifier les limites Vercel : timeout serverless (10s free, 60s pro), mémoire (1024MB)
[ ] Tester chaque URL listée dans GSC "Erreur serveur (5xx)" avec curl -I
[ ] Corriger les routes défaillantes
[ ] Dans GSC : cliquer "Valider la correction" sur la ligne "Erreur serveur (5xx)"
```

**Vérification** :
```bash
# Tester les URLs en erreur
curl -sI https://sshive.app/en/features/ssh | head -1
curl -sI https://sshive.app/fr/features/ssh | head -1
# Doit retourner HTTP/2 200 pour chaque page
```

---

### 2.2 Pages 404 — 27 pages

**Impact** : ÉLEVÉ
**Raison GSC** : "Introuvable (404)" — Source : Site Web — Validation : Commencé

27 URLs connues de Google retournent un 404. Sur un site de 106 pages utiles, c'est **25% du crawl budget gaspillé** à chaque passage de Googlebot.

**Causes probables** :
- Anciennes URLs supprimées sans redirection (renommage de routes)
- Pages /en ou /fr supprimées lors d'une refonte i18n
- Liens externes ou internes vers des slugs obsolètes
- Routes dynamiques qui n'existent plus (anciens slugs blog/compare)

**Actions** :

```
[ ] Exporter la liste complète des 404 depuis GSC (Indexation > Pages > "Introuvable (404)")
[ ] Pour chaque URL 404, décider :
    - Si une page équivalente existe → Redirection 301 dans next.config.js
    - Si la page est supprimée définitivement → Laisser en 404 (ou 410 Gone)
    - Si c'est une erreur → Recréer la page
[ ] Implémenter les redirections dans next.config.js :
```

```javascript
// next.config.js
const nextConfig = {
  async redirects() {
    return [
      // Exemple : ancienne route supprimée
      {
        source: '/en/old-page-slug',
        destination: '/en/new-page-slug',
        permanent: true, // 301
      },
      {
        source: '/fr/ancien-slug',
        destination: '/fr/nouveau-slug',
        permanent: true,
      },
      // Pattern pour pages supprimées sans équivalent
      // → laisser le 404 naturel, pas besoin de redirect
    ];
  },
};
```

```
[ ] Vérifier qu'aucun lien interne ne pointe vers une 404 :
    - Auditer tous les <Link> et <a> dans le code source
    - Utiliser un crawler (Screaming Frog ou similaire) pour détecter les broken links
[ ] Re-soumettre le sitemap après correction
[ ] Dans GSC : cliquer "Valider la correction" sur la ligne "Introuvable (404)"
```

---

### 2.3 Redirections HTTP → HTTPS manquantes

**Impact** : MOYEN-ÉLEVÉ

Dans Search Console, des URLs en **http://** (sans S) apparaissent dans la liste des pages crawlées :
- `http://sshive.app/manifest.json`
- `http://sshive.app/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2`
- `http://sshive.app/_next/static/media/0c89a48fa5027cee-s.p.4564287c.woff2`
- `http://sshive.app/favicon.ico`

Cela signifie que les requêtes HTTP ne sont pas toutes redirigées vers HTTPS, ou que des liens/références internes utilisent `http://`.

**Actions** :

```
[ ] Vérifier la configuration Vercel : Settings > Domains > "Redirect to HTTPS" doit être activé
[ ] Chercher dans le code source toute référence à "http://sshive.app" (sans S) :
    grep -r "http://sshive.app" --include="*.tsx" --include="*.ts" --include="*.json"
[ ] Vérifier le manifest.json : les URLs internes doivent utiliser https://
[ ] Vérifier que le sitemap.xml ne contient aucune URL en http://
[ ] Tester :
    curl -sI http://sshive.app/manifest.json
    # Doit retourner 301 → https://sshive.app/manifest.json
```

---

### 2.4 robots.txt — Bloquer les assets inutiles

**Impact** : MOYEN

Googlebot crawle des fichiers qui n'ont rien à faire dans l'index : `manifest.json`, fichiers `.woff2`, `favicon.ico`, assets `_next/static/*`. Chaque crawl de ces fichiers est du budget perdu.

**Actions** :

Créer/modifier `public/robots.txt` :

```
User-agent: *
Allow: /en/
Allow: /fr/
Disallow: /_next/static/
Disallow: /manifest.json
Disallow: /api/
Disallow: /opengraph-image

# Sitemaps
Sitemap: https://sshive.app/sitemap.xml

# Crawl-delay optionnel pour les bots agressifs
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```

> **Note** : Ne PAS bloquer `/_next/static/chunks/` ou `/_next/static/css/` car Google en a besoin pour le rendu JS. Bloquer uniquement `/_next/static/media/` (fonts, images) si souhaité.

Version plus fine recommandée :

```
User-agent: *
Allow: /
Disallow: /_next/static/media/
Disallow: /manifest.json
Disallow: /api/
Disallow: /opengraph-image
Sitemap: https://sshive.app/sitemap.xml
```

---

## 3. Problèmes structurels (PRIORITÉ 2 — Semaine 2)

### 3.1 Absence totale de balises hreflang — 53+ pages impactées

**Impact** : CRITIQUE
**Raison GSC** : "Autre page avec balise canonique correcte" — 53 pages

C'est le problème structurel n°1. Le site existe en deux langues (`/en` et `/fr`), mais **aucune page ne contient de balises hreflang**. Conséquence directe :

- Google traite les versions /en et /fr comme du **contenu dupliqué**
- Google choisit arbitrairement une version "canonique" et ignore l'autre
- 53 pages sont dans la catégorie "Autre page avec balise canonique correcte" = Google a choisi l'autre version
- Le site se cannibalise lui-même : /en et /fr se battent pour le même positionnement

**Vérification du problème** (HTML actuel) :

```html
<!-- Page /fr/features — ÉTAT ACTUEL (MAUVAIS) -->
<head>
  <link rel="canonical" href="https://sshive.app/fr/features" />
  <!-- PAS DE HREFLANG → Google ne sait pas que /en/features est la version EN -->
</head>

<!-- Page /en/features — ÉTAT ACTUEL (MAUVAIS) -->
<head>
  <link rel="canonical" href="https://sshive.app/en/features" />
  <!-- PAS DE HREFLANG → Google ne sait pas que /fr/features est la version FR -->
</head>
```

**Solution — Implémentation Next.js App Router** :

```typescript
// app/[locale]/layout.tsx ou dans generateMetadata() de chaque page

import { Metadata } from 'next';

// Helper réutilisable
function getAlternates(path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return {
    canonical: `https://sshive.app${cleanPath}`,
    languages: {
      'en': `https://sshive.app/en${cleanPath.replace(/^\/(en|fr)/, '')}`,
      'fr': `https://sshive.app/fr${cleanPath.replace(/^\/(en|fr)/, '')}`,
      'x-default': `https://sshive.app/en${cleanPath.replace(/^\/(en|fr)/, '')}`,
    },
  };
}

// Exemple d'utilisation dans une page
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  return {
    title: locale === 'fr' ? 'Fonctionnalités | SSHive' : 'Features | SSHive',
    description: locale === 'fr'
      ? 'Toutes les fonctionnalités de SSHive : SSH, SFTP, RDP, VNC, tunnels et MCP.'
      : 'All SSHive features: SSH, SFTP, RDP, VNC, tunnels, and MCP integration.',
    alternates: getAlternates(`/${locale}/features`),
  };
}
```

**HTML généré attendu** (après correction) :

```html
<!-- Page /fr/features — ÉTAT CORRIGÉ -->
<head>
  <link rel="canonical" href="https://sshive.app/fr/features" />
  <link rel="alternate" hreflang="en" href="https://sshive.app/en/features" />
  <link rel="alternate" hreflang="fr" href="https://sshive.app/fr/features" />
  <link rel="alternate" hreflang="x-default" href="https://sshive.app/en/features" />
</head>

<!-- Page /en/features — ÉTAT CORRIGÉ -->
<head>
  <link rel="canonical" href="https://sshive.app/en/features" />
  <link rel="alternate" hreflang="en" href="https://sshive.app/en/features" />
  <link rel="alternate" hreflang="fr" href="https://sshive.app/fr/features" />
  <link rel="alternate" hreflang="x-default" href="https://sshive.app/en/features" />
</head>
```

**Checklist hreflang** :

```
[ ] Implémenter getAlternates() dans un helper partagé
[ ] Appliquer sur CHAQUE page du site (homepage, features, features/*, compare/*, pricing, etc.)
[ ] Vérifier que chaque paire /en + /fr a des hreflang bidirectionnels
[ ] x-default pointe vers /en (version anglaise = default)
[ ] Tester avec : https://technicalseo.com/tools/hreflang/
[ ] Vérifier dans le HTML rendu (View Source) que les tags sont bien présents
[ ] Ajouter aussi les hreflang dans le sitemap.xml (voir section 3.3)
```

---

### 3.2 Balises Open Graph incorrectes et dupliquées

**Impact** : ÉLEVÉ

Problèmes identifiés sur `/fr/features` (et probablement toutes les sous-pages) :

| Tag | Valeur actuelle (MAUVAIS) | Valeur attendue (BON) |
|---|---|---|
| `og:url` | `https://sshive.app/fr` | `https://sshive.app/fr/features` |
| `og:title` | "SSHive — Client SSH pour Mac, iPhone et iPad, pret pour l'IA" (= homepage) | "Fonctionnalités | SSHive" |
| `og:description` | Description générique de la homepage | Description spécifique à la page features |
| `twitter:title` | Idem homepage | Idem og:title corrigé |
| `twitter:description` | Idem homepage | Idem og:description corrigé |

Ce problème renforce le signal de contenu dupliqué : Google voit 50+ pages avec les mêmes og:title et og:description.

**Cause probable** : Le `generateMetadata()` du layout root définit les og tags globalement et les pages enfants ne les override pas.

**Actions** :

```typescript
// Chaque page DOIT override openGraph et twitter dans son generateMetadata()

// app/[locale]/features/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = params.locale === 'fr' ? {
    title: 'Fonctionnalités SSH, SFTP, RDP, VNC | SSHive',
    description: 'Tout ce qu\'il faut pour gérer vos serveurs : terminal SSH accéléré GPU, gestionnaire SFTP, bureau à distance RDP et VNC, tunnels SSH et intégration IA MCP.',
  } : {
    title: 'SSH, SFTP, RDP, VNC Features | SSHive',
    description: 'Everything you need to manage servers: GPU-accelerated SSH terminal, SFTP file manager, embedded RDP and VNC, SSH tunnels, and AI MCP integration.',
  };

  return {
    title: t.title,
    description: t.description,
    alternates: getAlternates(`/${params.locale}/features`),
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://sshive.app/${params.locale}/features`, // URL SPÉCIFIQUE
      siteName: 'SSHive',
      locale: params.locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      title: t.title,
      description: t.description,
    },
  };
}
```

**Checklist og tags** :

```
[ ] Auditer TOUTES les pages : vérifier que og:url = canonical = URL de la page
[ ] Chaque page a un og:title UNIQUE (pas celui de la homepage)
[ ] Chaque page a un og:description UNIQUE (pas celui de la homepage)
[ ] og:locale = "fr_FR" sur /fr/*, "en_US" sur /en/*
[ ] Tester avec https://developers.facebook.com/tools/debug/ (après déploiement)
[ ] Tester avec https://cards-dev.twitter.com/validator
```

---

### 3.3 Sitemap — Optimisation et séparation par langue

**État actuel** : 1 sitemap unique (`sitemap.xml`) avec 106 URLs, mélange /en et /fr.

**Problèmes** :
- Pas de séparation par langue
- Pas de hreflang dans le sitemap
- Possiblement des URLs mortes (404/5xx) encore présentes
- Pas de `lastmod` pertinent (ou date identique partout)

**Structure recommandée** :

```
sitemap.xml (sitemap index)
├── sitemap-en.xml (toutes les pages /en/*)
└── sitemap-fr.xml (toutes les pages /fr/*)
```

**Fichier : `sitemap.xml` (index)** :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://sshive.app/sitemap-en.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://sshive.app/sitemap-fr.xml</loc>
  </sitemap>
</sitemapindex>
```

**Fichier : `sitemap-en.xml` (avec hreflang)** :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://sshive.app/en</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://sshive.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://sshive.app/fr" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://sshive.app/en" />
  </url>
  <url>
    <loc>https://sshive.app/en/features</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://sshive.app/en/features" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://sshive.app/fr/features" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://sshive.app/en/features" />
  </url>
  <!-- ... toutes les pages /en/* -->
</urlset>
```

**Implémentation Next.js** :

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

const BASE_URL = 'https://sshive.app';

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/features/ssh', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/features/sftp', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/features/rdp', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/features/vnc', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/features/tunnels', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/features/broadcast', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/features/snippets', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/mcp', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/download', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/compare', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/compare/mobaxterm', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/compare/iterm2', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/compare/termius', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/compare/putty', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/compare/securecrt', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/compare/royal-tsx', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/compare/terminus', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/best-ssh-client-for-mac', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/best-sftp-client-for-mac', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/use-cases', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/how-to', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/docs', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/changelog', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.4, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.4, changeFrequency: 'yearly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
];

const locales = ['en', 'fr'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${page.path}`,
            fr: `${BASE_URL}/fr${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
```

**Checklist sitemap** :

```
[ ] Séparer le sitemap par langue (ou ajouter hreflang dans le sitemap unique)
[ ] Supprimer TOUTES les URLs 404 et 5xx du sitemap
[ ] Ne PAS inclure : manifest.json, favicon.ico, opengraph-image, assets _next/
[ ] Vérifier lastmod : doit refléter la vraie date de dernière modification
[ ] Assigner des priorités réalistes (1.0 homepage, 0.3 privacy)
[ ] Re-soumettre dans GSC après chaque modification
[ ] Vérifier : https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

---

### 3.4 Gestion de la racine `/` — Redirect vers `/en`

**Problème potentiel** : L'URL racine `https://sshive.app/` doit rediriger proprement.

**Configuration recommandée** :

```typescript
// middleware.ts (Next.js)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirection racine → /en (ou détection langue navigateur)
  if (pathname === '/') {
    const locale = request.headers.get('accept-language')?.startsWith('fr') ? 'fr' : 'en';
    return NextResponse.redirect(new URL(`/${locale}`, request.url), 301);
  }
}

export const config = {
  matcher: ['/'],
};
```

> **Important** : Utiliser un **301 permanent** et non un 302 temporaire. Google doit comprendre que `/` n'est pas une page à indexer mais un redirect.

---

## 4. Optimisation du contenu (PRIORITÉ 3 — Semaine 3)

### 4.1 Meta titles et descriptions — Tableau complet /en + /fr

Chaque page doit avoir un title et une description **uniques, optimisés pour le SEO, et différents entre /en et /fr**.

#### Pages principales

| Page | Title EN | Title FR |
|---|---|---|
| `/` (homepage) | SSHive — SSH Client for Mac, iPhone & iPad \| Free & Pro | SSHive — Client SSH pour Mac, iPhone et iPad \| Gratuit & Pro |
| `/features` | All Features: SSH, SFTP, RDP, VNC, Tunnels \| SSHive | Fonctionnalités : SSH, SFTP, RDP, VNC, Tunnels \| SSHive |
| `/pricing` | Pricing — Free & One-Time Pro Purchase \| SSHive | Tarifs — Gratuit & Achat unique Pro \| SSHive |
| `/download` | Download SSHive for Mac, iPhone & iPad \| Free | Télécharger SSHive pour Mac, iPhone et iPad \| Gratuit |
| `/mcp` | MCP Integration — Claude Code, Cursor, AI \| SSHive | Intégration MCP — Claude Code, Cursor, IA \| SSHive |
| `/compare` | SSHive vs Other SSH Clients — Full Comparison | SSHive face à la concurrence — Comparaison complète |
| `/use-cases` | Use Cases — DevOps, SysAdmin, Security \| SSHive | Cas d'usage — DevOps, SysAdmin, Sécurité \| SSHive |
| `/how-to` | Guides & Tutorials — SSH, SFTP, Tunnels \| SSHive | Guides & Tutoriels — SSH, SFTP, Tunnels \| SSHive |
| `/docs` | Documentation \| SSHive | Documentation \| SSHive |
| `/blog` | Blog — SSH Tips, Updates & Tutorials \| SSHive | Blog — Astuces SSH, Mises à jour & Tutoriels \| SSHive |
| `/changelog` | Changelog — Release Notes & Updates \| SSHive | Changelog — Notes de version & Mises à jour \| SSHive |
| `/about` | About SSHive — Built by NetMeSafe in France | À propos de SSHive — Créé par NetMeSafe en France |
| `/contact` | Contact Us \| SSHive | Nous contacter \| SSHive |
| `/privacy` | Privacy Policy \| SSHive | Politique de confidentialité \| SSHive |

#### Pages features

| Page | Title EN | Title FR |
|---|---|---|
| `/features/ssh` | SSH Terminal — GPU-Accelerated, Multi-Session \| SSHive | Terminal SSH — Accéléré GPU, Multi-sessions \| SSHive |
| `/features/sftp` | SFTP File Manager — Drag & Drop, Remote Editor \| SSHive | Gestionnaire SFTP — Glisser-déposer, Éditeur distant \| SSHive |
| `/features/rdp` | Remote Desktop (RDP) — Embedded Rust Client \| SSHive | Bureau à distance (RDP) — Client Rust embarqué \| SSHive |
| `/features/vnc` | VNC Client — Built-In, No External App \| SSHive | Client VNC — Intégré, Sans app externe \| SSHive |
| `/features/tunnels` | SSH Tunnels — Local, Remote & SOCKS5 Proxy \| SSHive | Tunnels SSH — Local, Distant & Proxy SOCKS5 \| SSHive |
| `/features/broadcast` | Broadcast Mode — Multi-Server Commands \| SSHive | Mode Broadcast — Commandes multi-serveurs \| SSHive |
| `/features/snippets` | Quick Commands — Snippet Library \| SSHive | Commandes rapides — Bibliothèque de snippets \| SSHive |

#### Pages compare

| Page | Title EN | Title FR |
|---|---|---|
| `/compare/mobaxterm` | SSHive vs MobaXterm — Mac-Native Alternative (2026) | SSHive vs MobaXterm — Alternative native Mac (2026) |
| `/compare/iterm2` | SSHive vs iTerm2 — SSH, SFTP, RDP in One App (2026) | SSHive vs iTerm2 — SSH, SFTP, RDP en une seule app (2026) |
| `/compare/termius` | SSHive vs Termius — No Subscription, One-Time Buy (2026) | SSHive vs Termius — Sans abonnement, achat unique (2026) |
| `/compare/putty` | SSHive vs PuTTY — Modern Mac SSH Client (2026) | SSHive vs PuTTY — Client SSH Mac moderne (2026) |
| `/compare/securecrt` | SSHive vs SecureCRT — All-in-One for macOS (2026) | SSHive vs SecureCRT — Tout-en-un pour macOS (2026) |
| `/compare/royal-tsx` | SSHive vs Royal TSX — Compare Features & Price (2026) | SSHive vs Royal TSX — Fonctionnalités & Prix (2026) |
| `/compare/terminus` | SSHive vs Terminus — Mac SSH Client Comparison (2026) | SSHive vs Terminus — Comparaison clients SSH Mac (2026) |
| `/best-ssh-client-for-mac` | 7 Best SSH Clients for Mac in 2026 — Free & Paid | Les 7 meilleurs clients SSH pour Mac en 2026 |
| `/best-sftp-client-for-mac` | 5 Best SFTP Clients for Mac in 2026 — Free & Pro | Les 5 meilleurs clients SFTP pour Mac en 2026 |

#### Meta descriptions (exemples)

| Page | Description EN | Description FR |
|---|---|---|
| Homepage | Native SSH, SFTP, RDP & VNC client for Mac, iPhone and iPad. All-in-one terminal with Keychain security, MCP for AI tools, and one-time Pro purchase. Free to start. | Client SSH, SFTP, RDP et VNC natif pour Mac, iPhone et iPad. Terminal tout-en-un avec sécurité Trousseau, MCP pour outils IA, et achat unique Pro. Gratuit pour commencer. |
| `/features/ssh` | GPU-accelerated SSH terminal for macOS with xterm.js WebGL. Password, key, and agent auth. Jump hosts, agent forwarding, and auto-reconnect. Free in SSHive. | Terminal SSH accéléré GPU pour macOS avec xterm.js WebGL. Auth par mot de passe, clé ou agent. Jump hosts, forwarding et reconnexion auto. Gratuit dans SSHive. |
| `/compare/mobaxterm` | Comparing SSHive and MobaXterm: features, pricing, platform support. Why SSHive is the best MobaXterm alternative for macOS users in 2026. | Comparaison SSHive et MobaXterm : fonctionnalités, prix, plateformes. Pourquoi SSHive est la meilleure alternative MobaXterm sur macOS en 2026. |
| `/mcp` | Connect Claude Code, Cursor, or Claude Desktop to your live SSH sessions through SSHive's built-in MCP server. 7 tools, 100% local, Bearer token auth. | Connectez Claude Code, Cursor ou Claude Desktop à vos sessions SSH actives via le serveur MCP intégré de SSHive. 7 outils, 100% local, auth Bearer token. |

**Règles** :
- Title : 50-60 caractères max, keyword principal en premier
- Description : 150-160 caractères max, CTA ou proposition de valeur
- Inclure l'année (2026) dans les pages compare et "best X" pour le CTR

---

### 4.2 Structured Data (JSON-LD)

Ajouter du balisage structuré pour améliorer l'apparence dans les SERPs.

#### SoftwareApplication — Homepage

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SSHive",
  "operatingSystem": "macOS, iOS, iPadOS",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "SSH Client",
  "offers": [
    {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "name": "Free"
    },
    {
      "@type": "Offer",
      "price": "9.99",
      "priceCurrency": "EUR",
      "name": "Pro (one-time)",
      "priceValidUntil": "2026-12-31"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "42",
    "bestRating": "5"
  },
  "description": "Native SSH, SFTP, RDP & VNC client for Mac, iPhone and iPad.",
  "url": "https://sshive.app",
  "downloadUrl": "https://apps.apple.com/app/sshive/id6760705487",
  "screenshot": "https://sshive.app/opengraph-image",
  "author": {
    "@type": "Organization",
    "name": "NetMeSafe",
    "url": "https://netmesafe.com"
  }
}
```

> **Note** : N'inclure `aggregateRating` QUE si tu as de vrais avis App Store. Sinon, retirer ce champ.

#### BreadcrumbList — Toutes les pages

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SSHive",
      "item": "https://sshive.app/en"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Features",
      "item": "https://sshive.app/en/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SSH Terminal",
      "item": "https://sshive.app/en/features/ssh"
    }
  ]
}
```

#### FAQPage — Pages features et compare

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is SSHive free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SSHive is free with 2 simultaneous SSH sessions and 5 saved profiles. Pro unlocks unlimited sessions, RDP, VNC, tunnels, and MCP for a one-time purchase of €9.99."
      }
    },
    {
      "@type": "Question",
      "name": "Does SSHive work on iPhone and iPad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SSHive offers native SSH and SFTP on iPhone and iPad. RDP, VNC, tunnels, and broadcast are macOS-only."
      }
    }
  ]
}
```

**Implémentation Next.js** :

```typescript
// components/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Utilisation dans une page
<JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  // ...
}} />
```

**Checklist structured data** :

```
[ ] SoftwareApplication sur la homepage (/en et /fr)
[ ] BreadcrumbList sur TOUTES les pages
[ ] FAQPage sur les pages features, pricing, et compare
[ ] Valider avec https://search.google.com/test/rich-results
[ ] Valider avec https://validator.schema.org/
[ ] Vérifier que le JSON-LD est dans le HTML rendu (pas client-side only)
```

---

### 4.3 Contenu textuel — Densifier les pages trop légères

Google a classé 63 pages comme "Explorée, actuellement non indexée", ce qui signifie souvent que le contenu est trop léger ou trop similaire entre pages.

**Pages à enrichir en priorité** :

| Page | Problème | Action |
|---|---|---|
| `/features/ssh` | Probablement une page feature courte avec quelques bullets | Ajouter 400-600 mots de contenu unique : use cases, détails techniques, screenshots |
| `/features/sftp` | Idem | Idem — parler du drag&drop, de l'éditeur intégré, des performances |
| `/features/rdp` | Idem | Détailler IronRDP, la résolution adaptative, le clipboard |
| `/features/vnc` | Idem | Comparer avec les clients VNC natifs macOS, détailler les options |
| `/compare/mobaxterm` | Doit être du vrai contenu comparatif, pas juste un tableau | 800-1200 mots : intro, tableau comparatif, sections par feature, verdict, FAQ |
| `/compare/iterm2` | Idem | Idem |
| `/compare/termius` | Idem | Insister sur le modèle économique (abo vs one-time) |
| `/mcp` | Page d'intégration IA très stratégique (keyword trending) | 600-1000 mots : qu'est-ce que MCP, comment ça marche avec Claude Code, exemples concrets |
| `/best-ssh-client-for-mac` | Article SEO "pillar content" | 1500-2500 mots : comparatif exhaustif, screenshots, conclusion avec SSHive en tête |
| `/blog` | Page index de blog | Créer au minimum 3-5 articles de blog (voir section 5.2) |

**Structure recommandée pour une page `/compare/X`** :

```markdown
# SSHive vs [Concurrent] — [Année]

[Introduction 100-150 mots : contexte, pourquoi comparer]

## Tableau comparatif

| Feature | SSHive | [Concurrent] |
|---|---|---|
| ... | ... | ... |

## SSH Terminal
[100-150 mots de comparaison détaillée]

## SFTP
[100-150 mots]

## RDP / VNC
[100-150 mots]

## Prix
[100 mots — insister sur one-time vs subscription si pertinent]

## Verdict
[50-100 mots — recommandation claire]

## FAQ (3-5 questions)
[Structured data FAQPage]
```

---

### 4.4 Internal Linking — Maillage interne

Un bon maillage interne aide Google à découvrir et prioriser les pages. Vérifier :

```
[ ] Chaque page feature a des liens vers les autres features
[ ] Chaque page compare a des liens vers les features pertinentes
[ ] Le blog linke vers les features et les pages compare
[ ] Le footer contient les liens principaux (déjà OK d'après le HTML)
[ ] Ajouter des liens contextuels dans le contenu (pas juste navigation)
[ ] La page /mcp linke vers les features SSH et SFTP
[ ] Les pages "best X for mac" linkent vers les pages compare individuelles
```

**Exemple de lien contextuel** :
```html
<!-- Dans /features/ssh -->
<p>
  SSHive's terminal can be controlled by AI tools through our
  <a href="/en/mcp">built-in MCP server</a>, compatible with
  Claude Code and Cursor.
</p>
```

---

## 5. Stratégie de croissance SEO (PRIORITÉ 4 — Semaine 4+)

### 5.1 Keyword Strategy

**Keywords primaires** (volume élevé, compétition forte) :

| Keyword | Volume estimé | Intent | Page cible |
|---|---|---|---|
| ssh client mac | Élevé | Transactional | `/best-ssh-client-for-mac` |
| sftp client mac | Moyen | Transactional | `/best-sftp-client-for-mac` |
| ssh terminal mac | Moyen | Informational | `/features/ssh` |
| rdp client mac | Moyen | Transactional | `/features/rdp` |
| mobaxterm mac alternative | Moyen | Transactional | `/compare/mobaxterm` |
| termius alternative | Faible-Moyen | Transactional | `/compare/termius` |

**Keywords secondaires** (long-tail, faible compétition) :

| Keyword | Intent | Page cible |
|---|---|---|
| best free ssh client for mac 2026 | Transactional | `/best-ssh-client-for-mac` |
| ssh mcp claude code | Informational | `/mcp` |
| ssh client with sftp and rdp | Transactional | Homepage |
| how to ssh from mac to server | Informational | Blog article |
| ssh tunnels explained macos | Informational | `/features/tunnels` + blog |
| vnc client for mac free | Transactional | `/features/vnc` |
| iterm2 vs sshive | Transactional | `/compare/iterm2` |
| putty alternative mac 2026 | Transactional | `/compare/putty` |
| how to use mcp with ssh | Informational | `/mcp` + blog |
| all in one ssh client macos | Transactional | Homepage |

### 5.2 Content Calendar — Articles de blog

Créer du contenu blog ciblé sur des keywords long-tail :

| # | Titre EN | Titre FR | Keyword cible | Priorité |
|---|---|---|---|---|
| 1 | How to Connect to SSH from Mac — Complete Guide | Comment se connecter en SSH depuis Mac — Guide complet | ssh from mac | Haute |
| 2 | SSH Tunnels Explained: Local, Remote & SOCKS5 | Les tunnels SSH expliqués : Local, Distant & SOCKS5 | ssh tunnels explained | Haute |
| 3 | MCP + SSH: Let AI Manage Your Servers with Claude Code | MCP + SSH : L'IA gère vos serveurs avec Claude Code | mcp ssh claude | Haute |
| 4 | How to Use RDP on Mac Without Microsoft Remote Desktop | Comment utiliser RDP sur Mac sans Microsoft Remote Desktop | rdp mac without microsoft | Moyenne |
| 5 | SFTP vs SCP vs rsync: Which File Transfer to Use? | SFTP vs SCP vs rsync : Quel transfert de fichiers choisir ? | sftp vs scp | Moyenne |
| 6 | SSH Config File: The Complete macOS Guide | Fichier SSH Config : Le guide complet macOS | ssh config mac | Moyenne |
| 7 | 5 SSH Security Best Practices for macOS Users | 5 bonnes pratiques de sécurité SSH pour macOS | ssh security macos | Faible |
| 8 | How to Set Up SSH Key Authentication on Mac | Comment configurer l'authentification SSH par clé sur Mac | ssh key mac | Faible |

**Chaque article doit** :
- 1000-2000 mots minimum
- Inclure des screenshots/illustrations
- Avoir des liens vers les pages features/compare pertinentes
- Inclure du structured data (Article schema)
- Cibler un keyword principal + 2-3 keywords secondaires

### 5.3 Backlink Strategy

**Sources à activer** :

```
[ ] Product Hunt — Lancer SSHive avec une page produit soignée
[ ] HackerNews — Poster un "Show HN: SSHive — All-in-one SSH client for Mac with MCP for AI"
[ ] Reddit — r/macapps, r/sysadmin, r/devops, r/commandline
[ ] Dev.to — Publier les articles blog (crosspost avec canonical vers sshive.app)
[ ] GitHub — Créer un repo SSHive (même si l'app est closed-source, mettre docs/MCP config)
[ ] NetMeSafe blog — Article "We built SSHive" avec lien
[ ] LinkedIn Lucas — Posts réguliers sur SSHive et MCP
[ ] Mac app directories — AlternativeTo, Slant, MacUpdate, MacApps.link
[ ] MCP directory — Lister SSHive sur les directories MCP (mcp.so, etc.)
```

### 5.4 Indexation manuelle des pages prioritaires

Une fois toutes les corrections déployées :

```
[ ] Aller dans GSC > Inspection de l'URL
[ ] Soumettre manuellement les 15 pages les plus importantes :
    1. https://sshive.app/en
    2. https://sshive.app/fr
    3. https://sshive.app/en/features
    4. https://sshive.app/fr/features
    5. https://sshive.app/en/pricing
    6. https://sshive.app/fr/pricing
    7. https://sshive.app/en/mcp
    8. https://sshive.app/fr/mcp
    9. https://sshive.app/en/download
    10. https://sshive.app/en/best-ssh-client-for-mac
    11. https://sshive.app/fr/best-ssh-client-for-mac
    12. https://sshive.app/en/compare/mobaxterm
    13. https://sshive.app/en/compare/iterm2
    14. https://sshive.app/en/compare/termius
    15. https://sshive.app/en/compare/putty
[ ] Attendre 48-72h et vérifier l'indexation
[ ] Si pas indexé après 72h, re-soumettre
```

---

## 6. Monitoring & Métriques

### KPIs à suivre

| Métrique | Baseline (15/05/2026) | Objectif 1 mois | Objectif 3 mois |
|---|---|---|---|
| Pages indexées | 3 | 50+ | 90+ |
| Impressions/jour | 0-8 | 50+ | 200+ |
| Clics/jour | ~0 | 5+ | 30+ |
| Position moyenne | N/A | < 30 | < 15 |
| Erreurs 5xx | 22 | 0 | 0 |
| Pages 404 | 27 | < 5 | 0 |
| Couverture sitemap | 3/106 (2.8%) | 50/106 (47%) | 95/106 (90%) |

### Outils de monitoring

```
[ ] Google Search Console — Vérifier quotidiennement pendant 2 semaines post-fix
[ ] Google Analytics 4 — Tracker le trafic organique
[ ] Ahrefs/SEMrush (version gratuite) — Suivre les rankings sur les keywords cibles
[ ] PageSpeed Insights — Tester les Core Web Vitals mensuellement
[ ] Screaming Frog (gratuit < 500 URLs) — Audit technique mensuel
```

---

## 7. Checklist de déploiement — Ordre d'exécution

```
SEMAINE 1 — Urgence (stopper l'hémorragie)
═══════════════════════════════════════════
[ ] 1.  Fixer les erreurs 5xx (logs Vercel, routes cassées)
[ ] 2.  Implémenter les redirections 301 pour les 27 pages 404
[ ] 3.  Créer/mettre à jour robots.txt
[ ] 4.  Vérifier redirect HTTP → HTTPS global
[ ] 5.  Déployer + valider les corrections dans GSC

SEMAINE 2 — Structurel (éliminer les doublons)
═══════════════════════════════════════════
[ ] 6.  Implémenter hreflang sur toutes les pages (/en + /fr + x-default)
[ ] 7.  Corriger og:url, og:title, og:description (uniques par page)
[ ] 8.  Corriger les canonicals (chaque page pointe vers elle-même)
[ ] 9.  Refactorer le sitemap (hreflang, suppression 404, priorités)
[ ] 10. Configurer la redirection / → /en (ou détection langue)
[ ] 11. Déployer + re-soumettre sitemap dans GSC

SEMAINE 3 — Contenu (densifier les pages)
═══════════════════════════════════════════
[ ] 12. Enrichir les pages features (400-600 mots chacune)
[ ] 13. Enrichir les pages compare (800-1200 mots chacune)
[ ] 14. Enrichir la page /mcp (600-1000 mots)
[ ] 15. Ajouter le structured data JSON-LD (SoftwareApplication, Breadcrumb, FAQ)
[ ] 16. Améliorer le maillage interne (liens contextuels)
[ ] 17. Rédiger les meta titles/descriptions uniques (voir tableau section 4.1)

SEMAINE 4 — Accélération (regagner l'index)
═══════════════════════════════════════════
[ ] 18. Soumettre manuellement les 15 URLs prioritaires dans GSC
[ ] 19. Publier 2-3 articles de blog
[ ] 20. Lancer la stratégie backlinks (Product Hunt, HN, Reddit, directories)
[ ] 21. Soumettre sur les directories Mac/MCP
[ ] 22. Crosspost articles sur Dev.to avec canonical

EN CONTINU
═══════════════════════════════════════════
[ ] Monitoring GSC quotidien (2 premières semaines)
[ ] 1 article de blog par semaine
[ ] Activité LinkedIn/Reddit régulière
[ ] Audit technique mensuel (Screaming Frog)
[ ] Revue des Core Web Vitals mensuelle
```

---

## Annexes

### A. Liste des pages /en connues (à vérifier 5xx/404)

```
https://sshive.app/en
https://sshive.app/en/features
https://sshive.app/en/features/ssh
https://sshive.app/en/features/sftp
https://sshive.app/en/features/rdp
https://sshive.app/en/features/vnc
https://sshive.app/en/features/tunnels
https://sshive.app/en/features/broadcast
https://sshive.app/en/features/snippets
https://sshive.app/en/features/mcp
https://sshive.app/en/mcp
https://sshive.app/en/pricing
https://sshive.app/en/download
https://sshive.app/en/compare
https://sshive.app/en/compare/mobaxterm
https://sshive.app/en/compare/iterm2
https://sshive.app/en/compare/termius
https://sshive.app/en/compare/putty
https://sshive.app/en/compare/securecrt
https://sshive.app/en/compare/royal-tsx
https://sshive.app/en/compare/terminus
https://sshive.app/en/best-ssh-client-for-mac
https://sshive.app/en/best-sftp-client-for-mac
https://sshive.app/en/use-cases
https://sshive.app/en/how-to
https://sshive.app/en/docs
https://sshive.app/en/blog
https://sshive.app/en/changelog
https://sshive.app/en/about
https://sshive.app/en/contact
https://sshive.app/en/privacy
```

### B. Liste des pages /fr connues (à vérifier 5xx/404)

```
https://sshive.app/fr
https://sshive.app/fr/features
https://sshive.app/fr/features/ssh
https://sshive.app/fr/features/sftp
https://sshive.app/fr/features/rdp
https://sshive.app/fr/features/vnc
https://sshive.app/fr/features/tunnels
https://sshive.app/fr/features/broadcast
https://sshive.app/fr/features/snippets
https://sshive.app/fr/features/mcp
https://sshive.app/fr/mcp
https://sshive.app/fr/pricing
https://sshive.app/fr/download
https://sshive.app/fr/compare
https://sshive.app/fr/compare/mobaxterm
https://sshive.app/fr/compare/iterm2
https://sshive.app/fr/compare/termius
https://sshive.app/fr/compare/putty
https://sshive.app/fr/compare/securecrt
https://sshive.app/fr/compare/royal-tsx
https://sshive.app/fr/compare/terminus
https://sshive.app/fr/best-ssh-client-for-mac
https://sshive.app/fr/best-sftp-client-for-mac
https://sshive.app/fr/use-cases
https://sshive.app/fr/how-to
https://sshive.app/fr/docs
https://sshive.app/fr/blog
https://sshive.app/fr/changelog
https://sshive.app/fr/about
https://sshive.app/fr/contact
https://sshive.app/fr/privacy
```

### C. URLs parasites à exclure du crawl

```
https://sshive.app/manifest.json
http://sshive.app/manifest.json
https://sshive.app/favicon.ico
http://sshive.app/favicon.ico
https://sshive.app/favicon.ico?favicon.94941f46.ico
https://sshive.app/opengraph-image
https://sshive.app/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2
http://sshive.app/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2
http://sshive.app/_next/static/media/0c89a48fa5027cee-s.p.4564287c.woff2
https://sshive.app/_next/static/media/70bc3e132a0a741e-s.p.15008bfb.woff2
```

### D. Ressources et outils

| Outil | Usage | URL |
|---|---|---|
| Google Search Console | Monitoring indexation | https://search.google.com/search-console |
| PageSpeed Insights | Core Web Vitals | https://pagespeed.web.dev |
| Rich Results Test | Structured data | https://search.google.com/test/rich-results |
| Schema Validator | JSON-LD | https://validator.schema.org |
| Hreflang Tags Testing | Hreflang | https://technicalseo.com/tools/hreflang/ |
| Screaming Frog | Audit technique | https://www.screamingfrog.co.uk/seo-spider/ |
| Facebook Debugger | OG tags | https://developers.facebook.com/tools/debug/ |
| Ahrefs Webmaster Tools | Backlinks/keywords (gratuit) | https://ahrefs.com/webmaster-tools |
