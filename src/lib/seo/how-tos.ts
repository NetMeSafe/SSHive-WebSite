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
      en: 'Step-by-step guide to setting up SSH local, remote, and SOCKS5 tunnels on macOS — with the OpenSSH command line and visually with SSHive.',
      fr: 'Guide pas-a-pas pour configurer des tunnels SSH local, remote et SOCKS5 sur macOS — en ligne de commande OpenSSH et visuellement avec SSHive.',
    },
    h1: { en: 'How to set up an SSH tunnel on a Mac', fr: 'Comment configurer un tunnel SSH sur Mac' },
    hero: {
      en: 'A complete guide to local, remote, and SOCKS5 SSH tunnels on macOS — both command-line and visually in SSHive.',
      fr: 'Un guide complet aux tunnels SSH local, remote et SOCKS5 sur macOS — en ligne de commande et visuellement dans SSHive.',
    },
    intro: {
      en: 'An SSH tunnel forwards a network port over an encrypted SSH connection. There are three flavors: Local (`-L`) brings a remote port to your Mac, Remote (`-R`) exposes a Mac port on the remote server, Dynamic SOCKS5 (`-D`) gives you a per-app proxy. This guide covers all three using OpenSSH (built into macOS) and visually using SSHive\'s Tunnels UI — pick whichever fits your workflow. The end result is the same: secure, ephemeral port forwarding without VPN overhead.',
      fr: 'Un tunnel SSH forwarde un port reseau sur une connexion SSH chiffree. Trois saveurs : Local (`-L`) ramene un port distant sur le Mac, Remote (`-R`) expose un port Mac sur le serveur distant, Dynamic SOCKS5 (`-D`) donne un proxy par app. Ce guide couvre les trois en OpenSSH (integre a macOS) et visuellement dans l\'UI Tunnels de SSHive — choisissez selon votre workflow. Le resultat est le meme : port forwarding sur, ephemere, sans overhead VPN.',
    },
    estimatedMinutes: 5,
    steps: [
      {
        name: { en: 'Set up a Local forward (most common)', fr: 'Configurer un forward Local (le plus courant)' },
        text: {
          en: 'Local forward exposes a remote service on your Mac. CLI: `ssh -L 5432:localhost:5432 user@bastion`. Now `localhost:5432` on your Mac talks to port 5432 on `bastion`. In SSHive: open the profile, Tunnels tab, "Add Local", local port 5432, remote host `localhost`, remote port 5432. Reconnect.',
          fr: 'Le forward Local expose un service distant sur le Mac. CLI : `ssh -L 5432:localhost:5432 user@bastion`. Maintenant `localhost:5432` sur le Mac parle au port 5432 de `bastion`. Dans SSHive : ouvrez le profil, onglet Tunnels, "Ajouter Local", port local 5432, hote distant `localhost`, port distant 5432. Reconnectez.',
        },
      },
      {
        name: { en: 'Forward to a different host through the bastion', fr: 'Forwarder vers un autre hote a travers le bastion' },
        text: {
          en: 'Local forwards can target any host the bastion can reach. CLI: `ssh -L 3306:db.internal:3306 user@bastion` exposes the internal DB on your Mac. In SSHive\'s Local tunnel: local port 3306, remote host `db.internal`, remote port 3306. Useful for AWS RDS, internal Redis, anything in a private subnet.',
          fr: 'Les forwards Local peuvent cibler n\'importe quel hote joignable par le bastion. CLI : `ssh -L 3306:db.internal:3306 user@bastion` expose la DB interne sur Mac. Dans le tunnel Local SSHive : port local 3306, hote distant `db.internal`, port distant 3306. Utile pour AWS RDS, Redis interne, tout ce qui est en sous-reseau prive.',
        },
      },
      {
        name: { en: 'Set up a Remote forward (reverse tunnel)', fr: 'Configurer un forward Remote (tunnel inverse)' },
        text: {
          en: 'Remote forward exposes a Mac service on the remote server. CLI: `ssh -R 8080:localhost:5173 user@public-host`. Whoever can reach `public-host:8080` reaches your local Vite dev server. In SSHive: Tunnels tab, "Add Remote", local port 5173, remote port 8080. Watch out: the remote sshd may need `GatewayPorts yes` for external interfaces.',
          fr: 'Le forward Remote expose un service Mac sur le serveur distant. CLI : `ssh -R 8080:localhost:5173 user@public-host`. Qui atteint `public-host:8080` atteint votre serveur Vite dev local. Dans SSHive : onglet Tunnels, "Ajouter Remote", port local 5173, port distant 8080. Attention : le sshd distant peut demander `GatewayPorts yes` pour les interfaces externes.',
        },
      },
      {
        name: { en: 'Set up a SOCKS5 dynamic proxy', fr: 'Configurer un proxy dynamique SOCKS5' },
        text: {
          en: 'SOCKS5 turns the SSH connection into a per-app HTTP/HTTPS proxy. CLI: `ssh -D 1080 user@host`. Set Firefox/Chrome SOCKS proxy to `localhost:1080` — all browser traffic exits via that host. In SSHive: Tunnels tab, "Add SOCKS5", local port 1080. Use it on hotel Wi-Fi to route through your home server.',
          fr: 'SOCKS5 transforme la connexion SSH en proxy HTTP/HTTPS par app. CLI : `ssh -D 1080 user@host`. Reglez le proxy SOCKS Firefox/Chrome sur `localhost:1080` — tout le trafic navigateur sort via cet hote. Dans SSHive : onglet Tunnels, "Ajouter SOCKS5", port local 1080. Utilisez-le sur Wi-Fi d\'hotel pour router via votre serveur perso.',
        },
      },
      {
        name: { en: 'Verify the tunnel is up', fr: 'Verifier que le tunnel est actif' },
        text: {
          en: 'Check what\'s listening: `lsof -i :5432` should show ssh as the listener. Test with `nc -zv localhost 5432` or just connect with your client. If the tunnel fails, check sshd config on the remote: `AllowTcpForwarding yes` is required, plus `GatewayPorts yes` for Remote forwards on external interfaces.',
          fr: 'Verifiez ce qui ecoute : `lsof -i :5432` doit montrer ssh comme listener. Testez avec `nc -zv localhost 5432` ou connectez juste votre client. Si le tunnel echoue, verifiez la config sshd cote distant : `AllowTcpForwarding yes` requis, plus `GatewayPorts yes` pour les forwards Remote sur interfaces externes.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Tunnel dies when my SSH session ends?', fr: 'Le tunnel meurt quand ma session SSH finit ?' },
        answer: {
          en: 'Yes — tunnels live with the SSH connection. In SSHive, enable auto-reconnect on the profile and tunnels reattach automatically when the connection comes back. For long-running tunnels, set `ServerAliveInterval 60` in OpenSSH or use SSHive\'s built-in keepalive (default: 30s).',
          fr: 'Oui — les tunnels vivent avec la connexion SSH. Dans SSHive, activez l\'auto-reconnect sur le profil et les tunnels se rattachent automatiquement quand la connexion revient. Pour les tunnels longue duree, reglez `ServerAliveInterval 60` en OpenSSH ou utilisez le keepalive integre de SSHive (defaut : 30s).',
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
      en: 'Generate ed25519 SSH keys on macOS, copy them to remote servers, configure ssh-agent and the Apple Keychain, use them in SSHive — complete 2026 guide.',
      fr: 'Generez des cles SSH ed25519 sur macOS, copiez-les sur les serveurs distants, configurez ssh-agent et le Trousseau Apple, utilisez-les dans SSHive — guide complet 2026.',
    },
    h1: { en: 'How to generate and use SSH keys on a Mac', fr: 'Comment generer et utiliser des cles SSH sur Mac' },
    hero: {
      en: 'From `ssh-keygen` to passwordless servers in 5 minutes — covers ed25519, ssh-agent, the Apple Keychain, and SSHive integration.',
      fr: 'De `ssh-keygen` aux serveurs sans mot de passe en 5 min — couvre ed25519, ssh-agent, le Trousseau Apple et l\'integration SSHive.',
    },
    intro: {
      en: 'Password authentication for SSH is a security smell — bots scan port 22 looking for weak passwords 24/7. SSH key authentication replaces "something you know" with "something you have", and once configured, you also stop typing passwords every time you connect. This guide gets you from no keys to a passwordless production server in 5 minutes, using ed25519 (the modern, fast, short keypair) and SSHive\'s built-in key management.',
      fr: 'L\'auth par mot de passe SSH est un signe de mauvaise securite — les bots scannent le port 22 a la recherche de mots de passe faibles 24/7. L\'auth par cle SSH remplace "ce que vous savez" par "ce que vous avez", et une fois configuree, vous arretez de taper des mots de passe a chaque connexion. Ce guide vous emmene de zero cle a un serveur prod sans mot de passe en 5 min, avec ed25519 (la paire moderne, rapide, courte) et la gestion de cles integree de SSHive.',
    },
    estimatedMinutes: 5,
    steps: [
      {
        name: { en: 'Generate an ed25519 keypair', fr: 'Generer une paire ed25519' },
        text: {
          en: 'Open SSHive\'s local terminal (or Terminal.app). Run: `ssh-keygen -t ed25519 -C "your-email@example.com"`. Press Enter to accept the default path (`~/.ssh/id_ed25519`). Set a passphrase — yes, even if it feels redundant; the macOS Keychain will store it so you only type it once.',
          fr: 'Ouvrez le terminal local de SSHive (ou Terminal.app). Lancez : `ssh-keygen -t ed25519 -C "votre-email@example.com"`. Entree pour accepter le chemin par defaut (`~/.ssh/id_ed25519`). Mettez une passphrase — oui, meme si ca semble redondant ; le Trousseau macOS la stockera pour ne la taper qu\'une fois.',
        },
      },
      {
        name: { en: 'Copy the public key to the remote server', fr: 'Copier la cle publique sur le serveur distant' },
        text: {
          en: 'Run: `ssh-copy-id user@host`. Authenticate with the password one last time. The command appends your public key to `~/.ssh/authorized_keys` on the server. Test: `ssh user@host` should now skip the password prompt.',
          fr: 'Lancez : `ssh-copy-id user@host`. Authentifiez-vous avec le mot de passe une derniere fois. La commande ajoute votre cle publique a `~/.ssh/authorized_keys` sur le serveur. Test : `ssh user@host` doit maintenant sauter le prompt de mot de passe.',
        },
      },
      {
        name: { en: 'Add the key to ssh-agent + Apple Keychain', fr: 'Ajouter la cle a ssh-agent + Trousseau Apple' },
        text: {
          en: 'Edit `~/.ssh/config` (create it if absent). Add:\n```\nHost *\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ed25519\n```\nThen run `ssh-add --apple-use-keychain ~/.ssh/id_ed25519`. The passphrase is now stored in the macOS Keychain and applied automatically on every reboot.',
          fr: 'Editez `~/.ssh/config` (creez-le s\'il n\'existe pas). Ajoutez :\n```\nHost *\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ed25519\n```\nPuis lancez `ssh-add --apple-use-keychain ~/.ssh/id_ed25519`. La passphrase est maintenant stockee dans le Trousseau macOS et appliquee automatiquement a chaque reboot.',
        },
      },
      {
        name: { en: 'Configure the key in a SSHive profile', fr: 'Configurer la cle dans un profil SSHive' },
        text: {
          en: 'In SSHive, edit your server profile. Auth method → "Private Key". Browse to `~/.ssh/id_ed25519`. Save. Connect — SSHive uses the key, the macOS Keychain provides the passphrase, no manual prompt. The profile is portable; you can export it (without the key) for teammates.',
          fr: 'Dans SSHive, editez votre profil serveur. Methode auth → "Cle privee". Browsez vers `~/.ssh/id_ed25519`. Sauvegardez. Connectez — SSHive utilise la cle, le Trousseau macOS fournit la passphrase, pas de prompt manuel. Le profil est portable ; vous pouvez l\'exporter (sans la cle) pour les coequipiers.',
        },
      },
      {
        name: { en: 'Disable password auth on the remote', fr: 'Desactiver l\'auth mot de passe cote distant' },
        text: {
          en: 'Once key auth works, harden the server: edit `/etc/ssh/sshd_config` and set `PasswordAuthentication no`. Reload sshd: `sudo systemctl reload ssh` (or `sudo service ssh reload` on older systems). Now no one — including you with a wrong password — can log in without your key.',
          fr: 'Une fois l\'auth cle qui marche, durcissez le serveur : editez `/etc/ssh/sshd_config` et mettez `PasswordAuthentication no`. Reloadez sshd : `sudo systemctl reload ssh` (ou `sudo service ssh reload` sur systemes anciens). Maintenant personne — y compris vous avec un mauvais mot de passe — ne peut se connecter sans votre cle.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Should I use RSA, ECDSA, or ed25519?', fr: 'Dois-je utiliser RSA, ECDSA ou ed25519 ?' },
        answer: {
          en: 'ed25519 is the right answer in 2026: faster, shorter, no known cryptographic weaknesses. Use RSA 4096 only when connecting to ancient OpenSSH versions (< 6.5) that don\'t support ed25519. Avoid ECDSA — it has more failure modes than ed25519.',
          fr: 'ed25519 est la bonne reponse en 2026 : plus rapide, plus court, pas de faiblesse cryptographique connue. Utilisez RSA 4096 uniquement pour vous connecter a des OpenSSH antiques (< 6.5) qui ne supportent pas ed25519. Evitez ECDSA — plus de modes d\'echec qu\'ed25519.',
        },
      },
      {
        question: { en: 'Where are my SSH keys stored on macOS?', fr: 'Ou sont stockees mes cles SSH sur macOS ?' },
        answer: {
          en: 'The keys themselves stay where ssh-keygen puts them — `~/.ssh/`. The passphrase that unlocks an encrypted key is what ends up in the macOS Keychain (via `--apple-use-keychain` or SSHive\'s safeStorage integration). The private key file is yours to back up — losing it locks you out of every server you copied it to.',
          fr: 'Les cles elles-memes restent ou ssh-keygen les pose — `~/.ssh/`. La passphrase qui deverrouille une cle chiffree finit dans le Trousseau macOS (via `--apple-use-keychain` ou l\'integration safeStorage de SSHive). Le fichier de cle privee est a vous de sauvegarder — le perdre vous bloque hors de chaque serveur sur lequel vous l\'avez copie.',
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
      en: 'Best Free SFTP Client for Mac (2026) — SSHive Guide',
      fr: 'Meilleur client SFTP gratuit pour Mac (2026) — Guide complet',
    },
    metaDescription: {
      en: 'How to use SFTP on macOS visually — drag & drop file transfers, remote editing, bulk operations. Free SFTP client with SSH terminal in the same window.',
      fr: 'Comment utiliser SFTP sur macOS visuellement — transferts drag & drop, edition distante, operations en lot. Client SFTP gratuit avec terminal SSH dans la meme fenetre.',
    },
    h1: { en: 'How to use SFTP on a Mac (drag & drop, free)', fr: 'Comment utiliser SFTP sur Mac (drag & drop, gratuit)' },
    hero: {
      en: 'Drag-and-drop SFTP transfers, remote file editing, bulk ops — in the same window as your SSH terminal. Free.',
      fr: 'Transferts SFTP drag-and-drop, edition de fichiers distants, operations en lot — dans la meme fenetre que votre terminal SSH. Gratuit.',
    },
    intro: {
      en: 'SFTP is the file-transfer side of SSH — same auth, same encryption, same connection. macOS doesn\'t ship a graphical SFTP client; the Finder doesn\'t speak it natively (despite what some old tutorials claim). Free options have traditionally been Cyberduck (good but a separate window) or scp from the terminal (functional but slow). SSHive integrates SFTP in the same window as the SSH terminal — drag, drop, edit, save. This guide shows you how.',
      fr: 'SFTP est le cote transfert de fichiers de SSH — meme auth, meme chiffrement, meme connexion. macOS ne livre pas de client SFTP graphique ; le Finder ne le parle pas nativement (malgre ce que disent certains vieux tutos). Les options gratuites historiques : Cyberduck (bon mais fenetre separee) ou scp depuis le terminal (fonctionnel mais lent). SSHive integre SFTP dans la meme fenetre que le terminal SSH — drag, drop, edit, save. Ce guide vous montre comment.',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Install SSHive and connect to your server', fr: 'Installer SSHive et se connecter a votre serveur' },
        text: {
          en: 'Download SSHive from sshive.app or the Mac App Store. New connection: enter host, user, key. Connect — you land on the SSH terminal with the SFTP pane visible in the right side of the window.',
          fr: 'Telechargez SSHive sur sshive.app ou le Mac App Store. Nouvelle connexion : host, user, cle. Connectez — vous atterrissez sur le terminal SSH avec le panneau SFTP visible a droite de la fenetre.',
        },
      },
      {
        name: { en: 'Browse the remote filesystem', fr: 'Parcourir le filesystem distant' },
        text: {
          en: 'The SFTP pane shows the remote filesystem starting at your home directory. Navigate by clicking folders or using the breadcrumb path bar. Bookmark frequently visited paths (right-click → Add to bookmarks) — `/var/log`, `/etc/nginx`, `~/.ssh` are good candidates.',
          fr: 'Le panneau SFTP montre le filesystem distant en partant de votre home. Naviguez en cliquant sur les dossiers ou via la barre de chemin breadcrumb. Mettez en favori les chemins frequents (clic droit → Ajouter aux favoris) — `/var/log`, `/etc/nginx`, `~/.ssh` sont de bons candidats.',
        },
      },
      {
        name: { en: 'Upload files via drag-and-drop', fr: 'Uploader des fichiers en drag-and-drop' },
        text: {
          en: 'Drag any file from your Mac\'s Finder onto the remote folder in SSHive. Transfer starts immediately — progress, speed, ETA visible in the bottom bar. For multi-file uploads, select files in Finder, drag the group. SSHive queues them and uploads in parallel (4 concurrent by default).',
          fr: 'Glissez n\'importe quel fichier du Finder Mac sur le dossier distant dans SSHive. Le transfert demarre tout de suite — progression, vitesse, ETA visibles en barre du bas. Pour les uploads multi-fichiers, selectionnez dans Finder, glissez le groupe. SSHive les met en file et upload en parallele (4 simultanes par defaut).',
        },
      },
      {
        name: { en: 'Edit a remote file in place', fr: 'Editer un fichier distant en place' },
        text: {
          en: 'Double-click any text file in the SFTP pane — it opens in SSHive\'s built-in Monaco editor (same engine as VS Code). Edit, Cmd+S to save back to the server. No temp file dance, no manual upload. For binary files (images, PDFs), they open in the macOS default app via a temp file SSHive watches; saving uploads back automatically.',
          fr: 'Double-clic sur n\'importe quel fichier texte dans le panneau SFTP — il s\'ouvre dans l\'editeur Monaco integre de SSHive (meme moteur que VS Code). Editez, Cmd+S pour sauvegarder cote serveur. Pas de danse de temp file, pas d\'upload manuel. Pour les binaires (images, PDFs), ils s\'ouvrent dans l\'app macOS par defaut via un temp file que SSHive surveille ; la sauvegarde reupload automatiquement.',
        },
      },
      {
        name: { en: 'Bulk operations on multi-selection', fr: 'Operations en lot sur multi-selection' },
        text: {
          en: 'Cmd-click or Shift-click to select multiple files. Right-click for bulk operations: Download (to your Mac), Delete, chmod (with a permission picker), Compare. Useful for cleaning out `/tmp` or pulling a date-range of logs.',
          fr: 'Cmd-clic ou Shift-clic pour selectionner plusieurs fichiers. Clic droit pour ops en lot : Telecharger (vers Mac), Supprimer, chmod (avec un picker de permissions), Comparer. Utile pour nettoyer `/tmp` ou recuperer une plage de dates de logs.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is SSHive\'s SFTP free?', fr: 'Le SFTP de SSHive est-il gratuit ?' },
        answer: {
          en: 'Yes. SFTP is part of the free tier alongside the SSH terminal. The free tier has 2 concurrent sessions and 5 saved profiles — no SFTP-specific restrictions.',
          fr: 'Oui. SFTP fait partie du tier gratuit avec le terminal SSH. Le gratuit a 2 sessions concurrentes et 5 profils sauvegardes — pas de restriction specifique SFTP.',
        },
      },
      {
        question: { en: 'How does SSHive compare to Cyberduck for SFTP?', fr: 'Comment SSHive se compare a Cyberduck pour SFTP ?' },
        answer: {
          en: 'For pure SFTP, both are good. Cyberduck supports more protocols (S3, WebDAV, FTP). SSHive\'s win is bundling SFTP with the SSH terminal — you can fix a config and restart the service in the same window. If 95% of your file work is over SSH, SSHive saves a window.',
          fr: 'Pour le SFTP pur, les deux sont bons. Cyberduck supporte plus de protocoles (S3, WebDAV, FTP). L\'avantage de SSHive : bundler SFTP avec le terminal SSH — vous corrigez une config et redemarrez le service dans la meme fenetre. Si 95% de votre travail fichier est via SSH, SSHive economise une fenetre.',
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
      en: 'Connect to Windows desktops or servers from macOS via RDP — built-in SSHive client (no Microsoft Remote Desktop window-juggling), keyboard mapping, clipboard.',
      fr: 'Connectez-vous a des bureaux ou serveurs Windows depuis macOS via RDP — client SSHive integre (pas de jonglage de fenetres avec Microsoft Remote Desktop), mapping clavier, presse-papiers.',
    },
    h1: { en: 'How to RDP from a Mac to a Windows host', fr: 'Comment faire du RDP depuis Mac vers un hote Windows' },
    hero: {
      en: 'Embedded RDP client in macOS — no window-switching to Microsoft Remote Desktop, full keyboard mapping, encrypted via SSH if needed.',
      fr: 'Client RDP integre dans macOS — pas de switch de fenetre vers Microsoft Remote Desktop, mapping clavier complet, chiffre via SSH si besoin.',
    },
    intro: {
      en: 'RDP (Remote Desktop Protocol) is Microsoft\'s graphical remote-access protocol. From a Mac, the obvious tool is Microsoft Remote Desktop — works fine, but it lives in its own window away from your terminal and SFTP pane. SSHive includes a built-in RDP client (powered by IronRDP, a Rust implementation of the protocol) that opens RDP sessions as tabs alongside SSH/SFTP — one window for everything.',
      fr: 'RDP (Remote Desktop Protocol) est le protocole d\'acces distant graphique de Microsoft. Depuis Mac, l\'outil evident est Microsoft Remote Desktop — marche bien, mais vit dans sa propre fenetre loin de votre terminal et panneau SFTP. SSHive inclut un client RDP integre (powered by IronRDP, une implementation Rust du protocole) qui ouvre les sessions RDP en onglets a cote du SSH/SFTP — une fenetre pour tout.',
    },
    estimatedMinutes: 4,
    steps: [
      {
        name: { en: 'Enable RDP on the Windows host', fr: 'Activer RDP sur l\'hote Windows' },
        text: {
          en: 'Windows: Settings → System → Remote Desktop → toggle Enable. Note the PC name. For Server: Server Manager → Local Server → Remote Desktop → enable. Add your user to the Remote Desktop Users group if not an admin. Open port 3389 in the firewall (usually automatic on enabling RDP).',
          fr: 'Windows : Parametres → Systeme → Bureau a distance → toggle Activer. Notez le nom du PC. Pour Server : Server Manager → Local Server → Remote Desktop → activer. Ajoutez votre user au groupe Remote Desktop Users si pas admin. Ouvrez le port 3389 dans le firewall (generalement auto a l\'activation RDP).',
        },
      },
      {
        name: { en: 'Create an RDP profile in SSHive', fr: 'Creer un profil RDP dans SSHive' },
        text: {
          en: 'In SSHive, click "+" → "RDP". Hostname: the Windows PC name or IP. User: in `DOMAIN\\username` form for AD, just `username` for local accounts. Password: stored in macOS Keychain. Save. Click connect — the RDP session opens as a tab.',
          fr: 'Dans SSHive, cliquez "+" → "RDP". Hostname : le nom PC Windows ou IP. User : en `DOMAINE\\username` pour AD, juste `username` pour comptes locaux. Mot de passe : stocke dans le Trousseau macOS. Sauvegardez. Cliquez Connecter — la session RDP s\'ouvre en onglet.',
        },
      },
      {
        name: { en: 'Adjust resolution and keyboard layout', fr: 'Ajuster la resolution et le layout clavier' },
        text: {
          en: 'Resolution defaults to your display\'s logical resolution. Adjust per-profile if you want a smaller virtual desktop. Keyboard layout: SSHive translates Cmd to Ctrl by default — Cmd+C → Ctrl+C, Cmd+V → Ctrl+V. AltGr (option key) is mapped for international keyboards. If you need a specific layout, set it on the Windows side.',
          fr: 'La resolution par defaut est la resolution logique de votre ecran. Ajustez par profil pour un bureau virtuel plus petit. Layout clavier : SSHive traduit Cmd en Ctrl par defaut — Cmd+C → Ctrl+C, Cmd+V → Ctrl+V. AltGr (touche option) mappee pour claviers internationaux. Pour un layout specifique, reglez cote Windows.',
        },
      },
      {
        name: { en: 'Tunnel RDP through SSH for public Internet', fr: 'Tunneliser RDP via SSH pour Internet public' },
        text: {
          en: 'Don\'t expose port 3389 to the Internet — RDP brute-forcing is rampant. Instead, SSH-tunnel: in your bastion\'s SSH profile, add Local forward 3389 → windows-host:3389. Then create the RDP profile pointing at `localhost:3389`. RDP traffic now goes through the encrypted SSH tunnel.',
          fr: 'N\'exposez pas le port 3389 a Internet — le brute-force RDP est omnipresent. A la place, tunnel SSH : dans le profil SSH du bastion, ajoutez forward Local 3389 → windows-host:3389. Puis creez le profil RDP pointant sur `localhost:3389`. Le trafic RDP passe maintenant via le tunnel SSH chiffre.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does SSHive RDP work with cloud-hosted Windows VMs?', fr: 'Le RDP de SSHive marche-t-il avec des VMs Windows cloud ?' },
        answer: {
          en: 'Direct RDP to a Windows VM with a public IP or VPN-reachable IP: yes. Brokered connections (e.g., Azure Virtual Desktop\'s broker handshake) are not in scope — use the corresponding vendor client for those.',
          fr: 'Le RDP direct vers une VM Windows avec IP publique ou joignable via VPN : oui. Les connexions a broker (genre handshake broker d\'Azure Virtual Desktop) sont hors scope — utilisez le client editeur correspondant pour ceux-la.',
        },
      },
      {
        question: { en: 'Can I copy-paste files between Mac and the Windows host?', fr: 'Puis-je copier-coller des fichiers entre Mac et l\'hote Windows ?' },
        answer: {
          en: 'SSHive\'s RDP supports text clipboard syncing. For files, the simplest path: enable OpenSSH on the Windows host and use SSHive\'s SFTP pane in parallel — usually faster than RDP file redirection anyway.',
          fr: 'Le RDP de SSHive supporte la sync de presse-papiers texte. Pour les fichiers, le plus simple : activez OpenSSH sur l\'hote Windows et utilisez le panneau SFTP de SSHive en parallele — souvent plus rapide que la redirection fichier RDP.',
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
      en: 'Built-in VNC viewer, full RFB protocol support, works with TightVNC/RealVNC/x11vnc/noVNC — and no separate WebSocket relay needed.',
      fr: 'Viewer VNC integre, support complet du protocole RFB, fonctionne avec TightVNC/RealVNC/x11vnc/noVNC — et pas besoin de relais WebSocket separe.',
    },
    intro: {
      en: 'VNC is the cross-platform remote desktop protocol everyone uses on Linux. Whether you\'re managing a Raspberry Pi\'s desktop, the noVNC console of a Proxmox VM, or a headless Linux box you want to occasionally see graphically, VNC is the answer. SSHive\'s built-in VNC viewer uses noVNC under the hood with an embedded WebSocket proxy — meaning you connect directly to a TCP VNC server without setting up websockify or a separate relay.',
      fr: 'VNC est le protocole bureau distant cross-platform que tout le monde utilise sur Linux. Que vous geriez le bureau d\'un Raspberry Pi, la console noVNC d\'une VM Proxmox ou une box Linux headless que vous voulez occasionnellement voir graphiquement, VNC est la reponse. Le viewer VNC integre de SSHive utilise noVNC sous le capot avec un proxy WebSocket integre — vous vous connectez directement a un serveur VNC TCP sans configurer websockify ou un relais separe.',
    },
    estimatedMinutes: 4,
    steps: [
      {
        name: { en: 'Install a VNC server on the remote', fr: 'Installer un serveur VNC sur le distant' },
        text: {
          en: 'Raspberry Pi: `sudo apt install realvnc-vnc-server`, enable via `raspi-config` → Interface Options → VNC. Ubuntu/Debian desktop: `sudo apt install x11vnc`, run `x11vnc -auth /var/lib/gdm3/auth-for-gdm-* -display :0 -forever -loop`. Set a VNC password with `x11vnc -storepasswd`.',
          fr: 'Raspberry Pi : `sudo apt install realvnc-vnc-server`, activez via `raspi-config` → Interface Options → VNC. Ubuntu/Debian desktop : `sudo apt install x11vnc`, lancez `x11vnc -auth /var/lib/gdm3/auth-for-gdm-* -display :0 -forever -loop`. Mettez un mot de passe VNC avec `x11vnc -storepasswd`.',
        },
      },
      {
        name: { en: 'Verify VNC is listening', fr: 'Verifier que VNC ecoute' },
        text: {
          en: 'On the remote: `ss -tlnp | grep 5900` (or 5901, etc.). Default VNC port is 5900 (display :0), 5901 for :1, etc. Confirm port and password before moving on.',
          fr: 'Sur le distant : `ss -tlnp | grep 5900` (ou 5901, etc.). Le port VNC par defaut est 5900 (display :0), 5901 pour :1, etc. Confirmez port et mot de passe avant de continuer.',
        },
      },
      {
        name: { en: 'Create a VNC profile in SSHive', fr: 'Creer un profil VNC dans SSHive' },
        text: {
          en: 'Click "+" → "VNC". Hostname or IP: the remote box. Port: 5900 (or whatever). Password: the VNC password. Save. Click connect — the VNC session opens as a tab next to your other SSHive sessions.',
          fr: 'Cliquez "+" → "VNC". Hostname ou IP : la box distante. Port : 5900 (ou autre). Mot de passe : le mot de passe VNC. Sauvegardez. Cliquez Connecter — la session VNC s\'ouvre en onglet a cote de vos autres sessions SSHive.',
        },
      },
      {
        name: { en: 'Tunnel VNC through SSH for security', fr: 'Tunneliser VNC via SSH pour la securite' },
        text: {
          en: 'VNC password auth is weak — anyone on the network can sniff. Better: tunnel VNC through SSH. In the host\'s SSH profile, add Local forward 5900 → localhost:5900. In the VNC profile, set host to `localhost` port 5900. The VNC traffic now flows through the encrypted SSH tunnel.',
          fr: 'L\'auth mot de passe VNC est faible — n\'importe qui sur le reseau peut sniffer. Mieux : tunnel VNC via SSH. Dans le profil SSH de l\'hote, ajoutez forward Local 5900 → localhost:5900. Dans le profil VNC, mettez l\'hote a `localhost` port 5900. Le trafic VNC passe maintenant via le tunnel SSH chiffre.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Will SSHive work with Apple Screen Sharing on a Mac?', fr: 'SSHive marchera-t-il avec Partage d\'ecran Apple sur Mac ?' },
        answer: {
          en: 'Yes — Apple\'s vncserver speaks RFB, port 5900. Enable on the target Mac: System Settings → General → Sharing → Screen Sharing. SSHive can connect, though for Apple-to-Apple, the built-in client is still richer (audio, drag-drop).',
          fr: 'Oui — le vncserver d\'Apple parle RFB, port 5900. Activez sur le Mac cible : Reglages Systeme → General → Partage → Partage d\'ecran. SSHive peut s\'y connecter, bien que pour Mac-Mac, le client integre soit plus riche (audio, drag-drop).',
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
      en: 'Configure SSH ProxyJump bastions visually on macOS — no ~/.ssh/config editing, agent forwarding, multi-hop chains. Step-by-step with SSHive.',
      fr: 'Configurez les bastions SSH ProxyJump visuellement sur macOS — sans edition de ~/.ssh/config, agent forwarding, chaines multi-saut. Pas-a-pas avec SSHive.',
    },
    h1: { en: 'How to use a jump host on a Mac', fr: 'Comment utiliser un jump host sur Mac' },
    hero: {
      en: 'Visual ProxyJump configuration, agent forwarding, multi-hop chains — without editing ~/.ssh/config every time.',
      fr: 'Configuration ProxyJump visuelle, agent forwarding, chaines multi-saut — sans editer ~/.ssh/config a chaque fois.',
    },
    intro: {
      en: 'A jump host (bastion) is a single Internet-exposed SSH server through which you reach private hosts in a network. Set up a bastion once, every other server is reachable via it. The OpenSSH way is `ssh -J bastion target` or `ProxyJump bastion` in `~/.ssh/config`. SSHive makes it visual: configure the bastion as a profile, then tag any other profile with "Jump Host: bastion" — no config-file editing.',
      fr: 'Un jump host (bastion) est un serveur SSH expose a Internet via lequel vous atteignez des hotes prives. Configurez un bastion une fois, tous les autres serveurs sont joignables par lui. La maniere OpenSSH : `ssh -J bastion target` ou `ProxyJump bastion` dans `~/.ssh/config`. SSHive le rend visuel : configurez le bastion en profil, puis taggez n\'importe quel autre profil avec "Jump Host : bastion" — pas d\'edition de config.',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Create the bastion profile', fr: 'Creer le profil bastion' },
        text: {
          en: 'In SSHive, "+" → "SSH". Bastion\'s public hostname/IP, user, key. Connect once to verify and accept the host key. Open profile settings, mark this profile as "Bastion / Jump Host".',
          fr: 'Dans SSHive, "+" → "SSH". Hostname/IP public du bastion, user, cle. Connectez une fois pour verifier et accepter la cle hote. Ouvrez les parametres du profil, marquez ce profil "Bastion / Jump Host".',
        },
      },
      {
        name: { en: 'Create a target host profile', fr: 'Creer un profil d\'hote cible' },
        text: {
          en: 'New SSH profile: target\'s private IP/hostname (as seen from inside the bastion\'s network), user, key. In "Jump Host" section, select your bastion profile. Save.',
          fr: 'Nouveau profil SSH : IP/hostname prive de la cible (vu depuis le reseau interne du bastion), user, cle. Dans la section "Jump Host", selectionnez votre profil bastion. Sauvegardez.',
        },
      },
      {
        name: { en: 'Optionally enable agent forwarding', fr: 'Optionnellement activer agent forwarding' },
        text: {
          en: 'In the bastion profile, toggle "Forward agent". Your local ssh-agent (containing your keys) is forwarded to the bastion when you connect. The second-hop SSH session uses your local key without ever transmitting the private key.',
          fr: 'Dans le profil bastion, toggle "Forward agent". Votre ssh-agent local (contenant vos cles) est forwarded vers le bastion a la connexion. La session SSH du deuxieme saut utilise votre cle locale sans jamais transmettre la cle privee.',
        },
      },
      {
        name: { en: 'Chain multiple jump hosts', fr: 'Chainer plusieurs jump hosts' },
        text: {
          en: 'Need to hop through two bastions? Profile A is your first bastion, profile B uses A as Jump Host (B is the second bastion), profile C uses B as Jump Host. Connect to C — SSHive negotiates A → B → C automatically.',
          fr: 'Besoin de passer par deux bastions ? Le profil A est votre premier bastion, le profil B utilise A comme Jump Host (B est le deuxieme bastion), le profil C utilise B comme Jump Host. Connectez-vous a C — SSHive negocie A → B → C automatiquement.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can I use a jump host with SFTP and tunnels?', fr: 'Puis-je utiliser un jump host avec SFTP et tunnels ?' },
        answer: {
          en: 'Yes — SFTP and tunnels work transparently through a jump host. Drag a file to the target host\'s SFTP pane, the file goes encrypted: Mac → bastion → target. Tunnels work the same way.',
          fr: 'Oui — SFTP et tunnels marchent de facon transparente a travers un jump host. Glissez un fichier sur le panneau SFTP de l\'hote cible, le fichier passe chiffre : Mac → bastion → cible. Les tunnels marchent pareil.',
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
      en: 'Bring your existing OpenSSH config into SSHive — every Host entry becomes a profile in seconds.',
      fr: 'Apportez votre config OpenSSH existante dans SSHive — chaque entree Host devient un profil en quelques secondes.',
    },
    intro: {
      en: 'If you\'ve been using SSH on a Mac for years, you have a `~/.ssh/config` packed with Host entries — bastions, production servers, IoT boxes. SSHive can parse it and turn each Host into a profile, including ProxyJump, IdentityFile, Port, User, and HostName directives. The original file stays untouched, so you can keep using `ssh server-name` from any other terminal in parallel.',
      fr: 'Si vous utilisez SSH sur Mac depuis des annees, vous avez un `~/.ssh/config` rempli d\'entrees Host — bastions, serveurs prod, boxes IoT. SSHive peut le parser et transformer chaque Host en profil, y compris les directives ProxyJump, IdentityFile, Port, User et HostName. Le fichier original reste intact, vous pouvez continuer a utiliser `ssh server-name` depuis n\'importe quel autre terminal en parallele.',
    },
    estimatedMinutes: 2,
    steps: [
      {
        name: { en: 'Open the import dialog', fr: 'Ouvrir le dialogue d\'import' },
        text: {
          en: 'In SSHive, click "+" → "Import" → "From ~/.ssh/config". SSHive reads your config file (asking for permission once via macOS sandbox).',
          fr: 'Dans SSHive, cliquez "+" → "Importer" → "Depuis ~/.ssh/config". SSHive lit votre fichier config (demande la permission une fois via la sandbox macOS).',
        },
      },
      {
        name: { en: 'Review the parsed entries', fr: 'Verifier les entrees parsees' },
        text: {
          en: 'SSHive shows a preview: every Host entry with the resolved settings. Uncheck any you don\'t want imported. Group them into folders by tagging in the dialog (e.g., "client-x", "personal", "home lab").',
          fr: 'SSHive affiche un apercu : chaque entree Host avec les reglages resolus. Decochez celles a ne pas importer. Groupez-les en dossiers en taggant dans le dialogue (ex. "client-x", "perso", "home lab").',
        },
      },
      {
        name: { en: 'Confirm the import', fr: 'Confirmer l\'import' },
        text: {
          en: 'Click "Import". SSHive creates the profiles. ProxyJump entries are resolved into Jump Host links between profiles. The next time you launch SSHive, all your familiar host names are clickable from the sidebar.',
          fr: 'Cliquez "Importer". SSHive cree les profils. Les entrees ProxyJump sont resolues en liens Jump Host entre profils. Au prochain lancement de SSHive, tous vos noms d\'hote familiers sont cliquables depuis la sidebar.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does SSHive modify my ~/.ssh/config?', fr: 'SSHive modifie-t-il mon ~/.ssh/config ?' },
        answer: {
          en: 'No — read-only. The original file is untouched, so `ssh hostname` from Terminal still works. SSHive\'s profiles are an independent copy. If you re-import after editing the config, SSHive offers to update existing profiles or create new ones.',
          fr: 'Non — lecture seule. Le fichier original n\'est pas touche, `ssh hostname` depuis Terminal marche toujours. Les profils SSHive sont une copie independante. Si vous reimportez apres modification de la config, SSHive propose de mettre a jour les profils existants ou d\'en creer de nouveaux.',
        },
      },
      {
        question: { en: 'Can I export SSHive profiles back to ~/.ssh/config?', fr: 'Puis-je exporter les profils SSHive vers ~/.ssh/config ?' },
        answer: {
          en: 'Yes — Profiles → Export → "OpenSSH config format". Useful for sharing setup with non-SSHive users or backing up.',
          fr: 'Oui — Profils → Exporter → "Format config OpenSSH". Utile pour partager le setup avec des non-utilisateurs de SSHive ou faire des backups.',
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
      en: 'Route browser traffic through a remote server — encrypted, untouchable by hotel networks. Free, no VPN service.',
      fr: 'Routez le trafic navigateur via un serveur distant — chiffre, intouchable par les reseaux d\'hotel. Gratuit, sans service VPN.',
    },
    intro: {
      en: 'SSH\'s `-D` flag turns the connection into a SOCKS5 proxy. Your browser/app sends traffic to `localhost:1080`, SSH forwards it through the encrypted tunnel to the remote server, and the remote server makes the actual outbound request. End result: web traffic appears to come from the remote server\'s IP, encrypted from your Mac all the way to the SSH endpoint. No paid VPN service needed if you have any SSH-accessible server (your home server, a $5 VPS, even a Raspberry Pi at home).',
      fr: 'Le flag `-D` de SSH transforme la connexion en proxy SOCKS5. Votre navigateur/app envoie le trafic a `localhost:1080`, SSH le forwarde via le tunnel chiffre vers le serveur distant, et le serveur distant fait la requete sortante reelle. Resultat : le trafic web semble venir de l\'IP du serveur distant, chiffre de Mac jusqu\'au endpoint SSH. Pas besoin de service VPN payant si vous avez un serveur SSH-accessible (serveur perso, VPS a 5 $, meme un Raspberry Pi a la maison).',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Pick a remote SSH server', fr: 'Choisir un serveur SSH distant' },
        text: {
          en: 'Any SSH-reachable server works: your home server, a VPS, your work bastion (with permission). For best browsing speed, pick something close to where you want to appear from. Make sure SSH on the remote allows TCP forwarding (`AllowTcpForwarding yes` in sshd_config — usually default).',
          fr: 'N\'importe quel serveur SSH-joignable marche : serveur perso, VPS, bastion du boulot (avec permission). Pour la meilleure vitesse de navigation, choisissez quelque chose proche d\'ou vous voulez apparaitre. Assurez-vous que SSH cote distant autorise le TCP forwarding (`AllowTcpForwarding yes` dans sshd_config — generalement par defaut).',
        },
      },
      {
        name: { en: 'Start the SOCKS5 tunnel in SSHive', fr: 'Demarrer le tunnel SOCKS5 dans SSHive' },
        text: {
          en: 'Edit the profile of your remote server. Tunnels tab → "Add SOCKS5". Local port: 1080 (default). Save. Connect — the SOCKS5 tunnel is now listening on `localhost:1080`. Verify: `lsof -i :1080` should show ssh.',
          fr: 'Editez le profil de votre serveur distant. Onglet Tunnels → "Ajouter SOCKS5". Port local : 1080 (defaut). Sauvegardez. Connectez — le tunnel SOCKS5 ecoute maintenant sur `localhost:1080`. Verifiez : `lsof -i :1080` doit montrer ssh.',
        },
      },
      {
        name: { en: 'Configure your browser to use the proxy', fr: 'Configurer votre navigateur pour utiliser le proxy' },
        text: {
          en: 'Firefox: Preferences → Network Settings → Manual proxy → SOCKS Host `localhost`, Port `1080`, SOCKS v5, "Proxy DNS when using SOCKS v5" checked. Chrome doesn\'t have a UI; launch with `--proxy-server=socks5://localhost:1080`. Safari: System Settings → Network → your interface → Proxies → SOCKS Proxy. Visit `whatismyip.com` to confirm — your IP should be the remote server\'s.',
          fr: 'Firefox : Preferences → Network Settings → Manual proxy → SOCKS Host `localhost`, Port `1080`, SOCKS v5, "Proxy DNS when using SOCKS v5" coche. Chrome n\'a pas d\'UI ; lancez avec `--proxy-server=socks5://localhost:1080`. Safari : Reglages Systeme → Reseau → votre interface → Proxies → Proxy SOCKS. Visitez `whatismyip.com` pour confirmer — votre IP doit etre celle du serveur distant.',
        },
      },
      {
        name: { en: 'Limit it to specific apps', fr: 'Limiter a des apps specifiques' },
        text: {
          en: 'Don\'t want everything proxied? Use a per-app approach: in Firefox, only Firefox traffic goes through the proxy. For other apps, leave them on the direct connection. Or use a tool like Proxifier (paid) for fine-grained per-app routing on macOS.',
          fr: 'Ne voulez pas tout proxifier ? Approche par app : dans Firefox, seul le trafic Firefox passe par le proxy. Pour les autres apps, laissez-les en connexion directe. Ou utilisez un outil comme Proxifier (payant) pour du routing par app sur macOS.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is SOCKS5 over SSH safe enough on hotel Wi-Fi?', fr: 'SOCKS5 sur SSH est-il assez sur sur Wi-Fi d\'hotel ?' },
        answer: {
          en: 'For browser traffic, yes — the SSH tunnel encrypts everything between your Mac and your remote server. The hotel network sees only one encrypted SSH stream. The remote server\'s onward traffic still uses HTTPS (or not), so SSH alone doesn\'t guarantee end-to-end encryption to every web destination. Use HTTPS-only browser settings as well.',
          fr: 'Pour le trafic navigateur, oui — le tunnel SSH chiffre tout entre Mac et serveur distant. Le reseau d\'hotel ne voit qu\'un stream SSH chiffre. Le trafic sortant du serveur distant utilise encore HTTPS (ou pas), donc SSH seul ne garantit pas le chiffrement bout-en-bout vers chaque destination web. Utilisez aussi les reglages HTTPS-only du navigateur.',
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
      en: 'Send the same command to many SSH servers simultaneously from macOS — without Ansible. Use SSHive\'s broadcast mode for instant fleet operations.',
      fr: 'Envoyez la meme commande a plusieurs serveurs SSH simultanement depuis macOS — sans Ansible. Utilisez le mode broadcast de SSHive pour les ops flotte instantanees.',
    },
    h1: { en: 'Run a command on multiple SSH servers from Mac', fr: 'Lancer une commande sur plusieurs serveurs SSH depuis Mac' },
    hero: {
      en: 'Broadcast keystrokes to every active SSH session at once — fleet-wide ops in seconds, no Ansible playbook required.',
      fr: 'Broadcast des touches a chaque session SSH active d\'un coup — ops flotte en quelques secondes, aucun playbook Ansible.',
    },
    intro: {
      en: 'When you have a fleet of similar servers, sometimes you just need to run `apt update`, `df -h`, or `systemctl status` on all of them at once. Ansible is the right answer for repeatable orchestration, but for ad-hoc one-offs — "I just want to see where each server stands right now" — it\'s overkill. SSHive\'s broadcast mode types the same keystrokes into every active SSH session simultaneously, with each output visible in its own pane. No agent, no inventory, no YAML.',
      fr: 'Quand vous avez une flotte de serveurs similaires, parfois il faut juste lancer `apt update`, `df -h` ou `systemctl status` sur tous d\'un coup. Ansible est la bonne reponse pour l\'orchestration repetee, mais pour les ad-hoc one-offs — "je veux juste voir ou chaque serveur en est maintenant" — c\'est excessif. Le mode broadcast de SSHive tape les memes touches dans chaque session SSH active en meme temps, chaque sortie visible dans son panneau. Pas d\'agent, pas d\'inventaire, pas de YAML.',
    },
    estimatedMinutes: 2,
    steps: [
      {
        name: { en: 'Open the SSH sessions you want to broadcast to', fr: 'Ouvrir les sessions SSH a broadcaster' },
        text: {
          en: 'Connect to each server you care about — typically through saved profiles. Group them in a folder for organization. Each session gets its own tab in SSHive.',
          fr: 'Connectez-vous a chaque serveur concerne — typiquement via des profils sauvegardes. Groupez-les en dossier pour l\'organisation. Chaque session a son onglet dans SSHive.',
        },
      },
      {
        name: { en: 'Activate broadcast mode', fr: 'Activer le mode broadcast' },
        text: {
          en: 'Press Cmd+Shift+B (or Edit menu → Broadcast Mode). A red banner appears across the top: "BROADCAST ACTIVE — N sessions". Every keystroke now goes to every active SSH session simultaneously.',
          fr: 'Pressez Cmd+Shift+B (ou menu Edit → Broadcast Mode). Une banniere rouge apparait en haut : "BROADCAST ACTIVE — N sessions". Chaque touche va maintenant a chaque session SSH active en meme temps.',
        },
      },
      {
        name: { en: 'Type your command', fr: 'Taper votre commande' },
        text: {
          en: 'Type the command — it appears identically in every session. Press Enter; it runs on every server simultaneously. Outputs appear in each respective pane. Tab between panes to compare.',
          fr: 'Tapez la commande — elle apparait identiquement dans chaque session. Pressez Entree ; elle tourne sur chaque serveur en meme temps. Les sorties apparaissent dans chaque panneau respectif. Tabbez entre les panneaux pour comparer.',
        },
      },
      {
        name: { en: 'Disable broadcast and target individual sessions', fr: 'Desactiver le broadcast et cibler des sessions individuelles' },
        text: {
          en: 'After the broadcast command, hit Cmd+Shift+B again to exit broadcast mode. The red banner disappears. Now switching between tabs targets individual sessions — useful for investigating the one server that gave a different output.',
          fr: 'Apres la commande broadcast, repressez Cmd+Shift+B pour quitter le mode. La banniere rouge disparait. Maintenant le switch entre onglets cible des sessions individuelles — utile pour investiguer le serveur qui a donne une sortie differente.',
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
          en: 'Broadcast for one-off, ad-hoc commands you want to see immediately. Ansible for repeatable, idempotent, audited operations. Both have their place — broadcast is faster for "I want to see what version of OpenSSL is on each box right now"; Ansible is better for "deploy this config across the fleet every time we update it".',
          fr: 'Broadcast pour les commandes one-off, ad-hoc que vous voulez voir immediatement. Ansible pour les operations repetables, idempotentes, auditees. Chacun sa place — broadcast est plus rapide pour "je veux voir quelle version d\'OpenSSL sur chaque box maintenant" ; Ansible est meilleur pour "deploie cette config sur la flotte a chaque mise a jour".',
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
      en: 'Let Claude or Cursor execute commands and read files on your remote SSH servers via SSHive\'s built-in MCP server. Auto-configured, secure, local.',
      fr: 'Laissez Claude ou Cursor executer des commandes et lire des fichiers sur vos serveurs SSH distants via le serveur MCP integre de SSHive. Auto-configure, sur, local.',
    },
    h1: { en: 'Connect Claude Code or Cursor to SSH via MCP', fr: 'Connecter Claude Code ou Cursor au SSH via MCP' },
    hero: {
      en: 'Let your AI assistant execute commands, read files, and triage incidents directly on your servers — through SSHive\'s built-in MCP server.',
      fr: 'Laissez votre assistant IA executer des commandes, lire des fichiers et trier les incidents directement sur vos serveurs — via le serveur MCP integre de SSHive.',
    },
    intro: {
      en: 'MCP (Model Context Protocol) is the open standard Anthropic introduced for AI assistants to talk to local tools. SSHive ships with an MCP server built-in — meaning Claude Code, Cursor, or Claude Desktop can read your active SSH sessions, run commands, and browse SFTP filesystems. The server only listens on localhost, uses Bearer token auth stored in the macOS Keychain, and inherits the permissions of your existing SSH connections. Setup takes 30 seconds.',
      fr: 'MCP (Model Context Protocol) est le standard ouvert introduit par Anthropic pour que les assistants IA parlent aux outils locaux. SSHive embarque un serveur MCP integre — Claude Code, Cursor ou Claude Desktop peuvent lire vos sessions SSH actives, lancer des commandes et parcourir des filesystems SFTP. Le serveur n\'ecoute que sur localhost, utilise une auth Bearer token stockee dans le Trousseau macOS et herite des permissions de vos connexions SSH existantes. Setup en 30 secondes.',
    },
    estimatedMinutes: 3,
    steps: [
      {
        name: { en: 'Enable the MCP server in SSHive', fr: 'Activer le serveur MCP dans SSHive' },
        text: {
          en: 'Settings → MCP Integration → toggle "Enable MCP server". A localhost port (random) is allocated, and a Bearer token is generated and stored in the macOS Keychain. The settings panel shows the URL and tells you which AI clients are detected.',
          fr: 'Parametres → Integration MCP → toggle "Activer le serveur MCP". Un port localhost (random) est alloue, et un Bearer token est genere et stocke dans le Trousseau macOS. Le panneau parametres affiche l\'URL et vous dit quels clients IA sont detectes.',
        },
      },
      {
        name: { en: 'Auto-configure your AI client', fr: 'Auto-configurer votre client IA' },
        text: {
          en: 'In the same settings panel, click "Configure" next to Claude Code, Cursor, or Claude Desktop. SSHive writes the appropriate MCP server entry into each client\'s config file (e.g., `~/.config/Cursor/User/settings.json` for Cursor, `~/.config/claude-code/config.json` for Claude Code). Restart the client to pick up the change.',
          fr: 'Dans le meme panneau, cliquez "Configurer" a cote de Claude Code, Cursor ou Claude Desktop. SSHive ecrit l\'entree de serveur MCP appropriee dans la config de chaque client (ex. `~/.config/Cursor/User/settings.json` pour Cursor, `~/.config/claude-code/config.json` pour Claude Code). Redemarrez le client pour prendre en compte.',
        },
      },
      {
        name: { en: 'Open SSH sessions you want the AI to see', fr: 'Ouvrir les sessions SSH a faire voir a l\'IA' },
        text: {
          en: 'The MCP server only exposes sessions that are active in SSHive. So connect to your prod, staging, or whatever servers you want available, and the AI client can call `ssh_execute` against them through SSHive\'s MCP endpoint.',
          fr: 'Le serveur MCP n\'expose que les sessions actives dans SSHive. Donc connectez-vous aux serveurs prod, staging ou autres a rendre disponibles, et le client IA peut appeler `ssh_execute` sur eux via le endpoint MCP de SSHive.',
        },
      },
      {
        name: { en: 'Ask the AI to do something useful', fr: 'Demander a l\'IA de faire quelque chose d\'utile' },
        text: {
          en: 'In Claude Code or Cursor, ask: "run `df -h` on the prod SSH session and tell me if any volumes are above 80%". The AI calls `ssh_execute` against your active prod session, parses the output, summarizes. SSHive surfaces each tool call so you see what is happening in real time.',
          fr: 'Dans Claude Code ou Cursor, demandez : "lance `df -h` sur la session SSH de prod et dis-moi si des volumes depassent 80%". L\'IA appelle `ssh_execute` sur votre session prod active, parse la sortie, resume. SSHive remonte chaque appel d\'outil, vous voyez ce qui se passe en temps reel.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is the MCP integration safe?', fr: 'L\'integration MCP est-elle sure ?' },
        answer: {
          en: 'The AI can only do what you can do via the active SSH session — it has no extra privileges. SSHive shows a notification per tool call. You can disable specific tools (e.g., `sftp_write_file`) per session for read-only access. The MCP server listens only on localhost; the Bearer token is stored in the Keychain.',
          fr: 'L\'IA ne peut faire que ce que vous pouvez via la session SSH active — pas de privilege supplementaire. SSHive affiche une notification par appel d\'outil. Vous pouvez desactiver des outils specifiques (ex. `sftp_write_file`) par session pour acces read-only. Le serveur MCP ecoute seulement sur localhost ; le Bearer token est dans le Trousseau.',
        },
      },
      {
        question: { en: 'Does this require a Pro subscription?', fr: 'Est-ce que ca demande un abonnement Pro ?' },
        answer: {
          en: 'MCP integration is part of SSHive Pro ($9.99 one-time on the Mac App Store). Free tier focuses on individual SSH/SFTP without AI integration.',
          fr: 'L\'integration MCP fait partie de SSHive Pro (9,99 $ achat unique sur le Mac App Store). Le tier gratuit se concentre sur SSH/SFTP individuel sans integration IA.',
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
