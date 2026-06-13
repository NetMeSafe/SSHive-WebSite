### 3.4 Ce qui est DÉJÀ correct (ne pas toucher)
- **robots.txt** : `Allow: /`, blocages techniques uniquement, `Sitemap:` déclaré. ✅
- **sitemap.xml** : 130 URL, 100 % HTTPS, 0 URL sans langue, avec `<xhtml:link hreflang>`,
  `<lastmod>`, `<changefreq>`, `<priority>`. Statut GSC : « Opération effectuée ». ✅
- **Pages avec langue** (`/en/...`, `/fr/...`) : statut 200, `robots: index, follow`,
  canonical auto-référent correct, hreflang en/fr/x-default présents dans le HTML SSR. ✅

### 3.5 Problèmes secondaires confirmés
- Un **2e sitemap invalide** soumis dans GSC : `https://sshive.app/sitemap.xm`
  (extension tronquée) → statut « Impossible de récupérer le sitemap ».
- Quelques URL **http://** explorées (devraient être redirigées 301 vers https).
- `lastmod` du sitemap figé au **2026-05-15** (à régénérer après corrections).

---

## 4. CORRECTIFS À APPLIQUER (par priorité)

### 🔴 CORRECTIF #1 — Middleware i18n : redirection serveur fiable (CRITIQUE)

**Problème :** une URL sans locale doit TOUJOURS renvoyer une redirection **HTTP 301**
côté serveur vers la version avec locale, y compris quand la requête n'a pas d'en-tête
`Accept-Language` (cas de Googlebot). Actuellement elle renvoie 404 ou 5xx.

**Fichier concerné :** `middleware.ts` (ou `src/middleware.ts`)

**Vérifier la config next-intl :**
```ts
// src/i18n/routing.ts (ou équivalent)
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  // CLÉ DU CORRECTIF :
  localePrefix: 'always',      // toute URL doit avoir /en ou /fr
  localeDetection: true,       // détection via header, MAIS fallback garanti
});
```

```ts
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Exclure assets, api, fichiers statiques.
  // IMPORTANT : le matcher doit bien capter les routes sans locale
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**Test de validation du correctif (doit renvoyer 301, pas 404/5xx, SANS Accept-Language) :**
```bash
# Simule Googlebot : pas d'Accept-Language
curl -I -A "Googlebot" https://sshive.app/pricing
# Attendu : HTTP/2 301  +  location: /en/pricing

curl -I -A "Googlebot" https://sshive.app/features/snippets
# Attendu : HTTP/2 301  +  location: /en/features/snippets

# Ne doit JAMAIS renvoyer 404 ni 500/502/503
```

**Pourquoi 301 et pas 302 :** le 301 (permanent) transmet le « jus SEO » à la page cible
et indique à Google de remplacer l'URL dans l'index. Le 302 garde l'ancienne URL.

---

### 🔴 CORRECTIF #2 — Stabiliser le rendu serveur (éliminer les 5xx)

Les 21 erreurs 5xx indiquent que le middleware/SSR **plante** sur certaines requêtes
(probablement quand aucune locale n'est détectable). À faire :

1. Ajouter un fallback explicite : si aucune locale n'est détectée → `defaultLocale`.
2. Ne jamais lancer d'exception non gérée dans le middleware.
3. Vérifier les logs serveur (Vercel/host) pour les requêtes Googlebot ayant renvoyé 500.
4. S'assurer que les routes dynamiques `[locale]` gèrent le cas locale absente/invalide
   via `notFound()` contrôlé OU redirection — jamais un throw brut.

---

### 🟠 CORRECTIF #3 — Forcer HTTP → HTTPS en 301

Ajouter une redirection permanente globale de tout le trafic `http://` vers `https://`
(au niveau host/CDN ou via `next.config.js` redirects/headers). 

```js
// next.config.js — exemple de redirection
async redirects() {
  return [
    // (la plupart des hébergeurs gèrent http->https nativement ; vérifier que c'est actif)
  ];
}
```
Vérifier : `curl -I http://sshive.app/download` doit renvoyer `301 → https://...`.

---

### 🟠 CORRECTIF #4 — Supprimer le sitemap invalide dans GSC (action manuelle)

Dans Search Console → Sitemaps :
- Garder : `https://sshive.app/sitemap.xml` ✅
- **Supprimer** l'entrée cassée : `https://sshive.app/sitemap.xm`

> ⚠️ Action sur les paramètres de votre compte GSC — à faire vous-même.

---

### 🟡 CORRECTIF #5 — Régénérer le sitemap avec lastmod à jour

Le `lastmod` est figé au 2026-05-15. Après déploiement des correctifs, régénérer le
sitemap pour que `lastmod` reflète la date réelle de modification de chaque page.
Cela incite Google à recrawler en priorité.

---

### 🟡 CORRECTIF #6 — Débloquer les 113 « Explorée, non indexée » (fond)

Aucun blocage technique sur ces pages : c'est un signal de qualité/autorité (site jeune).
Actions :
- **Enrichir et différencier** les pages `/compare/*` et `/features/*` (actuellement
  ~450-500 mots et structurellement très similaires les unes aux autres). Ajouter
  tableaux comparatifs uniques, cas d'usage, captures, FAQ propre à chaque page.
