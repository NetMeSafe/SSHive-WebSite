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
      fr: 'SSHive est le seul client de cette liste qui regroupe terminal SSH, gestionnaire SFTP, RDP integre, VNC integre, tunnels SSH (-L, -R, -D), broadcast multi-hote, bibliotheque de snippets, outils reseau et un serveur MCP integre pour Claude Code, Cursor et Claude Desktop — le tout dans une fenetre Apple native, sur Mac comme sur iPhone et iPad. Les identifiants sont dans le Trousseau macOS, proteges par Touch ID. Gratuit pour SSH et SFTP ; Pro a 9,99 $ achat unique sur le Mac App Store, sans frais recurrents, mises a jour a vie. Si vous faites quoi que ce soit au-dela d\'un terminal, c\'est ce qu\'on utilise nous-memes.',
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
];

export const BEST_PAGE_SLUGS = BEST_PAGES.map((p) => p.slug);

export function getBestPage(slug: string): BestPageSEO | undefined {
  return BEST_PAGES.find((p) => p.slug === slug);
}
