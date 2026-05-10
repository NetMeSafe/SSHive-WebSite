import type { Bilingual, QA } from './features';
import type { Feature } from '../constants';

export interface UseCaseSection {
  heading: Bilingual;
  body: Bilingual;
}

export interface UseCaseSEO {
  slug: string;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  intro: Bilingual;
  sections: UseCaseSection[];
  faq: QA[];
  relatedFeatures: Feature[];
  relatedHowTos?: string[];
  relatedUseCases?: string[];
}

export const USE_CASES: UseCaseSEO[] = [
  {
    slug: 'ssh-from-iphone',
    metaTitle: {
      en: 'SSH from an iPhone or iPad — Native Apple Client',
      fr: 'SSH depuis iPhone ou iPad — Client Apple natif',
    },
    metaDescription: {
      en: 'Connect to your servers from an iPhone or iPad with SSHive — native iOS SSH terminal and SFTP file manager, profiles synced from your Mac, Touch ID or Face ID-secured Keychain.',
      fr: 'Connectez-vous a vos serveurs depuis iPhone ou iPad avec SSHive — terminal SSH iOS natif et gestionnaire SFTP, profils synchronises depuis le Mac, Trousseau securise par Touch ID ou Face ID.',
    },
    h1: {
      en: 'SSH and SFTP from your iPhone or iPad',
      fr: 'SSH et SFTP depuis votre iPhone ou iPad',
    },
    hero: {
      en: 'A native Apple SSH client that goes where you go — terminal and SFTP on iOS, full all-in-one suite on Mac.',
      fr: 'Un client SSH Apple natif qui vous suit partout — terminal et SFTP sur iOS, suite tout-en-un complete sur Mac.',
    },
    intro: {
      en: 'Sometimes the production alert hits at the worst moment — you are away from your laptop, the train is moving, and you need to SSH into a box right now to check a service. The default Apple stack does not give you that: there is no first-party SSH terminal on iOS, and command-line workflows assume you have a desktop in front of you. SSHive ships a native iPhone and iPad app on the App Store with a real SSH terminal and SFTP file manager. Your saved profiles, your keys, your jump hosts — they are right there in your pocket.\n\nThe iOS app is intentionally focused: SSH terminal and SFTP file manager, with the same connection profiles, jump host support, and key-based auth you set up on your Mac. The features that demand a larger workspace — embedded RDP, embedded VNC, multi-host broadcast, the MCP server for Claude/Cursor, the visual SSH tunnel UI — stay on macOS where they make sense ergonomically. The result is a coherent split: heavy ops on Mac, on-call ops on iPhone, the same source of truth in between.',
      fr: 'Parfois l\'alerte prod tombe au pire moment — vous etes loin du laptop, le train roule, et vous devez SSH-er sur une box maintenant pour verifier un service. La pile Apple par defaut ne donne pas ca : pas de terminal SSH first-party sur iOS, et les workflows ligne de commande supposent un bureau devant vous. SSHive embarque une app iPhone et iPad native sur l\'App Store avec un vrai terminal SSH et un gestionnaire SFTP. Vos profils sauvegardes, vos cles, vos jump hosts — ils sont dans votre poche.\n\nL\'app iOS est volontairement focalisee : terminal SSH et gestionnaire SFTP, avec les memes profils de connexion, le support jump host et l\'auth par cle que vous configurez sur Mac. Les fonctionnalites qui demandent un workspace plus grand — RDP integre, VNC integre, broadcast multi-hote, serveur MCP pour Claude/Cursor, UI visuelle des tunnels SSH — restent sur macOS la ou elles ont du sens ergonomiquement. Resultat : un split coherent — ops lourdes sur Mac, ops on-call sur iPhone, meme source de verite entre les deux.',
    },
    sections: [
      {
        heading: { en: 'On-call from your phone', fr: 'On-call depuis le telephone' },
        body: {
          en: 'PagerDuty alert at 2am? Open SSHive on your iPhone, tap the saved prod profile, you are in. The iOS terminal handles common keys via on-screen modifier strips (Ctrl, Esc, Tab, arrow keys) so `Ctrl+C`, `Ctrl+D`, navigating less, scrolling logs, all work without an external keyboard. With an iPad and a Magic Keyboard or Bluetooth keyboard, the experience approaches a laptop — well-suited to longer sessions.',
          fr: 'Alerte PagerDuty a 2h du matin ? Ouvrez SSHive sur iPhone, tap sur le profil prod sauvegarde, vous etes connecte. Le terminal iOS gere les touches courantes via des bandeaux de modificateurs a l\'ecran (Ctrl, Esc, Tab, fleches), donc `Ctrl+C`, `Ctrl+D`, naviguer dans less, scroller les logs, tout fonctionne sans clavier externe. Avec un iPad et un Magic Keyboard ou clavier Bluetooth, l\'experience se rapproche du laptop — bien adaptee aux sessions longues.',
        },
      },
      {
        heading: { en: 'SFTP file management on iPad', fr: 'Gestion de fichiers SFTP sur iPad' },
        body: {
          en: 'iPadOS Files-style integration: browse remote SFTP folders, view text files, upload from your iPad photo library or Files app. Useful for quick edits to a config or pulling a log onto the iPad to email it. The iOS SFTP shares the same profile system as the SSH terminal — one credential, both flows.',
          fr: 'Integration style Files iPadOS : parcourez les dossiers SFTP distants, visualisez les fichiers texte, uploadez depuis la bibliotheque photo iPad ou l\'app Fichiers. Utile pour des edits rapides sur une config ou recuperer un log sur l\'iPad pour l\'envoyer par mail. Le SFTP iOS partage le meme systeme de profil que le terminal SSH — un identifiant, les deux flux.',
        },
      },
      {
        heading: { en: 'Touch ID / Face ID and the Keychain', fr: 'Touch ID / Face ID et le Trousseau' },
        body: {
          en: 'iOS credentials are stored in the iOS Keychain, gated by Touch ID or Face ID. When you tap a profile to connect, biometrics unlock the saved password or key passphrase — never typed manually, never visible. If your iPhone gets stolen and the thief cannot pass biometrics, your servers stay safe. Same model on macOS where Touch ID gates the Mac Keychain.',
          fr: 'Les identifiants iOS sont stockes dans le Trousseau iOS, proteges par Touch ID ou Face ID. Quand vous tappez un profil pour vous connecter, la biometrie deverrouille le mot de passe ou la passphrase de cle sauvegardee — jamais tapee manuellement, jamais visible. Si votre iPhone est vole et que le voleur ne passe pas la biometrie, vos serveurs restent surs. Meme modele sur macOS ou Touch ID protege le Trousseau Mac.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Is the iOS app free?', fr: 'L\'app iOS est-elle gratuite ?' },
        answer: {
          en: 'SSHive ships on the App Store with a free tier and a Pro upgrade — see the pricing page for the current details. The free tier covers SSH and SFTP for individual use; Pro extends limits and unlocks features that make sense per platform.',
          fr: 'SSHive est sur l\'App Store avec un tier gratuit et une mise a niveau Pro — voir la page Tarifs pour les details a jour. Le tier gratuit couvre SSH et SFTP pour usage individuel ; Pro etend les limites et debloque des fonctionnalites selon la plateforme.',
        },
      },
      {
        question: { en: 'Can I import my Mac SSHive profiles into the iPhone app?', fr: 'Puis-je importer mes profils SSHive Mac dans l\'app iPhone ?' },
        answer: {
          en: 'Yes — profiles can be exported from Mac and imported on iPhone/iPad via the encrypted `.webssh` format with passphrase. Cross-device profile management is part of the design: configure once on Mac, use anywhere.',
          fr: 'Oui — les profils peuvent etre exportes depuis le Mac et importes sur iPhone/iPad via le format `.webssh` chiffre avec passphrase. La gestion cross-device des profils fait partie du design : configurez une fois sur Mac, utilisez partout.',
        },
      },
      {
        question: { en: 'Does the iPhone app support SSH tunnels and RDP?', fr: 'L\'app iPhone supporte-t-elle les tunnels SSH et RDP ?' },
        answer: {
          en: 'Not on iOS — those features (SSH tunnels, embedded RDP, embedded VNC, multi-host broadcast, MCP server) live on macOS where the screen real estate and OS APIs make them ergonomic. iOS focuses on SSH terminal and SFTP for fast on-call access.',
          fr: 'Pas sur iOS — ces fonctionnalites (tunnels SSH, RDP integre, VNC integre, broadcast multi-hote, serveur MCP) vivent sur macOS la ou la place ecran et les APIs OS les rendent ergonomiques. iOS se concentre sur terminal SSH et SFTP pour l\'acces on-call rapide.',
        },
      },
      {
        question: { en: 'Does it work with an external keyboard on iPad?', fr: 'Ca fonctionne avec un clavier externe sur iPad ?' },
        answer: {
          en: 'Yes — Magic Keyboard, Smart Keyboard Folio, and Bluetooth keyboards are all handled. Common shortcuts (Cmd+C/V, Cmd+T for new tab, arrow keys, function keys) translate properly. The on-screen modifier strip is hidden when an external keyboard is connected.',
          fr: 'Oui — Magic Keyboard, Smart Keyboard Folio et claviers Bluetooth sont tous geres. Les raccourcis courants (Cmd+C/V, Cmd+T pour nouvel onglet, fleches, touches de fonction) se traduisent correctement. Le bandeau de modificateurs a l\'ecran est masque quand un clavier externe est connecte.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp'],
    relatedHowTos: ['ssh-key-mac', 'sftp-gui-mac', 'import-ssh-config-mac'],
    relatedUseCases: ['developer-mac', 'aws-ec2', 'home-server'],
  },
  {
    slug: 'raspberry-pi',
    metaTitle: {
      en: 'SSH into Raspberry Pi from a Mac — Free Native Client',
      fr: 'SSH vers Raspberry Pi depuis Mac — Client natif gratuit',
    },
    metaDescription: {
      en: 'Manage your Raspberry Pi from macOS with SSHive: SSH terminal, SFTP file transfers, VNC desktop, and SSH tunnels. Free, native macOS client. No PuTTY needed.',
      fr: 'Gerez votre Raspberry Pi depuis macOS avec SSHive : terminal SSH, transferts SFTP, bureau VNC, tunnels SSH. Client macOS natif gratuit. Pas besoin de PuTTY.',
    },
    h1: {
      en: 'Connect to a Raspberry Pi from your Mac',
      fr: 'Vous connecter a un Raspberry Pi depuis votre Mac',
    },
    hero: {
      en: 'Everything you need to manage a Pi from macOS — SSH, SFTP, VNC, and tunnels — in one native app.',
      fr: 'Tout ce qu\'il faut pour gerer un Pi depuis macOS — SSH, SFTP, VNC et tunnels — dans une seule app native.',
    },
    intro: {
      en: 'A Raspberry Pi is the gateway drug to home labs, IoT projects, and self-hosted services. Whether yours runs Pi-hole, Home Assistant, a Plex server, or a custom Python project, the workflow is the same: SSH in for command-line work, copy files back and forth, occasionally fire up a desktop view, and tunnel a service to reach it from your laptop. SSHive bundles all four into one window, so managing a Pi from your Mac stops feeling like assembling a workflow from five different apps.\n\nThe free tier of SSHive — SSH terminal + SFTP file manager — already covers 80% of what you do with a Pi: run `apt update`, edit configs, copy a script over, tail a log. Pro adds VNC (for the headless Pi GUI), tunnels (to reach Home Assistant\'s 8123 from your Mac browser without exposing it), broadcast (handy if you have multiple Pis), and the MCP integration so Claude can debug your Pi setup.',
      fr: 'Un Raspberry Pi est la drogue d\'entree vers le home lab, les projets IoT et les services self-hosted. Que le votre fasse tourner Pi-hole, Home Assistant, un serveur Plex ou un projet Python custom, le workflow est le meme : SSH pour la ligne de commande, transferer des fichiers, lancer occasionnellement une vue bureau, tunneler un service pour l\'atteindre depuis le laptop. SSHive embarque les quatre dans une seule fenetre, donc gerer un Pi depuis Mac arrete d\'etre l\'assemblage d\'un workflow depuis cinq apps differentes.\n\nLe tier gratuit de SSHive — terminal SSH + gestionnaire SFTP — couvre deja 80% de ce qu\'on fait avec un Pi : lancer `apt update`, editer des configs, copier un script, tail un log. Le Pro ajoute VNC (pour l\'interface graphique du Pi headless), les tunnels (pour atteindre le 8123 de Home Assistant depuis le navigateur Mac sans l\'exposer), broadcast (utile si plusieurs Pis), et l\'integration MCP pour que Claude debug votre setup Pi.',
    },
    sections: [
      {
        heading: { en: 'First connection: enable SSH on the Pi', fr: 'Premiere connexion : activer SSH sur le Pi' },
        body: {
          en: 'On Raspberry Pi OS, SSH is disabled by default. Either flash an SD card with Raspberry Pi Imager and use the gear icon to pre-set SSH + Wi-Fi + hostname, or after first boot run `sudo raspi-config` → Interface Options → SSH → Enable. The default username is `pi` (older releases) or whatever you set in the imager. Once SSH is up, find the Pi\'s IP with `arp -a | grep "raspberrypi"` from your Mac, or check your router. In SSHive, click "New connection", enter `raspberrypi.local` (or the IP), user `pi`, password method first time. SSHive offers to import the connection into a profile — say yes, give it a name like "Pi 4 - Living Room", and from now on it\'s a one-click connection.',
          fr: 'Sur Raspberry Pi OS, SSH est desactive par defaut. Soit vous flashez une carte SD avec Raspberry Pi Imager et utilisez l\'icone d\'engrenage pour pre-regler SSH + Wi-Fi + hostname, soit apres le premier boot vous lancez `sudo raspi-config` → Interface Options → SSH → Enable. L\'username par defaut est `pi` (anciennes versions) ou ce que vous avez mis dans l\'imager. Une fois SSH actif, trouvez l\'IP du Pi avec `arp -a | grep "raspberrypi"` depuis votre Mac, ou regardez sur le routeur. Dans SSHive, cliquez "Nouvelle connexion", entrez `raspberrypi.local` (ou l\'IP), user `pi`, methode mot de passe la premiere fois. SSHive propose d\'importer la connexion en profil — dites oui, donnez-lui un nom genre "Pi 4 - Salon", et desormais c\'est une connexion en un clic.',
        },
      },
      {
        heading: { en: 'Switch to SSH key auth', fr: 'Passer a l\'auth par cle SSH' },
        body: {
          en: 'Password auth is fine for first contact, but you should switch to keys. From SSHive\'s terminal: `ssh-copy-id pi@raspberrypi.local` if you have a key already; otherwise generate one with `ssh-keygen -t ed25519`. Edit the SSHive profile, switch auth from "Password" to "Private Key", point to `~/.ssh/id_ed25519`. Disable password auth on the Pi (`sudo sed -i "s/#PasswordAuthentication yes/PasswordAuthentication no/" /etc/ssh/sshd_config && sudo systemctl restart ssh`) and you\'re hardened against brute-force.',
          fr: 'L\'auth mot de passe convient au premier contact, mais passez aux cles. Depuis le terminal SSHive : `ssh-copy-id pi@raspberrypi.local` si vous avez deja une cle ; sinon generez-en une avec `ssh-keygen -t ed25519`. Editez le profil SSHive, passez l\'auth de "Mot de passe" a "Cle privee", pointez vers `~/.ssh/id_ed25519`. Desactivez l\'auth mot de passe sur le Pi (`sudo sed -i "s/#PasswordAuthentication yes/PasswordAuthentication no/" /etc/ssh/sshd_config && sudo systemctl restart ssh`) et vous etes durci contre le brute-force.',
        },
      },
      {
        heading: { en: 'Reach Pi-hosted web UIs through tunnels', fr: 'Atteindre les UIs web hebergees sur le Pi via tunnels' },
        body: {
          en: 'Many Pi services expose a web UI on a non-standard port: Home Assistant on 8123, Pi-hole admin on 80, Portainer on 9000. Instead of opening these on your home network (let alone Internet), use SSHive\'s tunnel feature. Edit your Pi profile, add a Local forward — Local port 8123, Remote host `localhost`, Remote port 8123. Reconnect. Open `http://localhost:8123` on your Mac — you reach Home Assistant through the SSH tunnel, encrypted, with no port forwarding on your router.',
          fr: 'Beaucoup de services Pi exposent une UI web sur un port non standard : Home Assistant sur 8123, Pi-hole admin sur 80, Portainer sur 9000. Au lieu d\'ouvrir ces ports sur votre reseau (ou pire, Internet), utilisez la fonctionnalite tunnel de SSHive. Editez le profil Pi, ajoutez un forward Local — port local 8123, hote distant `localhost`, port distant 8123. Reconnectez. Ouvrez `http://localhost:8123` sur Mac — vous atteignez Home Assistant via le tunnel SSH, chiffre, sans port forwarding sur le routeur.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'My Pi is not reachable as raspberrypi.local from my Mac', fr: 'Mon Pi n\'est pas joignable en raspberrypi.local depuis Mac' },
        answer: {
          en: 'macOS uses Bonjour for `.local` resolution, which the Pi advertises via avahi-daemon. If it\'s not working, check `systemctl status avahi-daemon` on the Pi (should be active). On your Mac, run `dns-sd -B _ssh._tcp` and look for an entry. As a fallback, find the IP via your router\'s DHCP table or `ifconfig` on the Pi.',
          fr: 'macOS utilise Bonjour pour la resolution `.local`, que le Pi diffuse via avahi-daemon. Si ca ne marche pas, verifiez `systemctl status avahi-daemon` sur le Pi (doit etre actif). Sur Mac, lancez `dns-sd -B _ssh._tcp` et cherchez une entree. En secours, trouvez l\'IP via la table DHCP du routeur ou `ifconfig` sur le Pi.',
        },
      },
      {
        question: { en: 'Can I run a desktop session via VNC on a headless Pi?', fr: 'Puis-je faire une session bureau VNC sur un Pi headless ?' },
        answer: {
          en: 'Yes. Install RealVNC or x11vnc on the Pi, enable it via `raspi-config` → Interface Options → VNC. Note the port (5900 by default) and password. In SSHive create a VNC profile pointing at the Pi\'s IP. For security, tunnel it: forward 5900 over SSH and connect VNC to `localhost:5900`.',
          fr: 'Oui. Installez RealVNC ou x11vnc sur le Pi, activez via `raspi-config` → Interface Options → VNC. Notez le port (5900 par defaut) et le mot de passe. Dans SSHive creez un profil VNC pointant sur l\'IP du Pi. Pour la securite, tunnelisez : forward 5900 via SSH et connectez VNC a `localhost:5900`.',
        },
      },
      {
        question: { en: 'Does SSHive work with Raspberry Pi 5?', fr: 'SSHive marche-t-il avec le Raspberry Pi 5 ?' },
        answer: {
          en: 'Yes — SSHive talks SSH/SFTP/VNC, all of which are protocol-level. Pi version doesn\'t matter. Pi 5 with bookworm OS works identically to Pi 4 / Pi Zero 2 W from SSHive\'s perspective.',
          fr: 'Oui — SSHive parle SSH/SFTP/VNC, tout au niveau protocole. La version du Pi n\'a aucune importance. Pi 5 sous bookworm marche identiquement a Pi 4 / Pi Zero 2 W du point de vue SSHive.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'vnc', 'tunnels'],
    relatedHowTos: ['ssh-key-mac', 'sftp-gui-mac', 'vnc-from-mac'],
    relatedUseCases: ['home-server', 'docker'],
  },
  {
    slug: 'aws-ec2',
    metaTitle: {
      en: 'SSH into AWS EC2 from a Mac — Manage Instances Securely',
      fr: 'SSH vers AWS EC2 depuis Mac — Gerer les instances en securite',
    },
    metaDescription: {
      en: 'Connect to EC2 instances from macOS with SSHive: PEM keys, jump hosts (bastions), private subnets via tunnels, and SFTP. Better than Termius for AWS workflows.',
      fr: 'Connectez-vous aux instances EC2 depuis macOS avec SSHive : cles PEM, jump hosts (bastions), sous-reseaux prives via tunnels, et SFTP. Mieux que Termius pour les workflows AWS.',
    },
    h1: {
      en: 'Manage AWS EC2 instances from your Mac',
      fr: 'Gerer vos instances AWS EC2 depuis votre Mac',
    },
    hero: {
      en: 'Connect to public and private EC2 instances with PEM keys, jump hosts, and tunnels — all from one native macOS app.',
      fr: 'Connectez-vous a des instances EC2 publiques et privees avec cles PEM, jump hosts et tunnels — depuis une seule app macOS native.',
    },
    intro: {
      en: 'AWS gives you EC2 instances in two flavors: public-facing in the default VPC subnets (open to SSH from your laptop) and private in custom VPCs (reachable only via a bastion or VPN). Either way, the daily ergonomics depend on your SSH client. SSHive handles both natively: PEM file authentication out of the box, ProxyJump for bastion-mediated access, and tunnels for reaching RDS/ElastiCache/internal load balancers from your Mac. No more `ssh -i ~/keys/mykey.pem -J ec2-user@bastion ec2-user@10.0.1.42` muscle memory — every connection is a profile.',
      fr: 'AWS donne des instances EC2 dans deux saveurs : public-facing dans les sous-reseaux VPC par defaut (ouvert au SSH depuis votre laptop) et privees dans des VPC custom (atteignables seulement via bastion ou VPN). Dans les deux cas, l\'ergonomie au quotidien depend de votre client SSH. SSHive gere les deux nativement : authentification par fichier PEM out of the box, ProxyJump pour acces via bastion, et tunnels pour atteindre RDS/ElastiCache/load balancers internes depuis le Mac. Plus de memoire musculaire `ssh -i ~/keys/mykey.pem -J ec2-user@bastion ec2-user@10.0.1.42` — chaque connexion est un profil.',
    },
    sections: [
      {
        heading: { en: 'Connect to a public EC2 instance with a PEM key', fr: 'Se connecter a une EC2 publique avec une cle PEM' },
        body: {
          en: 'When you create an EC2 instance, AWS gives you a `.pem` file. Download it, set permissions: `chmod 400 ~/Downloads/mykey.pem`. In SSHive, New Connection → enter the public DNS or IP, user (`ec2-user` for Amazon Linux, `ubuntu` for Ubuntu AMI, `admin` for Debian), auth method "Private Key", browse to your PEM. Save as profile. SSHive caches the key path — moving the PEM file later requires re-pointing the profile.',
          fr: 'Quand vous creez une instance EC2, AWS donne un fichier `.pem`. Telechargez-le, reglez les permissions : `chmod 400 ~/Downloads/mykey.pem`. Dans SSHive, Nouvelle Connexion → DNS public ou IP, user (`ec2-user` pour Amazon Linux, `ubuntu` pour Ubuntu AMI, `admin` pour Debian), methode auth "Cle privee", browsez vers le PEM. Sauvez en profil. SSHive cache le chemin de cle — deplacer le PEM plus tard demande de re-pointer le profil.',
        },
      },
      {
        heading: { en: 'Reach private subnets via a bastion host', fr: 'Atteindre des sous-reseaux prives via un bastion' },
        body: {
          en: 'Best practice on AWS is to put application servers in private subnets and access them via a bastion in the public subnet. In SSHive, create a profile for the bastion first (public IP, ec2-user, your PEM). Then create a profile for the private instance: enter the private IP, user, key — and in the "Jump Host" section, select your bastion profile. SSHive handles the multi-hop SSH connection transparently, agent forwarding optional. No more SSH config-file editing every time AWS rotates an IP.',
          fr: 'Bonne pratique sur AWS : mettre les serveurs applicatifs en sous-reseau prive et y acceder via un bastion en sous-reseau public. Dans SSHive, creez d\'abord un profil pour le bastion (IP publique, ec2-user, votre PEM). Puis un profil pour l\'instance privee : IP privee, user, cle — et dans la section "Jump Host", selectionnez votre profil bastion. SSHive gere la connexion SSH multi-saut de facon transparente, agent forwarding optionnel. Plus d\'edition de fichier SSH config a chaque rotation d\'IP par AWS.',
        },
      },
      {
        heading: { en: 'Connect TablePlus / DBeaver to private RDS via tunnel', fr: 'Connecter TablePlus / DBeaver a un RDS prive via tunnel' },
        body: {
          en: 'RDS instances live in private subnets — TablePlus on your Mac cannot reach them directly. The trick: SSH-tunnel through your bastion. In SSHive\'s bastion profile, add a Local forward: local port 5432 → remote host `mydb.xxx.us-east-1.rds.amazonaws.com` → remote port 5432. Connect. Open TablePlus, point it at `localhost:5432` with your DB credentials. SSHive\'s SSH connection now proxies your DB queries securely.',
          fr: 'Les instances RDS vivent en sous-reseau prive — TablePlus sur Mac ne peut pas les atteindre directement. L\'astuce : tunnel SSH a travers votre bastion. Dans le profil bastion de SSHive, ajoutez un forward Local : port local 5432 → hote distant `mydb.xxx.us-east-1.rds.amazonaws.com` → port distant 5432. Connectez. Ouvrez TablePlus, pointez sur `localhost:5432` avec vos identifiants DB. La connexion SSH SSHive proxie vos requetes DB en securite.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does SSHive support AWS Session Manager?', fr: 'SSHive supporte-t-il AWS Session Manager ?' },
        answer: {
          en: 'Not directly — Session Manager uses AWS\'s SSM agent and the AWS CLI, not raw SSH. However, you can use the AWS CLI to start an SSH-over-SSM port forward (`aws ssm start-session --target i-xxx --document-name AWS-StartSSHSession`) and then connect SSHive to the resulting localhost port like any other SSH endpoint.',
          fr: 'Pas directement — Session Manager utilise l\'agent SSM d\'AWS et la CLI AWS, pas du SSH brut. Cependant vous pouvez utiliser la CLI AWS pour ouvrir un port forward SSH-over-SSM (`aws ssm start-session --target i-xxx --document-name AWS-StartSSHSession`) puis connecter SSHive au port localhost resultant comme a n\'importe quel endpoint SSH.',
        },
      },
      {
        question: { en: 'How does SSHive handle AWS instance IP changes?', fr: 'Comment SSHive gere les changements d\'IP d\'instances AWS ?' },
        answer: {
          en: 'For elastic IPs (paid, persistent), nothing changes. For ephemeral public IPs, edit the profile when AWS rotates them — or use the public DNS name (`ec2-x-x-x-x.compute.amazonaws.com`) which AWS keeps stable as long as the instance lives. Best practice: assign Elastic IPs to anything you SSH into often.',
          fr: 'Pour les IPs elastic (payantes, persistantes), rien ne change. Pour les IPs publiques ephemeres, editez le profil quand AWS les tourne — ou utilisez le nom DNS public (`ec2-x-x-x-x.compute.amazonaws.com`) qu\'AWS garde stable tant que l\'instance vit. Bonne pratique : assignez des IPs Elastic a tout ce que vous SSH-ez souvent.',
        },
      },
      {
        question: { en: 'Can I copy files to S3 from SSHive?', fr: 'Puis-je copier des fichiers vers S3 depuis SSHive ?' },
        answer: {
          en: 'SSHive does SSH/SFTP, not S3. For S3 transfers, run `aws s3 cp` from SSHive\'s terminal — it works perfectly because the AWS CLI is just another command-line tool. SSHive\'s SFTP pane is for the EC2 instance\'s filesystem.',
          fr: 'SSHive fait SSH/SFTP, pas S3. Pour les transferts S3, lancez `aws s3 cp` depuis le terminal SSHive — ca marche parfaitement car la CLI AWS est un outil ligne de commande comme un autre. Le panneau SFTP de SSHive est pour le filesystem de l\'instance EC2.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'tunnels', 'sftp'],
    relatedHowTos: ['ssh-key-mac', 'jump-host-mac', 'ssh-tunnel-mac'],
    relatedUseCases: ['jump-host', 'docker'],
  },
  {
    slug: 'home-server',
    metaTitle: {
      en: 'Home Server Management on Mac — SSH, SFTP, VNC, Tunnels',
      fr: 'Gestion de serveur perso sur Mac — SSH, SFTP, VNC, tunnels',
    },
    metaDescription: {
      en: 'Manage your home lab from a Mac: SSH, SFTP file transfer, VNC, and SSH tunnels for self-hosted services like Plex, Jellyfin, Home Assistant, Nextcloud.',
      fr: 'Gerez votre home lab depuis Mac : SSH, transfert SFTP, VNC, tunnels SSH pour services self-hosted (Plex, Jellyfin, Home Assistant, Nextcloud).',
    },
    h1: {
      en: 'Manage your home server from your Mac',
      fr: 'Gerer votre serveur perso depuis votre Mac',
    },
    hero: {
      en: 'One app for everything in your home lab — SSH, SFTP, VNC, and secure tunnels for Plex, Home Assistant, Nextcloud, and more.',
      fr: 'Une app pour tout dans votre home lab — SSH, SFTP, VNC et tunnels surs pour Plex, Home Assistant, Nextcloud et plus.',
    },
    intro: {
      en: 'A home server today is rarely just one box. There\'s the Plex/Jellyfin host (often a NAS or a refurbished mini-PC), maybe a Raspberry Pi running Home Assistant, possibly an Intel NUC running Proxmox with a stack of LXC containers, and an Unraid box for storage. Each has its own SSH endpoint, its own admin web UI on a different port, and occasionally needs a desktop session for tinkering. SSHive handles them all from one window: SSH and SFTP for terminal/file work, VNC for the rare desktop session, tunnels for secure access to web UIs without exposing them on your home network.\n\nThe profile system encourages tidy organization — group your home lab boxes in a "Home Lab" folder, set a different color tag per host so production and home-tinkering are visually distinct, save snippets like "system update" or "check container status" once and reuse on every box.',
      fr: 'Un serveur perso aujourd\'hui c\'est rarement une seule box. Il y a l\'hote Plex/Jellyfin (souvent un NAS ou un mini-PC reconditionne), peut-etre un Raspberry Pi Home Assistant, possiblement un Intel NUC sous Proxmox avec un stack de containers LXC, et une box Unraid pour le stockage. Chacun a son endpoint SSH, sa propre UI web admin sur un port different, et a occasionnellement besoin d\'une session bureau pour bricoler. SSHive les gere tous depuis une fenetre : SSH et SFTP pour le terminal/fichiers, VNC pour la rare session bureau, tunnels pour acces sur aux UIs web sans les exposer sur le reseau perso.\n\nLe systeme de profils encourage une organisation propre — groupez vos boxes home lab dans un dossier "Home Lab", mettez une couleur differente par hote pour distinguer visuellement prod et bricolage, sauvegardez des snippets type "mise a jour systeme" ou "etat des containers" une fois et reutilisez sur chaque box.',
    },
    sections: [
      {
        heading: { en: 'Tunnel admin UIs without port forwarding', fr: 'Tunneliser les UIs admin sans port forwarding' },
        body: {
          en: 'Plex on 32400, Jellyfin on 8096, Home Assistant on 8123, Nextcloud on 80/443, Sonarr on 8989 — every self-hosted service has its own port. Don\'t expose them on your router\'s NAT (script kiddies scan home IPs daily). Instead, in each SSHive profile, add Local forwards mapping the service port to localhost on your Mac. Connect to your home server, and `http://localhost:8123` reaches Home Assistant, `http://localhost:32400/web` reaches Plex — encrypted via SSH, no Internet exposure.',
          fr: 'Plex sur 32400, Jellyfin sur 8096, Home Assistant sur 8123, Nextcloud sur 80/443, Sonarr sur 8989 — chaque service self-hosted a son port. Ne les exposez pas sur le NAT du routeur (les script kiddies scannent les IPs perso quotidiennement). A la place, dans chaque profil SSHive, ajoutez des forwards Local mappant le port service vers localhost. Connectez-vous au serveur perso, et `http://localhost:8123` atteint Home Assistant, `http://localhost:32400/web` atteint Plex — chiffre via SSH, aucune exposition Internet.',
        },
      },
      {
        heading: { en: 'Backup with SFTP from one window', fr: 'Backup en SFTP depuis une seule fenetre' },
        body: {
          en: 'Drag-and-drop a folder from `~/Documents` to your home server\'s `/backup/macbook/` directory. SSHive\'s SFTP pane shows transfer speed, ETA, total size. For automation, run `rsync` from the adjacent SSHive terminal — but for ad-hoc "I need this on the home server" moments, SFTP drag-drop wins on simplicity.',
          fr: 'Drag-and-drop d\'un dossier depuis `~/Documents` vers `/backup/macbook/` du serveur perso. Le panneau SFTP de SSHive affiche vitesse, ETA, taille totale. Pour l\'automation, lancez `rsync` depuis le terminal SSHive adjacent — mais pour les moments ad-hoc "j\'ai besoin de ca sur le serveur", le drag-drop SFTP gagne en simplicite.',
        },
      },
      {
        heading: { en: 'Multi-server management with broadcast', fr: 'Gestion multi-serveur avec broadcast' },
        body: {
          en: 'Three home boxes? Use broadcast for fleet-wide updates: open SSH to all three, hit Cmd+Shift+B, type `sudo apt update && sudo apt upgrade -y`. Three updates in parallel, three live outputs side-by-side. Reboot in sequence with another broadcast (or skip it on the box running your VPN).',
          fr: 'Trois boxes perso ? Utilisez le broadcast pour les updates globales : ouvrez SSH sur les trois, Cmd+Shift+B, tapez `sudo apt update && sudo apt upgrade -y`. Trois updates en parallele, trois sorties live cote a cote. Reboot en sequence avec un autre broadcast (ou sautez la box qui fait tourner le VPN).',
        },
      },
    ],
    faq: [
      {
        question: { en: 'How do I find my home server\'s IP from my Mac?', fr: 'Comment trouver l\'IP de mon serveur perso depuis Mac ?' },
        answer: {
          en: 'On a local network, use your hostname (e.g., `unraid.local`, `pi.local`) — most Linux distros run avahi/Bonjour. If the hostname is unreliable, check your router\'s DHCP leases (most home routers expose this in their admin UI at 192.168.1.1).',
          fr: 'Sur reseau local, utilisez le hostname (ex. `unraid.local`, `pi.local`) — la plupart des distros Linux tournent avahi/Bonjour. Si le hostname est peu fiable, verifiez les leases DHCP du routeur (la plupart des routeurs perso l\'exposent dans leur UI admin sur 192.168.1.1).',
        },
      },
      {
        question: { en: 'Can I access my home server when I\'m traveling?', fr: 'Puis-je acceder a mon serveur perso en deplacement ?' },
        answer: {
          en: 'Two options: (1) Set up Tailscale or WireGuard on your home server and your Mac — then your home server is reachable as if you were home. (2) Forward port 22 from your router to the home server (use a non-standard external port like 2222), use SSH key auth only, fail2ban on the server. Then SSHive connects to `your-home-ip:2222`. Tailscale is the safer option.',
          fr: 'Deux options : (1) Tailscale ou WireGuard sur le serveur perso et le Mac — puis le serveur est joignable comme si vous etiez chez vous. (2) Forwardez le port 22 du routeur vers le serveur perso (utilisez un port externe non standard genre 2222), auth par cle SSH uniquement, fail2ban sur le serveur. Puis SSHive se connecte a `votre-ip-perso:2222`. Tailscale est l\'option la plus sure.',
        },
      },
      {
        question: { en: 'Does SSHive replace Mosh for unstable connections?', fr: 'SSHive remplace-t-il Mosh pour les connexions instables ?' },
        answer: {
          en: 'No — SSHive runs over plain SSH/TCP, not Mosh\'s UDP-based protocol. For very unstable links (mobile tethering, satellite), Mosh has roaming and predictive echo that SSHive doesn\'t. SSHive\'s auto-reconnect helps with intermittent drops but isn\'t a Mosh replacement.',
          fr: 'Non — SSHive tourne sur SSH/TCP standard, pas le protocole UDP de Mosh. Pour des liens tres instables (tethering mobile, satellite), Mosh a du roaming et de l\'echo predictif que SSHive n\'a pas. L\'auto-reconnect de SSHive aide pour les chutes intermittentes mais n\'est pas un remplacement Mosh.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'vnc', 'tunnels', 'broadcast'],
    relatedHowTos: ['ssh-tunnel-mac', 'ssh-key-mac', 'sftp-gui-mac'],
    relatedUseCases: ['raspberry-pi', 'nas-synology', 'proxmox', 'docker'],
  },
  {
    slug: 'proxmox',
    metaTitle: {
      en: 'Manage Proxmox from a Mac — SSH, VNC Console, SFTP',
      fr: 'Gerer Proxmox depuis Mac — SSH, console VNC, SFTP',
    },
    metaDescription: {
      en: 'Connect to Proxmox VE hosts and VMs from macOS: SSH to PVE nodes, noVNC console for guest VMs, SFTP for ISO uploads, broadcast for cluster ops.',
      fr: 'Connectez-vous aux hotes Proxmox VE et aux VMs depuis macOS : SSH aux noeuds PVE, console noVNC pour les VMs, SFTP pour ISOs, broadcast pour les ops cluster.',
    },
    h1: { en: 'Proxmox VE management from your Mac', fr: 'Gestion Proxmox VE depuis votre Mac' },
    hero: {
      en: 'SSH to PVE nodes, noVNC console to guest VMs, SFTP for ISO uploads — Proxmox workflows in one native macOS window.',
      fr: 'SSH vers les noeuds PVE, console noVNC vers les VMs invitees, SFTP pour les ISOs — workflows Proxmox dans une fenetre macOS native.',
    },
    intro: {
      en: 'Proxmox VE is a Debian-based hypervisor that combines KVM virtualization with LXC containers and a clean web UI. Day-to-day, you\'ll SSH into the PVE nodes (the host OS) for system maintenance, use the noVNC console embedded in the web UI for guest VMs that don\'t have SSH yet (think Windows installs or rescue boots), upload ISOs via SFTP to `/var/lib/vz/template/iso/`, and run cluster-wide commands across nodes. SSHive handles every piece: SSH/SFTP/VNC out of the box, broadcast for cluster operations, and tunnels to reach the PVE web UI on port 8006 securely.',
      fr: 'Proxmox VE est un hyperviseur Debian-based qui combine virtualisation KVM, containers LXC et une UI web propre. Au quotidien, vous SSH-ez sur les noeuds PVE (l\'OS hote) pour la maintenance, utilisez la console noVNC integree dans l\'UI web pour les VMs invitees qui n\'ont pas encore SSH (installs Windows, boots rescue), uploadez des ISOs en SFTP vers `/var/lib/vz/template/iso/`, et lancez des commandes cluster-wide sur les noeuds. SSHive gere chaque piece : SSH/SFTP/VNC out of the box, broadcast pour les ops cluster, et tunnels pour atteindre l\'UI web PVE sur 8006 en securite.',
    },
    sections: [
      {
        heading: { en: 'SSH to PVE nodes', fr: 'SSH vers les noeuds PVE' },
        body: {
          en: 'PVE\'s default user is `root` over SSH (yes, you should add a sudo user). Disable password auth, copy your SSH key. Create a SSHive profile for each node — pve1, pve2, pve3. Group them in a folder. For cluster commands, broadcast to all three: `pveversion`, `qm list`, `pvecm status`. Output side-by-side reveals immediately if a node has fallen out of cluster quorum.',
          fr: 'L\'user par defaut de PVE est `root` en SSH (oui, vous devriez ajouter un user sudo). Desactivez l\'auth mot de passe, copiez votre cle SSH. Creez un profil SSHive par noeud — pve1, pve2, pve3. Groupez-les en dossier. Pour les commandes cluster, broadcast vers les trois : `pveversion`, `qm list`, `pvecm status`. Sortie cote a cote revele immediatement si un noeud est sorti du quorum.',
        },
      },
      {
        heading: { en: 'noVNC console for guest VMs', fr: 'Console noVNC pour les VMs invitees' },
        body: {
          en: 'Proxmox embeds noVNC for guest console access — the same protocol SSHive\'s VNC viewer speaks. To open a guest console outside of the PVE web UI: in PVE web UI, navigate to the VM, Console → "expand", note the URL pattern. Or simpler: query `qm vncproxy <vmid>` over SSH to get a one-time port and password, then connect from SSHive\'s VNC pane to `pve-host:port`. Useful for VMs without network connectivity yet (fresh installs, rescue boots).',
          fr: 'Proxmox embarque noVNC pour l\'acces console aux invites — le meme protocole que parle le viewer VNC de SSHive. Pour ouvrir une console invite hors de l\'UI web PVE : dans l\'UI, allez sur la VM, Console → "expand", notez le pattern d\'URL. Ou plus simple : requetez `qm vncproxy <vmid>` en SSH pour avoir un port et mot de passe one-time, puis connectez depuis le panneau VNC de SSHive vers `pve-host:port`. Utile pour les VMs sans connectivite reseau encore (installs frais, boots rescue).',
        },
      },
      {
        heading: { en: 'SFTP-upload ISOs', fr: 'Upload SFTP des ISOs' },
        body: {
          en: 'Drag any `.iso` file from your Mac to `/var/lib/vz/template/iso/` on a PVE node — SSHive\'s SFTP pane handles it. Refresh the PVE web UI, the ISO is available for new VMs. Same for container templates in `/var/lib/vz/template/cache/`.',
          fr: 'Glissez n\'importe quel `.iso` depuis Mac vers `/var/lib/vz/template/iso/` d\'un noeud PVE — le panneau SFTP de SSHive le gere. Refresh l\'UI web PVE, l\'ISO est disponible pour de nouvelles VMs. Idem pour les templates de containers dans `/var/lib/vz/template/cache/`.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can SSHive replace the Proxmox web UI?', fr: 'SSHive peut-il remplacer l\'UI web Proxmox ?' },
        answer: {
          en: 'No — the PVE web UI is the cleanest way to create/configure VMs. SSHive complements it: SSH for the host OS, VNC console for guest sessions, SFTP for file uploads. Use the web UI for VM lifecycle management, SSHive for everything else.',
          fr: 'Non — l\'UI web PVE est la facon la plus propre de creer/configurer des VMs. SSHive la complete : SSH pour l\'OS hote, console VNC pour les sessions invitees, SFTP pour les uploads. Utilisez l\'UI web pour le cycle de vie VM, SSHive pour le reste.',
        },
      },
      {
        question: { en: 'How do I securely access PVE web UI from outside my LAN?', fr: 'Comment acceder a l\'UI web PVE depuis l\'exterieur du LAN en securite ?' },
        answer: {
          en: 'Don\'t expose 8006 on your router. Instead, use SSHive\'s tunnel feature: in the PVE node profile, add Local forward 8006 → localhost:8006. Connect via SSH, then open `https://localhost:8006` in Safari/Chrome. The web UI traffic is now tunneled through SSH.',
          fr: 'N\'exposez pas 8006 sur le routeur. A la place, utilisez la fonctionnalite tunnel de SSHive : dans le profil du noeud PVE, ajoutez un forward Local 8006 → localhost:8006. Connectez en SSH, puis ouvrez `https://localhost:8006` dans Safari/Chrome. Le trafic UI web est maintenant tunnele via SSH.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'vnc', 'sftp', 'tunnels', 'broadcast'],
    relatedHowTos: ['ssh-tunnel-mac', 'vnc-from-mac', 'broadcast-commands-mac'],
    relatedUseCases: ['home-server', 'kubernetes'],
  },
  {
    slug: 'docker',
    metaTitle: {
      en: 'Manage Docker Hosts from a Mac — SSH, Tunnels, Logs',
      fr: 'Gerer les hotes Docker depuis Mac — SSH, tunnels, logs',
    },
    metaDescription: {
      en: 'Connect to remote Docker hosts from macOS: SSH for `docker ps`/`docker logs`, tunnels for exposed ports, broadcast for swarm ops, MCP for AI-assisted ops.',
      fr: 'Connectez-vous aux hotes Docker distants depuis macOS : SSH pour `docker ps`/`docker logs`, tunnels pour ports exposes, broadcast pour ops swarm, MCP pour ops assistees IA.',
    },
    h1: { en: 'Docker host management from your Mac', fr: 'Gestion des hotes Docker depuis votre Mac' },
    hero: {
      en: 'SSH to Docker hosts, tunnel exposed ports, broadcast across swarm nodes — all from one native macOS app.',
      fr: 'SSH vers les hotes Docker, tunnel des ports exposes, broadcast a travers les noeuds swarm — tout depuis une app macOS native.',
    },
    intro: {
      en: 'Docker shines when it runs on a real Linux host instead of Docker Desktop\'s VM. Maybe that\'s a $5 VPS for side projects, a mini-PC running 30 self-hosted services, or a 3-node Swarm. From a Mac, SSH is the daily driver: `docker ps`, `docker logs -f myapp`, `docker exec -it myapp bash`. SSHive makes this fast — saved profiles, snippet library with the Docker presets pre-loaded (`docker ps -a`, `docker compose logs --tail 100 -f`, `docker system prune -f`), and tunnels to reach exposed app ports without firewall changes.',
      fr: 'Docker brille quand il tourne sur un vrai hote Linux plutot que la VM de Docker Desktop. Que ce soit un VPS a 5 $ pour les side projects, un mini-PC tournant 30 services self-hosted, ou un Swarm 3 noeuds. Depuis Mac, SSH est l\'outil quotidien : `docker ps`, `docker logs -f myapp`, `docker exec -it myapp bash`. SSHive rend ca rapide — profils sauvegardes, bibliotheque de snippets avec les presets Docker pre-charges (`docker ps -a`, `docker compose logs --tail 100 -f`, `docker system prune -f`), et tunnels pour atteindre les ports d\'app exposes sans changements firewall.',
    },
    sections: [
      {
        heading: { en: 'Reach a containerized app via tunnel', fr: 'Atteindre une app containerisee via tunnel' },
        body: {
          en: 'You run a dev app on `docker run -p 3000:3000 myapp` on a remote host. Don\'t expose 3000 publicly. In SSHive, add a Local forward: 3000 → localhost:3000 in the host profile. Open `http://localhost:3000` on your Mac — your remote container is reachable through the SSH tunnel.',
          fr: 'Vous lancez une app dev sur `docker run -p 3000:3000 myapp` sur un hote distant. N\'exposez pas 3000 publiquement. Dans SSHive, ajoutez un forward Local : 3000 → localhost:3000 dans le profil de l\'hote. Ouvrez `http://localhost:3000` sur Mac — votre container distant est joignable via le tunnel SSH.',
        },
      },
      {
        heading: { en: 'Cluster operations with broadcast', fr: 'Operations cluster avec broadcast' },
        body: {
          en: 'Running Docker Swarm or just identical Docker hosts? Broadcast `docker system prune -af && docker volume prune -f` to clean disk space across the fleet. Or `docker compose pull && docker compose up -d` to roll out a new release. Output panes side-by-side make it obvious if one node failed.',
          fr: 'Vous tournez Docker Swarm ou juste des hotes Docker identiques ? Broadcast `docker system prune -af && docker volume prune -f` pour nettoyer l\'espace disque sur toute la flotte. Ou `docker compose pull && docker compose up -d` pour deployer une nouvelle release. Panneaux de sortie cote a cote rendent evident si un noeud a echoue.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can SSHive replace Portainer?', fr: 'SSHive peut-il remplacer Portainer ?' },
        answer: {
          en: 'For day-to-day CLI tasks, yes — most Docker work is `ps`, `logs`, `exec`, `compose up/down`. Portainer\'s graphical container management has no SSHive equivalent (we don\'t parse `docker ps` output or render container UIs). If you live in `docker logs` and `docker compose`, SSHive is enough. If you want graphical container browsing, run Portainer behind an SSHive tunnel.',
          fr: 'Pour les taches CLI quotidiennes, oui — la majorite du travail Docker est `ps`, `logs`, `exec`, `compose up/down`. La gestion graphique de containers de Portainer n\'a pas d\'equivalent SSHive (on ne parse pas `docker ps` ni ne rend des UIs de containers). Si vous vivez dans `docker logs` et `docker compose`, SSHive suffit. Si vous voulez du browsing graphique, faites tourner Portainer derriere un tunnel SSHive.',
        },
      },
      {
        question: { en: 'Does SSHive support Docker contexts (DOCKER_HOST over SSH)?', fr: 'SSHive supporte-t-il les contextes Docker (DOCKER_HOST en SSH) ?' },
        answer: {
          en: 'SSHive doesn\'t set DOCKER_HOST for you, but you can run `docker context use myremote` in SSHive\'s local terminal (Local Shell tab). Docker CLI then talks to the remote Docker daemon over SSH transparently. This is independent of SSHive\'s SSH session feature.',
          fr: 'SSHive ne regle pas DOCKER_HOST pour vous, mais vous pouvez lancer `docker context use myremote` dans le terminal local SSHive (onglet Local Shell). La CLI Docker parle alors au daemon Docker distant via SSH de facon transparente. C\'est independant de la fonctionnalite session SSH de SSHive.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'tunnels', 'broadcast', 'snippets'],
    relatedHowTos: ['ssh-tunnel-mac', 'broadcast-commands-mac'],
    relatedUseCases: ['kubernetes', 'aws-ec2', 'home-server'],
  },
  {
    slug: 'kubernetes',
    metaTitle: {
      en: 'kubectl + SSH on macOS — Manage K8s Nodes from a Mac',
      fr: 'kubectl + SSH sur macOS — Gerer des noeuds K8s depuis Mac',
    },
    metaDescription: {
      en: 'Run kubectl from SSHive\'s terminal, SSH directly to Kubernetes nodes for node-level work, broadcast across nodes, and tunnel cluster services to your Mac.',
      fr: 'Lancez kubectl depuis le terminal SSHive, SSH directement aux noeuds Kubernetes pour le travail au niveau noeud, broadcast a travers les noeuds, et tunnelisez les services cluster vers Mac.',
    },
    h1: { en: 'Kubernetes ops from your Mac', fr: 'Operations Kubernetes depuis votre Mac' },
    hero: {
      en: 'SSH to nodes, run kubectl from a unified terminal, tunnel cluster services, and broadcast across nodes — all in SSHive.',
      fr: 'SSH aux noeuds, kubectl depuis un terminal unifie, tunnel des services cluster et broadcast a travers les noeuds — tout dans SSHive.',
    },
    intro: {
      en: 'kubectl is the primary interface to Kubernetes — but for node-level diagnostics (kubelet logs, journald, containerd state), you still SSH into the nodes. SSHive becomes your unified workspace: a profile per node (control plane and workers), kubectl from the local shell tab, broadcast for fleet-wide node maintenance, tunnels to reach internal services. Combine with the MCP integration and Claude can introspect a misbehaving node and `kubectl describe` the relevant pods in one breath.',
      fr: 'kubectl est l\'interface primaire vers Kubernetes — mais pour les diagnostics au niveau noeud (logs kubelet, journald, etat containerd), vous SSH-ez encore. SSHive devient votre workspace unifie : un profil par noeud (control plane et workers), kubectl depuis l\'onglet local, broadcast pour la maintenance fleet-wide, tunnels pour atteindre les services internes. Combinez avec l\'integration MCP et Claude peut introspecter un noeud qui se comporte mal et `kubectl describe` les pods concernes d\'une traite.',
    },
    sections: [
      {
        heading: { en: 'Node-level debugging via SSH', fr: 'Debug au niveau noeud via SSH' },
        body: {
          en: 'Pod stuck in CrashLoopBackOff with no useful pod logs? SSH into the node, `journalctl -u kubelet -f`, `crictl ps -a`, `crictl logs <id>`. SSHive\'s saved profile + snippets make this 3 clicks instead of 30 keystrokes. For multi-node issues, broadcast.',
          fr: 'Pod coince en CrashLoopBackOff sans logs pod utiles ? SSH sur le noeud, `journalctl -u kubelet -f`, `crictl ps -a`, `crictl logs <id>`. Le profil sauvegarde + snippets de SSHive transforment ca en 3 clics au lieu de 30 frappes. Pour les soucis multi-noeuds, broadcast.',
        },
      },
      {
        heading: { en: 'Tunnel cluster services for local browsing', fr: 'Tunnel des services cluster pour browsing local' },
        body: {
          en: 'Need to reach a ClusterIP service from your Mac (Argo CD UI, Grafana, internal admin)? Two options. (1) `kubectl port-forward` from SSHive\'s local shell. (2) SSH into a node and let SSHive\'s Local forward expose the cluster service to your Mac. Both work — port-forward is simpler, SSHive tunnel is faster for repeated access.',
          fr: 'Besoin d\'atteindre un service ClusterIP depuis Mac (UI Argo CD, Grafana, admin interne) ? Deux options. (1) `kubectl port-forward` depuis le shell local SSHive. (2) SSH sur un noeud et laissez le forward Local de SSHive exposer le service cluster vers Mac. Les deux marchent — port-forward est plus simple, le tunnel SSHive est plus rapide pour acces repete.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does SSHive support kubectl exec sessions?', fr: 'SSHive supporte-t-il les sessions kubectl exec ?' },
        answer: {
          en: 'Yes — `kubectl exec -it pod -- bash` runs in any SSHive terminal tab (local or remote). Each kubectl exec is a TTY-backed pseudo-shell, so it feels like SSH. SSHive doesn\'t natively wrap kubectl into profiles, but a snippet "kubectl exec" with a placeholder pod name makes it one-click.',
          fr: 'Oui — `kubectl exec -it pod -- bash` tourne dans n\'importe quel onglet terminal SSHive (local ou distant). Chaque kubectl exec est un pseudo-shell TTY-backed, ca ressemble a SSH. SSHive ne wrappe pas kubectl en profils nativement, mais un snippet "kubectl exec" avec placeholder de nom de pod en fait un clic.',
        },
      },
      {
        question: { en: 'Can MCP run kubectl commands via Claude?', fr: 'MCP peut-il lancer des commandes kubectl via Claude ?' },
        answer: {
          en: 'Yes if Claude is connected to a node\'s SSH session through SSHive\'s MCP. Claude calls `ssh_execute` with `kubectl get pods -n myns`, gets the result, and can chain commands. Make sure your kubeconfig is valid on the node.',
          fr: 'Oui si Claude est connecte a une session SSH d\'un noeud via le MCP de SSHive. Claude appelle `ssh_execute` avec `kubectl get pods -n myns`, recoit le resultat, et peut chainer les commandes. Assurez-vous que le kubeconfig est valide sur le noeud.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'broadcast', 'tunnels', 'mcp'],
    relatedHowTos: ['ssh-tunnel-mac', 'broadcast-commands-mac'],
    relatedUseCases: ['docker', 'aws-ec2'],
  },
  {
    slug: 'jump-host',
    metaTitle: {
      en: 'SSH Jump Host (Bastion) from a Mac — One-Click Setup',
      fr: 'Jump Host SSH (bastion) depuis Mac — Setup en un clic',
    },
    metaDescription: {
      en: 'Configure ProxyJump bastions visually in SSHive: set up a jump host once, reuse across profiles, agent forwarding, no ~/.ssh/config editing required.',
      fr: 'Configurez les bastions ProxyJump visuellement dans SSHive : setup un jump host une fois, reutilisez sur les profils, agent forwarding, sans editer ~/.ssh/config.',
    },
    h1: { en: 'SSH jump host workflows on Mac', fr: 'Workflows SSH jump host sur Mac' },
    hero: {
      en: 'Set up bastions visually, reuse across profiles, agent-forward to private networks — without `~/.ssh/config` mass-editing.',
      fr: 'Setup visuel des bastions, reutilisation sur profils, agent forwarding vers reseaux prives — sans edition massive de `~/.ssh/config`.',
    },
    intro: {
      en: 'Anyone who works with cloud infrastructure or hardened on-prem networks knows the bastion (jump host) pattern: one Internet-exposed SSH server with strong logging and 2FA, every other host reachable only through it. The OpenSSH `ProxyJump` directive (or older `ProxyCommand` with `nc`) handles the multi-hop SSH connection. SSHive makes this a UI — set up the bastion as a profile once, and every other profile just selects "Jump Host: bastion" from a dropdown. Change the bastion\'s IP later? Edit one profile, every dependent connection adapts.',
      fr: 'Quiconque bosse avec de l\'infra cloud ou des reseaux on-prem durcis connait le pattern bastion (jump host) : un serveur SSH expose a Internet avec logging fort et 2FA, tous les autres hotes joignables seulement a travers lui. La directive `ProxyJump` d\'OpenSSH (ou l\'ancienne `ProxyCommand` avec `nc`) gere la connexion SSH multi-saut. SSHive en fait une UI — setup le bastion en profil une fois, et chaque autre profil selectionne "Jump Host : bastion" dans un dropdown. Changement d\'IP du bastion plus tard ? Editez un profil, chaque connexion dependante s\'adapte.',
    },
    sections: [
      {
        heading: { en: 'Set up a bastion profile', fr: 'Setup d\'un profil bastion' },
        body: {
          en: 'Create the bastion as a normal SSH profile in SSHive: hostname, port, user, key. Connect once to verify and accept the host key. Mark this profile as "Bastion / Jump Host" in profile settings — this surfaces it in the Jump Host dropdown of other profiles. Optionally enable "Agent forwarding" if you\'ll need to authenticate to subsequent hops with the same key.',
          fr: 'Creez le bastion comme profil SSH normal dans SSHive : hostname, port, user, cle. Connectez une fois pour verifier et accepter la cle hote. Marquez ce profil comme "Bastion / Jump Host" dans les parametres du profil — il apparait dans le dropdown Jump Host des autres profils. Optionnellement, activez "Agent forwarding" si vous devez vous authentifier aux sauts suivants avec la meme cle.',
        },
      },
      {
        heading: { en: 'Use the bastion in downstream profiles', fr: 'Utiliser le bastion dans les profils en aval' },
        body: {
          en: 'Create a profile for the private host: enter its private IP, user, key. Find "Jump Host" section, select your bastion. Save. Click connect — SSHive establishes the SSH tunnel to the bastion, then opens a second SSH session through it to the private host. From your perspective, it\'s one click; under the hood, it\'s OpenSSH ProxyJump.',
          fr: 'Creez un profil pour l\'hote prive : IP privee, user, cle. Trouvez la section "Jump Host", selectionnez votre bastion. Sauvegardez. Cliquez Connecter — SSHive etablit le tunnel SSH au bastion, puis ouvre une deuxieme session SSH a travers lui vers l\'hote prive. Pour vous, c\'est un clic ; sous le capot, c\'est ProxyJump d\'OpenSSH.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can I chain multiple jump hosts?', fr: 'Puis-je chainer plusieurs jump hosts ?' },
        answer: {
          en: 'Yes — each profile can specify a Jump Host, including a profile that itself uses a Jump Host. So host C jumps through B, which jumps through A. SSHive resolves the chain automatically.',
          fr: 'Oui — chaque profil peut specifier un Jump Host, y compris un profil qui utilise lui-meme un Jump Host. Donc l\'hote C saute via B, qui saute via A. SSHive resout la chaine automatiquement.',
        },
      },
      {
        question: { en: 'Does agent forwarding work through SSHive?', fr: 'L\'agent forwarding marche-t-il via SSHive ?' },
        answer: {
          en: 'Yes — enable "Forward agent" in the bastion profile. Your local ssh-agent (or 1Password\'s SSH agent) is forwarded to the bastion, and the second-hop SSH connection uses your local key without your private key ever touching the bastion.',
          fr: 'Oui — activez "Forward agent" dans le profil bastion. Votre ssh-agent local (ou l\'agent SSH 1Password) est forwarded vers le bastion, et la connexion SSH du deuxieme saut utilise votre cle locale sans que la cle privee touche jamais le bastion.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'tunnels'],
    relatedHowTos: ['jump-host-mac', 'ssh-tunnel-mac', 'ssh-key-mac'],
    relatedUseCases: ['aws-ec2'],
  },
  {
    slug: 'windows-server',
    metaTitle: {
      en: 'Connect to Windows Server from Mac — RDP & SSH',
      fr: 'Se connecter a Windows Server depuis Mac — RDP et SSH',
    },
    metaDescription: {
      en: 'RDP into Windows Server 2019/2022/2025 from macOS plus OpenSSH for command-line. Embedded RDP client, no Microsoft Remote Desktop window-juggling.',
      fr: 'RDP vers Windows Server 2019/2022/2025 depuis macOS plus OpenSSH pour la ligne de commande. Client RDP integre, pas de jonglage de fenetres avec Microsoft Remote Desktop.',
    },
    h1: { en: 'Windows Server administration from a Mac', fr: 'Administration Windows Server depuis Mac' },
    hero: {
      en: 'RDP into desktop sessions and SSH into PowerShell — Windows Server in a single SSHive window.',
      fr: 'RDP vers les sessions bureau et SSH vers PowerShell — Windows Server dans une seule fenetre SSHive.',
    },
    intro: {
      en: 'Modern Windows Server (2019+) ships with OpenSSH server as an installable feature, giving you SSH-powered PowerShell sessions in addition to the classic RDP graphical experience. Mac admins managing Windows Server fleets benefit from doing both from one tool: SSH for scripted operations and quick health checks (PowerShell over SSH is fast), RDP for tasks that genuinely need the graphical session (Server Manager, IIS Manager, complex AD tooling). SSHive does both, in the same window, with profiles per host.',
      fr: 'Windows Server moderne (2019+) embarque le serveur OpenSSH en feature installable, donnant des sessions PowerShell powered by SSH en plus de l\'experience graphique RDP classique. Les admins Mac gerant des flottes Windows Server gagnent a faire les deux depuis un seul outil : SSH pour ops scriptees et checks rapides (PowerShell sur SSH est rapide), RDP pour les taches qui demandent vraiment le graphique (Server Manager, IIS Manager, outillage AD complexe). SSHive fait les deux, dans la meme fenetre, avec profils par hote.',
    },
    sections: [
      {
        heading: { en: 'Enable OpenSSH on Windows Server', fr: 'Activer OpenSSH sur Windows Server' },
        body: {
          en: 'On Windows Server 2019/2022/2025, install the OpenSSH server feature: `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0`. Enable the service: `Start-Service sshd; Set-Service -Name sshd -StartupType Automatic`. Add a firewall rule for port 22 if needed. Now you can SSH into the box; the default shell is `cmd`. To get PowerShell as default: `New-ItemProperty -Path "HKLM:\\SOFTWARE\\OpenSSH" -Name DefaultShell -Value "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -PropertyType String -Force`.',
          fr: 'Sur Windows Server 2019/2022/2025, installez la feature OpenSSH server : `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0`. Activez le service : `Start-Service sshd; Set-Service -Name sshd -StartupType Automatic`. Ajoutez une regle firewall pour le port 22 si besoin. Vous pouvez maintenant SSH-er ; le shell par defaut est `cmd`. Pour avoir PowerShell par defaut : `New-ItemProperty -Path "HKLM:\\SOFTWARE\\OpenSSH" -Name DefaultShell -Value "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -PropertyType String -Force`.',
        },
      },
      {
        heading: { en: 'RDP into the desktop session', fr: 'RDP dans la session bureau' },
        body: {
          en: 'Create an RDP profile in SSHive: hostname, user (in `DOMAIN\\username` form for AD-joined hosts, or just `username` for local), password. Connect — the embedded RDP client opens in a tab inside SSHive. NLA is supported, clipboard syncs, keyboard shortcuts translate. For sessions across the public Internet, tunnel RDP through SSH first (Local forward 3389 → localhost:3389) and connect RDP to localhost.',
          fr: 'Creez un profil RDP dans SSHive : hostname, user (en `DOMAINE\\username` pour les hotes joints AD, ou juste `username` pour local), mot de passe. Connectez — le client RDP integre s\'ouvre dans un onglet dans SSHive. NLA supporte, le presse-papiers se synchronise, les raccourcis se traduisent. Pour les sessions sur Internet public, tunnelisez le RDP via SSH d\'abord (forward Local 3389 → localhost:3389) et connectez le RDP a localhost.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Does the embedded RDP client work with Azure AD-joined hosts?', fr: 'Le client RDP integre marche-t-il avec les hotes joints Azure AD ?' },
        answer: {
          en: 'For Azure-AD-only joined hosts that require web-based authentication, no — use the official Microsoft Remote Desktop client. For traditional AD or local accounts (still 95% of Windows Server installs), SSHive\'s RDP works fine.',
          fr: 'Pour les hotes joints Azure AD only qui demandent une auth web-based, non — utilisez le client Microsoft Remote Desktop officiel. Pour AD traditionnel ou comptes locaux (encore 95% des installs Windows Server), le RDP de SSHive marche bien.',
        },
      },
      {
        question: { en: 'Does SSHive RDP support NLA (Network Level Authentication)?', fr: 'Le RDP de SSHive supporte-t-il NLA (Network Level Authentication) ?' },
        answer: {
          en: 'Yes — NLA-protected hosts work via the embedded freerdp-native engine. Domain-joined logins (DOMAIN\\user) and local accounts both authenticate fine. For sessions across the public Internet, tunnel RDP through SSH first using SSHive\'s tunnel feature.',
          fr: 'Oui — les hotes proteges NLA fonctionnent via le moteur freerdp-native integre. Les logins joints au domaine (DOMAINE\\user) et les comptes locaux s\'authentifient correctement. Pour les sessions sur Internet public, tunnelisez le RDP via SSH avec la fonctionnalite tunnel de SSHive.',
        },
      },
    ],
    relatedFeatures: ['rdp', 'ssh', 'tunnels'],
    relatedHowTos: ['rdp-from-mac', 'ssh-tunnel-mac'],
    relatedUseCases: ['aws-ec2'],
  },
  {
    slug: 'nas-synology',
    metaTitle: {
      en: 'SSH into Synology / QNAP NAS from Mac — SFTP & Admin',
      fr: 'SSH vers NAS Synology / QNAP depuis Mac — SFTP et admin',
    },
    metaDescription: {
      en: 'Manage Synology DSM, QNAP QTS, or any SSH-enabled NAS from macOS: terminal, SFTP file browser, tunnels for DSM web UI, broadcast across multiple NAS units.',
      fr: 'Gerez Synology DSM, QNAP QTS ou tout NAS SSH-compatible depuis macOS : terminal, navigateur SFTP, tunnels pour UI DSM, broadcast sur plusieurs NAS.',
    },
    h1: { en: 'NAS administration from your Mac', fr: 'Administration NAS depuis votre Mac' },
    hero: {
      en: 'SSH into Synology, QNAP, TrueNAS, or Unraid; transfer files via SFTP; tunnel admin UIs — all from SSHive.',
      fr: 'SSH dans Synology, QNAP, TrueNAS ou Unraid ; transfert de fichiers SFTP ; tunnels d\'UIs admin — depuis SSHive.',
    },
    intro: {
      en: 'NAS appliances run a stripped-down Linux (Synology\'s DSM, QNAP\'s QTS, TrueNAS\'s FreeBSD/Linux mix, Unraid\'s Slackware) and expose SSH for power-user management. From a Mac, daily tasks are: drop files via SFTP, edit Docker / shell scripts, check `df -h` and SMART status, occasionally restart a service. SSHive makes this fast — saved profile per NAS, snippets for the common tasks, and tunnels for accessing DSM/QTS web UIs over an encrypted channel.',
      fr: 'Les NAS tournent un Linux allege (DSM de Synology, QTS de QNAP, mix FreeBSD/Linux de TrueNAS, Slackware d\'Unraid) et exposent SSH pour la gestion power-user. Depuis Mac, les taches quotidiennes : balancer des fichiers en SFTP, editer Docker / scripts shell, verifier `df -h` et le SMART, occasionnellement redemarrer un service. SSHive rend ca rapide — profil par NAS, snippets pour les taches communes, et tunnels pour acceder aux UIs web DSM/QTS sur canal chiffre.',
    },
    sections: [
      {
        heading: { en: 'Enable SSH on Synology DSM', fr: 'Activer SSH sur Synology DSM' },
        body: {
          en: 'In DSM web UI: Control Panel → Terminal & SNMP → check "Enable SSH service". Default port is 22. Use your DSM admin user. Best practice: create a dedicated admin user, disable root SSH, enable key-based auth. SSHive works the same way as for any Linux SSH host.',
          fr: 'Dans l\'UI web DSM : Panneau de configuration → Terminal et SNMP → cocher "Activer le service SSH". Port par defaut 22. Utilisez votre user admin DSM. Bonne pratique : creez un user admin dedie, desactivez le SSH root, activez l\'auth par cle. SSHive marche pareil que pour n\'importe quel hote SSH Linux.',
        },
      },
      {
        heading: { en: 'Tunnel DSM web UI for safe remote access', fr: 'Tunnel de l\'UI web DSM pour acces distant sur' },
        body: {
          en: 'Synology DSM is on port 5000 (HTTP) or 5001 (HTTPS). Don\'t expose these on your router. In SSHive, in the NAS profile, add Local forward: 5001 → localhost:5001. Connect via SSH, then open `https://localhost:5001` in your browser. DSM is reachable encrypted via SSH. Same trick for QNAP QTS (port 8080), TrueNAS (port 80/443), Unraid (port 80).',
          fr: 'Synology DSM est sur le port 5000 (HTTP) ou 5001 (HTTPS). Ne les exposez pas sur le routeur. Dans SSHive, dans le profil NAS, ajoutez forward Local : 5001 → localhost:5001. Connectez via SSH, puis ouvrez `https://localhost:5001` dans le navigateur. DSM est joignable chiffre via SSH. Meme astuce pour QNAP QTS (port 8080), TrueNAS (port 80/443), Unraid (port 80).',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Will SFTP transfers be slow over a NAS?', fr: 'Les transferts SFTP seront-ils lents sur un NAS ?' },
        answer: {
          en: 'On gigabit Ethernet, SFTP through SSH typically saturates the link (110-120 MB/s). The bottleneck is the NAS\'s internal storage IOPS and CPU for SSH encryption. NASes with weak ARM CPUs (older Synology DS series) can struggle past 50 MB/s. Use AES-NI-capable encryption ciphers (`aes128-gcm@openssh.com` is fast).',
          fr: 'Sur Ethernet gigabit, le SFTP via SSH sature typiquement le lien (110-120 Mo/s). Le goulot est les IOPS du stockage interne du NAS et le CPU pour le chiffrement SSH. Les NAS a CPU ARM faibles (Synology DS series anciennes) peinent a depasser 50 Mo/s. Utilisez des ciphers compatibles AES-NI (`aes128-gcm@openssh.com` est rapide).',
        },
      },
      {
        question: { en: 'Can SSHive replace the Synology Drive desktop client?', fr: 'SSHive peut-il remplacer le client desktop Synology Drive ?' },
        answer: {
          en: 'No — Synology Drive does background sync and conflict resolution. SSHive\'s SFTP is for explicit file ops. Use both: Drive for ongoing sync, SSHive for ad-hoc admin tasks.',
          fr: 'Non — Synology Drive fait de la sync en arriere-plan et de la resolution de conflits. Le SFTP de SSHive est pour les ops fichier explicites. Utilisez les deux : Drive pour la sync continue, SSHive pour les taches admin ad-hoc.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'tunnels', 'broadcast'],
    relatedHowTos: ['sftp-gui-mac', 'ssh-tunnel-mac', 'ssh-key-mac'],
    relatedUseCases: ['home-server'],
  },
  {
    slug: 'all-in-one-ssh-client-mac',
    metaTitle: {
      en: 'All-in-One SSH Client for macOS — SSH, SFTP, RDP & VNC',
      fr: 'Client SSH tout-en-un pour macOS — SSH, SFTP, RDP et VNC',
    },
    metaDescription: {
      en: 'Looking for an all-in-one SSH terminal on macOS that bundles SFTP, RDP, VNC, tunnels and AI integration? SSHive is the native Mac client built for that workflow. Free download.',
      fr: 'Vous cherchez un terminal SSH tout-en-un sur macOS qui regroupe SFTP, RDP, VNC, tunnels et integration IA ? SSHive est le client natif Mac pense pour ce workflow. Telechargement gratuit.',
    },
    h1: {
      en: 'An all-in-one SSH client for macOS',
      fr: 'Un client SSH tout-en-un pour macOS',
    },
    hero: {
      en: 'SSH, SFTP, RDP, VNC, tunnels, broadcast and built-in MCP for AI — in a single native macOS window.',
      fr: 'SSH, SFTP, RDP, VNC, tunnels, broadcast et MCP integre pour l\'IA — dans une seule fenetre macOS native.',
    },
    intro: {
      en: 'Many developers and sysadmins arriving on macOS from Windows miss having a single terminal app that bundles every remote protocol they need. The standard Mac stack ends up being iTerm2 plus Cyberduck plus Microsoft Remote Desktop plus a VNC viewer plus an authenticator — five apps to manage what was historically one tool. SSHive is built around the all-in-one philosophy: SSH terminal, SFTP file manager, embedded RDP, embedded VNC, SSH tunnels (-L, -R, -D), multi-host broadcast, snippet library, network tools — all in the same window, with the macOS Keychain handling credentials.\n\nIf you have a `MobaXterm.ini` session list saved in cleartext from your previous Windows setup, SSHive can import it directly: every Host entry becomes a SSHive profile in seconds. Encrypted MobaXterm backups are not supported — you need the cleartext export from MobaXterm itself. Same for `~/.ssh/config`, PuTTY and Royal TSX exports: SSHive parses them and creates the equivalent profiles, preserving folder hierarchy.',
      fr: 'Beaucoup de developpeurs et sysadmins arrivant sur macOS depuis Windows regrettent l\'app terminal unique qui regroupait tous les protocoles distants. La pile Mac standard finit en iTerm2 plus Cyberduck plus Microsoft Remote Desktop plus un viewer VNC plus un authenticator — cinq apps pour ce qui etait historiquement un seul outil. SSHive est concu autour de la philosophie tout-en-un : terminal SSH, gestionnaire SFTP, RDP integre, VNC integre, tunnels SSH (-L, -R, -D), broadcast multi-hote, bibliotheque de snippets, outils reseau — dans la meme fenetre, avec le Trousseau macOS qui gere les identifiants.\n\nSi vous avez un fichier `MobaXterm.ini` exporte en clair depuis votre setup Windows precedent, SSHive peut l\'importer directement : chaque entree Host devient un profil SSHive en quelques secondes. Les backups MobaXterm chiffres ne sont pas supportes — il faut l\'export en clair depuis MobaXterm. Idem pour `~/.ssh/config`, les exports PuTTY et Royal TSX : SSHive les parse et cree les profils equivalents, en preservant la hierarchie de dossiers.',
    },
    sections: [
      {
        heading: { en: 'What SSHive bundles in one window', fr: 'Ce que SSHive regroupe dans une fenetre' },
        body: {
          en: 'SSH terminal powered by xterm.js with WebGL rendering. Dual-pane SFTP file manager with drag-and-drop and a built-in remote editor (CodeMirror, Cmd+S to save). Embedded RDP via IronRDP / freerdp-native — no external Microsoft Remote Desktop window. Embedded VNC viewer via noVNC with a built-in WebSocket-to-TCP proxy. SSH tunnels with a visual UI (Local, Remote, SOCKS5). Multi-host broadcast (Cmd+Shift+B). Snippet library with 14 presets and custom commands. Network tools: DNS lookup, ping, traceroute, whois, DNSBL, MX, interfaces. Built-in TOTP/HOTP authenticator with encrypted vault.',
          fr: 'Terminal SSH propulse par xterm.js avec rendu WebGL. Gestionnaire SFTP double panneau avec drag-and-drop et editeur distant integre (CodeMirror, Cmd+S pour sauvegarder). RDP integre via IronRDP / freerdp-native — pas de fenetre Microsoft Remote Desktop externe. Viewer VNC integre via noVNC avec proxy WebSocket-vers-TCP integre. Tunnels SSH avec UI visuelle (Local, Remote, SOCKS5). Broadcast multi-hote (Cmd+Shift+B). Bibliotheque de snippets avec 14 presets et commandes custom. Outils reseau : DNS lookup, ping, traceroute, whois, DNSBL, MX, interfaces. Authenticator TOTP/HOTP integre avec vault chiffre.',
        },
      },
      {
        heading: { en: 'Importing sessions from Windows tools', fr: 'Importer des sessions depuis des outils Windows' },
        body: {
          en: 'Click "+ → Import" and SSHive accepts: cleartext `MobaXterm.ini`, PuTTY registry exports, Royal TSX `.rtsz`, and OpenSSH `~/.ssh/config`. The importer parses hostnames, ports, users, key paths, jump hosts and folder hierarchy. Credentials get stored in the macOS Keychain on first connect — your `.ini` file does not stay in cleartext on disk after import.',
          fr: 'Cliquez "+ → Importer" et SSHive accepte : `MobaXterm.ini` en clair, exports registry PuTTY, fichiers Royal TSX `.rtsz`, et `~/.ssh/config` OpenSSH. L\'importeur parse hostnames, ports, users, chemins de cle, jump hosts et hierarchie de dossiers. Les identifiants sont stockes dans le Trousseau macOS a la premiere connexion — votre fichier `.ini` ne reste pas en clair sur disque apres l\'import.',
        },
      },
      {
        heading: { en: 'The AI piece: Claude Code, Cursor, Claude Desktop', fr: 'La piece IA : Claude Code, Cursor, Claude Desktop' },
        body: {
          en: 'SSHive ships with a local MCP (Model Context Protocol) server on `127.0.0.1:49422`, protected by a Bearer token. Toggle it ON in Settings → MCP and SSHive auto-injects an `mcpServers.sshive` entry into the config files of detected clients (Claude Code, Cursor) and shows a copy-paste block for Claude Desktop. The 7 tools cover `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file`, `sftp_write_file`, `sftp_write_file_chunk` and `sftp_write_from_local_path`. Translation: ask your AI assistant "tail the last 200 lines of nginx error log on prod" and it does it through your SSHive session, no extra setup. MCP is Pro-only.',
          fr: 'SSHive embarque un serveur MCP (Model Context Protocol) local sur `127.0.0.1:49422`, protege par un Bearer token. Basculez-le ON dans Parametres → MCP et SSHive auto-injecte une entree `mcpServers.sshive` dans les fichiers de config des clients detectes (Claude Code, Cursor) et affiche un bloc copier-coller pour Claude Desktop. Les 7 outils couvrent `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file`, `sftp_write_file`, `sftp_write_file_chunk` et `sftp_write_from_local_path`. Traduction : demandez a votre assistant IA "tail les 200 dernieres lignes du log d\'erreur nginx sur prod" et il le fait via votre session SSHive, sans setup supplementaire. MCP est Pro uniquement.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can I import a MobaXterm.ini file into SSHive?', fr: 'Puis-je importer un fichier MobaXterm.ini dans SSHive ?' },
        answer: {
          en: 'Yes, if the file is exported in cleartext (not encrypted). In MobaXterm, use the cleartext sessions export, copy the resulting `.ini` to your Mac, then in SSHive click "+ → Import → MobaXterm.ini" and select the file. Encrypted MobaXterm backups cannot be parsed — that is intentional, since SSHive does not have your MobaXterm master password.',
          fr: 'Oui, si le fichier est exporte en clair (non chiffre). Dans MobaXterm, utilisez l\'export sessions en clair, copiez le `.ini` sur votre Mac, puis dans SSHive cliquez "+ → Importer → MobaXterm.ini" et selectionnez le fichier. Les backups MobaXterm chiffres ne peuvent pas etre parses — c\'est voulu, SSHive n\'a pas votre mot de passe maitre MobaXterm.',
        },
      },
      {
        question: { en: 'Does SSHive include an X11 server like Windows all-in-one terminals do?', fr: 'SSHive inclut-il un serveur X11 comme certains terminaux Windows tout-en-un ?' },
        answer: {
          en: 'No — SSHive does not bundle an Xorg server. On macOS, install XQuartz (the free X11 server maintained by the XQuartz community for macOS) and SSHive will route X11 traffic via standard `ssh -X` forwarding. For most modern workflows where X11 has been replaced by web UIs and embedded RDP/VNC, this is rarely a blocker.',
          fr: 'Non — SSHive n\'embarque pas de serveur Xorg. Sur macOS, installez XQuartz (le serveur X11 gratuit maintenu par la communaute XQuartz pour macOS) et SSHive routera le trafic X11 via le forwarding `ssh -X` standard. Pour la plupart des workflows modernes ou X11 a ete remplace par des UIs web et du RDP/VNC integres, c\'est rarement bloquant.',
        },
      },
      {
        question: { en: 'What about running a Windows terminal app via Wine or a VM?', fr: 'Et faire tourner une app terminal Windows via Wine ou une VM ?' },
        answer: {
          en: 'It is technically possible but trades the native macOS experience: no Keychain integration, separate window, performance overhead, and a Windows VM costs money or memory. SSHive is built natively for macOS so the integration with Apple Silicon, Keychain, system shortcuts and the Mac App Store comes by default.',
          fr: 'C\'est techniquement possible mais cela sacrifie l\'experience macOS native : pas d\'integration Trousseau, fenetre separee, overhead de performance, et une VM Windows coute de l\'argent ou de la memoire. SSHive est concu nativement pour macOS donc l\'integration avec Apple Silicon, Trousseau, raccourcis systeme et Mac App Store est par defaut.',
        },
      },
      {
        question: { en: 'How is SSHive licensed?', fr: 'Comment SSHive est-il distribue ?' },
        answer: {
          en: 'SSHive Free covers the SSH terminal, SFTP file manager, snippets and Keychain credential storage with a small concurrent-session limit. SSHive Pro on the Mac App Store unlocks unlimited sessions, RDP, VNC, tunnels, broadcast and MCP integration. Pricing and the latest tier details are on the pricing page.',
          fr: 'SSHive Free couvre le terminal SSH, le gestionnaire SFTP, les snippets et le stockage Trousseau avec une petite limite de sessions concurrentes. SSHive Pro sur le Mac App Store debloque sessions illimitees, RDP, VNC, tunnels, broadcast et integration MCP. Le prix et les derniers details des tiers sont sur la page Tarifs.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'rdp', 'vnc', 'tunnels', 'broadcast', 'mcp'],
    relatedHowTos: ['ssh-key-mac', 'ssh-tunnel-mac', 'rdp-from-mac'],
    relatedUseCases: ['developer-mac', 'home-server', 'aws-ec2'],
  },
  {
    slug: 'developer-mac',
    metaTitle: {
      en: 'Developer SSH Workflow on Mac — Profiles, Tunnels, AI',
      fr: 'Workflow SSH developpeur sur Mac — profils, tunnels, IA',
    },
    metaDescription: {
      en: 'A modern SSH workflow for developers on macOS: project profiles, dev DB tunnels, deploy scripts as snippets, Claude/Cursor MCP integration for AI-assisted ops.',
      fr: 'Un workflow SSH moderne pour les developpeurs macOS : profils par projet, tunnels DB dev, scripts de deploy en snippets, integration Claude/Cursor MCP pour ops assistees IA.',
    },
    h1: { en: 'A developer SSH workflow built for macOS', fr: 'Un workflow SSH developpeur pense pour macOS' },
    hero: {
      en: 'Project-based profiles, dev database tunnels, deploy snippets, and AI-assisted server ops via Claude/Cursor.',
      fr: 'Profils par projet, tunnels de base dev, snippets de deploy, ops serveur assistees IA via Claude/Cursor.',
    },
    intro: {
      en: 'A typical developer\'s SSH life on macOS is messy: connection strings in shell history, the wrong key used on the wrong host, copy-pasting `ssh user@host` from a Notion doc, juggling iTerm2 / Cyberduck / Microsoft Remote Desktop / TablePlus tunneled through `ssh -L`. SSHive trims this into one workspace: profiles per project (one folder = one project, with all its servers grouped), snippets for the deploy commands you run weekly, tunnels for dev databases, broadcast when you need to roll something across multiple staging servers, MCP for letting Claude in your IDE actually do the SSH work for you.',
      fr: 'La vie SSH typique d\'un dev macOS est en bordel : strings de connexion dans l\'historique shell, mauvaise cle sur mauvais hote, copier-coller `ssh user@host` depuis un Notion, jonglage iTerm2 / Cyberduck / Microsoft Remote Desktop / TablePlus tunnele via `ssh -L`. SSHive ramene ca dans un workspace : profils par projet (un dossier = un projet, avec tous ses serveurs groupes), snippets pour les commandes de deploy hebdo, tunnels pour les bases dev, broadcast quand il faut deployer sur plusieurs staging, MCP pour laisser Claude dans votre IDE faire reellement le travail SSH.',
    },
    sections: [
      {
        heading: { en: 'Profile per project, color tags per env', fr: 'Profil par projet, tags couleur par environnement' },
        body: {
          en: 'Create a folder for each project. Inside, profiles for prod, staging, dev. Color-tag prod red, staging amber, dev green — visual cue that prevents typing into the wrong terminal. Save common commands (`tail app log`, `restart service`, `db backup`) as project-scoped snippets.',
          fr: 'Creez un dossier par projet. Dedans, profils pour prod, staging, dev. Tag couleur prod en rouge, staging en orange, dev en vert — repere visuel qui empeche de taper dans le mauvais terminal. Sauvegardez les commandes communes (`tail app log`, `restart service`, `db backup`) en snippets project-scoped.',
        },
      },
      {
        heading: { en: 'Tunnel dev databases automatically', fr: 'Tunnel des bases dev automatiquement' },
        body: {
          en: 'In your dev profile, add Local forwards for your remote dev DB (5432 → 5432 for Postgres, 6379 → 6379 for Redis). When you connect, TablePlus/Postico can hit `localhost:5432` and reach the remote dev DB directly. Tunnel goes down when you disconnect — no orphaned ports.',
          fr: 'Dans le profil dev, ajoutez les forwards Local pour votre DB dev distante (5432 → 5432 pour Postgres, 6379 → 6379 pour Redis). Quand vous connectez, TablePlus/Postico touche `localhost:5432` et atteint la DB dev distante directement. Tunnel tombe quand vous deconnectez — pas de ports orphelins.',
        },
      },
      {
        heading: { en: 'Let Claude / Cursor work on your servers', fr: 'Laissez Claude / Cursor bosser sur vos serveurs' },
        body: {
          en: 'Enable SSHive\'s MCP server. Claude Code or Cursor in your IDE can now `ssh_execute` on any open SSHive session. Ask "tail the last 200 lines of app.log on staging and find the 500 errors" — Claude does it. Ask "compare the staging nginx config to local repo" — Claude reads it via `sftp_read_file`, diffs it. Stays terminal-free for routine tasks.',
          fr: 'Activez le serveur MCP de SSHive. Claude Code ou Cursor dans votre IDE peut maintenant `ssh_execute` sur n\'importe quelle session SSHive ouverte. Demandez "tail les 200 dernieres lignes d\'app.log sur staging et trouve les erreurs 500" — Claude le fait. Demandez "compare la config nginx staging au repo local" — Claude lit via `sftp_read_file`, diffe. Reste hors-terminal pour les taches routinieres.',
        },
      },
    ],
    faq: [
      {
        question: { en: 'Can I keep using my ~/.ssh/config?', fr: 'Puis-je garder mon ~/.ssh/config ?' },
        answer: {
          en: 'Yes. SSHive can import from `~/.ssh/config` and respect its directives, but it doesn\'t require it. You can run SSHive\'s profile system in parallel with `ssh user@host` from any other terminal — they don\'t conflict.',
          fr: 'Oui. SSHive peut importer depuis `~/.ssh/config` et respecter ses directives, mais ne le demande pas. Vous pouvez utiliser le systeme de profils de SSHive en parallele de `ssh user@host` depuis n\'importe quel autre terminal — pas de conflit.',
        },
      },
      {
        question: { en: 'Does SSHive integrate with VS Code Remote SSH?', fr: 'SSHive s\'integre-t-il avec VS Code Remote SSH ?' },
        answer: {
          en: 'No direct integration — VS Code Remote SSH uses its own SSH client. They co-exist: edit code in VS Code Remote-SSH, do terminal/SFTP/admin work in SSHive. Some users prefer SSHive\'s integrated terminal-and-SFTP for non-coding work, leaving VS Code for code.',
          fr: 'Pas d\'integration directe — VS Code Remote SSH utilise son propre client SSH. Ils coexistent : editez le code dans VS Code Remote-SSH, faites le travail terminal/SFTP/admin dans SSHive. Certains utilisateurs preferent le terminal-et-SFTP integre de SSHive pour le travail non-coding, en laissant VS Code pour le code.',
        },
      },
    ],
    relatedFeatures: ['ssh', 'sftp', 'tunnels', 'snippets', 'mcp'],
    relatedHowTos: ['ssh-tunnel-mac', 'claude-mcp-ssh', 'import-ssh-config-mac'],
    relatedUseCases: ['aws-ec2', 'docker', 'kubernetes'],
  },
];

export const USE_CASE_SLUGS = USE_CASES.map((u) => u.slug);

export function getUseCase(slug: string): UseCaseSEO | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}
