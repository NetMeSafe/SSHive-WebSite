import type { Bilingual } from './features';

export type RoadmapStatus = 'in-progress' | 'planned' | 'considering';

export const STATUS_LABEL: Record<RoadmapStatus, Bilingual> = {
  'in-progress': { en: 'In progress', fr: 'En cours' },
  planned: { en: 'Planned', fr: 'Prevu' },
  considering: { en: 'Considering', fr: 'En reflexion' },
};

export interface RoadmapItem {
  id: string;
  status: RoadmapStatus;
  title: Bilingual;
  /** Two short paragraphs: the what, then the why and impact. */
  body: Bilingual;
  /** Which platforms this targets. */
  platforms: Array<'mac' | 'iphone' | 'ipad'>;
}

export const ROADMAP: RoadmapItem[] = [
  {
    id: 'free-after-update',
    status: 'in-progress',
    title: {
      en: 'Fix: Pro sometimes reverts to Free after an update',
      fr: 'Correction : Pro repasse parfois en Free apres une mise a jour',
    },
    body: {
      en: 'After updating SSHive, a small number of users see the app go back to the Free tier even though they bought Pro. The cause sits in the StoreKit receipt refresh path during the first launch after update. The workaround today is one tap: Settings, Subscription / Purchases, "Restore Purchases", and Pro comes right back. A permanent fix is being worked on so the restore is not needed anymore.\n\nIf this happens to you and the restore does not fix it, write to contact@netmesafe.com with your App Store country and the time you upgraded, and we will check the receipt on our side.',
      fr: 'Apres une mise a jour de SSHive, un petit nombre d\'utilisateurs voient l\'app retomber en Free alors qu\'ils ont achete Pro. La cause est dans le rafraichissement du recu StoreKit au premier lancement post-update. Le contournement aujourd\'hui est un tap : Reglages, Abonnement / Achats, "Restaurer les achats", et Pro revient immediatement. Un correctif permanent est en cours pour ne plus avoir besoin de la restauration.\n\nSi ca vous arrive et que la restauration ne suffit pas, ecrivez a contact@netmesafe.com avec votre pays App Store et l\'heure de la mise a jour, on verifie le recu de notre cote.',
    },
    platforms: ['mac', 'iphone', 'ipad'],
  },
  {
    id: 'icloud-sync',
    status: 'planned',
    title: {
      en: 'iCloud sync for connection profiles',
      fr: 'Synchronisation iCloud des profils de connexion',
    },
    body: {
      en: 'Today, profiles created on your Mac stay on your Mac, profiles on iPhone stay on iPhone, and you exchange them with the .sshive JSON export. The next step is opt-in iCloud sync via CloudKit so that adding a host on your Mac shows up on your iPhone within seconds, with the same tags, notes and jump-host chain.\n\nWe will not sync the secrets themselves. Passwords, SSH passphrases and private keys stay on each device, in the per-device Keychain. iCloud will only carry the host, port, username, tags, notes and tunnel definitions, so the security model does not change. You will be able to turn the sync off per device, and we will document exactly what fields move across.',
      fr: 'Aujourd\'hui, les profils crees sur Mac restent sur Mac, ceux de l\'iPhone restent sur l\'iPhone, et vous les echangez avec l\'export JSON .sshive. La prochaine etape, c\'est une sync iCloud opt-in via CloudKit, pour qu\'ajouter un hote sur le Mac apparaisse sur l\'iPhone en quelques secondes, avec les memes tags, notes et chaine de jump-host.\n\nOn ne synchronisera pas les secrets eux-memes. Mots de passe, passphrases SSH et cles privees restent sur chaque appareil, dans le Trousseau local. iCloud transportera uniquement l\'hote, le port, le username, les tags, les notes et les definitions de tunnels, le modele de securite ne change pas. Vous pourrez couper la sync par appareil, et on documentera precisement les champs qui transitent.',
    },
    platforms: ['mac', 'iphone', 'ipad'],
  },
  {
    id: 'yubikey-nfc',
    status: 'planned',
    title: {
      en: 'YubiKey / hardware key support over NFC',
      fr: 'Support YubiKey / cle hardware via NFC',
    },
    body: {
      en: 'For teams that already use a YubiKey 5 NFC for SSH, the missing piece on iPhone is reading the key through the iPhone Core NFC stack and using it as the SSH agent. The plan is to support FIDO2/PIV-backed SSH keys (`ssh-ed25519-sk`, `ecdsa-sk`) so an iPhone can authenticate to a server that requires a hardware key, with a Face ID confirmation on the SSHive side and an NFC tap on the YubiKey.\n\nThis closes a gap where iPhone is currently the weak link in 2FA SSH policies. iPad keeps Lightning / USB-C YubiKeys via the USB-C port; Mac already uses the YubiKey through SSHive\'s normal agent integration.',
      fr: 'Pour les equipes qui utilisent deja un YubiKey 5 NFC pour SSH, la piece manquante sur iPhone, c\'est de lire la cle via la stack Core NFC de l\'iPhone et de l\'utiliser comme SSH agent. Le plan : supporter les cles SSH FIDO2/PIV (`ssh-ed25519-sk`, `ecdsa-sk`) pour qu\'un iPhone puisse s\'authentifier sur un serveur qui exige une cle hardware, avec une confirmation Face ID cote SSHive et un tap NFC sur le YubiKey.\n\nCa ferme le trou ou l\'iPhone est aujourd\'hui le maillon faible des politiques SSH 2FA. iPad garde le support YubiKey Lightning / USB-C via le port USB-C ; Mac utilise deja le YubiKey via l\'integration agent normale de SSHive.',
    },
    platforms: ['iphone', 'ipad'],
  },
  {
    id: 'mosh',
    status: 'considering',
    title: {
      en: 'Mosh support for resilient mobile connections',
      fr: 'Support Mosh pour les connexions mobiles resilientes',
    },
    body: {
      en: 'Mosh is the resilient mobile shell that survives Wi-Fi switching, 5G handoffs and the phone going to sleep, instead of dropping the SSH session every time. On a desk that does not matter much, but on a train going through tunnels with a long-running `tail -f` open, it changes the experience.\n\nWe are looking at adding Mosh as an alternative transport on top of an SSH bootstrap (the standard `mosh-server` pattern). The blocker is that Mosh needs `mosh-server` installed on the remote side, which is not universal. We are also evaluating whether a SSHive-side resume scheme could give you 80 percent of what Mosh provides without requiring server changes. Tell us which you would prefer.',
      fr: 'Mosh est le shell mobile resilient qui survit aux switchs Wi-Fi, aux handoffs 5G et a la mise en veille du telephone, au lieu de couper la session SSH a chaque fois. Sur un bureau ca change peu, mais dans un train qui traverse des tunnels avec un `tail -f` ouvert, ca change l\'experience.\n\nOn regarde pour ajouter Mosh comme transport alternatif par-dessus un bootstrap SSH (le pattern standard `mosh-server`). Le frein, c\'est que Mosh exige `mosh-server` installe cote distant, ce qui n\'est pas universel. On evalue aussi si un mecanisme de reprise cote SSHive pourrait donner 80 % du benefice sans modifier le serveur. Dites-nous lequel vous prefereriez.',
    },
    platforms: ['mac', 'iphone', 'ipad'],
  },
  {
    id: 'stage-manager-ipad',
    status: 'planned',
    title: {
      en: 'Better Stage Manager and multi-window on iPad',
      fr: 'Meilleur Stage Manager et multi-fenetres sur iPad',
    },
    body: {
      en: 'iPad Pro with a Magic Keyboard is close to a real laptop, but the current SSHive iPad layout still treats the window as a single workspace. The plan is to support real multi-window: open the prod SSH session in one Stage Manager window, the staging RDP in another, an SFTP browser in a third, all alongside Notes or Safari. Drag-and-drop between SSHive windows for SFTP transfers, native Magic Keyboard shortcuts (Cmd+T for new tab, Cmd+W to close, Cmd+1..9 to switch).\n\nThe goal is that an iPad Pro with Magic Keyboard becomes a comfortable primary workstation for remote work, not just a backup device.',
      fr: 'L\'iPad Pro avec Magic Keyboard est proche d\'un vrai laptop, mais le layout iPad actuel de SSHive traite encore la fenetre comme un espace unique. Le plan : supporter le vrai multi-fenetres, ouvrir la session SSH prod dans une fenetre Stage Manager, le RDP staging dans une autre, un browser SFTP dans une troisieme, tout a cote de Notes ou Safari. Drag-and-drop entre fenetres SSHive pour les transferts SFTP, raccourcis clavier Magic Keyboard natifs (Cmd+T nouvelle tab, Cmd+W fermer, Cmd+1..9 switcher).\n\nL\'objectif : que l\'iPad Pro avec Magic Keyboard devienne une station de travail principale confortable pour le travail distant, pas juste un appareil de secours.',
    },
    platforms: ['ipad'],
  },
];
