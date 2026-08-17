# Kit de soumission aux annuaires

Textes prêts à copier-coller pour AlternativeTo, MacUpdate, SourceForge, Product Hunt
et les annuaires MCP. Chaque bloc de code se colle tel quel.

Tout ce qui suit a été vérifié contre le code réel des apps
(`/Users/lrusso/WebSSH-App` et `/Users/lrusso/WebSSH-App-iOS`).
Avant d'ajouter une affirmation, lire la section « Ne jamais affirmer » en fin de fichier.

---

## Assets

| Élément | Emplacement |
|---|---|
| Icône 512×512 PNG, fond transparent | `~/Downloads/sshive-icon-512.png` (générée depuis `assets/icon.svg`) |
| Captures d'écran | Reprendre celles de la fiche App Store, déjà validées par Apple |

Pour les captures, en montrer 3 à 5 : le terminal SSH, le gestionnaire SFTP, et surtout
**Réglages → MCP**, qui illustre l'argument différenciant.
AlternativeTo refuse les fiches sans capture.

---

## AlternativeTo

Formulaire : <https://alternativeto.net> → *Suggest new application*

Payer les 5 $ de revue prioritaire : sans, la file annoncée est « au moins plusieurs
mois » ; avec, 1 à 2 jours ouvrés.

### Name

```
SSHive
```

### Short Description

```
Native SSH, SFTP, RDP and VNC client for Mac, iPhone and iPad, with a built-in MCP server that lets AI assistants run commands on your servers.
```

### Website

Sans paramètres UTM, ils les refusent explicitement.

```
https://sshive.app
```

### Full Description

```
SSHive is a native remote-access client for Apple platforms. It brings the SSH terminal, an SFTP file manager, RDP remote desktop and a VNC viewer into one app on macOS, iPhone and iPadOS, so managing a server, editing a config file and taking over a Windows desktop no longer means juggling four separate tools.

The terminal is a real xterm-256color emulator with password, private-key and agent authentication, on-device key generation, known-host verification, profiles organised into folders, reusable snippets and command history. The SFTP browser handles uploads, downloads, renames and permissions, with a built-in editor that syntax-highlights remote files. RDP reaches Windows machines with NLA and Active Directory support; VNC covers macOS and Linux desktops. On iPhone and iPad a touch-optimised pointer and modifier bar make both usable without a keyboard.

What sets SSHive apart from other Mac SSH clients is a built-in MCP server. Enable it and Claude Code, Cursor or Claude Desktop can run commands and manage files on servers you are already connected to, through eleven tools covering SSH execution and full SFTP file management. It binds to 127.0.0.1 only, authenticates with a Bearer token, and exposes sessions rather than credentials: an assistant acts on a session you opened, but never sees your private keys. macOS also has an in-terminal AI assistant running on your own Anthropic, OpenAI or Google API key.

Network diagnostics are built in: ping, DNS lookup, whois, MX lookup, DNSBL blacklist checks and local interface details, with full traceroute on the macOS direct-download build.

Some capabilities are platform-specific. The MCP server, broadcast mode, remote and SOCKS5 tunnels, jump hosts and the TOTP authenticator are macOS features. The VPN client (IKEv2, IPSec, OpenVPN) is on iPhone and iPad. SSH, SFTP, RDP, VNC, local tunnels, snippets and network tools work everywhere.

There is no account and no sign-up. Passwords, passphrases and private keys live in the macOS or iOS Keychain behind Touch ID or Face ID, there is no telemetry or analytics, and no traffic leaves the device beyond the connections you open. Optional iCloud sync keeps profiles aligned through your own private CloudKit database, with secrets end-to-end encrypted; encrypted export moves them by hand instead.

The free tier is permanent, with no trial and no expiry: SSH terminal, SFTP with uploads up to 10 MB per file, two simultaneous sessions, five saved profiles, one local tunnel and three custom snippets. Pro is a one-time purchase rather than a subscription, and a Universal Purchase covering Mac, iPhone and iPad. It unlocks unlimited sessions and profiles, RDP, VNC, remote and SOCKS5 tunnels, broadcast, the MCP server, jump hosts, shared accounts and encrypted export.

Requires macOS 13 or later, iOS 17 or later, or iPadOS 17 or later. Connections import from ~/.ssh/config, PuTTY, Royal TSX and MobaXterm.
```

2 970 caracteres, sous la limite de 3 000. Ne pas y mettre de lien : c'est l'un de leurs
motifs de refus, et toute rallonge doit etre compensee ailleurs.

### Supported Languages

```
English, French, Spanish
```

### Pricing

`Freemium`, Model `Purchase` (surtout pas *Subscription*), et **ne pas cocher**
*Is Opensource*.

