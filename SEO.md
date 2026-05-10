# SSHive SEO — Plan d'action et historique

> Document de reference pour le push SEO sshive.app. Mis a jour 2026-05-09.

## TL;DR

- 165/168 pages non-indexees au depart → diagnostic : contenu maigre + pas de FAQ/HowTo schema + peu de pages d'entree.
- Branche `SEO` ajoute 42 pages riches (10 use-cases + 10 how-to × 2 langues + features enrichies), schemas FAQPage/HowTo/TechArticle, maillage interne et fix bug i18n.
- Sitemap : **96 → 138 URLs**, build : **54 → 105 pages statiques**.
- Reste a pousser : angle "MobaXterm pour macOS" dans titles/descriptions, fix CTR sur compare pages (30+ impressions / 0 clic), articles de blog.

---

## Diagnostic initial (Search Console)

### Performances 30j → 90j
- **39 clics** total sur 3 mois, ~4 clics/jour en pic.
- Requete principale `sshive` (brand) : 32 clics / 74 impressions.
- Requetes long-tail avec impressions mais **0 clic** (= probleme CTR ou pages absentes) :
  - `macos sftp finder` (4)
  - `macos ssh tunnel` (2)
  - `tabby vs termius comparison` (1)
  - `finder sftp` (1)

### Indexation
- 3 pages indexees, 165 non-indexees au moment du diagnostic.
- Cause principale identifiee : contenu trop court (~120 mots/page sur features, layout repetitif sur compare), insuffisant pour Google ("Discovered – currently not indexed" ou "Crawled – currently not indexed").
- Causes techniques ECARTEES (verifiees OK avant les modifs) :
  - Canonical URLs ✅
  - hreflang en/fr ✅
  - robots.txt ouvert ✅
  - Sitemap XML genere et soumis ✅
  - Schema Organization + SoftwareApplication ✅

### Pages les plus exposees (impressions GSC)
| Page | Impressions | Clics |
|------|-------------|-------|
| `/` | 102 | 39 |
| `/en/compare/royal-tsx` | 11 | 0 |
| `/en/compare/termius` | 10 | 0 |
| `/en/compare` | 10 | 0 |
| `/en/compare/iterm2` | 10 | 0 |
| `/en/compare/mobaxterm` | 9 | 0 |
| `/en/features/sftp` | 6 | 0 |
| `/en/compare/putty` | 5 | 0 |

→ Les pages compare et features ont du trafic potentiel mais le **CTR est nul** : titres/descriptions a retravailler.

---

## Travaux livres sur la branche `SEO`

### 1. Bug indexation FR (critique)
- `src/app/[locale]/compare/[competitor]/page.tsx` : `generateStaticParams` retournait `{ competitor }` sans `locale` → les 7 pages `/fr/compare/*` n'etaient pas pre-rendered.
- Fix : `LOCALES.flatMap((locale) => slugs.map((c) => ({ locale, competitor: c })))`.

### 2. Composants SEO reutilisables
- `src/components/seo/FAQSchema.tsx` — JSON-LD `FAQPage` + `Question`/`Answer`.
- `src/components/seo/HowToSchema.tsx` — JSON-LD `HowTo` + `HowToStep`.
- `src/components/seo/ArticleSchema.tsx` — JSON-LD `TechArticle`.
- `src/components/seo/FAQSection.tsx` — section visible avec `<details>`/`<summary>` (UX + accessible).
- `src/components/seo/RelatedLinks.tsx` — bloc de maillage interne.

### 3. Contenu enrichi (8 features × 2 langues)
- `src/lib/seo/features.ts` : pour chaque feature SSHive (ssh, sftp, rdp, vnc, tunnels, mcp, broadcast, snippets) :
  - Intro long-form (~200-300 mots, bilingue FR+EN).
  - 3 cas d'usage typiques.
  - 4 questions FAQ avec reponses detaillees.
  - 3 features liees + cas d'usage lies + tutoriels lies.
- Page `/[locale]/features/[feature]` rendue avec : intro long, "Key capabilities", "Common workflows", FAQ, RelatedLinks (×3 sections).
- JSON-LD : `FAQPage` + `TechArticle` + `BreadcrumbList`.