- **Renforcer le maillage interne** vers les pages prioritaires.
- **Obtenir des backlinks** (annuaires Mac/dev, Product Hunt, articles, GitHub, etc.).
- Éviter le « cannibalisme » : chaque page doit cibler une intention de recherche distincte.

---

## 5. Procédure de redéploiement et revalidation

1. Appliquer correctifs #1, #2, #3 → déployer en production.
2. Vérifier avec les commandes `curl` ci-dessus (301 attendu partout, 0 erreur).
3. Tester dans GSC → **Inspection de l'URL** sur 3-4 URL sans langue → « Tester l'URL active »
   doit montrer une redirection propre (plus de 404/5xx).
4. Supprimer le sitemap invalide (#4) + resoumettre `sitemap.xml` régénéré (#5).
5. Dans GSC, ouvrir chaque motif d'erreur (404 puis 5xx) → **« Valider la correction »**.
6. Pour les pages stratégiques (pricing, features clés, page d'accueil par langue) :
   Inspection d'URL → **« Demander une indexation »** (quelques-unes par jour).
7. Suivre l'évolution sur 2-4 semaines (Google recrawle progressivement).

---

## 6. Checklist de suivi

- [x] Middleware i18n : URLs sans locale → **308** (permanent, ≡ 301 pour Google) vers `/en` — test curl Googlebot OK *(code fait, à déployer)*
- [x] Plus aucune URL sans langue ne renvoie 404 *(vérifié sur build prod local : 308, pas 404)*
- [x] Plus aucune URL sans langue ne renvoie 5xx *(vérifié sur build prod local : 0 erreur 5xx, y compris /wp-login.php, /.env)*
- [~] http:// → https:// en 301 : **déjà géré** par `caprover_nginx.conf` (bloc `forceSsl` → `return 301`). Vérifier que « Force HTTPS » est ACTIVÉ dans le dashboard CapRover.
- [ ] Sitemap invalide /sitemap.xm supprimé de GSC *(action manuelle GSC)*
- [x] Sitemap régénéré avec lastmod à jour : `sitemap.ts` utilise `new Date()`, le `lastmod` se rafraîchit à **chaque déploiement** → sera frais au prochain deploy. Resoumettre dans GSC après deploy.
- [ ] Validation des correctifs lancée dans GSC (404 + 5xx) *(après déploiement)*
- [ ] Contenu des pages /compare et /features enrichi/différencié *(correctif #6, fond)*
- [ ] Demandes d'indexation envoyées pour les pages prioritaires *(manuel GSC)*
- [ ] Recontrôle indexation à J+14 et J+30

---

## 8. Journal des corrections appliquées (2026-06-13)

**Constat à l'audit du code :** les défauts critiques décrits aux §3-4 étaient **déjà
partiellement corrigés** dans le code par rapport à l'état GSC :
- Le **5xx** venait du layout `[locale]` qui tentait de rendre des chemins parasites
  (`/wp-login.php`, `/.env`) → résolu par `export const dynamicParams = false`
  (`src/app/[locale]/layout.tsx`). Vérifié : ces chemins renvoient maintenant 404, plus 5xx.
- Les **404** sur URLs sans locale : le middleware next-intl redirige déjà ces URLs.
- **Maillage interne** : 100 % des liens internes passent par le `<Link>` next-intl
  (`@/i18n/navigation`) → tous préfixés `/en` ou `/fr` dans le HTML SSR. Aucune fuite
  d'URL sans locale. robots.txt / sitemap / canonical / hreflang : conformes.

**Modifications apportées dans ce commit :**
1. `src/i18n/routing.ts` — `localePrefix: 'always'` + `localeDetection: false` explicites.
   Cible de redirection **déterministe** (toujours `/en` = x-default), donc cache-safe.
2. `src/middleware.ts` — wrapper qui **surclasse le 307 temporaire en 308 permanent**
   uniquement pour l'ajout de préfixe de locale (URL sans locale → `/en/…`). C'est
   l'équivalent SEO du 301 demandé au correctif #1, et cohérent avec le 308 déjà utilisé
   par la home (`src/app/page.tsx`).

**Vérifié sur build de production local (`node .next/standalone/.../server.js`) :**
```
/pricing            → 308 → /en/pricing      (même avec Accept-Language: fr)
/features/snippets  → 308 → /en/features/snippets
/en/pricing /fr/pricing /en /fr → 200
/wp-login.php /.env /en/random-junk → 404   (aucun 5xx)
```

**Reste à faire (hors code) :** déployer ; vérifier « Force HTTPS » dans CapRover ;
supprimer le sitemap `/sitemap.xm` dans GSC ; lancer « Valider la correction » (404+5xx) ;
demander l'indexation des pages prioritaires ; enrichir le contenu (#6).

> Note technique mineure : Next 16 déprécie le nom `middleware.ts` au profit de `proxy.ts`
> (avertissement au build, sans impact fonctionnel — à renommer lors d'un futur passage).

---

## 7. Résultat attendu

Correctifs #1-#5 → résorption des **48 erreurs techniques** (27 × 404 + 21 × 5xx) et
amélioration du budget de crawl. Correctif #6 (fond, plus long) → indexation
progressive des 113 pages restantes. Objectif réaliste : passer de **3** à **plusieurs
dizaines** de pages indexées sous 4-6 semaines.
