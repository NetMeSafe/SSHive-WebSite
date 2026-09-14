import type { Feature, Locale } from '../constants';

export interface Bilingual {
  en: string;
  fr: string;
}

export interface UseCase {
  title: Bilingual;
  description: Bilingual;
}

export interface QA {
  question: Bilingual;
  answer: Bilingual;
}

export interface FeatureSEO {
  intro: Bilingual;
  useCasesHeading: Bilingual;
  useCases: UseCase[];
  faqHeading: Bilingual;
  faq: QA[];
  relatedFeatures: Feature[];
  relatedUseCases?: string[];
  relatedHowTos?: string[];
}

export const FEATURE_SEO: Record<Feature, FeatureSEO> = {
  ssh: {
    intro: {
      en: 'SSHive is a modern SSH client built specifically for Apple devices, Mac, iPhone, and iPad, designed to replace the patchwork of Terminal, third-party emulators, and command-line tools many developers and sysadmins juggle every day. On macOS, the terminal runs on xterm.js with WebGL rendering, the same engine VS Code uses, which means scrolling stays smooth even when a verbose `tail -f` floods the screen, and Unicode glyphs render correctly without falling back to the system font. On iOS and iPadOS, the SSH terminal is fully native and shares the same profiles you set up on your Mac. Authentication works with passwords, OpenSSH-format private keys, or a forwarded ssh-agent socket on macOS.\n\nWhere SSHive really shines is in everything around the terminal. Connection profiles save host, port, user, key, environment variables, working directory, and a list of commands to run on connect, connecting to a server is one click, not a `ssh user@host -p 2222 -i ~/.ssh/id_ed25519`. Jump hosts (ProxyJump) are a first-class feature: declare a bastion in the profile and SSHive handles the multi-hop SSH tunnel transparently. Automatic reconnection kicks in when you suspend your Mac and wake up at a coffee shop, so you do not lose your tmux state. Credentials are stored in the macOS Keychain (or iOS Keychain on iPhone/iPad) via Apple\'s safeStorage API in Electron, never written to disk in plaintext, never sent anywhere. macOS itself decides when to prompt for Touch ID or your password to unlock that Keychain entry, so a stolen Mac without your fingerprint is not a stolen server.',
      fr: 'SSHive est un client SSH moderne pense pour les appareils Apple, Mac, iPhone et iPad, concu pour remplacer le bric-a-brac de Terminal, d\'emulateurs tiers et d\'outils en ligne de commande que beaucoup de développeurs et sysadmins jonglent au quotidien. Sur macOS, le terminal tourne sur xterm.js avec rendu WebGL, le même moteur que VS Code, donc le defilement reste fluide même quand un `tail -f` verbeux inonde l\'écran, et les glyphes Unicode s\'affichent correctement sans retomber sur la police systeme. Sur iOS et iPadOS, le terminal SSH est entierement natif et partage les mêmes profils que vous configurez sur Mac. L\'authentification fonctionne par mot de passe, clé privée OpenSSH ou socket ssh-agent forwarded sur macOS.\n\nLa ou SSHive brille vraiment, c\'est tout ce qui entoure le terminal. Les profils de connexion sauvegardent host, port, user, clé, variables d\'environnement, répertoire de travail et la liste de commandes a exécuter a la connexion, se connecter devient un clic, plus un `ssh user@host -p 2222 -i ~/.ssh/id_ed25519`. Les jump hosts (ProxyJump) sont une fonctionnalité de premier ordre : declarez un bastion dans le profil et SSHive gère le tunnel SSH multi-saut de facon transparente. La reconnexion automatique prend le relais quand vous mettez votre Mac en veille et que vous le reveillez dans un cafe, vous ne perdez pas votre état tmux. Les identifiants sont stockés dans le Trousseau macOS (ou iOS Keychain sur iPhone/iPad) via l\'API safeStorage d\'Electron, jamais ecrits en clair, jamais envoyes nulle part. macOS lui-même decide quand demander Touch ID ou votre mot de passe pour deverrouiller cette entrée du Trousseau, donc un Mac vole sans votre empreinte n\'est pas un serveur vole.',
    },
    useCasesHeading: { en: 'Common SSH workflows', fr: 'Workflows SSH typiques' },
    useCases: [
      {
        title: { en: 'Daily server administration', fr: 'Administration serveur quotidienne' },
        description: {
          en: 'Manage a fleet of Linux servers, production, staging, dev VMs, home lab, from one window. Tabs, profiles, broadcast mode, and saved snippets let you context-switch in milliseconds instead of typing connection strings from memory.',
          fr: 'Geez une flotte de serveurs Linux, production, staging, VMs dev, lab personnel, depuis une seule fenetre. Onglets, profils, broadcast et snippets sauvegardes permettent de changer de contexte en millisecondes au lieu de retaper des strings de connexion de memoire.',
        },
      },
      {
        title: { en: 'Bastion / jump host workflows', fr: 'Workflows bastion / jump host' },
        description: {
          en: 'Connect through a jump host to private subnets without editing `~/.ssh/config`. Define the bastion once, reuse it across dozens of profiles. Agent forwarding is supported, so your private key never leaves your Mac.',
          fr: 'Connectez-vous a travers un jump host vers des sous-réseaux privés sans éditer `~/.ssh/config`. Definissez le bastion une fois, reutilisez-le sur des dizaines de profils. Agent forwarding supporte, donc votre clé privée ne quitte jamais votre Mac.',
        },
      },
      {
        title: { en: 'Cloud instances (AWS, GCP, Hetzner)', fr: 'Instances cloud (AWS, GCP, Hetzner)' },
        description: {
          en: 'Connect to EC2, Compute Engine, or Hetzner Cloud servers using PEM keys, ed25519 keys, or assumed-role IAM credentials forwarded through the agent. Per-profile keys mean no more accidentally using the wrong key on the wrong account.',
          fr: 'Connectez-vous a EC2, Compute Engine ou Hetzner Cloud avec des clés PEM, ed25519 ou identifiants IAM assumes forwarded via l\'agent. Clé par profil = jamais d\'utilisation accidentelle de la mauvaise clé sur le mauvais compte.',
        },
      },
    ],
    faqHeading: { en: 'SSH terminal, frequently asked questions', fr: 'Terminal SSH, questions frequentes' },
    faq: [
      {
        question: { en: 'Does SSHive support OpenSSH config files?', fr: 'SSHive supporte-t-il les fichiers de config OpenSSH ?' },
        answer: {
          en: 'Yes. The connection dialog has an "Import from ~/.ssh/config" button that parses every Host entry and creates a SSHive profile for it, including ProxyJump, IdentityFile, Port, and User directives. You can re-import after editing your config, duplicates are detected by hostname.',
          fr: 'Oui. Le dialogue de connexion a un bouton "Importer depuis ~/.ssh/config" qui parse chaque entrée Host et cree un profil SSHive correspondant, incluant les directives ProxyJump, IdentityFile, Port et User. Vous pouvez reimporter après édition, les doublons sont detectes par hostname.',
        },
      },
      {
        question: { en: 'What SSH key formats are supported?', fr: 'Quels formats de clés SSH sont supportés ?' },
        answer: {
          en: 'OpenSSH format (RSA, DSA, ECDSA, Ed25519). Encrypted keys are supported, the passphrase is requested once and cached in the macOS Keychain via Electron\'s safeStorage API.',
          fr: 'Format OpenSSH (RSA, DSA, ECDSA, Ed25519). Les clés chiffrées sont supportees, la passphrase est demandee une fois puis mise en cache dans le Trousseau macOS via l\'API safeStorage d\'Electron.',
        },
      },
      {
        question: { en: 'Is SSHive faster than the built-in macOS Terminal?', fr: 'SSHive est-il plus rapide que le Terminal macOS intégré ?' },
        answer: {
          en: 'For raw terminal rendering, yes, xterm.js with WebGL outperforms macOS Terminal on long output (think building a kernel or running `find /`) because it pushes glyphs to the GPU. For interactive shell latency, both are network-bound, so the difference is unnoticeable. iTerm2 with Metal renderer is in the same ballpark.',
          fr: 'Pour le rendu pur du terminal, oui, xterm.js avec WebGL devance le Terminal macOS sur les sorties longues (genre compiler un noyau ou lancer `find /`) car il pousse les glyphes au GPU. Pour la latence shell interactive, les deux sont limites par le réseau, donc la difference est imperceptible. iTerm2 avec rendu Metal est du même ordre.',
        },
      },
      {
        question: { en: 'Can I use my ssh-agent with SSHive?', fr: 'Puis-je utiliser mon ssh-agent avec SSHive ?' },
        answer: {
          en: 'Yes (on macOS). SSHive reads the SSH_AUTH_SOCK environment variable on launch. If you use 1Password\'s SSH agent, gpg-agent, or Apple\'s built-in keychain SSH integration, those keys are available immediately. Per-profile setting: "Forward agent" tickbox enables agent forwarding for jump host workflows.',
          fr: 'Oui (sur macOS). SSHive lit la variable d\'environnement SSH_AUTH_SOCK au lancement. Si vous utilisez l\'agent SSH de 1Password, gpg-agent ou l\'intégration Trousseau d\'Apple, ces clés sont disponibles immediatement. Réglage par profil : la case "Forward agent" active l\'agent forwarding pour les workflows jump host.',
        },
      },
      {
        question: { en: 'Does SSHive support Touch ID for SSH connections?', fr: 'SSHive supporte-t-il Touch ID pour les connexions SSH ?' },
        answer: {
          en: 'Indirectly, yes. SSHive does not call Touch ID itself, credentials are stored in the macOS Keychain via Electron\'s safeStorage API, and macOS decides when to prompt for Touch ID (or your account password as a fallback) before unlocking that Keychain entry. SSHive never sees your fingerprint data. On iPhone/iPad, the equivalent path is iOS Keychain unlocked by Touch ID / Face ID / device passcode at the OS level.',
          fr: 'Indirectement, oui. SSHive n\'appelle pas Touch ID lui-même, les identifiants sont stockés dans le Trousseau macOS via l\'API safeStorage d\'Electron, et c\'est macOS qui decide quand demander Touch ID (ou votre mot de passe de session en repli) avant de deverrouiller cette entrée du Trousseau. SSHive ne voit jamais vos données d\'empreinte. Sur iPhone/iPad, le chemin equivalent est l\'iOS Keychain deverrouille par Touch ID / Face ID / code d\'accès appareil au niveau de l\'OS.',
        },
      },
      {
        question: { en: 'Does SSHive run on iPhone and iPad?', fr: 'SSHive tourne-t-il sur iPhone et iPad ?' },
        answer: {
          en: 'Yes. SSHive ships an iPhone and iPad app on the App Store. The iOS version focuses on SSH terminal and SFTP file management, the Mac-specific features (RDP, VNC, SSH tunnels, broadcast, MCP server, snippet library) stay on macOS where they make sense. Profiles created on a Mac sync to your iOS devices, so a server you set up on your laptop is one tap away on your phone.',
          fr: 'Oui. SSHive a une app iPhone et iPad sur l\'App Store. La version iOS se concentre sur le terminal SSH et la gestion SFTP, les fonctionnalités spécifiques Mac (RDP, VNC, tunnels SSH, broadcast, serveur MCP, bibliothèque de snippets) restent sur macOS la ou elles ont du sens. Les profils crees sur Mac se synchronisent sur vos appareils iOS, donc un serveur configure sur votre laptop est a un tap pres sur votre telephone.',
        },
      },
    ],
    relatedFeatures: ['sftp', 'tunnels', 'mcp'],
    relatedUseCases: ['ssh-from-iphone', 'raspberry-pi', 'aws-ec2', 'home-server'],
    relatedHowTos: ['ssh-key-mac', 'jump-host-mac', 'import-ssh-config-mac'],
  },
  sftp: {
    intro: {
      en: 'Managing files on remote servers from macOS has always been awkward. The Finder doesn\'t speak SFTP, command-line `scp` is slow for back-and-forth editing, and dedicated tools like Cyberduck or Transmit are great but live in their own window. SSHive\'s SFTP file manager is built into the same window as your terminal, so dragging a `.env` file from your Desktop to `/etc/myapp/` on production is a one-second action, and the upload progress is visible right next to the shell where you\'ll restart the service.\n\nThe interface is dual-pane: local Finder-style browser on the left, remote tree on the right, with breadcrumbs you can click to jump up the directory tree. Drag-and-drop works in both directions, and bulk operations (download, delete, chmod) operate on multi-selections. The integrated remote editor opens any text file in a CodeMirror 6 editor inside SSHive, `Cmd+S` writes back to the server. No more `vi` over a slow link to fix a typo. Bookmark frequently visited paths so `/var/log/nginx`, `/etc/letsencrypt/live`, and `~/.ssh` are one click away.',
      fr: 'Gérer des fichiers sur des serveurs distants depuis macOS a toujours ete maladroit. Le Finder ne parle pas SFTP, le `scp` en ligne de commande est lent pour les allers-retours d\'édition, et les outils dédiés comme Cyberduck ou Transmit sont bons mais vivent dans leur propre fenetre. Le gestionnaire SFTP de SSHive est intégré dans la même fenêtre que votre terminal, donc faire glisser un `.env` du Bureau vers `/etc/myapp/` en production est une action d\'une seconde, et la progression d\'upload est visible juste a côté du shell ou vous redemarrez le service.\n\nL\'interface est en double panneau : navigateur local style Finder a gauche, arbre distant a droite, avec un fil d\'Ariane cliquable pour remonter. Le drag-and-drop fonctionne dans les deux sens, et les opérations en lot (téléchargement, suppression, chmod) agissent sur les multi-selections. L\'éditeur distant intégré ouvre n\'importe quel fichier texte dans un éditeur CodeMirror 6 dans SSHive, `Cmd+S` ecrit sur le serveur. Plus de `vi` sur lien lent pour corriger une typo. Mettez en favori les chemins frequents : `/var/log/nginx`, `/etc/letsencrypt/live`, `~/.ssh` sont a un clic.',
    },
    useCasesHeading: { en: 'When SFTP saves the day', fr: 'Quand SFTP sauve la mise' },
    useCases: [
      {
        title: { en: 'Edit configs without re-deploying', fr: 'Éditer des configs sans redeployer' },
        description: {
          en: 'Open `/etc/nginx/conf.d/site.conf` directly in SSHive, fix the typo, save. The next `nginx -s reload` runs in the same SSHive terminal session right next to the editor. No FTP roundtrip, no scp dance.',
          fr: 'Ouvrez `/etc/nginx/conf.d/site.conf` directement dans SSHive, corrigez la typo, sauvegardez. Le `nginx -s reload` suivant tourne dans la même session SSHive a côté de l\'editeur. Pas d\'aller-retour FTP, pas de danse scp.',
        },
      },
      {
        title: { en: 'Backup remote logs locally', fr: 'Backup des logs distants en local' },
        description: {
          en: 'Select a date range of `/var/log/myapp/*.log`, drag to your `~/Downloads` folder. SSHive shows transfer speed, ETA, and total size, and respects the connection profile, so all transfers stay encrypted via SSH.',
          fr: 'Selectionnez une plage de dates de `/var/log/myapp/*.log`, glissez vers `~/Downloads`. SSHive affiche vitesse, ETA et taille totale, et respecte le profil de connexion, donc tous les transferts restent chiffrés via SSH.',
        },
      },
      {
        title: { en: 'Deploy artifacts from a build', fr: 'Deployer des artefacts depuis un build' },
        description: {
          en: 'Drop a `dist/` folder onto the remote tree, set permissions, run `systemctl restart` from the adjacent terminal, all in the same SSHive window, all encrypted, all logged in your transfer history.',
          fr: 'Deposez un dossier `dist/` sur l\'arbre distant, ajustez les permissions, lancez `systemctl restart` depuis le terminal adjacent, le tout dans la même fenêtre SSHive, le tout chiffré, le tout journalise dans l\'historique de transfert.',
        },
      },
    ],
    faqHeading: { en: 'SFTP, frequently asked questions', fr: 'SFTP, questions frequentes' },
    faq: [
      {
        question: { en: 'Does SSHive replace Cyberduck or Transmit?', fr: 'SSHive remplace-t-il Cyberduck ou Transmit ?' },
        answer: {
          en: 'For SFTP/SCP-based workflows, yes. SSHive does not currently support FTP, FTPS, WebDAV, S3, or Azure Blob, Cyberduck remains better for those. But if 95% of your file work is over SSH, you save a window.',
          fr: 'Pour les workflows bases SFTP/SCP, oui. SSHive ne supporte pas actuellement FTP, FTPS, WebDAV, S3 ou Azure Blob, Cyberduck reste meilleur pour ceux-la. Mais si 95% de votre travail fichier est via SSH, vous gagnez une fenetre.',
        },
      },
      {
        question: { en: 'Can I edit binary files?', fr: 'Puis-je éditer des fichiers binaires ?' },
        answer: {
          en: 'Double-click on a binary opens it in the macOS default app via a temp file; SSHive watches the temp file and re-uploads on save. So opening a `.png` in Preview, annotating, and saving uploads back automatically.',
          fr: 'Double-clic sur un binaire l\'ouvre dans l\'app macOS par défaut via un fichier temporaire ; SSHive surveille ce temp et reupload a la sauvegarde. Donc ouvrir un `.png` dans Preview, l\'annoter et sauvegarder reupload automatiquement.',
        },
      },
      {
        question: { en: 'How are SFTP transfers throttled?', fr: 'Comment les transferts SFTP sont-ils limites ?' },
        answer: {
          en: 'SFTP runs over the SSH connection, so throughput is bound by your SSH bandwidth and the remote disk speed. SSHive uses parallel chunked transfers (4 streams by default) to maximize throughput on high-latency links. You can adjust concurrency in profile settings.',
          fr: 'SFTP passe par la connexion SSH, donc le debit est limite par votre bande passante SSH et la vitesse disque distante. SSHive utilise des transferts paralleles en chunks (4 streams par défaut) pour maximiser le debit sur les liens a forte latence. La concurrence est reglable dans les paramètres du profil.',
        },
      },
      {
        question: { en: 'Does SFTP work on the free tier?', fr: 'SFTP fonctionne-t-il en gratuit ?' },
        answer: {
          en: 'Yes, SFTP is included in the free tier. The free tier limits you to 2 concurrent SSH sessions and 5 saved profiles, but each session has full SFTP access alongside the terminal.',
          fr: 'Oui, SFTP est inclus dans le tier gratuit. Le gratuit limite a 2 sessions SSH concurrentes et 5 profils sauvegardes, mais chaque session a un accès SFTP complet a côté du terminal.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'tunnels', 'mcp'],
    relatedUseCases: ['developer-mac', 'home-server', 'nas-synology'],
    relatedHowTos: ['sftp-gui-mac', 'ssh-key-mac'],
  },
  rdp: {
    intro: {
      en: 'Connecting from macOS to Windows desktops or servers usually means firing up Microsoft Remote Desktop or a third-party RDP client in a separate window. SSHive embeds a full RDP client directly in the same window as your SSH sessions, powered by IronRDP / freerdp-native, with full keyboard, mouse and clipboard handling. No external app, no window-juggling, no forgotten credentials in another keychain.\n\nKeyboard mapping handles the macOS-to-Windows quirks: `Cmd+C` and `Cmd+V` translate to `Ctrl+C`/`Ctrl+V` on the remote host, function keys work, and the AltGr layer is handled correctly for international keyboards. Clipboard syncs in both directions for text. Resolution adapts to your Retina display, including dynamic resize when you change SSHive\'s window size.',
      fr: 'Se connecter depuis macOS a des bureaux ou serveurs Windows signifie généralement lancer Microsoft Remote Desktop ou un client RDP tiers dans une fenêtre separee. SSHive intégré un client RDP complet directement dans la même fenêtre que vos sessions SSH, propulse par IronRDP / freerdp-native, avec gestion complète clavier, souris et presse-papiers. Pas d\'app externe, pas de jonglage de fenêtres, pas d\'identifiants oublies dans un autre trousseau.\n\nLe mapping clavier gère les bizarreries macOS-vers-Windows : `Cmd+C` et `Cmd+V` traduisent en `Ctrl+C`/`Ctrl+V` sur l\'hôte distant, les touches de fonction marchent, et la couche AltGr est geree correctement pour les claviers internationaux. Le presse-papiers se synchronise dans les deux sens pour le texte. La résolution s\'adapte a votre écran Retina, y compris en cas de redimensionnement dynamique de la fenêtre SSHive.',
    },
    useCasesHeading: { en: 'When RDP from a Mac matters', fr: 'Quand le RDP depuis Mac compte' },
    useCases: [
      {
        title: { en: 'Manage Windows Server VMs', fr: 'Gérer des VMs Windows Server' },
        description: {
          en: 'Connect to Windows Server 2019/2022/2025 instances on Hyper-V, ESXi, or AWS EC2. Domain-joined and workgroup logins both work; NLA (Network Level Authentication) is supported for hardened hosts.',
          fr: 'Connectez-vous a des instances Windows Server 2019/2022/2025 sur Hyper-V, ESXi ou AWS EC2. Logins joints au domaine et workgroup fonctionnent ; NLA (Network Level Authentication) supporte pour les hôtes durcis.',
        },
      },
      {
        title: { en: 'Cross-platform dev workflows', fr: 'Workflows dev cross-platform' },
        description: {
          en: 'Test your app on Windows from a Mac without rebooting into Boot Camp or running Parallels. Use a remote Windows VM, RDP into it from SSHive, and you keep your macOS dev environment untouched.',
          fr: 'Testez votre app sur Windows depuis un Mac sans rebooter dans Boot Camp ou lancer Parallels. Utilisez une VM Windows distante, RDP dessus depuis SSHive, vous gardez votre environnement dev macOS intact.',
        },
      },
      {
        title: { en: 'Help desk / support', fr: 'Help desk / support' },
        description: {
          en: 'Connect to client machines via RDP through a VPN or SSH tunnel. Combine SSHive\'s tunnel feature with RDP to reach Windows machines on private networks without exposing port 3389 to the Internet.',
          fr: 'Connectez-vous a des machines clientes via RDP a travers un VPN ou un tunnel SSH. Combinez la fonctionnalité tunnel de SSHive avec RDP pour atteindre des Windows sur réseaux privés sans exposer le port 3389 a Internet.',
        },
      },
    ],
    faqHeading: { en: 'RDP, frequently asked questions', fr: 'RDP, questions frequentes' },
    faq: [
      {
        question: { en: 'Is RDP available in the free tier?', fr: 'RDP est-il disponible en gratuit ?' },
        answer: {
          en: 'No. RDP is a Pro feature. Free tier covers the SSH terminal, SFTP file manager, snippets, and Keychain-based credential storage. The Pro upgrade adds RDP, VNC, tunnels, broadcast and MCP integration.',
          fr: 'Non. RDP est une fonctionnalité Pro. Le tier gratuit couvre le terminal SSH, le gestionnaire SFTP, les snippets et le stockage des identifiants via Trousseau. L\'upgrade Pro ajoute RDP, VNC, tunnels, broadcast et l\'intégration MCP.',
        },
      },
      {
        question: { en: 'Can I copy-paste files via RDP?', fr: 'Puis-je copier-coller des fichiers via RDP ?' },
        answer: {
          en: 'Currently text clipboard only. For file transfers, use SSHive\'s SFTP pane in the same window, it\'s usually faster anyway because SFTP doesn\'t have the RDP framing overhead.',
          fr: 'Pour l\'instant presse-papiers texte uniquement. Pour les transferts de fichiers, utilisez le panneau SFTP de SSHive dans la même fenêtre, c\'est généralement plus rapide car SFTP n\'a pas l\'overhead de framing RDP.',
        },
      },
    ],
    relatedFeatures: ['vnc', 'tunnels', 'ssh'],
    relatedUseCases: ['windows-server'],
    relatedHowTos: ['rdp-from-mac'],
  },
  vnc: {
    intro: {
      en: 'VNC is the lingua franca of remote desktops on Linux. From a Raspberry Pi running Pixel desktop to a Proxmox host\'s console to a Synology NAS\'s GUI, VNC servers are everywhere. SSHive\'s built-in VNC viewer uses noVNC under the hood with a WebSocket proxy embedded in the app, meaning you do not need an external WebSocket relay (like websockify) to connect to a plain TCP VNC server. Just enter host:port, password if any, and you\'re in.\n\nFull RFB protocol support means raw, RRE, Hextile, Tight (with JPEG), and ZRLE encodings all work. The viewer adapts the framebuffer scaling to your Retina display, and clipboard syncs both ways. SSHive supports TightVNC, RealVNC, x11vnc, vino, KVM/QEMU\'s built-in VNC console, and TigerVNC, basically any RFB-compliant server.',
      fr: 'VNC est la lingua franca des bureaux distants sur Linux. D\'un Raspberry Pi sous Pixel desktop a la console d\'un hôte Proxmox jusqu\'a l\'interface d\'un NAS Synology, les serveurs VNC sont partout. Le viewer VNC intégré de SSHive utilise noVNC sous le capot avec un proxy WebSocket intégré dans l\'app, vous n\'avez donc pas besoin d\'un relais WebSocket externe (genre websockify) pour vous connecter a un serveur VNC TCP. Entrez juste host:port, mot de passe le cas echeant, et vous êtes dedans.\n\nLe support complet du protocole RFB couvre les encodages raw, RRE, Hextile, Tight (avec JPEG) et ZRLE. Le viewer adapte le scaling du framebuffer a votre écran Retina, et le presse-papiers se synchronise dans les deux sens. SSHive supporte TightVNC, RealVNC, x11vnc, vino, la console VNC intégrée de KVM/QEMU et TigerVNC, en gros n\'importe quel serveur conforme RFB.',
    },
    useCasesHeading: { en: 'VNC on macOS, what you can do', fr: 'VNC sur macOS, ce que vous pouvez faire' },
    useCases: [
      {
        title: { en: 'Headless Raspberry Pi GUI', fr: 'Interface graphique Raspberry Pi headless' },
        description: {
          en: 'Run RealVNC server on a Pi or use `vncserver` from x11vnc, then connect from your Mac to manage the desktop. No need for a separate monitor and keyboard on the Pi.',
          fr: 'Lancez RealVNC server sur un Pi ou utilisez `vncserver` de x11vnc, puis connectez-vous depuis votre Mac pour gérer le bureau. Plus besoin d\'écran et clavier séparés sur le Pi.',
        },
      },
      {
        title: { en: 'Proxmox / KVM consoles', fr: 'Consoles Proxmox / KVM' },
        description: {
          en: 'Access the noVNC console of a Proxmox VM, ESXi guest, or QEMU instance directly from SSHive. Works alongside an SSH session to the host, manage hypervisor and VM in one window.',
          fr: 'Accedez a la console noVNC d\'une VM Proxmox, d\'un guest ESXi ou d\'une instance QEMU directement depuis SSHive. Fonctionne en parallele d\'une session SSH a l\'hôte, geree hyperviseur et VM dans une seule fenetre.',
        },
      },
      {
        title: { en: 'Tunneled VNC for security', fr: 'VNC tunnele pour la sécurité' },
        description: {
          en: 'Combine SSHive\'s SSH tunnel feature with VNC: forward port 5900 over SSH, then connect to localhost. Your VNC traffic is encrypted end-to-end without exposing 5900 to the Internet.',
          fr: 'Combinez la fonctionnalité tunnel SSH de SSHive avec VNC : forwardez le port 5900 via SSH, puis connectez-vous a localhost. Votre trafic VNC est chiffré de bout en bout sans exposer 5900 a Internet.',
        },
      },
    ],
    faqHeading: { en: 'VNC, frequently asked questions', fr: 'VNC, questions frequentes' },
    faq: [
      {
        question: { en: 'Does SSHive VNC work with Apple Screen Sharing?', fr: 'SSHive VNC fonctionne-t-il avec Partage d\'écran Apple ?' },
        answer: {
          en: 'Yes, Apple\'s vncserver speaks RFB and SSHive can connect to it (port 5900). For full Apple-Apple Screen Sharing features (audio, drag-drop), Apple\'s built-in client is still better. SSHive shines for cross-platform.',
          fr: 'Oui, le vncserver d\'Apple parle RFB et SSHive peut s\'y connecter (port 5900). Pour les fonctionnalités complète de Partage d\'écran Apple-vers-Apple (audio, drag-drop), le client intégré Apple reste meilleur. SSHive brille pour le cross-platform.',
        },
      },
      {
        question: { en: 'How is the VNC password stored?', fr: 'Comment le mot de passe VNC est-il stocke ?' },
        answer: {
          en: 'Encrypted in the macOS Keychain via Electron\'s safeStorage. It\'s never written to profiles.json in plaintext. Each profile has its own credential entry.',
          fr: 'Chiffré dans le Trousseau macOS via safeStorage d\'Electron. Jamais ecrit en clair dans profiles.json. Chaque profil a sa propre entrée d\'identifiant.',
        },
      },
      {
        question: { en: 'Is VNC included in the free tier?', fr: 'VNC est-il inclus en gratuit ?' },
        answer: {
          en: 'No. VNC is a Pro feature alongside RDP and tunnels. The Pro upgrade is a one-time $8.99 on the Mac App Store with lifetime updates.',
          fr: 'Non. VNC est une fonctionnalité Pro avec RDP et les tunnels. L\'upgrade Pro est un achat unique a 9,99 € sur le Mac App Store avec mises a jour a vie.',
        },
      },
      {
        question: { en: 'What about VNC over SSH (the -via flag in xtightvnc)?', fr: 'Et VNC sur SSH (le flag -via dans xtightvnc) ?' },
        answer: {
          en: 'Use SSHive\'s tunnel feature: in the SSH profile, set up a Local forward 5900:localhost:5900. Then create a VNC profile pointing to localhost:5900. The traffic is automatically tunneled when the SSH connection is up.',
          fr: 'Utilisez la fonctionnalité tunnel de SSHive : dans le profil SSH, configurez un forward Local 5900:localhost:5900. Puis créez un profil VNC pointant vers localhost:5900. Le trafic est automatiquement tunnele quand la connexion SSH est active.',
        },
      },
    ],
    relatedFeatures: ['rdp', 'tunnels', 'ssh'],
    relatedUseCases: ['raspberry-pi', 'proxmox', 'home-server'],
    relatedHowTos: ['vnc-from-mac'],
  },
  tunnels: {
    intro: {
      en: 'SSH tunnels are one of the most underrated tools in a sysadmin\'s toolkit, they let you reach internal services (a database, a Redis instance, an admin panel) without exposing them to the Internet. SSHive turns SSH tunneling from a memorized command-line incantation into a profile setting. Open a profile, click "Tunnels", add a forward, done. The tunnel starts automatically when the SSH connection comes up and tears down when it drops.\n\nAll three OpenSSH forwarding modes are supported: Local (`-L`) brings a remote port to your Mac, Remote (`-R`) exposes a local port on the remote server, and Dynamic SOCKS5 (`-D`) gives you a per-app proxy. Each profile can have up to 10 Local and 5 Remote tunnels active simultaneously. SOCKS5 supports IPv4, IPv6, and domain-name routing, so you can use SSHive as a private VPN-like proxy for browser sessions when traveling.',
      fr: 'Les tunnels SSH sont l\'un des outils les plus sous-estimes du sysadmin, ils permettent d\'atteindre des services internes (une base, un Redis, un panel admin) sans les exposer a Internet. SSHive transforme le tunneling SSH d\'incantation ligne de commande memorisee en paramètre de profil. Ouvrez un profil, cliquez "Tunnels", ajoutez un forward, c\'est fait. Le tunnel demarre automatiquement quand la connexion SSH monte et tombe quand elle chute.\n\nLes trois modes de forwarding OpenSSH sont supportés : Local (`-L`) ramene un port distant sur votre Mac, Remote (`-R`) expose un port local sur le serveur distant, et Dynamic SOCKS5 (`-D`) donne un proxy par app. Chaque profil peut avoir jusqu\'a 10 tunnels Local et 5 Remote actifs simultanement. SOCKS5 supporte IPv4, IPv6 et le routing par nom de domaine, vous pouvez donc utiliser SSHive comme un proxy type VPN privé pour des sessions navigateur en deplacement.',
    },
    useCasesHeading: { en: 'Real-world tunnel scenarios', fr: 'Scenarios réels de tunnels' },
    useCases: [
      {
        title: { en: 'Reach a private database', fr: 'Atteindre une base privée' },
        description: {
          en: 'Forward 5432 from a private RDS instance through your bastion to localhost:5432. Connect TablePlus, DBeaver, or psql to localhost, they think the database is local, and your SSH key is the auth.',
          fr: 'Forwardez 5432 d\'une instance RDS privée a travers votre bastion vers localhost:5432. Connectez TablePlus, DBeaver ou psql a localhost, ils pensent que la base est locale, et votre clé SSH fait l\'auth.',
        },
      },
      {
        title: { en: 'Expose a local dev server', fr: 'Exposer un serveur dev local' },
        description: {
          en: 'Use Remote forwarding to expose your local Vite dev server (port 5173) on a public host\'s port 8080. Quick demo to a stakeholder without ngrok or Cloudflare Tunnel.',
          fr: 'Utilisez le Remote forwarding pour exposer votre serveur Vite dev local (port 5173) sur le port 8080 d\'un hôte public. Demo rapide a un stakeholder sans ngrok ni Cloudflare Tunnel.',
        },
      },
      {
        title: { en: 'SOCKS5 proxy for safe browsing', fr: 'Proxy SOCKS5 pour navigation sure' },
        description: {
          en: 'On hotel Wi-Fi, start a SOCKS5 tunnel through your home server, set Firefox/Chrome to use localhost:1080. All your web traffic exits from your home IP, encrypted, untouchable by the hotel network.',
          fr: 'Sur le Wi-Fi d\'hotel, demarrez un tunnel SOCKS5 via votre serveur perso, reglez Firefox/Chrome sur localhost:1080. Tout votre trafic web sort de votre IP perso, chiffré, intouchable par le réseau d\'hotel.',
        },
      },
    ],
    faqHeading: { en: 'SSH tunnels, frequently asked questions', fr: 'Tunnels SSH, questions frequentes' },
    faq: [
      {
        question: { en: 'Why not just use a VPN?', fr: 'Pourquoi pas juste un VPN ?' },
        answer: {
          en: 'A VPN routes all traffic, requires admin privileges, and is overkill for reaching one database. SSH tunnels are surgical: only the ports you specify are forwarded, no kernel network changes, no sudo. They\'re also auditable, your bastion logs the SSH session, not opaque VPN tunnels.',
          fr: 'Un VPN route tout le trafic, demande des privileges admin et est excessif pour atteindre une base. Les tunnels SSH sont chirurgicaux : seuls les ports specifies sont forwardes, pas de changement réseau kernel, pas de sudo. Ils sont aussi auditables, votre bastion logue la session SSH, pas des tunnels VPN opaques.',
        },
      },
      {
        question: { en: 'Can I use a tunnel without keeping the SSH terminal open?', fr: 'Puis-je utiliser un tunnel sans garder le terminal SSH ouvert ?' },
        answer: {
          en: 'Yes. SSHive separates "tunnel-only" profiles: connect with no shell, just the tunnels active. The connection stays alive in the background. Disconnect from the sessions panel when done.',
          fr: 'Oui. SSHive séparé les profils "tunnel only" : connexion sans shell, juste les tunnels actifs. La connexion reste vivante en arriere-plan. Deconnectez depuis le panneau de sessions quand fini.',
        },
      },
      {
        question: { en: 'How does SSHive handle tunnel re-establishment after a drop?', fr: 'Comment SSHive gère-t-il le reetablissement de tunnel après une chute ?' },
        answer: {
          en: 'Auto-reconnect retries with exponential backoff (1s, 2s, 4s, ... up to 60s). Tunnels reattach as soon as the SSH connection is back. You see a yellow indicator in the sessions panel during reconnect.',
          fr: 'L\'auto-reconnect retry avec backoff exponentiel (1s, 2s, 4s, ... jusqu\'a 60s). Les tunnels se rattachent des que la connexion SSH revient. Indicateur jaune dans le panneau de sessions pendant la reconnexion.',
        },
      },
      {
        question: { en: 'Are tunnels in the free tier?', fr: 'Les tunnels sont-ils en gratuit ?' },
        answer: {
          en: 'Tunnels are a Pro feature. Free tier covers SSH terminal + SFTP. Pro ($8.99 one-time) unlocks tunnels, RDP, VNC, broadcast, and unlimited sessions.',
          fr: 'Les tunnels sont une fonctionnalité Pro. Le gratuit couvre terminal SSH + SFTP. Pro (9,99 € achat unique) debloque tunnels, RDP, VNC, broadcast et sessions illimitees.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'broadcast'],
    relatedUseCases: ['aws-ec2', 'home-server', 'docker'],
    relatedHowTos: ['ssh-tunnel-mac', 'socks5-proxy-mac', 'jump-host-mac'],
  },
  mcp: {
    intro: {
      en: 'Model Context Protocol (MCP) is the standard Anthropic introduced in late 2024 for letting AI assistants talk to local tools. SSHive ships with a built-in MCP server, meaning Claude Code, Cursor, and Claude Desktop can read your SSH session list, execute commands on connected hosts, browse SFTP, and read/write remote files. Toggle one switch in SSHive Settings → MCP: the local HTTP server starts on port 49422, a Bearer token is generated, and SSHive auto-injects an `mcpServers.sshive` entry into the config files of every detected client (`~/.claude.json`, `~/.cursor/mcp.json`, plus a copyable stdio block for Claude Desktop via `npx mcp-remote`). For other MCP-compatible clients, a Copy button gives you a JSON snippet with the real token to paste anywhere.\n\nThe server exposes 11 tools: `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file` (1 MB max), `sftp_write_file` (in-memory), `sftp_write_file_chunk` (4 MB chunks for big files via base64 append), `sftp_write_from_local_path` and `sftp_download_to_local_path` (streamed transfers, zero base64 overhead, no size limit), plus `sftp_mkdir`, `sftp_rename` and `sftp_delete` for full remote file management. Authentication uses a UUID Bearer token persisted in `settings.json` and rotatable from the UI. The HTTP server binds to `127.0.0.1` only, it never accepts external connections, and every command passes through your existing SSH session auth, so the AI cannot do anything you can\'t already do. MCP is Pro-only.\n\nMCP is not the only AI in SSHive: the terminal also has a built-in AI assistant. Select some output and ask it to explain an error, or ask a free-form question, using your own API key (Anthropic Claude, OpenAI GPT or Google Gemini). The key is stored encrypted in the macOS Keychain and requests go directly from your Mac to the provider you chose, nothing transits through SSHive servers.',
      fr: 'Model Context Protocol (MCP) est le standard introduit par Anthropic fin 2024 pour permettre aux assistants IA de parler aux outils locaux. SSHive embarque un serveur MCP intégré, Claude Code, Cursor et Claude Desktop peuvent lire votre liste de sessions SSH, exécuter des commandes sur les hôtes connectés, parcourir SFTP et lire/ecrire des fichiers distants. Basculez un interrupteur dans Paramètres → MCP : le serveur HTTP local demarre sur le port 49422, un Bearer token est génère, et SSHive auto-injecte une entrée `mcpServers.sshive` dans les fichiers de config de chaque client detecte (`~/.claude.json`, `~/.cursor/mcp.json`, plus un bloc stdio copiable pour Claude Desktop via `npx mcp-remote`). Pour les autres clients compatibles MCP, un bouton Copier vous donne un snippet JSON avec le vrai token pret a coller n\'importe ou.\n\nLe serveur expose 11 outils : `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file` (1 MB max), `sftp_write_file` (en mémoire), `sftp_write_file_chunk` (chunks de 4 MB pour gros fichiers via append base64), `sftp_write_from_local_path` et `sftp_download_to_local_path` (transferts streames, zero overhead base64, sans limite de taille), plus `sftp_mkdir`, `sftp_rename` et `sftp_delete` pour une gestion complète des fichiers distants. L\'authentification utilise un Bearer token UUID persiste dans `settings.json` et rotatable depuis l\'UI. Le serveur HTTP bind uniquement sur `127.0.0.1`, il n\'accepte jamais de connexions externes, et chaque commande passe par l\'auth de votre session SSH existante, donc l\'IA ne peut rien faire que vous ne puissiez déjà faire. MCP est Pro uniquement.\n\nMCP n\'est pas la seule IA dans SSHive : le terminal a aussi un assistant IA integre. Selectionnez une sortie et demandez-lui d\'expliquer une erreur, ou posez une question libre, avec votre propre clé API (Anthropic Claude, OpenAI GPT ou Google Gemini). La clé est stockée chiffrée dans le Trousseau macOS et les requêtes partent directement de votre Mac vers le fournisseur choisi, rien ne transite par les serveurs SSHive.',
    },
    useCasesHeading: { en: 'AI + SSH workflows', fr: 'Workflows IA + SSH' },
    useCases: [
      {
        title: { en: 'Production debugging with Claude', fr: 'Debug production avec Claude' },
        description: {
          en: '"Hey Claude, my prod app is slow, check disk, memory, and the last 100 lines of nginx error log." Claude calls `ssh_execute` against your prod session, returns a triage summary in seconds. You stay in your editor.',
          fr: '"Hey Claude, mon app prod est lente, verifie disque, mémoire et les 100 dernières lignes du log d\'erreur nginx." Claude appelle `ssh_execute` sur votre session prod, renvoie un resume de triage en quelques secondes. Vous restez dans votre editeur.',
        },
      },
      {
        title: { en: 'Server-side code review', fr: 'Code review côté serveur' },
        description: {
          en: 'Ask Cursor to read `/etc/myapp/config.yaml` on staging and compare to your local version. The MCP `sftp_read_file` tool returns the content; Cursor diffs it locally. No copy-paste, no "let me ssh in real quick".',
          fr: 'Demandez a Cursor de lire `/etc/myapp/config.yaml` sur staging et de comparer a votre version locale. Le tool `sftp_read_file` MCP renvoie le contenu ; Cursor le diffe en local. Pas de copier-coller, pas de "laisse-moi ssh rapidement".',
        },
      },
      {
        title: { en: 'Multi-step automation', fr: 'Automation multi-étapes' },
        description: {
          en: '"Roll out the new config: copy `nginx.conf` to web-1, web-2, web-3, then run `nginx -t && systemctl reload nginx` on each." Claude orchestrates via SSHive\'s MCP, broadcast for the reload, individual SFTP writes for the file.',
          fr: '"Deploie la nouvelle config : copie `nginx.conf` sur web-1, web-2, web-3, puis `nginx -t && systemctl reload nginx` sur chaque." Claude orchestre via le MCP de SSHive, broadcast pour le reload, ecritures SFTP individuelles pour le fichier.',
        },
      },
    ],
    faqHeading: { en: 'MCP integration, frequently asked questions', fr: 'Intégration MCP, questions frequentes' },
    faq: [
      {
        question: { en: 'Is the MCP server safe? Can the AI mess up my servers?', fr: 'Le serveur MCP est-il sur ? L\'IA peut-elle abimer mes serveurs ?' },
        answer: {
          en: 'The AI can only do what you can do via the active SSH session, it has no extra privileges. SSHive shows a notification for every tool call so you see what the AI is doing in real time. You can disable specific tools (e.g., disable `sftp_write_file` for read-only sessions) per profile.',
          fr: 'L\'IA ne peut faire que ce que vous pouvez faire via la session SSH active, pas de privileges supplementaires. SSHive affiche une notification pour chaque appel d\'outil, vous voyez en temps réel ce que l\'IA fait. Vous pouvez desactiver des outils spécifiques (par ex. desactiver `sftp_write_file` pour les sessions read-only) par profil.',
        },
      },
      {
        question: { en: 'Which AI clients are supported?', fr: 'Quels clients IA sont supportés ?' },
        answer: {
          en: 'Claude Code (CLI + IDE) and Cursor get the MCP entry written into their config files automatically when you toggle the server ON. Claude Desktop has a copy-paste block (uses `npx mcp-remote` since Desktop is stdio-only). Any other MCP-compliant client works manually, copy the JSON config (which already includes your real Bearer token) from Settings → MCP and paste it into your client.',
          fr: 'Claude Code (CLI + extension IDE) et Cursor recoivent l\'entrée MCP ecrite dans leurs fichiers de config automatiquement quand vous basculez le serveur ON. Claude Desktop a un bloc copier-coller (utilise `npx mcp-remote` car Desktop est stdio-only). Tout autre client compatible MCP fonctionne manuellement, copiez la config JSON (qui inclut déjà votre vrai Bearer token) depuis Paramètres → MCP et collez-la dans votre client.',
        },
      },
      {
        question: { en: 'Does the MCP server send my data to Anthropic?', fr: 'Le serveur MCP envoie-t-il mes données a Anthropic ?' },
        answer: {
          en: 'No, the MCP server runs entirely on your Mac. Whether your AI client (Claude Code, Cursor) sends data to a cloud LLM is up to that client\'s configuration, not SSHive. SSHive itself has zero telemetry and zero outbound calls beyond your SSH/SFTP connections.',
          fr: 'Non, le serveur MCP tourne entierement sur votre Mac. Que votre client IA (Claude Code, Cursor) envoie des données a un LLM cloud depend de la configuration de ce client, pas de SSHive. SSHive lui-même a zero télémétrie et zero appel sortant au-dela de vos connexions SSH/SFTP.',
        },
      },
      {
        question: { en: 'Is MCP a Pro feature?', fr: 'MCP est-il une fonctionnalité Pro ?' },
        answer: {
          en: 'Yes. MCP integration is included in the Pro upgrade ($8.99 one-time). Free tier focuses on SSH and SFTP for individual use.',
          fr: 'Oui. L\'intégration MCP est incluse dans l\'upgrade Pro (9,99 € achat unique). Le gratuit se concentre sur SSH et SFTP pour usage individuel.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'broadcast'],
    relatedUseCases: ['developer-mac', 'home-server'],
    relatedHowTos: ['claude-mcp-ssh'],
  },
  broadcast: {
    intro: {
      en: 'When you administer more than one server, you eventually face the "I need to run this on all of them" moment. Maybe it\'s `apt update`, maybe it\'s checking which version of OpenSSL is installed, maybe it\'s a config rollout. Tools like Ansible, Salt, and Puppet exist for this, but for a one-off command across 3 to 30 servers, they\'re heavy. Broadcast mode in SSHive solves the gap: open the sessions you care about, hit Cmd+Shift+B, type the command, watch it run on all of them simultaneously with each output in its own pane.\n\nThere\'s no agent, no inventory, no YAML. Broadcast just types the same keystrokes into every active SSH session. You see real-time output side-by-side, can spot the one box that errored out, and re-run targeted commands on just that one. It\'s the unsexiest, most useful feature SSHive has, and it\'s exactly what fleet operators have been asking for since the SecureCRT "command window" days.',
      fr: 'Quand vous administrez plus d\'un serveur, vous finissez par tomber sur le moment "j\'ai besoin de lancer ca sur tous". Parfois c\'est `apt update`, parfois c\'est vérifier quelle version d\'OpenSSL est installee, parfois c\'est un deploiement de config. Des outils comme Ansible, Salt et Puppet existent pour ca, mais pour une commande one-off sur 3 a 30 serveurs, c\'est lourd. Le mode broadcast de SSHive comble le manque : ouvrez les sessions concernees, Cmd+Shift+B, tapez la commande, regardez-la s\'exécuter sur toutes simultanement, chaque sortie dans son panneau.\n\nPas d\'agent, pas d\'inventaire, pas de YAML. Le broadcast tape juste les mêmes touches dans chaque session SSH active. Vous voyez la sortie temps réel côte à côte, vous reperez la box qui a foire, vous relancez des commandes ciblees sur celle-la uniquement. C\'est la fonctionnalité la moins sexy et la plus utile de SSHive, et c\'est exactement ce que les fleet operators reclament depuis l\'epoque de la "command window" SecureCRT.',
    },
    useCasesHeading: { en: 'When broadcast saves hours', fr: 'Quand le broadcast fait gagner des heures' },
    useCases: [
      {
        title: { en: 'Patch a CVE across the fleet', fr: 'Patcher un CVE sur toute la flotte' },
        description: {
          en: 'New OpenSSL CVE drops? Open all your servers, broadcast `apt update && apt install -y openssl libssl3`. Reload services with another broadcast. 5 minutes for 20 servers, no Ansible playbook needed.',
          fr: 'Nouveau CVE OpenSSL ? Ouvrez tous vos serveurs, broadcast `apt update && apt install -y openssl libssl3`. Reload les services par un autre broadcast. 5 min pour 20 serveurs, aucun playbook Ansible.',
        },
      },
      {
        title: { en: 'Audit configuration drift', fr: 'Auditer la derive de configuration' },
        description: {
          en: 'Broadcast `cat /etc/timezone` or `php -v` to see at a glance which boxes are out of sync. The side-by-side panes make divergent outputs jump out.',
          fr: 'Broadcastez `cat /etc/timezone` ou `php -v` pour voir d\'un coup d\'oeil quelles boxes sont desynchronisees. Les panneaux côte à côte font ressortir les sorties divergentes.',
        },
      },
      {
        title: { en: 'Fleet-wide log search', fr: 'Recherche de logs sur toute la flotte' },
        description: {
          en: 'Customer reports an error at 14:32. Broadcast `grep "ERROR" /var/log/myapp/app.log | grep "14:3[0-9]"` across 10 web servers, find the offending one in seconds.',
          fr: 'Un client signale une erreur a 14:32. Broadcast `grep "ERROR" /var/log/myapp/app.log | grep "14:3[0-9]"` sur 10 serveurs web, trouvez le coupable en quelques secondes.',
        },
      },
    ],
    faqHeading: { en: 'Broadcast, frequently asked questions', fr: 'Broadcast, questions frequentes' },
    faq: [
      {
        question: { en: 'How do I broadcast to a subset of sessions?', fr: 'Comment broadcaster a un sous-ensemble de sessions ?' },
        answer: {
          en: 'In the sessions panel, check the boxes next to the sessions you want to include. Cmd+Shift+B then targets only those. You can save broadcast groups (e.g., "all web", "all db") for one-click selection.',
          fr: 'Dans le panneau de sessions, cochez les sessions a inclure. Cmd+Shift+B cible alors uniquement celles-la. Vous pouvez sauvegarder des groupes de broadcast ("tous web", "toutes db") pour sélection en un clic.',
        },
      },
      {
        question: { en: 'Is broadcast different from a multiplexer like tmux?', fr: 'Le broadcast est-il différent d\'un multiplexeur comme tmux ?' },
        answer: {
          en: 'tmux\'s `setw synchronize-panes` is similar, but it requires having a tmux session on each host first. SSHive broadcast works at the SSH client level, so no setup on the remote side, no tmux required, and you get separate panes per host with auto-color-coding.',
          fr: '`setw synchronize-panes` de tmux est similaire, mais demande une session tmux sur chaque hôte d\'abord. Le broadcast SSHive marche au niveau du client SSH, donc pas de setup côté distant, pas besoin de tmux, et panneaux séparés par hôte avec code couleur auto.',
        },
      },
      {
        question: { en: 'Can broadcast run a script (multi-line) instead of a single command?', fr: 'Le broadcast peut-il lancer un script (multi-ligne) au lieu d\'une seule commande ?' },
        answer: {
          en: 'Yes, paste a multi-line script while broadcast is active and each line goes to every session. For complex orchestration, save it as a snippet (Quick Commands) and broadcast the snippet.',
          fr: 'Oui, collez un script multi-ligne quand le broadcast est actif, chaque ligne va dans chaque session. Pour de l\'orchestration complexe, sauvegardez-le en snippet (Quick Commands) et broadcastez le snippet.',
        },
      },
      {
        question: { en: 'Pro feature?', fr: 'Fonctionnalité Pro ?' },
        answer: {
          en: 'Yes, broadcast is part of Pro along with RDP, VNC, tunnels, and unlimited sessions. $8.99 one-time on the Mac App Store.',
          fr: 'Oui, broadcast fait partie de Pro avec RDP, VNC, tunnels et sessions illimitees. 9,99 € achat unique sur le Mac App Store.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'snippets', 'mcp'],
    relatedUseCases: ['kubernetes', 'docker', 'jump-host'],
    relatedHowTos: ['broadcast-commands-mac'],
  },
  serial: {
    intro: {
      en: 'Every network engineer knows the moment: the switch is unreachable, the management VLAN is the thing you broke, and the only way in is the light-blue cable in the bottom of the bag. On Windows that means PuTTY, which has had a Serial radio button on its front page since 1999. On a Mac it has meant `screen /dev/cu.usbserial-XXXX 9600`, a command you look up every time, that gives no indication whether the port opened, that logs nothing, that cannot send a BREAK, and that you exit with Ctrl-A K — a sequence people genuinely reboot their laptop to escape.\n\nSSHive gives the serial console the same treatment as an SSH session: a profile, a tab, a scrollback, and a toolbar. Attached adapters are listed by name, so you pick `usbserial-14210` from a menu instead of guessing at a device path. Baud rate, data bits, parity, stop bits and flow control are fields, not command-line arguments. The tab header shows the port and the speed, which matters more than it sounds when you have three consoles open and one of them is the firewall.\n\nSpeeds run from 1200 to 230400 baud, with 9600 as the default because that is what almost every console port still ships with. Data bits, parity and stop bits default to the universal 8-N-1, and flow control can be none, RTS/CTS or XON/XOFF. A BREAK button sits in the toolbar: many switches and routers want exactly that signal to drop into ROMMON or a password-recovery prompt, and it is not something a terminal emulator can fake with a keystroke.\n\nIf the baud rate is wrong you will see noise rather than a frozen window, and the session survives it — the byte stream is decoded in a way that tolerates a multi-byte character split across two reads instead of collapsing into replacement characters. Unplugging the adapter releases the port cleanly, so working through several adapters in one sitting does not poison the connections that follow. Pasting a long configuration does not suspend the app, whatever its length and whatever the line speed.\n\nOne detail worth stating because it is unusual: this runs in the Mac App Store build. Opening a `/dev/cu.*` device inside the App Sandbox requires `com.apple.security.device.serial`, an entitlement Apple declares in its own sandbox profile alongside camera and USB access. Enumeration works without it and opening does not, which is a failure mode worth recognising: if a serial app lists your ports but none of them ever open, that entitlement is what is missing.',
      fr: 'Tout ingénieur réseau connaît ce moment : le commutateur est injoignable, le VLAN de management est précisément ce que vous venez de casser, et la seule voie d\'entrée est le câble bleu clair au fond du sac. Sous Windows, cela veut dire PuTTY, qui affiche un bouton radio « Serial » sur sa page d\'accueil depuis 1999. Sur un Mac, cela voulait dire `screen /dev/cu.usbserial-XXXX 9600` : une commande que l\'on recherche à chaque fois, qui ne dit pas si le port s\'est ouvert, qui n\'enregistre rien, qui ne sait pas envoyer de BREAK, et dont on sort par Ctrl-A K — une séquence pour laquelle des gens redémarrent réellement leur portable.\n\nSSHive traite la console série comme une session SSH : un profil, un onglet, un historique et une barre d\'outils. Les adaptateurs branchés sont listés par leur nom, vous choisissez donc `usbserial-14210` dans un menu au lieu de deviner un chemin de périphérique. Débit, bits de données, parité, bits d\'arrêt et contrôle de flux sont des champs, pas des arguments de ligne de commande. L\'en-tête de l\'onglet affiche le port et la vitesse, ce qui compte plus qu\'il n\'y paraît quand trois consoles sont ouvertes et que l\'une d\'elles est le pare-feu.\n\nLes vitesses vont de 1200 à 230400 bauds, avec 9600 par défaut, puisque c\'est encore le réglage de presque tous les ports console. Bits de données, parité et bits d\'arrêt sont par défaut sur l\'universel 8-N-1, et le contrôle de flux peut être absent, RTS/CTS ou XON/XOFF. Un bouton BREAK figure dans la barre d\'outils : beaucoup de commutateurs et de routeurs attendent exactement ce signal pour basculer en ROMMON ou en récupération de mot de passe, et ce n\'est pas quelque chose qu\'un émulateur de terminal peut simuler par une frappe.\n\nSi le débit est mal réglé, vous verrez du bruit plutôt qu\'une fenêtre figée, et la session y survit : le flux d\'octets est décodé de façon à tolérer un caractère multi-octets coupé entre deux lectures, au lieu de s\'effondrer en caractères de remplacement. Débrancher l\'adaptateur libère proprement le port : enchaîner plusieurs adaptateurs au cours d\'une même séance n\'empoisonne pas les connexions suivantes. Coller une configuration longue ne suspend pas l\'application, quelles que soient sa taille et la vitesse de la ligne.\n\nUn détail mérite d\'être dit parce qu\'il est inhabituel : tout cela fonctionne dans la version Mac App Store. Ouvrir un périphérique `/dev/cu.*` sous le bac à sable exige `com.apple.security.device.serial`, un entitlement qu\'Apple déclare dans son propre profil de bac à sable au même rang que l\'accès à la caméra et à l\'USB. L\'énumération fonctionne sans lui, l\'ouverture non — un mode de défaillance qu\'il vaut la peine de reconnaître : si une application série liste vos ports mais qu\'aucun ne s\'ouvre jamais, c\'est cet entitlement qui manque.',
    },
    useCasesHeading: { en: 'When the console cable is the only way in', fr: 'Quand le câble console est la seule entrée' },
    useCases: [
      {
        title: { en: 'Switch and router recovery', fr: 'Récupération de commutateur et de routeur' },
        description: {
          en: 'A bad VLAN change, a fat-fingered ACL, a firmware upgrade that did not come back. The console port does not care about the network configuration, which is exactly why it exists. Send a BREAK during boot to reach ROMMON or the password-recovery prompt, then paste the corrected configuration back in one go.',
          fr: 'Un changement de VLAN malheureux, une ACL mal saisie, une mise à jour de firmware qui n\'est pas revenue. Le port console se moque de la configuration réseau, et c\'est précisément sa raison d\'être. Envoyez un BREAK pendant le démarrage pour atteindre ROMMON ou l\'invite de récupération de mot de passe, puis recollez la configuration corrigée d\'un seul bloc.',
        },
      },
      {
        title: { en: 'First boot of new equipment', fr: 'Première mise en service d\'un équipement' },
        description: {
          en: 'A switch out of its box has no IP address and no SSH daemon. Everything before the first `ip address` line happens over serial. Save the port and speed in a profile once, and every subsequent unit of the same model is one click rather than a rediscovered command.',
          fr: 'Un commutateur sorti du carton n\'a ni adresse IP ni démon SSH. Tout ce qui précède la première ligne `ip address` passe par la liaison série. Enregistrez le port et la vitesse dans un profil une fois, et chaque unité suivante du même modèle devient un clic plutôt qu\'une commande à retrouver.',
        },
      },
      {
        title: { en: 'Embedded boards and single-board computers', fr: 'Cartes embarquées et ordinateurs monocartes' },
        description: {
          en: 'A Raspberry Pi that will not finish booting, an ESP32 printing to its UART, a board whose bootloader only speaks over the serial header. The console shows you the kernel messages that never reach a log file, which is the difference between a diagnosis and a reflash.',
          fr: 'Un Raspberry Pi qui ne termine pas son démarrage, un ESP32 qui écrit sur son UART, une carte dont le bootloader ne parle que par le connecteur série. La console vous montre les messages noyau qui n\'atteignent jamais un fichier de log — la différence entre un diagnostic et un reflashage.',
        },
      },
    ],
    faqHeading: { en: 'Serial console, frequently asked questions', fr: 'Console série, questions fréquentes' },
    faq: [
      {
        question: { en: 'Is this a PuTTY replacement for serial on the Mac?', fr: 'Est-ce un remplaçant de PuTTY pour la série sur Mac ?' },
        answer: {
          en: 'For the serial half, yes, and that is the half PuTTY is most often installed for on a Mac. You get port selection by name, baud rate from 1200 to 230400, 8-N-1 and every other combination of data bits, parity and stop bits, RTS/CTS and XON/XOFF flow control, and a BREAK signal. What you also get, which PuTTY does not offer, is the same window holding your SSH sessions: the switch you just recovered over serial is a tab away from the jump host you reach it through afterwards.',
          fr: 'Pour la partie série, oui — et c\'est justement pour cette partie que PuTTY est le plus souvent installé sur un Mac. Vous avez la sélection du port par son nom, des débits de 1200 à 230400, le 8-N-1 et toutes les autres combinaisons de bits de données, parité et bits d\'arrêt, le contrôle de flux RTS/CTS et XON/XOFF, et un signal BREAK. Ce que vous avez en plus, et que PuTTY n\'offre pas, c\'est la même fenêtre que vos sessions SSH : le commutateur que vous venez de récupérer en série est à un onglet du rebond par lequel vous l\'atteindrez ensuite.',
        },
      },
      {
        question: { en: 'Why not just use screen /dev/cu.usbserial?', fr: 'Pourquoi ne pas simplement utiliser screen /dev/cu.usbserial ?' },
        answer: {
          en: 'It works, and it is what most people on a Mac have been doing. The friction is everywhere else: you have to find the device path yourself, the baud rate is a positional argument, nothing tells you whether the port actually opened, there is no scrollback worth the name, no way to send a BREAK, no logging, and the exit sequence is Ctrl-A K. A stale session can also hold the device open and leave the next connection failing for no visible reason. None of that is a reason screen is bad; it is a reason a console session deserves an interface.',
          fr: 'Cela fonctionne, et c\'est ce que la plupart des gens font sur Mac. La friction est ailleurs : il faut trouver le chemin du périphérique soi-même, le débit est un argument positionnel, rien ne vous dit si le port s\'est réellement ouvert, il n\'y a pas d\'historique digne de ce nom, aucun moyen d\'envoyer un BREAK, aucun enregistrement, et la séquence de sortie est Ctrl-A K. Une session restée ouverte peut en plus garder le périphérique verrouillé et faire échouer la connexion suivante sans raison visible. Rien de tout cela ne condamne screen ; cela dit simplement qu\'une session console mérite une interface.',
        },
      },
      {
        question: { en: 'Does the serial console work in the Mac App Store version?', fr: 'La console série fonctionne-t-elle dans la version Mac App Store ?' },
        answer: {
          en: 'Yes. It needs the `com.apple.security.device.serial` entitlement, which authorises opening TTY devices — Apple lists it in its own sandbox profile next to camera and USB access, so it is a normal capability rather than a temporary exception. One measured subtlety: without that entitlement, enumerating `/dev/cu.*` still succeeds while opening a port fails with EPERM. If any serial app ever shows you a list of ports where none of them will open, that is what has gone missing.',
          fr: 'Oui. Elle requiert l\'entitlement `com.apple.security.device.serial`, qui autorise l\'ouverture des périphériques TTY — Apple le déclare dans son propre profil de bac à sable, au même rang que l\'accès à la caméra et à l\'USB : c\'est donc une capacité normale, pas une exception temporaire. Une subtilité mesurée : sans cet entitlement, l\'énumération de `/dev/cu.*` réussit encore alors que l\'ouverture d\'un port échoue en EPERM. Si une application série vous affiche un jour une liste de ports dont aucun ne s\'ouvre, c\'est cela qui manque.',
        },
      },
      {
        question: { en: 'Which USB-to-serial adapters are supported?', fr: 'Quels adaptateurs USB vers série sont pris en charge ?' },
        answer: {
          en: 'Any adapter that macOS itself recognises, because SSHive opens the `/dev/cu.*` device the system creates rather than talking to the chipset. FTDI and Prolific chips are handled by macOS out of the box; some cheaper CH340/CH341 clones still want the vendor driver. If the adapter appears in the port list, it will open.',
          fr: 'Tout adaptateur que macOS reconnaît lui-même, car SSHive ouvre le périphérique `/dev/cu.*` créé par le système plutôt que de parler au circuit. Les puces FTDI et Prolific sont gérées nativement par macOS ; certains clones CH340/CH341 bon marché réclament encore le pilote du fabricant. Si l\'adaptateur apparaît dans la liste des ports, il s\'ouvrira.',
        },
      },
      {
        question: { en: 'Is the serial console available on iPhone and iPad?', fr: 'La console série est-elle disponible sur iPhone et iPad ?' },
        answer: {
          en: 'No. It is a macOS feature. iOS has no equivalent of the `/dev/cu.*` device layer available to third-party apps, and the serial console is not offered on iPhone or iPad — we would rather say so than ship a screen that cannot work.',
          fr: 'Non. C\'est une fonctionnalité macOS. iOS n\'offre aux applications tierces aucun équivalent de la couche de périphériques `/dev/cu.*`, et la console série n\'est donc pas proposée sur iPhone ni iPad — nous préférons le dire plutôt que de livrer un écran qui ne peut pas fonctionner.',
        },
      },
      {
        question: { en: 'Is it free, or does it need Pro?', fr: 'Est-ce gratuit, ou faut-il Pro ?' },
        answer: {
          en: 'The serial console itself is free, including BREAK, every baud rate and every framing option, and a serial session does not count against the free tier\'s two-session limit, which counts SSH sessions. Session logging — writing the port output to a file with timestamps — is part of Pro, as it is for SSH sessions.',
          fr: 'La console série elle-même est gratuite, BREAK compris, avec tous les débits et toutes les options de trame, et une session série ne compte pas dans la limite de deux sessions du gratuit, qui porte sur les sessions SSH. L\'enregistrement de session — l\'écriture de la sortie du port dans un fichier horodaté — fait partie de Pro, comme pour les sessions SSH.',
        },
      },
    ],
    relatedFeatures: ['telnet', 'ssh', 'snippets'],
    relatedUseCases: ['raspberry-pi'],
  },
  telnet: {
    intro: {
      en: 'Apple removed the telnet command from macOS in High Sierra, in 2017. On a current Mac, `which telnet` returns nothing unless you installed it yourself from Homebrew or MacPorts. The reasoning was sound — Telnet sends everything, passwords included, in the clear — but the equipment did not disappear along with the binary. Console servers, PDUs, KVM switches, older managed switches, building-automation controllers and a great deal of industrial hardware still speak Telnet and nothing else, and someone has to administer them.\n\nSSHive ships a Telnet client built to RFC 854 rather than shelling out to a binary that is no longer there. It opens a TCP connection, negotiates the three options that actually matter in practice — ECHO, Suppress Go Ahead, and Negotiate About Window Size — and escapes IAC bytes in your keystrokes so that a literal 0xFF in what you type is never mistaken for a command. Because NAWS is negotiated, resizing the window tells the remote side, and full-screen tools like a menu-driven switch configurator stop drawing themselves at the wrong size.\n\nA Telnet session behaves like every other session in the app. It gets a profile with a host, a port and optional credentials, a tab you can rename, a searchable scrollback, and the same quick-command library your SSH sessions use. Tabs are restored when you reopen the app. The app lock disconnects Telnet sessions along with everything else when it engages.\n\nWhat SSHive will not do is pretend the protocol is safe. A Telnet session is marked as unencrypted in the interface, because the honest description of what is happening is that your password crosses the network as readable text. That is a fact about Telnet, not about the client, and the right answer when you have a choice is SSH. The reason to have a Telnet client at all is the equipment that gives you no choice.\n\nTelnet is a macOS feature. It needs nothing more than an outbound TCP connection, so there is no entitlement question and no difference between the Mac App Store build and the direct download — but the iPhone and iPad apps do not implement it. A Telnet profile synced from your Mac shows up there marked as unsupported, rather than offering a Connect button that would open an SSH session against a server that does not speak SSH.',
      fr: 'Apple a retiré la commande telnet de macOS avec High Sierra, en 2017. Sur un Mac actuel, `which telnet` ne renvoie rien, sauf si vous l\'avez installée vous-même depuis Homebrew ou MacPorts. Le raisonnement était fondé — Telnet transmet tout en clair, mots de passe compris — mais les équipements n\'ont pas disparu avec le binaire. Serveurs de console, PDU, commutateurs KVM, commutateurs administrables anciens, automates de gestion technique de bâtiment et une grande partie du matériel industriel parlent encore Telnet et rien d\'autre, et il faut bien que quelqu\'un les administre.\n\nSSHive embarque un client Telnet écrit d\'après la RFC 854 plutôt que de déléguer à un binaire qui n\'existe plus. Il ouvre une connexion TCP, négocie les trois options qui comptent réellement en pratique — ECHO, Suppress Go Ahead et Negotiate About Window Size — et échappe les octets IAC de vos frappes, pour qu\'un 0xFF littéral dans ce que vous tapez ne soit jamais pris pour une commande. Comme NAWS est négocié, redimensionner la fenêtre en informe l\'hôte distant, et les outils plein écran — un configurateur de commutateur à menus, par exemple — cessent de se dessiner à la mauvaise taille.\n\nUne session Telnet se comporte comme toutes les autres dans l\'application. Elle a un profil avec un hôte, un port et des identifiants optionnels, un onglet renommable, un historique consultable, et la même bibliothèque de commandes rapides que vos sessions SSH. Les onglets sont restaurés à la réouverture. Le verrouillage de l\'application coupe les sessions Telnet en même temps que le reste.\n\nCe que SSHive ne fera pas, c\'est prétendre que le protocole est sûr. Une session Telnet est signalée comme non chiffrée dans l\'interface, parce que la description honnête de ce qui se passe est que votre mot de passe traverse le réseau en texte lisible. C\'est un fait sur Telnet, pas sur le client, et la bonne réponse quand vous avez le choix est SSH. La raison d\'avoir un client Telnet, c\'est justement l\'équipement qui ne vous laisse pas le choix.\n\nTelnet est une fonctionnalité macOS. Il n\'exige rien de plus qu\'une connexion TCP sortante : aucune question d\'entitlement, et aucune différence entre la version Mac App Store et le téléchargement direct — mais les applications iPhone et iPad ne l\'implémentent pas. Un profil Telnet synchronisé depuis votre Mac y apparaît signalé comme non pris en charge, plutôt que d\'afficher un bouton « Se connecter » qui ouvrirait une session SSH vers un serveur qui ne parle pas SSH.',
    },
    useCasesHeading: { en: 'Where Telnet is still the only option', fr: 'Là où Telnet reste la seule option' },
    useCases: [
      {
        title: { en: 'Console servers and out-of-band access', fr: 'Serveurs de console et accès hors bande' },
        description: {
          en: 'Terminal servers from Lantronix, Digi, Opengear and their peers expose each attached serial port as a TCP port you reach over Telnet. One connection per console, addressed by port number. It is how you reach a rack of console cables from somewhere that is not the rack.',
          fr: 'Les serveurs de terminaux Lantronix, Digi, Opengear et consorts exposent chaque port série rattaché comme un port TCP joignable en Telnet. Une connexion par console, adressée par son numéro de port. C\'est ainsi que l\'on atteint une baie entière de câbles console depuis un endroit qui n\'est pas la baie.',
        },
      },
      {
        title: { en: 'PDUs, KVMs and older managed switches', fr: 'PDU, KVM et commutateurs administrables anciens' },
        description: {
          en: 'Power distribution units and KVM switches are replaced on a fifteen-year cycle, and plenty of installed units predate usable SSH support. The same is true of managed switches still doing their job perfectly at the edge of a network. Telnet on a management VLAN is how they are configured.',
          fr: 'Les unités de distribution électrique et les commutateurs KVM se renouvellent sur des cycles de quinze ans, et bien des unités installées sont antérieures à un support SSH utilisable. Il en va de même de commutateurs administrables qui font encore parfaitement leur travail en bordure de réseau. Telnet sur un VLAN de management est la façon dont on les configure.',
        },
      },
      {
        title: { en: 'Protocol debugging by hand', fr: 'Déboguer un protocole à la main' },
        description: {
          en: 'Talking to an SMTP server on port 25, a Redis instance on 6379 or an HTTP server on 80 by typing the protocol yourself is still one of the fastest ways to find out what a service actually answers. A raw TCP terminal is the tool for that, and it is the one macOS stopped shipping.',
          fr: 'Parler à un serveur SMTP sur le port 25, à une instance Redis sur 6379 ou à un serveur HTTP sur 80 en tapant soi-même le protocole reste l\'un des moyens les plus rapides de découvrir ce qu\'un service répond vraiment. Un terminal TCP brut est l\'outil de cela, et c\'est celui que macOS a cessé de livrer.',
        },
      },
    ],
    faqHeading: { en: 'Telnet, frequently asked questions', fr: 'Telnet, questions fréquentes' },
    faq: [
      {
        question: { en: 'Why is there no telnet command on my Mac any more?', fr: 'Pourquoi n\'y a-t-il plus de commande telnet sur mon Mac ?' },
        answer: {
          en: 'Apple removed both telnet and ftp from macOS in High Sierra, 10.13, in 2017, on the grounds that neither encrypts anything. They have not come back in any release since. You can reinstall telnet from Homebrew or MacPorts, and plenty of people do, but it is no longer part of the operating system. SSHive implements the protocol itself rather than depending on a binary that may or may not be present.',
          fr: 'Apple a retiré telnet et ftp de macOS avec High Sierra, 10.13, en 2017, au motif qu\'aucun des deux ne chiffre quoi que ce soit. Ils ne sont revenus dans aucune version depuis. Vous pouvez réinstaller telnet depuis Homebrew ou MacPorts, et beaucoup le font, mais il ne fait plus partie du système. SSHive implémente le protocole lui-même plutôt que de dépendre d\'un binaire qui peut être absent.',
        },
      },
      {
        question: { en: 'Is Telnet secure?', fr: 'Telnet est-il sécurisé ?' },
        answer: {
          en: 'No, and no client can make it so. Telnet has no encryption: the username, the password and everything typed afterwards travel as readable text, and anyone positioned on the path can read them. SSHive labels Telnet sessions as unencrypted for that reason. Use SSH wherever the equipment supports it. Where it does not, keep Telnet on an isolated management network and never across the internet — if you must cross an untrusted link, put an SSH tunnel under it, which SSHive can also do.',
          fr: 'Non, et aucun client ne peut y remédier. Telnet ne chiffre rien : l\'identifiant, le mot de passe et tout ce qui est tapé ensuite circulent en texte lisible, et quiconque se trouve sur le trajet peut les lire. C\'est la raison pour laquelle SSHive signale les sessions Telnet comme non chiffrées. Utilisez SSH partout où l\'équipement le permet. Là où il ne le permet pas, gardez Telnet sur un réseau de management isolé et jamais à travers internet — s\'il faut franchir un lien non fiable, glissez un tunnel SSH dessous, ce que SSHive sait également faire.',
        },
      },
      {
        question: { en: 'Does window resizing work?', fr: 'Le redimensionnement de la fenêtre fonctionne-t-il ?' },
        answer: {
          en: 'Yes. SSHive negotiates NAWS, the Negotiate About Window Size option, so the remote side is told the terminal dimensions and is told again when you resize. That is what keeps a full-screen, menu-driven configuration tool from drawing itself into the wrong corner of the window. ECHO and Suppress Go Ahead are negotiated too, which is what makes typing feel like a terminal rather than a line-at-a-time form.',
          fr: 'Oui. SSHive négocie NAWS, l\'option Negotiate About Window Size : l\'hôte distant reçoit les dimensions du terminal, et les reçoit à nouveau quand vous redimensionnez. C\'est ce qui évite qu\'un outil de configuration plein écran à menus se dessine dans le mauvais coin de la fenêtre. ECHO et Suppress Go Ahead sont également négociés, et c\'est ce qui donne à la frappe le comportement d\'un terminal plutôt que celui d\'un formulaire ligne à ligne.',
        },
      },
      {
        question: { en: 'Can I use Telnet on iPhone and iPad?', fr: 'Puis-je utiliser Telnet sur iPhone et iPad ?' },
        answer: {
          en: 'No. Telnet is implemented on macOS only. Your profiles still sync, so a Telnet profile created on the Mac appears on the iPhone — but it is shown as an unsupported session type rather than given a Connect button. That is deliberate: the iOS model used to fall back to SSH for any type it did not recognise, which meant a Telnet profile arrived disguised as an SSH one and would have opened an SSH session against a server that does not speak SSH. Serial console profiles are handled the same way.',
          fr: 'Non. Telnet n\'est implémenté que sur macOS. Vos profils se synchronisent toujours, donc un profil Telnet créé sur le Mac apparaît sur l\'iPhone — mais il y est présenté comme un type de session non pris en charge, sans bouton « Se connecter ». C\'est délibéré : le modèle iOS retombait auparavant sur SSH pour tout type qu\'il ne reconnaissait pas, si bien qu\'un profil Telnet arrivait déguisé en profil SSH et aurait ouvert une session SSH vers un serveur qui ne parle pas SSH. Les profils de console série sont traités de la même façon.',
        },
      },
      {
        question: { en: 'Is Telnet free in SSHive?', fr: 'Telnet est-il gratuit dans SSHive ?' },
        answer: {
          en: 'Yes. The Telnet client is part of the free tier, alongside the SSH terminal, the file browser and the network tools, and the free tier\'s two-session limit counts SSH sessions rather than Telnet ones. The five-profile limit does apply to saved Telnet profiles.',
          fr: 'Oui. Le client Telnet fait partie de l\'offre gratuite, avec le terminal SSH, le navigateur de fichiers et les outils réseau, et la limite de deux sessions du gratuit compte les sessions SSH, pas les sessions Telnet. La limite de cinq profils, elle, s\'applique aux profils Telnet enregistrés.',
        },
      },
    ],
    relatedFeatures: ['serial', 'ssh', 'snippets'],
  },
  ftp: {
    intro: {
      en: 'Apple removed the ftp command from macOS in High Sierra, in 2017, at the same time as telnet and for the same reason: neither encrypts anything. On a current Mac, `which ftp` returns nothing. What did not go away is the servers — shared hosting that has offered FTP since 2004 and nothing since, NAS boxes, printers and scanners that drop files on an FTP target, industrial controllers, and the long tail of infrastructure where changing the transfer protocol means changing a contract.\n\nSSHive speaks FTP and FTPS in the same dual-pane file browser it uses for SFTP. That is deliberate: the protocol is a property of the connection profile, not of the interface. Drag and drop, folder upload and download, rename, delete, create directory, remote search and the conflict dialog with replace, keep both and skip all behave identically whether the session underneath is SFTP on port 22 or FTPS on port 21. You do not learn a second file manager because the server is older.\n\nFTPS here means explicit FTPS — AUTH TLS — which upgrades the control connection to TLS after connecting on the normal port. It is the variant nearly every hosting provider supports, and it is what you should use whenever the server offers it, because plain FTP sends the password in the clear exactly as Telnet does. SSHive marks a plain FTP session as unencrypted so the choice is visible rather than implicit.\n\nOne limitation is stated here rather than buried: SSHive does not currently verify the FTPS server certificate. The connection is encrypted, which defeats passive eavesdropping, but a self-signed or mismatched certificate is accepted without a warning, so it does not defend against an active machine-in-the-middle. If that matters for your threat model, SFTP over SSH is the protocol to use, and it verifies host keys properly.\n\nThere is one behavioural difference from SFTP worth knowing. FTP servers handle a single data transfer per control connection, and this is not a theoretical constraint: measured against a real server, a sequential listing returns its 22 and then its 389 entries correctly, while two listings started at once fail. SSHive therefore serialises operations within a session instead of firing them in parallel. Large folder downloads and recursive operations still work; they queue rather than race.\n\nDownloads land in your Downloads folder, written as a partial file and renamed on completion, which is also what makes the Retry button work after the app has been restarted. The whole thing is pure TCP and TLS, so it runs unchanged in the Mac App Store build.',
      fr: 'Apple a retiré la commande ftp de macOS avec High Sierra, en 2017, en même temps que telnet et pour la même raison : aucun des deux ne chiffre quoi que ce soit. Sur un Mac actuel, `which ftp` ne renvoie rien. Ce qui n\'a pas disparu, ce sont les serveurs — hébergements mutualisés qui proposent du FTP depuis 2004 et rien d\'autre depuis, NAS, imprimantes et scanners qui déposent des fichiers sur une cible FTP, automates industriels, et toute la longue traîne d\'infrastructures où changer de protocole de transfert signifie changer de contrat.\n\nSSHive parle FTP et FTPS dans le même navigateur de fichiers à deux volets que le SFTP. C\'est délibéré : le protocole est une propriété du profil de connexion, pas de l\'interface. Glisser-déposer, envoi et téléchargement de dossiers entiers, renommer, supprimer, créer un dossier, recherche distante et boîte de dialogue de conflit avec remplacer, conserver les deux et ignorer se comportent à l\'identique, que la session repose sur du SFTP en port 22 ou du FTPS en port 21. Vous n\'apprenez pas un second gestionnaire de fichiers parce que le serveur est plus ancien.\n\nFTPS désigne ici le FTPS explicite — AUTH TLS — qui bascule la connexion de contrôle en TLS après s\'être connecté sur le port habituel. C\'est la variante que presque tous les hébergeurs prennent en charge, et celle qu\'il faut utiliser dès que le serveur la propose, car le FTP simple transmet le mot de passe en clair exactement comme Telnet. SSHive signale une session FTP simple comme non chiffrée, pour que le choix soit visible plutôt qu\'implicite.\n\nUne limite est énoncée ici plutôt que dissimulée : SSHive ne vérifie pas actuellement le certificat du serveur FTPS. La connexion est chiffrée, ce qui met en échec une écoute passive, mais un certificat auto-signé ou incohérent est accepté sans avertissement : cela ne protège donc pas d\'un attaquant actif inséré sur le trajet. Si cela compte dans votre modèle de menace, le SFTP sur SSH est le protocole à employer, et lui vérifie correctement les clés d\'hôte.\n\nUne différence de comportement avec le SFTP mérite d\'être connue. Les serveurs FTP traitent un seul transfert de données par connexion de contrôle, et ce n\'est pas une contrainte théorique : mesuré contre un vrai serveur, un listage séquentiel rend correctement ses 22 puis ses 389 entrées, tandis que deux listages lancés ensemble échouent. SSHive sérialise donc les opérations au sein d\'une session au lieu de les lancer en parallèle. Les téléchargements de gros dossiers et les opérations récursives fonctionnent toujours ; ils s\'enchaînent au lieu de se percuter.\n\nLes téléchargements arrivent dans votre dossier Téléchargements, écrits sous forme de fichier partiel puis renommés une fois terminés — c\'est aussi ce qui fait fonctionner le bouton Réessayer après un redémarrage de l\'application. L\'ensemble n\'est que du TCP et du TLS : il tourne donc sans changement dans la version Mac App Store.',
    },
    useCasesHeading: { en: 'Where FTP has not gone away', fr: 'Là où le FTP n\'a pas disparu' },
    useCases: [
      {
        title: { en: 'Shared hosting and legacy web servers', fr: 'Hébergement mutualisé et serveurs web anciens' },
        description: {
          en: 'A great many hosting plans still hand you FTP credentials and no SSH access at all. Deploying a site, fixing a stylesheet or pulling down a backup means FTP or FTPS, and on a Mac that has meant installing a separate client just for this one account.',
          fr: 'Beaucoup d\'offres d\'hébergement vous remettent encore des identifiants FTP et aucun accès SSH. Déployer un site, corriger une feuille de style ou récupérer une sauvegarde passe par le FTP ou le FTPS — et sur Mac, cela voulait dire installer un client séparé pour ce seul compte.',
        },
      },
      {
        title: { en: 'NAS boxes, printers and scanners', fr: 'NAS, imprimantes et scanners' },
        description: {
          en: 'Office hardware that scans to a folder usually does it over FTP, and the NAS receiving those files often exposes FTP alongside SMB. When a scan does not arrive, connecting to the same FTP target with the same credentials is the fastest way to find out whether the problem is the device, the path or the permissions.',
          fr: 'Le matériel de bureau qui numérise vers un dossier le fait généralement en FTP, et le NAS qui reçoit ces fichiers expose souvent du FTP à côté du SMB. Quand une numérisation n\'arrive pas, se connecter à la même cible FTP avec les mêmes identifiants est le moyen le plus rapide de savoir si le problème vient de l\'appareil, du chemin ou des droits.',
        },
      },
      {
        title: { en: 'Industrial and embedded equipment', fr: 'Équipements industriels et embarqués' },
        description: {
          en: 'Controllers, data loggers and machine vision systems frequently implement an FTP server and nothing else, because the stack was chosen fifteen years ago and certified that way. Retrieving a log or pushing a recipe file is an FTP job whether or not anyone would design it that way today.',
          fr: 'Automates, enregistreurs de données et systèmes de vision industrielle implémentent fréquemment un serveur FTP et rien d\'autre, parce que la pile a été choisie il y a quinze ans et certifiée ainsi. Récupérer un journal ou envoyer un fichier de recette est une tâche FTP, que l\'on conçoive encore les choses ainsi aujourd\'hui ou non.',
        },
      },
    ],
    faqHeading: { en: 'FTP and FTPS, frequently asked questions', fr: 'FTP et FTPS, questions fréquentes' },
    faq: [
      {
        question: { en: 'What is the difference between FTP, FTPS and SFTP?', fr: 'Quelle différence entre FTP, FTPS et SFTP ?' },
        answer: {
          en: 'FTP is the original protocol, from 1971, with a control connection and separate data connections, and no encryption anywhere. FTPS is that same protocol wrapped in TLS — explicit FTPS, which SSHive uses, connects normally and then issues AUTH TLS to upgrade. SFTP is unrelated despite the name: it is a subsystem of SSH, runs over a single encrypted connection on port 22, and verifies the server by its host key. If the server offers SFTP, prefer it. If it offers FTPS, use that rather than plain FTP. Plain FTP should be a last resort on a network you control.',
          fr: 'Le FTP est le protocole d\'origine, de 1971, avec une connexion de contrôle et des connexions de données séparées, et aucun chiffrement nulle part. Le FTPS est ce même protocole enveloppé dans du TLS — le FTPS explicite, celui qu\'utilise SSHive, se connecte normalement puis envoie AUTH TLS pour basculer. Le SFTP n\'a aucun rapport malgré son nom : c\'est un sous-système de SSH, il passe par une seule connexion chiffrée sur le port 22 et vérifie le serveur par sa clé d\'hôte. Si le serveur propose du SFTP, préférez-le. S\'il propose du FTPS, utilisez-le plutôt que du FTP simple. Le FTP simple devrait rester un dernier recours, sur un réseau que vous maîtrisez.',
        },
      },
      {
        question: { en: 'Does SSHive verify the FTPS certificate?', fr: 'SSHive vérifie-t-il le certificat FTPS ?' },
        answer: {
          en: 'No, not at present, and it is worth being explicit about what that means. The TLS session encrypts the traffic, so someone merely listening on the network learns nothing. But because a self-signed or mismatched certificate is accepted without a prompt, an attacker able to intercept and answer the connection could present their own certificate and be believed. For transfers where that matters, use SFTP over SSH, where SSHive does verify the host key and warns you when it changes. RDP connections are certificate-pinned in the same way; FTPS is the one place this is still outstanding.',
          fr: 'Non, pas actuellement, et il vaut la peine d\'être explicite sur ce que cela implique. La session TLS chiffre le trafic : quelqu\'un qui se contente d\'écouter le réseau n\'apprend rien. Mais comme un certificat auto-signé ou incohérent est accepté sans invite, un attaquant capable d\'intercepter et de répondre à la connexion pourrait présenter son propre certificat et être cru. Pour les transferts où cela compte, utilisez le SFTP sur SSH : SSHive y vérifie la clé d\'hôte et vous alerte si elle change. Les connexions RDP sont épinglées de la même façon ; le FTPS est le seul endroit où cela reste à faire.',
        },
      },
      {
        question: { en: 'Why does a large folder transfer feel sequential?', fr: 'Pourquoi un gros transfert de dossier semble-t-il séquentiel ?' },
        answer: {
          en: 'Because it is, and on purpose. An FTP control connection handles one data transfer at a time; that was verified against a real server, where a sequential listing returned its 22 and then its 389 entries correctly while two concurrent listings failed. Rather than let a drag-and-drop of many files race and produce confusing errors, SSHive queues the operations within a session. SFTP has no such constraint and is not serialised the same way.',
          fr: 'Parce qu\'il l\'est, et volontairement. Une connexion de contrôle FTP ne gère qu\'un transfert de données à la fois ; cela a été vérifié contre un vrai serveur, où un listage séquentiel rendait correctement ses 22 puis ses 389 entrées, tandis que deux listages simultanés échouaient. Plutôt que de laisser un glisser-déposer de nombreux fichiers se percuter et produire des erreurs incompréhensibles, SSHive met les opérations en file au sein d\'une session. Le SFTP n\'a pas cette contrainte et n\'est pas sérialisé de la même façon.',
        },
      },
      {
        question: { en: 'Is FTP free, or does it need Pro?', fr: 'Le FTP est-il gratuit, ou faut-il Pro ?' },
        answer: {
          en: 'Browsing, downloading and managing remote files over FTP and FTPS is in the free tier. Uploads are where the free limit applies: files above 10 MB need Pro, exactly as they do for SFTP, because the two protocols share the same transfer path. The free tier\'s profile and session counts apply as usual.',
          fr: 'Parcourir, télécharger et gérer des fichiers distants en FTP et FTPS fait partie de l\'offre gratuite. C\'est sur l\'envoi que la limite s\'applique : au-delà de 10 Mo par fichier, il faut Pro — exactement comme pour le SFTP, les deux protocoles partageant le même chemin de transfert. Les limites de profils et de sessions du gratuit s\'appliquent comme d\'habitude.',
        },
      },
      {
        question: { en: 'Is FTP available on iPhone and iPad?', fr: 'Le FTP est-il disponible sur iPhone et iPad ?' },
        answer: {
          en: 'No. FTP and FTPS are macOS features. The iOS and iPadOS apps handle file transfer over SFTP, with downloads that can be saved to the Files app or shared straight from the app.',
          fr: 'Non. Le FTP et le FTPS sont des fonctionnalités macOS. Les applications iOS et iPadOS gèrent le transfert de fichiers en SFTP, avec des téléchargements qui peuvent être enregistrés dans l\'app Fichiers ou partagés directement.',
        },
      },
    ],
    relatedFeatures: ['sftp', 'ssh', 'telnet'],
  },
  snippets: {
    intro: {
      en: 'Every sysadmin has a `~/scripts/` folder full of one-liners they wrote 4 years ago and now copy-paste into every terminal. Quick Commands (snippets) in SSHive give those one-liners a permanent home with a searchable UI. Out of the box, SSHive ships with 14 presets covering system inspection (`uname -a`, `top -b -n 1 | head -20`), network (`ss -tulpn`, `dig +short`), disk (`df -h`, `du -sh /var/log/*`), Docker (`docker ps -a`, `docker logs --tail 100 -f`), and Git (`git log --oneline -20`, `git status -sb`).\n\nYou create your own snippets, organize them in folders, search by name or tag. One click inserts the snippet into the active terminal, or, with broadcast on, into all of them. Snippets support placeholders like `{{port}}` or `{{path}}` that prompt for values before insertion, so a generic "tail this log" snippet works on any path. Your snippet library is portable: export to a JSON file, import on another Mac.',
      fr: 'Chaque sysadmin a un dossier `~/scripts/` rempli de one-liners ecrits il y a 4 ans et copies-colles dans chaque terminal. Quick Commands (snippets) dans SSHive donne a ces one-liners une maison permanente avec une UI cherchable. Out of the box, SSHive embarque 14 presets couvrant inspection système (`uname -a`, `top -b -n 1 | head -20`), réseau (`ss -tulpn`, `dig +short`), disque (`df -h`, `du -sh /var/log/*`), Docker (`docker ps -a`, `docker logs --tail 100 -f`), et Git (`git log --oneline -20`, `git status -sb`).\n\nVous créez vos snippets, les organisez en dossiers, cherchez par nom ou tag. Un clic insert le snippet dans le terminal actif, ou, broadcast active, dans tous. Les snippets supportent des placeholders genre `{{port}}` ou `{{path}}` qui demandent les valeurs avant insertion, donc un snippet generique "tail ce log" marche sur n\'importe quel chemin. Votre bibliothèque de snippets est portable : export en JSON, import sur un autre Mac.',
    },
    useCasesHeading: { en: 'Snippet workflows', fr: 'Workflows snippets' },
    useCases: [
      {
        title: { en: 'Onboarding new hires', fr: 'Onboarding des nouveaux' },
        description: {
          en: 'Export your team\'s blessed snippet library, share the JSON, every new hire imports it. Common ops (deploy, restart, status) become discoverable through the search instead of tribal knowledge.',
          fr: 'Exportez la bibliothèque de snippets benie de votre équipe, partagez le JSON, chaque nouveau l\'importe. Les opérations courantes (deploy, restart, status) deviennent decouvrables via la recherche au lieu d\'être du savoir tribal.',
        },
      },
      {
        title: { en: 'Quick log triage', fr: 'Triage de logs rapide' },
        description: {
          en: 'Snippets like "last 50 nginx errors", "auth failures today", "slow queries", one click each. Combine with broadcast for fleet-wide log analysis.',
          fr: 'Snippets type "50 dernières erreurs nginx", "échecs auth aujourd\'hui", "slow queries", un clic chacun. Combinez avec broadcast pour analyse de logs sur toute la flotte.',
        },
      },
      {
        title: { en: 'Standardize incident response', fr: 'Standardiser la réponse incident' },
        description: {
          en: 'Build a "first 60 seconds" snippet: load avg, disk space, top processes, recent error logs. Run it the moment a server alerts. Consistent triage data, every time.',
          fr: 'Construisez un snippet "60 premières secondes" : load avg, espace disque, top processus, logs d\'erreur recents. Lancez-le au moment ou un serveur alerte. Données de triage coherentes, a chaque fois.',
        },
      },
    ],
    faqHeading: { en: 'Snippets, frequently asked questions', fr: 'Snippets, questions frequentes' },
    faq: [
      {
        question: { en: 'Can snippets contain multi-line commands?', fr: 'Les snippets peuvent-ils contenir des commandes multi-ligne ?' },
        answer: {
          en: 'Yes. Multi-line snippets paste as-is into the terminal. For very long scripts, consider committing them to a Git repo on your servers and using a snippet to invoke them, keeps the snippet library lean.',
          fr: 'Oui. Les snippets multi-ligne se collent tels quels dans le terminal. Pour des scripts très longs, commit-les dans un repo Git sur vos serveurs et utilisez un snippet pour les invoquer, la bibliothèque reste legere.',
        },
      },
      {
        question: { en: 'Can I share snippets between Macs?', fr: 'Puis-je partager des snippets entre Macs ?' },
        answer: {
          en: 'Yes. Custom snippets live in `snippets.json` inside SSHive\'s data directory: copy that file to the other Mac, or keep it in iCloud Drive / Dropbox and symlink it into the data directory. The encrypted `.sshive` profile export covers profiles and credentials, not snippets.',
          fr: 'Oui. Les snippets personnalises vivent dans `snippets.json` dans le répertoire de données de SSHive : copiez ce fichier sur l\'autre Mac, ou gardez-le dans iCloud Drive / Dropbox et symlinkez-le dans le répertoire de donnees. L\'export chiffré `.sshive` couvre profils et credentials, pas les snippets.',
        },
      },
      {
        question: { en: 'Are snippets free?', fr: 'Les snippets sont-ils gratuits ?' },
        answer: {
          en: 'Yes, Quick Commands are included in the free tier with the 14 presets. Custom snippet creation works in free too. No artificial limits.',
          fr: 'Oui, Quick Commands est inclus en gratuit avec les 14 presets. La creation de snippets custom marche aussi en gratuit. Pas de limite artificielle.',
        },
      },
      {
        question: { en: 'Can I share a snippet with a teammate via a link?', fr: 'Puis-je partager un snippet avec un collegue via un lien ?' },
        answer: {
          en: 'Right-click any snippet, "Copy as URI", generates `sshive://snippet?...` that another SSHive install on macOS opens with a confirm dialog. Useful for one-off shares without exporting the whole library.',
          fr: 'Clic droit sur un snippet, "Copy as URI", génère `sshive://snippet?...` qu\'un autre SSHive sur macOS ouvre avec un dialogue de confirmation. Utile pour partage one-off sans exporter toute la bibliotheque.',
        },
      },
    ],
    relatedFeatures: ['broadcast', 'ssh', 'mcp'],
    relatedUseCases: ['developer-mac', 'kubernetes'],
    relatedHowTos: ['broadcast-commands-mac'],
  },
};

export function pickLocale<T>(value: { en: T; fr: T }, locale: Locale): T {
  return value[locale];
}