### 4. pSEO use-cases (10 sujets × 2 langues = 20 pages)
- Route : `/[locale]/use-cases/[slug]` + index `/[locale]/use-cases`.
- `src/lib/seo/use-cases.ts` definit chaque sujet bilingue : metaTitle/metaDescription, h1, hero, intro, sections H2 (avec body), FAQ, related.
- Sujets : `raspberry-pi`, `aws-ec2`, `home-server`, `proxmox`, `docker`, `kubernetes`, `jump-host`, `windows-server`, `nas-synology`, `developer-mac`.
- Schemas : `FAQPage` + `TechArticle` + `BreadcrumbList`.

### 5. pSEO how-to (10 tutoriels × 2 langues = 20 pages)
- Route : `/[locale]/how-to/[slug]` + index `/[locale]/how-to`.
- `src/lib/seo/how-tos.ts` : metaTitle/metaDescription, h1, hero, intro, **tableau d'etapes** (HowToStep), FAQ, related.
- Sujets : `ssh-tunnel-mac`, `ssh-key-mac`, `sftp-gui-mac`, `rdp-from-mac`, `vnc-from-mac`, `jump-host-mac`, `import-ssh-config-mac`, `socks5-proxy-mac`, `broadcast-commands-mac`, `claude-mcp-ssh`.
- Schemas : `HowTo` + `FAQPage` + `TechArticle` + `BreadcrumbList`.

### 6. Compare pages
- Ajout d'une mini-FAQ generique par concurrent (3 questions : "diff principale", "moins cher", "comment migrer"), generee depuis les donnees existantes.
- Schemas ajoutes : `FAQPage` + `TechArticle`.

### 7. Maillage interne
- Composant `RelatedLinks` injecte sur features / use-cases / how-to (related features, related use cases, related how-tos).
- Navbar : ajout "Use cases" et "Guides" (FR : "Cas d'usage" / "Guides").
- Footer : section Resources enrichie avec Use cases + Guides.

### 8. Sitemap
- `src/app/sitemap.ts` mis a jour : pages `/use-cases`, `/how-to` + tous les slugs.
- Total URLs : 96 → 138 (× 2 locales).

### Resultat build
- **109 pages statiques** generees (vs 54 avant — +44 pSEO + features enrichies + iPhone use-case).
- Build < 5s, 0 erreur.
- Verification HTML : `<title>`, `canonical`, `hreflang`, `FAQPage`, `HowTo`, `TechArticle`, `SoftwareApplication` (Mac + iOS + iPadOS) tous presents.

