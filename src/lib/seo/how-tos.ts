import type { Bilingual, QA } from './features';
import type { Feature } from '../constants';

export interface HowToStepData {
  name: Bilingual;
  text: Bilingual;
}

export interface HowToSEO {
  slug: string;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  intro: Bilingual;
  estimatedMinutes: number;
  steps: HowToStepData[];
  faq: QA[];
  relatedFeatures: Feature[];
  relatedUseCases?: string[];
  relatedHowTos?: string[];
}

export const HOW_TOS: HowToSEO[] = [
  {
    slug: 'ssh-tunnel-mac',
    metaTitle: {
      en: 'How to Set Up an SSH Tunnel on a Mac (2026 Guide)',
      fr: 'Comment configurer un tunnel SSH sur Mac (guide 2026)',
    },
    metaDescription: {
      en: 'Step-by-step guide to setting up SSH local, remote, and SOCKS5 tunnels on macOS, with the OpenSSH command line and visually with SSHive.',
      fr: 'Guide pas-a-pas pour configurer des tunnels SSH local, remote et SOCKS5 sur macOS, en ligne de commande OpenSSH et visuellement avec SSHive.',
    },
    h1: { en: 'How to set up an SSH tunnel on a Mac', fr: 'Comment configurer un tunnel SSH sur Mac' },
    hero: {
      en: 'A complete guide to local, remote, and SOCKS5 SSH tunnels on macOS, both command-line and visually in SSHive.',
      fr: 'Un guide complet aux tunnels SSH local, remote et SOCKS5 sur macOS, en ligne de commande et visuellement dans SSHive.',
    },
    intro: {
      en: 'An SSH tunnel forwards a network port over an encrypted SSH connection. There are three flavors: Local (`-L`) brings a remote port to your Mac, Remote (`-R`) exposes a Mac port on the remote server, Dynamic SOCKS5 (`-D`) gives you a per-app proxy. This guide covers all three using OpenSSH (built into macOS) and visually using SSHive\'s Tunnels UI, pick whichever fits your workflow. The end result is the same: secure, ephemeral port forwarding without VPN overhead.',
      fr: 'Un tunnel SSH forwarde un port reseau sur une connexion SSH chiffree. Trois saveurs : Local (`-L`) ramene un port distant sur le Mac, Remote (`-R`) expose un port Mac sur le serveur distant, Dynamic SOCKS5 (`-D`) donne un proxy par app. Ce guide couvre les trois en OpenSSH (integre a macOS) et visuellement dans l\'UI Tunnels de SSHive, choisissez selon votre workflow. Le resultat est le meme : port forwarding sur, ephemere, sans overhead VPN.',
    },
    estimatedMinutes: 5,
    steps: [
      {
        name: { en: 'Open a profile and expand "Advanced"', fr: 'Ouvrir un profil et derouler "Avance"' },
        text: {
          en: 'Sidebar → click + (new connection) or right-click an existing profile → Edit. Fill in host, port, username and auth as usual, then click "Advanced" at the bottom of the dialog. The Advanced section unfolds with three tunnel blocks listed vertically: Local (-L), Remote (-R) and SOCKS5 (-D).',
          fr: 'Sidebar → clic sur + (nouvelle connexion) ou clic droit sur un profil existant → Modifier. Remplissez hote, port, username et auth comme d\'habitude, puis cliquez sur "Avance" en bas du dialog. La section Avance se deplie avec trois blocs tunnels listes verticalement : Local (-L), Distant (-R) et SOCKS5 (-D).',
        },
      },
      {
        name: { en: 'Add a Local forward (-L), the most common case', fr: 'Ajouter un forward Local (-L), le cas le plus courant' },
        text: {
          en: 'Under "Local tunnels" click + Add. Three fields appear inline: Local port (e.g. `5433`, pick something ≥ 1024 to avoid sudo), Remote host (`db.internal`, what the SSH server can reach; use `localhost` if the target runs on the bastion itself), Remote port (`5432`). Save. The tunnel auto-mounts every time you connect to this profile. SSHive binds to 127.0.0.1 by default, no bind-address field exposed, that\'s a deliberate safety choice. Free tier: 1 Local tunnel max. Pro: 10.',
          fr: 'Sous "Tunnels locaux" cliquez sur + Ajouter. Trois champs apparaissent en ligne : Port local (ex. `5433`, choisissez ≥ 1024 pour eviter sudo), Hote distant (`db.internal`, ce que le serveur SSH peut atteindre ; mettez `localhost` si la cible tourne sur le bastion), Port distant (`5432`). Sauvegardez. Le tunnel se monte automatiquement a chaque connexion sur ce profil. SSHive bind sur 127.0.0.1 par defaut, pas de champ bind-address expose, c\'est un choix securite. Free : 1 tunnel Local max. Pro : 10.',
        },
      },
      {
        name: { en: 'Add a Remote forward (-R), Pro only', fr: 'Ajouter un forward Distant (-R), Pro uniquement' },
        text: {
          en: 'Under "Remote tunnels" click + Add. Fields: Remote port (the port that opens on the SSH server, e.g. `8080`), Local host (`localhost`), Local port (`3000`). On the SSH server, `curl localhost:8080` now reaches your Mac\'s `localhost:3000`. On Free, the section shows a PRO badge and the Add button is disabled, clicking it opens the upgrade modal. Pro cap: 5 Remote tunnels per profile.',
          fr: 'Sous "Tunnels distants" cliquez sur + Ajouter. Champs : Port distant (le port qui s\'ouvre sur le serveur SSH, ex. `8080`), Hote local (`localhost`), Port local (`3000`). Sur le serveur SSH, `curl localhost:8080` atteint maintenant le `localhost:3000` de votre Mac. En Free, la section affiche un badge PRO et le bouton Ajouter est desactive, au clic la modal d\'upgrade s\'ouvre. Plafond Pro : 5 tunnels distants par profil.',
        },
      },
      {
        name: { en: 'Read the ⇄ status pill in the bottom bar', fr: 'Lire la pastille ⇄ dans la barre du bas' },
        text: {
          en: 'Once connected, the status bar shows `⇄ N` where N is the number of active tunnels (Local + Remote + SOCKS combined). Click the pill to open the Tunnel Status panel: each tunnel is listed with its type, local port, target and live state, plus a per-tunnel close button. If a tunnel fails to bind (port already in use), the SSH session stays connected and the failure is logged, N just won\'t include that one.',
          fr: 'Une fois connecte, la barre de statut affiche `⇄ N` ou N est le nombre de tunnels actifs (Local + Distant + SOCKS combines). Cliquez sur la pastille pour ouvrir le panneau Tunnel Status : chaque tunnel y est liste avec son type, port local, cible, etat live, et un bouton de fermeture par tunnel. Si un tunnel echoue a se bind (port deja utilise), la session SSH reste connectee et l\'echec est logge, N ne le compte juste pas.',
        },
      },
      {
        name: { en: 'Auto-reconnect, tunnels come back with the session', fr: 'Auto-reconnexion, les tunnels reviennent avec la session' },
        text: {
          en: 'When the SSH session drops (Wi-Fi switch, sleep/wake, server bounce), all tunnels close, they\'re bound to the SSH connection. SSHive\'s auto-reconnect kicks in and remounts every tunnel in the profile in series. No manual action needed. If a specific tunnel keeps failing on reconnect, check the remote sshd: `AllowTcpForwarding yes` for Local/Remote, plus `GatewayPorts yes` if you need a Remote tunnel reachable from external interfaces.',
          fr: 'Quand la session SSH tombe (changement Wi-Fi, sleep/wake, serveur qui bouge), tous les tunnels se ferment, ils vivent avec la connexion SSH. L\'auto-reconnexion de SSHive se declenche et remonte tous les tunnels du profil en serie. Aucune action manuelle. Si un tunnel echoue toujours a la reconnexion, verifiez le sshd distant : `AllowTcpForwarding yes` pour Local/Distant, plus `GatewayPorts yes` si vous voulez qu\'un tunnel Distant soit joignable depuis les interfaces externes.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Tunnel dies when my SSH session ends?', fr: 'Le tunnel meurt quand ma session SSH finit ?' },
        answer: {
          en: 'Yes, tunnels live with the SSH connection. In SSHive, enable auto-reconnect on the profile and tunnels reattach automatically when the connection comes back. For long-running tunnels, set `ServerAliveInterval 60` in OpenSSH or use SSHive\'s built-in keepalive (default: 30s).',
          fr: 'Oui, les tunnels vivent avec la connexion SSH. Dans SSHive, activez l\'auto-reconnect sur le profil et les tunnels se rattachent automatiquement quand la connexion revient. Pour les tunnels longue duree, reglez `ServerAliveInterval 60` en OpenSSH ou utilisez le keepalive integre de SSHive (defaut : 30s).',
        },
      },
      {
        question: { en: 'Can I tunnel through a chain of jump hosts?', fr: 'Puis-je tunneler a travers une chaine de jump hosts ?' },
        answer: {
          en: 'Yes. CLI: `ssh -J bastion1,bastion2 -L 5432:db:5432 user@target` chains both bastions. In SSHive: configure each profile with the appropriate Jump Host, and tunnels work transparently through the chain.',
          fr: 'Oui. CLI : `ssh -J bastion1,bastion2 -L 5432:db:5432 user@target` chaine les deux bastions. Dans SSHive : configurez chaque profil avec le Jump Host approprie, les tunnels marchent de facon transparente a travers la chaine.',
        },
      },
    ],
    relatedFeatures: ['tunnels', 'ssh'],
    relatedUseCases: ['aws-ec2', 'home-server'],
    relatedHowTos: ['socks5-proxy-mac', 'jump-host-mac'],
  },
  {
    slug: 'ssh-key-mac',
    metaTitle: {
      en: 'How to Generate and Use SSH Keys on a Mac (2026)',
      fr: 'Comment generer et utiliser des cles SSH sur Mac (2026)',
    },
    metaDescription: {
      en: 'Generate ed25519 SSH keys on macOS, copy them to remote servers, configure ssh-agent and the Apple Keychain, use them in SSHive, complete 2026 guide.',
      fr: 'Generez des cles SSH ed25519 sur macOS, copiez-les sur les serveurs distants, configurez ssh-agent et le Trousseau Apple, utilisez-les dans SSHive, guide complet 2026.',
    },
    h1: { en: 'How to generate and use SSH keys on a Mac', fr: 'Comment generer et utiliser des cles SSH sur Mac' },
    hero: {
      en: 'From `ssh-keygen` to passwordless servers in 5 minutes, covers ed25519, ssh-agent, the Apple Keychain, and SSHive integration.',
      fr: 'De `ssh-keygen` aux serveurs sans mot de passe en 5 min, couvre ed25519, ssh-agent, le Trousseau Apple et l\'integration SSHive.',
    },
    intro: {
      en: 'Password authentication for SSH is a security smell, bots scan port 22 looking for weak passwords 24/7. SSH key authentication replaces "something you know" with "something you have", and once configured, you also stop typing passwords every time you connect. This guide gets you from no keys to a passwordless production server in 5 minutes, using ed25519 (the modern, fast, short keypair) and SSHive\'s built-in key management.',
      fr: 'L\'auth par mot de passe SSH est un signe de mauvaise securite, les bots scannent le port 22 a la recherche de mots de passe faibles 24/7. L\'auth par cle SSH remplace "ce que vous savez" par "ce que vous avez", et une fois configuree, vous arretez de taper des mots de passe a chaque connexion. Ce guide vous emmene de zero cle a un serveur prod sans mot de passe en 5 min, avec ed25519 (la paire moderne, rapide, courte) et la gestion de cles integree de SSHive.',
    },
    estimatedMinutes: 5,
    steps: [
      {
        name: { en: 'Generate the keypair (one-time, in any terminal)', fr: 'Generer la paire (une seule fois, dans n\'importe quel terminal)' },
        text: {
          en: 'SSHive does not embed a key generator, keep one source of truth at `~/.ssh/`. Open Terminal.app (or SSHive\'s built-in local terminal via Cmd+T) and run `ssh-keygen -t ed25519 -C "your-email@example.com"`. Press Enter to accept the default path (`~/.ssh/id_ed25519`). Set a passphrase, the macOS Keychain will remember it via SSHive\'s safeStorage so you only type it once.',
          fr: 'SSHive n\'embarque pas de generateur de cle, on garde une seule source de verite dans `~/.ssh/`. Ouvrez Terminal.app (ou le terminal local de SSHive via Cmd+T) et lancez `ssh-keygen -t ed25519 -C "votre-email@example.com"`. Entree pour accepter le chemin par defaut (`~/.ssh/id_ed25519`). Mettez une passphrase, le Trousseau macOS la retiendra via le safeStorage de SSHive, donc tapee une seule fois.',
        },
      },
      {
        name: { en: 'Copy the public key to the server (last time you type the password)', fr: 'Copier la cle publique sur le serveur (derniere fois que vous tapez le mot de passe)' },
        text: {
          en: 'Run `ssh-copy-id user@host` and authenticate with the password one last time. The command appends your public key to `~/.ssh/authorized_keys` on the server. From now on the server accepts the key.',
          fr: 'Lancez `ssh-copy-id user@host` et authentifiez-vous avec le mot de passe une derniere fois. La commande ajoute votre cle publique a `~/.ssh/authorized_keys` sur le serveur. A partir de la, le serveur accepte la cle.',
        },
      },
      {
        name: { en: 'Wire the key into a SSHive profile (3 clicks)', fr: 'Brancher la cle dans un profil SSHive (3 clics)' },
        text: {
          en: 'Open the profile dialog. The Authentication block has three radios: Password, Private Key, Agent. Pick **Private Key**. The "Browse" button opens the macOS file picker, navigate to `~/.ssh/id_ed25519`. The selected path appears in a read-only field with a green ✓ if SSHive can read it (or an orange ⚠ if the sandbox needs you to re-pick the file to mint a security-scoped bookmark). Tick "Protected by passphrase" if applicable, type the passphrase once, save.',
          fr: 'Ouvrez le dialog du profil. Le bloc Authentification a trois radios : Mot de passe, Cle privee, Agent. Choisissez **Cle privee**. Le bouton "Parcourir" ouvre le file picker macOS, naviguez vers `~/.ssh/id_ed25519`. Le chemin selectionne apparait dans un champ read-only avec un ✓ vert si SSHive peut le lire (ou un ⚠ orange si la sandbox demande de re-selectionner le fichier pour creer un security-scoped bookmark). Cochez "Protegee par passphrase" si applicable, tapez la passphrase une fois, sauvegardez.',
        },
      },
      {
        name: { en: 'Where SSHive stores what, a 4-line summary', fr: 'Ce que SSHive stocke ou, resume en 4 lignes' },
        text: {
          en: 'The key file path lives in `profiles.json` (just a path, in clear). The macOS sandbox bookmark for the file lives in the same JSON as `privateKeyBookmark` (binary). The passphrase lives in macOS Keychain via Electron safeStorage under `${profileId}:passphrase`. The plaintext password (if you used Password auth) lives in safeStorage under `${profileId}`. Touch ID prompt? macOS shows it automatically the first time SSHive\'s safeStorage touches the Keychain, SSHive itself does not call Touch ID directly.',
          fr: 'Le chemin du fichier de cle vit dans `profiles.json` (juste un chemin, en clair). Le bookmark sandbox macOS vit dans le meme JSON sous `privateKeyBookmark` (binaire). La passphrase vit dans le Trousseau macOS via safeStorage d\'Electron sous `${profileId}:passphrase`. Le mot de passe en clair (si auth Mot de passe) vit dans safeStorage sous `${profileId}`. Prompt Touch ID ? macOS l\'affiche automatiquement la premiere fois que safeStorage de SSHive touche le Trousseau, SSHive lui-meme ne declenche pas Touch ID directement.',
        },
      },
      {
        name: { en: 'Lock down password auth on the remote', fr: 'Verrouiller l\'auth par mot de passe cote serveur' },
        text: {
          en: 'Once SSHive connects with the key, harden the server: edit `/etc/ssh/sshd_config`, set `PasswordAuthentication no`, reload sshd (`sudo systemctl reload ssh`). Now nothing on that server accepts a password, bots scanning port 22 give up. Note: same auth options work in Free and Pro, there is no Pro gating on password / key / agent.',
          fr: 'Une fois que SSHive se connecte avec la cle, durcissez le serveur : editez `/etc/ssh/sshd_config`, mettez `PasswordAuthentication no`, reloadez sshd (`sudo systemctl reload ssh`). Plus rien sur ce serveur n\'accepte un mot de passe, les bots qui scannent le port 22 abandonnent. Note : les memes options d\'auth marchent en Free et en Pro, pas de gating Pro sur mot de passe / cle / agent.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Should I use RSA, ECDSA, or ed25519?', fr: 'Dois-je utiliser RSA, ECDSA ou ed25519 ?' },
        answer: {
          en: 'ed25519 is the right answer in 2026: faster, shorter, no known cryptographic weaknesses. Use RSA 4096 only when connecting to ancient OpenSSH versions (< 6.5) that don\'t support ed25519. Avoid ECDSA, it has more failure modes than ed25519.',
          fr: 'ed25519 est la bonne reponse en 2026 : plus rapide, plus court, pas de faiblesse cryptographique connue. Utilisez RSA 4096 uniquement pour vous connecter a des OpenSSH antiques (< 6.5) qui ne supportent pas ed25519. Evitez ECDSA, plus de modes d\'echec qu\'ed25519.',
        },
      },
      {
        question: { en: 'Where are my SSH keys stored on macOS?', fr: 'Ou sont stockees mes cles SSH sur macOS ?' },
        answer: {
          en: 'The keys themselves stay where ssh-keygen puts them, `~/.ssh/`. The passphrase that unlocks an encrypted key is what ends up in the macOS Keychain (via `--apple-use-keychain` or SSHive\'s safeStorage integration). The private key file is yours to back up, losing it locks you out of every server you copied it to.',
          fr: 'Les cles elles-memes restent ou ssh-keygen les pose, `~/.ssh/`. La passphrase qui deverrouille une cle chiffree finit dans le Trousseau macOS (via `--apple-use-keychain` ou l\'integration safeStorage de SSHive). Le fichier de cle privee est a vous de sauvegarder, le perdre vous bloque hors de chaque serveur sur lequel vous l\'avez copie.',
        },
      },
    ],
    relatedFeatures: ['ssh'],
    relatedUseCases: ['raspberry-pi', 'aws-ec2', 'home-server'],
    relatedHowTos: ['import-ssh-config-mac', 'jump-host-mac'],
  },
  {
    slug: 'sftp-gui-mac',
    metaTitle: {
      en: 'Best Free SFTP Client for Mac (2026), SSHive Guide',
      fr: 'Meilleur client SFTP gratuit pour Mac (2026), Guide complet',
    },
    metaDescription: {
      en: 'How to use SFTP on macOS visually, drag & drop file transfers, remote editing, bulk operations. Free SFTP client with SSH terminal in the same window.',
      fr: 'Comment utiliser SFTP sur macOS visuellement, transferts drag & drop, edition distante, operations en lot. Client SFTP gratuit avec terminal SSH dans la meme fenetre.',
    },
    h1: { en: 'How to use SFTP on a Mac (drag & drop, free)', fr: 'Comment utiliser SFTP sur Mac (drag & drop, gratuit)' },
    hero: {
      en: 'Drag-and-drop SFTP transfers, remote file editing, bulk ops, in the same window as your SSH terminal. Free.',
      fr: 'Transferts SFTP drag-and-drop, edition de fichiers distants, operations en lot, dans la meme fenetre que votre terminal SSH. Gratuit.',
    },
    intro: {
      en: 'SFTP is the file-transfer side of SSH, same auth, same encryption, same connection. macOS doesn\'t ship a graphical SFTP client; the Finder doesn\'t speak it natively (despite what some old tutorials claim). Free options have traditionally been Cyberduck (good but a separate window) or scp from the terminal (functional but slow). SSHive integrates SFTP in the same window as the SSH terminal, drag, drop, edit, save. This guide shows you how.',
      fr: 'SFTP est le cote transfert de fichiers de SSH, meme auth, meme chiffrement, meme connexion. macOS ne livre pas de client SFTP graphique ; le Finder ne le parle pas nativement (malgre ce que disent certains vieux tutos). Les options gratuites historiques : Cyberduck (bon mais fenetre separee) ou scp depuis le terminal (fonctionnel mais lent). SSHive integre SFTP dans la meme fenetre que le terminal SSH, drag, drop, edit, save. Ce guide vous montre comment.',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Open the SFTP panel next to a live SSH terminal', fr: 'Ouvrir le panneau SFTP a cote du terminal SSH actif' },
        text: {
          en: 'Connect to a profile (the SSH terminal opens). In the terminal toolbar, click the **folder icon** on the right, or hit **Cmd+Shift+F**. The SFTP panel slides in next to the terminal as a split view. Use the layout-toggle button in the same toolbar to switch between horizontal (SFTP left, terminal right) and vertical (SFTP top, terminal bottom). The divider is draggable; double-click it to reset the ratio. To close the panel, hit × in the SFTP nav bar or re-toggle from the toolbar.',
          fr: 'Connectez-vous a un profil (le terminal SSH s\'ouvre). Dans la toolbar du terminal, cliquez sur l\'**icone dossier** a droite, ou tapez **Cmd+Shift+F**. Le panneau SFTP apparait a cote du terminal en split view. Le bouton toggle layout dans la meme toolbar bascule entre horizontal (SFTP a gauche, terminal a droite) et vertical (SFTP en haut, terminal en bas). Le divider est draggable ; double-clic dessus pour reset le ratio. Pour fermer : × dans la barre de nav SFTP ou re-toggler depuis la toolbar.',
        },
      },
      {
        name: { en: 'Drag-and-drop from Finder (whole folders work)', fr: 'Drag-and-drop depuis le Finder (les dossiers entiers marchent)' },
        text: {
          en: 'Drag a file or an entire folder from Finder onto the SFTP panel, the drop overlay highlights and SSHive uploads recursively. Multi-file selections work too. If a file already exists on the remote, a dialog gives you three choices: **Replace / Duplicate** (suffix `(2)`) **/ Skip**. Free tier caps each file at 10 MB (the check happens server-side in `LicenseService.check(\'sftp.upload\')` before the transfer). Pro is unlimited per file. Download capacity is unlimited on both tiers.',
          fr: 'Glissez un fichier ou un **dossier entier** depuis le Finder sur le panneau SFTP, l\'overlay de drop s\'allume et SSHive upload de facon recursive. Les multi-selections marchent aussi. Si un fichier existe deja cote distant, un dialog propose trois choix : **Remplacer / Dupliquer** (suffixe `(2)`) **/ Ignorer**. En Free, chaque fichier est plafonne a 10 MB (le check passe par `LicenseService.check(\'sftp.upload\')` cote main process avant le transfert). Pro : illimite par fichier. Le download est illimite dans les deux tiers.',
        },
      },
      {
        name: { en: 'Edit text files in place, CodeMirror, Cmd+S, done', fr: 'Editer des fichiers texte en place, CodeMirror, Cmd+S, c\'est fait' },
        text: {
          en: 'Double-click any text file in the SFTP panel. It opens directly in SSHive\'s built-in **CodeMirror 6** editor, auto-highlight for JS/TS, Python, JSON, HTML, CSS, XML, YAML and Markdown. Edit and hit **Cmd+S**: SSHive uploads straight to the server, no temp file on disk, no manual reupload step. The tab title shows a "modified" dot until save. Practical limit is around 10 MB per file in the editor.',
          fr: 'Double-clic sur n\'importe quel fichier texte dans le panneau SFTP. Il s\'ouvre directement dans l\'editeur **CodeMirror 6** integre, coloration auto pour JS/TS, Python, JSON, HTML, CSS, XML, YAML et Markdown. Editez et tapez **Cmd+S** : SSHive upload directement vers le serveur, pas de fichier temp sur disque, pas de re-upload manuel. Le titre de l\'onglet affiche un point "modifie" tant que pas sauvegarde. Limite pratique autour de 10 MB par fichier dans l\'editeur.',
        },
      },
      {
        name: { en: 'Binary files (images, PDFs, archives), download, edit, push back', fr: 'Fichiers binaires (images, PDF, archives), telecharger, editer, repousser' },
        text: {
          en: 'SSHive does not auto-watch binaries opened in external apps, that pattern is fragile across macOS sandbox modes. Instead: double-click a binary → SSHive offers Download (macOS save dialog). Edit it locally with whatever app you want, then drag the modified file back into the SFTP panel. The Replace/Duplicate/Skip dialog appears, pick Replace. Two clicks more than auto-watch, zero surprises.',
          fr: 'SSHive ne surveille pas automatiquement les binaires ouverts dans des apps externes, ce pattern casse selon les modes sandbox macOS. A la place : double-clic sur un binaire → SSHive propose Telecharger (dialog macOS de sauvegarde). Editez en local avec l\'app que vous voulez, puis re-glissez le fichier modifie dans le panneau SFTP. Le dialog Remplacer/Dupliquer/Ignorer apparait, choisissez Remplacer. Deux clics de plus qu\'un auto-watch, zero surprise.',
        },
      },
      {
        name: { en: 'Bookmark deep paths and revisit them in one click', fr: 'Bookmarker des chemins profonds et y revenir en un clic' },
        text: {
          en: 'Right-click on any folder → **Add to bookmarks**. The path appears in the bookmarks dropdown of the SFTP panel, `/var/log`, `/etc/nginx`, `~/.config` are all good candidates. Bookmarks are per-profile, unlimited on both Free and Pro, and persisted in `profiles.json` so they survive restarts.',
          fr: 'Clic droit sur n\'importe quel dossier → **Ajouter aux favoris**. Le chemin apparait dans le dropdown favoris du panneau SFTP, `/var/log`, `/etc/nginx`, `~/.config` sont de bons candidats. Les favoris sont par profil, illimites en Free et en Pro, et persistes dans `profiles.json` donc ils survivent aux redemarrages.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is SSHive\'s SFTP free?', fr: 'Le SFTP de SSHive est-il gratuit ?' },
        answer: {
          en: 'Yes. SFTP is part of the free tier alongside the SSH terminal. The free tier has 2 concurrent sessions and 5 saved profiles, no SFTP-specific restrictions.',
          fr: 'Oui. SFTP fait partie du tier gratuit avec le terminal SSH. Le gratuit a 2 sessions concurrentes et 5 profils sauvegardes, pas de restriction specifique SFTP.',
        },
      },
      {
        question: { en: 'How does SSHive compare to Cyberduck for SFTP?', fr: 'Comment SSHive se compare a Cyberduck pour SFTP ?' },
        answer: {
          en: 'For pure SFTP, both are good. Cyberduck supports more protocols (S3, WebDAV, FTP). SSHive\'s win is bundling SFTP with the SSH terminal, you can fix a config and restart the service in the same window. If 95% of your file work is over SSH, SSHive saves a window.',
          fr: 'Pour le SFTP pur, les deux sont bons. Cyberduck supporte plus de protocoles (S3, WebDAV, FTP). L\'avantage de SSHive : bundler SFTP avec le terminal SSH, vous corrigez une config et redemarrez le service dans la meme fenetre. Si 95% de votre travail fichier est via SSH, SSHive economise une fenetre.',
        },
      },
    ],
    relatedFeatures: ['sftp', 'ssh'],
    relatedUseCases: ['developer-mac', 'home-server', 'nas-synology'],
    relatedHowTos: ['ssh-key-mac'],
  },
  {
    slug: 'rdp-from-mac',
    metaTitle: {
      en: 'How to RDP from a Mac to Windows in 2026',
      fr: 'Comment faire du RDP depuis un Mac vers Windows en 2026',
    },
    metaDescription: {
      en: 'Connect to Windows desktops or servers from macOS via RDP, built-in SSHive client (no Microsoft Remote Desktop window-juggling), keyboard mapping, clipboard.',
      fr: 'Connectez-vous a des bureaux ou serveurs Windows depuis macOS via RDP, client SSHive integre (pas de jonglage de fenetres avec Microsoft Remote Desktop), mapping clavier, presse-papiers.',
    },
    h1: { en: 'How to RDP from a Mac to a Windows host', fr: 'Comment faire du RDP depuis Mac vers un hote Windows' },
    hero: {
      en: 'Embedded RDP client in macOS, no window-switching to Microsoft Remote Desktop, full keyboard mapping, encrypted via SSH if needed.',
      fr: 'Client RDP integre dans macOS, pas de switch de fenetre vers Microsoft Remote Desktop, mapping clavier complet, chiffre via SSH si besoin.',
    },
    intro: {
      en: 'RDP (Remote Desktop Protocol) is Microsoft\'s graphical remote-access protocol. From a Mac, the obvious tool is Microsoft Remote Desktop, works fine, but it lives in its own window away from your terminal and SFTP pane. SSHive includes a built-in RDP client (powered by IronRDP, a Rust implementation of the protocol) that opens RDP sessions as tabs alongside SSH/SFTP, one window for everything.',
      fr: 'RDP (Remote Desktop Protocol) est le protocole d\'acces distant graphique de Microsoft. Depuis Mac, l\'outil evident est Microsoft Remote Desktop, marche bien, mais vit dans sa propre fenetre loin de votre terminal et panneau SFTP. SSHive inclut un client RDP integre (powered by IronRDP, une implementation Rust du protocole) qui ouvre les sessions RDP en onglets a cote du SSH/SFTP, une fenetre pour tout.',
    },
    estimatedMinutes: 4,
    steps: [
      {
        name: { en: 'Enable RDP on the Windows host', fr: 'Activer RDP sur l\'hote Windows' },
        text: {
          en: 'Windows: Settings → System → Remote Desktop → toggle Enable. Note the PC name or IP. On Windows Server: Server Manager → Local Server → Remote Desktop → enable. Add your user to the Remote Desktop Users group if you\'re not admin. Port 3389 in the Windows firewall is usually opened automatically by enabling RDP.',
          fr: 'Windows : Parametres → Systeme → Bureau a distance → toggle Activer. Notez le nom du PC ou l\'IP. Sur Windows Server : Server Manager → Local Server → Remote Desktop → activer. Ajoutez votre user au groupe Remote Desktop Users si pas admin. Le port 3389 dans le firewall Windows est generalement ouvert automatiquement a l\'activation RDP.',
        },
      },
      {
        name: { en: 'Create the RDP profile in SSHive (Pro required)', fr: 'Creer le profil RDP dans SSHive (Pro requis)' },
        text: {
          en: 'Sidebar → +. The connection dialog has a **type selector** at the top: SSH | RDP | VNC | Local | Tools. Pick **RDP**, port flips to `3389` automatically. Fill Name, Host, Username, Password (with the "Save" checkbox to put it in macOS Keychain), and the optional **Domain** field for Active Directory (placeholder shows `DOMAIN`). RDP is **Pro-only**: in Free, picking RDP triggers the upgrade modal at save time, it never reaches `LicenseService.check(\'session.rdp\')`.',
          fr: 'Sidebar → +. Le dialog de connexion a un **selecteur de type** en haut : SSH | RDP | VNC | Local | Outils. Choisissez **RDP**, le port bascule a `3389` automatiquement. Remplissez Nom, Hote, Username, Mot de passe (avec la checkbox "Sauvegarder" pour le mettre dans le Trousseau macOS), et le champ **Domain** optionnel pour Active Directory (placeholder `DOMAIN`). RDP est **Pro uniquement** : en Free, choisir RDP declenche la modal d\'upgrade au save, la requete n\'atteint jamais `LicenseService.check(\'session.rdp\')`.',
        },
      },
      {
        name: { en: 'Pick a Quality preset and a Resolution, that\'s it', fr: 'Choisir un preset Qualite et une Resolution, c\'est tout' },
        text: {
          en: 'Two visible knobs: **Quality** = Auto (default, adjusts dynamically based on inter-frame latency) / High (95% / 60fps) / Balanced (80% / 60fps) / Low (50% / 15fps). **Resolution** = Auto (matches the SSHive window) / 1280×720 / 1366×768 / 1600×900 / 1920×1080 / 2560×1440 / 3840×2160. Compression (RDP6 + bulk + JPEG via libjpeg-turbo SIMD on Mac App Store builds), bitmap cache, clipboard redirect (bidirectional CLIPRDR), and audio I/O are **on by default and not exposed in the UI**, leave Auto unless you have a measured reason to change.',
          fr: 'Deux boutons visibles : **Qualite** = Auto (defaut, ajuste dynamiquement selon la latence inter-frame) / High (95% / 60fps) / Balanced (80% / 60fps) / Low (50% / 15fps). **Resolution** = Auto (suit la fenetre SSHive) / 1280×720 / 1366×768 / 1600×900 / 1920×1080 / 2560×1440 / 3840×2160. La compression (RDP6 + bulk + JPEG via libjpeg-turbo SIMD sur les builds Mac App Store), le cache bitmap, le clipboard bidirectionnel (CLIPRDR) et l\'I/O audio sont **actives par defaut et non exposes dans la UI**, laissez Auto sauf raison mesuree.',
        },
      },
      {
        name: { en: 'Connect, the window resizes the remote desktop live', fr: 'Connecter, la fenetre redimensionne le bureau distant en live' },
        text: {
          en: 'Double-click the profile to start the session. SSHive resizes the Windows desktop dynamically as you resize the SSHive window (500ms debounce on the resolution event). Cmd is mapped to Ctrl (Cmd+C → Ctrl+C, etc.); AltGr is mapped for international keyboards. Drive redirect and printer redirect are not available, copy files via SFTP in parallel if needed.',
          fr: 'Double-clic sur le profil pour demarrer la session. SSHive redimensionne le bureau Windows dynamiquement quand vous redimensionnez la fenetre SSHive (debounce 500ms sur l\'event de resolution). Cmd est mappe sur Ctrl (Cmd+C → Ctrl+C, etc.) ; AltGr est mappe pour les claviers internationaux. La redirection de disque et d\'imprimante n\'est pas dispo, copiez les fichiers via SFTP en parallele si besoin.',
        },
      },
      {
        name: { en: 'Tunnel RDP through SSH if 3389 is not Internet-exposed', fr: 'Tunneliser RDP via SSH si 3389 n\'est pas expose a Internet' },
        text: {
          en: 'There is **no "via jump host" field on the RDP profile itself**, the chaining is done via two profiles. (1) Create the SSH profile of your bastion, add a Local forward `13389 → windows-host:3389` under Advanced. (2) Create the RDP profile pointing at `localhost:13389`. Connect the SSH profile first (the tunnel auto-mounts), then the RDP profile. Never expose 3389 directly, RDP brute-forcing is industrial-scale.',
          fr: 'Il n\'y a **pas de champ "via jump host" sur le profil RDP**, le chainage se fait via deux profils. (1) Creez le profil SSH de votre bastion, ajoutez un forward Local `13389 → windows-host:3389` dans Avance. (2) Creez le profil RDP pointant sur `localhost:13389`. Connectez d\'abord le profil SSH (le tunnel se monte tout seul), puis le profil RDP. N\'exposez jamais 3389 directement, le brute-force RDP est industriel.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does SSHive RDP work with cloud-hosted Windows VMs?', fr: 'Le RDP de SSHive marche-t-il avec des VMs Windows cloud ?' },
        answer: {
          en: 'Direct RDP to a Windows VM with a public IP or VPN-reachable IP: yes. Brokered connections (e.g., Azure Virtual Desktop\'s broker handshake) are not in scope, use the corresponding vendor client for those.',
          fr: 'Le RDP direct vers une VM Windows avec IP publique ou joignable via VPN : oui. Les connexions a broker (genre handshake broker d\'Azure Virtual Desktop) sont hors scope, utilisez le client editeur correspondant pour ceux-la.',
        },
      },
      {
        question: { en: 'Can I copy-paste files between Mac and the Windows host?', fr: 'Puis-je copier-coller des fichiers entre Mac et l\'hote Windows ?' },
        answer: {
          en: 'SSHive\'s RDP supports text clipboard syncing. For files, the simplest path: enable OpenSSH on the Windows host and use SSHive\'s SFTP pane in parallel, usually faster than RDP file redirection anyway.',
          fr: 'Le RDP de SSHive supporte la sync de presse-papiers texte. Pour les fichiers, le plus simple : activez OpenSSH sur l\'hote Windows et utilisez le panneau SFTP de SSHive en parallele, souvent plus rapide que la redirection fichier RDP.',
        },
      },
    ],
    relatedFeatures: ['rdp', 'tunnels'],
    relatedUseCases: ['windows-server'],
    relatedHowTos: ['ssh-tunnel-mac'],
  },
  {
    slug: 'vnc-from-mac',
    metaTitle: {
      en: 'How to VNC from a Mac to Linux / Pi (2026 Guide)',
      fr: 'Comment faire du VNC depuis Mac vers Linux / Pi (guide 2026)',
    },
    metaDescription: {
      en: 'Connect via VNC from macOS to Raspberry Pi, Proxmox, KVM/QEMU, x11vnc, or RealVNC. Built-in noVNC viewer, no separate WebSocket relay needed.',
      fr: 'Connectez-vous en VNC depuis macOS vers Raspberry Pi, Proxmox, KVM/QEMU, x11vnc ou RealVNC. Viewer noVNC integre, pas besoin de relais WebSocket separe.',
    },
    h1: { en: 'How to VNC from a Mac to a Linux desktop', fr: 'Comment faire du VNC depuis Mac vers un bureau Linux' },
    hero: {
      en: 'Built-in VNC viewer, full RFB protocol support, works with TightVNC/RealVNC/x11vnc/noVNC, and no separate WebSocket relay needed.',
      fr: 'Viewer VNC integre, support complet du protocole RFB, fonctionne avec TightVNC/RealVNC/x11vnc/noVNC, et pas besoin de relais WebSocket separe.',
    },
    intro: {
      en: 'VNC is the cross-platform remote desktop protocol everyone uses on Linux. Whether you\'re managing a Raspberry Pi\'s desktop, the noVNC console of a Proxmox VM, or a headless Linux box you want to occasionally see graphically, VNC is the answer. SSHive\'s built-in VNC viewer uses noVNC under the hood with an embedded WebSocket proxy, meaning you connect directly to a TCP VNC server without setting up websockify or a separate relay.',
      fr: 'VNC est le protocole bureau distant cross-platform que tout le monde utilise sur Linux. Que vous geriez le bureau d\'un Raspberry Pi, la console noVNC d\'une VM Proxmox ou une box Linux headless que vous voulez occasionnellement voir graphiquement, VNC est la reponse. Le viewer VNC integre de SSHive utilise noVNC sous le capot avec un proxy WebSocket integre, vous vous connectez directement a un serveur VNC TCP sans configurer websockify ou un relais separe.',
    },
    estimatedMinutes: 4,
    steps: [
      {
        name: { en: 'Install a VNC server on the remote', fr: 'Installer un serveur VNC sur le distant' },
        text: {
          en: 'Raspberry Pi: `sudo apt install realvnc-vnc-server`, enable via `raspi-config` → Interface Options → VNC. Ubuntu/Debian desktop: `sudo apt install x11vnc`, run `x11vnc -auth /var/lib/gdm3/auth-for-gdm-* -display :0 -forever -loop`. Set a VNC password with `x11vnc -storepasswd`. Verify it\'s listening: `ss -tlnp | grep 5900` (5900 = display :0, 5901 = :1, etc.).',
          fr: 'Raspberry Pi : `sudo apt install realvnc-vnc-server`, activez via `raspi-config` → Interface Options → VNC. Ubuntu/Debian desktop : `sudo apt install x11vnc`, lancez `x11vnc -auth /var/lib/gdm3/auth-for-gdm-* -display :0 -forever -loop`. Mettez un mot de passe VNC avec `x11vnc -storepasswd`. Verifiez qu\'il ecoute : `ss -tlnp | grep 5900` (5900 = display :0, 5901 = :1, etc.).',
        },
      },
      {
        name: { en: 'Create the VNC profile in SSHive (Pro required)', fr: 'Creer le profil VNC dans SSHive (Pro requis)' },
        text: {
          en: 'Sidebar → +. In the type selector at the top, pick **VNC**, port flips to `5900`. Fill Name, Host, Port, Password. That is the entire VNC form, no domain, no quality preset, no resolution dropdown like RDP. VNC is **Pro-only**: in Free, picking VNC triggers the upgrade modal at save (the check happens in `LicenseService.check(\'session.vnc\')`). All the protocol knobs (encodings, quality, compression) are negotiated automatically.',
          fr: 'Sidebar → +. Dans le selecteur de type en haut, choisissez **VNC**, le port bascule a `5900`. Remplissez Nom, Hote, Port, Mot de passe. C\'est tout le formulaire VNC, pas de domain, pas de preset qualite, pas de dropdown resolution comme RDP. VNC est **Pro uniquement** : en Free, choisir VNC declenche la modal d\'upgrade au save (le check passe par `LicenseService.check(\'session.vnc\')`). Tous les boutons protocole (encodings, qualite, compression) sont negocies automatiquement.',
        },
      },
      {
        name: { en: 'What runs under the hood, and what is intentionally not exposed', fr: 'Ce qui tourne sous le capot, et ce qui n\'est volontairement pas expose' },
        text: {
          en: 'SSHive\'s VNC client is **noVNC** running RFB 3.x in the renderer, with a WebSocket proxy on a dynamic 127.0.0.1 port (localhost-only, never reachable from the network). Encodings auto-negotiate: Tight, Hextile, RRE, Raw, ZRLE, CopyRect, DesktopSize. Authentication uses the standard RFB password. There is no TLS/RFB-encryption toggle in the UI, encryption is meant to come from the SSH tunnel below (see next step). DesktopSize is enabled, so resizing the SSHive window resizes the remote desktop.',
          fr: 'Le client VNC de SSHive est **noVNC** qui parle RFB 3.x dans le renderer, avec un proxy WebSocket sur un port dynamique 127.0.0.1 (localhost uniquement, jamais joignable depuis le reseau). Les encodings sont auto-negocies : Tight, Hextile, RRE, Raw, ZRLE, CopyRect, DesktopSize. L\'auth utilise le mot de passe RFB standard. Pas de toggle TLS/RFB-encryption dans la UI, le chiffrement est cense venir du tunnel SSH en dessous (etape suivante). DesktopSize est active, donc redimensionner la fenetre SSHive redimensionne le bureau distant.',
        },
      },
      {
        name: { en: 'Tunnel VNC through SSH (two profiles, no broker logic)', fr: 'Tunneliser VNC via SSH (deux profils, pas de logique broker)' },
        text: {
          en: 'There is **no jump-host field on the VNC profile itself**, same model as RDP. (1) Create your SSH profile, add a Local forward `15900 → localhost:5900` under Advanced. (2) Create the VNC profile pointing at `localhost:15900`. Connect SSH first, then VNC. Plain VNC password authentication is weak; the SSH tunnel is what actually keeps the traffic away from anyone on the network.',
          fr: 'Il n\'y a **pas de champ jump-host sur le profil VNC**, meme modele que RDP. (1) Creez votre profil SSH, ajoutez un forward Local `15900 → localhost:5900` dans Avance. (2) Creez le profil VNC pointant sur `localhost:15900`. Connectez SSH d\'abord, puis VNC. L\'auth mot de passe VNC seule est faible ; le tunnel SSH est ce qui isole reellement le trafic du reseau.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Will SSHive work with Apple Screen Sharing on a Mac?', fr: 'SSHive marchera-t-il avec Partage d\'ecran Apple sur Mac ?' },
        answer: {
          en: 'Yes, Apple\'s vncserver speaks RFB, port 5900. Enable on the target Mac: System Settings → General → Sharing → Screen Sharing. SSHive can connect, though for Apple-to-Apple, the built-in client is still richer (audio, drag-drop).',
          fr: 'Oui, le vncserver d\'Apple parle RFB, port 5900. Activez sur le Mac cible : Reglages Systeme → General → Partage → Partage d\'ecran. SSHive peut s\'y connecter, bien que pour Mac-Mac, le client integre soit plus riche (audio, drag-drop).',
        },
      },
    ],
    relatedFeatures: ['vnc', 'tunnels'],
    relatedUseCases: ['raspberry-pi', 'proxmox', 'home-server'],
    relatedHowTos: ['ssh-tunnel-mac'],
  },
  {
    slug: 'jump-host-mac',
    metaTitle: {
      en: 'How to Use a Jump Host (Bastion) on Mac SSH',
      fr: 'Comment utiliser un Jump Host (bastion) en SSH sur Mac',
    },
    metaDescription: {
      en: 'Configure SSH ProxyJump bastions visually on macOS, no ~/.ssh/config editing, agent forwarding, multi-hop chains. Step-by-step with SSHive.',
      fr: 'Configurez les bastions SSH ProxyJump visuellement sur macOS, sans edition de ~/.ssh/config, agent forwarding, chaines multi-saut. Pas-a-pas avec SSHive.',
    },
    h1: { en: 'How to use a jump host on a Mac', fr: 'Comment utiliser un jump host sur Mac' },
    hero: {
      en: 'Visual ProxyJump configuration, agent forwarding, multi-hop chains, without editing ~/.ssh/config every time.',
      fr: 'Configuration ProxyJump visuelle, agent forwarding, chaines multi-saut, sans editer ~/.ssh/config a chaque fois.',
    },
    intro: {
      en: 'A jump host (bastion) is a single Internet-exposed SSH server through which you reach private hosts in a network. Set up a bastion once, every other server is reachable via it. The OpenSSH way is `ssh -J bastion target` or `ProxyJump bastion` in `~/.ssh/config`. SSHive makes it visual: configure the bastion as a profile, then tag any other profile with "Jump Host: bastion", no config-file editing.',
      fr: 'Un jump host (bastion) est un serveur SSH expose a Internet via lequel vous atteignez des hotes prives. Configurez un bastion une fois, tous les autres serveurs sont joignables par lui. La maniere OpenSSH : `ssh -J bastion target` ou `ProxyJump bastion` dans `~/.ssh/config`. SSHive le rend visuel : configurez le bastion en profil, puis taggez n\'importe quel autre profil avec "Jump Host : bastion", pas d\'edition de config.',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Create the bastion profile first (it has no jumps itself)', fr: 'Creer d\'abord le profil bastion (lui n\'a aucun saut)' },
        text: {
          en: 'Sidebar → + → SSH. Fill the bastion\'s public hostname/IP, port, user, auth (key recommended). The Advanced section is left empty for the bastion, it has no Jump Chain itself. Save and connect once to accept the host key. Reason this matters: SSHive\'s Jump Host UI is **a dropdown that lists existing SSH profiles**, there is no free-text "user@host" field, so the bastion profile must exist before any profile can reference it.',
          fr: 'Sidebar → + → SSH. Remplissez le hostname/IP public du bastion, port, user, auth (cle recommandee). La section Avance reste vide pour le bastion, il n\'a pas de Jump Chain lui-meme. Sauvegardez et connectez une fois pour accepter la cle hote. Pourquoi c\'est important : l\'UI Jump Host de SSHive est **un dropdown qui liste les profils SSH existants**, pas de champ texte libre "user@host", donc le profil bastion doit exister avant qu\'un autre profil puisse le referencer.',
        },
      },
      {
        name: { en: 'Build the chain on the target profile (Pro only)', fr: 'Construire la chaine sur le profil cible (Pro uniquement)' },
        text: {
          en: 'Create a new SSH profile for the target. Fill its **private** address (as seen from inside the bastion\'s network) and the auth that the target itself accepts. Click **Advanced** → **Jump Chain** block. Click **+ Add hop**, a `<select>` appears listing all your other SSH profiles (filtered to type = ssh, excluding the current one). Pick the bastion. The chain visualizes at the bottom: `bastion → target`. Each hop has up/down/remove buttons. Save. Jump Host is **Pro-only** (`LicenseService.check(\'jumphost\')`); in Free the whole block is greyed and shows the PRO badge.',
          fr: 'Creez un nouveau profil SSH pour la cible. Remplissez son adresse **privee** (vue depuis le reseau interne du bastion) et l\'auth que la cible accepte. Cliquez **Avance** → bloc **Jump Chain**. Cliquez **+ Ajouter un saut**, un `<select>` apparait listant tous vos autres profils SSH (filtres sur type = ssh, excluant le profil courant). Choisissez le bastion. La chaine se visualise en bas : `bastion → cible`. Chaque saut a des boutons monter/descendre/supprimer. Sauvegardez. Jump Host est **Pro uniquement** (`LicenseService.check(\'jumphost\')`) ; en Free le bloc entier est grise avec le badge PRO.',
        },
      },
      {
        name: { en: 'Each hop carries its own auth, no agent juggling required', fr: 'Chaque saut porte sa propre auth, pas besoin de jongler avec l\'agent' },
        text: {
          en: 'Unlike OpenSSH `ProxyJump` (which needs an agent or matching keys to chain auth), every profile in SSHive\'s chain has its own auth, password / private key / agent / passphrase, and SSHive uses each profile\'s auth as it walks the chain. Bastion uses ed25519, target uses agent-only? Fine. The Forward Agent checkbox in Advanced is a separate toggle: enable it on the bastion only if a *third-party* tool on the bastion needs your local agent (e.g. `git push` from the bastion using your laptop\'s key).',
          fr: 'Contrairement a OpenSSH `ProxyJump` (qui a besoin d\'un agent ou de cles correspondantes pour chainer l\'auth), chaque profil dans la chaine SSHive a sa propre auth, mot de passe / cle privee / agent / passphrase, et SSHive utilise l\'auth de chaque profil en parcourant la chaine. Bastion en ed25519, cible en agent-only ? Aucun probleme. La checkbox Forward Agent dans Avance est un toggle a part : activez-la sur le bastion uniquement si un outil *tiers* sur le bastion a besoin de votre agent local (ex. `git push` depuis le bastion avec la cle de votre laptop).',
        },
      },
      {
        name: { en: 'Multi-hop (up to 5): A → B → C → target', fr: 'Multi-saut (jusqu\'a 5) : A → B → C → cible' },
        text: {
          en: 'Need to chain through more than one bastion? Create profile A (no jump), profile B with Jump Chain `[A]`, profile C with Jump Chain `[A, B]`, order matters. The chain editor accepts up to 5 hops. SFTP and tunnels on the final profile work transparently through every hop in the chain.',
          fr: 'Besoin de chainer plus d\'un bastion ? Creez le profil A (pas de saut), le profil B avec Jump Chain `[A]`, le profil C avec Jump Chain `[A, B]`, l\'ordre compte. L\'editeur de chaine accepte jusqu\'a 5 sauts. SFTP et tunnels sur le profil final marchent de facon transparente a travers chaque saut de la chaine.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can I use a jump host with SFTP and tunnels?', fr: 'Puis-je utiliser un jump host avec SFTP et tunnels ?' },
        answer: {
          en: 'Yes, SFTP and tunnels work transparently through a jump host. Drag a file to the target host\'s SFTP pane, the file goes encrypted: Mac → bastion → target. Tunnels work the same way.',
          fr: 'Oui, SFTP et tunnels marchent de facon transparente a travers un jump host. Glissez un fichier sur le panneau SFTP de l\'hote cible, le fichier passe chiffre : Mac → bastion → cible. Les tunnels marchent pareil.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'tunnels'],
    relatedUseCases: ['aws-ec2', 'jump-host'],
    relatedHowTos: ['ssh-key-mac', 'ssh-tunnel-mac'],
  },
  {
    slug: 'import-ssh-config-mac',
    metaTitle: {
      en: 'How to Import ~/.ssh/config into SSHive on Mac',
      fr: 'Comment importer ~/.ssh/config dans SSHive sur Mac',
    },
    metaDescription: {
      en: 'Import existing OpenSSH config (~/.ssh/config) into SSHive: profiles created automatically with hostnames, ports, keys, ProxyJump. Bidirectional sync supported.',
      fr: 'Importez votre config OpenSSH existante (~/.ssh/config) dans SSHive : profils crees automatiquement avec hostnames, ports, cles, ProxyJump. Sync bidirectionnelle supportee.',
    },
    h1: { en: 'Import ~/.ssh/config into SSHive', fr: 'Importer ~/.ssh/config dans SSHive' },
    hero: {
      en: 'Bring your existing OpenSSH config into SSHive, every Host entry becomes a profile in seconds.',
      fr: 'Apportez votre config OpenSSH existante dans SSHive, chaque entree Host devient un profil en quelques secondes.',
    },
    intro: {
      en: 'If you\'ve been using SSH on a Mac for years, you have a `~/.ssh/config` packed with Host entries, bastions, production servers, IoT boxes. SSHive can parse it and turn each Host into a profile, including ProxyJump, IdentityFile, Port, User, and HostName directives. The original file stays untouched, so you can keep using `ssh server-name` from any other terminal in parallel.',
      fr: 'Si vous utilisez SSH sur Mac depuis des annees, vous avez un `~/.ssh/config` rempli d\'entrees Host, bastions, serveurs prod, boxes IoT. SSHive peut le parser et transformer chaque Host en profil, y compris les directives ProxyJump, IdentityFile, Port, User et HostName. Le fichier original reste intact, vous pouvez continuer a utiliser `ssh server-name` depuis n\'importe quel autre terminal en parallele.',
    },
    estimatedMinutes: 2,
    steps: [
      {
        name: { en: 'Open the import action, sidebar ⋮ menu, not Settings', fr: 'Ouvrir l\'action d\'import, menu ⋮ de la sidebar, pas Settings' },
        text: {
          en: 'At the top of the left sidebar, click the **⋮** ("More actions") button → pick **Import SSH Config**. It is intentionally not in Settings and not in the macOS menu bar, keep that location memorized. SSHive then reads `~/.ssh/config` directly (the macOS sandbox grants read access to that path on first call).',
          fr: 'En haut de la sidebar gauche, cliquez sur le bouton **⋮** ("Plus d\'actions") → choisissez **Importer SSH Config**. Volontairement pas dans Settings, pas dans la barre de menus macOS, memorisez cet emplacement. SSHive lit ensuite `~/.ssh/config` directement (la sandbox macOS accorde le droit de lecture sur ce chemin au premier appel).',
        },
      },
      {
        name: { en: 'No preview, silent import + a single toast', fr: 'Pas de previsualisation, import silencieux + un seul toast' },
        text: {
          en: 'There is no "here are X profiles, pick which to import" dialog. The click runs the parse synchronously and shows a toast: ✅ `N profile(s) imported` (or ⚠️ `M duplicate(s) skipped` if applicable). Deduplication is done by `host:port:username`, same triple = silent skip, no merge/overwrite modal.',
          fr: 'Pas de dialog "voici X profils, choisissez lesquels importer". Le clic lance le parse de facon synchrone et affiche un toast : ✅ `N profil(s) importe(s)` (ou ⚠️ `M doublon(s) ignore(s)` si applicable). La deduplication se fait sur le triple `host:port:username`, meme triple = skip silencieux, pas de modal merge/overwrite.',
        },
      },
      {
        name: { en: 'What gets parsed (and what does not)', fr: 'Ce qui est parse (et ce qui ne l\'est pas)' },
        text: {
          en: 'Mapped one-to-one: `Host` → name, `HostName` → host, `Port` → port, `User` → username, `IdentityFile` → privateKeyPath (auth = privateKey), `ForwardAgent` → agentForward, `LocalForward` → localForwards[], `RemoteForward` → remoteForwards[], `DynamicForward` → socksPort. `ProxyJump` is parsed but the auto-link into the visual Jump Chain may need a manual confirmation, re-pick the bastion in the chain editor if the dropdown shows blank for an imported target.',
          fr: 'Mappes un-pour-un : `Host` → name, `HostName` → host, `Port` → port, `User` → username, `IdentityFile` → privateKeyPath (auth = privateKey), `ForwardAgent` → agentForward, `LocalForward` → localForwards[], `RemoteForward` → remoteForwards[], `DynamicForward` → socksPort. `ProxyJump` est parse mais le lien auto vers le Jump Chain visuel peut demander une confirmation manuelle, re-choisissez le bastion dans l\'editeur de chaine si le dropdown est vide pour une cible importee.',
        },
      },
      {
        name: { en: 'Read-only, SSHive never writes back to ~/.ssh/config', fr: 'Lecture seule, SSHive ne reecrit jamais ~/.ssh/config' },
        text: {
          en: 'Sync is **one-way**: import-only. The original file is untouched, so `ssh hostname` from Terminal still works. If you change `~/.ssh/config` later, re-run the import, duplicates will be skipped, only new entries land. Free tier note: imports are subject to the 5-profile cap. If `~/.ssh/config` has 12 hosts and you\'re on Free, only the first 5 are saved (`ProfileService` truncates at the limit), upgrade to Pro before importing if you need them all.',
          fr: 'La sync est **a sens unique** : import-only. Le fichier original n\'est pas touche, `ssh hostname` depuis Terminal marche toujours. Si vous modifiez `~/.ssh/config` plus tard, relancez l\'import, les doublons seront skip, seules les nouvelles entrees atterrissent. Note Free : les imports respectent le plafond de 5 profils. Si `~/.ssh/config` a 12 hotes et que vous etes en Free, seuls les 5 premiers sont sauvegardes (`ProfileService` tronque a la limite), passez en Pro avant l\'import si vous les voulez tous.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does SSHive modify my ~/.ssh/config?', fr: 'SSHive modifie-t-il mon ~/.ssh/config ?' },
        answer: {
          en: 'No, read-only. The original file is untouched, so `ssh hostname` from Terminal still works. SSHive\'s profiles are an independent copy. To pick up new edits to `~/.ssh/config`, re-run the import from the sidebar ⋮ menu; duplicates are skipped, only new entries are added.',
          fr: 'Non, lecture seule. Le fichier original n\'est pas touche, `ssh hostname` depuis Terminal marche toujours. Les profils SSHive sont une copie independante. Pour recuperer de nouvelles edits dans `~/.ssh/config`, relancez l\'import depuis le menu ⋮ de la sidebar ; les doublons sont skip, seules les nouvelles entrees sont ajoutees.',
        },
      },
      {
        question: { en: 'Can I export SSHive profiles back to ~/.ssh/config?', fr: 'Puis-je exporter les profils SSHive vers ~/.ssh/config ?' },
        answer: {
          en: 'Not at the moment, SSHive does not write back to `~/.ssh/config`. Pro users have an encrypted export of their profile bundle for backup and team sharing, but that is a SSHive-format file, not OpenSSH config.',
          fr: 'Pas pour le moment, SSHive ne reecrit pas dans `~/.ssh/config`. Les utilisateurs Pro ont un export chiffre du bundle de profils pour backup et partage en equipe, mais c\'est un fichier au format SSHive, pas une config OpenSSH.',
        },
      },
    ],
    relatedFeatures: ['ssh'],
    relatedUseCases: ['developer-mac', 'aws-ec2'],
    relatedHowTos: ['ssh-key-mac', 'jump-host-mac'],
  },
  {
    slug: 'socks5-proxy-mac',
    metaTitle: {
      en: 'How to Set Up a SOCKS5 Proxy on a Mac via SSH',
      fr: 'Comment configurer un proxy SOCKS5 sur Mac via SSH',
    },
    metaDescription: {
      en: 'Use an SSH SOCKS5 proxy on macOS for safe browsing on hotel Wi-Fi or geo-locked content. Step-by-step with OpenSSH and SSHive.',
      fr: 'Utilisez un proxy SOCKS5 SSH sur macOS pour la navigation sure sur Wi-Fi d\'hotel ou le contenu geo-bloque. Pas-a-pas avec OpenSSH et SSHive.',
    },
    h1: { en: 'How to set up a SOCKS5 proxy via SSH on a Mac', fr: 'Comment configurer un proxy SOCKS5 via SSH sur Mac' },
    hero: {
      en: 'Route browser traffic through a remote server, encrypted, untouchable by hotel networks. Free, no VPN service.',
      fr: 'Routez le trafic navigateur via un serveur distant, chiffre, intouchable par les reseaux d\'hotel. Gratuit, sans service VPN.',
    },
    intro: {
      en: 'SSH\'s `-D` flag turns the connection into a SOCKS5 proxy. Your browser/app sends traffic to `localhost:1080`, SSH forwards it through the encrypted tunnel to the remote server, and the remote server makes the actual outbound request. End result: web traffic appears to come from the remote server\'s IP, encrypted from your Mac all the way to the SSH endpoint. No paid VPN service needed if you have any SSH-accessible server (your home server, a $5 VPS, even a Raspberry Pi at home).',
      fr: 'Le flag `-D` de SSH transforme la connexion en proxy SOCKS5. Votre navigateur/app envoie le trafic a `localhost:1080`, SSH le forwarde via le tunnel chiffre vers le serveur distant, et le serveur distant fait la requete sortante reelle. Resultat : le trafic web semble venir de l\'IP du serveur distant, chiffre de Mac jusqu\'au endpoint SSH. Pas besoin de service VPN payant si vous avez un serveur SSH-accessible (serveur perso, VPS a 5 $, meme un Raspberry Pi a la maison).',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Pick (or create) the SSH profile you want to proxy through', fr: 'Choisir (ou creer) le profil SSH a travers lequel proxyfier' },
        text: {
          en: 'Any SSH-reachable server works: home server, $5 VPS, even a Raspberry Pi at home. For browsing speed, pick something close to the geography you want to appear from. Make sure `AllowTcpForwarding yes` is set in the remote sshd_config (it usually is by default). In SSHive: Sidebar → + (or right-click an existing profile → Edit) → fill name, host, port, user, auth.',
          fr: 'N\'importe quel serveur SSH-joignable marche : serveur perso, VPS a 5 $, meme un Raspberry Pi a la maison. Pour la vitesse de navigation, choisissez quelque chose proche de la geographie d\'ou vous voulez apparaitre. Assurez-vous que `AllowTcpForwarding yes` est mis dans le sshd_config distant (c\'est generalement le defaut). Dans SSHive : Sidebar → + (ou clic droit sur un profil existant → Modifier) → remplissez nom, hote, port, user, auth.',
        },
      },
      {
        name: { en: 'Expand "Advanced" → set the SOCKS5 port (one field, Pro only)', fr: 'Derouler "Avance" → regler le port SOCKS5 (un seul champ, Pro uniquement)' },
        text: {
          en: 'In the profile dialog, click **Advanced** at the bottom, the section unfolds. Scroll to **SOCKS5 proxy (-D)**. There is a **single field** "SOCKS port" (placeholder `1080`). Type `1080`, save. On Free, that field is `readOnly`, faded to opacity 50% and tagged with a PRO badge, clicking it opens the upgrade modal (`useLicenseStore.openUpgradeModal(\'tunnel.create\')`). The check is duplicated in the main process (`ssh.handler.ts`): editing `profiles.json` by hand to bypass the UI does not bypass the runtime gate.',
          fr: 'Dans le dialog du profil, cliquez **Avance** en bas, la section se deplie. Descendez jusqu\'a **Proxy SOCKS5 (-D)**. Il y a **un seul champ** "Port SOCKS" (placeholder `1080`). Tapez `1080`, sauvegardez. En Free, ce champ est `readOnly`, opacite 50%, marque avec un badge PRO, au clic, la modal d\'upgrade s\'ouvre (`useLicenseStore.openUpgradeModal(\'tunnel.create\')`). Le check est duplique cote main process (`ssh.handler.ts`) : bidouiller `profiles.json` a la main ne contourne pas le gate runtime.',
        },
      },
      {
        name: { en: 'Connect, the proxy auto-starts on 127.0.0.1:1080', fr: 'Connecter, le proxy demarre tout seul sur 127.0.0.1:1080' },
        text: {
          en: 'Double-click the profile. The SSH session goes connected and the SOCKS5 listener auto-starts on `127.0.0.1:1080`. The status bar shows the **⇄** pill, click it to see the SOCKS tunnel listed in the Tunnel Status panel with its live state. Verify from a terminal: `lsof -i :1080` shows the SSH process. Tear down? Disconnect the SSH session, the listener closes with it. No manual cleanup.',
          fr: 'Double-clic sur le profil. La session SSH passe a connectee et le listener SOCKS5 demarre tout seul sur `127.0.0.1:1080`. La barre de statut affiche la pastille **⇄**, clic pour voir le tunnel SOCKS liste dans le panneau Tunnel Status avec son etat live. Verification depuis un terminal : `lsof -i :1080` montre le process SSH. Pour fermer ? Deconnectez la session SSH, le listener se ferme avec. Pas de cleanup manuel.',
        },
      },
      {
        name: { en: 'Point your browser/OS at the proxy', fr: 'Pointer votre navigateur/OS sur le proxy' },
        text: {
          en: 'Firefox: Preferences → Network Settings → Manual proxy → SOCKS Host `127.0.0.1`, Port `1080`, SOCKS v5, "Proxy DNS when using SOCKS v5" checked. Chrome has no UI; launch with `--proxy-server=socks5://127.0.0.1:1080`. Safari: System Settings → Network → your interface → Proxies → SOCKS Proxy. Visit `whatismyip.com`, your IP should now be the remote server\'s. Routing is per-app on macOS by default; use Proxifier (paid) if you want a system-wide forced routing for non-browser traffic.',
          fr: 'Firefox : Preferences → Network Settings → Manual proxy → SOCKS Host `127.0.0.1`, Port `1080`, SOCKS v5, "Proxy DNS when using SOCKS v5" coche. Chrome n\'a pas d\'UI ; lancez-le avec `--proxy-server=socks5://127.0.0.1:1080`. Safari : Reglages Systeme → Reseau → votre interface → Proxies → Proxy SOCKS. Visitez `whatismyip.com`, votre IP doit maintenant etre celle du serveur distant. Le routing est par app sur macOS par defaut ; utilisez Proxifier (payant) pour forcer un routing system-wide sur le trafic non-navigateur.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is SOCKS5 over SSH safe enough on hotel Wi-Fi?', fr: 'SOCKS5 sur SSH est-il assez sur sur Wi-Fi d\'hotel ?' },
        answer: {
          en: 'For browser traffic, yes, the SSH tunnel encrypts everything between your Mac and your remote server. The hotel network sees only one encrypted SSH stream. The remote server\'s onward traffic still uses HTTPS (or not), so SSH alone doesn\'t guarantee end-to-end encryption to every web destination. Use HTTPS-only browser settings as well.',
          fr: 'Pour le trafic navigateur, oui, le tunnel SSH chiffre tout entre Mac et serveur distant. Le reseau d\'hotel ne voit qu\'un stream SSH chiffre. Le trafic sortant du serveur distant utilise encore HTTPS (ou pas), donc SSH seul ne garantit pas le chiffrement bout-en-bout vers chaque destination web. Utilisez aussi les reglages HTTPS-only du navigateur.',
        },
      },
      {
        question: { en: 'How does SOCKS5 over SSH compare to a real VPN?', fr: 'Comment SOCKS5 sur SSH se compare a un vrai VPN ?' },
        answer: {
          en: 'SOCKS5 is per-app (browser, IRC client, etc.); a VPN is system-wide. SOCKS5 is free if you have any SSH server; a VPN service has a subscription cost. SOCKS5 doesn\'t handle UDP traffic well; a VPN does. For browsing, SOCKS5 is enough; for everything-routed (gaming, streaming, app traffic), use WireGuard or Tailscale.',
          fr: 'SOCKS5 est par app (navigateur, client IRC, etc.) ; un VPN est system-wide. SOCKS5 est gratuit si vous avez un serveur SSH ; un service VPN a un cout d\'abonnement. SOCKS5 gere mal le trafic UDP ; un VPN si. Pour la navigation, SOCKS5 suffit ; pour tout-route (gaming, streaming, trafic app), utilisez WireGuard ou Tailscale.',
        },
      },
    ],
    relatedFeatures: ['tunnels', 'ssh'],
    relatedUseCases: ['home-server'],
    relatedHowTos: ['ssh-tunnel-mac'],
  },
  {
    slug: 'broadcast-commands-mac',
    metaTitle: {
      en: 'How to Run a Command on Multiple SSH Servers from Mac',
      fr: 'Comment lancer une commande sur plusieurs serveurs SSH depuis Mac',
    },
    metaDescription: {
      en: 'Send the same command to many SSH servers simultaneously from macOS, without Ansible. Use SSHive\'s broadcast mode for instant fleet operations.',
      fr: 'Envoyez la meme commande a plusieurs serveurs SSH simultanement depuis macOS, sans Ansible. Utilisez le mode broadcast de SSHive pour les ops flotte instantanees.',
    },
    h1: { en: 'Run a command on multiple SSH servers from Mac', fr: 'Lancer une commande sur plusieurs serveurs SSH depuis Mac' },
    hero: {
      en: 'Broadcast keystrokes to every active SSH session at once, fleet-wide ops in seconds, no Ansible playbook required.',
      fr: 'Broadcast des touches a chaque session SSH active d\'un coup, ops flotte en quelques secondes, aucun playbook Ansible.',
    },
    intro: {
      en: 'When you have a fleet of similar servers, sometimes you just need to run `apt update`, `df -h`, or `systemctl status` on all of them at once. Ansible is the right answer for repeatable orchestration, but for ad-hoc one-offs, "I just want to see where each server stands right now", it\'s overkill. SSHive\'s broadcast mode types the same keystrokes into every active SSH session simultaneously, with each output visible in its own pane. No agent, no inventory, no YAML.',
      fr: 'Quand vous avez une flotte de serveurs similaires, parfois il faut juste lancer `apt update`, `df -h` ou `systemctl status` sur tous d\'un coup. Ansible est la bonne reponse pour l\'orchestration repetee, mais pour les ad-hoc one-offs, "je veux juste voir ou chaque serveur en est maintenant", c\'est excessif. Le mode broadcast de SSHive tape les memes touches dans chaque session SSH active en meme temps, chaque sortie visible dans son panneau. Pas d\'agent, pas d\'inventaire, pas de YAML.',
    },
    estimatedMinutes: 2,
    steps: [
      {
        name: { en: 'Open every SSH session you want to hit (Pro required)', fr: 'Ouvrir toutes les sessions SSH que vous voulez toucher (Pro requis)' },
        text: {
          en: 'Connect to every server you care about, each becomes an SSH tab. Broadcast itself is **Pro-only** (`LicenseService.check(\'broadcast\')`). The check is enforced **at every send**, not just when toggling the bar, so even if Free could open the input, the actual command would be blocked. In Free, hitting the shortcut opens the upgrade modal directly.',
          fr: 'Connectez-vous a chaque serveur concerne, chacun devient un onglet SSH. Broadcast est **Pro uniquement** (`LicenseService.check(\'broadcast\')`). Le check est applique **a chaque envoi**, pas juste au toggle de la barre, donc meme si Free pouvait ouvrir l\'input, la commande effective serait bloquee. En Free, le raccourci ouvre directement la modal d\'upgrade.',
        },
      },
      {
        name: { en: 'Toggle the broadcast bar, Cmd+Shift+B', fr: 'Toggler la barre broadcast, Cmd+Shift+B' },
        text: {
          en: 'Press **Cmd+Shift+B** (default; customizable in Settings → Shortcuts → Broadcast). An **orange bar** slides in at the top of the terminal area with a broadcast icon, the label "BROADCAST", and a session counter `(N session(s))` showing how many active SSH sessions will receive your input. Escape inside the input closes the bar.',
          fr: 'Pressez **Cmd+Shift+B** (defaut ; customisable dans Settings → Raccourcis → Broadcast). Une **barre orange** apparait en haut de la zone terminal avec une icone broadcast, le label "BROADCAST", et un compteur de sessions `(N session(s))` montrant combien de sessions SSH actives vont recevoir votre saisie. Echap dans l\'input ferme la barre.',
        },
      },
      {
        name: { en: 'Type into the dedicated input, not into a terminal', fr: 'Taper dans l\'input dedie, pas dans un terminal' },
        text: {
          en: 'There is **no Cmd+click multi-select on terminal tabs**. The broadcast bar has its own dedicated input. Type your command there and hit **Enter** (or click "Send"). The command goes to **all** connected SSH sessions simultaneously, there is no per-session checkbox to filter. After sending, a toast confirms: `Broadcast sent, "<command>" → N session(s)`. Each session\'s output appears in its own terminal tab as usual.',
          fr: 'Il n\'y a **pas de Cmd+clic multi-select sur les onglets terminaux**. La barre broadcast a son propre input dedie. Tapez votre commande dedans et tapez **Entree** (ou cliquez "Envoyer"). La commande part vers **toutes** les sessions SSH connectees en meme temps, pas de checkbox par session pour filtrer. Apres envoi, un toast confirme : `Broadcast envoye, "<commande>" → N session(s)`. La sortie de chaque session apparait dans son onglet terminal comme d\'habitude.',
        },
      },
      {
        name: { en: 'Compare outputs and exit broadcast', fr: 'Comparer les sorties et quitter le broadcast' },
        text: {
          en: 'Click each terminal tab to inspect output side by side, the one server that disagreed is the one to investigate. Hit Cmd+Shift+B again (or Escape) to close the bar. Keystrokes go back to whatever individual terminal you focus.',
          fr: 'Cliquez chaque onglet terminal pour inspecter la sortie cote-a-cote, le serveur qui n\'est pas d\'accord est celui a investiguer. Cmd+Shift+B a nouveau (ou Echap) pour fermer la barre. Les touches retournent dans le terminal individuel que vous focus.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can I broadcast to a subset of sessions?', fr: 'Puis-je broadcaster a un sous-ensemble de sessions ?' },
        answer: {
          en: 'Yes. In the sessions panel, check the boxes next to the sessions you want to include in the broadcast. Cmd+Shift+B then targets only the checked sessions. Save commonly used groups (e.g., "all web servers") for one-click selection.',
          fr: 'Oui. Dans le panneau de sessions, cochez les sessions a inclure. Cmd+Shift+B cible alors uniquement les sessions cochees. Sauvegardez les groupes courants (ex. "tous web servers") pour selection en un clic.',
        },
      },
      {
        question: { en: 'Should I use broadcast or Ansible?', fr: 'Dois-je utiliser broadcast ou Ansible ?' },
        answer: {
          en: 'Broadcast for one-off, ad-hoc commands you want to see immediately. Ansible for repeatable, idempotent, audited operations. Both have their place, broadcast is faster for "I want to see what version of OpenSSL is on each box right now"; Ansible is better for "deploy this config across the fleet every time we update it".',
          fr: 'Broadcast pour les commandes one-off, ad-hoc que vous voulez voir immediatement. Ansible pour les operations repetables, idempotentes, auditees. Chacun sa place, broadcast est plus rapide pour "je veux voir quelle version d\'OpenSSL sur chaque box maintenant" ; Ansible est meilleur pour "deploie cette config sur la flotte a chaque mise a jour".',
        },
      },
    ],
    relatedFeatures: ['broadcast', 'ssh', 'snippets'],
    relatedUseCases: ['kubernetes', 'docker'],
    relatedHowTos: [],
  },
  {
    slug: 'claude-mcp-ssh',
    metaTitle: {
      en: 'How to Connect Claude Code / Cursor to SSH via MCP',
      fr: 'Comment connecter Claude Code / Cursor au SSH via MCP',
    },
    metaDescription: {
      en: 'Let Claude or Cursor execute commands and read files on your remote SSH servers via SSHive\'s built-in MCP server. One-toggle setup, copy-paste config, local and secure.',
      fr: 'Laissez Claude ou Cursor executer des commandes et lire des fichiers sur vos serveurs SSH distants via le serveur MCP integre de SSHive. Setup en un toggle, config copier-coller, local et securise.',
    },
    h1: { en: 'Connect Claude Code or Cursor to SSH via MCP', fr: 'Connecter Claude Code ou Cursor au SSH via MCP' },
    hero: {
      en: 'Let your AI assistant execute commands, read files, and triage incidents directly on your servers, through SSHive\'s built-in MCP server.',
      fr: 'Laissez votre assistant IA executer des commandes, lire des fichiers et trier les incidents directement sur vos serveurs, via le serveur MCP integre de SSHive.',
    },
    intro: {
      en: 'MCP (Model Context Protocol) is the open standard Anthropic introduced for AI assistants to talk to local tools. SSHive ships with an MCP server built-in, meaning Claude Code, Cursor, or Claude Desktop can read your active SSH sessions, run commands, and browse SFTP filesystems. The server only listens on localhost, uses Bearer token auth stored in the macOS Keychain, and inherits the permissions of your existing SSH connections. Setup takes 30 seconds.',
      fr: 'MCP (Model Context Protocol) est le standard ouvert introduit par Anthropic pour que les assistants IA parlent aux outils locaux. SSHive embarque un serveur MCP integre, Claude Code, Cursor ou Claude Desktop peuvent lire vos sessions SSH actives, lancer des commandes et parcourir des filesystems SFTP. Le serveur n\'ecoute que sur localhost, utilise une auth Bearer token stockee dans le Trousseau macOS et herite des permissions de vos connexions SSH existantes. Setup en 30 secondes.',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Open Settings → MCP and flip the single toggle (Pro required)', fr: 'Ouvrir Parametres → MCP et basculer l\'unique toggle (Pro requis)' },
        text: {
          en: 'Open SSHive Settings, pick **MCP** in the sidebar. The page is dominated by one switch: **"Enable MCP server"**. Toggling ON does three things at once: starts the local HTTP server (default port `49422`, customizable via the port field with the Apply button), generates a Bearer-token UUID stored in `settings.json`, and auto-injects an `mcpServers.sshive` entry into the config files of every detected AI client (`~/.claude.json`, `~/.cursor/mcp.json`, plus Claude Desktop\'s config). Toggle OFF stops the server **and** removes those entries. MCP is **Pro-only**: in Free, the toggle triggers the upgrade modal instead of starting the server.',
          fr: 'Ouvrez les Parametres SSHive, choisissez **MCP** dans la sidebar. La page est dominee par un seul switch : **"Activer le serveur MCP"**. Basculer ON fait trois choses a la fois : demarre le serveur HTTP local (port par defaut `49422`, customisable via le champ port avec le bouton Appliquer), genere un UUID Bearer-token persiste dans `settings.json`, et auto-injecte une entree `mcpServers.sshive` dans les fichiers de config de chaque client IA detecte (`~/.claude.json`, `~/.cursor/mcp.json`, plus la config Claude Desktop). Basculer OFF arrete le serveur **et** retire ces entrees. MCP est **Pro uniquement** : en Free, le toggle declenche la modal d\'upgrade au lieu de demarrer le serveur.',
        },
      },
      {
        name: { en: 'Auto-injection vs copy-paste, what each client gets', fr: 'Auto-injection vs copier-coller, ce que chaque client recoit' },
        text: {
          en: 'For **Claude Code** (CLI + IDE extension) and **Cursor**: SSHive writes directly to `~/.claude.json` and `~/.cursor/mcp.json` (mode `0600`, token is sensitive). The MCP page shows their status as `Configured ✓` or `Not detected`. You don\'t have to copy anything. For **Claude Desktop** (which only supports stdio, not HTTP natively): SSHive shows a separate copyable block using `npx -y mcp-remote` as a stdio-to-HTTP shim, paste it into `claude_desktop_config.json`. For any other MCP-compatible client: a "Copy Streamable HTTP config" button copies a JSON block **with your real token** ready to paste anywhere.',
          fr: 'Pour **Claude Code** (CLI + extension IDE) et **Cursor** : SSHive ecrit directement dans `~/.claude.json` et `~/.cursor/mcp.json` (mode `0600`, le token est sensible). La page MCP affiche leur statut `Configure ✓` ou `Non detecte`. Vous n\'avez rien a copier. Pour **Claude Desktop** (qui ne supporte que stdio, pas HTTP nativement) : SSHive affiche un bloc copiable separe utilisant `npx -y mcp-remote` comme shim stdio-vers-HTTP, collez-le dans `claude_desktop_config.json`. Pour tout autre client compatible MCP : un bouton "Copier la config Streamable HTTP" copie un bloc JSON **avec votre vrai token** pret a coller n\'importe ou.',
        },
      },
      {
        name: { en: 'Connect SSH sessions in SSHive, they become the AI\'s tools', fr: 'Connecter des sessions SSH dans SSHive, elles deviennent les outils de l\'IA' },
        text: {
          en: 'The MCP server only exposes sessions that are **currently connected** in SSHive. Connect to prod, staging or whatever servers you want the AI to reach. The exposed tool surface: `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file` (1 MB max), `sftp_write_file` (in-memory), `sftp_write_file_chunk` (4 MB chunks for big files via base64 append) and `sftp_write_from_local_path` (read a local file → write to remote, zero base64, best for large transfers).',
          fr: 'Le serveur MCP n\'expose que les sessions **actuellement connectees** dans SSHive. Connectez-vous a prod, staging ou aux serveurs que vous voulez rendre accessibles a l\'IA. La surface d\'outils exposee : `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file` (1 MB max), `sftp_write_file` (en memoire), `sftp_write_file_chunk` (chunks de 4 MB pour gros fichiers via append base64) et `sftp_write_from_local_path` (lit un fichier local → ecrit sur le distant, zero base64, meilleur pour les gros transferts).',
        },
      },
      {
        name: { en: 'Restart the AI client and ask away', fr: 'Redemarrer le client IA et demander' },
        text: {
          en: 'Restart Claude Code, Cursor or Claude Desktop so they pick up the new MCP entry. Ask: "run `df -h` on the prod SSH session and flag any volume above 80%". The AI calls `ssh_execute` against your live SSHive session, parses, summarizes, and SSHive logs every tool call so you can audit what happened. To rotate the Bearer token: hit "Regenerate token" in Settings → MCP (a double-click confirmation gives you 4 seconds to back out). Old configs become invalid and SSHive re-writes the new token into the client config files it manages (`~/.claude.json`, `~/.cursor/mcp.json`).',
          fr: 'Redemarrez Claude Code, Cursor ou Claude Desktop pour qu\'ils prennent en compte la nouvelle entree MCP. Demandez : "lance `df -h` sur la session SSH de prod et signale tout volume au-dessus de 80%". L\'IA appelle `ssh_execute` sur votre session SSHive live, parse, resume, et SSHive logge chaque appel d\'outil pour audit. Pour faire tourner le Bearer token : "Regenerer le token" dans Parametres → MCP (un double-clic de confirmation laisse 4 secondes pour annuler). Les anciennes configs deviennent invalides et SSHive reecrit le nouveau token dans les fichiers de config clients qu\'il gere (`~/.claude.json`, `~/.cursor/mcp.json`).',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is the MCP integration safe?', fr: 'L\'integration MCP est-elle sure ?' },
        answer: {
          en: 'The AI can only do what you can do via the active SSH session, it has no extra privileges. SSHive logs each tool call. The MCP HTTP server binds to `127.0.0.1` only, never reachable from the network. The Bearer token lives in `settings.json` (rotatable from the UI), and the auto-written client configs are mode `0600` (owner read/write only).',
          fr: 'L\'IA ne peut faire que ce que vous pouvez via la session SSH active, pas de privilege supplementaire. SSHive logge chaque appel d\'outil. Le serveur HTTP MCP bind uniquement sur `127.0.0.1`, jamais joignable depuis le reseau. Le Bearer token vit dans `settings.json` (rotatable depuis l\'UI), et les configs clients auto-ecrites sont en mode `0600` (lecture/ecriture proprietaire uniquement).',
        },
      },
      {
        question: { en: 'Does this require a Pro subscription?', fr: 'Est-ce que ca demande un abonnement Pro ?' },
        answer: {
          en: 'Yes. MCP is part of SSHive Pro (one-time purchase on the Mac App Store). There is no degraded "read-only MCP" mode in Free, the toggle simply opens the upgrade modal.',
          fr: 'Oui. MCP fait partie de SSHive Pro (achat unique sur le Mac App Store). Pas de mode "MCP lecture seule" degrade en Free, le toggle ouvre simplement la modal d\'upgrade.',
        },
      },
    ],
    relatedFeatures: ['mcp', 'ssh', 'sftp'],
    relatedUseCases: ['developer-mac'],
    relatedHowTos: [],
  },
];

export const HOW_TO_SLUGS = HOW_TOS.map((h) => h.slug);

export function getHowTo(slug: string): HowToSEO | undefined {
  return HOW_TOS.find((h) => h.slug === slug);
}
