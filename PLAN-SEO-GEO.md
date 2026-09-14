# Plan SEO et GEO — SSHive

> Rédigé le 2026-09-14. Remplace `SEO.md` et `RECO.md`, devenus obsolètes.
> Chaque affirmation ci-dessous est mesurée, pas supposée. Les niveaux de
> confiance sont indiqués : *documenté* (source éditeur), *mesuré* (constaté
> sur ce site), *plausible* (raisonnement solide, non vérifié).

---

## 1. Le diagnostic, en une ligne

Le site est techniquement irréprochable et Google refuse quand même de
l'indexer, parce qu'**aucun site au monde ne pointe vers lui**.

Ce n'est pas une opinion. Les preuves, toutes mesurées le 2026-09-14 :

| Signal | Google | Bing |
|---|---|---|
| Pages indexées | **3** | **81** |
| Impressions (90 j) | 174 | **2 900** |
| Clics (90 j) | 68 | 99 |
| Requêtes distinctes | **1** (« sshive ») | — |
| Erreurs d'exploration | 0 | **0** |

Même site, mêmes sitemaps, même contenu. **Si le problème était technique ou
qualitatif, Bing refuserait aussi.** Google applique simplement un seuil de
confiance bien plus haut aux jeunes domaines sans signal externe.

Hypothèses testées et **écartées** :

- *Contenu dupliqué* — similarité Jaccard 6-grammes mesurée : use-cases 0,0 %,
  how-to 0,0 %, features 0,0 %, best-* 0,3 %. Seul `/compare/*` est templaté
  à 72 %.
- *Problème serveur* — TTFB 68-185 ms, 16 requêtes simultanées toutes en 200
  en 0,36 s. Aucune limitation.
- *Historique de domaine* — zéro capture Wayback, aucun passé de spam.
- *Blocage technique* — Googlebot reçoit 200, `index, follow`, canonical
  auto-référent, contenu en SSR. Vérifié avec l'UA exact.
- *Sitemaps ignorés* — relus régulièrement (2 au 14 septembre selon la section).

Le fait le plus parlant : `/en/network-tools` a été exploré **le 7 août**, jour
de sa publication, et **jamais revisité depuis**. Google lit une fois, décline,
ne revient pas. C'est le comportement d'un domaine sans demande.

**Reste à écarter (toi seul peux) :** Search Console → *Sécurité et actions
manuelles*. L'API ne l'expose pas.

---

## 2. Ce qui débloque : la chaîne MCP

C'est le cœur du plan. SSHive possède **un actif rare** : un serveur MCP intégré
à un client SSH natif Mac. Aucun concurrent n'a ça. Partout ailleurs tu es un
client SSH parmi cinquante ; là, tu es seul sur le créneau.

Mais cet actif est **inexploitable en l'état** : le registre officiel n'accepte
qu'un paquet installable (`npm`, `pypi`, `oci`, `nuget`, `mcpb`) ou un remote
sur URL publique. Or le serveur MCP de SSHive vit dans l'app, écoute sur
`127.0.0.1:49422` avec un token par utilisateur. Vérifié empiriquement : sur 40
entrées du registre, **zéro** n'existe sans l'un ou l'autre.

### 2.1 Le maillon manquant : un paquet npm passerelle

Le code existe déjà à 90 % dans
`WebSSH-App/sshive-claude-plugin/plugins/sshive/bin/sshive-mcp-launch.mjs` : il
découvre le port et le token dans `settings.json`, puis relaie en stdio via
`mcp-remote`. Il reste à l'extraire en paquet publiable.

Noms libres sur npm (vérifié) : `sshive`, `sshive-mcp`, `mcp-sshive`,
`@sshive/mcp`. **Recommandation : `sshive-mcp`**, explicite, et qui laisse
`sshive` disponible.

Le README doit dire noir sur blanc « nécessite l'app SSHive installée et le
serveur MCP activé ». Une passerelle qui ne marche pas seule et qui le cache se
fait descendre en issues.

### 2.2 Le GitHub public — ce qu'il apporte vraiment

Tu as demandé si un GitHub public aiderait. Réponse honnête en deux temps.

**Non comme backlink** : GitHub est passé en `nofollow` sur les liens de README
en 2020, et ça n'a pas changé. Aucun transfert d'autorité. *(documenté)*

**Oui comme déblocage** : un dépôt public est le prérequis de toute la chaîne.
npm veut un `repository` field, le registre MCP veut un paquet, l'annuaire de
plugins Claude Code veut une source. Et une page GitHub bien nommée se
positionne elle-même sur « sshive mcp ». *(plausible)*

> ⚠️ **Limite à ne jamais franchir.** Le dépôt public contient **la passerelle
> et le plugin**, jamais l'app. Et le site sshive.app ne doit **jamais** dire
> « open source » ni renvoyer vers GitHub pour SSHive lui-même — c'est une règle
> du projet (`CLAUDE.md`), et c'est exact : SSHive est propriétaire. La
> passerelle sous licence MIT et l'app propriétaire sont deux choses distinctes,
> le README doit l'écrire.