### Garde-fous editoriaux applique
- Aucune comparaison fabriquee de pricing concurrent (j'ai purge "MobaXterm Pro $69 / annual support renewal").
- Aucune assertion sur la roadmap d'un concurrent ou d'une feature qu'on n'a pas (j'ai supprime "Touch ID via Secretive", "sk-ed25519 roadmap 2026", "H.264 in evaluation", "AVD broker handshake on roadmap", "cloud sync on roadmap late 2026", "SSM integration on 2026 roadmap").
- Aucune affirmation legale sur la position de Mobatek (suppression de "Mobatek confirmed years ago there is no roadmap...").
- MobaXterm est mentionne uniquement dans le **body** d'une use-case (`/use-cases/all-in-one-ssh-client-mac`) pour capter le SEO via l'import MobaXterm.ini — fonctionnalite **reelle** confirmee dans le changelog interne.
- Liste outils MCP corrigee : `ssh_execute`, `sftp_list`, `sftp_read_file`, `sftp_write_file`, `sftp_write_chunk` (et non `ssh_list_sessions` invente).

### Pivot Apple (Mac + iPhone + iPad) — applique
- ✅ Home `metaTitle` : "SSHive — SSH Client for Mac, iPhone & iPad, AI-Ready" (EN) / "SSHive — Client SSH pour Mac, iPhone et iPad, pret pour l'IA" (FR).
- ✅ Home `metaDescription` mentionne explicitement Mac, iPhone et iPad + Touch ID + MCP.
- ✅ `SoftwareApplicationSchema` : `operatingSystem: 'macOS 13+, iOS, iPadOS'`, featureList qui distingue features universelles (SSH, SFTP) des features macOS-only (RDP, VNC, tunnels, broadcast, MCP), `softwareRequirements: 'macOS 13 Ventura or later, iOS 16+, iPadOS 16+'`.
- ✅ Constant `APP_STORE_UNIVERSAL_URL` (sans `mt=12`) ajoutee — resout vers Mac App Store ou App Store iOS selon le device.
- ✅ Touch ID reintegre dans l'intro de `/features/ssh` et dans une nouvelle FAQ explicite ("Does SSHive support Touch ID for SSH connections?").
- ✅ Nouvelle use-case `/use-cases/ssh-from-iphone` (EN + FR, ~1500 mots, FAQ dediee, Touch ID/Face ID, integration Magic Keyboard iPad, on-call workflow).
- ✅ FAQ "Does SSHive run on iPhone and iPad?" ajoutee dans `/features/ssh`.

**Note iOS** : la version iOS embarque uniquement SSH terminal et SFTP. RDP, VNC, tunnels, broadcast, MCP server restent macOS-only — c'est un choix produit ergonomique, et le SEO le reflete (titres et FAQ precisent la repartition).

**Total pages statiques** : 107 → 109 (+2 pour ssh-from-iphone EN + FR).

---

## Strategie SEO ciblee — angles a pousser

### #1. Positionnement principal : "le client SSH macOS pret pour l'IA"
L'angle qui rend SSHive unique = **MCP integre, sessions SSH pilotables par Claude Code / Cursor / Claude Desktop sans installer quoi que ce soit d'autre**. Aucun concurrent direct (iTerm2, Termius, MobaXterm, Royal TSX) n'offre ca natif. C'est la baseline.

**Livre dans cette branche** :
- ✅ Home `metaTitle` : "SSHive — Native SSH/SFTP/RDP/VNC Client for macOS, AI-Ready" (EN) / "SSHive — Client SSH/SFTP/RDP/VNC natif pour macOS, pret pour l'IA" (FR).
- ✅ Home `metaDescription` met le MCP/Claude en avant.
- ✅ Use-case `/use-cases/all-in-one-ssh-client-mac` (FR + EN, ~1500 mots) — angle "all-in-one Mac SSH client" + section dediee Claude/Cursor/MCP, FAQ qui cite l'import MobaXterm.ini (donnee verifiable) sans pretendre comparer financierement Mobatek.
- ✅ `metaTitleTemplate` compare/* reecrit ("Free macOS SSH Client Compared (2026)").

**MobaXterm — usage SEO controle, pas dans les titres** : trademark Mobatek, donc **pas dans le `<title>` de la home**. On le mentionne dans le **body** des pages compare/use-case (pour capter "mobaxterm import to mac", "all-in-one terminal mac"), mais sans pretendre etre une alternative officielle ni inventer leur pricing.

**Reste a livrer (a faire en sprint suivant)** :
- Section "Hero AI" sur la home : un visuel "Claude → SSHive MCP → vos serveurs" avec demo en 3 lignes (la home actuelle parle de MCP plus bas).
- Article de blog dedie : "Pilotage SSH par Claude via MCP : setup en 30 secondes" (gros levier, niche encore peu couverte).
- Page `/mcp` : verifier que les meta titles et la H1 mettent l'angle "AI-ready SSH client" en avant et listent precisement les outils MCP exposes (`ssh_execute`, `sftp_list/read/write/write_chunk`).

### #2. Fix CTR sur les compare pages
Les pages /compare/* recoivent des impressions mais 0 clic. Causes probables :
- Titres trop generiques.
- Descriptions repetitives entre concurrents.
- Pas de USP differenciant dans le snippet.

**Actions** :
- Reecrire les `metaTitle` par concurrent avec un benefice precis et **verifiable** : "SSHive vs Termius — Native macOS Alternative with Built-in AI" plutot que des chiffres inventes.
- Mettre l'angle MCP/AI dans la `metaDescription` de chaque compare (notre vrai differenciateur).
- Tester l'ajout d'une note (★ 4.x sur App Store) si le rating le permet — Google peut afficher.

### #3. Cibler les requetes long-tail avec impressions et 0 clic
- `macos sftp finder` (4 impressions) → on a `/use-cases/developer-mac` et `/features/sftp`. Mais aucune ne cible le **mot Finder**. Action : creer `/use-cases/sftp-in-finder-mac` ou enrichir features/sftp avec une section explicite "Use SFTP like Finder on Mac".
- `macos ssh tunnel` (2 impressions) → on a deja `/how-to/ssh-tunnel-mac`. Verifier la position GSC apres deploiement.
- `tabby vs termius comparison` (1 impression) → opportunite cross-talk. Creer `/compare/tabby-vs-termius` ou ajouter un H2 dans `/compare/terminus` et `/compare/termius`.
- `finder sftp` (1 impression) → meme angle que `macos sftp finder`.

### #3. Cibler les requetes long-tail avec impressions et 0 clic
- `macos sftp finder` (4 impressions) → on a `/use-cases/developer-mac` et `/features/sftp`. Mais aucune ne cible le **mot Finder**. Action : creer `/use-cases/sftp-in-finder-mac` ou enrichir features/sftp avec une section explicite "Use SFTP like Finder on Mac".
- `macos ssh tunnel` (2 impressions) → on a deja `/how-to/ssh-tunnel-mac`. Verifier la position GSC apres deploiement.
- `tabby vs termius comparison` (1 impression) → opportunite cross-talk. Creer `/compare/tabby-vs-termius` ou ajouter un H2 "How does SSHive compare to a Tabby vs Termius shootout?" dans `/compare/terminus` et `/compare/termius`.
- `finder sftp` (1 impression) → meme angle que `macos sftp finder`.

### #4. Articles de blog (gap actuel)
La page `/blog` existe mais est vide ("Coming soon"). Manque cruel de signal de fraicheur. **5-8 articles a publier en priorite**, classes par alignement avec l'angle AI/MCP en premier :
1. "Connecting Claude Code to your SSH servers via MCP — a 30-second setup" — l'angle differenciateur, niche encore peu couverte.
2. "Cursor + SSH : let your IDE drive your servers" — meme angle, autre persona.
3. "5 SSH tunnel patterns every Mac developer should know" — long-form how-to content.
4. "From a Windows all-in-one terminal to macOS : importing your sessions and finding the equivalent workflow" — capte "mobaxterm to mac" sans nommer dans le titre.
5. "Self-hosting on Mac : managing Plex, Home Assistant, and Pi-hole from one app".
6. "How to use SFTP like Finder on a Mac (free)" — cible "macos sftp finder" (4 impressions GSC).
7. "AWS EC2 + bastion + private RDS : the complete Mac SSH setup".
8. "What MCP changes for sysadmins on macOS in 2026" — thought-leadership.

Format : 1500-2500 mots, code samples, screenshots SSHive, internal links vers `/features/*`, `/use-cases/*`, `/how-to/*`. Schema `BlogPosting` JSON-LD.

### #5. Programmatic SEO supplementaire (vague 2)
Apres avoir pousse les 10 use-cases et 10 how-to actuels, possibilites de duplication :
- `/alternatives/[slug]` : "SSHive vs [SecureCRT|Royal TSX|MobaXterm|...]" — mais avec un angle "alternative" pour capter `mobaxterm alternative mac`, `securecrt alternative`, etc. (slugs differents de `/compare/*`).
- `/sftp-for/[platform]` : `synology`, `qnap`, `truenas`, `unraid`, `freebsd`, `ubuntu`, `debian` — niche mais long-tail dense.
- `/ssh-into/[scenario]` : `aws-instance-without-pem`, `docker-container`, `kubernetes-pod`, `git-server`.

---

## Reference — fonctionnalites SSHive (pour rappel SEO copywriting)

> Source : changelog interne. A utiliser pour ecrire des paragraphes / articles / metaDescriptions precis.

### Connexions
- **SSH** : ssh2, PTY shell, password / cle privee (avec passphrase) / agent SSH
- **SFTP** : navigation, upload/download, mkdir, search, bookmarks, bulk, drag & drop dossiers, download recursif
- **RDP** : embarque — agent-rdp (DMG/Windows) ou freerdp-native + libjpeg-turbo SIMD (MAS)
- **VNC** : embarque via noVNC + proxy WebSocket↔TCP (port dynamique)
- **Terminal local** : node-pty (zsh macOS, PowerShell/cmd Windows) — desactive en MAS
- **Outils reseau** : DNS lookup/reverse, ping, traceroute, whois (TCP natif), DNSBL, MX, interfaces

### Productivite terminal
- **xterm.js GPU** (WebGL + fallback Canvas), recherche, copy on select
- **Split terminal** (Cmd+Shift+D vertical, Cmd+D horizontal, divider redimensionnable, badge pane count)
- **Broadcast multi-exec** (Cmd+Shift+B) — commande simultanee sur toutes sessions
- **Snippets** (Cmd+Shift+S) — 14 predefinis + custom (system/network/disk/docker/git)
- **Session logging** — enregistrement sortie terminal dans fichier
- **Historique** des connexions recentes
- **Reconnexion auto** + monitoring SSH (CPU/RAM/uptime, pause si onglet inactif)

### SFTP avance
- Panneau switchable horizontal/vertical, divider drag, double-clic reset
- Editeur de fichier distant (CodeMirror, Cmd+S sauvegarde)
- Dialogue de conflit upload (remplacer/dupliquer/ignorer)
- Drag & drop dossiers + download recursif

### Tunnels SSH
- Local forward (-L), remote forward (-R), SOCKS5 proxy (-D)
- Limites : 10 locaux / 5 distants par profil
- Indicateur ⇄ dans la status bar

### Profils & comptes
- Profils JSON, groupes colores + sous-dossiers imbriques
- Comptes partages (credentials reutilisables)
- Jump host
- **Imports** : PuTTY, RoyalTSX, MobaXterm.ini (clair uniquement), `~/.ssh/config`
- Export/import chiffre `.webssh` avec passphrase

### Securite
- safeStorage (Keychain macOS / DPAPI Windows) pour mots de passe
- Known Hosts SSH avec gestion empreintes
- App Lock (mot de passe maitre)
- OTP Authenticator embarque (TOTP/HOTP, vault chiffre, import/export)
- contextIsolation, sandbox, validation Zod sur chaque IPC, fichiers en 0o600

### Integrations
- **Serveur MCP local** (port 49422, Bearer token) — outils `ssh_execute`, `sftp_list/read/write/write_chunk`
- **Auto-config** Claude Code, Cursor, Claude Desktop
- **Protocole `ssh://`** (DMG + Windows)

### UX
- Theme dark/light, i18n FR/EN/ES, notifications systeme, plein ecran (Ctrl+Cmd+F / F11)
- Toolbar customisable, raccourcis personnalisables
- Auto-update electron-updater (DMG + Windows, pas en MAS)

### Freemium
- `__SSHIVE_PRO__` flag inline Vite, LicenseService source de verite
- IAP StoreKit (MAS) avec restauration achats, grace period
- `FREE_DEV=1` pour tester limites en dev

### Argument de positionnement principal
> **SSHive est le client SSH Apple natif pret pour l'IA — Mac, iPhone, iPad.** Sur Mac : tout-en-un (SSH + SFTP + RDP + VNC + tunnels + broadcast + serveur MCP), Apple Silicon natif, Trousseau macOS protege par Touch ID. Sur iPhone et iPad : SSH terminal + SFTP natifs avec profils synchronises et auth biometrique (Touch ID / Face ID). Point unique sur Mac : le serveur MCP integre permet a Claude Code, Cursor et Claude Desktop de piloter les sessions SSH directement sans installation supplementaire. C'est l'app SSH que les developpeurs et sysadmins Apple attendaient en 2026.

**Repartition macOS / iOS a respecter** :
- **Universel (Mac + iPhone + iPad)** : SSH terminal, SFTP file manager, profils, jump hosts, auth biometrique.
- **macOS uniquement** : RDP integre, VNC integre, tunnels SSH (-L/-R/-D), broadcast multi-hote, serveur MCP, bibliotheque de snippets, X11 via XQuartz, outils reseau.

**Note SEO** : MobaXterm est une marque deposee de Mobatek. Eviter de la mettre dans les `<title>` ou les positionnements de marque. Usage limite au body des pages compare et a la mention de l'import MobaXterm.ini (fonctionnalite reelle de SSHive), pour capter du trafic organique "mobaxterm import to mac" sans pretendre etre une alternative officielle.

---

## A faire dans Google Search Console apres deploiement

1. **Sitemap** → "Soumettre a nouveau" `https://sshive.app/sitemap.xml`.
2. **Inspection URL** → demander indexation pour 5-10 pages prioritaires :
   - `/en/use-cases/raspberry-pi`
   - `/en/use-cases/aws-ec2`
   - `/en/use-cases/home-server`
   - `/en/use-cases/developer-mac`
   - `/en/how-to/ssh-tunnel-mac`
   - `/en/how-to/ssh-key-mac`
   - `/en/how-to/rdp-from-mac`
   - `/en/compare/mobaxterm` (post-fix CTR)
   - `/fr/use-cases/raspberry-pi`
   - `/fr/use-cases/home-server`
3. **Rich Results Test** → coller une how-to dans `https://search.google.com/test/rich-results` pour confirmer HowTo + FAQ valides.
4. **Surveiller** Indexation → "Pages indexees" sur 3-4 semaines. Cible : passer de 3 → 80+ indexees.
5. **Performance** → filtrer par requetes contenant "mobaxterm", "macos sftp", "ssh tunnel mac" pour mesurer la croissance.

## Roadmap SEO recommandee

| Phase | Sprint | Actions | Effort | ROI estime |
|-------|--------|---------|--------|------------|
| 1 | done | Branche SEO : 42 pages pSEO + features enrichies + schemas + maillage + fix bug i18n | 1j | Indexation 3 → 80+ pages cible |
| 2 | done | Repivot home metaTitle/Description sur "AI-ready SSH client" + use-case `/use-cases/all-in-one-ssh-client-mac` + purge des claims invents | inclus | Positionnement honnete + angle differenciateur |
| 3 | next | Reecriture metaTitles/Descs compare/* sans chiffres invents — angle "native macOS + AI integration" pour le CTR | 0.5j | x2-x3 sur clics compare |
| 4 | next | Section "Hero AI" visible sur la home : visuel "Claude → SSHive MCP → vos serveurs" + 3 lignes de demo | 0.5j | Renforce le signal AI/MCP differenciateur sur la page la plus crawlee |
| 5 | s+1 | 5-8 articles blog (priorite : angle MCP/AI) — cf. Strategie #4 | 2-3j | Long-tail + signal de fraicheur + thought leadership |
| 6 | s+2 | OG images dynamiques par route + optimisation Open Graph | 0.5j | +5-15% CTR social |
| 7 | s+3-4 | Vague 2 pSEO (`/sftp-for/`, `/ssh-into/`, plus de cas d'usage) | 1-2j | Capter long-tail residuelle |
| 8 | s+4 | Cibler "macos sftp finder" / "finder sftp" via section dediee dans `/features/sftp` ou nouvelle use-case `sftp-in-finder-mac` | 0.5j | Capter 5+ impressions/jour qui ont 0 clic actuellement |

## Outils utiles
- Search Console : monitoring indexation + requetes
- Rich Results Test : `https://search.google.com/test/rich-results`
- Schema validator : `https://validator.schema.org/`
- PageSpeed Insights : `https://pagespeed.web.dev/`
- Ahrefs / SEMrush (payants) : volume + concurrence keywords
- Google Trends : suivre "mobaxterm mac" / "ssh client mac" / "termius alternative"

---

_Branche `SEO`, audit + push prepare le 2026-05-09._