**Min Purchase Price** et **Max Purchase Price** : `8.99` dans les deux.

Le champ est en dollars et le prix App Store aux États-Unis est **8,99 $**, pas 9,99 $.
Le même montant des deux côtés parce qu'il n'y a qu'un seul achat Pro, pas une gamme de
paliers : une fourchette laisserait croire à plusieurs éditions.

### Tags

```
ssh-client, sftp-client, terminal, remote-desktop, vnc-client, file-transfer, ssh-tunnel, system-administration, devops, ai-assistant
```

### Platforms

```
Mac, iPhone, iPad
```

À trancher : le dépôt Electron produit des installeurs Windows (`make:win`), mais le site
ne les distribue pas. **Ne cocher Windows que si un utilisateur peut réellement télécharger
le binaire quelque part** — un modérateur qui ne le trouve pas refuse la fiche.

### Company / Author

```
NetMeSafe
```

### Note about your changes

```
Submitted by the developer. SSHive is a native SSH/SFTP/RDP/VNC client for macOS, iOS and iPadOS, published by NetMeSafe on the App Store (id6760705487). It differs from existing Mac SSH clients by shipping a local MCP server, which lets AI coding assistants operate on live SSH sessions — no other native macOS SSH client currently offers this. Happy to provide anything else needed for review.
```

---

## Variantes courtes pour les autres annuaires

### Une phrase (≤ 100 caractères)

```
Native SSH, SFTP, RDP and VNC client for Mac, iPhone and iPad, with a built-in MCP server.
```

### Deux phrases (≤ 300 caractères)

```
SSHive puts the SSH terminal, SFTP, RDP and VNC in one native app for Mac, iPhone and iPad. Its built-in MCP server lets Claude Code, Cursor and Claude Desktop run commands and manage files on servers you are already connected to. One-time purchase, no subscription, no account.
```

### Paragraphe (≤ 600 caractères)

```
SSHive is a native remote-access client for Apple platforms: SSH terminal, SFTP file manager, RDP remote desktop, VNC viewer, SSH tunnels and network diagnostics in a single app on Mac, iPhone and iPad. On macOS it ships a local MCP server, so Claude Code, Cursor and Claude Desktop can run commands and manage files on sessions you have already opened, without ever seeing your credentials. No account, no telemetry, credentials in the system Keychain behind Touch ID or Face ID. Free tier is permanent; Pro is a one-time Universal Purchase.
```

---

## Fiche produit vérifiée

À utiliser comme source unique pour toute nouvelle fiche.

**Identité** — SSHive, éditeur NetMeSafe, contact@netmesafe.com, App Store id6760705487,
site <https://sshive.app>. Logiciel propriétaire, **pas open source, aucun dépôt public**.
Nom exact sur l'App Store : « SSHive: SSH, SFTP & Terminal », sous-titre « RDP, VNC, VPN
& remote access », catégorie Developer Tools.

**Universal Purchase, un seul identifiant pour trois plateformes.** L'app Mac est un vrai
binaire natif (270 Mo, interface desktop), pas une app iPad tournant sur Mac. Piège de
vérification à connaître : l'API `itunes.apple.com/lookup?id=6760705487` ne renvoie **que**
la variante iOS (`kind: software`, `minimumOsVersion: 17.0`, captures iPhone/iPad
uniquement), la recherche `entity=macSoftware` ne la remonte pas, et la page web
`apps.apple.com` sert elle aussi la variante iOS. Les captures macOS n'apparaissent que
dans l'app Mac App Store. **Ne pas conclure de ces absences que la version Mac n'existe
pas** — elle existe.

Liens : Mac `https://apps.apple.com/app/sshive/id6760705487?mt=12`,
iPhone/iPad `https://apps.apple.com/app/sshive/id6760705487`.

**Plateformes** — macOS 13 Ventura ou ultérieur (binaire universel Apple Silicon + Intel),
iOS 17+, iPadOS 17+.

**Partout (Mac, iPhone, iPad)** — terminal SSH, SFTP, RDP (FreeRDP 3, NLA, Active
Directory), VNC (RoyalVNC), tunnels locaux `-L`, snippets, profils, outils réseau,
déverrouillage biométrique via Trousseau.

