import type { Bilingual, QA } from './features';

export interface IosCapability {
  title: Bilingual;
  body: Bilingual;
}

export interface IosCompetitor {
  name: string;
  pitch: Bilingual;
  pricing: Bilingual;
  compareSlug?: string;
}

export interface IosFeatureSEO {
  slug: string;
  /** lucide-react icon name to render at the top */
  iconName: 'Terminal' | 'FolderOpen' | 'Monitor' | 'Eye' | 'Shield';
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  intro: Bilingual;
  /** 4-6 capability tiles */
  capabilities: IosCapability[];
  /** "Why SSHive on iPhone/iPad" reasons (3-5) */
  whyHeading: Bilingual;
  why: IosCapability[];
  /** Quick competitive landscape */
  competitorsHeading: Bilingual;
  competitors: IosCompetitor[];
  /** FAQ (4-6) */
  faq: QA[];
  /** Long-form deep dive at the end (~300-500 words) */
  deepDiveHeading: Bilingual;
  deepDive: Bilingual;
}

export const IOS_PAGES: IosFeatureSEO[] = [
  /* ────────────────────────────────────────────────────────────────────
     1. /ios-ssh-client — main iOS landing
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'ios-ssh-client',
    iconName: 'Terminal',
    metaTitle: {
      en: 'iOS SSH Client — Native iPhone & iPad Terminal | SSHive',
      fr: 'Client SSH iOS — Terminal iPhone et iPad natif | SSHive',
    },
    metaDescription: {
      en: 'Full xterm-256color SSH terminal on iPhone and iPad. Ed25519 and ECDSA keys with passphrase, Touch ID / Face ID Keychain, 8 themes, broadcast and SSH tunnels. Free to start.',
      fr: 'Terminal SSH xterm-256color complet sur iPhone et iPad. Cles Ed25519 et ECDSA avec passphrase, Trousseau Touch ID / Face ID, 8 themes, broadcast et tunnels SSH. Gratuit pour commencer.',
    },
    h1: {
      en: 'A real SSH client for iPhone and iPad',
      fr: 'Un vrai client SSH pour iPhone et iPad',
    },
    hero: {
      en: 'xterm-256color terminal, Ed25519 keys with passphrase, Touch ID Keychain, broadcast, tunnels — the full SSH workflow, native on iOS and iPadOS.',
      fr: 'Terminal xterm-256color, cles Ed25519 avec passphrase, Trousseau Touch ID, broadcast, tunnels — le workflow SSH complet, natif sur iOS et iPadOS.',
    },
    intro: {
      en: 'Apple never shipped an SSH client. If the prod alert hits at 2am while you are nowhere near a laptop, the default iPhone gives you nothing — no `ssh user@host`, no terminal, no SFTP. SSHive fills that gap with a native iPhone and iPad app: a real xterm-256color terminal built on SwiftTerm, Ed25519 + ECDSA P-256 private-key auth with bcrypt-pbkdf passphrase encryption, jump-host support, broadcast across multiple sessions, and credentials stored in the iOS Keychain behind Face ID or Touch ID — all in a SwiftUI interface that adapts to iPhone TabView and iPad NavigationSplitView.\n\nThe model is intentionally simple: no subscription, no data sent off your device, one-time Pro purchase, yours for life. The Free tier covers 2 concurrent sessions, 5 saved profiles, 1 local tunnel, 3 snippets and 10 MB-per-file SFTP. Pro is $9.99 one-time on the App Store (Universal Purchase: pay once, use on iPhone, iPad, and Mac). If something feels off or could be better, we are listening — write to us.',
      fr: 'Apple n\'a jamais livre de client SSH. Si l\'alerte prod tombe a 2h alors que vous etes loin d\'un laptop, l\'iPhone par defaut ne vous donne rien — pas de `ssh user@host`, pas de terminal, pas de SFTP. SSHive comble ce manque avec une app iPhone et iPad native : un vrai terminal xterm-256color base sur SwiftTerm, auth par cle privee Ed25519 + ECDSA P-256 avec passphrase bcrypt-pbkdf, support jump-host, broadcast sur plusieurs sessions, et credentials stockes dans le Trousseau iOS derriere Face ID ou Touch ID — le tout dans une interface SwiftUI qui s\'adapte au TabView iPhone et au NavigationSplitView iPad.\n\nLe modele est volontairement simple : pas d\'abonnement, pas de donnees qui quittent votre appareil, achat Pro unique, a vous pour la vie. Le tier gratuit couvre 2 sessions simultanees, 5 profils sauvegardes, 1 tunnel local, 3 snippets et 10 Mo par fichier SFTP. Pro a 9,99 € unique sur l\'App Store (Universal Purchase : payez une fois, utilisez sur iPhone, iPad et Mac). Si quelque chose vous semble manquer ou ameliorable, on ecoute — ecrivez-nous.',
    },
    capabilities: [
      {
        title: { en: 'xterm-256color terminal', fr: 'Terminal xterm-256color' },
        body: {
          en: 'Powered by SwiftTerm — full xterm-256color emulation, 8 built-in themes (Tokyo Night, Dracula, Solarized Dark/Light, Monokai, Nord, Gruvbox, One Dark), pinch-to-zoom font sizing, configurable scrollback from 1,000 to 50,000 lines, and a special-keys bar (Esc, Tab, Ctrl, Alt, arrows, pipe, slash, tilde, dash, underscore).',
          fr: 'Base sur SwiftTerm — emulation xterm-256color complete, 8 themes (Tokyo Night, Dracula, Solarized Dark/Light, Monokai, Nord, Gruvbox, One Dark), zoom pinch-to-zoom sur la taille de police, scrollback configurable de 1 000 a 50 000 lignes, et une barre de touches speciales (Esc, Tab, Ctrl, Alt, fleches, pipe, slash, tilde, dash, underscore).',
        },
      },
      {
        title: { en: 'Ed25519 + ECDSA private-key auth', fr: 'Auth par cle privee Ed25519 + ECDSA' },
        body: {
          en: 'Import your existing OpenSSH-format private keys (Ed25519 and ECDSA P-256). Passphrase-protected keys are decrypted on-device with bcrypt-pbkdf + AES-256-CTR. Two modes: "remember passphrase behind Face ID / Touch ID" or "ask every connection". Known-hosts (TOFU) verification with SHA-256 fingerprints catches MITM attempts.',
          fr: 'Importez vos cles privees existantes au format OpenSSH (Ed25519 et ECDSA P-256). Les cles passphrase sont dechiffrees sur l\'appareil avec bcrypt-pbkdf + AES-256-CTR. Deux modes : "memoriser passphrase derriere Face ID / Touch ID" ou "demander a chaque connexion". Verification known-hosts (TOFU) avec empreintes SHA-256 pour detecter le MITM.',
        },
      },
      {
        title: { en: 'Multiple concurrent sessions', fr: 'Sessions simultanees multiples' },
        body: {
          en: 'Free covers 2 SSH sessions at once; Pro unlimited. Swipe between them on iPhone or split-view on iPad. Sessions survive backgrounding when iOS allows it; auto-reconnect kicks in on network changes — configurable keep-alive (5 to 120 s) keeps idle sessions alive.',
          fr: 'Free couvre 2 sessions SSH simultanees ; Pro illimite. Glissez entre elles sur iPhone ou split-view sur iPad. Les sessions survivent au backgrounding quand iOS le permet ; reconnexion auto sur changement reseau — keep-alive configurable (5 a 120 s) maintient les sessions inactives vivantes.',
        },
      },
      {
        title: { en: 'Broadcast multi-session', fr: 'Broadcast multi-session' },
        body: {
          en: 'Type once, run on N servers. Select multiple connected sessions and the keyboard input is mirrored to all of them — perfect for fleet updates (`apt update && apt upgrade -y` on 8 hosts at the same time) or quick health checks across a tier. Pro feature.',
          fr: 'Tapez une fois, executez sur N serveurs. Selectionnez plusieurs sessions connectees et la saisie clavier est mirroir sur toutes — parfait pour les updates de flotte (`apt update && apt upgrade -y` sur 8 hotes en meme temps) ou des health checks rapides sur un tier. Feature Pro.',
        },
      },
      {
        title: { en: 'SSH tunnels (-L, -R, -D)', fr: 'Tunnels SSH (-L, -R, -D)' },
        body: {
          en: 'Local tunnels (-L) to reach a remote port through SSH, reverse tunnels (-R) to expose a local service, dynamic SOCKS5 (-D) for per-app proxying. Free includes 1 local tunnel; Pro unlimited including reverse and SOCKS5.',
          fr: 'Tunnels locaux (-L) pour atteindre un port distant via SSH, tunnels reverse (-R) pour exposer un service local, SOCKS5 dynamique (-D) pour proxy par app. Free inclut 1 tunnel local ; Pro illimite y compris reverse et SOCKS5.',
        },
      },
      {
        title: { en: 'Jump Host / ProxyJump', fr: 'Jump Host / ProxyJump' },
        body: {
          en: 'Chain through a bastion in one click. Configure a jump host per profile, SSHive opens the bastion SSH session and tunnels the final connection through it transparently. Pro feature. Works the same way it does on macOS, with the same credential model.',
          fr: 'Chainez via un bastion en un clic. Configurez un jump host par profil, SSHive ouvre la session SSH bastion et tunnelise la connexion finale a travers de facon transparente. Feature Pro. Marche comme sur macOS, meme modele de credentials.',
        },
      },
    ],
    whyHeading: {
      en: 'Why use SSHive on iPhone instead of...',
      fr: 'Pourquoi SSHive sur iPhone au lieu de...',
    },
    why: [
      {
        title: { en: 'No subscription, no data sent', fr: 'Pas d\'abonnement, pas de donnees envoyees' },
        body: {
          en: 'SSHive Pro is a single $9.99 one-time purchase, Universal across iPhone, iPad and Mac, with lifetime updates. The Free tier is usable without paying anything. Nothing about your sessions or credentials is sent off your device — there is no telemetry to collect and no cloud account to create.',
          fr: 'SSHive Pro est un achat unique a 9,99 €, Universal sur iPhone, iPad et Mac, mises a jour a vie. Le tier gratuit est utilisable sans payer. Rien sur vos sessions ou identifiants ne quitte votre appareil — pas de telemetrie a collecter et pas de compte cloud a creer.',
        },
      },
      {
        title: { en: 'Real SwiftUI iOS 17+ UI', fr: 'Vraie UI SwiftUI iOS 17+' },
        body: {
          en: 'Built natively in SwiftUI on iOS 17+: TabView on iPhone, NavigationSplitView on iPad, haptic feedback, dark/light/system mode, iPhone Pro Max landscape optimized, Magic Keyboard friendly on iPad. Not a web view, not a cross-platform wrapper.',
          fr: 'Construit nativement en SwiftUI sur iOS 17+ : TabView sur iPhone, NavigationSplitView sur iPad, retour haptique, mode sombre/clair/systeme, optimise iPhone Pro Max landscape, ami Magic Keyboard sur iPad. Pas une web view, pas un wrapper cross-platform.',
        },
      },
      {
        title: { en: 'Local-only credentials', fr: 'Credentials locaux uniquement' },
        body: {
          en: 'Credentials live in the iOS Keychain with biometric `SecAccessControl` and the `kSecAttrAccessibleWhenUnlockedThisDeviceOnly` flag — no iCloud sync of secrets, no telemetry, no data collection. If your phone is wiped, the credentials are gone. If a cloud provider gets breached, your SSH keys are not in their database.',
          fr: 'Les credentials sont dans le Trousseau iOS avec `SecAccessControl` biometrique et le flag `kSecAttrAccessibleWhenUnlockedThisDeviceOnly` — pas de sync iCloud des secrets, pas de telemetrie, pas de collecte. Si votre telephone est wipe, les credentials sont perdus. Si un cloud provider est breache, vos cles SSH ne sont pas dans leur base.',
        },
      },
      {
        title: { en: 'Universal Purchase with macOS', fr: 'Universal Purchase avec macOS' },
        body: {
          en: 'Buy Pro once on the App Store, use it on iPhone, iPad and Mac. The macOS version adds RDP/VNC convenience features, SSH tunnels UI, broadcast, an MCP server for Claude Code / Cursor / Claude Desktop, snippet library, and the Universal SSH config import from `~/.ssh/config`. The iOS app already ships RDP, VNC, VPN, tunnels, broadcast, network tools and snippets — MCP is the only macOS-exclusive feature.',
          fr: 'Achetez Pro une fois sur l\'App Store, utilisez sur iPhone, iPad et Mac. La version macOS ajoute des facilites RDP/VNC, l\'UI tunnels SSH, broadcast, un serveur MCP pour Claude Code / Cursor / Claude Desktop, la bibliotheque de snippets, et l\'import Universal SSH config depuis `~/.ssh/config`. L\'app iOS embarque deja RDP, VNC, VPN, tunnels, broadcast, outils reseau et snippets — MCP est la seule feature exclusive macOS.',
        },
      },
    ],
    competitorsHeading: {
      en: 'How SSHive compares on iOS',
      fr: 'Comment SSHive se compare sur iOS',
    },
    competitors: [
      {
        name: 'Termius',
        pitch: {
          en: 'Cross-platform client with cloud sync between Mac, iOS, Windows and Linux. Strong polish and a generous free tier. Advanced features and team sync are part of the paid subscription — a good fit if you want everything in the cloud.',
          fr: 'Client cross-platform avec sync cloud entre Mac, iOS, Windows et Linux. Bonne finition et tier gratuit genereux. Les fonctionnalites avancees et la sync d\'equipe sont dans l\'abonnement paye — bon choix si vous voulez tout dans le cloud.',
        },
        pricing: { en: 'Free tier + subscription', fr: 'Tier gratuit + abonnement' },
        compareSlug: 'termius',
      },
      {
        name: 'Prompt 3 (Panic)',
        pitch: {
          en: 'A long-loved premium iOS SSH client by Panic, with a beautiful UI. SSH + SFTP only on iOS — no RDP, VNC or VPN. A great pick if you want the absolute best terminal experience and nothing else.',
          fr: 'Un client SSH iOS premium tres apprecie de Panic, avec une UI magnifique. SSH + SFTP uniquement sur iOS — pas de RDP, VNC ou VPN. Tres bon choix si vous voulez la meilleure experience terminal possible et rien d\'autre.',
        },
        pricing: { en: '$24.99 one-time (iOS only)', fr: '24,99 $ unique (iOS uniquement)' },
      },
      {
        name: 'Blink Shell',
        pitch: {
          en: 'Power-user SSH/Mosh client with a Vim-style command palette. Open source. A great pick if you live in a keyboard-driven workflow and want maximum customization.',
          fr: 'Client SSH/Mosh pour power-users avec command palette style Vim. Open source. Excellent choix si vous vivez en workflow clavier et voulez le maximum de personnalisation.',
        },
        pricing: { en: 'Free / paid version on App Store', fr: 'Gratuit / version payante sur App Store' },
      },
      {
        name: 'ServerCat',
        pitch: {
          en: 'A different angle: it watches servers via Netdata/Prometheus and adds SSH on top. Ideal if monitoring is your primary use case and remote shell is the bonus.',
          fr: 'Un angle different : surveille les serveurs via Netdata/Prometheus et ajoute SSH par-dessus. Ideal si le monitoring est votre cas d\'usage principal et le shell distant le bonus.',
        },
        pricing: { en: 'Free / Pro paid', fr: 'Gratuit / Pro payant' },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does SSHive on iOS support SSH keys with passphrase?',
          fr: 'SSHive sur iOS supporte-t-il les cles SSH avec passphrase ?',
        },
        answer: {
          en: 'Yes. Ed25519 and ECDSA P-256 private keys in OpenSSH format are supported, including passphrase-encrypted keys (bcrypt-pbkdf + AES-256-CTR). You choose between "remember passphrase behind Face ID / Touch ID" or "ask every connection" per key.',
          fr: 'Oui. Cles privees Ed25519 et ECDSA P-256 au format OpenSSH, y compris les cles passphrase (bcrypt-pbkdf + AES-256-CTR). Vous choisissez entre "memoriser passphrase derriere Face ID / Touch ID" ou "demander a chaque connexion" par cle.',
        },
      },
      {
        question: {
          en: 'Can I use SSHive on iPhone without an iCloud account?',
          fr: 'Puis-je utiliser SSHive sur iPhone sans compte iCloud ?',
        },
        answer: {
          en: 'Yes. SSHive does not sync anything to iCloud. All credentials live in the local iOS Keychain with `kSecAttrAccessibleWhenUnlockedThisDeviceOnly`. You can transfer profiles between iOS and macOS manually via the `.sshive` export/import (JSON), but nothing leaves your device automatically.',
          fr: 'Oui. SSHive ne synchronise rien vers iCloud. Tous les credentials sont dans le Trousseau iOS local avec `kSecAttrAccessibleWhenUnlockedThisDeviceOnly`. Vous pouvez transferer les profils entre iOS et macOS manuellement via l\'export/import `.sshive` (JSON), mais rien ne quitte votre appareil automatiquement.',
        },
      },
      {
        question: {
          en: 'Does SSHive on iOS work with Tailscale or WireGuard?',
          fr: 'SSHive sur iOS marche-t-il avec Tailscale ou WireGuard ?',
        },
        answer: {
          en: 'Yes. Tailscale and WireGuard run on iOS as system-level VPN providers via NetworkExtension; once a tunnel is active, SSHive sees the tailnet/WireGuard IPs transparently. SSHive also ships its own NetworkExtension VPN client for IKEv2, IPSec/Xauth and OpenVPN if you do not already have Tailscale or WireGuard.',
          fr: 'Oui. Tailscale et WireGuard tournent sur iOS comme fournisseurs VPN systeme via NetworkExtension ; une fois le tunnel actif, SSHive voit les IPs tailnet/WireGuard de facon transparente. SSHive embarque aussi son propre client VPN NetworkExtension pour IKEv2, IPSec/Xauth et OpenVPN si vous n\'avez pas deja Tailscale ou WireGuard.',
        },
      },
      {
        question: {
          en: 'What iPhones and iPads are supported?',
          fr: 'Quels iPhones et iPads sont supportes ?',
        },
        answer: {
          en: 'iOS 17.0 minimum. iPhone 15, 16, 17 (all Pro/Pro Max/Plus variants), iPhone SE 3. iPad Pro M1/M2/M4, iPad Air M1/M2/M3. arm64 / arm64e architectures.',
          fr: 'iOS 17.0 minimum. iPhone 15, 16, 17 (toutes variantes Pro/Pro Max/Plus), iPhone SE 3. iPad Pro M1/M2/M4, iPad Air M1/M2/M3. Architectures arm64 / arm64e.',
        },
      },
      {
        question: {
          en: 'Does the iPhone version include MCP?',
          fr: 'La version iPhone inclut-elle MCP ?',
        },
        answer: {
          en: 'No — MCP (Model Context Protocol server for Claude Code, Cursor and Claude Desktop) is macOS-only because it needs an always-on local HTTP server that iOS background restrictions prevent. Everything else — SSH, SFTP, RDP, VNC, VPN, tunnels, broadcast, snippets, network tools — runs on iPhone and iPad.',
          fr: 'Non — MCP (serveur Model Context Protocol pour Claude Code, Cursor et Claude Desktop) est macOS-seulement parce qu\'il faut un serveur HTTP local toujours actif, que les restrictions de background iOS empechent. Tout le reste — SSH, SFTP, RDP, VNC, VPN, tunnels, broadcast, snippets, outils reseau — tourne sur iPhone et iPad.',
        },
      },
    ],
    deepDiveHeading: {
      en: 'How SSH on iPhone actually works',
      fr: 'Comment SSH sur iPhone fonctionne reellement',
    },
    deepDive: {
      en: 'SSHive on iOS is a real SwiftUI app — not a web view, not a cross-platform JavaScript wrapper. The terminal emulation comes from SwiftTerm, a mature open-source xterm-256color implementation in Swift, which handles VT100/xterm escape sequences, ANSI colors, alternate-screen buffers (for `less`, `vim`, `htop`), bracketed paste, and mouse reporting. The SSH transport runs on libssh2 with custom patches for jump-host chaining and known-hosts verification.\n\nKeys live in the iOS Keychain with `SecAccessControl` set to `BiometryCurrentSet` — meaning Face ID or Touch ID is required to read them, and they invalidate if you change your biometric enrollment. The encrypted SSH passphrase is wrapped with bcrypt-pbkdf (the OpenSSH-standard KDF) and decrypted on-device into a transient memory buffer that is zeroed after use. Nothing about your key material ever leaves the device, ever touches iCloud, ever hits a server we control.\n\nThe network model handles iOS realities: background time limits, network changes between Wi-Fi and 5G, App Refresh restrictions. Sessions reconnect automatically when the network comes back, configurable SSH keep-alive (`ServerAliveInterval`) prevents idle disconnects, and the integrated NetworkExtension VPN can auto-connect before opening an SSH session for protected fleets.\n\nOn iPad with a Magic Keyboard, the experience is close to a laptop — physical keyboard with Cmd, Ctrl, Esc working as expected, terminal panes resizable via the NavigationSplitView, and Stage Manager keeping SSHive alongside a browser or Notes. On iPhone, the on-screen modifier strip exposes the keys a touch screen normally cannot send (Esc, Tab, Ctrl, Alt, arrows, pipe, slash, tilde) so `Ctrl+C`, `Ctrl+R`, navigating `less`, scrolling logs all work without an external keyboard.',
      fr: 'SSHive sur iOS est une vraie app SwiftUI — pas une web view, pas un wrapper JavaScript cross-platform. L\'emulation terminal vient de SwiftTerm, une implementation xterm-256color open source mature en Swift, qui gere les sequences d\'echappement VT100/xterm, les couleurs ANSI, les buffers alternate-screen (pour `less`, `vim`, `htop`), le bracketed paste et le mouse reporting. Le transport SSH tourne sur libssh2 avec patches custom pour le chainage jump-host et la verification known-hosts.\n\nLes cles sont dans le Trousseau iOS avec `SecAccessControl` regle sur `BiometryCurrentSet` — Face ID ou Touch ID requis pour les lire, et invalidation si vous changez votre enrolment biometrique. La passphrase SSH chiffree est wrappee avec bcrypt-pbkdf (le KDF standard OpenSSH) et dechiffree sur l\'appareil dans un buffer memoire transient zeroize apres usage. Aucun element de votre cle ne quitte jamais l\'appareil, ne touche jamais iCloud, ne touche jamais un serveur que nous controlons.\n\nLe modele reseau gere les realites iOS : limites de background, changements reseau Wi-Fi/5G, restrictions App Refresh. Les sessions se reconnectent automatiquement au retour du reseau, le keep-alive SSH configurable (`ServerAliveInterval`) evite les deconnexions sur inactivite, et le client VPN NetworkExtension integre peut s\'auto-connecter avant l\'ouverture d\'une session SSH pour les flottes protegees.\n\nSur iPad avec Magic Keyboard, l\'experience est proche d\'un laptop — clavier physique avec Cmd, Ctrl, Esc qui marchent, panneaux terminal redimensionnables via NavigationSplitView, et Stage Manager garde SSHive a cote d\'un navigateur ou de Notes. Sur iPhone, la barre de modifiers a l\'ecran expose les touches qu\'un ecran tactile ne peut pas envoyer (Esc, Tab, Ctrl, Alt, fleches, pipe, slash, tilde) — `Ctrl+C`, `Ctrl+R`, naviguer dans `less`, scroller des logs, tout marche sans clavier externe.',
    },
  },
  /* ────────────────────────────────────────────────────────────────────
     2. /ios-sftp-app
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'ios-sftp-app',
    iconName: 'FolderOpen',
    metaTitle: {
      en: 'iOS SFTP App — Native iPhone & iPad File Transfer | SSHive',
      fr: 'App SFTP iOS — Transfert de fichiers iPhone et iPad natif | SSHive',
    },
    metaDescription: {
      en: 'Native SFTP client for iPhone and iPad. Remote file browser, built-in text editor, upload/download queue, Touch ID Keychain. Free up to 10 MB per file; Pro unlimited.',
      fr: 'Client SFTP natif pour iPhone et iPad. Explorateur de fichiers distants, editeur de texte integre, file de transferts, Trousseau Touch ID. Gratuit jusqu\'a 10 Mo par fichier ; Pro illimite.',
    },
    h1: {
      en: 'SFTP on iPhone and iPad — done right',
      fr: 'SFTP sur iPhone et iPad — bien fait',
    },
    hero: {
      en: 'Browse remote servers, edit configs in place, upload Files-app screenshots in one tap. Same SFTP engine as the Mac version, native on iOS.',
      fr: 'Naviguez sur des serveurs distants, editez les configs en place, uploadez des captures de Files en un tap. Meme moteur SFTP que la version Mac, natif sur iOS.',
    },
    intro: {
      en: 'Reading and writing files on a remote server from an iPhone is harder than it should be — most workflows end up with copy-paste through an SSH terminal, or a web-based file manager open in a tab. SSHive ships a real native SFTP client on iOS and iPadOS: a remote file browser, a transfer queue with real-time progress, a built-in text editor for in-place edits, and integration with the iOS Files app so you can drop something from iCloud Drive straight onto a server. Credentials and host keys live in the Keychain behind Face ID or Touch ID — same security model as the SSH terminal.\n\nFree covers 10 MB per file (enough for most configs, scripts and small assets), Pro unlocks unlimited transfer size and adds session logging and `.sshive` profile export/import. Universal Purchase: pay once for Pro on the App Store, use it across iPhone, iPad and Mac. No subscription, no data sent to us — and if you hit a use case the editor or browser does not cover well, tell us, we listen.',
      fr: 'Lire et ecrire des fichiers sur un serveur distant depuis un iPhone est plus penible que ca devrait — la plupart des workflows finissent en copier-coller dans un terminal SSH, ou avec un gestionnaire de fichiers web ouvert dans un onglet. SSHive embarque un vrai client SFTP natif sur iOS et iPadOS : un explorateur de fichiers distants, une file de transferts avec progression temps reel, un editeur de texte integre pour les edits sur place, et une integration avec l\'app Files iOS pour glisser un fichier d\'iCloud Drive directement sur un serveur. Les credentials et host keys sont dans le Trousseau derriere Face ID ou Touch ID — meme modele de securite que le terminal SSH.\n\nFree couvre 10 Mo par fichier (suffisant pour la plupart des configs, scripts et petits assets), Pro debloque la taille illimitee et ajoute le logging de session et l\'export/import `.sshive`. Universal Purchase : payez Pro une fois sur l\'App Store, utilisez sur iPhone, iPad et Mac. Pas d\'abonnement, pas de donnees envoyees vers nous — et si vous tombez sur un cas d\'usage que l\'editeur ou le browser ne couvrent pas bien, dites-le-nous, on ecoute.',
    },
    capabilities: [
      {
        title: { en: 'Remote file browser', fr: 'Explorateur de fichiers distants' },
        body: {
          en: 'Navigate any SFTP server like a Files folder. Tap a folder to descend, swipe-left for delete/rename/copy-path. Long-press a file for the share sheet — open in another iOS app, save to Files, AirDrop. Symlinks are followed transparently with their target shown.',
          fr: 'Naviguez n\'importe quel serveur SFTP comme un dossier Files. Tap pour descendre, swipe-gauche pour delete/rename/copy-path. Long-press sur un fichier pour la share sheet — ouvrir dans une autre app iOS, sauver dans Files, AirDrop. Les symlinks sont suivis avec leur cible affichee.',
        },
      },
      {
        title: { en: 'Built-in text editor', fr: 'Editeur de texte integre' },
        body: {
          en: 'Tap a `.conf`, `.yml`, `.json`, `.env` or any text file to open it in SSHive\'s editor. Syntax-highlighted, line numbers, find-and-replace, Tab/Shift+Tab indent. Save writes back over SFTP. Perfect for the 90% of remote edits that are "fix one line in nginx.conf and reload".',
          fr: 'Tap sur un `.conf`, `.yml`, `.json`, `.env` ou n\'importe quel fichier texte pour l\'ouvrir dans l\'editeur de SSHive. Coloration syntaxique, numeros de ligne, recherche-remplacement, Tab/Shift+Tab indent. Save reecrit via SFTP. Parfait pour les 90 % d\'edits distants qui sont "corriger une ligne dans nginx.conf et reload".',
        },
      },
      {
        title: { en: 'Upload from anywhere on iOS', fr: 'Upload depuis n\'importe ou sur iOS' },
        body: {
          en: 'SSHive is registered as a target in the iOS share sheet. From Photos, Files, Mail, Messages or any third-party app, share to SSHive and pick a destination folder on any saved SFTP profile. The transfer queue handles retries and shows progress for each file.',
          fr: 'SSHive est enregistre comme cible dans la share sheet iOS. Depuis Photos, Files, Mail, Messages ou n\'importe quelle app tierce, partagez vers SSHive et choisissez un dossier de destination sur n\'importe quel profil SFTP. La file de transferts gere les retries et montre la progression par fichier.',
        },
      },
      {
        title: { en: 'Download to Files', fr: 'Download vers Files' },
        body: {
          en: 'Download a remote file to the iOS Files app (On My iPhone or iCloud Drive) — including bulk selections. Once on iOS, AirDrop, share to another app, or open with any installed app. The download queue parallelizes 4 transfers by default for speed on high-latency links.',
          fr: 'Telechargez un fichier distant vers l\'app Files iOS (Sur mon iPhone ou iCloud Drive) — y compris des selections multiples. Une fois sur iOS, AirDrop, partagez vers une autre app, ou ouvrez avec n\'importe quelle app installee. La file de download parallelise 4 transferts par defaut pour la vitesse sur les liens a forte latence.',
        },
      },
      {
        title: { en: 'Copy remote path', fr: 'Copier le chemin distant' },
        body: {
          en: 'Long-press any file or folder to copy its absolute remote path to the iOS clipboard — useful when paired with the SSH terminal: paste straight into a `tail -f`, `nano`, `chmod 755` command. Works for files inside symlinked directories.',
          fr: 'Long-press sur n\'importe quel fichier ou dossier pour copier son chemin distant absolu dans le presse-papiers iOS — utile en paire avec le terminal SSH : collez directement dans une commande `tail -f`, `nano`, `chmod 755`. Marche pour les fichiers dans des repertoires symlinkes.',
        },
      },
      {
        title: { en: 'Profile sync with macOS', fr: 'Sync de profils avec macOS' },
        body: {
          en: 'Profiles created on macOS can be exported as `.sshive` JSON and imported on iOS, and vice versa. Note: credentials themselves are NOT in the export (they sit in the OS Keychain) — only host, port, username and tags. Pro feature.',
          fr: 'Les profils crees sur macOS peuvent etre exportes en JSON `.sshive` et importes sur iOS, et inversement. Note : les credentials ne sont PAS dans l\'export (ils sont dans le Trousseau OS) — uniquement host, port, username et tags. Feature Pro.',
        },
      },
    ],
    whyHeading: {
      en: 'Why SSHive for SFTP on iOS',
      fr: 'Pourquoi SSHive pour le SFTP sur iOS',
    },
    why: [
      {
        title: { en: 'iOS Files-app integration', fr: 'Integration Files iOS' },
        body: {
          en: 'SSHive uses the iOS share sheet both ways: anything from another iOS app can be sent into SSHive for upload, and any remote file can be exported back to Files / iCloud Drive / another app. Your remote files do not stay locked inside the app.',
          fr: 'SSHive utilise la share sheet iOS dans les deux sens : n\'importe quoi d\'une autre app iOS peut etre envoye dans SSHive pour upload, et n\'importe quel fichier distant peut etre exporte vers Files / iCloud Drive / une autre app. Vos fichiers distants ne restent pas bloques dans l\'app.',
        },
      },
      {
        title: { en: 'In-place text editor', fr: 'Editeur de texte sur place' },
        body: {
          en: 'For the most common remote workflow — "fix one line in a config and reload the service" — SSHive\'s built-in editor saves you from downloading the file, editing it, and re-uploading. Tap, edit, save. SFTP handles the round-trip.',
          fr: 'Pour le workflow distant le plus courant — "corriger une ligne dans une config et reload le service" — l\'editeur integre de SSHive evite le download, edit, reupload. Tap, editez, sauvegardez. SFTP gere l\'aller-retour.',
        },
      },
      {
        title: { en: 'Touch ID Keychain credentials', fr: 'Identifiants Trousseau Touch ID' },
        body: {
          en: 'SFTP and SSH share the same credential model — biometric-gated iOS Keychain, no iCloud sync of secrets, no telemetry. The same Ed25519 key that opens your SSH terminal is the one SFTP uses; no double configuration.',
          fr: 'SFTP et SSH partagent le meme modele de credentials — Trousseau iOS biometrie, pas de sync iCloud des secrets, pas de telemetrie. La meme cle Ed25519 qui ouvre votre terminal SSH est celle qu\'utilise SFTP ; pas de double config.',
        },
      },
    ],
    competitorsHeading: {
      en: 'How SSHive SFTP compares on iOS',
      fr: 'Comment SFTP SSHive se compare sur iOS',
    },
    competitors: [
      {
        name: 'Documents by Readdle',
        pitch: {
          en: 'A general-purpose file manager that happens to include SFTP. Great if SFTP is one tool among many you need (cloud drives, ZIP, downloads). For SFTP-as-main-use, SSHive\'s editor and per-profile keys tend to be handier.',
          fr: 'Un gestionnaire de fichiers polyvalent qui inclut le SFTP. Tres bien si le SFTP est un outil parmi d\'autres dont vous avez besoin (cloud drives, ZIP, downloads). Pour le SFTP comme usage principal, l\'editeur et les cles par profil de SSHive sont en general plus pratiques.',
        },
        pricing: { en: 'Free / Documents Pro paid', fr: 'Gratuit / Documents Pro payant' },
      },
      {
        name: 'FE File Explorer',
        pitch: {
          en: 'A veteran iOS file explorer with strong protocol coverage (SFTP, SMB, cloud). Reliable choice if you need one app that talks to many protocols.',
          fr: 'Un explorateur de fichiers iOS veteran avec une bonne couverture de protocoles (SFTP, SMB, cloud). Choix fiable si vous voulez une app qui parle a beaucoup de protocoles.',
        },
        pricing: { en: 'Free / Pro paid', fr: 'Gratuit / Pro payant' },
      },
      {
        name: 'Termius (SFTP)',
        pitch: {
          en: 'Termius bundles SFTP with its subscription tier. Polished execution; a great pick if you already pay for Termius for SSH and want SFTP in the same app.',
          fr: 'Termius inclut le SFTP dans son tier abonnement. Execution soignee ; bon choix si vous payez deja Termius pour le SSH et voulez le SFTP dans la meme app.',
        },
        pricing: { en: 'Subscription', fr: 'Abonnement' },
        compareSlug: 'termius',
      },
    ],
    faq: [
      {
        question: {
          en: 'What is the file size limit on the free tier?',
          fr: 'Quelle est la limite de taille par fichier en gratuit ?',
        },
        answer: {
          en: '10 MB per file in Free — enough for most configs, scripts and small assets. Pro removes the cap entirely; upload and download are limited only by your network and the remote disk.',
          fr: '10 Mo par fichier en gratuit — assez pour la plupart des configs, scripts et petits assets. Pro retire la limite ; upload et download sont limites uniquement par votre reseau et le disque distant.',
        },
      },
      {
        question: {
          en: 'Can I edit a remote nginx.conf from my iPhone?',
          fr: 'Puis-je editer un nginx.conf distant depuis mon iPhone ?',
        },
        answer: {
          en: 'Yes. Open the SFTP profile, tap nginx.conf, the built-in editor opens with syntax highlighting and line numbers. Edit, tap Save — SFTP writes back to the server. Open a parallel SSH session in the same SSHive window to `nginx -t && nginx -s reload`.',
          fr: 'Oui. Ouvrez le profil SFTP, tap sur nginx.conf, l\'editeur integre s\'ouvre avec coloration et numeros de ligne. Editez, tap Save — SFTP reecrit sur le serveur. Ouvrez une session SSH parallele dans la meme fenetre SSHive pour `nginx -t && nginx -s reload`.',
        },
      },
      {
        question: {
          en: 'Are downloads encrypted in transit?',
          fr: 'Les downloads sont-ils chiffres en transit ?',
        },
        answer: {
          en: 'Yes. SFTP is a sub-protocol of SSH — every byte goes through the SSH-encrypted tunnel. SSHive supports the modern SSH cipher suites: AES-256-GCM, chacha20-poly1305, with Ed25519 and ECDSA host-key verification.',
          fr: 'Oui. SFTP est un sous-protocole de SSH — chaque octet passe par le tunnel chiffre SSH. SSHive supporte les ciphers SSH modernes : AES-256-GCM, chacha20-poly1305, avec verification de host-key Ed25519 et ECDSA.',
        },
      },
      {
        question: {
          en: 'Does SSHive SFTP support drag-and-drop on iPad?',
          fr: 'SSHive SFTP supporte-t-il le drag-and-drop sur iPad ?',
        },
        answer: {
          en: 'Yes. With iPadOS 17+, you can drag files between Files, Finder (via Sidecar), Photos and SSHive\'s SFTP pane. Combined with split-view, this turns the iPad into a real workstation for SFTP work.',
          fr: 'Oui. Avec iPadOS 17+, vous pouvez glisser des fichiers entre Files, Finder (via Sidecar), Photos et le panneau SFTP de SSHive. Combine au split-view, ca transforme l\'iPad en vraie station de travail pour le SFTP.',
        },
      },
    ],
    deepDiveHeading: {
      en: 'Why iOS SFTP is harder than you think',
      fr: 'Pourquoi le SFTP iOS est plus dur qu\'il n\'y parait',
    },
    deepDive: {
      en: 'SFTP on iOS has two non-obvious challenges. First, the iOS sandbox: every app has its own private container, and the Files app sandbox is even stricter — you cannot just `open()` a file from another app the way you would on a desktop. SSHive uses the iOS document picker, the share sheet, and Universal Type Identifiers (UTIs) to bridge the gap, registering itself as a destination so other apps can hand off files for upload, and exporting downloads back through the share sheet or directly into Files.\n\nSecond, the network model: an SFTP transfer is a long-lived TCP connection to a remote SSH server, and iOS will suspend or kill background apps to save power. SSHive uses `URLSession`-backed background transfers for large files (so a 200 MB download survives the user switching apps), and breaks the SFTP transfer queue into 4 parallel streams to maximize throughput on cellular and high-latency links — the same chunked-parallel pattern the macOS version uses.\n\nThe credential model deserves attention too. The remote SSH server might require a password, a private key, a passphrase-protected private key, or a jump host that adds another credential. SSHive\'s SFTP reuses the SSH profile\'s credentials directly — one profile, one set of credentials, used for both terminal and SFTP. The Keychain entry has `kSecAttrAccessibleWhenUnlockedThisDeviceOnly`, meaning if your iPhone is locked, the credentials are inaccessible even to SSHive itself; once unlocked with Face ID / Touch ID, they become available to the running session. This balances usability with the security expectation that secrets cannot be exfiltrated by a thief who steals the phone.',
      fr: 'Le SFTP sur iOS a deux defis non-evidents. D\'abord, la sandbox iOS : chaque app a son conteneur prive, et la sandbox de l\'app Files est encore plus stricte — on ne peut pas juste `open()` un fichier d\'une autre app comme sur desktop. SSHive utilise le document picker iOS, la share sheet et les Universal Type Identifiers (UTIs) pour combler le gap, s\'enregistrant comme destination pour qu\'autres apps puissent envoyer des fichiers a l\'upload, et exportant les downloads via la share sheet ou directement dans Files.\n\nEnsuite, le modele reseau : un transfert SFTP est une connexion TCP longue duree vers un serveur SSH distant, et iOS va suspendre ou tuer les apps en arriere-plan pour economiser de la batterie. SSHive utilise des transferts en arriere-plan via `URLSession` pour les gros fichiers (un download 200 Mo survit a un switch d\'app), et casse la file de transferts SFTP en 4 streams paralleles pour maximiser le debit sur cellulaire et liens haute-latence — le meme pattern chunked-parallele que la version macOS.\n\nLe modele de credentials merite aussi attention. Le serveur SSH distant peut exiger un mot de passe, une cle privee, une cle privee passphrase, ou un jump host avec credential supplementaire. Le SFTP de SSHive reutilise les credentials du profil SSH directement — un profil, un set de credentials, utilise pour le terminal et le SFTP. L\'entree Trousseau a `kSecAttrAccessibleWhenUnlockedThisDeviceOnly`, donc si votre iPhone est verrouille, les credentials sont inaccessibles meme a SSHive ; une fois deverrouille en Face ID / Touch ID, ils deviennent disponibles a la session. Equilibre entre usabilite et l\'attente securite que les secrets ne peuvent pas etre exfiltres par un voleur du telephone.',
    },
  },
  /* ────────────────────────────────────────────────────────────────────
     3. /iphone-remote-desktop — RDP iOS
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'iphone-remote-desktop',
    iconName: 'Monitor',
    metaTitle: {
      en: 'iPhone Remote Desktop — RDP for iPhone & iPad | SSHive',
      fr: 'Bureau a distance iPhone — RDP pour iPhone et iPad | SSHive',
    },
    metaDescription: {
      en: 'Native RDP client on iPhone and iPad. FreeRDP 3 with TLS 1.3, NLA, NTLMv2 and Active Directory. Works with Windows Server 2016 to 2025 and Windows 10/11 Pro.',
      fr: 'Client RDP natif sur iPhone et iPad. FreeRDP 3 avec TLS 1.3, NLA, NTLMv2 et Active Directory. Compatible Windows Server 2016 a 2025 et Windows 10/11 Pro.',
    },
    h1: {
      en: 'Windows Remote Desktop on iPhone and iPad',
      fr: 'Bureau a distance Windows sur iPhone et iPad',
    },
    hero: {
      en: 'A real RDP client built on FreeRDP 3 — NLA, Active Directory, NTLMv2, TLS 1.3. A better Microsoft Remote Desktop alternative on iOS.',
      fr: 'Un vrai client RDP base sur FreeRDP 3 — NLA, Active Directory, NTLMv2, TLS 1.3. Une meilleure alternative a Microsoft Remote Desktop sur iOS.',
    },
    intro: {
      en: 'Microsoft Remote Desktop on iOS is the obvious starting point — it is free, official, and gets the basics done. SSHive takes a different angle: bundle a real RDP client into the same app as your SSH terminal, SFTP, VNC and VPN, so you do not need to switch apps to do a full ops task. The RDP engine is FreeRDP 3, the same modern codebase used in many Linux RDP front-ends, with TLS 1.3, CredSSP, NLA and NTLMv2 — connecting to Windows Server 2016, 2019, 2022, 2025 and Windows 10/11 Pro/Enterprise out of the box. NLA can be disabled per profile for legacy boxes, NetBIOS and FQDN domains are both accepted in a dedicated Domain field separate from the username, and Ctrl+Alt+Del has its own button in the RDP toolbar.\n\nFree includes 2 concurrent RDP sessions; Pro removes the cap. The session survives device rotation on iPhone Pro Max (landscape works well), and the integrated VPN client (IKEv2 / IPSec / OpenVPN) can auto-connect before RDP for protected fleets — no need to juggle a separate VPN app. No subscription, no data sent to us. If a corner of the RDP UX could be smoother for your workflow, we are listening.',
      fr: 'Microsoft Remote Desktop sur iOS est le point de depart evident — gratuit, officiel, et fait les bases. SSHive prend un angle different : embarquer un vrai client RDP dans la meme app que votre terminal SSH, SFTP, VNC et VPN, pour ne pas avoir a changer d\'app pour faire une tache ops complete. Le moteur RDP est FreeRDP 3, le meme codebase moderne utilise dans beaucoup de front-ends RDP Linux, avec TLS 1.3, CredSSP, NLA et NTLMv2 — se connecte a Windows Server 2016, 2019, 2022, 2025 et Windows 10/11 Pro/Enterprise sans config. NLA peut etre desactive par profil pour les boxes legacy, NetBIOS et FQDN tous deux acceptes dans un champ Domaine separe du username, et Ctrl+Alt+Suppr a son bouton dedie dans la barre RDP.\n\nFree inclut 2 sessions RDP simultanees ; Pro retire la limite. La session survit a la rotation sur iPhone Pro Max (landscape marche bien), et le client VPN integre (IKEv2 / IPSec / OpenVPN) peut s\'auto-connecter avant le RDP pour les flottes protegees — pas besoin de jongler avec une app VPN separee. Pas d\'abonnement, pas de donnees envoyees vers nous. Si un coin de l\'UX RDP pourrait etre plus fluide pour votre workflow, on ecoute.',
    },
    capabilities: [
      {
        title: { en: 'FreeRDP 3 engine', fr: 'Moteur FreeRDP 3' },
        body: {
          en: 'The FreeRDP 3 series is the latest generation of the open-source RDP stack, with TLS 1.3, CredSSP, NLA and NTLMv2 supported out of the box. It is the same engine widely deployed on Linux desktops and embedded in third-party tools. SSHive bundles it natively into iOS without any cloud relay or proxy — your RDP traffic goes directly from your iPhone to the Windows server.',
          fr: 'La serie FreeRDP 3 est la derniere generation du stack RDP open source, avec TLS 1.3, CredSSP, NLA et NTLMv2 supportes sans config. C\'est le meme moteur largement deploye sur les bureaux Linux et embarque dans des outils tiers. SSHive le bundle nativement dans iOS sans relais cloud ni proxy — votre trafic RDP va directement de votre iPhone au serveur Windows.',
        },
      },
      {
        title: { en: 'Active Directory done right', fr: 'Active Directory bien gere' },
        body: {
          en: 'Domain field is separate from username. Accept both NetBIOS (`CORP`) and FQDN (`corp.example.com`) formats. NLA + NTLMv2 are negotiated by default for modern AD environments. For old DCs you can disable NLA per-profile.',
          fr: 'Champ domaine separe du username. NetBIOS (`CORP`) et FQDN (`corp.example.com`) acceptes. NLA + NTLMv2 negocies par defaut pour les environnements AD modernes. Pour les vieux DCs, desactivable par profil.',
        },
      },
      {
        title: { en: 'Configurable resolution', fr: 'Resolution configurable' },
        body: {
          en: 'Default is 1920×1080 with adaptive scaling for the iPhone or iPad screen. You can override per profile to match exactly the server\'s expected resolution (helpful when you connect from a small iPhone and want the remote display to render at native iPad-size on the server side).',
          fr: 'Defaut a 1920×1080 avec scaling adaptatif pour l\'ecran iPhone ou iPad. Surchargeable par profil pour matcher exactement la resolution attendue par le serveur (utile quand on connecte depuis un petit iPhone et qu\'on veut que l\'ecran distant rende en taille iPad cote serveur).',
        },
      },
      {
        title: { en: 'Mouse, keyboard, Ctrl+Alt+Del', fr: 'Souris, clavier, Ctrl+Alt+Suppr' },
        body: {
          en: 'Tap as left-click, long-press as right-click, two-finger tap as middle-click. With a Magic Keyboard on iPad, all modifier keys work. A dedicated "Send Ctrl+Alt+Del" button is in the RDP toolbar — useful for unlocking a locked Windows session.',
          fr: 'Tap = clic gauche, long-press = clic droit, tap deux doigts = clic du milieu. Avec un Magic Keyboard sur iPad, toutes les touches modifier marchent. Un bouton dedie "Envoyer Ctrl+Alt+Suppr" dans la barre RDP — utile pour deverrouiller une session Windows verrouillee.',
        },
      },
      {
        title: { en: 'iPhone Pro Max landscape', fr: 'iPhone Pro Max en landscape' },
        body: {
          en: 'Sessions survive rotation. On iPhone Pro Max in landscape, the Windows desktop renders at high enough resolution to actually be usable — you can open Server Manager, click around, type in a console window. Not a substitute for a laptop, but enough for a quick admin task on the move.',
          fr: 'Les sessions survivent a la rotation. Sur iPhone Pro Max en landscape, le bureau Windows rend a une resolution suffisante pour etre utilisable — vous pouvez ouvrir Server Manager, cliquer, taper dans une console. Pas un substitut au laptop, mais assez pour une tache admin rapide en deplacement.',
        },
      },
      {
        title: { en: 'Built-in VPN auto-connect', fr: 'Auto-connect VPN integre' },
        body: {
          en: 'Toggle "Auto-connect VPN before SSH/RDP" on a profile and SSHive activates the configured VPN (IKEv2 / IPSec / OpenVPN) before launching the RDP session. No more remembering to open the VPN app first and then switch back. Uses Apple NetworkExtension / Packet Tunnel Provider — system-level, not a sock proxy hack.',
          fr: 'Activez "Auto-connect VPN avant SSH/RDP" sur un profil et SSHive active le VPN configure (IKEv2 / IPSec / OpenVPN) avant de lancer la session RDP. Plus besoin de penser a ouvrir l\'app VPN d\'abord et de revenir. Utilise Apple NetworkExtension / Packet Tunnel Provider — niveau systeme, pas un hack sock proxy.',
        },
      },
    ],
    whyHeading: {
      en: 'Why use SSHive over Microsoft Remote Desktop',
      fr: 'Pourquoi SSHive plutot que Microsoft Remote Desktop',
    },
    why: [
      {
        title: { en: 'Active Directory the way Windows does it', fr: 'Active Directory comme sur Windows' },
        body: {
          en: 'A dedicated Domain field, separate from the username, accepting both NetBIOS (`CORP`) and FQDN (`corp.example.com`). NLA + NTLMv2 are negotiated by default. Same input model that AD admins already use on Windows itself, no `DOMAIN\\username` packing required.',
          fr: 'Un champ Domaine dedie, separe du username, qui accepte NetBIOS (`CORP`) et FQDN (`corp.example.com`). NLA + NTLMv2 negocies par defaut. Meme modele d\'entree que les admins AD utilisent deja sur Windows, pas besoin d\'empaqueter `DOMAIN\\username`.',
        },
      },
      {
        title: { en: 'RDP + SSH + SFTP in one app', fr: 'RDP + SSH + SFTP dans une app' },
        body: {
          en: 'On Microsoft Remote Desktop you RDP. To get SSH or SFTP next to it, you switch to another app and lose your VPN context. SSHive keeps RDP, SSH, SFTP, VNC and VPN in one window — exactly what an oncall engineer needs at 2am.',
          fr: 'Sur Microsoft Remote Desktop vous faites du RDP. Pour avoir SSH ou SFTP a cote, vous passez a une autre app et perdez le contexte VPN. SSHive garde RDP, SSH, SFTP, VNC et VPN dans une fenetre — exactement ce qu\'il faut a un on-call a 2h du matin.',
        },
      },
      {
        title: { en: 'Per-profile credentials in Keychain', fr: 'Credentials par profil dans le Trousseau' },
        body: {
          en: 'Each RDP profile has its own credentials in the iOS Keychain, biometric-gated. Microsoft Remote Desktop saves credentials but doesn\'t per-profile gate them as cleanly. SSHive\'s Keychain entries are flagged `kSecAttrAccessibleWhenUnlockedThisDeviceOnly` — they are inaccessible if the phone is locked and not synced to iCloud.',
          fr: 'Chaque profil RDP a ses propres credentials dans le Trousseau iOS, biometrie. Microsoft Remote Desktop sauvegarde les credentials mais ne les biometrie pas par profil aussi proprement. Les entrees Trousseau de SSHive sont flagees `kSecAttrAccessibleWhenUnlockedThisDeviceOnly` — inaccessibles si le telephone est verrouille et pas synchronisees sur iCloud.',
        },
      },
    ],
    competitorsHeading: {
      en: 'Other RDP clients on iOS',
      fr: 'Autres clients RDP sur iOS',
    },
    competitors: [
      {
        name: 'Microsoft Remote Desktop',
        pitch: {
          en: 'The official, free Microsoft client. The right starting point if all you need is RDP to a single Windows VM and you do not need SSH/SFTP next to it.',
          fr: 'Le client officiel Microsoft, gratuit. Le bon point de depart si vous avez juste besoin de RDP vers une VM Windows et pas de SSH/SFTP a cote.',
        },
        pricing: { en: 'Free', fr: 'Gratuit' },
      },
      {
        name: 'Jump Desktop',
        pitch: {
          en: 'A polished RDP and VNC client for iOS with cross-platform sync via Jump Desktop Connect.io. Strong UI — a solid choice if cross-device sync is the deciding factor.',
          fr: 'Client RDP et VNC iOS soigne avec sync cross-platform via Jump Desktop Connect.io. UI forte — bon choix si la sync entre appareils est decisive pour vous.',
        },
        pricing: { en: 'One-time + Connect.io subscription', fr: 'Achat unique + abonnement Connect.io' },
      },
      {
        name: 'Remotix',
        pitch: {
          en: 'Multi-protocol remote desktop (RDP, VNC) with NEAR-screen acceleration. Built around team and enterprise rollouts.',
          fr: 'Bureau a distance multi-protocole (RDP, VNC) avec acceleration NEAR-screen. Construit pour les deploiements equipe et entreprise.',
        },
        pricing: { en: 'Subscription', fr: 'Abonnement' },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does SSHive RDP on iPhone support Windows Server 2025?',
          fr: 'SSHive RDP sur iPhone supporte-t-il Windows Server 2025 ?',
        },
        answer: {
          en: 'Yes. FreeRDP 3 targets the current Microsoft RDP wire protocol with TLS 1.3 and CredSSP/NLA. Windows Server 2016, 2019, 2022 and 2025 work out of the box; Windows 10 and 11 Pro/Enterprise are also supported.',
          fr: 'Oui. FreeRDP 3 cible le protocole RDP Microsoft actuel avec TLS 1.3 et CredSSP/NLA. Windows Server 2016, 2019, 2022 et 2025 sans config ; Windows 10 et 11 Pro/Enterprise aussi supportes.',
        },
      },
      {
        question: {
          en: 'Can I RDP through a corporate VPN from my iPhone?',
          fr: 'Puis-je faire du RDP via un VPN d\'entreprise depuis iPhone ?',
        },
        answer: {
          en: 'Yes. Configure your VPN (IKEv2, IPSec/Xauth or OpenVPN) inside SSHive, enable "Auto-connect VPN before SSH/RDP" on the RDP profile, and SSHive activates the VPN via Apple NetworkExtension before opening the RDP session. Tailscale and WireGuard (running as separate system VPN apps) also work transparently.',
          fr: 'Oui. Configurez votre VPN (IKEv2, IPSec/Xauth ou OpenVPN) dans SSHive, activez "Auto-connect VPN avant SSH/RDP" sur le profil RDP, et SSHive active le VPN via Apple NetworkExtension avant d\'ouvrir la session RDP. Tailscale et WireGuard (en tant qu\'apps VPN systeme separees) marchent aussi de facon transparente.',
        },
      },
      {
        question: {
          en: 'Can I disable NLA for legacy Windows servers?',
          fr: 'Puis-je desactiver NLA pour des serveurs Windows legacy ?',
        },
        answer: {
          en: 'Yes — there is a per-profile checkbox to disable NLA. Useful for old Windows Server 2008 R2 boxes or misconfigured environments. Default is NLA enabled, which is what modern systems expect.',
          fr: 'Oui — case par profil pour desactiver NLA. Utile pour les vieux Windows Server 2008 R2 ou environnements mal configures. Par defaut NLA est active, ce que les systemes modernes attendent.',
        },
      },
      {
        question: {
          en: 'How is the keyboard handled on iPhone for Windows shortcuts?',
          fr: 'Comment le clavier est gere sur iPhone pour les raccourcis Windows ?',
        },
        answer: {
          en: 'A toolbar exposes the keys touch screens cannot send (Win, Alt, Ctrl, Esc, F1-F12, arrows). A dedicated Ctrl+Alt+Del button is always visible. With a Magic Keyboard on iPad, the full keyboard works including Windows key (mapped to Mac Command by default, flippable per profile).',
          fr: 'Une barre expose les touches que les ecrans tactiles ne peuvent pas envoyer (Win, Alt, Ctrl, Esc, F1-F12, fleches). Un bouton dedie Ctrl+Alt+Suppr toujours visible. Avec un Magic Keyboard sur iPad, le clavier complet marche y compris la touche Windows (mappee a Cmd Mac par defaut, inversable par profil).',
        },
      },
    ],
    deepDiveHeading: {
      en: 'RDP on iPhone — what is actually possible',
      fr: 'RDP sur iPhone — ce qui est vraiment possible',
    },
    deepDive: {
      en: 'iOS RDP has historically meant "occasional rescue tool" — a way to reach a Windows server for ten minutes and then go back to a real computer. With iPhone Pro Max screens, iPad Pro M-series, and Magic Keyboards, that ceiling has moved. SSHive\'s RDP runs FreeRDP 3 native (no Electron, no JavaScript wrapper), so even a fairly busy Server Manager or SQL Server Management Studio session is responsive on cellular if the server\'s network is fast.\n\nIn practice the workflow that benefits most is incident response. An alert page hits your phone — you open SSHive on iPhone, the saved RDP profile auto-connects the VPN, then opens the Windows VM. You type in the Event Viewer, check a service, run a PowerShell command. Twenty minutes later you are back to your laptop. Without SSHive that workflow needed: a separate VPN app, a separate RDP client, manually entered AD credentials in each, and SSH in yet another app if the alert came from a Linux-fronted load balancer.\n\nSecurity is the same model as the rest of SSHive: per-profile RDP credentials live in the iOS Keychain with `BiometryCurrentSet`, FreeRDP runs in-app without a relay, the VPN client uses Apple\'s NetworkExtension framework (system-level, not a sock proxy hack), and no telemetry runs. The RDP wire protocol itself uses TLS 1.3 + CredSSP, so even if your hotel Wi-Fi is hostile, the session is protected from passive sniffers.\n\nLimitations to be honest about: iPhone screens are small for RDP work; iOS background restrictions can suspend long-running sessions if the device sleeps; clipboard sync between iOS and Windows is more constrained than on a desktop. SSHive does its best with these (auto-reconnect on resume, large-target tap zones in the RDP toolbar), but RDP on iPhone is a complement to a laptop, not a replacement. RDP on iPad Pro with Magic Keyboard is much closer to a real Windows workstation.',
      fr: 'Le RDP iOS a historiquement voulu dire "outil de depannage occasionnel" — un moyen d\'atteindre un serveur Windows dix minutes puis de revenir a un vrai ordinateur. Avec les iPhone Pro Max, iPad Pro M-series et Magic Keyboards, le plafond a bouge. Le RDP de SSHive tourne FreeRDP 3 natif (pas d\'Electron, pas de wrapper JavaScript), donc meme un Server Manager ou SQL Server Management Studio bien charge reste reactif en cellulaire si le reseau serveur est rapide.\n\nEn pratique le workflow qui en beneficie le plus est la reponse a incident. Une alerte page votre telephone — vous ouvrez SSHive sur iPhone, le profil RDP sauvegarde auto-connecte le VPN, puis ouvre la VM Windows. Vous tapez dans Event Viewer, verifiez un service, lancez une commande PowerShell. Vingt minutes plus tard vous etes de retour au laptop. Sans SSHive ce workflow exigeait : une app VPN separee, un client RDP separe, des credentials AD manuellement entres dans chacun, et SSH dans encore une autre app si l\'alerte venait d\'un load balancer Linux.\n\nLa securite suit le meme modele que le reste de SSHive : les credentials RDP par profil dans le Trousseau iOS avec `BiometryCurrentSet`, FreeRDP tourne in-app sans relais, le client VPN utilise NetworkExtension d\'Apple (niveau systeme, pas un hack sock proxy), et aucune telemetrie. Le protocole RDP lui-meme utilise TLS 1.3 + CredSSP, donc meme si le Wi-Fi de l\'hotel est hostile, la session est protegee des sniffers passifs.\n\nLimitations a etre honnete : les ecrans iPhone sont petits pour du travail RDP ; les restrictions de background iOS peuvent suspendre les sessions longues si l\'appareil dort ; la sync presse-papiers entre iOS et Windows est plus contrainte que sur desktop. SSHive fait au mieux (auto-reconnect au reveil, grandes zones de tap dans la barre RDP), mais le RDP sur iPhone reste un complement au laptop, pas un remplacement. Le RDP sur iPad Pro avec Magic Keyboard est beaucoup plus proche d\'une vraie station Windows.',
    },
  },
  /* ────────────────────────────────────────────────────────────────────
     4. /iphone-vnc-client — VNC iOS
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'iphone-vnc-client',
    iconName: 'Eye',
    metaTitle: {
      en: 'iPhone VNC Viewer — Native VNC Client for iOS | SSHive',
      fr: 'Viewer VNC iPhone — Client VNC natif pour iOS | SSHive',
    },
    metaDescription: {
      en: 'Native VNC viewer on iPhone and iPad — RoyalVNC engine with TLS, ARD and RFB. Built-in VNC keyboard, tap-to-click, pinch-to-zoom. Works over SSH tunnels.',
      fr: 'Viewer VNC natif sur iPhone et iPad — moteur RoyalVNC avec TLS, ARD et RFB. Clavier VNC integre, tap-to-click, pinch-to-zoom. Marche via tunnels SSH.',
    },
    h1: {
      en: 'VNC for iPhone and iPad — connect to any platform',
      fr: 'VNC pour iPhone et iPad — connectez-vous a n\'importe quelle plateforme',
    },
    hero: {
      en: 'Linux desktops, Raspberry Pi, headless Macs, ESXi consoles. Native gestures, TLS encryption, ARD support — and tunnelable over SSH in two clicks.',
      fr: 'Bureaux Linux, Raspberry Pi, Macs headless, consoles ESXi. Gestes natifs, chiffrement TLS, support ARD — et tunnelable via SSH en deux clics.',
    },
    intro: {
      en: 'VNC on iOS has always been the trickier case — Apple Screen Sharing does not exist on iPhone, and many third-party iOS VNC apps focus on plain RFB without TLS, ARD support or saved profiles. SSHive ships RoyalVNC under the hood (the same engine used by Royal TSX on Mac), which supports the full VNC protocol family: ARD authentication for Mac-to-Mac, VeNCrypt + TLS for encrypted RFB, and bare RFB for legacy servers — wrapped in an SSH tunnel from SSHive\'s own Tunnels UI when you need encryption the VNC server itself does not offer.\n\nThe UI is built for touch: tap as left-click, two-finger tap as right-click, pinch to zoom, two-finger pan, and a VNC-specific on-screen keyboard that exposes the function keys, modifiers and arrow keys a phone keyboard does not. Free includes 2 concurrent VNC sessions; Pro removes the cap. Universal Purchase with macOS and iPad. No subscription, no data sent to us — if a server you connect to misbehaves, tell us, we will look into it.',
      fr: 'Le VNC sur iOS a toujours ete le cas le plus delicat — Apple Screen Sharing n\'existe pas sur iPhone, et beaucoup d\'apps VNC iOS tierces se concentrent sur le RFB plain sans TLS, sans support ARD, sans profils sauvegardes. SSHive embarque RoyalVNC sous le capot (le meme moteur utilise par Royal TSX sur Mac), qui supporte toute la famille VNC : auth ARD pour Mac-vers-Mac, VeNCrypt + TLS pour RFB chiffre, et RFB nu pour serveurs legacy — enveloppe dans un tunnel SSH via l\'UI Tunnels de SSHive quand vous avez besoin d\'un chiffrement que le serveur VNC lui-meme n\'offre pas.\n\nL\'UI est concue pour le tactile : tap = clic gauche, tap deux doigts = clic droit, pinch pour zoomer, pan deux doigts, et un clavier VNC a l\'ecran specifique qui expose touches de fonction, modifiers et fleches qu\'un clavier de telephone n\'a pas. Free inclut 2 sessions VNC simultanees ; Pro retire la limite. Universal Purchase avec macOS et iPad. Pas d\'abonnement, pas de donnees envoyees vers nous — si un serveur auquel vous vous connectez fait des siennes, dites-le-nous, on regardera.',
    },
    capabilities: [
      {
        title: { en: 'RoyalVNC engine on iOS', fr: 'Moteur RoyalVNC sur iOS' },
        body: {
          en: 'The same VNC engine as Royal TSX, ported to iOS and iPadOS. Full TLS / VeNCrypt, ARD authentication and standard RFB. Connects to RealVNC servers, TigerVNC, libvncserver, X11 vncserver, Apple Screen Sharing — basically any sane VNC server.',
          fr: 'Le meme moteur VNC que Royal TSX, porte sur iOS et iPadOS. TLS / VeNCrypt complet, auth ARD et RFB standard. Se connecte aux serveurs RealVNC, TigerVNC, libvncserver, X11 vncserver, Partage d\'ecran Apple — basiquement n\'importe quel serveur VNC raisonnable.',
        },
      },
      {
        title: { en: 'Native tap / pan / pinch gestures', fr: 'Gestes tap / pan / pinch natifs' },
        body: {
          en: 'Tap = left click, long-press = right click, two-finger tap = middle click. Pinch to zoom, two-finger pan to scroll across a large desktop. Three-finger tap toggles the VNC keyboard overlay. The gesture model is consistent with the rest of iOS — no app-specific muscle memory to relearn.',
          fr: 'Tap = clic gauche, long-press = clic droit, tap deux doigts = clic du milieu. Pinch pour zoomer, pan deux doigts pour scroller un grand bureau. Tap trois doigts pour afficher/masquer le clavier VNC. Le modele de gestes est coherent avec le reste d\'iOS — pas de memoire musculaire propre a l\'app a reapprendre.',
        },
      },
      {
        title: { en: 'Integrated VNC keyboard', fr: 'Clavier VNC integre' },
        body: {
          en: 'A dedicated on-screen keyboard exposes the keys a soft iOS keyboard cannot send: F1-F12, Esc, Tab, Ctrl, Alt, arrow keys, Print Screen, Insert. Combined with native iPhone/iPad text entry, you can use almost any Linux/macOS desktop without a hardware keyboard.',
          fr: 'Un clavier dedie a l\'ecran expose les touches qu\'un clavier soft iOS ne peut pas envoyer : F1-F12, Esc, Tab, Ctrl, Alt, fleches, Impr ecran, Inser. Combine a la saisie texte native iPhone/iPad, vous pouvez utiliser presque n\'importe quel bureau Linux/macOS sans clavier hardware.',
        },
      },
      {
        title: { en: 'TLS / VeNCrypt + SSH tunneling', fr: 'TLS / VeNCrypt + tunneling SSH' },
        body: {
          en: 'When the VNC server supports VeNCrypt or TLS, SSHive negotiates it. When it does not (plain RFB), use SSHive\'s Tunnels UI to wrap the VNC connection in an SSH tunnel — same SSHive window, two clicks. End-to-end encrypted even if the VNC server is plaintext.',
          fr: 'Quand le serveur VNC supporte VeNCrypt ou TLS, SSHive le negocie. Quand il ne le supporte pas (RFB plain), utilisez l\'UI Tunnels de SSHive pour envelopper la connexion VNC dans un tunnel SSH — meme fenetre SSHive, deux clics. Chiffrement bout-en-bout meme si le serveur VNC est en clair.',
        },
      },
    ],
    whyHeading: {
      en: 'Why SSHive for VNC on iPhone and iPad',
      fr: 'Pourquoi SSHive pour le VNC sur iPhone et iPad',
    },
    why: [
      {
        title: { en: 'One purchase, every Apple device', fr: 'Un achat, tous les appareils Apple' },
        body: {
          en: 'SSHive Pro is a single $9.99 one-time Universal Purchase covering iPhone, iPad and Mac with lifetime updates. No subscription, no data sent to us, yours for life.',
          fr: 'SSHive Pro est un achat unique Universal Purchase a 9,99 € qui couvre iPhone, iPad et Mac avec mises a jour a vie. Pas d\'abonnement, pas de donnees envoyees vers nous, a vous pour la vie.',
        },
      },
      {
        title: { en: 'VNC + SSH + RDP in one app', fr: 'VNC + SSH + RDP dans une app' },
        body: {
          en: 'Most ops scenarios need VNC plus something else — an SSH terminal to start the VNC server, an SFTP browse to inspect a config, an RDP to a Windows VM on the same network. SSHive bundles them all, with shared profiles and credentials.',
          fr: 'La plupart des scenarios ops ont besoin de VNC plus autre chose — un terminal SSH pour demarrer le serveur VNC, un SFTP pour inspecter une config, un RDP vers une VM Windows sur le meme reseau. SSHive bundle tout, avec profils et credentials partages.',
        },
      },
      {
        title: { en: 'Credentials in iOS Keychain', fr: 'Credentials dans le Trousseau iOS' },
        body: {
          en: 'VNC passwords (and the ARD username when needed) live in the iOS Keychain with biometric `SecAccessControl`, no iCloud sync of secrets. Same model as SSH and SFTP.',
          fr: 'Les mots de passe VNC (et le username ARD si besoin) sont dans le Trousseau iOS avec `SecAccessControl` biometrique, pas de sync iCloud des secrets. Meme modele que SSH et SFTP.',
        },
      },
    ],
    competitorsHeading: {
      en: 'Other VNC clients on iOS',
      fr: 'Autres clients VNC sur iOS',
    },
    competitors: [
      {
        name: 'RealVNC Viewer',
        pitch: {
          en: 'The reference VNC viewer. Solid encryption, multi-platform sync via RealVNC Connect. Best if you also pay for RealVNC Connect on the server.',
          fr: 'Le viewer VNC de reference. Chiffrement solide, sync multi-plateforme via RealVNC Connect. Meilleur si vous payez aussi RealVNC Connect sur le serveur.',
        },
        pricing: { en: 'Free / paid Connect', fr: 'Gratuit / Connect payant' },
      },
      {
        name: 'Jump Desktop',
        pitch: {
          en: 'A polished RDP and VNC client with cross-platform sync via Connect.io. Strong UI; subscription on the Connect.io variant.',
          fr: 'Client RDP et VNC soigne avec sync cross-platform via Connect.io. UI forte ; abonnement sur la variante Connect.io.',
        },
        pricing: { en: 'One-time + Connect.io subscription', fr: 'Achat unique + abonnement Connect.io' },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does SSHive on iOS support Apple Remote Desktop (ARD)?',
          fr: 'SSHive sur iOS supporte-t-il Apple Remote Desktop (ARD) ?',
        },
        answer: {
          en: 'Yes. ARD is one of RoyalVNC\'s supported authentication modes. Connecting to a Mac with Screen Sharing enabled works without extra setup, including with the ARD username and password.',
          fr: 'Oui. ARD est un des modes d\'auth supportes par RoyalVNC. Se connecter a un Mac avec Partage d\'ecran active fonctionne sans config supplementaire, y compris avec le username et password ARD.',
        },
      },
      {
        question: {
          en: 'Can I VNC into a headless Raspberry Pi from my iPhone?',
          fr: 'Puis-je faire du VNC sur un Raspberry Pi headless depuis iPhone ?',
        },
        answer: {
          en: 'Yes — that is one of the most common use cases. Run RealVNC or x11vnc on the Pi, save the VNC profile in SSHive on iPhone, connect over the LAN or via your home VPN. If the Pi is behind a bastion, use SSHive\'s SSH tunnel feature to forward the VNC port to 127.0.0.1.',
          fr: 'Oui — c\'est un des cas d\'usage les plus courants. Lancez RealVNC ou x11vnc sur le Pi, sauvegardez le profil VNC dans SSHive sur iPhone, connectez via le LAN ou un VPN domestique. Si le Pi est derriere un bastion, utilisez la feature tunnel SSH de SSHive pour forwarder le port VNC sur 127.0.0.1.',
        },
      },
      {
        question: {
          en: 'Is the VNC connection encrypted?',
          fr: 'La connexion VNC est-elle chiffree ?',
        },
        answer: {
          en: 'When the server supports VeNCrypt / TLS, yes — SSHive negotiates it. For plain-RFB servers, use SSHive\'s Tunnels UI to wrap the connection in SSH (two clicks), then point the VNC profile at 127.0.0.1. End-to-end encrypted even if the VNC server is plaintext on the wire.',
          fr: 'Si le serveur supporte VeNCrypt / TLS, oui — SSHive le negocie. Pour les serveurs RFB plain, utilisez l\'UI Tunnels de SSHive pour envelopper la connexion en SSH (deux clics), puis pointez le profil VNC sur 127.0.0.1. Chiffrement bout-en-bout meme si le serveur VNC est en clair sur le fil.',
        },
      },
    ],
    deepDiveHeading: {
      en: 'VNC on iOS — protocol notes',
      fr: 'VNC sur iOS — notes sur le protocole',
    },
    deepDive: {
      en: 'VNC is really three protocols in a trench coat: ARD (Apple\'s extension for macOS Screen Sharing, with its own auth handshake and pixel formats), VeNCrypt-secured RFB (TLS + classic VNC auth), and plain RFB (no encryption, just a password challenge). Most "VNC client" iOS apps speak only one or two; SSHive\'s RoyalVNC speaks all three and negotiates the best the server offers.\n\nThis matters in practice because a real fleet is heterogeneous. A typical ops mix is: one Mac mini running headless with Screen Sharing (ARD), three Ubuntu desktops with TigerVNC (VeNCrypt or plain depending on config), an ESXi console (RealVNC variant with strict TLS), a Raspberry Pi with x11vnc (plain RFB). Without a multi-protocol client, you would need three different iPhone apps to cover them all.\n\nThe gesture model deserves note. VNC clients on touch screens have historically been clumsy because mouse-centric desktops were not designed for fingers. SSHive\'s approach is to keep the gestures iOS-standard (tap = primary action, two-finger tap = secondary action, pinch to zoom) and add a VNC-specific overlay only for the keyboard. Combined with the pinch-to-zoom on a high-DPI iPhone Pro Max, you can comfortably interact with a 1080p Linux desktop without panning constantly — the iOS gesture is more ergonomic than a tiny soft mouse pointer.\n\nSecurity: VNC has a reputation for being insecure because plain RFB is, in fact, insecure. SSHive treats this seriously. The Tunnels UI is one click away from any VNC profile — if the underlying VNC connection is plaintext, you wrap it in SSH. Credentials (VNC password, ARD username, SSH passphrase for the wrapping tunnel) all sit in the Keychain with biometric gating; no `vncpasswd`-style files lying in your home directory. Host key verification for the SSH-tunnel wrapper uses TOFU like the rest of SSHive — first connection accepts, future connections fail loud on key changes.',
      fr: 'VNC est en fait trois protocoles dans un trench-coat : ARD (l\'extension Apple pour Partage d\'ecran macOS, avec son propre handshake auth et formats de pixels), RFB VeNCrypt (TLS + auth VNC classique), et RFB plain (pas de chiffrement, juste un challenge password). La plupart des apps "client VNC" iOS ne parlent qu\'un ou deux ; le RoyalVNC de SSHive parle les trois et negocie le meilleur que le serveur offre.\n\nCa compte en pratique parce qu\'une vraie flotte est heterogene. Un mix ops typique : un Mac mini headless avec Partage d\'ecran (ARD), trois bureaux Ubuntu en TigerVNC (VeNCrypt ou plain selon config), une console ESXi (variante RealVNC avec TLS strict), un Raspberry Pi en x11vnc (RFB plain). Sans client multi-protocole, il faudrait trois apps iPhone differentes pour les couvrir.\n\nLe modele de gestes merite une note. Les clients VNC sur ecrans tactiles ont historiquement ete maladroits parce que les bureaux centres souris n\'etaient pas concus pour des doigts. L\'approche de SSHive est de garder les gestes iOS-standard (tap = action principale, tap deux doigts = action secondaire, pinch pour zoomer) et d\'ajouter un overlay VNC-specifique uniquement pour le clavier. Combine au pinch-to-zoom sur un iPhone Pro Max haute densite, on peut interagir confortablement avec un bureau Linux 1080p sans panner constamment — le geste iOS est plus ergonomique qu\'un mini pointeur souris.\n\nSecurite : VNC a une reputation d\'etre non securise parce que RFB plain l\'est. SSHive prend ca au serieux. L\'UI Tunnels est a un clic de n\'importe quel profil VNC — si la connexion VNC sous-jacente est en clair, on l\'enveloppe en SSH. Les credentials (mot de passe VNC, username ARD, passphrase SSH pour le tunnel d\'enveloppe) sont tous dans le Trousseau avec biometrie ; pas de fichiers style `vncpasswd` qui trainent dans le home. La verification host key pour le wrapper tunnel SSH utilise TOFU comme le reste de SSHive — premiere connexion accepte, connexions futures echouent fort sur changement de cle.',
    },
  },
  /* ────────────────────────────────────────────────────────────────────
     5. /iphone-vpn-client — VPN iOS (unique angle)
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'iphone-vpn-client',
    iconName: 'Shield',
    metaTitle: {
      en: 'iPhone VPN Client — OpenVPN, IKEv2, IPSec Built-In | SSHive',
      fr: 'Client VPN iPhone — OpenVPN, IKEv2, IPSec integre | SSHive',
    },
    metaDescription: {
      en: 'Built-in VPN client on iPhone and iPad: IKEv2, IPSec/Xauth, OpenVPN. Auto-connect before SSH/RDP. Apple NetworkExtension. No tracking. One app for VPN + SSH + SFTP + RDP + VNC.',
      fr: 'Client VPN integre sur iPhone et iPad : IKEv2, IPSec/Xauth, OpenVPN. Auto-connect avant SSH/RDP. Apple NetworkExtension. Pas de tracking. Une app pour VPN + SSH + SFTP + RDP + VNC.',
    },
    h1: {
      en: 'A VPN client built into your SSH app',
      fr: 'Un client VPN integre a votre app SSH',
    },
    hero: {
      en: 'IKEv2, IPSec/Xauth and OpenVPN on iPhone and iPad — auto-connected before SSH or RDP. No second app, no context switch.',
      fr: 'IKEv2, IPSec/Xauth et OpenVPN sur iPhone et iPad — auto-connecte avant SSH ou RDP. Pas de seconde app, pas de switch de contexte.',
    },
    intro: {
      en: 'Reaching a protected fleet from an iPhone usually means a VPN app from one vendor (Cisco AnyConnect, Pulse Secure, OpenVPN Connect) and your SSH/RDP app from another. The dance: open VPN app, authenticate, switch to SSH app, work, switch back to disconnect. Multiply by team members and you get an ops anti-pattern.\n\nSSHive bundles a real VPN client into the iOS app — IKEv2, IPSec/Xauth and OpenVPN supported, with `.ovpn` config import, built on Apple\'s NetworkExtension / Packet Tunnel Provider framework. Toggle "Auto-connect VPN before SSH/RDP" on a profile, and SSHive raises the VPN automatically before opening a session, tears it down on disconnect. One app, one credential set, no juggling. Free covers basic VPN connectivity; Pro adds advanced profiles, simultaneous VPNs, and the rest of the SSHive feature set.',
      fr: 'Atteindre une flotte protegee depuis un iPhone implique habituellement une app VPN d\'un vendor (Cisco AnyConnect, Pulse Secure, OpenVPN Connect) et votre app SSH/RDP d\'un autre. La danse : ouvrir l\'app VPN, s\'authentifier, switcher sur l\'app SSH, travailler, re-switcher pour deconnecter. Multipliez par membre d\'equipe et vous avez un anti-pattern ops.\n\nSSHive bundle un vrai client VPN dans l\'app iOS — IKEv2, IPSec/Xauth et OpenVPN supportes, avec import de config `.ovpn`, base sur le framework NetworkExtension / Packet Tunnel Provider d\'Apple. Activez "Auto-connect VPN avant SSH/RDP" sur un profil, et SSHive monte le VPN automatiquement avant d\'ouvrir une session, le coupe a la deconnexion. Une app, un set de credentials, pas de jonglage. Free couvre la connectivite VPN de base ; Pro ajoute profils avances, VPNs simultanes et le reste des features SSHive.',
    },
    capabilities: [
      {
        title: { en: 'IKEv2 / IPSec / OpenVPN', fr: 'IKEv2 / IPSec / OpenVPN' },
        body: {
          en: 'The three most-deployed VPN protocols supported natively: IKEv2 (the modern default on macOS/iOS), IPSec with Xauth (still common in corporate gateways), and OpenVPN (via `.ovpn` config import — the same files OpenVPN Connect accepts).',
          fr: 'Les trois protocoles VPN les plus deployes supportes nativement : IKEv2 (le defaut moderne sur macOS/iOS), IPSec avec Xauth (encore courant dans les gateways corporate), et OpenVPN (via import de config `.ovpn` — les memes fichiers qu\'OpenVPN Connect accepte).',
        },
      },
      {
        title: { en: 'Apple NetworkExtension', fr: 'Apple NetworkExtension' },
        body: {
          en: 'Built on Apple\'s system-level NetworkExtension / Packet Tunnel Provider framework — the same APIs Cisco AnyConnect and OpenVPN Connect use. This means the VPN is real (full L3 routing, not a SOCKS proxy hack), respects iOS battery management, and shows up in Settings > VPN like any other VPN profile.',
          fr: 'Base sur le framework NetworkExtension / Packet Tunnel Provider d\'Apple — les memes APIs que Cisco AnyConnect et OpenVPN Connect. Le VPN est donc reel (routage L3 complet, pas un hack proxy SOCKS), respecte la gestion de batterie iOS, et apparait dans Reglages > VPN comme n\'importe quel profil VPN.',
        },
      },
      {
        title: { en: 'Auto-connect before SSH/RDP', fr: 'Auto-connect avant SSH/RDP' },
        body: {
          en: 'On any SSH, RDP, VNC or SFTP profile, you can tick "Auto-connect VPN" and pick a VPN profile. When you open the connection, SSHive raises the VPN first (or reuses an existing tunnel), then opens the session. Tear-down on disconnect. The flow that takes 5 taps elsewhere is 1 tap here.',
          fr: 'Sur n\'importe quel profil SSH, RDP, VNC ou SFTP, vous pouvez cocher "Auto-connect VPN" et choisir un profil VPN. A l\'ouverture de la connexion, SSHive monte le VPN d\'abord (ou reutilise un tunnel existant), puis ouvre la session. Tear-down a la deconnexion. Le flow qui prend 5 taps ailleurs est 1 tap ici.',
        },
      },
      {
        title: { en: '.ovpn config import', fr: 'Import de config .ovpn' },
        body: {
          en: 'Drop a `.ovpn` file (from OpenVPN Access Server, Mullvad, ProtonVPN custom configs, anywhere) into SSHive. The parser handles inline `<ca>`, `<cert>`, `<key>` blocks, TLS-auth, comp-lzo, and the common variants. No translation step needed.',
          fr: 'Deposez un fichier `.ovpn` (d\'OpenVPN Access Server, Mullvad, configs custom ProtonVPN, n\'importe ou) dans SSHive. Le parser gere les blocs inline `<ca>`, `<cert>`, `<key>`, TLS-auth, comp-lzo, et les variantes courantes. Pas d\'etape de traduction.',
        },
      },
    ],
    whyHeading: {
      en: 'Why bundle a VPN into an SSH client',
      fr: 'Pourquoi bundle un VPN dans un client SSH',
    },
    why: [
      {
        title: { en: 'One app for the whole workflow', fr: 'Une app pour tout le workflow' },
        body: {
          en: 'The realistic mobile ops workflow is: VPN to corporate → SSH to bastion → SSH to internal server → SFTP a config → RDP a Windows VM. SSHive is the only iOS app that handles every step in one window with one credential setup.',
          fr: 'Le workflow ops mobile realiste est : VPN vers corporate → SSH vers bastion → SSH vers serveur interne → SFTP une config → RDP une VM Windows. SSHive est la seule app iOS qui gere chaque etape dans une fenetre avec un setup de credentials.',
        },
      },
      {
        title: { en: 'No telemetry, no traffic relayed', fr: 'Pas de telemetrie, pas de trafic relaye' },
        body: {
          en: 'SSHive is paid (Pro $9.99 one-time) and has no advertising business model, so the app simply does not need to look at your VPN traffic. No telemetry, no third-party analytics, no traffic relayed through servers we control — the VPN goes directly from your iPhone to your configured endpoint.',
          fr: 'SSHive est payante (Pro 9,99 € unique) et n\'a pas de modele publicitaire, donc l\'app n\'a tout simplement pas besoin de regarder votre trafic VPN. Pas de telemetrie, pas d\'analytics tiers, pas de trafic relaye par des serveurs qu\'on controle — le VPN va directement de votre iPhone a votre endpoint configure.',
        },
      },
      {
        title: { en: 'Coexists with Tailscale and WireGuard', fr: 'Coexiste avec Tailscale et WireGuard' },
        body: {
          en: 'SSHive\'s VPN uses NetworkExtension like other system VPN apps. If you already use Tailscale or WireGuard for personal tailnets, you keep using them — they run alongside SSHive\'s VPN at the system level. SSHive\'s VPN is there for the IKEv2/IPSec/OpenVPN cases Tailscale and WireGuard do not cover.',
          fr: 'Le VPN de SSHive utilise NetworkExtension comme les autres apps VPN systeme. Si vous utilisez deja Tailscale ou WireGuard pour des tailnets personnels, continuez — ils tournent a cote du VPN SSHive au niveau systeme. Le VPN SSHive couvre les cas IKEv2/IPSec/OpenVPN que Tailscale et WireGuard ne couvrent pas.',
        },
      },
    ],
    competitorsHeading: {
      en: 'Other VPN clients on iOS',
      fr: 'Autres clients VPN sur iOS',
    },
    competitors: [
      {
        name: 'OpenVPN Connect',
        pitch: {
          en: 'The official OpenVPN client. Solid, free, OpenVPN-only. You still need a separate SSH/RDP app, and there is no auto-connect orchestration with your remote-access workflow.',
          fr: 'Le client officiel OpenVPN. Solide, gratuit, OpenVPN uniquement. Il faut encore une app SSH/RDP separee, et pas d\'orchestration auto-connect avec votre workflow remote-access.',
        },
        pricing: { en: 'Free', fr: 'Gratuit' },
      },
      {
        name: 'Cisco AnyConnect / Secure Client',
        pitch: {
          en: 'The standard enterprise VPN client for Cisco gateways. The obvious choice when your company uses Cisco infrastructure. Pair it with SSHive for the SSH/RDP side, no conflict.',
          fr: 'Le client VPN enterprise standard pour les gateways Cisco. Le choix evident quand votre entreprise utilise une infrastructure Cisco. Associez-le a SSHive pour le cote SSH/RDP, pas de conflit.',
        },
        pricing: { en: 'Free client (server-licensed)', fr: 'Client gratuit (serveur sous licence)' },
      },
      {
        name: 'Tailscale / WireGuard',
        pitch: {
          en: 'Modern mesh and WireGuard-based VPNs. Excellent for personal tailnets and team networks. Different category than IKEv2/IPSec/OpenVPN — coexist with SSHive\'s VPN at the system level.',
          fr: 'VPNs mesh modernes et WireGuard-based. Excellents pour tailnets personnels et reseaux d\'equipe. Categorie differente d\'IKEv2/IPSec/OpenVPN — coexistent avec le VPN SSHive au niveau systeme.',
        },
        pricing: { en: 'Free / paid tiers', fr: 'Gratuit / tiers payants' },
      },
    ],
    faq: [
      {
        question: {
          en: 'Can I import my company\'s .ovpn file into SSHive?',
          fr: 'Puis-je importer le fichier .ovpn de mon entreprise dans SSHive ?',
        },
        answer: {
          en: 'Yes. AirDrop or share the `.ovpn` file into SSHive, the parser handles inline `<ca>`, `<cert>`, `<key>` blocks, TLS-auth and the common variants. Username/password (or client certificate passphrase) are then prompted on first connect and stored in the iOS Keychain.',
          fr: 'Oui. AirDrop ou partagez le fichier `.ovpn` dans SSHive, le parser gere les blocs inline `<ca>`, `<cert>`, `<key>`, TLS-auth et les variantes courantes. Username/password (ou passphrase de certificat client) sont ensuite demandes a la premiere connexion et stockes dans le Trousseau iOS.',
        },
      },
      {
        question: {
          en: 'Does SSHive VPN log my traffic?',
          fr: 'Le VPN SSHive logge-t-il mon trafic ?',
        },
        answer: {
          en: 'No. SSHive ships zero telemetry. The VPN connection is direct from your iPhone to your configured endpoint — we do not relay it through any server we control. We do not have access to your VPN traffic, your destination IPs, or your credentials.',
          fr: 'Non. SSHive embarque zero telemetrie. La connexion VPN va directement de votre iPhone a votre endpoint configure — on ne la relaye pas par un serveur qu\'on controle. On n\'a pas acces a votre trafic VPN, vos IPs destination, ou vos credentials.',
        },
      },
      {
        question: {
          en: 'Can the VPN auto-connect when I open an SSH profile?',
          fr: 'Le VPN peut-il s\'auto-connecter a l\'ouverture d\'un profil SSH ?',
        },
        answer: {
          en: 'Yes. On the SSH (or RDP/VNC/SFTP) profile, enable "Auto-connect VPN" and pick a VPN profile. SSHive raises the VPN before opening the session and tears it down on disconnect. If the VPN is already up, it reuses the existing tunnel.',
          fr: 'Oui. Sur le profil SSH (ou RDP/VNC/SFTP), activez "Auto-connect VPN" et choisissez un profil VPN. SSHive monte le VPN avant d\'ouvrir la session et le coupe a la deconnexion. Si le VPN est deja monte, il reutilise le tunnel existant.',
        },
      },
    ],
    deepDiveHeading: {
      en: 'NetworkExtension and how the VPN actually works',
      fr: 'NetworkExtension et comment le VPN fonctionne reellement',
    },
    deepDive: {
      en: 'iOS does not let third-party apps just open raw network sockets and pretend to be a VPN. The only way to do real VPN traffic on iOS is through Apple\'s NetworkExtension framework — specifically the Packet Tunnel Provider sub-API for OpenVPN/WireGuard-style tunnels, or the IKEv2/IPSec provider for the protocols Apple supports natively. Apps that use NetworkExtension get a special entitlement from Apple and run a separate extension process that handles the encrypted tunnel; the main app talks to this extension over IPC.\n\nSSHive does this properly: the VPN configuration UI is in the main app, the actual tunnel runs in an extension process that survives even when the main app is suspended by iOS. This is why an SSH session that uses an SSHive-managed VPN stays connected when you put the phone in your pocket — the kernel routes packets through the extension transparently. By contrast, a poorly-built "VPN" that just runs a SOCKS proxy inside the app dies the moment iOS suspends the app.\n\nThe practical consequence: SSHive\'s VPN works for the actual on-call scenario. The page hits your phone, you tap a saved SSH profile that has "Auto-connect VPN" enabled, the VPN comes up in 1-2 seconds (faster for IKEv2, slower for OpenVPN), the SSH session opens through it. You investigate. The iPhone falls asleep mid-session — the VPN stays connected via the extension, the SSH session\'s TCP socket survives if the network does. You wake the phone, you are still in. Twenty minutes later you disconnect; SSHive tears down the VPN automatically.\n\nThe credential model continues to apply: VPN credentials (PSK, username/password, OpenVPN client cert passphrase) sit in the iOS Keychain with `BiometryCurrentSet` — biometric required at first connect, then the extension holds a transient copy in memory while the tunnel is up. No `.mobileconfig` profile installed system-wide, no credentials in plaintext anywhere on disk.',
      fr: 'iOS ne laisse pas les apps tierces ouvrir des sockets reseau raw et pretendre etre un VPN. La seule facon de faire du vrai trafic VPN sur iOS est via le framework NetworkExtension d\'Apple — specifiquement la sous-API Packet Tunnel Provider pour les tunnels style OpenVPN/WireGuard, ou le provider IKEv2/IPSec pour les protocoles qu\'Apple supporte nativement. Les apps qui utilisent NetworkExtension recoivent un entitlement special d\'Apple et tournent un processus extension separe qui gere le tunnel chiffre ; l\'app principale parle a cette extension via IPC.\n\nSSHive fait ca proprement : l\'UI de config VPN est dans l\'app principale, le tunnel reel tourne dans un processus extension qui survit meme quand l\'app principale est suspendue par iOS. C\'est pourquoi une session SSH qui utilise un VPN gere par SSHive reste connectee quand vous mettez le telephone en poche — le kernel route les paquets via l\'extension de facon transparente. A l\'inverse, un "VPN" mal construit qui tourne un proxy SOCKS dans l\'app meurt des qu\'iOS suspend l\'app.\n\nConsequence pratique : le VPN de SSHive marche pour le scenario on-call reel. La page atteint votre telephone, vous tapez un profil SSH sauvegarde avec "Auto-connect VPN" actif, le VPN monte en 1-2 secondes (plus rapide pour IKEv2, plus lent pour OpenVPN), la session SSH s\'ouvre via lui. Vous investiguez. L\'iPhone s\'endort en pleine session — le VPN reste connecte via l\'extension, le socket TCP de la session SSH survit si le reseau survit. Vous reveillez le telephone, vous etes toujours dedans. Vingt minutes plus tard vous deconnectez ; SSHive coupe le VPN automatiquement.\n\nLe modele de credentials continue de s\'appliquer : les credentials VPN (PSK, username/password, passphrase de certificat client OpenVPN) sont dans le Trousseau iOS avec `BiometryCurrentSet` — biometrie requise a la premiere connexion, puis l\'extension garde une copie transient en memoire pendant que le tunnel est monte. Pas de profil `.mobileconfig` installe au niveau systeme, pas de credentials en clair sur disque.',
    },
  },
];

export const IOS_PAGE_SLUGS = IOS_PAGES.map((p) => p.slug);

export function getIosPage(slug: string): IosFeatureSEO | undefined {
  return IOS_PAGES.find((p) => p.slug === slug);
}