### 2.3 Les registres, par ordre de valeur

| Cible | Volume | Comment | Confiance |
|---|---|---|---|
| **registry.modelcontextprotocol.io** | canonique | `server.json` + `mcp-publisher login http` (clé déjà publiée sur `/.well-known/mcp-registry-auth`) | documenté |
| **glama.ai/mcp** | ~37 000 serveurs | crawl auto + revendication de propriété | documenté |
| **mcp.so** | ~20 000 serveurs | issue GitHub | documenté |
| **smithery.ai** | — | `smithery mcp publish` | documenté |
| **punkpeye/awesome-mcp-servers** | liste GitHub de référence | pull request | documenté |
| **Annuaire plugins Claude Code** | platform.claude.com/plugins/submit | plugin déjà écrit, jamais soumis | documenté |

Ne te méprends pas sur les volumes : 20 000 serveurs listés, tu n'y seras pas
unique **en nombre**. Tu l'es **en catégorie** — cherche « SSH » dans ces
annuaires, tu ne trouveras que des wrappers en ligne de commande, pas une app
Mac native avec interface. C'est cet angle qu'il faut écrire dans la description.

---

## 3. Les annuaires classiques

Par rapport effort/résultat décroissant. Aucun ne dépend d'un développement.

1. **AlternativeTo** — fiche déjà remplie, il manque les captures Mac et les 5 $
   de revue prioritaire (sinon « plusieurs mois » de file). C'est la source que
   les moteurs de réponse IA citent le plus pour « alternative à Termius ».
2. **MacUpdate** — `macupdate.com/content/submit`, accepte un lien App Store.
3. **SourceForge** — `sourceforge.net/software/vendors/`, dofollow, domaine ancien.
4. **Le lien depuis netmesafe.com** — ta page d'accueil ne pointe toujours pas
   vers sshive.app. Cinq minutes, tu possèdes le site.
5. **LinkedIn** — le lien de page entreprise est nofollow, mais consolide
   l'entité (déjà déclaré en `sameAs`). La vraie valeur est dans les **posts**,
   qui s'indexent et touchent ta cible.

**Product Hunt et Show HN : après la 2.0.0.** L'angle « un client SSH que Claude
pilote » repose sur l'autonomie de l'assistant. Lancer avant, c'est brûler le
seul créneau où l'argument est démontrable.

---

## 4. Le contenu qui attire des liens

Arrête d'ajouter des pages programmatiques. Tu en as 138, Google en indexe 3 :
le problème n'est pas le volume.

Ce qui attire des liens, c'est **une ressource que quelqu'un a envie de citer**.
Trois pistes, par ordre de faisabilité :

**Un article technique sur le pont MCP ↔ SSH.** Personne n'a écrit « comment
donner à un agent IA un accès SSH sans lui donner tes clés ». Tu as
l'implémentation : token Bearer, bind sur loopback, exposition des sessions et
non des credentials. C'est un sujet de sécurité réel, et les articles de
sécurité se citent.

**Le remplacement de Network Utility.** Apple a retiré l'app de macOS. Les pages
`/network-tools` existent déjà et sont bonnes ; il manque un article qui raconte
la disparition et cartographie les remplacements onglet par onglet. C'est le
genre de contenu que les blogs Mac reprennent.

**Les comparatifs honnêtes.** Tes pages `/compare` disent déjà ce que SSHive ne
fait pas. C'est rare et ça se remarque. Mais elles sont templatées à 72 % — il
faut les différencier ou les fusionner (décision en attente, voir §6).

---

## 5. GEO : ce qui est documenté, ce qui est mythe

Recherche menée en août 2026, sources éditeurs.

### Ce qui est faux et coûte du temps

- **llms.txt n'est pas un levier SEO.** Google écrit verbatim que Search, AI
  Overviews compris, l'ignore. Aucun autre éditeur ne documente le lire. Une
  étude Ahrefs sur 137 210 domaines : **97 % de ces fichiers ne reçoivent aucune
  requête**. On garde le nôtre pour une raison précise et limitée : les agents
  de code (Claude Code, Cursor) le fetchent quand on leur donne l'URL, et c'est
  exactement ton audience. *(documenté)*
- **Les rich results FAQ et HowTo sont morts.** FAQ retiré le 2026-05-07, HowTo
  en 2023, sitelinks searchbox en 2024. Le balisage reste valide et sans
  pénalité, mais n'achète aucun traitement SERP. *(documenté)*
- **Densifier le JSON-LD ne produit pas de citations IA.** Quasi-expérience
  Ahrefs sur 1 885 pages contre 4 000 témoins : aucun effet. *(mesuré par un tiers)*