**macOS uniquement** — serveur MCP, mode broadcast, tunnels distants `-R` et SOCKS5 `-D`,
jump hosts, authenticator TOTP/HOTP, comptes partagés, journalisation de session,
assistant IA dans le terminal (clé API de l'utilisateur : Anthropic, OpenAI ou Google).

**iPhone et iPad uniquement** — client VPN (IKEv2, IPSec/Xauth, OpenVPN via
NetworkExtension).

**Serveur MCP** — `127.0.0.1:49422`, authentification Bearer token régénérable, 11 outils :
`ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file`, `sftp_write_file`,
`sftp_write_file_chunk`, `sftp_write_from_local_path`, `sftp_download_to_local_path`,
`sftp_mkdir`, `sftp_rename`, `sftp_delete`. Configure automatiquement Claude Code et
Cursor, bloc à copier pour Claude Desktop. Fonctionnalité Pro.

**Gratuit** — permanent, sans essai ni expiration : terminal SSH, SFTP (10 Mo par fichier),
2 sessions simultanées, 5 profils, 1 tunnel local, bibliothèque de snippets + 3 snippets
personnalisés, 3 jetons OTP, thème sombre.

**Pro** — achat unique, pas d'abonnement, Universal Purchase sur les trois plateformes.
Prix réels relevés dans App Store Connect : **8,99 $ aux États-Unis**, **9,99 € en zone
euro** (France, Allemagne, Italie, Espagne…), 8,99 £ au Royaume-Uni, 14,99 $ en Australie.
Certains pays facturés en USD sont à 9,99 $. **Ne jamais écrire « 9,99 $ » pour le marché
américain.**

**Confidentialité** — aucun compte, aucune inscription, aucune télémétrie. Identifiants
dans le Trousseau macOS/iOS derrière Touch ID ou Face ID. Sync iCloud optionnelle,
désactivée par défaut, via la base CloudKit privée de l'utilisateur.

**Imports** — `~/.ssh/config`, PuTTY, Royal TSX `.rtsz`, MobaXterm.ini en clair.
**Export** — fichier `.sshive` chiffré (scrypt + AES-256-GCM).

**Langues de l'app** — français, anglais, espagnol.

---

## Ne jamais affirmer

Vérifié dans le code, ces affirmations sont fausses et exposent à un avis négatif ou à
un refus de modération.

- **Traceroute sur iPhone ou iPad.** `NetworkToolsService.swift:361-398` ne trace rien :
  IP factices `10.0.<saut>.1`, latences aléatoires, arrêt sur `Bool.random()`. Le
  commentaire du code dit lui-même « placeholder ». Le traceroute réel n'existe que sur
  le build macOS en téléchargement direct — il est bloqué dans la version Mac App Store
  (sandbox Apple, pas de raw sockets ICMP). *La fiche App Store iOS actuelle l'affirme
  encore : à corriger.*
- **Broadcast sur iOS.** L'enum `GatedFeature.broadcast` existe côté licence, sans aucune
  implémentation. C'est une fonctionnalité macOS.
- **Tunnels `-R` et SOCKS5 `-D` sur iOS.** Sélectionnables dans l'UI, sans backend. Seul
  le forward local `-L` fonctionne.
- **Ping ICMP.** Ce n'est de l'ICMP véritable que sur le build macOS en téléchargement
  direct. Sur Mac App Store, Windows, iPhone et iPad, c'est une sonde TCP sur le port 80.
- **Open source, GitHub, licence MIT.** L'app est propriétaire et n'a aucun dépôt public.
- **Note ou nombre d'avis.** Apple signale un nombre d'évaluations insuffisant : tout
  chiffre serait inventé.
- **Tarifs des concurrents.** Ne jamais les citer, ils changent et engagent.
- **« 9,99 $ » pour les États-Unis.** Le prix américain est 8,99 $. Les 9,99 concernent
  l'euro. Vérifier dans App Store Connect avant d'écrire un montant.
- **Un prix barré (« au lieu de 19,99 $ »)** tant que ce tarif n'a pas réellement été
  pratiqué. Un faux prix de référence contrevient aux règles App Store et, dans l'Union
  européenne, à la directive Omnibus.

---

## Ordre de soumission

1. **AlternativeTo** — meilleur rapport effort/résultat, aucune dépendance, source la plus
   citée par les moteurs de réponse IA pour « alternative à X ».
2. **MacUpdate** — <https://www.macupdate.com/content/submit>, accepte un lien App Store.
3. **SourceForge** — <https://sourceforge.net/software/vendors/>, annuaire logiciel en
   dofollow.
4. **Annuaires MCP** — `mcp.so`, `smithery.ai`, `glama.ai`, `pulsemcp.com`.
   Nécessitent d'abord le paquet npm passerelle (le registre officiel n'accepte qu'un
   paquet installable ou un remote sur URL publique, or le serveur MCP vit dans l'app).
5. **Product Hunt** et **Show HN** — **après la 2.0.0**. L'angle « un client SSH que Claude
   pilote » repose sur l'autonomie de l'assistant ; lancer avant, c'est brûler le seul
   créneau où il est démontrable.
