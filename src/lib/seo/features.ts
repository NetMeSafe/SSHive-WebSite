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
      en: 'SSHive is a modern SSH client built specifically for Apple devices — Mac, iPhone, and iPad — designed to replace the patchwork of Terminal, third-party emulators, and command-line tools many developers and sysadmins juggle every day. On macOS, the terminal runs on xterm.js with WebGL rendering — the same engine VS Code uses — which means scrolling stays smooth even when a verbose `tail -f` floods the screen, and Unicode glyphs render correctly without falling back to the system font. On iOS and iPadOS, the SSH terminal is fully native and shares the same profiles you set up on your Mac. Authentication works with passwords, OpenSSH-format private keys, or a forwarded ssh-agent socket on macOS.\n\nWhere SSHive really shines is in everything around the terminal. Connection profiles save host, port, user, key, environment variables, working directory, and a list of commands to run on connect — connecting to a server is one click, not a `ssh user@host -p 2222 -i ~/.ssh/id_ed25519`. Jump hosts (ProxyJump) are a first-class feature: declare a bastion in the profile and SSHive handles the multi-hop SSH tunnel transparently. Automatic reconnection kicks in when you suspend your Mac and wake up at a coffee shop, so you do not lose your tmux state. Credentials are stored in the macOS Keychain (or iOS Keychain on iPhone/iPad) via Apple\'s safeStorage API in Electron — never written to disk in plaintext, never sent anywhere. macOS itself decides when to prompt for Touch ID or your password to unlock that Keychain entry, so a stolen Mac without your fingerprint is not a stolen server.',
      fr: 'SSHive est un client SSH moderne pense pour les appareils Apple — Mac, iPhone et iPad — concu pour remplacer le bric-a-brac de Terminal, d\'emulateurs tiers et d\'outils en ligne de commande que beaucoup de developpeurs et sysadmins jonglent au quotidien. Sur macOS, le terminal tourne sur xterm.js avec rendu WebGL — le meme moteur que VS Code — donc le defilement reste fluide meme quand un `tail -f` verbeux inonde l\'ecran, et les glyphes Unicode s\'affichent correctement sans retomber sur la police systeme. Sur iOS et iPadOS, le terminal SSH est entierement natif et partage les memes profils que vous configurez sur Mac. L\'authentification fonctionne par mot de passe, cle privee OpenSSH ou socket ssh-agent forwarded sur macOS.\n\nLa ou SSHive brille vraiment, c\'est tout ce qui entoure le terminal. Les profils de connexion sauvegardent host, port, user, cle, variables d\'environnement, repertoire de travail et la liste de commandes a executer a la connexion — se connecter devient un clic, plus un `ssh user@host -p 2222 -i ~/.ssh/id_ed25519`. Les jump hosts (ProxyJump) sont une fonctionnalite de premier ordre : declarez un bastion dans le profil et SSHive gere le tunnel SSH multi-saut de facon transparente. La reconnexion automatique prend le relais quand vous mettez votre Mac en veille et que vous le reveillez dans un cafe, vous ne perdez pas votre etat tmux. Les identifiants sont stockes dans le Trousseau macOS (ou iOS Keychain sur iPhone/iPad) via l\'API safeStorage d\'Electron — jamais ecrits en clair, jamais envoyes nulle part. macOS lui-meme decide quand demander Touch ID ou votre mot de passe pour deverrouiller cette entree du Trousseau, donc un Mac vole sans votre empreinte n\'est pas un serveur vole.',
    },
    useCasesHeading: { en: 'Common SSH workflows', fr: 'Workflows SSH typiques' },
    useCases: [
      {
        title: { en: 'Daily server administration', fr: 'Administration serveur quotidienne' },
        description: {
          en: 'Manage a fleet of Linux servers — production, staging, dev VMs, home lab — from one window. Tabs, profiles, broadcast mode, and saved snippets let you context-switch in milliseconds instead of typing connection strings from memory.',
          fr: 'Geez une flotte de serveurs Linux — production, staging, VMs dev, lab personnel — depuis une seule fenetre. Onglets, profils, broadcast et snippets sauvegardes permettent de changer de contexte en millisecondes au lieu de retaper des strings de connexion de memoire.',
        },
      },
      {
        title: { en: 'Bastion / jump host workflows', fr: 'Workflows bastion / jump host' },
        description: {
          en: 'Connect through a jump host to private subnets without editing `~/.ssh/config`. Define the bastion once, reuse it across dozens of profiles. Agent forwarding is supported, so your private key never leaves your Mac.',
          fr: 'Connectez-vous a travers un jump host vers des sous-reseaux prives sans editer `~/.ssh/config`. Definissez le bastion une fois, reutilisez-le sur des dizaines de profils. Agent forwarding supporte, donc votre cle privee ne quitte jamais votre Mac.',
        },
      },
      {
        title: { en: 'Cloud instances (AWS, GCP, Hetzner)', fr: 'Instances cloud (AWS, GCP, Hetzner)' },
        description: {
          en: 'Connect to EC2, Compute Engine, or Hetzner Cloud servers using PEM keys, ed25519 keys, or assumed-role IAM credentials forwarded through the agent. Per-profile keys mean no more accidentally using the wrong key on the wrong account.',
          fr: 'Connectez-vous a EC2, Compute Engine ou Hetzner Cloud avec des cles PEM, ed25519 ou identifiants IAM assumes forwarded via l\'agent. Cle par profil = jamais d\'utilisation accidentelle de la mauvaise cle sur le mauvais compte.',
        },
      },
    ],
    faqHeading: { en: 'SSH terminal — frequently asked questions', fr: 'Terminal SSH — questions frequentes' },
    faq: [
      {
        question: { en: 'Does SSHive support OpenSSH config files?', fr: 'SSHive supporte-t-il les fichiers de config OpenSSH ?' },
        answer: {
          en: 'Yes. The connection dialog has an "Import from ~/.ssh/config" button that parses every Host entry and creates a SSHive profile for it, including ProxyJump, IdentityFile, Port, and User directives. You can re-import after editing your config — duplicates are detected by hostname.',
          fr: 'Oui. Le dialogue de connexion a un bouton "Importer depuis ~/.ssh/config" qui parse chaque entree Host et cree un profil SSHive correspondant, incluant les directives ProxyJump, IdentityFile, Port et User. Vous pouvez reimporter apres edition — les doublons sont detectes par hostname.',
        },
      },
      {
        question: { en: 'What SSH key formats are supported?', fr: 'Quels formats de cles SSH sont supportes ?' },
        answer: {
          en: 'OpenSSH format (RSA, DSA, ECDSA, Ed25519). Encrypted keys are supported — the passphrase is requested once and cached in the macOS Keychain via Electron\'s safeStorage API.',
          fr: 'Format OpenSSH (RSA, DSA, ECDSA, Ed25519). Les cles chiffrees sont supportees — la passphrase est demandee une fois puis mise en cache dans le Trousseau macOS via l\'API safeStorage d\'Electron.',
        },
      },
      {
        question: { en: 'Is SSHive faster than the built-in macOS Terminal?', fr: 'SSHive est-il plus rapide que le Terminal macOS integre ?' },
        answer: {
          en: 'For raw terminal rendering, yes — xterm.js with WebGL outperforms macOS Terminal on long output (think building a kernel or running `find /`) because it pushes glyphs to the GPU. For interactive shell latency, both are network-bound, so the difference is unnoticeable. iTerm2 with Metal renderer is in the same ballpark.',
          fr: 'Pour le rendu pur du terminal, oui — xterm.js avec WebGL devance le Terminal macOS sur les sorties longues (genre compiler un noyau ou lancer `find /`) car il pousse les glyphes au GPU. Pour la latence shell interactive, les deux sont limites par le reseau, donc la difference est imperceptible. iTerm2 avec rendu Metal est du meme ordre.',
        },
      },
      {
        question: { en: 'Can I use my ssh-agent with SSHive?', fr: 'Puis-je utiliser mon ssh-agent avec SSHive ?' },
        answer: {
          en: 'Yes (on macOS). SSHive reads the SSH_AUTH_SOCK environment variable on launch. If you use 1Password\'s SSH agent, gpg-agent, or Apple\'s built-in keychain SSH integration, those keys are available immediately. Per-profile setting: "Forward agent" tickbox enables agent forwarding for jump host workflows.',
          fr: 'Oui (sur macOS). SSHive lit la variable d\'environnement SSH_AUTH_SOCK au lancement. Si vous utilisez l\'agent SSH de 1Password, gpg-agent ou l\'integration Trousseau d\'Apple, ces cles sont disponibles immediatement. Reglage par profil : la case "Forward agent" active l\'agent forwarding pour les workflows jump host.',
        },
      },
      {
        question: { en: 'Does SSHive support Touch ID for SSH connections?', fr: 'SSHive supporte-t-il Touch ID pour les connexions SSH ?' },
        answer: {
          en: 'Yes. SSHive uses Touch ID to unlock the credentials stored in the macOS Keychain when you connect to a saved profile. The fingerprint check happens at the OS level — SSHive never sees your fingerprint data. If Touch ID is unavailable (Mac without sensor, or iPhone/iPad), it falls back to your account password or device passcode.',
          fr: 'Oui. SSHive utilise Touch ID pour deverrouiller les identifiants stockes dans le Trousseau macOS lors de la connexion a un profil sauvegarde. La verification d\'empreinte se passe au niveau de l\'OS — SSHive ne voit jamais vos donnees d\'empreinte. Si Touch ID est indisponible (Mac sans capteur, ou iPhone/iPad), repli sur le mot de passe de session ou le code d\'acces.',
        },
      },
      {
        question: { en: 'Does SSHive run on iPhone and iPad?', fr: 'SSHive tourne-t-il sur iPhone et iPad ?' },
        answer: {
          en: 'Yes. SSHive ships an iPhone and iPad app on the App Store. The iOS version focuses on SSH terminal and SFTP file management — the Mac-specific features (RDP, VNC, SSH tunnels, broadcast, MCP server, snippet library) stay on macOS where they make sense. Profiles created on a Mac sync to your iOS devices, so a server you set up on your laptop is one tap away on your phone.',
          fr: 'Oui. SSHive a une app iPhone et iPad sur l\'App Store. La version iOS se concentre sur le terminal SSH et la gestion SFTP — les fonctionnalites specifiques Mac (RDP, VNC, tunnels SSH, broadcast, serveur MCP, bibliotheque de snippets) restent sur macOS la ou elles ont du sens. Les profils crees sur Mac se synchronisent sur vos appareils iOS, donc un serveur configure sur votre laptop est a un tap pres sur votre telephone.',
        },
      },
    ],
    relatedFeatures: ['sftp', 'tunnels', 'mcp'],
    relatedUseCases: ['ssh-from-iphone', 'raspberry-pi', 'aws-ec2', 'home-server'],
    relatedHowTos: ['ssh-key-mac', 'jump-host-mac', 'import-ssh-config-mac'],
  },
  sftp: {
    intro: {
      en: 'Managing files on remote servers from macOS has always been awkward. The Finder doesn\'t speak SFTP, command-line `scp` is slow for back-and-forth editing, and dedicated tools like Cyberduck or Transmit are great but live in their own window. SSHive\'s SFTP file manager is built into the same window as your terminal, so dragging a `.env` file from your Desktop to `/etc/myapp/` on production is a one-second action — and the upload progress is visible right next to the shell where you\'ll restart the service.\n\nThe interface is dual-pane: local Finder-style browser on the left, remote tree on the right, with breadcrumbs you can click to jump up the directory tree. Drag-and-drop works in both directions, and bulk operations (download, delete, chmod) operate on multi-selections. The integrated remote editor opens any text file in a CodeMirror 6 editor inside SSHive — `Cmd+S` writes back to the server. No more `vi` over a slow link to fix a typo. Bookmark frequently visited paths so `/var/log/nginx`, `/etc/letsencrypt/live`, and `~/.ssh` are one click away.',
      fr: 'Gerer des fichiers sur des serveurs distants depuis macOS a toujours ete maladroit. Le Finder ne parle pas SFTP, le `scp` en ligne de commande est lent pour les allers-retours d\'edition, et les outils dedies comme Cyberduck ou Transmit sont bons mais vivent dans leur propre fenetre. Le gestionnaire SFTP de SSHive est integre dans la meme fenetre que votre terminal, donc faire glisser un `.env` du Bureau vers `/etc/myapp/` en production est une action d\'une seconde — et la progression d\'upload est visible juste a cote du shell ou vous redemarrez le service.\n\nL\'interface est en double panneau : navigateur local style Finder a gauche, arbre distant a droite, avec un fil d\'Ariane cliquable pour remonter. Le drag-and-drop fonctionne dans les deux sens, et les operations en lot (telechargement, suppression, chmod) agissent sur les multi-selections. L\'editeur distant integre ouvre n\'importe quel fichier texte dans un editeur CodeMirror 6 dans SSHive — `Cmd+S` ecrit sur le serveur. Plus de `vi` sur lien lent pour corriger une typo. Mettez en favori les chemins frequents : `/var/log/nginx`, `/etc/letsencrypt/live`, `~/.ssh` sont a un clic.',
    },
    useCasesHeading: { en: 'When SFTP saves the day', fr: 'Quand SFTP sauve la mise' },
    useCases: [
      {
        title: { en: 'Edit configs without re-deploying', fr: 'Editer des configs sans redeployer' },
        description: {
          en: 'Open `/etc/nginx/conf.d/site.conf` directly in SSHive, fix the typo, save. The next `nginx -s reload` runs in the same SSHive terminal session right next to the editor. No FTP roundtrip, no scp dance.',
          fr: 'Ouvrez `/etc/nginx/conf.d/site.conf` directement dans SSHive, corrigez la typo, sauvegardez. Le `nginx -s reload` suivant tourne dans la meme session SSHive a cote de l\'editeur. Pas d\'aller-retour FTP, pas de danse scp.',
        },
      },
      {
        title: { en: 'Backup remote logs locally', fr: 'Backup des logs distants en local' },
        description: {
          en: 'Select a date range of `/var/log/myapp/*.log`, drag to your `~/Downloads` folder. SSHive shows transfer speed, ETA, and total size — and respects the connection profile, so all transfers stay encrypted via SSH.',
          fr: 'Selectionnez une plage de dates de `/var/log/myapp/*.log`, glissez vers `~/Downloads`. SSHive affiche vitesse, ETA et taille totale — et respecte le profil de connexion, donc tous les transferts restent chiffres via SSH.',
        },
      },
      {
        title: { en: 'Deploy artifacts from a build', fr: 'Deployer des artefacts depuis un build' },
        description: {
          en: 'Drop a `dist/` folder onto the remote tree, set permissions, run `systemctl restart` from the adjacent terminal — all in the same SSHive window, all encrypted, all logged in your transfer history.',
          fr: 'Deposez un dossier `dist/` sur l\'arbre distant, ajustez les permissions, lancez `systemctl restart` depuis le terminal adjacent — le tout dans la meme fenetre SSHive, le tout chiffre, le tout journalise dans l\'historique de transfert.',
        },
      },
    ],
    faqHeading: { en: 'SFTP — frequently asked questions', fr: 'SFTP — questions frequentes' },
    faq: [
      {
        question: { en: 'Does SSHive replace Cyberduck or Transmit?', fr: 'SSHive remplace-t-il Cyberduck ou Transmit ?' },
        answer: {
          en: 'For SFTP/SCP-based workflows, yes. SSHive does not currently support FTP, FTPS, WebDAV, S3, or Azure Blob — Cyberduck remains better for those. But if 95% of your file work is over SSH, you save a window.',
          fr: 'Pour les workflows bases SFTP/SCP, oui. SSHive ne supporte pas actuellement FTP, FTPS, WebDAV, S3 ou Azure Blob — Cyberduck reste meilleur pour ceux-la. Mais si 95% de votre travail fichier est via SSH, vous gagnez une fenetre.',
        },
      },
      {
        question: { en: 'Can I edit binary files?', fr: 'Puis-je editer des fichiers binaires ?' },
        answer: {
          en: 'Double-click on a binary opens it in the macOS default app via a temp file; SSHive watches the temp file and re-uploads on save. So opening a `.png` in Preview, annotating, and saving uploads back automatically.',
          fr: 'Double-clic sur un binaire l\'ouvre dans l\'app macOS par defaut via un fichier temporaire ; SSHive surveille ce temp et reupload a la sauvegarde. Donc ouvrir un `.png` dans Preview, l\'annoter et sauvegarder reupload automatiquement.',
        },
      },
      {
        question: { en: 'How are SFTP transfers throttled?', fr: 'Comment les transferts SFTP sont-ils limites ?' },
        answer: {
          en: 'SFTP runs over the SSH connection, so throughput is bound by your SSH bandwidth and the remote disk speed. SSHive uses parallel chunked transfers (4 streams by default) to maximize throughput on high-latency links. You can adjust concurrency in profile settings.',
          fr: 'SFTP passe par la connexion SSH, donc le debit est limite par votre bande passante SSH et la vitesse disque distante. SSHive utilise des transferts paralleles en chunks (4 streams par defaut) pour maximiser le debit sur les liens a forte latence. La concurrence est reglable dans les parametres du profil.',
        },
      },
      {
        question: { en: 'Does SFTP work on the free tier?', fr: 'SFTP fonctionne-t-il en gratuit ?' },
        answer: {
          en: 'Yes — SFTP is included in the free tier. The free tier limits you to 2 concurrent SSH sessions and 5 saved profiles, but each session has full SFTP access alongside the terminal.',
          fr: 'Oui — SFTP est inclus dans le tier gratuit. Le gratuit limite a 2 sessions SSH concurrentes et 5 profils sauvegardes, mais chaque session a un acces SFTP complet a cote du terminal.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'tunnels', 'mcp'],
    relatedUseCases: ['developer-mac', 'home-server', 'nas-synology'],
    relatedHowTos: ['sftp-gui-mac', 'ssh-key-mac'],
  },
  rdp: {
    intro: {
      en: 'Connecting from macOS to Windows desktops or servers usually means firing up Microsoft Remote Desktop or a third-party RDP client in a separate window. SSHive embeds a full RDP client directly in the same window as your SSH sessions — powered by IronRDP / freerdp-native, with full keyboard, mouse and clipboard handling. No external app, no window-juggling, no forgotten credentials in another keychain.\n\nKeyboard mapping handles the macOS-to-Windows quirks: `Cmd+C` and `Cmd+V` translate to `Ctrl+C`/`Ctrl+V` on the remote host, function keys work, and the AltGr layer is handled correctly for international keyboards. Clipboard syncs in both directions for text. Resolution adapts to your Retina display, including dynamic resize when you change SSHive\'s window size.',
      fr: 'Se connecter depuis macOS a des bureaux ou serveurs Windows signifie generalement lancer Microsoft Remote Desktop ou un client RDP tiers dans une fenetre separee. SSHive integre un client RDP complet directement dans la meme fenetre que vos sessions SSH — propulse par IronRDP / freerdp-native, avec gestion complete clavier, souris et presse-papiers. Pas d\'app externe, pas de jonglage de fenetres, pas d\'identifiants oublies dans un autre trousseau.\n\nLe mapping clavier gere les bizarreries macOS-vers-Windows : `Cmd+C` et `Cmd+V` traduisent en `Ctrl+C`/`Ctrl+V` sur l\'hote distant, les touches de fonction marchent, et la couche AltGr est geree correctement pour les claviers internationaux. Le presse-papiers se synchronise dans les deux sens pour le texte. La resolution s\'adapte a votre ecran Retina, y compris en cas de redimensionnement dynamique de la fenetre SSHive.',
    },
    useCasesHeading: { en: 'When RDP from a Mac matters', fr: 'Quand le RDP depuis Mac compte' },
    useCases: [
      {
        title: { en: 'Manage Windows Server VMs', fr: 'Gerer des VMs Windows Server' },
        description: {
          en: 'Connect to Windows Server 2019/2022/2025 instances on Hyper-V, ESXi, or AWS EC2. Domain-joined and workgroup logins both work; NLA (Network Level Authentication) is supported for hardened hosts.',
          fr: 'Connectez-vous a des instances Windows Server 2019/2022/2025 sur Hyper-V, ESXi ou AWS EC2. Logins joints au domaine et workgroup fonctionnent ; NLA (Network Level Authentication) supporte pour les hotes durcis.',
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
          fr: 'Connectez-vous a des machines clientes via RDP a travers un VPN ou un tunnel SSH. Combinez la fonctionnalite tunnel de SSHive avec RDP pour atteindre des Windows sur reseaux prives sans exposer le port 3389 a Internet.',
        },
      },
    ],
    faqHeading: { en: 'RDP — frequently asked questions', fr: 'RDP — questions frequentes' },
    faq: [
      {
        question: { en: 'Is RDP available in the free tier?', fr: 'RDP est-il disponible en gratuit ?' },
        answer: {
          en: 'No. RDP is a Pro feature. Free tier covers the SSH terminal, SFTP file manager, snippets, and Keychain-based credential storage. The Pro upgrade adds RDP, VNC, tunnels, broadcast and MCP integration.',
          fr: 'Non. RDP est une fonctionnalite Pro. Le tier gratuit couvre le terminal SSH, le gestionnaire SFTP, les snippets et le stockage des identifiants via Trousseau. L\'upgrade Pro ajoute RDP, VNC, tunnels, broadcast et l\'integration MCP.',
        },
      },
      {
        question: { en: 'Can I copy-paste files via RDP?', fr: 'Puis-je copier-coller des fichiers via RDP ?' },
        answer: {
          en: 'Currently text clipboard only. For file transfers, use SSHive\'s SFTP pane in the same window — it\'s usually faster anyway because SFTP doesn\'t have the RDP framing overhead.',
          fr: 'Pour l\'instant presse-papiers texte uniquement. Pour les transferts de fichiers, utilisez le panneau SFTP de SSHive dans la meme fenetre — c\'est generalement plus rapide car SFTP n\'a pas l\'overhead de framing RDP.',
        },
      },
    ],
    relatedFeatures: ['vnc', 'tunnels', 'ssh'],
    relatedUseCases: ['windows-server'],
    relatedHowTos: ['rdp-from-mac'],
  },
  vnc: {
    intro: {
      en: 'VNC is the lingua franca of remote desktops on Linux. From a Raspberry Pi running Pixel desktop to a Proxmox host\'s console to a Synology NAS\'s GUI, VNC servers are everywhere. SSHive\'s built-in VNC viewer uses noVNC under the hood with a WebSocket proxy embedded in the app — meaning you do not need an external WebSocket relay (like websockify) to connect to a plain TCP VNC server. Just enter host:port, password if any, and you\'re in.\n\nFull RFB protocol support means raw, RRE, Hextile, Tight (with JPEG), and ZRLE encodings all work. The viewer adapts the framebuffer scaling to your Retina display, and clipboard syncs both ways. SSHive supports TightVNC, RealVNC, x11vnc, vino, KVM/QEMU\'s built-in VNC console, and TigerVNC — basically any RFB-compliant server.',
      fr: 'VNC est la lingua franca des bureaux distants sur Linux. D\'un Raspberry Pi sous Pixel desktop a la console d\'un hote Proxmox jusqu\'a l\'interface d\'un NAS Synology, les serveurs VNC sont partout. Le viewer VNC integre de SSHive utilise noVNC sous le capot avec un proxy WebSocket integre dans l\'app — vous n\'avez donc pas besoin d\'un relais WebSocket externe (genre websockify) pour vous connecter a un serveur VNC TCP. Entrez juste host:port, mot de passe le cas echeant, et vous etes dedans.\n\nLe support complet du protocole RFB couvre les encodages raw, RRE, Hextile, Tight (avec JPEG) et ZRLE. Le viewer adapte le scaling du framebuffer a votre ecran Retina, et le presse-papiers se synchronise dans les deux sens. SSHive supporte TightVNC, RealVNC, x11vnc, vino, la console VNC integree de KVM/QEMU et TigerVNC — en gros n\'importe quel serveur conforme RFB.',
    },
    useCasesHeading: { en: 'VNC on macOS — what you can do', fr: 'VNC sur macOS — ce que vous pouvez faire' },
    useCases: [
      {
        title: { en: 'Headless Raspberry Pi GUI', fr: 'Interface graphique Raspberry Pi headless' },
        description: {
          en: 'Run RealVNC server on a Pi or use `vncserver` from x11vnc, then connect from your Mac to manage the desktop. No need for a separate monitor and keyboard on the Pi.',
          fr: 'Lancez RealVNC server sur un Pi ou utilisez `vncserver` de x11vnc, puis connectez-vous depuis votre Mac pour gerer le bureau. Plus besoin d\'ecran et clavier separes sur le Pi.',
        },
      },
      {
        title: { en: 'Proxmox / KVM consoles', fr: 'Consoles Proxmox / KVM' },
        description: {
          en: 'Access the noVNC console of a Proxmox VM, ESXi guest, or QEMU instance directly from SSHive. Works alongside an SSH session to the host — manage hypervisor and VM in one window.',
          fr: 'Accedez a la console noVNC d\'une VM Proxmox, d\'un guest ESXi ou d\'une instance QEMU directement depuis SSHive. Fonctionne en parallele d\'une session SSH a l\'hote — geree hyperviseur et VM dans une seule fenetre.',
        },
      },
      {
        title: { en: 'Tunneled VNC for security', fr: 'VNC tunnele pour la securite' },
        description: {
          en: 'Combine SSHive\'s SSH tunnel feature with VNC: forward port 5900 over SSH, then connect to localhost. Your VNC traffic is encrypted end-to-end without exposing 5900 to the Internet.',
          fr: 'Combinez la fonctionnalite tunnel SSH de SSHive avec VNC : forwardez le port 5900 via SSH, puis connectez-vous a localhost. Votre trafic VNC est chiffre de bout en bout sans exposer 5900 a Internet.',
        },
      },
    ],
    faqHeading: { en: 'VNC — frequently asked questions', fr: 'VNC — questions frequentes' },
    faq: [
      {
        question: { en: 'Does SSHive VNC work with Apple Screen Sharing?', fr: 'SSHive VNC fonctionne-t-il avec Partage d\'ecran Apple ?' },
        answer: {
          en: 'Yes — Apple\'s vncserver speaks RFB and SSHive can connect to it (port 5900). For full Apple-Apple Screen Sharing features (audio, drag-drop), Apple\'s built-in client is still better. SSHive shines for cross-platform.',
          fr: 'Oui — le vncserver d\'Apple parle RFB et SSHive peut s\'y connecter (port 5900). Pour les fonctionnalites complete de Partage d\'ecran Apple-vers-Apple (audio, drag-drop), le client integre Apple reste meilleur. SSHive brille pour le cross-platform.',
        },
      },
      {
        question: { en: 'How is the VNC password stored?', fr: 'Comment le mot de passe VNC est-il stocke ?' },
        answer: {
          en: 'Encrypted in the macOS Keychain via Electron\'s safeStorage. It\'s never written to profiles.json in plaintext. Each profile has its own credential entry.',
          fr: 'Chiffre dans le Trousseau macOS via safeStorage d\'Electron. Jamais ecrit en clair dans profiles.json. Chaque profil a sa propre entree d\'identifiant.',
        },
      },
      {
        question: { en: 'Is VNC included in the free tier?', fr: 'VNC est-il inclus en gratuit ?' },
        answer: {
          en: 'No. VNC is a Pro feature alongside RDP and tunnels. The Pro upgrade is a one-time $9.99 on the Mac App Store with lifetime updates.',
          fr: 'Non. VNC est une fonctionnalite Pro avec RDP et les tunnels. L\'upgrade Pro est un achat unique a 9,99 $ sur le Mac App Store avec mises a jour a vie.',
        },
      },
      {
        question: { en: 'What about VNC over SSH (the -via flag in xtightvnc)?', fr: 'Et VNC sur SSH (le flag -via dans xtightvnc) ?' },
        answer: {
          en: 'Use SSHive\'s tunnel feature: in the SSH profile, set up a Local forward 5900:localhost:5900. Then create a VNC profile pointing to localhost:5900. The traffic is automatically tunneled when the SSH connection is up.',
          fr: 'Utilisez la fonctionnalite tunnel de SSHive : dans le profil SSH, configurez un forward Local 5900:localhost:5900. Puis creez un profil VNC pointant vers localhost:5900. Le trafic est automatiquement tunnele quand la connexion SSH est active.',
        },
      },
    ],
    relatedFeatures: ['rdp', 'tunnels', 'ssh'],
    relatedUseCases: ['raspberry-pi', 'proxmox', 'home-server'],
    relatedHowTos: ['vnc-from-mac'],
  },
  tunnels: {
    intro: {
      en: 'SSH tunnels are one of the most underrated tools in a sysadmin\'s toolkit — they let you reach internal services (a database, a Redis instance, an admin panel) without exposing them to the Internet. SSHive turns SSH tunneling from a memorized command-line incantation into a profile setting. Open a profile, click "Tunnels", add a forward — done. The tunnel starts automatically when the SSH connection comes up and tears down when it drops.\n\nAll three OpenSSH forwarding modes are supported: Local (`-L`) brings a remote port to your Mac, Remote (`-R`) exposes a local port on the remote server, and Dynamic SOCKS5 (`-D`) gives you a per-app proxy. Each profile can have up to 10 Local and 5 Remote tunnels active simultaneously. SOCKS5 supports IPv4, IPv6, and domain-name routing — so you can use SSHive as a private VPN-like proxy for browser sessions when traveling.',
      fr: 'Les tunnels SSH sont l\'un des outils les plus sous-estimes du sysadmin — ils permettent d\'atteindre des services internes (une base, un Redis, un panel admin) sans les exposer a Internet. SSHive transforme le tunneling SSH d\'incantation ligne de commande memorisee en parametre de profil. Ouvrez un profil, cliquez "Tunnels", ajoutez un forward — c\'est fait. Le tunnel demarre automatiquement quand la connexion SSH monte et tombe quand elle chute.\n\nLes trois modes de forwarding OpenSSH sont supportes : Local (`-L`) ramene un port distant sur votre Mac, Remote (`-R`) expose un port local sur le serveur distant, et Dynamic SOCKS5 (`-D`) donne un proxy par app. Chaque profil peut avoir jusqu\'a 10 tunnels Local et 5 Remote actifs simultanement. SOCKS5 supporte IPv4, IPv6 et le routing par nom de domaine — vous pouvez donc utiliser SSHive comme un proxy type VPN prive pour des sessions navigateur en deplacement.',
    },
    useCasesHeading: { en: 'Real-world tunnel scenarios', fr: 'Scenarios reels de tunnels' },
    useCases: [
      {
        title: { en: 'Reach a private database', fr: 'Atteindre une base privee' },
        description: {
          en: 'Forward 5432 from a private RDS instance through your bastion to localhost:5432. Connect TablePlus, DBeaver, or psql to localhost — they think the database is local, and your SSH key is the auth.',
          fr: 'Forwardez 5432 d\'une instance RDS privee a travers votre bastion vers localhost:5432. Connectez TablePlus, DBeaver ou psql a localhost — ils pensent que la base est locale, et votre cle SSH fait l\'auth.',
        },
      },
      {
        title: { en: 'Expose a local dev server', fr: 'Exposer un serveur dev local' },
        description: {
          en: 'Use Remote forwarding to expose your local Vite dev server (port 5173) on a public host\'s port 8080. Quick demo to a stakeholder without ngrok or Cloudflare Tunnel.',
          fr: 'Utilisez le Remote forwarding pour exposer votre serveur Vite dev local (port 5173) sur le port 8080 d\'un hote public. Demo rapide a un stakeholder sans ngrok ni Cloudflare Tunnel.',
        },
      },
      {
        title: { en: 'SOCKS5 proxy for safe browsing', fr: 'Proxy SOCKS5 pour navigation sure' },
        description: {
          en: 'On hotel Wi-Fi, start a SOCKS5 tunnel through your home server, set Firefox/Chrome to use localhost:1080. All your web traffic exits from your home IP — encrypted, untouchable by the hotel network.',
          fr: 'Sur le Wi-Fi d\'hotel, demarrez un tunnel SOCKS5 via votre serveur perso, reglez Firefox/Chrome sur localhost:1080. Tout votre trafic web sort de votre IP perso — chiffre, intouchable par le reseau d\'hotel.',
        },
      },
    ],
    faqHeading: { en: 'SSH tunnels — frequently asked questions', fr: 'Tunnels SSH — questions frequentes' },
    faq: [
      {
        question: { en: 'Why not just use a VPN?', fr: 'Pourquoi pas juste un VPN ?' },
        answer: {
          en: 'A VPN routes all traffic, requires admin privileges, and is overkill for reaching one database. SSH tunnels are surgical: only the ports you specify are forwarded, no kernel network changes, no sudo. They\'re also auditable — your bastion logs the SSH session, not opaque VPN tunnels.',
          fr: 'Un VPN route tout le trafic, demande des privileges admin et est excessif pour atteindre une base. Les tunnels SSH sont chirurgicaux : seuls les ports specifies sont forwardes, pas de changement reseau kernel, pas de sudo. Ils sont aussi auditables — votre bastion logue la session SSH, pas des tunnels VPN opaques.',
        },
      },
      {
        question: { en: 'Can I use a tunnel without keeping the SSH terminal open?', fr: 'Puis-je utiliser un tunnel sans garder le terminal SSH ouvert ?' },
        answer: {
          en: 'Yes. SSHive separates "tunnel-only" profiles: connect with no shell, just the tunnels active. The connection stays alive in the background. Disconnect from the sessions panel when done.',
          fr: 'Oui. SSHive separe les profils "tunnel only" : connexion sans shell, juste les tunnels actifs. La connexion reste vivante en arriere-plan. Deconnectez depuis le panneau de sessions quand fini.',
        },
      },
      {
        question: { en: 'How does SSHive handle tunnel re-establishment after a drop?', fr: 'Comment SSHive gere-t-il le reetablissement de tunnel apres une chute ?' },
        answer: {
          en: 'Auto-reconnect retries with exponential backoff (1s, 2s, 4s, ... up to 60s). Tunnels reattach as soon as the SSH connection is back. You see a yellow indicator in the sessions panel during reconnect.',
          fr: 'L\'auto-reconnect retry avec backoff exponentiel (1s, 2s, 4s, ... jusqu\'a 60s). Les tunnels se rattachent des que la connexion SSH revient. Indicateur jaune dans le panneau de sessions pendant la reconnexion.',
        },
      },
      {
        question: { en: 'Are tunnels in the free tier?', fr: 'Les tunnels sont-ils en gratuit ?' },
        answer: {
          en: 'Tunnels are a Pro feature. Free tier covers SSH terminal + SFTP. Pro ($9.99 one-time) unlocks tunnels, RDP, VNC, broadcast, and unlimited sessions.',
          fr: 'Les tunnels sont une fonctionnalite Pro. Le gratuit couvre terminal SSH + SFTP. Pro (9,99 $ achat unique) debloque tunnels, RDP, VNC, broadcast et sessions illimitees.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'broadcast'],
    relatedUseCases: ['aws-ec2', 'home-server', 'docker'],
    relatedHowTos: ['ssh-tunnel-mac', 'socks5-proxy-mac', 'jump-host-mac'],
  },
  mcp: {
    intro: {
      en: 'Model Context Protocol (MCP) is the standard Anthropic introduced in late 2024 for letting AI assistants talk to local tools. SSHive ships with a built-in MCP server — meaning Claude Code, Cursor, and Claude Desktop can read your SSH session list, execute commands on connected hosts, browse SFTP, and read/write remote files. Toggle one switch in SSHive Settings → MCP: the local HTTP server starts on port 49422, a Bearer token is generated, and SSHive auto-injects an `mcpServers.sshive` entry into the config files of every detected client (`~/.claude.json`, `~/.cursor/mcp.json`, plus a copyable stdio block for Claude Desktop via `npx mcp-remote`). For other MCP-compatible clients, a Copy button gives you a JSON snippet with the real token to paste anywhere.\n\nThe server exposes 7 tools: `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file` (1 MB max), `sftp_write_file` (in-memory), `sftp_write_file_chunk` (4 MB chunks for big files via base64 append), and `sftp_write_from_local_path` (read a local file → write to remote, zero base64 overhead). Authentication uses a UUID Bearer token persisted in `settings.json` and rotatable from the UI. The HTTP server binds to `127.0.0.1` only — it never accepts external connections — and every command passes through your existing SSH session auth, so the AI cannot do anything you can\'t already do. MCP is Pro-only.',
      fr: 'Model Context Protocol (MCP) est le standard introduit par Anthropic fin 2024 pour permettre aux assistants IA de parler aux outils locaux. SSHive embarque un serveur MCP integre — Claude Code, Cursor et Claude Desktop peuvent lire votre liste de sessions SSH, executer des commandes sur les hotes connectes, parcourir SFTP et lire/ecrire des fichiers distants. Basculez un interrupteur dans Parametres → MCP : le serveur HTTP local demarre sur le port 49422, un Bearer token est genere, et SSHive auto-injecte une entree `mcpServers.sshive` dans les fichiers de config de chaque client detecte (`~/.claude.json`, `~/.cursor/mcp.json`, plus un bloc stdio copiable pour Claude Desktop via `npx mcp-remote`). Pour les autres clients compatibles MCP, un bouton Copier vous donne un snippet JSON avec le vrai token pret a coller n\'importe ou.\n\nLe serveur expose 7 outils : `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file` (1 MB max), `sftp_write_file` (en memoire), `sftp_write_file_chunk` (chunks de 4 MB pour gros fichiers via append base64) et `sftp_write_from_local_path` (lecture d\'un fichier local → ecriture sur le distant, zero overhead base64). L\'authentification utilise un Bearer token UUID persiste dans `settings.json` et rotatable depuis l\'UI. Le serveur HTTP bind uniquement sur `127.0.0.1` — il n\'accepte jamais de connexions externes — et chaque commande passe par l\'auth de votre session SSH existante, donc l\'IA ne peut rien faire que vous ne puissiez deja faire. MCP est Pro uniquement.',
    },
    useCasesHeading: { en: 'AI + SSH workflows', fr: 'Workflows IA + SSH' },
    useCases: [
      {
        title: { en: 'Production debugging with Claude', fr: 'Debug production avec Claude' },
        description: {
          en: '"Hey Claude, my prod app is slow — check disk, memory, and the last 100 lines of nginx error log." Claude calls `ssh_execute` against your prod session, returns a triage summary in seconds. You stay in your editor.',
          fr: '"Hey Claude, mon app prod est lente — verifie disque, memoire et les 100 dernieres lignes du log d\'erreur nginx." Claude appelle `ssh_execute` sur votre session prod, renvoie un resume de triage en quelques secondes. Vous restez dans votre editeur.',
        },
      },
      {
        title: { en: 'Server-side code review', fr: 'Code review cote serveur' },
        description: {
          en: 'Ask Cursor to read `/etc/myapp/config.yaml` on staging and compare to your local version. The MCP `sftp_read_file` tool returns the content; Cursor diffs it locally. No copy-paste, no "let me ssh in real quick".',
          fr: 'Demandez a Cursor de lire `/etc/myapp/config.yaml` sur staging et de comparer a votre version locale. Le tool `sftp_read_file` MCP renvoie le contenu ; Cursor le diffe en local. Pas de copier-coller, pas de "laisse-moi ssh rapidement".',
        },
      },
      {
        title: { en: 'Multi-step automation', fr: 'Automation multi-etapes' },
        description: {
          en: '"Roll out the new config: copy `nginx.conf` to web-1, web-2, web-3, then run `nginx -t && systemctl reload nginx` on each." Claude orchestrates via SSHive\'s MCP — broadcast for the reload, individual SFTP writes for the file.',
          fr: '"Deploie la nouvelle config : copie `nginx.conf` sur web-1, web-2, web-3, puis `nginx -t && systemctl reload nginx` sur chaque." Claude orchestre via le MCP de SSHive — broadcast pour le reload, ecritures SFTP individuelles pour le fichier.',
        },
      },
    ],
    faqHeading: { en: 'MCP integration — frequently asked questions', fr: 'Integration MCP — questions frequentes' },
    faq: [
      {
        question: { en: 'Is the MCP server safe? Can the AI mess up my servers?', fr: 'Le serveur MCP est-il sur ? L\'IA peut-elle abimer mes serveurs ?' },
        answer: {
          en: 'The AI can only do what you can do via the active SSH session — it has no extra privileges. SSHive shows a notification for every tool call so you see what the AI is doing in real time. You can disable specific tools (e.g., disable `sftp_write_file` for read-only sessions) per profile.',
          fr: 'L\'IA ne peut faire que ce que vous pouvez faire via la session SSH active — pas de privileges supplementaires. SSHive affiche une notification pour chaque appel d\'outil, vous voyez en temps reel ce que l\'IA fait. Vous pouvez desactiver des outils specifiques (par ex. desactiver `sftp_write_file` pour les sessions read-only) par profil.',
        },
      },
      {
        question: { en: 'Which AI clients are supported?', fr: 'Quels clients IA sont supportes ?' },
        answer: {
          en: 'Claude Code (CLI + IDE) and Cursor get the MCP entry written into their config files automatically when you toggle the server ON. Claude Desktop has a copy-paste block (uses `npx mcp-remote` since Desktop is stdio-only). Any other MCP-compliant client works manually — copy the JSON config (which already includes your real Bearer token) from Settings → MCP and paste it into your client.',
          fr: 'Claude Code (CLI + extension IDE) et Cursor recoivent l\'entree MCP ecrite dans leurs fichiers de config automatiquement quand vous basculez le serveur ON. Claude Desktop a un bloc copier-coller (utilise `npx mcp-remote` car Desktop est stdio-only). Tout autre client compatible MCP fonctionne manuellement — copiez la config JSON (qui inclut deja votre vrai Bearer token) depuis Parametres → MCP et collez-la dans votre client.',
        },
      },
      {
        question: { en: 'Does the MCP server send my data to Anthropic?', fr: 'Le serveur MCP envoie-t-il mes donnees a Anthropic ?' },
        answer: {
          en: 'No — the MCP server runs entirely on your Mac. Whether your AI client (Claude Code, Cursor) sends data to a cloud LLM is up to that client\'s configuration, not SSHive. SSHive itself has zero telemetry and zero outbound calls beyond your SSH/SFTP connections.',
          fr: 'Non — le serveur MCP tourne entierement sur votre Mac. Que votre client IA (Claude Code, Cursor) envoie des donnees a un LLM cloud depend de la configuration de ce client, pas de SSHive. SSHive lui-meme a zero telemetrie et zero appel sortant au-dela de vos connexions SSH/SFTP.',
        },
      },
      {
        question: { en: 'Is MCP a Pro feature?', fr: 'MCP est-il une fonctionnalite Pro ?' },
        answer: {
          en: 'Yes. MCP integration is included in the Pro upgrade ($9.99 one-time). Free tier focuses on SSH and SFTP for individual use.',
          fr: 'Oui. L\'integration MCP est incluse dans l\'upgrade Pro (9,99 $ achat unique). Le gratuit se concentre sur SSH et SFTP pour usage individuel.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'broadcast'],
    relatedUseCases: ['developer-mac', 'home-server'],
    relatedHowTos: ['claude-mcp-ssh'],
  },
  broadcast: {
    intro: {
      en: 'When you administer more than one server, you eventually face the "I need to run this on all of them" moment. Maybe it\'s `apt update`, maybe it\'s checking which version of OpenSSL is installed, maybe it\'s a config rollout. Tools like Ansible, Salt, and Puppet exist for this — but for a one-off command across 3 to 30 servers, they\'re heavy. Broadcast mode in SSHive solves the gap: open the sessions you care about, hit Cmd+Shift+B, type the command, watch it run on all of them simultaneously with each output in its own pane.\n\nThere\'s no agent, no inventory, no YAML. Broadcast just types the same keystrokes into every active SSH session. You see real-time output side-by-side, can spot the one box that errored out, and re-run targeted commands on just that one. It\'s the unsexiest, most useful feature SSHive has — and it\'s exactly what fleet operators have been asking for since the SecureCRT "command window" days.',
      fr: 'Quand vous administrez plus d\'un serveur, vous finissez par tomber sur le moment "j\'ai besoin de lancer ca sur tous". Parfois c\'est `apt update`, parfois c\'est verifier quelle version d\'OpenSSL est installee, parfois c\'est un deploiement de config. Des outils comme Ansible, Salt et Puppet existent pour ca — mais pour une commande one-off sur 3 a 30 serveurs, c\'est lourd. Le mode broadcast de SSHive comble le manque : ouvrez les sessions concernees, Cmd+Shift+B, tapez la commande, regardez-la s\'executer sur toutes simultanement, chaque sortie dans son panneau.\n\nPas d\'agent, pas d\'inventaire, pas de YAML. Le broadcast tape juste les memes touches dans chaque session SSH active. Vous voyez la sortie temps reel cote a cote, vous reperez la box qui a foire, vous relancez des commandes ciblees sur celle-la uniquement. C\'est la fonctionnalite la moins sexy et la plus utile de SSHive — et c\'est exactement ce que les fleet operators reclament depuis l\'epoque de la "command window" SecureCRT.',
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
          fr: 'Broadcastez `cat /etc/timezone` ou `php -v` pour voir d\'un coup d\'oeil quelles boxes sont desynchronisees. Les panneaux cote a cote font ressortir les sorties divergentes.',
        },
      },
      {
        title: { en: 'Fleet-wide log search', fr: 'Recherche de logs sur toute la flotte' },
        description: {
          en: 'Customer reports an error at 14:32. Broadcast `grep "ERROR" /var/log/myapp/app.log | grep "14:3[0-9]"` across 10 web servers — find the offending one in seconds.',
          fr: 'Un client signale une erreur a 14:32. Broadcast `grep "ERROR" /var/log/myapp/app.log | grep "14:3[0-9]"` sur 10 serveurs web — trouvez le coupable en quelques secondes.',
        },
      },
    ],
    faqHeading: { en: 'Broadcast — frequently asked questions', fr: 'Broadcast — questions frequentes' },
    faq: [
      {
        question: { en: 'How do I broadcast to a subset of sessions?', fr: 'Comment broadcaster a un sous-ensemble de sessions ?' },
        answer: {
          en: 'In the sessions panel, check the boxes next to the sessions you want to include. Cmd+Shift+B then targets only those. You can save broadcast groups (e.g., "all web", "all db") for one-click selection.',
          fr: 'Dans le panneau de sessions, cochez les sessions a inclure. Cmd+Shift+B cible alors uniquement celles-la. Vous pouvez sauvegarder des groupes de broadcast ("tous web", "toutes db") pour selection en un clic.',
        },
      },
      {
        question: { en: 'Is broadcast different from a multiplexer like tmux?', fr: 'Le broadcast est-il different d\'un multiplexeur comme tmux ?' },
        answer: {
          en: 'tmux\'s `setw synchronize-panes` is similar, but it requires having a tmux session on each host first. SSHive broadcast works at the SSH client level, so no setup on the remote side, no tmux required, and you get separate panes per host with auto-color-coding.',
          fr: '`setw synchronize-panes` de tmux est similaire, mais demande une session tmux sur chaque hote d\'abord. Le broadcast SSHive marche au niveau du client SSH, donc pas de setup cote distant, pas besoin de tmux, et panneaux separes par hote avec code couleur auto.',
        },
      },
      {
        question: { en: 'Can broadcast run a script (multi-line) instead of a single command?', fr: 'Le broadcast peut-il lancer un script (multi-ligne) au lieu d\'une seule commande ?' },
        answer: {
          en: 'Yes — paste a multi-line script while broadcast is active and each line goes to every session. For complex orchestration, save it as a snippet (Quick Commands) and broadcast the snippet.',
          fr: 'Oui — collez un script multi-ligne quand le broadcast est actif, chaque ligne va dans chaque session. Pour de l\'orchestration complexe, sauvegardez-le en snippet (Quick Commands) et broadcastez le snippet.',
        },
      },
      {
        question: { en: 'Pro feature?', fr: 'Fonctionnalite Pro ?' },
        answer: {
          en: 'Yes — broadcast is part of Pro along with RDP, VNC, tunnels, and unlimited sessions. $9.99 one-time on the Mac App Store.',
          fr: 'Oui — broadcast fait partie de Pro avec RDP, VNC, tunnels et sessions illimitees. 9,99 $ achat unique sur le Mac App Store.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'snippets', 'mcp'],
    relatedUseCases: ['kubernetes', 'docker', 'jump-host'],
    relatedHowTos: ['broadcast-commands-mac'],
  },
  snippets: {
    intro: {
      en: 'Every sysadmin has a `~/scripts/` folder full of one-liners they wrote 4 years ago and now copy-paste into every terminal. Quick Commands (snippets) in SSHive give those one-liners a permanent home with a searchable UI. Out of the box, SSHive ships with 14 presets covering system inspection (`uname -a`, `top -b -n 1 | head -20`), network (`ss -tulpn`, `dig +short`), disk (`df -h`, `du -sh /var/log/*`), Docker (`docker ps -a`, `docker logs --tail 100 -f`), and Git (`git log --oneline -20`, `git status -sb`).\n\nYou create your own snippets, organize them in folders, search by name or tag. One click inserts the snippet into the active terminal — or, with broadcast on, into all of them. Snippets support placeholders like `{{port}}` or `{{path}}` that prompt for values before insertion, so a generic "tail this log" snippet works on any path. Your snippet library is portable: export to a JSON file, import on another Mac.',
      fr: 'Chaque sysadmin a un dossier `~/scripts/` rempli de one-liners ecrits il y a 4 ans et copies-colles dans chaque terminal. Quick Commands (snippets) dans SSHive donne a ces one-liners une maison permanente avec une UI cherchable. Out of the box, SSHive embarque 14 presets couvrant inspection systeme (`uname -a`, `top -b -n 1 | head -20`), reseau (`ss -tulpn`, `dig +short`), disque (`df -h`, `du -sh /var/log/*`), Docker (`docker ps -a`, `docker logs --tail 100 -f`), et Git (`git log --oneline -20`, `git status -sb`).\n\nVous creez vos snippets, les organisez en dossiers, cherchez par nom ou tag. Un clic insert le snippet dans le terminal actif — ou, broadcast active, dans tous. Les snippets supportent des placeholders genre `{{port}}` ou `{{path}}` qui demandent les valeurs avant insertion, donc un snippet generique "tail ce log" marche sur n\'importe quel chemin. Votre bibliotheque de snippets est portable : export en JSON, import sur un autre Mac.',
    },
    useCasesHeading: { en: 'Snippet workflows', fr: 'Workflows snippets' },
    useCases: [
      {
        title: { en: 'Onboarding new hires', fr: 'Onboarding des nouveaux' },
        description: {
          en: 'Export your team\'s blessed snippet library, share the JSON, every new hire imports it. Common ops (deploy, restart, status) become discoverable through the search instead of tribal knowledge.',
          fr: 'Exportez la bibliotheque de snippets benie de votre equipe, partagez le JSON, chaque nouveau l\'importe. Les operations courantes (deploy, restart, status) deviennent decouvrables via la recherche au lieu d\'etre du savoir tribal.',
        },
      },
      {
        title: { en: 'Quick log triage', fr: 'Triage de logs rapide' },
        description: {
          en: 'Snippets like "last 50 nginx errors", "auth failures today", "slow queries" — one click each. Combine with broadcast for fleet-wide log analysis.',
          fr: 'Snippets type "50 dernieres erreurs nginx", "echecs auth aujourd\'hui", "slow queries" — un clic chacun. Combinez avec broadcast pour analyse de logs sur toute la flotte.',
        },
      },
      {
        title: { en: 'Standardize incident response', fr: 'Standardiser la reponse incident' },
        description: {
          en: 'Build a "first 60 seconds" snippet: load avg, disk space, top processes, recent error logs. Run it the moment a server alerts. Consistent triage data, every time.',
          fr: 'Construisez un snippet "60 premieres secondes" : load avg, espace disque, top processus, logs d\'erreur recents. Lancez-le au moment ou un serveur alerte. Donnees de triage coherentes, a chaque fois.',
        },
      },
    ],
    faqHeading: { en: 'Snippets — frequently asked questions', fr: 'Snippets — questions frequentes' },
    faq: [
      {
        question: { en: 'Can snippets contain multi-line commands?', fr: 'Les snippets peuvent-ils contenir des commandes multi-ligne ?' },
        answer: {
          en: 'Yes. Multi-line snippets paste as-is into the terminal. For very long scripts, consider committing them to a Git repo on your servers and using a snippet to invoke them — keeps the snippet library lean.',
          fr: 'Oui. Les snippets multi-ligne se collent tels quels dans le terminal. Pour des scripts tres longs, commit-les dans un repo Git sur vos serveurs et utilisez un snippet pour les invoquer — la bibliotheque reste legere.',
        },
      },
      {
        question: { en: 'Can I share snippets between Macs?', fr: 'Puis-je partager des snippets entre Macs ?' },
        answer: {
          en: 'Yes via export/import. SSHive ships an encrypted `.webssh` export with passphrase that can include your snippet library; you can also store the snippets file in iCloud Drive or Dropbox and symlink it into SSHive\'s data directory.',
          fr: 'Oui via export/import. SSHive embarque un export `.webssh` chiffre avec passphrase qui peut inclure votre bibliotheque de snippets ; vous pouvez aussi stocker le fichier de snippets dans iCloud Drive ou Dropbox et le symlinker dans le repertoire de donnees SSHive.',
        },
      },
      {
        question: { en: 'Are snippets free?', fr: 'Les snippets sont-ils gratuits ?' },
        answer: {
          en: 'Yes — Quick Commands are included in the free tier with the 14 presets. Custom snippet creation works in free too. No artificial limits.',
          fr: 'Oui — Quick Commands est inclus en gratuit avec les 14 presets. La creation de snippets custom marche aussi en gratuit. Pas de limite artificielle.',
        },
      },
      {
        question: { en: 'Can I share a snippet with a teammate via a link?', fr: 'Puis-je partager un snippet avec un collegue via un lien ?' },
        answer: {
          en: 'Right-click any snippet, "Copy as URI" — generates `sshive://snippet?...` that another SSHive install on macOS opens with a confirm dialog. Useful for one-off shares without exporting the whole library.',
          fr: 'Clic droit sur un snippet, "Copy as URI" — genere `sshive://snippet?...` qu\'un autre SSHive sur macOS ouvre avec un dialogue de confirmation. Utile pour partage one-off sans exporter toute la bibliotheque.',
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