- **Les tactiques du papier « GEO »** (ajouter des statistiques, des citations
  décoratives, une « voix d'autorité ») : le +30-40 % vient d'un benchmark
  synthétique, pas du web réel. *(documenté)*

### Ce qui est vrai

- **Pour les surfaces IA de Google, l'indexation est un prérequis dur.** Search
  Central : *« pour être éligible comme lien d'appui dans AI Overviews ou AI
  Mode, une page doit être indexée et éligible à l'affichage avec un extrait »*.
  Avec 3 pages sur 258, **98 % du site est catégoriquement inéligible**.
  *(documenté)*
- **ChatGPT Search lit l'index Bing.** Tes 81 pages indexées chez Bing te
  rendent déjà citable par ChatGPT. C'est ton canal GEO qui fonctionne
  aujourd'hui. *(documenté)*
- **Les directives de snippet sont le seul contrôle documenté** sur ce que
  Google reprend dans AI Overviews. Le site déclare déjà `max-snippet:-1`,
  `max-image-preview:large`. Ne jamais ajouter `noarchive` : Microsoft documente
  que ça retire du Copilot. *(documenté)*
- **Les tableaux HTML survivent mieux à l'extraction** que le markdown ou le
  texte (Table Meets LLM, WSDM'24 : 4 tâches sur 5). Déjà appliqué sur les
  pages `/best-*`. *(étude contrôlée)*
- **Les moteurs de réponse citent massivement les annuaires et Reddit** pour les
  questions de recommandation logicielle. D'où la priorité d'AlternativeTo.

### La conclusion GEO, sans détour

Il n'y a pas de porte dérobée vers les IA. Pour Google, il faut être indexé.
Pour ChatGPT, il faut être dans Bing — et tu y es. **Ton meilleur investissement
GEO aujourd'hui, c'est de récolter Bing et d'accumuler des mentions externes**,
pas de retoucher le balisage.

---

## 6. Décisions en attente

- **Fusion des 14 pages `/compare/*`** — seule famille réellement dupliquée
  (72 % de gabarit). Les fusionner dans `/compare` concentrerait l'autorité,
  mais c'est irréversible. À trancher.
- **Les 31 descriptions entre 166 et 197 caractères** — tronquées par Google
  vers 155-160. Pas une erreur, juste de l'affichage perdu.
- **Le prix barré à 19,99 $** sur la page tarifs — si ce tarif n'a jamais été
  pratiqué, c'est un faux prix de référence, contraire aux règles App Store et
  à la directive Omnibus en Europe.

---

## 7. Ce qu'il ne faut surtout pas faire

- Acheter des liens, des annuaires automatiques, des « packs de visibilité IA ».
  Sur un domaine déjà en défiance, une pénalité serait pire que la situation.
- Créer de faux comptes Reddit ou acheter des upvotes. C'est le produit principal
  de la plupart des agences GEO, et c'est contraire aux règles des plateformes.
- Ajouter des pages programmatiques. 138 URLs, 3 indexées.
- Revendiquer une note ou un nombre d'avis : 3 évaluations, c'est trop peu.
- Écrire « open source » ou renvoyer vers GitHub **pour SSHive**. La passerelle
  MCP est un projet distinct.

---

## 8. Comment savoir que ça marche

Dans l'ordre où les signaux apparaîtront :

1. **Bing d'abord** — il réagit vite. Surveille l'onglet *AI Performance* : il
   dira si tu es repris dans des réponses IA.
2. **Les `referringUrls` dans GSC** — aujourd'hui `/en` n'a que deux référents,
   tous deux sa propre redirection racine. Le jour où un domaine tiers apparaît,
   c'est que la chaîne s'amorce.
3. **Une deuxième requête distincte** dans Search Analytics. Depuis 90 jours il
   n'y en a qu'une : « sshive ». La première requête non-marque sera le vrai
   signal de bascule.
4. **Les compteurs par sitemap** — le découpage en 7 fichiers existe pour ça :
   la famille qui décolle en premier dira où concentrer l'effort.

Outil : `npm run gsc sitemaps | queries | pages | audit` (clé dans
`secrets/gsc-key.json`, propriété `sc-domain:sshive.app`).

---

## 9. L'ordre d'exécution

**Cette semaine, sans dépendance**
1. Vérifier *Sécurité et actions manuelles* dans GSC.
2. Lien depuis netmesafe.com vers sshive.app.
3. Terminer AlternativeTo (captures Mac + 5 $).
4. MacUpdate, SourceForge.

**Ensuite, la chaîne MCP**
5. Extraire `sshive-mcp` en paquet npm + dépôt public (passerelle seule).
6. Publier au registre officiel (`mcp-publisher login http`, clé déjà en place).
7. Glama, mcp.so, Smithery, awesome-mcp-servers.
8. Soumettre le plugin Claude Code.

**Puis le contenu**
9. L'article sécurité sur le pont MCP ↔ SSH.
10. L'article Network Utility.

**Après la 2.0.0**
11. Product Hunt, Show HN.
