import type { Bilingual, QA } from './features';

export interface BestPageEntry {
  rank: number;
  name: string;
  bestFor: Bilingual;
  pricing: Bilingual;
  url?: string;
  /** Internal link to a /compare page if we have one */
  compareSlug?: string;
}

export interface BestPageSEO {
  slug: string;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  intro: Bilingual;
  ourPickHeading: Bilingual;
  ourPickBody: Bilingual;
  shortlistHeading: Bilingual;
  shortlist: BestPageEntry[];
  reasonsHeading: Bilingual;
  reasons: Array<{ title: Bilingual; body: Bilingual }>;
  faq: QA[];
}

export const BEST_PAGES: BestPageSEO[] = [
  {
    slug: 'best-ssh-client-for-mac',
    metaTitle: {
      en: 'Best SSH Client for Mac in 2026 — Free, Native, AI-Ready',
      fr: 'Meilleur client SSH pour Mac en 2026 — Gratuit, natif, pret pour l\'IA',
    },
    metaDescription: {
      en: 'A curated guide to the best SSH clients for macOS in 2026: SSHive, iTerm2, Termius, PuTTY (port), Royal TSX, SecureCRT — pricing, strengths, and which to pick.',
      fr: 'Guide cure des meilleurs clients SSH pour macOS en 2026 : SSHive, iTerm2, Termius, PuTTY (port), Royal TSX, SecureCRT — prix, forces et lequel choisir.',
    },
    h1: {
      en: 'The best SSH client for Mac in 2026',
      fr: 'Le meilleur client SSH pour Mac en 2026',
    },
    hero: {
      en: 'A short, honest, curated guide. Six SSH clients tested on macOS — what each does well, what they cost, and which one we use ourselves.',
      fr: 'Un guide court, honnete et cure. Six clients SSH testes sur macOS — ce que chacun fait bien, leurs prix, et celui qu\'on utilise nous-memes.',
    },
    intro: {
      en: 'There is no shortage of SSH clients on macOS — Apple ships Terminal.app, the open-source community has iTerm2, freemium SaaS like Termius, classic Windows ports like PuTTY, and enterprise tools like SecureCRT. The right choice depends on what you actually do beyond the terminal: if you only run `ssh user@host` and live in a shell, iTerm2 is great. If you need SFTP, RDP, VNC, tunnels, broadcast and AI integration in one window, the answer changes.\n\nThis page lists the six SSH clients we evaluated on macOS, ranked by what gets the most done for sysadmins, developers, and on-call engineers. We disclose upfront: SSHive is our own product, so we are biased — but we have tried to be fair on each alternative\'s strengths.',
      fr: 'Les clients SSH ne manquent pas sur macOS — Apple fournit Terminal.app, la communaute open source iTerm2, les SaaS freemium comme Termius, les portages Windows classiques comme PuTTY, et les outils entreprise comme SecureCRT. Le bon choix depend de ce que vous faites au-dela du terminal : si vous lancez juste `ssh user@host` et vivez dans un shell, iTerm2 est tres bon. Si vous avez besoin de SFTP, RDP, VNC, tunnels, broadcast et integration IA dans une fenetre, la reponse change.\n\nCette page liste les six clients SSH evalues sur macOS, classes par ce qui produit le plus pour sysadmins, developpeurs et ingenieurs d\'astreinte. On disclose direct : SSHive est notre produit, on est biaises — mais on s\'est efforce d\'etre justes sur les forces de chaque alternative.',
    },
    ourPickHeading: { en: 'Our pick: SSHive', fr: 'Notre choix : SSHive' },
    ourPickBody: {
      en: 'SSHive is the only client on this list that bundles SSH terminal, SFTP file manager, embedded RDP, embedded VNC, SSH tunnels (-L, -R, -D), multi-host broadcast, snippet library, network tools, and a built-in MCP server for Claude Code, Cursor and Claude Desktop — all in one Apple-native window, on Mac as well as iPhone and iPad. Credentials live in the macOS Keychain, gated by Touch ID. Free for SSH and SFTP; Pro is a one-time $9.99 on the Mac App Store with no recurring fees and lifetime updates. If you do anything beyond a terminal, this is what we use ourselves.',
      fr: 'SSHive est le seul client de cette liste qui regroupe terminal SSH, gestionnaire SFTP, RDP integre, VNC integre, tunnels SSH (-L, -R, -D), broadcast multi-hote, bibliotheque de snippets, outils reseau et un serveur MCP integre pour Claude Code, Cursor et Claude Desktop — le tout dans une fenetre Apple native, sur Mac comme sur iPhone et iPad. Les identifiants sont dans le Trousseau macOS, proteges par Touch ID. Gratuit pour SSH et SFTP ; Pro a 9,99 € achat unique sur le Mac App Store, sans frais recurrents, mises a jour a vie. Si vous faites quoi que ce soit au-dela d\'un terminal, c\'est ce qu\'on utilise nous-memes.',
    },
    shortlistHeading: {
      en: 'The other clients we considered',
      fr: 'Les autres clients evalues',
    },
    shortlist: [
      {
        rank: 2,
        name: 'iTerm2',
        bestFor: {
          en: 'Pure terminal power-users who do not need built-in SFTP, RDP, or VNC.',
          fr: 'Power users du terminal pur qui n\'ont pas besoin de SFTP, RDP ou VNC integres.',
        },
        pricing: { en: 'Free, open source', fr: 'Gratuit, open source' },
        compareSlug: 'iterm2',
      },
      {
        rank: 3,
        name: 'Termius',
        bestFor: {
          en: 'Cross-platform users who want sync between Mac, iOS, and Windows in a polished UI.',
          fr: 'Utilisateurs cross-platform qui veulent une sync entre Mac, iOS et Windows avec une UI soignee.',
        },
        pricing: { en: 'Free tier; advanced features paid (subscription)', fr: 'Tier gratuit ; fonctionnalites avancees payantes (abonnement)' },
        compareSlug: 'termius',
      },
      {
        rank: 4,
        name: 'Tabby (formerly Terminus)',
        bestFor: {
          en: 'Developers who want a customizable, theme-rich terminal with a plugin ecosystem.',
          fr: 'Developpeurs qui veulent un terminal personnalisable avec ecosysteme de plugins.',
        },
        pricing: { en: 'Free, open source', fr: 'Gratuit, open source' },
        compareSlug: 'terminus',
      },
      {
        rank: 5,
        name: 'Royal TSX',
        bestFor: {
          en: 'Multi-protocol remote management on Mac via a plugin architecture (SSH, RDP, VNC, SFTP).',
          fr: 'Gestion remote multi-protocole sur Mac via architecture de plugins (SSH, RDP, VNC, SFTP).',
        },
        pricing: { en: 'Free for limited use; paid license per user', fr: 'Gratuit en usage limite ; licence payante par utilisateur' },
        compareSlug: 'royal-tsx',
      },
      {
        rank: 6,
        name: 'PuTTY (unofficial Mac port)',
        bestFor: {
          en: 'Windows-to-Mac switchers who want the exact PuTTY UI they had before — at the cost of a non-native Mac experience.',
          fr: 'Migrants Windows vers Mac qui veulent l\'UI PuTTY exacte qu\'ils avaient avant — au prix d\'une experience non native sur Mac.',
        },
        pricing: { en: 'Free, open source', fr: 'Gratuit, open source' },
        compareSlug: 'putty',
      },
      {
        rank: 7,
        name: 'SecureCRT',
        bestFor: {
          en: 'Enterprise users with scripting / session management needs and a per-seat budget.',
          fr: 'Utilisateurs entreprise avec besoins de scripting / gestion de sessions et un budget par siege.',
        },
        pricing: { en: 'Per-license enterprise pricing', fr: 'Prix par licence entreprise' },
        compareSlug: 'securecrt',
      },
    ],
    reasonsHeading: {
      en: 'Why we built SSHive instead of using one of these',
      fr: 'Pourquoi on a construit SSHive au lieu d\'utiliser l\'un d\'eux',
    },
    reasons: [
      {
        title: { en: 'Native to Apple, not a port', fr: 'Natif Apple, pas un portage' },
        body: {
          en: 'SSHive runs on Apple Silicon and Intel Macs as a Universal Binary, plus iPhone and iPad. macOS Keychain handles credentials with Touch ID gating. No Wine, no VM, no cross-platform compromise.',
          fr: 'SSHive tourne sur Apple Silicon et Intel Mac en binaire universel, plus iPhone et iPad. Le Trousseau macOS gere les identifiants avec Touch ID. Pas de Wine, pas de VM, pas de compromis multi-plateforme.',
        },
      },
      {
        title: { en: 'All-in-one window', fr: 'Fenetre tout-en-un' },
        body: {
          en: 'SSH, SFTP, RDP, VNC and tunnels live in the same window. The other clients on this list cover at most 2 of those 5 protocols — you end up running iTerm2 + Cyberduck + Microsoft Remote Desktop + RealVNC, juggling four windows for what should be one.',
          fr: 'SSH, SFTP, RDP, VNC et tunnels vivent dans la meme fenetre. Les autres clients couvrent au mieux 2 de ces 5 protocoles — vous finissez avec iTerm2 + Cyberduck + Microsoft Remote Desktop + RealVNC, a jongler entre quatre fenetres pour ce qui devrait en etre une.',
        },
      },
      {
        title: { en: 'AI-ready by default', fr: 'Pret pour l\'IA par defaut' },
        body: {
          en: 'SSHive ships an MCP server out of the box. One toggle in settings and Claude Code, Cursor, or Claude Desktop can run commands on your servers. None of the alternatives have this — the closest equivalents require gluing together OpenAI Codex CLI plus shell scripts plus a custom MCP server.',
          fr: 'SSHive embarque un serveur MCP par defaut. Un interrupteur dans les parametres et Claude Code, Cursor ou Claude Desktop peuvent lancer des commandes sur vos serveurs. Aucune des alternatives n\'a ca — l\'equivalent le plus proche demande de coller OpenAI Codex CLI plus des shell scripts plus un serveur MCP custom.',
        },
      },
      {
        title: { en: 'One-time price, no subscription', fr: 'Prix unique, sans abonnement' },
        body: {
          en: 'SSHive Pro is $9.99 once on the Mac App Store. Lifetime updates included. Termius costs ~$10/month for advanced features. SecureCRT is per-seat enterprise pricing. Royal TSX has its own license model. Over a year, SSHive comes out cheapest by a large margin.',
          fr: 'SSHive Pro coute 9,99 $ une fois sur le Mac App Store. Mises a jour a vie incluses. Termius coute ~10 $/mois pour les fonctionnalites avancees. SecureCRT est en tarification entreprise par siege. Royal TSX a son propre modele de licence. Sur un an, SSHive sort gagnant largement.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is SSHive really free?', fr: 'SSHive est-il vraiment gratuit ?' },
        answer: {
          en: 'The free tier is real and unrestricted in time. It covers SSH terminal, SFTP file manager, snippets, profiles and Keychain credential storage with a small concurrent-session limit. Pro adds RDP, VNC, tunnels, broadcast, MCP and unlimited sessions for $9.99 one-time on the Mac App Store.',
          fr: 'Le tier gratuit est reel et sans limite dans le temps. Il couvre terminal SSH, gestionnaire SFTP, snippets, profils et stockage Trousseau, avec une petite limite de sessions concurrentes. Pro ajoute RDP, VNC, tunnels, broadcast, MCP et sessions illimitees pour 9,99 $ achat unique sur le Mac App Store.',
        },
      },
      {
        question: { en: 'Can I import my existing SSH config or sessions from another tool?', fr: 'Puis-je importer ma config SSH ou mes sessions d\'un autre outil ?' },
        answer: {
          en: 'Yes. SSHive imports `~/.ssh/config`, PuTTY registry exports, Royal TSX `.rtsz`, and cleartext MobaXterm.ini files. Profiles created on Mac can also be exported as encrypted `.webssh` for iPhone or iPad.',
          fr: 'Oui. SSHive importe `~/.ssh/config`, les exports registry PuTTY, les fichiers Royal TSX `.rtsz` et les fichiers MobaXterm.ini en clair. Les profils crees sur Mac peuvent aussi etre exportes en `.webssh` chiffres pour iPhone ou iPad.',
        },
      },
      {
        question: { en: 'What about the macOS built-in Terminal.app?', fr: 'Et le Terminal.app integre a macOS ?' },
        answer: {
          en: 'Terminal.app is fine for occasional `ssh user@host` and that\'s it — no profile manager, no SFTP, no tunnels UI, no Keychain integration for SSH passphrases beyond what `ssh-add --apple-use-keychain` provides. For anything beyond a single command, you outgrow it within a week.',
          fr: 'Terminal.app convient pour un `ssh user@host` occasionnel et c\'est tout — pas de gestionnaire de profils, pas de SFTP, pas d\'UI tunnels, pas d\'integration Trousseau pour les passphrases SSH au-dela de ce que fournit `ssh-add --apple-use-keychain`. Pour tout ce qui depasse une commande unique, vous le depassez en une semaine.',
        },
      },
    ],
  },
  {
    slug: 'best-sftp-client-for-mac',
    metaTitle: {
      en: 'Best SFTP Client for Mac in 2026 — Free Native Options Compared',
      fr: 'Meilleur client SFTP pour Mac en 2026 — Options gratuites natives comparees',
    },
    metaDescription: {
      en: 'A curated guide to the best SFTP clients for macOS in 2026: SSHive, Cyberduck, Transmit, FileZilla, ForkLift. Drag-and-drop transfers, remote editing, free vs paid.',
      fr: 'Guide cure des meilleurs clients SFTP pour macOS en 2026 : SSHive, Cyberduck, Transmit, FileZilla, ForkLift. Transferts drag-and-drop, edition distante, gratuit vs payant.',
    },
    h1: {
      en: 'The best SFTP client for Mac in 2026',
      fr: 'Le meilleur client SFTP pour Mac en 2026',
    },
    hero: {
      en: 'Five SFTP clients tested on macOS — drag-and-drop, remote editing, multi-protocol, native feel. Which one to pick for your workflow.',
      fr: 'Cinq clients SFTP testes sur macOS — drag-and-drop, edition distante, multi-protocole, look natif. Lequel choisir selon votre workflow.',
    },
    intro: {
      en: 'macOS does not include a built-in graphical SFTP client. The Finder does not natively connect to SFTP servers, and `scp` from Terminal is fine for one-off transfers but slow for the back-and-forth file editing many sysadmins do daily. So you need a third-party tool. The market splits in two: dedicated multi-protocol file transfer apps (Cyberduck, Transmit, FileZilla, ForkLift) and SSH-suite tools that bundle SFTP next to a terminal (SSHive). The right pick depends on whether you also need SSH/RDP/VNC in the same window.',
      fr: 'macOS n\'inclut pas de client SFTP graphique integre. Le Finder ne se connecte pas nativement aux serveurs SFTP, et `scp` depuis le Terminal convient aux transferts one-off mais est lent pour les allers-retours d\'edition que beaucoup de sysadmins font au quotidien. Il faut donc un outil tiers. Le marche se divise en deux : apps de transfert multi-protocole dediees (Cyberduck, Transmit, FileZilla, ForkLift) et outils suite SSH qui regroupent SFTP a cote d\'un terminal (SSHive). Le bon choix depend de si vous avez aussi besoin de SSH/RDP/VNC dans la meme fenetre.',
    },
    ourPickHeading: {
      en: 'Our pick if you also do SSH: SSHive',
      fr: 'Notre choix si vous faites aussi du SSH : SSHive',
    },
    ourPickBody: {
      en: 'SSHive\'s SFTP file manager lives in the same window as the SSH terminal: dual-pane local-vs-remote browser, drag-and-drop from Finder, built-in remote text editor (CodeMirror), bulk operations, transfer progress with speed. The killer feature is workflow integration — fix a config in the SSHive editor, restart the service in the SSHive terminal next to it, in the same session. If you only need pure SFTP and never touch SSH, dedicated apps below may be a better fit.',
      fr: 'Le gestionnaire SFTP de SSHive vit dans la meme fenetre que le terminal SSH : navigateur double panneau local-vs-distant, drag-and-drop depuis le Finder, editeur de texte distant integre (CodeMirror), operations en lot, progression des transferts avec vitesse. La fonctionnalite phare est l\'integration workflow — corrigez une config dans l\'editeur SSHive, redemarrez le service dans le terminal SSHive a cote, dans la meme session. Si vous voulez du SFTP pur sans toucher au SSH, les apps dediees ci-dessous sont peut-etre plus adaptees.',
    },
    shortlistHeading: {
      en: 'The pure SFTP / file-transfer alternatives',
      fr: 'Les alternatives SFTP / transfert pur',
    },
    shortlist: [
      {
        rank: 2,
        name: 'Cyberduck',
        bestFor: {
          en: 'Multi-protocol file transfer (SFTP, FTP, FTPS, WebDAV, S3, Azure, Google Cloud) with a free open-source core.',
          fr: 'Transfert multi-protocole (SFTP, FTP, FTPS, WebDAV, S3, Azure, Google Cloud) avec un coeur open source gratuit.',
        },
        pricing: { en: 'Free, donation-supported', fr: 'Gratuit, soutenu par dons' },
      },
      {
        rank: 3,
        name: 'Transmit',
        bestFor: {
          en: 'A polished, fast SFTP/FTP client made by Panic — the best UX in the category, paid.',
          fr: 'Un client SFTP/FTP soigne et rapide par Panic — la meilleure UX de la categorie, payant.',
        },
        pricing: { en: 'Paid one-time license (per major version)', fr: 'Licence payante achat unique (par version majeure)' },
      },
      {
        rank: 4,
        name: 'ForkLift',
        bestFor: {
          en: 'Dual-pane file manager that doubles as an SFTP client, with cloud-storage support.',
          fr: 'Gestionnaire de fichiers double panneau qui sert aussi de client SFTP, avec support cloud.',
        },
        pricing: { en: 'Paid one-time or subscription', fr: 'Achat unique ou abonnement' },
      },
      {
        rank: 5,
        name: 'FileZilla',
        bestFor: {
          en: 'Cross-platform veteran (Windows, Mac, Linux) — works fine, dated UI, free.',
          fr: 'Veteran cross-platform (Windows, Mac, Linux) — fonctionne bien, UI datee, gratuit.',
        },
        pricing: { en: 'Free, open source', fr: 'Gratuit, open source' },
      },
    ],
    reasonsHeading: {
      en: 'Why combining SFTP and SSH in one window is worth it',
      fr: 'Pourquoi regrouper SFTP et SSH dans une fenetre est utile',
    },
    reasons: [
      {
        title: { en: 'No more app-juggling', fr: 'Plus de jonglage entre apps' },
        body: {
          en: 'Editing a config and restarting a service is a single workflow. With Cyberduck + Terminal, that is two apps and a constant Cmd+Tab. With SSHive\'s integrated panes, both are one click apart.',
          fr: 'Editer une config et redemarrer un service est un seul workflow. Avec Cyberduck + Terminal, c\'est deux apps et un Cmd+Tab permanent. Avec les panneaux integres de SSHive, les deux sont a un clic.',
        },
      },
      {
        title: { en: 'Same auth, same Keychain', fr: 'Meme auth, meme Trousseau' },
        body: {
          en: 'SFTP runs over the SSH connection. SSHive stores SSH credentials in the macOS Keychain via Touch ID — the SFTP pane uses the same auth automatically. No re-typing passwords, no separate credentials per protocol.',
          fr: 'SFTP tourne sur la connexion SSH. SSHive stocke les identifiants SSH dans le Trousseau macOS via Touch ID — le panneau SFTP utilise la meme auth automatiquement. Pas besoin de retaper les mots de passe, pas d\'identifiants separes par protocole.',
        },
      },
      {
        title: { en: 'Native to Mac, iPhone, iPad', fr: 'Natif Mac, iPhone, iPad' },
        body: {
          en: 'SSHive\'s SFTP works on iPhone and iPad too, with profiles synced from Mac. Cyberduck and Transmit are Mac-only on the Apple side; FileZilla has a separate Android version.',
          fr: 'Le SFTP de SSHive fonctionne aussi sur iPhone et iPad, avec profils synchronises depuis Mac. Cyberduck et Transmit sont Mac-only cote Apple ; FileZilla a une version Android separee.',
        },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does SSHive support FTP, FTPS, WebDAV or S3?',
          fr: 'SSHive supporte-t-il FTP, FTPS, WebDAV ou S3 ?',
        },
        answer: {
          en: 'No — SSHive is SFTP-only on the file-transfer side. For FTP, FTPS, WebDAV, S3, Azure Blob, Google Cloud Storage, use Cyberduck or Transmit instead. If 95% of your transfers are SFTP, SSHive is the right tool.',
          fr: 'Non — SSHive est SFTP-only cote transfert. Pour FTP, FTPS, WebDAV, S3, Azure Blob, Google Cloud Storage, utilisez Cyberduck ou Transmit. Si 95% de vos transferts sont SFTP, SSHive est le bon outil.',
        },
      },
      {
        question: {
          en: 'Can I edit remote files in place with SSHive?',
          fr: 'Puis-je editer des fichiers distants en place avec SSHive ?',
        },
        answer: {
          en: 'Yes. Double-click any text file in the SFTP pane and it opens in SSHive\'s built-in CodeMirror editor. Cmd+S writes back to the server. Binary files open in the macOS default app via a temp file SSHive watches; saving uploads back automatically.',
          fr: 'Oui. Double-clic sur un fichier texte dans le panneau SFTP, il s\'ouvre dans l\'editeur CodeMirror integre de SSHive. Cmd+S sauvegarde sur le serveur. Les fichiers binaires s\'ouvrent dans l\'app macOS par defaut via un temp file que SSHive surveille ; la sauvegarde reupload automatiquement.',
        },
      },
      {
        question: {
          en: 'How fast are SFTP transfers in SSHive?',
          fr: 'A quelle vitesse vont les transferts SFTP dans SSHive ?',
        },
        answer: {
          en: 'On gigabit Ethernet, SFTP saturates the link (110-120 MB/s) given a fast remote disk and AES-NI-capable cipher. Bottlenecks are usually the remote storage IOPS and CPU for SSH encryption, not the client. SSHive uses parallel chunked transfers (4 streams by default) to maximize throughput on high-latency links.',
          fr: 'Sur Ethernet gigabit, le SFTP sature le lien (110-120 Mo/s) avec un disque distant rapide et un cipher compatible AES-NI. Les goulots sont generalement les IOPS du stockage distant et le CPU pour le chiffrement SSH, pas le client. SSHive utilise des transferts paralleles en chunks (4 streams par defaut) pour maximiser le debit sur les liens a forte latence.',
        },
      },
    ],
  },
  {
    slug: 'best-rdp-client-for-mac',
    metaTitle: {
      en: 'Best RDP Client for Mac in 2026 — Native Alternatives Compared',
      fr: 'Meilleur client RDP pour Mac en 2026 — Alternatives natives comparees',
    },
    metaDescription: {
      en: 'A curated guide to the best RDP clients on macOS in 2026: SSHive (embedded), Microsoft Remote Desktop, Royal TSX, Jump Desktop, Parallels Client — features, AD support and price.',
      fr: 'Guide cure des meilleurs clients RDP sur macOS en 2026 : SSHive (integre), Microsoft Remote Desktop, Royal TSX, Jump Desktop, Parallels Client — fonctionnalites, support AD et prix.',
    },
    h1: {
      en: 'The best RDP client for Mac in 2026',
      fr: 'Le meilleur client RDP pour Mac en 2026',
    },
    hero: {
      en: 'Five RDP clients tested on macOS — Active Directory, NLA, performance and which one fits a real SSH/SFTP workflow.',
      fr: 'Cinq clients RDP testes sur macOS — Active Directory, NLA, performances et lequel s\'integre a un vrai workflow SSH/SFTP.',
    },
    intro: {
      en: 'macOS has a healthy choice of RDP clients in 2026 — Apple does not ship one, but Microsoft offers a free official client on the Mac App Store, and several strong third-party tools cover the multi-protocol and team scenarios. This guide ranks five RDP clients that work well on macOS Sonoma/Sequoia, with notes on Active Directory, NLA, gateway configurations and what happens when you also need SSH and SFTP to the same fleet.\n\nWe ranked by real-world ergonomics: how fast you can open a saved connection, whether it remembers domain/username/password securely, how it handles Ctrl+Alt+Del and the Windows key, and whether you have to leave the app to do SSH or SFTP on the same machine. Order is not about screen-redraw FPS — they are all fine on Apple Silicon.',
      fr: 'macOS a un bon choix de clients RDP en 2026 — Apple n\'en fournit pas, mais Microsoft propose un client officiel gratuit sur le Mac App Store, et plusieurs outils tiers solides couvrent les scenarios multi-protocoles et equipe. Ce guide classe cinq clients RDP qui marchent bien sur macOS Sonoma/Sequoia, avec notes sur Active Directory, NLA, gateways et ce qui se passe quand vous avez aussi besoin de SSH et SFTP sur la meme flotte.\n\nClassement par ergonomie reelle : a quelle vitesse on ouvre une connexion sauvegardee, est-ce que les credentials domain/username/password sont retenus en securite, comment Ctrl+Alt+Suppr et la touche Windows sont gerees, et si on doit quitter l\'app pour faire SSH ou SFTP sur la meme machine. L\'ordre ne porte pas sur le FPS de redraw — tous bons sur Apple Silicon.',
    },
    ourPickHeading: { en: 'Our pick: SSHive', fr: 'Notre choix : SSHive' },
    ourPickBody: {
      en: 'SSHive embeds a real RDP client (FreeRDP 3 on iOS/iPadOS, IronRDP on macOS) inside the same window as your SSH terminal and SFTP file manager. CredSSP, NLA, NTLMv2, Active Directory (NetBIOS and FQDN), Ctrl+Alt+Del, configurable resolution, clipboard — all there. When the Windows admin pages you at 2am to check a service behind a jump host, you do not open three apps: SSH-tunnel to the bastion, SFTP-edit a config, RDP into the Windows VM — all in one window. Credentials live in the macOS Keychain, gated by Touch ID. Pro is $9.99 one-time on the Mac App Store. The RDP feature is also free up to 2 concurrent sessions.',
      fr: 'SSHive embarque un vrai client RDP (FreeRDP 3 sur iOS/iPadOS, IronRDP sur macOS) dans la meme fenetre que votre terminal SSH et gestionnaire SFTP. CredSSP, NLA, NTLMv2, Active Directory (NetBIOS et FQDN), Ctrl+Alt+Suppr, resolution configurable, presse-papiers — tout est la. Quand l\'admin Windows bipe a 2h pour verifier un service derriere un jump host, vous n\'ouvrez pas trois apps : SSH-tunnel vers bastion, SFTP-edit une config, RDP sur la VM Windows, tout dans une fenetre. Les identifiants vont dans le Trousseau macOS, proteges par Touch ID. Pro a 9,99 € unique sur le Mac App Store. La feature RDP est aussi gratuite jusqu\'a 2 sessions simultanees.',
    },
    shortlistHeading: { en: 'The other RDP clients we considered', fr: 'Les autres clients RDP evalues' },
    shortlist: [
      {
        rank: 2,
        name: 'Microsoft Remote Desktop',
        bestFor: {
          en: 'Free, official Microsoft client. Solid for occasional RDP to a single Windows VM. Limited profile management and no SSH/SFTP.',
          fr: 'Client Microsoft officiel gratuit. Solide pour du RDP occasionnel vers une seule VM Windows. Gestion de profils limitee et pas de SSH/SFTP.',
        },
        pricing: { en: 'Free, Mac App Store', fr: 'Gratuit, Mac App Store' },
      },
      {
        rank: 3,
        name: 'Royal TSX',
        bestFor: {
          en: 'Plugin-based multi-protocol manager. A natural fit for large fleets and team workflows, with a deep license model for organizations.',
          fr: 'Gestionnaire multi-protocole base sur plugins. Adapte aux grosses flottes et workflows d\'equipe, avec un modele de licence pense pour les organisations.',
        },
        pricing: { en: 'Free limited; paid per-user license', fr: 'Gratuit limite ; licence payante par utilisateur' },
        compareSlug: 'royal-tsx',
      },
      {
        rank: 4,
        name: 'Jump Desktop',
        bestFor: {
          en: 'Polished RDP and VNC client with cross-platform sync. A strong fit for solo users who value sync between devices.',
          fr: 'Client RDP et VNC soigne avec sync cross-platform. Bon choix pour les utilisateurs solo qui veulent la sync entre appareils.',
        },
        pricing: { en: '$31.99 one-time or subscription (Connect.io)', fr: '31,99 $ unique ou abonnement (Connect.io)' },
      },
      {
        rank: 5,
        name: 'Parallels Client',
        bestFor: {
          en: 'Built for Parallels RAS environments. The right pick when your organization standardises on Parallels RAS.',
          fr: 'Concu pour les environnements Parallels RAS. Le bon choix quand votre organisation standardise sur Parallels RAS.',
        },
        pricing: { en: 'Free client; requires Parallels RAS server', fr: 'Client gratuit ; serveur Parallels RAS requis' },
      },
    ],
    reasonsHeading: { en: 'Why we picked SSHive for RDP on Mac', fr: 'Pourquoi SSHive pour le RDP sur Mac' },
    reasons: [
      {
        title: { en: 'Active Directory the way Windows does it', fr: 'Active Directory comme sur Windows' },
        body: {
          en: 'A dedicated Domain field, separate from the username, accepting both NetBIOS (`CORP`) and FQDN (`corp.example.com`). NLA + NTLMv2 are negotiated by default. Same input model that AD admins already use on Windows itself.',
          fr: 'Un champ Domaine dedie, separe du username, qui accepte NetBIOS (`CORP`) et FQDN (`corp.example.com`). NLA + NTLMv2 negocies par defaut. Meme modele d\'entree que les admins AD utilisent deja sur Windows.',
        },
      },
      {
        title: { en: 'RDP next to SSH and SFTP', fr: 'RDP a cote du SSH et SFTP' },
        body: {
          en: 'You rarely RDP without also needing SSH or SFTP nearby — a tunnel to the bastion, a config file to inspect. SSHive keeps all three in one window with tabs, so context-switching is one click instead of three app switches.',
          fr: 'On a rarement besoin de RDP sans aussi du SSH ou SFTP a cote — un tunnel vers le bastion, un fichier de config. SSHive garde les trois dans une fenetre avec onglets, le context-switch est un clic au lieu de trois app switches.',
        },
      },
      {
        title: { en: 'TLS 1.3 + CredSSP', fr: 'TLS 1.3 + CredSSP' },
        body: {
          en: 'Built on FreeRDP 3 on iOS/iPadOS and IronRDP on macOS — both modern, audited stacks with TLS 1.3 and CredSSP that work against Windows Server 2016, 2019, 2022, 2025 out of the box. NLA can be disabled per profile for legacy boxes.',
          fr: 'Base sur FreeRDP 3 sur iOS/iPadOS et IronRDP sur macOS — deux stacks modernes auditees avec TLS 1.3 et CredSSP qui marchent contre Windows Server 2016, 2019, 2022, 2025 sans config. NLA peut etre desactive par profil pour les boxes legacy.',
        },
      },
      {
        title: { en: 'Touch ID Keychain credentials', fr: 'Identifiants Trousseau Touch ID' },
        body: {
          en: 'Per-profile credentials live in the macOS Keychain, biometric-gated. You unlock the Mac with Touch ID, the credentials become available; they never sit in plaintext on disk.',
          fr: 'Les identifiants par profil sont dans le Trousseau macOS, biometrie. Vous deverrouillez le Mac avec Touch ID, ils deviennent disponibles ; jamais en clair sur disque.',
        },
      },
      {
        title: { en: 'Free for 2 RDP sessions', fr: 'Gratuit jusqu\'a 2 sessions RDP' },
        body: {
          en: 'You can try RDP without paying. Free covers 2 concurrent RDP sessions; Pro removes the cap and unlocks unlimited SFTP transfer size, all tunnel types and snippets. $9.99 one-time, no subscription.',
          fr: 'Vous pouvez essayer le RDP sans payer. Gratuit couvre 2 sessions RDP simultanees ; Pro retire la limite et debloque transferts SFTP illimites, tous les tunnels et snippets. 9,99 € unique, sans abonnement.',
        },
      },
      {
        title: { en: 'Also on iPhone and iPad', fr: 'Aussi sur iPhone et iPad' },
        body: {
          en: 'The iOS app ships the same FreeRDP 3 client. You can RDP into your Windows fleet from an iPhone Pro Max in landscape or an iPad with Magic Keyboard — Active Directory and NLA work the same.',
          fr: 'L\'app iOS embarque le meme client FreeRDP 3. Vous pouvez faire du RDP sur votre flotte Windows depuis un iPhone Pro Max en landscape ou un iPad avec Magic Keyboard — Active Directory et NLA fonctionnent pareil.',
        },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does SSHive RDP support Windows Server 2025?',
          fr: 'SSHive RDP supporte-t-il Windows Server 2025 ?',
        },
        answer: {
          en: 'Yes. FreeRDP 3 (iOS) and IronRDP (macOS) both target the current Microsoft RDP wire protocol with TLS 1.3 and CredSSP/NLA. Windows Server 2016, 2019, 2022 and 2025 work out of the box; Windows 10 and 11 Pro/Enterprise are also supported.',
          fr: 'Oui. FreeRDP 3 (iOS) et IronRDP (macOS) ciblent le protocole RDP Microsoft actuel avec TLS 1.3 et CredSSP/NLA. Windows Server 2016, 2019, 2022 et 2025 sans config ; Windows 10 et 11 Pro/Enterprise aussi supportes.',
        },
      },
      {
        question: {
          en: 'Can I disable NLA for legacy Windows servers?',
          fr: 'Puis-je desactiver NLA pour des serveurs Windows legacy ?',
        },
        answer: {
          en: 'Yes — a per-profile checkbox disables NLA. Useful for old Windows Server 2008 R2 boxes or servers where NLA is misconfigured. Default is NLA enabled, which is what you want for modern systems.',
          fr: 'Oui — une case par profil desactive NLA. Utile pour les vieux Windows Server 2008 R2 ou les serveurs ou NLA est mal configure. Par defaut NLA est active, ce qui est ce qu\'on veut sur les systemes modernes.',
        },
      },
      {
        question: {
          en: 'How does SSHive RDP handle Ctrl+Alt+Del and the Windows key?',
          fr: 'Comment SSHive RDP gere Ctrl+Alt+Suppr et la touche Windows ?',
        },
        answer: {
          en: 'A dedicated "Send Ctrl+Alt+Del" button is in the RDP toolbar. The Mac Command key maps to the Windows key by default; you can flip this per profile if you prefer.',
          fr: 'Un bouton dedie "Envoyer Ctrl+Alt+Suppr" dans la barre RDP. La touche Command du Mac est mappee a la touche Windows par defaut ; inversable par profil.',
        },
      },
      {
        question: {
          en: 'Can I RDP through an SSH jump host?',
          fr: 'Puis-je faire du RDP a travers un jump host SSH ?',
        },
        answer: {
          en: 'Yes. Open an SSH session to the bastion with a local tunnel forwarding port 3389 from a Windows host inside the network, then point an SSHive RDP profile at 127.0.0.1:<chosen-port>. The Tunnels UI makes this two clicks. Save the combo as a profile pair for one-click access later.',
          fr: 'Oui. Ouvrez une session SSH vers le bastion avec un tunnel local forwardant le port 3389 depuis un hote Windows interne, puis pointez un profil RDP SSHive sur 127.0.0.1:<port-choisi>. L\'UI Tunnels rend ca en deux clics. Sauvegardez en paire de profils pour acces en un clic apres.',
        },
      },
      {
        question: {
          en: 'Does SSHive RDP support clipboard between Mac and Windows?',
          fr: 'SSHive RDP supporte-t-il le presse-papiers entre Mac et Windows ?',
        },
        answer: {
          en: 'Yes. Bidirectional clipboard is enabled by default — copy in macOS, paste in the Windows RDP session, and vice versa. Disable per profile if your security policy forbids it.',
          fr: 'Oui. Presse-papiers bidirectionnel active par defaut — copier sur macOS, coller dans la session Windows RDP, et inversement. Desactivable par profil si la securite l\'interdit.',
        },
      },
    ],
  },
  {
    slug: 'best-vnc-client-for-mac',
    metaTitle: {
      en: 'Best VNC Viewer for Mac in 2026 — TLS, ARD & RFB Compared',
      fr: 'Meilleur viewer VNC pour Mac en 2026 — TLS, ARD et RFB compares',
    },
    metaDescription: {
      en: 'A short guide to the best VNC clients on macOS in 2026: SSHive (embedded), RealVNC Viewer, TigerVNC, Apple Screen Sharing — encryption, performance, which to pick.',
      fr: 'Guide court des meilleurs clients VNC sur macOS en 2026 : SSHive (integre), RealVNC Viewer, TigerVNC, Partage d\'ecran Apple — chiffrement, performances, lequel choisir.',
    },
    h1: {
      en: 'The best VNC client for Mac in 2026',
      fr: 'Le meilleur client VNC pour Mac en 2026',
    },
    hero: {
      en: 'Four VNC viewers compared on macOS — TLS support, ARD compatibility, performance over an SSH tunnel, and which one fits a real ops workflow.',
      fr: 'Quatre viewers VNC compares sur macOS — support TLS, compatibilite ARD, performances en tunnel SSH, lequel s\'integre a un vrai workflow ops.',
    },
    intro: {
      en: 'VNC is the universal "see what is on the screen" protocol for everything RDP does not cover — Linux desktops, Raspberry Pi, headless Mac minis, ESXi consoles. macOS has Screen Sharing in the base system (ARD-flavored VNC), but it lacks encryption negotiation against most non-Apple servers, has no saved-profile UI, and cannot reach a VNC server through an SSH tunnel without manual `ssh -L 5900:host:5900` plumbing.\n\nThis page compares the four VNC clients that actually work well on macOS Sonoma/Sequoia: SSHive (embedded, VeNCrypt + ARD + RFB), RealVNC Viewer (the commercial standard), TigerVNC (open-source), and Apple Screen Sharing (for Mac-to-Mac only). We weigh encryption, gestures, saved profiles and what happens when the VNC server lives behind an SSH bastion.',
      fr: 'VNC est le protocole universel "voir ce qui est a l\'ecran" pour tout ce que RDP ne couvre pas — bureaux Linux, Raspberry Pi, Mac minis headless, consoles ESXi. macOS a Partage d\'ecran dans la base (VNC saveur ARD), mais il manque la negociation de chiffrement contre la plupart des serveurs non-Apple, n\'a pas d\'UI de profils sauvegardes, et ne peut pas atteindre un serveur VNC via un tunnel SSH sans plumbing manuel `ssh -L 5900:host:5900`.\n\nCette page compare les quatre clients VNC qui marchent vraiment sur macOS Sonoma/Sequoia : SSHive (integre, VeNCrypt + ARD + RFB), RealVNC Viewer (le standard commercial), TigerVNC (open source), et Partage d\'ecran Apple (Mac-vers-Mac uniquement). Pesons chiffrement, gestes, profils sauvegardes et ce qui se passe quand le serveur VNC est derriere un bastion SSH.',
    },
    ourPickHeading: { en: 'Our pick: SSHive', fr: 'Notre choix : SSHive' },
    ourPickBody: {
      en: 'SSHive embeds RoyalVNC under the hood — the same VNC engine used in Royal TSX, with full TLS, VeNCrypt, ARD and standard RFB support. You get saved profiles with Touch ID-gated credentials, native macOS rendering and — critically — RDP, SSH and SFTP in the same window. Need to VNC into a headless Ubuntu through a bastion? Open an SSH tunnel in the Tunnels UI (two clicks), point a VNC profile at 127.0.0.1, save the combo. Future you opens it with one click. Free for two concurrent VNC sessions; Pro is $9.99 one-time on the Mac App Store. The same VNC engine ships on iOS and iPadOS too.',
      fr: 'SSHive embarque RoyalVNC sous le capot — le meme moteur VNC utilise dans Royal TSX, avec support complet TLS, VeNCrypt, ARD et RFB standard. Vous avez des profils sauvegardes avec credentials Touch ID, rendu macOS natif, et — critique — RDP, SSH et SFTP dans la meme fenetre. Besoin de VNC sur un Ubuntu headless via un bastion ? Ouvrez un tunnel SSH dans l\'UI Tunnels (deux clics), pointez un profil VNC sur 127.0.0.1, sauvegardez la combinaison. Future-vous l\'ouvre en un clic. Gratuit jusqu\'a deux sessions VNC simultanees ; Pro a 9,99 € unique sur le Mac App Store. Le meme moteur VNC est aussi sur iOS et iPadOS.',
    },
    shortlistHeading: { en: 'The other VNC clients we considered', fr: 'Les autres clients VNC evalues' },
    shortlist: [
      {
        rank: 2,
        name: 'RealVNC Viewer',
        bestFor: {
          en: 'The reference VNC client. Solid encryption, multi-platform sync via RealVNC Connect. Best if you also pay for RealVNC Connect on the server.',
          fr: 'Le client VNC de reference. Chiffrement solide, sync multi-plateforme via RealVNC Connect. Meilleur si vous payez aussi RealVNC Connect cote serveur.',
        },
        pricing: { en: 'Free for personal; paid tiers for teams', fr: 'Gratuit en usage personnel ; tiers payants en equipe' },
      },
      {
        rank: 3,
        name: 'TigerVNC',
        bestFor: {
          en: 'Open-source viewer that pairs well with TigerVNC server on Linux. Bare-bones UI, no profile sync, no saved credentials — but free and reliable.',
          fr: 'Viewer open source qui s\'associe bien au serveur TigerVNC sur Linux. UI minimale, pas de sync, pas de credentials sauvegardes — mais gratuit et fiable.',
        },
        pricing: { en: 'Free, open source', fr: 'Gratuit, open source' },
      },
      {
        rank: 4,
        name: 'Apple Screen Sharing',
        bestFor: {
          en: 'Built into macOS, perfect for Mac-to-Mac. ARD-flavored VNC only; cannot reliably connect to RealVNC, TigerVNC, libvncserver or X11 vncserver with encryption.',
          fr: 'Inclus dans macOS, parfait pour Mac-vers-Mac. VNC saveur ARD uniquement ; ne se connecte pas de facon fiable a RealVNC, TigerVNC, libvncserver ou X11 vncserver avec chiffrement.',
        },
        pricing: { en: 'Free, included in macOS', fr: 'Gratuit, inclus dans macOS' },
      },
    ],
    reasonsHeading: { en: 'Why we picked SSHive for VNC on Mac', fr: 'Pourquoi SSHive pour le VNC sur Mac' },
    reasons: [
      {
        title: { en: 'RoyalVNC engine', fr: 'Moteur RoyalVNC' },
        body: {
          en: 'SSHive uses RoyalVNC under the hood — the same engine that powers Royal TSX. Full TLS / VeNCrypt support, ARD authentication, standard RFB, in a native macOS framework with proper retina rendering and gesture handling.',
          fr: 'SSHive utilise RoyalVNC sous le capot — le meme moteur que Royal TSX. Support complet TLS / VeNCrypt, auth ARD, RFB standard, dans un framework macOS natif avec rendu retina propre et gestion des gestes.',
        },
      },
      {
        title: { en: 'VNC over SSH tunnel in two clicks', fr: 'VNC dans un tunnel SSH en deux clics' },
        body: {
          en: 'The Tunnels UI lets you forward a remote port to 127.0.0.1 in two clicks. Point a VNC profile at it and save the pair. Compare to manual `ssh -L 5900:headless:5900 bastion` and remembering to keep the terminal open.',
          fr: 'L\'UI Tunnels permet de forwarder un port distant vers 127.0.0.1 en deux clics. Pointez un profil VNC dessus et sauvegardez la paire. Comparez a `ssh -L 5900:headless:5900 bastion` manuel en gardant le terminal ouvert.',
        },
      },
      {
        title: { en: 'Native gestures, native zoom', fr: 'Gestes natifs, zoom natif' },
        body: {
          en: 'Trackpad two-finger scroll pans the VNC frame. Pinch zooms. Right-click works as expected. Apple Screen Sharing struggles with right-click on Linux servers; TigerVNC has a custom UI that does not feel native on Mac.',
          fr: 'Le scroll deux doigts trackpad pan la frame VNC. Pinch zoom. Clic droit fonctionne. Partage d\'ecran Apple galere avec le clic droit sur serveurs Linux ; TigerVNC a une UI custom pas native Mac.',
        },
      },
      {
        title: { en: 'Touch ID Keychain credentials', fr: 'Identifiants Trousseau Touch ID' },
        body: {
          en: 'VNC passwords (and the optional VNC username for ARD) sit in the macOS Keychain, biometric-gated. No keychain.txt files lying in your home directory.',
          fr: 'Les mots de passe VNC (et le username VNC optionnel pour ARD) sont dans le Trousseau macOS, biometrie. Pas de fichiers keychain.txt qui trainent dans votre home.',
        },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does SSHive VNC support Apple Remote Desktop (ARD)?',
          fr: 'SSHive VNC supporte-t-il Apple Remote Desktop (ARD) ?',
        },
        answer: {
          en: 'Yes. ARD authentication is one of the modes RoyalVNC supports. Connecting to another Mac with Screen Sharing enabled works without extra setup.',
          fr: 'Oui. L\'auth ARD est un des modes supportes par RoyalVNC. Se connecter a un autre Mac avec Partage d\'ecran active fonctionne sans config supplementaire.',
        },
      },
      {
        question: {
          en: 'Can I view a VNC server through an SSH bastion?',
          fr: 'Puis-je voir un serveur VNC via un bastion SSH ?',
        },
        answer: {
          en: 'Yes. Open an SSH local tunnel in the Tunnels UI (-L 5901:headless:5900 on the bastion profile), then point a VNC profile at 127.0.0.1:5901. Save the combination as a paired profile so future you opens both with one click.',
          fr: 'Oui. Ouvrez un tunnel SSH local dans l\'UI Tunnels (-L 5901:headless:5900 sur le profil bastion), puis pointez un profil VNC sur 127.0.0.1:5901. Sauvegardez en profil paire pour ouvrir les deux en un clic.',
        },
      },
      {
        question: {
          en: 'Is the VNC connection encrypted?',
          fr: 'La connexion VNC est-elle chiffree ?',
        },
        answer: {
          en: 'VeNCrypt / TLS is negotiated when the server supports it. For servers that only speak plain VNC (RFB), use SSHive\'s Tunnels UI to wrap the connection in an SSH tunnel — that gives you end-to-end encryption even if the VNC server is plaintext.',
          fr: 'VeNCrypt / TLS est negocie si le serveur le supporte. Pour les serveurs qui ne parlent que VNC plain (RFB), utilisez l\'UI Tunnels de SSHive pour envelopper la connexion dans un tunnel SSH — chiffrement bout-en-bout meme si le serveur VNC est en clair.',
        },
      },
      {
        question: {
          en: 'Does VNC work on iPhone and iPad too?',
          fr: 'Le VNC marche-t-il aussi sur iPhone et iPad ?',
        },
        answer: {
          en: 'Yes. The iOS app ships the same RoyalVNC engine. Tap to click, pinch to zoom, the integrated VNC keyboard exposes keys a touch screen normally cannot send.',
          fr: 'Oui. L\'app iOS embarque le meme moteur RoyalVNC. Tap pour cliquer, pinch pour zoomer, le clavier VNC integre expose les touches qu\'un ecran tactile ne peut pas envoyer normalement.',
        },
      },
    ],
  },
];

export const BEST_PAGE_SLUGS = BEST_PAGES.map((p) => p.slug);

export function getBestPage(slug: string): BestPageSEO | undefined {
  return BEST_PAGES.find((p) => p.slug === slug);
}
