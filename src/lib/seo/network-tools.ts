import type { Bilingual, QA } from './features';

export interface NetworkToolSection {
  title: Bilingual;
  body: Bilingual;
}

export type NetworkToolIcon =
  | 'Activity'
  | 'Route'
  | 'Globe'
  | 'Search'
  | 'Mail'
  | 'ShieldAlert'
  | 'Network';

export interface NetworkToolSEO {
  /** Empty string for the /network-tools hub page. */
  slug: string;
  iconName: NetworkToolIcon;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  /** Long-form opener. */
  intro: Bilingual;
  capabilities: NetworkToolSection[];
  /** Real UI steps, rendered as content and as HowTo structured data. */
  steps: NetworkToolSection[];
  /** The differentiator: how to actually read the tool's output. */
  interpret: NetworkToolSection;
  faq: QA[];
  deepDive: NetworkToolSection;
  relatedTools: string[];
}

/**
 * Every platform claim below was verified against the app sources
 * (/Users/lrusso/WebSSH-App and /Users/lrusso/WebSSH-App-iOS) and then
 * adversarially fact-checked. The engines genuinely differ per platform:
 * ping and traceroute are real ICMP on macOS (both the Mac App Store
 * build and the direct download) and on iPhone and iPad, via an
 * unprivileged datagram ICMP socket. An earlier version of this file
 * claimed the App Sandbox forbade that; it was measured and it does not.
 * The TCP-connect probe survives only as a fallback and measures real hops
 * on the macOS direct download and on Windows. Do not "simplify" these
 * distinctions away — they are what keeps the pages truthful.
 */
export const NETWORK_TOOLS: NetworkToolSEO[] = [
  {
    "slug": "",
    "iconName": "Network",
    "metaTitle": {
      "en": "Network Utility Replacement for Mac, iPhone & iPad",
      "fr": "Remplacer l'Utilitaire de réseau sur Mac et iPhone"
    },
    "metaDescription": {
      "en": "Apple removed Network Utility from macOS. SSHive is a free network utility replacement for Mac, iPhone and iPad: ping, DNS, whois, MX and DNSBL checks.",
      "fr": "Apple a retiré l'Utilitaire de réseau de macOS. SSHive le remplace sur Mac, iPhone et iPad : ping, DNS, whois, MX et listes noires DNSBL, gratuitement."
    },
    "h1": {
      "en": "The network tools Apple stopped shipping, on every Apple device you own",
      "fr": "Les outils réseau qu'Apple a retirés, sur tous vos appareils Apple"
    },
    "hero": {
      "en": "Ping, traceroute, DNS, whois, MX and DNSBL — free, native, real ICMP, on the Mac, iPhone and iPad, in the same app you SSH from.",
      "fr": "Ping, traceroute, DNS, whois, MX et DNSBL — gratuits, natifs, en vrai ICMP, sur Mac, iPhone et iPad, dans l'app d'où vous ouvrez déjà vos sessions SSH."
    },
    "intro": {
      "en": "You open Spotlight, type \"Network Utility\", and nothing comes back. That is not a broken install: the app is gone. Network Utility shipped with every Mac up to macOS Catalina 10.15, was deprecated in Big Sur 11 in June 2020 — the bundle was still sitting in /System/Library/CoreServices/Applications/ but the tabs no longer did anything — and was removed from the system entirely in Ventura 13. On a current Mac (checked here on macOS 27.0, build 26A5388g) it is in neither /System/Library/CoreServices/Applications/ nor /System/Applications/Utilities/. Apple's own support pages still describe it in the present tense, because they were never updated past the macOS 10.15 URL path.\n\nSo the everyday jobs it used to cover — is that host up, where does the path break, what does this name resolve to, who owns this domain — now mean opening Terminal. Or nothing at all, if what you are holding is an iPhone.\n\nSSHive puts those jobs back, on macOS, iPhone and iPad, inside the app you already use to SSH into the box: ping, traceroute, DNS lookup, whois, MX lookup and DNSBL blacklist checking, plus a view of your local network interfaces. All of them are free. No ads, no subscription, no account, and no Pro gate on any of them, on any platform.\n\nPing and traceroute are real ICMP everywhere — the Mac App Store build, the direct download, iPhone and iPad alike. That is unusual enough to be worth a sentence: it is widely assumed that Apple's sandbox rules it out, and it does not. A datagram ICMP socket needs no root and is permitted; only a raw socket is refused. The full mechanism is on the traceroute page.\n\nOne thing this is not: it is not a port scanner and it is not netstat. Network Utility's Port Scan and Netstat tabs have no equivalent here, and you should keep nmap and `lsof -i` for those.\n\nWhat it has that no Network Utility clone ships: the mail-side tools. And when the diagnosis points at one specific host, the SSH session is one tab away instead of one app away.",
      "fr": "Vous ouvrez Spotlight, tapez « Utilitaire de réseau », et rien ne vient. Ce n'est pas une installation abîmée : l'application a disparu. L'Utilitaire de réseau était livré avec tous les Mac jusqu'à macOS Catalina 10.15, a été déprécié dans Big Sur 11 en juin 2020 — le bundle était encore dans /System/Library/CoreServices/Applications/ mais ses onglets ne faisaient plus rien — et il a été purement et simplement retiré du système à partir de Ventura 13. Sur un Mac actuel (vérifié ici sur macOS 27.0, build 26A5388g), il n'est ni dans /System/Library/CoreServices/Applications/ ni dans /System/Applications/Utilities/. Les pages d'assistance d'Apple le décrivent encore au présent, faute d'avoir été mises à jour depuis l'URL macOS 10.15.\n\nLes tâches quotidiennes qu'il couvrait — cet hôte répond-il, où le chemin casse-t-il, vers quoi ce nom résout-il, à qui appartient ce domaine — passent donc désormais par le Terminal. Ou par rien du tout, si ce que vous avez en main est un iPhone.\n\nSSHive les remet à disposition, sur macOS, iPhone et iPad, dans l'application d'où vous ouvrez déjà vos sessions : ping, traceroute, résolution DNS, whois, MX et vérification des listes noires DNSBL, plus une vue de vos interfaces réseau locales. Tout est gratuit. Pas de publicité, pas d'abonnement, pas de compte, et aucun verrou Pro sur aucun de ces outils, sur aucune plateforme.\n\nLe ping et le traceroute sont du vrai ICMP partout — version Mac App Store, téléchargement direct, iPhone et iPad. C'est assez inhabituel pour mériter une phrase : on tient généralement pour acquis que le bac à sable d'Apple l'interdit, et c'est faux. Un socket ICMP datagramme n'exige pas les privilèges root et il est autorisé ; seul le socket brut est refusé. Le mécanisme complet est expliqué sur la page traceroute.\n\nUne chose que ce n'est pas : ni un scanner de ports, ni netstat. Les onglets Port Scan et Netstat de l'Utilitaire de réseau n'ont pas d'équivalent ici, et il faut garder nmap et `lsof -i` pour cela.\n\nCe qu'aucun clone de l'Utilitaire de réseau n'embarque, en revanche : les outils côté messagerie. Et quand le diagnostic désigne un hôte précis, la session SSH est à un onglet, pas à une application."
    },
    "capabilities": [
      {
        "title": {
          "en": "Ping — is it up, and how bad is it",
          "fr": "Ping — ça répond, et à quel prix"
        },
        "body": {
          "en": "Ten probes on the Mac, twenty on iPhone and iPad, with per-probe RTT, TTL, a loss percentage and an average. Real ICMP echo requests on every Apple build — Mac App Store, direct download, iPhone and iPad — sent from an unprivileged datagram socket rather than by shelling out. A TCP-connect probe to a port you choose is offered as well, labelled as such, for hosts that filter ICMP.",
          "fr": "Dix sondes sur Mac, vingt sur iPhone et iPad, avec le RTT de chaque sonde, son TTL, un taux de perte et une moyenne. De véritables requêtes echo ICMP sur toutes les versions Apple — Mac App Store, téléchargement direct, iPhone et iPad — émises depuis un socket datagramme non privilégié plutôt qu'en déléguant à un binaire. Une sonde TCP vers un port de votre choix est également proposée, signalée comme telle, pour les hôtes qui filtrent l'ICMP."
        }
      },
      {
        "title": {
          "en": "Traceroute — where the path actually breaks",
          "fr": "Traceroute — où le chemin casse vraiment"
        },
        "body": {
          "en": "Thirty hops, three ICMP probes each, streamed as every router answers, with a Stop button. It runs identically in the Mac App Store build, in the direct download, on iPhone and on iPad, because SSHive builds the probes itself from a datagram ICMP socket instead of driving the setuid system binary. A hop that stays silent prints as asterisks; a system that refuses ICMP outright is reported as a refusal, never as a fabricated path.",
          "fr": "Trente sauts, trois sondes ICMP par palier, diffusées à mesure que chaque routeur répond, avec un bouton Stop. Le comportement est identique dans la version Mac App Store, dans le téléchargement direct, sur iPhone et sur iPad, car SSHive fabrique lui-même les sondes depuis un socket ICMP datagramme au lieu de piloter le binaire système setuid. Un palier resté muet s'affiche en astérisques ; un système qui refuse l'ICMP est signalé comme tel, jamais par un chemin inventé."
        }
      },
      {
        "title": {
          "en": "DNS lookup — six record types at once",
          "fr": "Résolution DNS — six types d'un coup"
        },
        "body": {
          "en": "A, AAAA, MX, CNAME, NS, TXT and SOA queried in parallel against your system resolver, each one independently error-trapped so a domain with no MX still shows its A record, with the TTL of every answer.",
          "fr": "A, AAAA, MX, CNAME, NS, TXT et SOA interrogés en parallèle via le résolveur système, chaque requête protégée séparément : un domaine sans MX affiche quand même son enregistrement A, avec la durée de vie de chaque réponse."
        }
      },
      {
        "title": {
          "en": "Whois over native TCP port 43",
          "fr": "Whois en TCP natif sur le port 43"
        },
        "body": {
          "en": "A real WHOIS client, not a wrapper around somebody's web API. SSHive opens port 43 itself and follows registry referrals: up to three hops on desktop, starting from a built-in map of eighteen TLD servers; from IANA plus one referral on iPhone and iPad. Desktop parses registrar, dates, name servers, status, DNSSEC and abuse contact, and flags an expiry under 60 days.",
          "fr": "Un vrai client WHOIS, pas un habillage d'API web tierce. SSHive ouvre lui-même le port 43 et suit les renvois de registre : jusqu'à trois sauts sur le bureau, en partant d'une table interne de dix-huit serveurs de TLD ; depuis l'IANA plus un renvoi sur iPhone et iPad. Le bureau extrait registrar, dates, serveurs de noms, statuts, DNSSEC et contact abuse, et signale une expiration à moins de 60 jours."
        }
      },
      {
        "title": {
          "en": "MX and DNSBL — the pair Apple never shipped",
          "fr": "MX et DNSBL — le duo qu'Apple n'a jamais livré"
        },
        "body": {
          "en": "MX Lookup sorts exchanges by priority, resolves each one to IPv4, reverse-resolves that address and runs it through the blacklist engine, so mail routing and reputation land in one table. The standalone DNSBL check reports three verdicts rather than two — listed, clean, or no answer — so a silent zone is never counted as clean. IPv4 only.",
          "fr": "MX Lookup trie les serveurs par priorité, résout chacun en IPv4, fait le reverse DNS de l'adresse et la passe au moteur de listes noires : routage et réputation du courrier dans un seul tableau. La vérification DNSBL autonome rend trois verdicts au lieu de deux — listée, propre, ou sans réponse — pour qu'une zone muette ne soit jamais comptée comme propre. IPv4 uniquement."
        }
      },
      {
        "title": {
          "en": "Free everywhere, and honest about the gaps",
          "fr": "Gratuit partout, et franc sur les manques"
        },
        "body": {
          "en": "Every tool here is free on Mac, iPhone and iPad. None sits behind the licence check: no upgrade prompt, no ads, no account. What is missing is deliberate — no port scanner, no netstat, no finger. SSHive Pro is a separate one-time purchase (about $17.99, Universal across Mac, iPhone and iPad, no subscription) covering the remote-access side, never the diagnostics.",
          "fr": "SSHive Pro est un achat unique séparé (environ 19,99 €, Universal sur Mac, iPhone et iPad, sans abonnement) qui couvre l'accès distant, jamais le diagnostic."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open the tools tab on your Mac",
          "fr": "Ouvrez l'onglet outils sur votre Mac"
        },
        "body": {
          "en": "Click the network icon in the sidebar — its tooltip reads Network Tools — or hit the \"Network tools\" pill on the Welcome screen. Either opens a dedicated tools tab alongside your sessions, so running a diagnostic never costs you a live SSH connection.",
          "fr": "Cliquez sur l'icône réseau dans la barre latérale — son infobulle indique Network Tools — ou sur la pastille « Network tools » de l'écran d'accueil. Les deux ouvrent un onglet outils dédié à côté de vos sessions : lancer un diagnostic ne vous coûte jamais une connexion SSH ouverte."
        }
      },
      {
        "title": {
          "en": "Pick a card — everything is on one screen",
          "fr": "Choisissez une carte — tout tient sur un écran"
        },
        "body": {
          "en": "The panel is a grid of lookup cards at the top (DNS Lookup, DNSBL Check, MX Lookup and your local interfaces) with three full-width cards below it: Ping, Traceroute and Whois. Nothing is buried in a menu; every tool has its own input field and its own Run button.",
          "fr": "Le panneau présente une grille de cartes de recherche en haut (DNS Lookup, DNSBL Check, MX Lookup et vos interfaces locales) et trois cartes pleine largeur en dessous : Ping, Traceroute et Whois. Rien n'est enterré dans un menu : chaque outil a son champ de saisie et son bouton d'exécution."
        }
      },
      {
        "title": {
          "en": "On iPhone, use the Tools tab",
          "fr": "Sur iPhone, passez par l'onglet Outils"
        },
        "body": {
          "en": "Tap Tools in the bottom tab bar (the network icon). The list is split in three sections: Diagnostic — Ping, DNS Lookup, Traceroute and Whois — Email & IP — MX Lookup and Blacklist Check — and Informations, which holds Network interfaces. (The Traceroute row is a placeholder screen; see the traceroute question below.) On iPad the same list lives in the split-view sidebar, under Network tools.",
          "fr": "Touchez Outils dans la barre d'onglets du bas (l'icône réseau). La liste est coupée en trois sections : Diagnostic — Ping, DNS Lookup, Traceroute et Whois — Email & IP — MX Lookup et Blacklist Check — et Informations, qui contient les interfaces réseau. (La ligne Traceroute est un écran de démonstration ; voir la question sur le traceroute plus bas.) Sur iPad, la même liste se trouve dans la barre latérale, sous Outils réseau."
        }
      },
      {
        "title": {
          "en": "Type a target and run it",
          "fr": "Saisissez une cible et lancez"
        },
        "body": {
          "en": "Every tool takes a hostname or an IP: example.com for ping, traceroute, DNS, whois and MX; a dotted-quad IPv4 for the blacklist check, which also accepts a domain and resolves it first. Streaming runs (ping, traceroute) print as they go and can be stopped mid-flight with Stop or Cancel.",
          "fr": "Chaque outil accepte un nom d'hôte ou une IP : example.com pour ping, traceroute, DNS, whois et MX ; une IPv4 en quatre octets pour la vérification de listes noires, qui accepte aussi un domaine et le résout d'abord. Les exécutions en flux (ping, traceroute) s'affichent au fil de l'eau et s'arrêtent en cours de route avec Stop ou Annuler."
        }
      },
      {
        "title": {
          "en": "Go from diagnosis to fix without leaving the app",
          "fr": "Passez du diagnostic au correctif sans changer d'app"
        },
        "body": {
          "en": "When the output points at one host, open a session tab against it and log in. Ping shows the loss, DNS confirms the record is fine, you SSH in and restart the service — same window on the Mac, same app at 3am on a phone. That last step is the one no diagnostic-only app can do.",
          "fr": "Quand la sortie désigne une machine, ouvrez un onglet de session dessus et connectez-vous. Le ping montre la perte, le DNS confirme que l'enregistrement est bon, vous ouvrez un SSH et relancez le service — même fenêtre sur Mac, même app à 3 h du matin sur un téléphone. C'est l'étape qu'aucune app de diagnostic seule ne peut faire."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "How to read what these tools are telling you",
        "fr": "Comment lire ce que ces outils vous disent"
      },
      "body": {
        "en": "Work in this order: name, then reachability, then path, then reputation. Most incidents die at step one.\n\nPacket loss. Loss on a ping only means something if it is consistent and if the destination cares about ICMP. A router dropping 3% of echo requests while forwarding your TCP traffic at line rate is doing its job — ICMP is handled by the control plane and is the first thing rate-limited under load. What matters is loss that tracks your actual symptom, and jitter: probes at 40, 41, 39, 210, 42 ms are worse news than ten steady probes at 180 ms. Remember which engine you are on, too. ICMP is the default and measures the path itself. If you switched to the TCP engine because the host filters ICMP, total loss then means the probe was silently dropped — a firewall discarding traffic to the port you picked reads as 100% loss on a machine that is perfectly healthy. A host with nothing listening but no firewall replies with a RST, which SSHive correctly counts as reachable and marks 'port closed'.\n\nThree asterisks in a traceroute. A starred hop in the middle of an otherwise complete trace is almost never the fault. It means that router chose not to send an ICMP time-exceeded reply, or rate-limited it. A real break looks different: every hop from N onward is stars and the destination never answers. Same logic for latency — one hop at 180 ms followed by a hop at 30 ms is not a slow hop, it is a router deprioritising your probe. Only latency that rises and stays risen through the final hop is a path problem.\n\nWHOIS status codes. clientTransferProhibited is healthy: your registrar has locked the domain against unauthorised transfer. serverHold is the emergency — the registry has pulled the domain from the zone, so it will not resolve at all. redemptionPeriod and pendingDelete mean it already expired.\n\nMX priority is a preference, not a quality score: lowest number tried first, equal numbers round-robin.\n\nDNSBL hits are not equal. Read the return code (desktop also shows the TXT reason; mobile shows the code alone). A Spamhaus PBL entry only says \"this IP is a dynamic range that should not send mail directly\" — expected on a home line. UCEPROTECT level 2 — queried on iPhone and iPad only — lists a whole allocation because a neighbour spammed, and most receivers ignore it; a lone level-2 hit beside otherwise clean rows is usually noise.",
        "fr": "UCEPROTECT niveau 2 — interrogé uniquement sur iPhone et iPad — liste toute une allocation parce qu'un voisin a spammé, et la plupart des destinataires l'ignorent ; un hit niveau 2 isolé au milieu de lignes propres est généralement du bruit. Barracuda, or Spamhaus SBL/XBL, is what actually bounces your mail. And treat any result with care on a public resolver: several zones refuse those queries, answering with a 127.255.255.x code that SSHive shows as Listed even though nothing is listed, or with a DNS error that reads as not listed. Check the return code, and re-test from a network using its own recursive resolver. Et méfiez-vous de tout résultat obtenu via un résolveur public : plusieurs zones refusent ces requêtes, soit par un code 127.255.255.x que SSHive affiche en « Listé » alors que rien ne l'est, soit par une erreur DNS qui se lit comme non listé. Vérifiez le code de retour et refaites le test depuis un réseau doté de son propre résolveur récursif."
      }
    },
    "faq": [
      {
        "question": {
          "en": "Did Apple really remove Network Utility from macOS, and when?",
          "fr": "Apple a-t-il vraiment supprimé l'Utilitaire de réseau de macOS, et quand ?"
        },
        "answer": {
          "en": "Yes. It was fully functional through macOS Catalina 10.15. Big Sur 11, in June 2020, deprecated it: the bundle was still in /System/Library/CoreServices/Applications/, but the tabs no longer did anything. By Monterey 12 it was reported gone, with the `networkQuality` command line tool offered as a partial consolation. On macOS 27.0 (build 26A5388g) it is absent from both /System/Library/CoreServices/Applications/ and /System/Applications/Utilities/. Apple's support pages describing it are still online, but they are frozen at the macOS 10.15 URL path and were never updated.",
          "fr": "Oui. Elle était pleinement fonctionnelle jusqu'à macOS Catalina 10.15. Big Sur 11, en juin 2020, l'a déclarée obsolète : le bundle restait dans /System/Library/CoreServices/Applications/, mais les onglets ne faisaient plus rien. À partir de Monterey 12 elle était donnée pour disparue, avec l'outil en ligne de commande `networkQuality` en lot de consolation partiel. Sur macOS 27.0 (build 26A5388g), elle est absente de /System/Library/CoreServices/Applications/ comme de /System/Applications/Utilities/. Les pages d'assistance d'Apple qui la décrivent sont toujours en ligne, mais figées sur l'URL macOS 10.15."
        }
      },
      {
        "question": {
          "en": "Which of the six tools actually work on iPhone and iPad?",
          "fr": "Lesquels des six outils fonctionnent vraiment sur iPhone et iPad ?"
        },
        "answer": {
          "en": "All of them: ping and traceroute in real ICMP, DNS lookup, whois, MX lookup and the DNSBL blacklist check, plus the network-interfaces view. The iPhone and iPad builds run the same probe engine as the Mac, so a trace or a ping started on your phone is directly comparable with one started on your desktop — which is often exactly what you need when the question is whether the problem follows the device or the network.",
          "fr": "Tous : le ping et le traceroute en vrai ICMP, la résolution DNS, le whois, le MX et la vérification DNSBL, plus la vue des interfaces réseau. Les versions iPhone et iPad exécutent le même moteur de sondes que le Mac : une trace ou un ping lancé depuis votre téléphone est donc directement comparable à celui lancé depuis votre bureau — ce qui est précisément ce qu'il faut quand la question est de savoir si le problème suit l'appareil ou le réseau."
        }
      },
      {
        "question": {
          "en": "Is SSHive's ping a real ICMP ping?",
          "fr": "Le ping de SSHive est-il un vrai ping ICMP ?"
        },
        "answer": {
          "en": "Yes, on every Apple build — the Mac App Store version, the direct download, iPhone and iPad. SSHive opens an unprivileged datagram ICMP socket and sends genuine Echo Requests, reporting the round-trip time and TTL of each reply. The TCP-connect probe is a separate, clearly labelled mode for hosts that filter ICMP; when you use it, remember that the measured RTT includes the TCP handshake, so it reads slightly high, and that a firewalled port shows as unreachable on a machine that answers ICMP perfectly well.",
          "fr": "Oui, sur toutes les versions Apple — Mac App Store, téléchargement direct, iPhone et iPad. SSHive ouvre un socket ICMP datagramme non privilégié et envoie de véritables requêtes Echo, en rapportant le temps d'aller-retour et le TTL de chaque réponse. La sonde TCP est un mode distinct, clairement signalé, pour les hôtes qui filtrent l'ICMP ; quand vous l'utilisez, rappelez-vous que le RTT mesuré inclut la poignée de main TCP — il est donc légèrement surévalué — et qu'un port filtré fait apparaître injoignable une machine qui répond parfaitement en ICMP."
        }
      },
      {
        "question": {
          "en": "Does traceroute really work in the sandboxed Mac App Store version?",
          "fr": "Le traceroute fonctionne-t-il vraiment dans la version Mac App Store, sous bac à sable ?"
        },
        "answer": {
          "en": "Yes. A traceroute has to set the IP TTL on each outgoing probe and then read the ICMP time-exceeded replies routers send back, and the widespread belief is that this needs a raw socket the sandbox refuses. It does not: a datagram ICMP socket does both, needs no root, and is permitted. That was verified under sandbox-exec with SSHive's own entitlements before shipping. The one real requirement is that the app hold com.apple.security.network.server as well as network.client — with the client entitlement alone the replies come back EPERM, which looks exactly like a filtering network. SSHive declares both.",
          "fr": "Oui. Un traceroute doit fixer le TTL IP de chaque sonde sortante puis lire les réponses ICMP time exceeded renvoyées par les routeurs, et l'idée répandue veut que cela exige un socket brut refusé par le bac à sable. C'est faux : un socket ICMP datagramme fait les deux, n'exige pas les privilèges root, et il est autorisé. Cela a été vérifié sous sandbox-exec avec les entitlements réels de SSHive avant livraison. La seule vraie exigence est que l'application détienne com.apple.security.network.server en plus de network.client — avec le seul entitlement client, les réponses reviennent en EPERM, ce qui ressemble exactement à un réseau filtrant. SSHive déclare les deux."
        }
      },
      {
        "question": {
          "en": "Are the network tools free, or do they need Pro?",
          "fr": "Les outils réseau sont-ils gratuits, ou faut-il la version Pro ?"
        },
        "answer": {
          "en": "Free — all six, on Mac, Windows, iPhone and iPad. None of them goes through the licence check, so there is no upgrade prompt, no ad overlay before a result, and no account to create. You can install the app, run a whois and never see a paywall. SSHive Pro is a separate one-time purchase (about $17.99, Universal Purchase across Mac, iPhone and iPad, no subscription) that covers the remote-access side of the app. It does not gate the diagnostics on any platform.",
          "fr": "Gratuits — les six, sur Mac, Windows, iPhone et iPad. Aucun ne passe par la vérification de licence : pas d'invitation à l'achat, pas d'encart publicitaire avant un résultat, pas de compte à créer. Vous installez l'app, vous lancez un whois, vous ne croisez aucun mur payant. SSHive Pro est un achat unique séparé (environ 19,99 €, Universal Purchase sur Mac, iPhone et iPad, sans abonnement) qui couvre la partie accès distant. Il ne verrouille le diagnostic sur aucune plateforme."
        }
      },
      {
        "question": {
          "en": "Does SSHive send my lookups through a third-party API?",
          "fr": "SSHive fait-il passer mes requêtes par une API tierce ?"
        },
        "answer": {
          "en": "WHOIS queries open a TCP connection to port 43 on the registry or registrar server directly — the desktop build chains up to three hops (two referrals) to reach the authoritative server, the mobile build starts at IANA and follows one.\" Apply the same fix in the deepDive: \"chains up to three hops, two referrals deep, with a ten-second timeout per hop\".",
          "fr": "Les requêtes WHOIS ouvrent une connexion TCP directe vers le port 43 du serveur de registre ou de registrar — la version bureau enchaîne jusqu'à trois sauts (deux renvois) pour atteindre le serveur faisant autorité, la version mobile part de l'IANA et en suit un.\" Même correction dans le deep dive : « enchaîne jusqu'à trois sauts, soit deux renvois, avec dix secondes de délai par saut ». DNS lookups and blacklist checks use your device's own configured resolvers, with no relay in between. That matters for accuracy as much as privacy: many mobile whois apps proxy through a web service, which puts a cache and a third party between you and the registry."
        }
      },
      {
        "question": {
          "en": "Is this a complete Network Utility replacement?",
          "fr": "Est-ce un remplacement complet de l'Utilitaire de réseau ?"
        },
        "answer": {
          "en": "Not a literal one, and we would rather say so up front. Ping, Lookup, Traceroute (Mac direct download), Whois and the Info tab's interface list all have equivalents here. Port Scan and Netstat do not — use nmap and `netstat -an` or `lsof -i` in Terminal for those. Finger is a dead protocol nobody needs. In exchange you get two things Network Utility never had, and that no clone of it ships: MX lookup and DNSBL blacklist checking, on iPhone and iPad as well as the Mac.",
          "fr": "Pas au pied de la lettre, et autant le dire tout de suite. Ping, Lookup, Traceroute (Mac en téléchargement direct), Whois et la liste d'interfaces de l'onglet Infos ont tous leur équivalent ici. Le balayage de ports et Netstat, non — pour ça, gardez nmap et `netstat -an` ou `lsof -i` dans le Terminal. Finger est un protocole mort dont personne n'a besoin. En échange, vous obtenez deux choses que l'Utilitaire de réseau n'a jamais eues et qu'aucun de ses clones n'embarque : la recherche MX et la vérification DNSBL, sur iPhone et iPad autant que sur Mac."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "What the sandbox actually forbids, and what it does not",
        "fr": "Ce que le bac à sable interdit vraiment, et ce qu'il n'interdit pas"
      },
      "body": {
        "en": "Every platform difference in this section comes down to one question: what is a sandboxed app actually allowed to open.\n\nICMP has no port numbers. To send an echo request and read the reply, a process needs a socket that speaks IP protocol 1 directly, and the usual assumption is that this means a *raw* socket — root-only, and flatly refused by the App Sandbox. That assumption is what kept ping and traceroute out of many App Store apps, and it is wrong. Darwin also offers a *datagram* ICMP socket, `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)`, which any unprivileged process may open and which the sandbox permits. It is why /sbin/ping lost its setuid bit years ago, and it is what Apple's own SimplePing sample uses on iOS.\n\nSo ping and traceroute have one implementation, not several. SSHive assembles the Echo Requests itself, computes the ICMP checksum, sets IP_TTL when a trace needs it, and reads what comes back — on macOS through a small native N-API addon, on iPhone and iPad through the equivalent Swift type. Replies are matched on identifier, sequence number, source address and a random eight-byte payload cookie, because a datagram ICMP socket also receives copies of replies meant for other processes on the machine.\n\nOne requirement was found by measurement rather than documentation, and it is worth repeating because it fails silently. Under sandbox-exec with com.apple.security.network.client alone, `socket()` succeeds, `sendto()` succeeds, and `recvfrom()` returns EPERM: the probe leaves and nothing ever comes back, which is indistinguishable from a network that filters ICMP. com.apple.security.network.server is required as well. SSHive declares both, which is why the App Store build measures exactly what the direct download measures.\n\nA TCP-connect probe is still offered, but as a deliberate choice for hosts that filter ICMP rather than as a substitute: a connection to a port you name, timed from connect to socket-ready, labelled with a TCP badge. One subtlety there — a refused connection counts as a success, because an RST proves a live host answered. The port is simply closed, and the log says so.\n\nDNS, whois and DNSBL need no privilege at all, which is why they behave identically everywhere. DNS queries A, AAAA, CNAME, MX, TXT, NS and SOA in parallel, each independently error-trapped and each reported with its TTL, so a domain with no MX still shows its A record. WHOIS is a plain TCP session on port 43: send the query, terminate with CRLF, read until the server closes, following the referral chain to the registrar with a bounded timeout rather than waiting forever. A DNSBL check is an A-record lookup on the reversed octets of an IPv4 address under each zone, fanned out in parallel — and it reports three verdicts, not two. Listed, clean, or no answer: a zone that stays silent, or that returns a refusal code rather than a listing, is never counted as clean.",
          "fr": "Toutes les différences de plateforme de cette section se ramènent à une question : qu'une application en bac à sable a-t-elle réellement le droit d'ouvrir.\n\nL'ICMP n'a pas de numéros de port. Pour envoyer une requête echo et lire la réponse, un processus a besoin d'un socket qui parle directement le protocole IP 1, et l'on suppose généralement qu'il s'agit d'un socket *brut* — réservé à root, et catégoriquement refusé par le bac à sable. C'est cette supposition qui a tenu le ping et le traceroute hors de bien des applications App Store, et elle est fausse. Darwin propose aussi un socket ICMP *datagramme*, `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)`, que tout processus non privilégié peut ouvrir et que le bac à sable autorise. C'est la raison pour laquelle /sbin/ping a perdu son bit setuid il y a des années, et c'est ce qu'utilise l'exemple SimplePing d'Apple sur iOS.\n\nLe ping et le traceroute n'ont donc qu'une seule implémentation, pas plusieurs. SSHive assemble lui-même les requêtes Echo, calcule la somme de contrôle ICMP, positionne IP_TTL quand une trace le demande, et lit ce qui revient — sur macOS via un petit addon natif N-API, sur iPhone et iPad via le type Swift équivalent. Les réponses sont appariées sur l'identifiant, le numéro de séquence, l'adresse source et un cookie aléatoire de huit octets dans la charge utile, car un socket ICMP datagramme reçoit aussi une copie des réponses destinées aux autres processus de la machine.\n\nUne exigence a été découverte par la mesure plutôt que par la documentation, et elle mérite d'être répétée car elle échoue en silence. Sous sandbox-exec avec com.apple.security.network.client seul, `socket()` réussit, `sendto()` réussit, et `recvfrom()` renvoie EPERM : la sonde part et rien ne revient jamais, ce qui est indiscernable d'un réseau qui filtre l'ICMP. com.apple.security.network.server est également nécessaire. SSHive déclare les deux, et c'est pourquoi la version App Store mesure exactement ce que mesure le téléchargement direct.\n\nUne sonde TCP reste proposée, mais comme choix délibéré pour les hôtes qui filtrent l'ICMP, non comme substitut : une connexion vers un port que vous désignez, chronométrée de la demande à l'état prêt, signalée par un badge TCP. Une subtilité s'y attache — une connexion refusée compte comme une réussite, car un RST prouve qu'un hôte vivant a répondu. Le port est simplement fermé, et le journal le dit.\n\nLe DNS, le whois et le DNSBL n'exigent aucun privilège, et se comportent donc partout à l'identique. Le DNS interroge A, AAAA, CNAME, MX, TXT, NS et SOA en parallèle, chaque requête protégée séparément et chaque réponse assortie de sa durée de vie : un domaine sans MX affiche quand même son enregistrement A. Le WHOIS est une simple session TCP sur le port 43 : on envoie la requête, on termine par CRLF, on lit jusqu'à la fermeture par le serveur, en suivant la chaîne de renvois jusqu'au bureau d'enregistrement avec une attente bornée plutôt qu'infinie. Une vérification DNSBL est une résolution d'enregistrement A sur les octets inversés d'une adresse IPv4 sous chaque zone, lancées en parallèle — et elle rend trois verdicts, pas deux. Listée, propre, ou sans réponse : une zone restée muette, ou qui renvoie un code de refus plutôt qu'un signalement, n'est jamais comptée comme propre."
      }
    },
    "relatedTools": [
      "ping",
      "traceroute",
      "dns-lookup",
      "whois",
      "mx-lookup",
      "blacklist-check"
    ]
  },
  {
    "slug": "ping",
    "iconName": "Activity",
    "metaTitle": {
      "en": "Ping App for iPhone, iPad & Mac — Latency, Loss",
      "fr": "Ping sur iPhone, iPad et Mac : latence et pertes"
    },
    "metaDescription": {
      "en": "Run a real ICMP ping from iPhone, iPad or Mac without a terminal. Read latency, jitter and packet loss, and know when ICMP is simply blocked along the way.",
      "fr": "Lancez un vrai ping ICMP depuis iPhone, iPad ou Mac sans terminal. Lisez latence, gigue et pertes de paquets, et sachez quand ICMP est bloqué en chemin."
    },
    "h1": {
      "en": "Ping any host from your Mac, iPhone or iPad",
      "fr": "Envoyez un ping vers n'importe quel hôte depuis Mac, iPhone ou iPad"
    },
    "hero": {
      "en": "Ten real ICMP echo requests on Mac, iPhone and iPad alike — with the latency, packet loss and jitter you can actually act on.",
      "fr": "Dix requêtes ICMP réelles sur Mac, iPhone et iPad — et la latence, la perte et la gigue qu'il faut savoir lire."
    },
    "intro": {
      "en": "A page takes eight seconds to load, an SSH session freezes halfway through a command, a video call turns into a slideshow. Before you touch anything else, you need two numbers: how long a round trip to the host actually takes, and how many probes never came back. That is what ping gives you, and it is still the fastest way to separate \"the server is down\" from \"the path to the server is bad\".\n\nGetting those numbers on Apple hardware is harder than it should be. macOS shipped Network Utility with a Ping tab for years; it was deprecated in Big Sur, stopped working in Monterey, and is no longer present on current macOS releases. Terminal is still there, but it is an awkward detour when you are already working inside a session manager. On iPhone and iPad there is nothing to open at all: iOS exposes no shell to users, so `ping` is not a command you can run, only a capability an app has to implement.\n\nSSHive implements it natively on every Apple target it ships on: iPhone, iPad, the Mac App Store build and the direct download. All of them send genuine ICMP echo requests — ten of them — and report the round-trip time of each reply, the TTL it came back with, and how many never returned.\n\nThat is worth spelling out, because it is widely assumed to be impossible inside Apple's App Sandbox. The assumption confuses two different things. A *raw* socket does need root and the sandbox does refuse it. A *datagram* ICMP socket — `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)` — needs neither: Darwin hands it to unprivileged processes, and the sandbox permits it. It is the same mechanism Apple's own SimplePing sample code uses on iOS. SSHive opens that socket directly, so the App Store build measures exactly what the direct download measures.\n\nA TCP-connect probe against a port you choose is still available, and it is the right tool when ICMP is filtered end to end. It is a deliberate choice in the interface, not a silent substitution: the card tells you which engine produced the numbers you are reading.\n\nThe tool is free on every platform. None of SSHive's network tools sit behind a Pro licence check, and there are no ads and no account.",
      "fr": "Une page met huit secondes à s'afficher, une session SSH se fige au milieu d'une commande, un appel visio devient un diaporama. Avant de toucher à quoi que ce soit, il vous faut deux chiffres : le temps réel d'un aller-retour vers l'hôte, et le nombre de sondes qui ne sont jamais revenues. C'est exactement ce que donne le ping, et cela reste le moyen le plus rapide de distinguer « le serveur est tombé » de « le chemin vers le serveur est mauvais ».\n\nObtenir ces chiffres sur du matériel Apple est plus compliqué qu'il n'y paraît. macOS a longtemps livré l'Utilitaire de réseau et son onglet Ping ; il a été déprécié dans Big Sur, ne fonctionnait plus sous Monterey, et il est absent des versions actuelles de macOS. Le Terminal existe toujours, mais c'est un détour peu naturel quand on travaille déjà dans un gestionnaire de sessions. Sur iPhone et iPad, il n'y a tout simplement rien à ouvrir : iOS n'expose aucun shell, donc `ping` n'est pas une commande que vous pouvez lancer, seulement une capacité qu'une application doit implémenter.\n\nSSHive l'implémente nativement sur chacune de ses cibles Apple : iPhone, iPad, la version Mac App Store et le téléchargement direct. Toutes envoient de véritables requêtes echo ICMP — dix exactement — et rapportent le temps d'aller-retour de chaque réponse, le TTL avec lequel elle revient, et le nombre de sondes perdues.\n\nCela mérite d'être dit, car on tient généralement la chose pour impossible dans le bac à sable d'Apple. Cette idée confond deux objets différents. Un socket *brut* exige bien les privilèges root, et le bac à sable le refuse. Un socket ICMP *datagramme* — `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)` — n'exige ni l'un ni l'autre : Darwin l'accorde aux processus non privilégiés, et le bac à sable l'autorise. C'est le mécanisme du code d'exemple SimplePing d'Apple, celui qui tourne sur iOS. SSHive ouvre ce socket directement, si bien que la version App Store mesure exactement ce que mesure le téléchargement direct.\n\nUne sonde TCP vers un port de votre choix reste disponible, et c'est le bon outil quand l'ICMP est filtré de bout en bout. C'est un choix explicite dans l'interface, pas une substitution silencieuse : la carte vous dit quel moteur a produit les chiffres que vous lisez.\n\nL'outil est gratuit sur toutes les plateformes. Aucun des outils réseau de SSHive n'est réservé à Pro, et il n'y a ni publicité ni compte à créer."
    },
    "capabilities": [
      {
        "title": {
          "en": "Real ICMP on every Apple platform",
          "fr": "Du vrai ICMP sur toutes les plateformes Apple"
        },
        "body": {
          "en": "SSHive sends ten ICMP echo requests from an unprivileged datagram socket and streams each reply as it lands, in the familiar BSD shape — sequence number, TTL and round-trip time per line, then a closing block with packet loss and min/avg/max/stddev. The same engine runs in the Mac App Store build, in the direct download, on iPhone and on iPad, so the numbers are comparable across your devices. Replies are matched on four criteria, including a random eight-byte cookie in the payload, because a datagram ICMP socket also receives copies of other processes' replies.",
          "fr": "SSHive envoie dix requêtes echo ICMP depuis un socket datagramme non privilégié et diffuse chaque réponse à son arrivée, dans la forme BSD habituelle : numéro de séquence, TTL et temps d'aller-retour par ligne, puis un bloc final avec la perte de paquets et le min/moy/max/écart-type. Le même moteur tourne dans la version Mac App Store, dans le téléchargement direct, sur iPhone et sur iPad : les chiffres sont donc comparables d'un appareil à l'autre. L'appariement des réponses se fait sur quatre critères, dont un cookie aléatoire de huit octets dans la charge utile, car un socket ICMP datagramme reçoit aussi une copie des réponses destinées aux autres processus."
        }
      },
      {
        "title": {
          "en": "TCP-connect probing where ICMP is filtered",
          "fr": "Sonde TCP là où ICMP est filtré"
        },
        "body": {
          "en": "Plenty of hosts drop ICMP at the edge while serving traffic perfectly well, and a firewall that swallows echo requests makes a healthy server look dead. For those, SSHive can open a TCP connection to a port you name and time the handshake instead. The card labels the run with a TCP badge, so a reachability check is never mistaken for a latency measurement. It is also the automatic fallback if the native ICMP module cannot be loaded.",
          "fr": "Beaucoup d'hôtes jettent l'ICMP en bordure de réseau tout en servant parfaitement le trafic, et un pare-feu qui avale les requêtes echo fait passer un serveur en pleine santé pour un serveur mort. Pour ceux-là, SSHive peut ouvrir une connexion TCP vers un port que vous désignez et chronométrer la poignée de main. La carte signale la série par un badge TCP, pour qu'un test de joignabilité ne soit jamais pris pour une mesure de latence. C'est aussi le repli automatique si le module ICMP natif ne peut pas être chargé."
        }
      },
      {
        "title": {
          "en": "A refused connection still counts as reachable",
          "fr": "Une connexion refusée compte comme joignable"
        },
        "body": {
          "en": "When you deliberately pick the TCP engine, a reset is proof of life: the host received your SYN and answered it. SSHive counts a refused connection as a successful probe and annotates the line as a closed port rather than marking it lost. That distinction stops you from reporting a firewall policy as an outage when the machine is up and simply is not listening on the port you chose.",
          "fr": "Quand vous choisissez délibérément le moteur TCP, un reset est une preuve de vie : l'hôte a reçu votre SYN et y a répondu. SSHive compte une connexion refusée comme une sonde réussie et annote la ligne « port fermé » au lieu de la marquer perdue. Cette nuance vous évite de déclarer une panne alors que la machine tourne et n'écoute simplement pas sur le port que vous avez choisi."
        }
      },
      {
        "title": {
          "en": "Readable results on iPhone and iPad",
          "fr": "Des résultats lisibles sur iPhone et iPad"
        },
        "body": {
          "en": "The iOS and iPadOS view is not a log dump. Four stat cards show sent, received, loss percentage and average RTT; a bar chart plots every probe in order, successes green and failures red, so a burst of loss or a rising latency trend is visible at a glance. Below it, each probe is listed newest-first with its sequence number and RTT.",
          "fr": "La vue iOS et iPadOS n'est pas un vidage de log. Quatre cartes affichent les envoyés, les reçus, le pourcentage de perte et le RTT moyen ; un graphique en barres trace chaque sonde dans l'ordre, réussites en vert et échecs en rouge, pour repérer d'un coup d'œil une rafale de pertes ou une latence qui grimpe. Dessous, chaque sonde est listée de la plus récente à la plus ancienne, avec son numéro et son RTT."
        }
      },
      {
        "title": {
          "en": "Streaming runs you can stop",
          "fr": "Des tests en direct, interruptibles"
        },
        "body": {
          "en": "Desktop output arrives line by line while the run is still in progress, with a Running pill in the card header and auto-scroll on the log pane. Stop cancels immediately instead of waiting out the remaining probes — useful when a host is timing out and each probe costs three seconds. On iPhone and iPad a toolbar button clears the previous run's results.",
          "fr": "Sur ordinateur, la sortie arrive ligne par ligne pendant l'exécution, avec une pastille Running dans l'en-tête et un défilement automatique du volet de log. Stop annule immédiatement au lieu d'attendre les sondes restantes — pratique quand un hôte ne répond pas et que chaque sonde coûte trois secondes. Sur iPhone et iPad, un bouton de la barre d'outils efface les résultats précédents."
        }
      },
      {
        "title": {
          "en": "Free on every platform",
          "fr": "Gratuit sur toutes les plateformes"
        },
        "body": {
          "en": "Ping is not a Pro feature anywhere. None of SSHive's six network tools sit behind the licence check on Mac, Windows, iPhone or iPad — they run in the free tier, with no ads and no account to create. SSHive Pro is a separate one-time purchase that lifts the free-tier limits and unlocks RDP and VNC sessions, remote tunnels, broadcast and the rest — not the diagnostics.",
          "fr": "Ping n'est une fonction Pro sur aucune plateforme. Aucun des six outils réseau de SSHive n'est soumis à la vérification de licence sur Mac, Windows, iPhone ou iPad : ils tournent dans la version gratuite, sans publicité et sans compte à créer. SSHive Pro est un achat unique distinct qui couvre les sessions SSH, RDP et VNC, les profils et les tunnels, pas les diagnostics."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open Network Tools on Mac or Windows",
          "fr": "Ouvrez les outils réseau sur Mac ou Windows"
        },
        "body": {
          "en": "In the macOS or Windows app, click the network icon in the left sidebar — its tooltip reads Network Tools — or click the Network tools pill on the Welcome screen. Either opens a dedicated Tools tab alongside your sessions, holding the whole diagnostics panel. Ping is the first of the three full-width cards at the bottom of that panel.",
          "fr": "Dans l'application macOS ou Windows, cliquez sur l'icône réseau de la barre latérale gauche — son infobulle indique Network Tools — ou sur la pastille « Outils réseau » de l'écran d'accueil. L'un comme l'autre ouvre un onglet Outils dédié à côté de vos sessions, avec les six diagnostics. Ping est la première des trois cartes pleine largeur, en bas du panneau."
        }
      },
      {
        "title": {
          "en": "Or open the Tools tab on iPhone and iPad",
          "fr": "Ou ouvrez l'onglet Outils sur iPhone et iPad"
        },
        "body": {
          "en": "On iPhone, tap Tools in the bottom tab bar — the network icon — then choose Ping, the first row of the Diagnostic section. On iPad, open Network tools in the split-view sidebar and pick Ping from the same list. The tool behaves identically on both; only the navigation layout differs.",
          "fr": "Sur iPhone, touchez Outils dans la barre d'onglets du bas — l'icône réseau — puis choisissez Ping, première ligne de la section Diagnostic. Sur iPad, ouvrez « Outils réseau » dans la barre latérale et sélectionnez Ping dans la même liste. L'outil se comporte de façon identique ; seule la navigation change."
        }
      },
      {
        "title": {
          "en": "Enter the host to probe",
          "fr": "Saisissez l'hôte à tester"
        },
        "body": {
          "en": "Type a hostname or an IP address into the field — the placeholder suggests something like google.com. ICMP is the default and needs no port. If you switch to the TCP engine because the host filters ICMP, that is when the port matters: pick one you expect the host to be listening on.",
          "fr": "Saisissez un nom d'hôte ou une adresse IP dans le champ — le texte indicatif propose par exemple google.com. L'ICMP est le mode par défaut et ne demande aucun port. Si vous basculez sur le moteur TCP parce que l'hôte filtre l'ICMP, c'est là que le port compte : choisissez-en un sur lequel l'hôte est censé écouter."
        }
      },
      {
        "title": {
          "en": "Run the test and watch it stream",
          "fr": "Lancez le test et suivez-le en direct"
        },
        "body": {
          "en": "Press Ping on desktop, or start the run on iOS. The desktop log fills line by line in a monospace, auto-scrolling pane while a Running pill shows in the header; Stop cancels on the spot. On iPhone and iPad the four stat cards and the RTT bar chart update probe by probe as the twenty results arrive.",
          "fr": "Appuyez sur Ping sur ordinateur, ou lancez le test sur iOS. Le log se remplit ligne par ligne dans un volet monospace à défilement automatique, avec une pastille Running dans l'en-tête ; Stop interrompt sur-le-champ. Sur iPhone et iPad, les quatre cartes de statistiques et le graphique de RTT se mettent à jour sonde après sonde, au fil des vingt résultats."
        }
      },
      {
        "title": {
          "en": "Read the summary",
          "fr": "Lisez le récapitulatif"
        },
        "body": {
          "en": "Read the closing statistics block: packets transmitted and received, loss percentage, and round-trip min/avg/max/stddev. On the TCP engine the same four figures appear, minus the standard deviation. On iPhone and iPad they sit in the Sent, Received, Loss and Average cards above the per-probe list.",
          "fr": "Lisez le bloc de statistiques final : paquets transmis et reçus, pourcentage de perte, et aller-retour min/moy/max/écart-type. Sur le moteur TCP, on retrouve les mêmes quatre chiffres, sans l'écart-type. Sur iPhone et iPad, ils figurent dans les cartes Envoyés, Reçus, Perte et Moyenne, au-dessus de la liste des sondes."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "How to read a ping result without fooling yourself",
        "fr": "Lire une sortie de ping sans se tromper"
      },
      "body": {
        "en": "Start with the spread, not the average. A run reporting min/avg/max of 24/26/28 ms describes a healthy path. One reporting 24/58/410 ms has the same floor but is queueing badly somewhere, and the average hides it. The statistics line gives you a fourth number, stddev — that is your jitter figure. A few milliseconds is fine; a standard deviation approaching or exceeding the mean means the path is unstable, and anything real-time (VoIP, remote desktop, interactive SSH typing) will feel bad even while bulk downloads still complete normally.\n\nPacket loss needs context, and the percentage alone is nearly useless. Look at the icmp_seq values or the probe order to see the shape of it. Ten probes with one gap scattered in the middle is 10% on paper, but it is usually a single ICMP packet deprioritised by a router that had better things to do; TCP retransmits it and you never notice. Ten probes where numbers 4, 5, 6 and 7 vanish in a row is a different animal — a link flap, a re-route, or a Wi-Fi roam — and it will visibly stall an interactive session. On Wi-Fi and cellular, occasional isolated loss is routine. Sustained loss on a wired path is a fault worth chasing.\n\nRead the ttl field too. Hosts start at 64 (Linux, BSD, macOS), 128 (Windows) or 255 (many network appliances), and every router decrements it by one. A reply with ttl=52 came from something that started at 64 and crossed twelve hops: a quick sanity check that you are talking to the machine you think you are, and a hint about which OS family answered.\n\nThe first probe is often the slowest. Blame ARP or neighbour discovery, DNS resolution and a cold route cache — not the server. Judge the run from the second probe onward.\n\nFinally, do not read 100% loss as \"down\". Plenty of hosts, CDNs and edge networks drop ICMP echo by policy. And on the TCP engine the semantics change completely: you are timing a three-way handshake to port 80, so every value carries connection-setup cost on top of the true network round trip, and a host that simply is not listening on 80 reports total loss while being perfectly healthy. A closed-port annotation is the good outcome — it means the host answered with a reset.",
        "fr": "Commencez par l'écart, pas par la moyenne. Un test qui affiche min/moy/max à 24/26/28 ms décrit un chemin sain. Un test à 24/58/410 ms a le même plancher mais met en file d'attente quelque part, et la moyenne le masque. La ligne de statistiques ajoute un quatrième chiffre, l'écart-type : c'est votre mesure de gigue. Quelques millisecondes, c'est normal ; un écart-type qui approche ou dépasse la moyenne signale un chemin instable, et tout ce qui est temps réel (VoIP, bureau à distance, frappe interactive en SSH) sera désagréable même si les téléchargements passent encore correctement.\n\nLa perte de paquets demande du contexte : le pourcentage seul ne vaut presque rien. Regardez les valeurs icmp_seq ou l'ordre des sondes pour en voir la forme. Dix sondes avec un trou isolé au milieu, cela fait 10 % sur le papier, mais c'est en général un paquet ICMP déprioritisé par un routeur occupé ailleurs ; TCP le retransmet et vous ne voyez rien. Dix sondes où les numéros 4, 5, 6 et 7 disparaissent d'affilée, c'est tout autre chose — coupure de lien, reroutage ou changement de borne Wi-Fi — et la session interactive le ressentira nettement. En Wi-Fi et en cellulaire, une perte isolée occasionnelle est banale. Une perte soutenue sur un lien filaire mérite une enquête.\n\nLisez aussi le champ ttl. Les hôtes partent de 64 (Linux, BSD, macOS), 128 (Windows) ou 255 (beaucoup d'équipements réseau), et chaque routeur le décrémente de un. Une réponse avec ttl=52 vient d'une machine partie de 64 et a traversé douze sauts : vérification rapide que vous parlez bien à la bonne machine, et indice sur la famille d'OS qui a répondu.\n\nLa première sonde est souvent la plus lente. Mettez cela sur le compte d'ARP ou de la découverte de voisins, de la résolution DNS et d'un cache de route froid, pas du serveur. Jugez le test à partir de la deuxième sonde.\n\nEnfin, ne lisez pas 100 % de perte comme « hôte en panne ». Beaucoup d'hôtes, de CDN et de réseaux de bordure jettent l'echo ICMP par politique. Et sur le moteur TCP, la sémantique change complètement : vous chronométrez une poignée de main en trois temps vers le port 80, donc chaque valeur intègre le coût d'établissement de connexion en plus du véritable aller-retour réseau, et un hôte qui n'écoute simplement pas sur le port 80 affichera 100 % de perte tout en se portant très bien. L'annotation « port fermé » est la bonne nouvelle : elle signifie que l'hôte a répondu par un reset."
      }
    },
    "faq": [
      {
        "question": {
          "en": "Can you actually ping from an iPhone?",
          "fr": "Peut-on vraiment faire un ping depuis un iPhone ?"
        },
        "answer": {
          "en": "Yes, with real ICMP. iOS ships no terminal and no user-accessible ping command, and Network.framework — Apple's high-level networking API — has no ICMP transport, which is why many iOS apps quietly substitute a TCP handshake. SSHive drops below that API to a BSD datagram socket, `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)`, the same one Apple's own SimplePing sample uses. It needs no jailbreak and no special entitlement, and it sends genuine Echo Requests. A TCP probe is still offered for hosts that filter ICMP, clearly labelled as such.",
          "fr": "Oui, avec du vrai ICMP. iOS ne fournit ni terminal ni commande ping accessible, et Network.framework — l'API réseau de haut niveau d'Apple — n'expose aucun transport ICMP, ce qui pousse beaucoup d'applications iOS à substituer discrètement une poignée de main TCP. SSHive descend sous cette API jusqu'à un socket BSD datagramme, `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)`, celui-là même qu'utilise l'exemple SimplePing d'Apple. Il ne demande ni jailbreak ni entitlement particulier, et il envoie de véritables requêtes Echo. Une sonde TCP reste proposée pour les hôtes qui filtrent l'ICMP, clairement signalée comme telle."
        }
      },
      {
        "question": {
          "en": "Does SSHive send real ICMP packets?",
          "fr": "SSHive envoie-t-il de vrais paquets ICMP ?"
        },
        "answer": {
          "en": "On every Apple build: the Mac App Store version, the direct download, iPhone and iPad all send genuine ICMP Echo Requests and read the Echo Replies, ten probes by default, with per-reply TTL and round-trip time. There is no second-class build. The TCP-connect probe still exists, but as an explicit choice for hosts that filter ICMP — and when it runs, the card carries a TCP badge so a reachability check is never mistaken for a latency measurement.",
          "fr": "Sur toutes les versions Apple : la version Mac App Store, le téléchargement direct, l'iPhone et l'iPad envoient de véritables requêtes Echo ICMP et lisent les réponses Echo, dix sondes par défaut, avec le TTL et le temps d'aller-retour de chaque réponse. Il n'y a pas de version au rabais. La sonde TCP existe toujours, mais comme choix explicite pour les hôtes qui filtrent l'ICMP — et quand elle tourne, la carte porte un badge TCP, pour qu'un test de joignabilité ne soit jamais pris pour une mesure de latence."
        }
      },
      {
        "question": {
          "en": "A site works in my browser but ping shows 100% packet loss. Why?",
          "fr": "Un site marche dans mon navigateur mais le ping affiche 100 % de perte. Pourquoi ?"
        },
        "answer": {
          "en": "Two common causes. First, many hosts, CDNs and edge firewalls drop ICMP echo by policy — the server is fine, it simply refuses to answer that probe type. That is exactly when to switch to the TCP engine and aim at a port the host really serves. Second, if you are already on the TCP engine, check the port: a host that only serves HTTPS on 443 reports total loss on port 80 while being perfectly healthy. Cross-check with a DNS lookup to confirm you are testing the address the browser actually reaches before concluding anything is down.",
          "fr": "Deux causes fréquentes. D'abord, beaucoup d'hôtes, de CDN et de pare-feux de bordure jettent l'echo ICMP par politique : le serveur va bien, il refuse simplement de répondre à ce type de sonde. C'est précisément le moment de basculer sur le moteur TCP et de viser un port réellement servi. Ensuite, si vous êtes déjà sur le moteur TCP, vérifiez le port : un hôte qui ne sert que du HTTPS sur 443 affichera 100 % de perte sur le port 80 en étant parfaitement sain. Vérifiez avec un DNS lookup que vous testez bien l'adresse que le navigateur atteint avant de conclure à une panne."
        }
      },
      {
        "question": {
          "en": "Why can't I change the port, the probe count or the packet size?",
          "fr": "Pourquoi ne peut-on pas changer le port, le nombre de sondes ou la taille des paquets ?"
        },
        "answer": {
          "en": "Mostly not. You choose the engine (ICMP or TCP) and, on the TCP engine, the port. Beyond that the run is fixed: ten probes on the Mac, twenty on iPhone and iPad, with no packet-size, interval or count settings. IPv6 destinations are handled automatically rather than through a separate mode. If you need arbitrary flags on a Mac, Terminal is still there — SSHive's Ping is built to give a fast, honest answer, not to replicate every option of the CLI.",
          "fr": "Pas vraiment. Vous choisissez le moteur (ICMP ou TCP) et, sur le moteur TCP, le port. Au-delà, la série est figée : dix sondes sur Mac, vingt sur iPhone et iPad, sans réglage de taille de paquet, d'intervalle ni de nombre. Les destinations IPv6 sont prises en charge automatiquement plutôt que par un mode distinct. Si vous avez besoin d'options arbitraires sur Mac, le Terminal est toujours là — le Ping de SSHive vise une réponse rapide et honnête, pas la réplication complète de la CLI."
        }
      },
      {
        "question": {
          "en": "Why are SSHive's latency numbers higher than ping in Terminal?",
          "fr": "Pourquoi les latences de SSHive sont-elles plus hautes que celles du ping du Terminal ?"
        },
        "answer": {
          "en": "Because on the TCP engine you are not measuring the same thing. An ICMP echo is answered by the target's network stack almost immediately. A TCP probe has to complete a three-way handshake, and the target's listener backlog, the OS scheduler and any middlebox on the path all add to it. Expect TCP-connect values to sit above the equivalent ICMP round trip for the same host. Compare a host against itself over time rather than comparing one engine to the other.",
          "fr": "Parce que sur le moteur TCP vous ne mesurez pas la même chose. Un echo ICMP est traité presque immédiatement par la pile réseau de la cible. Une sonde TCP doit achever une poignée de main en trois temps, et la file d'attente du service visé, l'ordonnanceur du système et le moindre équipement intermédiaire s'y ajoutent. Attendez-vous à des valeurs TCP supérieures à l'aller-retour ICMP équivalent pour le même hôte. Comparez un hôte à lui-même dans le temps, pas un moteur à l'autre."
        }
      },
      {
        "question": {
          "en": "How much packet loss is actually a problem?",
          "fr": "À partir de quel taux la perte de paquets devient-elle un problème ?"
        },
        "answer": {
          "en": "The pattern matters more than the percentage. Isolated single losses on Wi-Fi or cellular are routine and TCP retransmits them invisibly. Several consecutive losses point to a link flap, a re-route or a Wi-Fi roam and will visibly stall interactive sessions. Sustained loss on a wired path is worth investigating. And loss measured only against the ping target, while throughput elsewhere stays normal, usually means ICMP rate-limiting on that host rather than a real network fault.",
          "fr": "La forme compte plus que le pourcentage. Des pertes isolées en Wi-Fi ou en cellulaire sont banales, TCP les retransmet sans que vous le voyiez. Plusieurs pertes consécutives évoquent une coupure de lien, un reroutage ou un changement de borne, et bloqueront visiblement une session interactive. Une perte soutenue sur un lien filaire mérite une investigation. Et une perte constatée uniquement sur la cible du ping, alors que le débit reste normal ailleurs, traduit le plus souvent une limitation de débit ICMP sur cet hôte, pas une vraie panne réseau."
        }
      },
      {
        "question": {
          "en": "Is the Ping tool free, or part of Pro?",
          "fr": "L'outil Ping est-il gratuit ou réservé à Pro ?"
        },
        "answer": {
          "en": "Free, on every platform. None of SSHive's six network tools — ping, traceroute, DNS lookup, whois, MX lookup and DNSBL check — sit behind a licence check on Mac, Windows, iPhone or iPad. SSHive Pro is a separate one-time purchase (around 17.99 USD, Universal across Mac, iPhone and iPad, no subscription and no account) that unlocks SSH, RDP and VNC sessions, profiles, tunnels and related features. The diagnostics run in the free tier, with no ads.",
          "fr": "Gratuit, sur toutes les plateformes. Aucun des six outils réseau de SSHive — ping, traceroute, DNS lookup, whois, MX lookup et vérification DNSBL — n'est soumis à une vérification de licence sur Mac, Windows, iPhone ou iPad. SSHive Pro est un achat unique distinct (environ 19,99 €, Universal sur Mac, iPhone et iPad, sans abonnement ni compte) qui débloque les sessions SSH, RDP et VNC, les profils, les tunnels et les fonctions associées. Les diagnostics tournent dans la version gratuite, sans publicité."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "Why ICMP is a privilege, and what SSHive does instead",
        "fr": "Pourquoi ICMP est un privilège, et ce que SSHive fait à la place"
      },
      "body": {
        "en": "Ping is not one thing. The classic tool sends an ICMP Echo Request (type 8) and waits for an Echo Reply (type 0), matching them by identifier and sequence number and subtracting timestamps. ICMP has no ports and no ordinary sockets; to emit one you need either a raw socket or, on Darwin, a datagram ICMP socket (SOCK_DGRAM with IPPROTO_ICMP). Historically that meant root. On modern macOS the setuid bit is gone from /sbin/ping — Darwin lets any process open an unprivileged datagram ICMP socket (SOCK_DGRAM with IPPROTO_ICMP), which is exactly what the system ping binary uses. /usr/sbin/traceroute, by contrast, is still installed setuid root.\n\nThe received wisdom is that Apple's App Sandbox forbids all of this. It does not, and the distinction is worth getting right. A sandboxed Mac App Store application holds com.apple.security.network.client, which authorises outbound TCP and UDP. A *raw* socket is genuinely refused, and so is spawning a setuid helper. A *datagram* ICMP socket is a different object, and the sandbox lets it through.\n\nThat was measured rather than assumed, under sandbox-exec with the app's real entitlements, and the result contains a trap. With network.client alone, socket() succeeds and sendto() succeeds — but recvfrom() returns EPERM. The probe leaves and never comes back, which looks exactly like a network that filters ICMP and debugs miserably. Both network.client and network.server are required for the full cycle. SSHive declares both, which is why ping behaves identically inside and outside the sandbox.\n\niOS looks stricter and, at the level most apps work, it is: Network.framework exposes TCP, UDP, QUIC and TLS, and has no ICMP transport whatsoever. That is why so many iOS apps advertising a \"ping\" are quietly timing a TCP handshake. But Network.framework is not the floor. The BSD socket layer underneath it is still present and still permitted, and socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP) is precisely what Apple's own SimplePing sample opens. SSHive opens it too, with IPPROTO_ICMPV6 for IPv6 destinations.\n\nSo there is one behaviour to learn, not four. On macOS the work happens in a small native N-API addon; on iPhone and iPad in a Swift type built on the same socket. Both assemble the Echo Request themselves, compute the ICMP checksum, and set IP_TTL when a traceroute needs it. Both match replies on four criteria — identifier, sequence number, source address, and a random eight-byte cookie carried in the payload — because a datagram ICMP socket receives a copy of every ICMP reply the machine gets, including replies meant for other processes. Two simultaneous runs against different hosts do not contaminate each other.\n\nThe TCP-connect probe has not disappeared; it has been demoted to what it always should have been. Plenty of hosts drop ICMP at the edge while serving traffic perfectly, and for those a handshake against a port you name is the honest measurement. It is offered as a deliberate choice, labelled with a TCP badge, and used automatically only if the native ICMP module fails to load. Its trade-offs stand: latency includes handshake cost, so the figures run higher than a true ICMP round trip against the same host, and a host that answers ICMP but drops your chosen port reads as total loss.",
        "fr": "Le ping n'est pas une chose unique. L'outil classique envoie une requête ICMP Echo (type 8) et attend une réponse Echo (type 0), les apparie par identifiant et numéro de séquence, puis soustrait les horodatages. ICMP n'a ni ports ni sockets ordinaires ; pour en émettre un, il faut soit un socket brut, soit, sur Darwin, un socket ICMP datagramme (SOCK_DGRAM avec IPPROTO_ICMP). Historiquement, cela voulait dire root. Sur macOS moderne, le bit setuid a disparu de /sbin/ping : Darwin autorise n'importe quel processus à ouvrir un socket ICMP datagramme non privilégié (SOCK_DGRAM avec IPPROTO_ICMP), et c'est ce qu'utilise le binaire système. /usr/sbin/traceroute, lui, reste installé setuid root.\n\nL'idée reçue veut que le bac à sable d'Apple interdise tout cela. C'est faux, et la nuance mérite d'être posée. Une application Mac App Store sandboxée détient com.apple.security.network.client, qui autorise le TCP et l'UDP sortants. Un socket *brut* est effectivement refusé, et lancer un binaire setuid également. Un socket ICMP *datagramme* est un objet différent, et le bac à sable le laisse passer.\n\nCela a été mesuré plutôt que supposé, sous sandbox-exec avec les entitlements réels de l'application, et le résultat recèle un piège. Avec network.client seul, socket() réussit et sendto() réussit — mais recvfrom() renvoie EPERM. La sonde part et ne revient jamais, ce qui ressemble exactement à un réseau qui filtre l'ICMP et se débogue très mal. Il faut network.client *et* network.server pour que le cycle complet fonctionne. SSHive déclare les deux, et c'est la raison pour laquelle le ping se comporte de façon identique dans et hors du bac à sable.\n\niOS paraît plus strict et, au niveau où travaillent la plupart des applications, il l'est : Network.framework expose TCP, UDP, QUIC et TLS, et n'offre aucun transport ICMP. D'où le nombre d'applications iOS annonçant un « ping » qui chronomètrent en réalité une poignée de main TCP. Mais Network.framework n'est pas le plancher. La couche de sockets BSD qui se trouve dessous est toujours présente et toujours autorisée, et socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP) est exactement ce qu'ouvre l'exemple SimplePing d'Apple. SSHive l'ouvre aussi, avec IPPROTO_ICMPV6 pour les destinations IPv6.\n\nIl n'y a donc qu'un seul comportement à connaître, pas quatre. Sur macOS le travail se fait dans un petit addon natif N-API ; sur iPhone et iPad dans un type Swift bâti sur le même socket. Les deux assemblent eux-mêmes la requête Echo, calculent la somme de contrôle ICMP et positionnent IP_TTL quand un traceroute le demande. Les deux apparient les réponses sur quatre critères — identifiant, numéro de séquence, adresse source et un cookie aléatoire de huit octets placé dans la charge utile — car un socket ICMP datagramme reçoit une copie de toutes les réponses ICMP de la machine, y compris celles destinées aux autres processus. Deux séries simultanées vers des hôtes différents ne se contaminent pas.\n\nLa sonde TCP n'a pas disparu : elle a été ramenée au rôle qui aurait toujours dû être le sien. Beaucoup d'hôtes jettent l'ICMP en bordure tout en servant parfaitement le trafic, et pour ceux-là une poignée de main vers un port que vous désignez est la mesure honnête. Elle est proposée comme choix délibéré, signalée par un badge TCP, et utilisée automatiquement seulement si le module ICMP natif ne se charge pas. Ses compromis demeurent : la latence inclut le coût de la poignée de main, donc les chiffres dépassent un véritable aller-retour ICMP vers le même hôte, et un hôte qui répond en ICMP mais filtre le port choisi s'affiche à 100 % de perte."
      }
    },
    "relatedTools": [
      "traceroute",
      "dns-lookup"
    ]
  },
  {
    "slug": "traceroute",
    "iconName": "Route",
    "metaTitle": {
      "en": "Traceroute for Mac: Hop-by-Hop Network Path Tool",
      "fr": "Traceroute sur Mac : lire le chemin saut par saut"
    },
    "metaDescription": {
      "en": "Run a real traceroute on Mac, iPhone and iPad with SSHive, and learn to read it: TTL mechanics, asterisk hops, latency spikes and where a route really breaks.",
      "fr": "Lancez un vrai traceroute sur Mac, iPhone et iPad avec SSHive et apprenez à le lire : TTL, sauts en astérisques, pics de latence, rupture réelle."
    },
    "h1": {
      "en": "Trace the route hop by hop, and find where it actually breaks",
      "fr": "Suivez la route saut par saut et trouvez où elle casse vraiment"
    },
    "hero": {
      "en": "A real ICMP traceroute on Mac, iPhone and iPad, streamed hop by hop — plus the part nobody explains: how to read what comes back.",
      "fr": "Un vrai traceroute ICMP sur Mac, iPhone et iPad, diffusé saut par saut — et surtout : comment lire ce qui revient."
    },
    "intro": {
      "en": "A service is slow or unreachable and nothing on your side explains it. DNS resolves, the server answers locally, your link is clean. What you cannot see is the fifteen or twenty routers between your machine and that host, and that is usually where the answer is.\n\nTraceroute is the tool that makes those routers visible. It does not measure your connection to a server; it reconstructs the sequence of hops your packets take to reach it and how long each one takes to answer. Read properly, it tells you whether a problem is yours, your ISP's, a transit provider's or the destination's — the difference between fixing something and opening a ticket with the right party.\n\nRead carelessly, it produces more wrong conclusions than any other network tool. A hop full of asterisks looks like a dead router and almost never is. A 300 ms spike in the middle of the path looks alarming when it is usually a router deprioritising your probe while forwarding production traffic without a hiccup. Reading a traceroute is mostly about knowing which lines are measurements and which lines are noise.\n\nSSHive measures a real traceroute on every Apple platform it ships on: the Mac App Store build, the direct download, iPhone and iPad. It sends its own ICMP probes, one TTL value at a time, three probes per hop, up to thirty hops, and streams each router's address and timings back as they arrive. Nothing is reformatted and nothing is invented.\n\nThat is worth saying plainly, because an earlier version of this page said the opposite. The claim was that a sandboxed App Store app cannot traceroute, since it would need raw ICMP sockets. It was never measured, and it is wrong: setting IP_TTL and reading the Time Exceeded replies works from an ordinary *datagram* ICMP socket, which needs no root and which the App Sandbox permits. Everything below explains the mechanism, and how to read the output.",
      "fr": "Un service répond mal ou plus du tout, et rien de votre côté ne l'explique. Le DNS résout, le serveur tourne, votre lien local est propre. Ce que vous ne voyez pas, ce sont les quinze ou vingt routeurs situés entre votre machine et cet hôte — et c'est là que se trouve généralement la réponse.\n\nTraceroute est l'outil qui rend ces routeurs visibles. Il ne mesure pas votre connexion à un serveur : il reconstitue la suite des sauts que vos paquets empruntent pour l'atteindre, et le temps que chacun met à répondre. Bien lu, il vous dit si le problème vient de vous, de votre opérateur, d'un transitaire ou de la destination — autrement dit s'il faut corriger quelque chose ou ouvrir un ticket, et chez qui.\n\nMal lu, il produit plus de fausses conclusions que n'importe quel autre outil réseau. Un saut rempli d'astérisques ressemble à un routeur mort et ne l'est presque jamais. Un pic à 300 ms au milieu du chemin paraît inquiétant alors qu'il s'agit le plus souvent d'un routeur qui déprioritise votre sonde tout en acheminant le trafic réel sans faiblir. Lire un traceroute, c'est surtout savoir quelles lignes sont des mesures et quelles lignes sont du bruit.\n\nSSHive mesure un vrai traceroute sur chacune de ses plateformes Apple : la version Mac App Store, le téléchargement direct, l'iPhone et l'iPad. Il émet ses propres sondes ICMP, une valeur de TTL à la fois, trois sondes par palier, jusqu'à trente sauts, et diffuse l'adresse de chaque routeur et ses temps de réponse à mesure qu'ils arrivent. Rien n'est reformaté, rien n'est inventé.\n\nCela mérite d'être dit clairement, car une version antérieure de cette page affirmait l'inverse. Elle soutenait qu'une application App Store en bac à sable ne peut pas faire de traceroute, faute de sockets ICMP bruts. L'affirmation n'avait jamais été mesurée, et elle est fausse : positionner IP_TTL et lire les réponses Time Exceeded fonctionne depuis un socket ICMP *datagramme* ordinaire, qui n'exige pas les privilèges root et que le bac à sable autorise. La suite explique le mécanisme, et comment lire la sortie."
    },
    "capabilities": [
      {
        "title": {
          "en": "The system traceroute, not a re-implementation",
          "fr": "Le traceroute du système, pas une réécriture"
        },
        "body": {
          "en": "SSHive builds the probes itself rather than shelling out, so the same engine runs in the Mac App Store build, in the direct download, on iPhone and on iPad. One TTL value per hop, three probes each, up to thirty hops, with the router's address and its three round-trip times on every line. Nothing is synthesised and no third-party service sits in the middle — the packets leave your device and the replies come back to it.",
          "fr": "SSHive fabrique lui-même les sondes plutôt que de déléguer à un binaire, si bien que le même moteur tourne dans la version Mac App Store, dans le téléchargement direct, sur iPhone et sur iPad. Une valeur de TTL par palier, trois sondes chacune, jusqu'à trente sauts, avec l'adresse du routeur et ses trois temps de réponse sur chaque ligne. Rien n'est fabriqué et aucun service tiers n'intervient : les paquets partent de votre appareil et les réponses y reviennent."
        }
      },
      {
        "title": {
          "en": "Live output, hop by hop",
          "fr": "Sortie en direct, saut par saut"
        },
        "body": {
          "en": "Hops appear as they answer, streamed line by line into a monospace pane that scrolls itself. A Running badge shows the trace is still in flight, and Stop cancels it immediately — useful when a path stalls on a filtered hop and you already got your answer at hop 6. You never have to sit through a full 30-hop run.",
          "fr": "Les sauts s'affichent au fur et à mesure qu'ils répondent, ligne par ligne, dans un volet en police à chasse fixe qui défile tout seul. Un indicateur « Running » signale que la trace est en cours et le bouton Stop l'interrompt aussitôt — pratique quand le chemin bloque sur un saut filtré alors que vous aviez déjà la réponse au saut 6."
        }
      },
      {
        "title": {
          "en": "The same trace on iPhone and iPad",
          "fr": "La même trace sur iPhone et iPad"
        },
        "body": {
          "en": "The iOS and iPadOS apps run the same ICMP engine as the Mac, with the same thirty-hop ceiling and the same three probes per hop, so a trace started on your phone is directly comparable with one started on your Mac. That matters more than it sounds: tracing from the cellular network and from your office Wi-Fi to the same host is often what tells you whose network is at fault.",
          "fr": "Les applications iOS et iPadOS exécutent le même moteur ICMP que le Mac, avec la même limite de trente sauts et les mêmes trois sondes par palier : une trace lancée depuis votre téléphone est donc directement comparable à une trace lancée depuis votre Mac. C'est plus utile qu'il n'y paraît, car tracer le même hôte depuis le réseau cellulaire puis depuis le Wi-Fi du bureau est souvent ce qui désigne le réseau fautif."
        }
      },
      {
        "title": {
          "en": "Disabled where it cannot work, never faked",
          "fr": "Désactivé là où c'est impossible, jamais simulé"
        },
        "body": {
          "en": "When the system refuses ICMP outright — some corporate networks and a few VPN configurations do — SSHive stops and says so rather than printing a plausible-looking list of hops. A refusal is reported as a refusal. The same goes for a hop that never answers: it renders as asterisks, which is a real and common result, not an error.",
          "fr": "Quand le système refuse purement et simplement l'ICMP — certains réseaux d'entreprise et quelques configurations VPN le font — SSHive s'arrête et le dit, au lieu d'afficher une liste de sauts vraisemblable. Un refus est signalé comme un refus. Il en va de même pour un palier qui ne répond jamais : il s'affiche en astérisques, ce qui est un résultat réel et fréquent, pas une erreur."
        }
      },
      {
        "title": {
          "en": "Trace, then connect",
          "fr": "Tracer, puis se connecter"
        },
        "body": {
          "en": "A traceroute usually ends with a question: what is that last responding router, and can I get onto the machine behind it? SSHive is an SSH, SFTP, RDP and VNC client first, so the answer is one tab away. Identify the last good hop, open a session to the jump host or the server, and keep working in the same window.",
          "fr": "Un traceroute se termine presque toujours par une question : c'est quoi ce dernier routeur qui répond, et est-ce que je peux entrer sur la machine derrière ? SSHive est avant tout un client SSH, SFTP, RDP et VNC : la réponse est à un onglet. Repérez le dernier saut valide, ouvrez une session vers le rebond ou le serveur, et continuez dans la même fenêtre."
        }
      },
      {
        "title": {
          "en": "Free, with no account",
          "fr": "Gratuit, sans compte"
        },
        "body": {
          "en": "The whole network-tools suite — traceroute, ping, DNS lookup, whois, MX lookup and DNSBL checks — sits in the free tier on every platform where it is available. No feature gate on any of them, no ads, no sign-up. SSHive Pro is a one-time purchase, Universal across Mac, iPhone and iPad, and it unlocks session features, not diagnostics.",
          "fr": "Toute la suite d'outils réseau — traceroute, ping, résolution DNS, whois, MX et vérification DNSBL — fait partie de l'offre gratuite sur chaque plateforme où elle est disponible. Aucun verrou, aucune publicité, aucune inscription. SSHive Pro est un achat unique, Universel sur Mac, iPhone et iPad, et débloque des fonctions de session, pas les diagnostics."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open the network tools",
          "fr": "Ouvrir les outils réseau"
        },
        "body": {
          "en": "On the Mac, click the network icon in the sidebar, or the Network tools button on the welcome screen. Either one opens a dedicated tools tab alongside your sessions, so you can trace a route without closing what you are working in. On iPhone and iPad, the same tools live in the Tools tab.",
          "fr": "Sur Mac, cliquez sur l'icône réseau de la barre latérale, ou sur le bouton « Outils réseau » de l'écran d'accueil. Les deux ouvrent un onglet d'outils à côté de vos sessions : vous tracez un chemin sans fermer ce sur quoi vous travaillez. Sur iPhone et iPad, ces mêmes outils se trouvent dans l'onglet Outils."
        }
      },
      {
        "title": {
          "en": "Find the Traceroute card",
          "fr": "Repérer la carte Traceroute"
        },
        "body": {
          "en": "The tools panel lays its cards out in a grid you can rearrange: each card can be moved or hidden, so you can keep only the tools you actually use. Traceroute sits next to Ping by default.",
          "fr": "Le panneau d'outils dispose ses cartes dans une grille que vous pouvez réorganiser : chaque carte se déplace ou se masque, pour ne garder que les outils qui vous servent. Traceroute est placé à côté de Ping par défaut."
        }
      },
      {
        "title": {
          "en": "Enter a destination and start the trace",
          "fr": "Saisir une destination et lancer la trace"
        },
        "body": {
          "en": "Type a hostname or IP address in the field (the placeholder shows e.g. google.com) and press Trace. SSHive resolves it, then starts probing with a TTL of 1 and walks outward one hop at a time, up to 30.",
          "fr": "Saisissez un nom d'hôte ou une adresse IP dans le champ (l'exemple affiché est google.com) puis cliquez sur Trace. SSHive transmet la cible au traceroute du système, qui la résout et commence à sonder avec un TTL de 1, en progressant d'un saut à la fois jusqu'à 30."
        }
      },
      {
        "title": {
          "en": "Watch the hops arrive",
          "fr": "Regarder les sauts arriver"
        },
        "body": {
          "en": "Lines stream in as each router answers, with a Running badge while the trace is active. A hop showing asterisks is simply not replying inside the timeout, and the trace moves on to the next TTL. Press Stop as soon as you have seen what you needed.",
          "fr": "Les lignes arrivent au fur et à mesure que les routeurs répondent, avec un indicateur « Running » pendant la trace. Un saut en astérisques ne répond simplement pas dans le délai imparti : la trace passe au TTL suivant. Cliquez sur Stop dès que vous avez vu ce qu'il fallait."
        }
      },
      {
        "title": {
          "en": "Act on the last responding hop",
          "fr": "Agir sur le dernier saut qui répond"
        },
        "body": {
          "en": "Note the last hop that answered and whether the destination replied at all. From there, open an SSH, RDP or VNC session to the relevant host in the same window, or cross-check the target with the Ping and DNS Lookup cards above.",
          "fr": "Notez le dernier saut ayant répondu et si la destination a répondu tout court. De là, ouvrez une session SSH, RDP ou VNC vers l'hôte concerné dans la même fenêtre, ou recoupez avec les cartes Ping et DNS Lookup situées au-dessus."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "Reading a traceroute without reaching the wrong conclusion",
        "fr": "Lire un traceroute sans en tirer de fausses conclusions"
      },
      "body": {
        "en": "Each line is one TTL value, not a measurement of your connection. Three probes go out per hop, so you get three round-trip times, and the spread matters as much as the values: 10 / 11 / 10 ms is a stable router, while 10 / 400 / 11 ms is one probe that got queued behind something and rarely deserves investigation.\n\nEvery RTT includes a return path you never see. Hop 8's reply comes back over whatever route that router has toward you, which is often not the reverse of the outbound path. That is why hop 8 can read 90 ms while hop 9 reads 40 ms. It is not an error and latency did not drop — hop 8's reply simply took a slower way home. Never subtract two adjacent hops and call the result the latency of that link.\n\nAsterisks are the most misread output in networking. Three of them mean no ICMP Time Exceeded came back before the timeout (five seconds by default on macOS). There are three ordinary causes: the router does not generate ICMP errors at all, which is normal in ISP and MPLS cores; it rate-limits ICMP error generation, so it drops your probe's reply while forwarding production traffic perfectly; or a firewall blocks the outbound probe (macOS uses UDP from port 33434 upward) or the returning ICMP. In all three cases the data plane is healthy. The test is simple: if any hop after the asterisks answers, the silent hop forwarded your packet correctly. Only asterisks running unbroken to the end of the trace tell you anything.\n\nThe same discipline applies to spikes. One hop at 300 ms between neighbours at 40 ms is a control-plane artefact — that router deprioritised your probe. What matters is whether an increase persists through every later hop and into the destination. A step that carries to the end is real, though it may be geography rather than a fault: a transatlantic leg costs its 70 to 90 ms and always will.\n\nWhere a route genuinely breaks is the last hop that answered — the last router with both a route toward your target and a route back to you. If nothing after it replies and the destination never does either, the failure sits at or just past that point. A repeating pattern of the same hops is a routing loop. And !H, !N, !P or !X are definitive where asterisks are not: a router explicitly reporting the host, network or protocol unreachable, or the path administratively filtered.",
        "fr": "Chaque ligne correspond à une valeur de TTL, pas à une mesure de votre connexion. Trois sondes partent par saut, d'où les trois temps de réponse affichés, et leur dispersion compte autant que les valeurs : 10 / 11 / 10 ms, c'est un routeur stable ; 10 / 400 / 11 ms, c'est une sonde qui a attendu dans une file, et cela ne mérite presque jamais d'enquête.\n\nChaque RTT inclut un chemin retour que vous ne voyez pas. La réponse du saut 8 revient par la route dont ce routeur dispose vers vous, qui n'est souvent pas l'inverse du chemin aller. C'est pourquoi le saut 8 peut afficher 90 ms alors que le saut 9 affiche 40 ms. Ce n'est ni une erreur ni une baisse de latence : la réponse du saut 8 a simplement pris un chemin de retour plus lent. Ne soustrayez jamais deux sauts voisins en appelant le résultat « la latence de ce lien ».\n\nLes astérisques sont la sortie la plus mal interprétée du réseau. Trois astérisques signifient qu'aucun message ICMP Time Exceeded n'est revenu avant expiration du délai (cinq secondes par défaut sous macOS). Trois causes ordinaires : le routeur ne génère aucune erreur ICMP, ce qui est courant dans les cœurs opérateurs et MPLS ; il limite le débit de génération d'erreurs ICMP et sacrifie la réponse à votre sonde tout en acheminant parfaitement le trafic ; ou un pare-feu bloque la sonde sortante (macOS utilise l'UDP à partir du port 33434) ou l'ICMP de retour. Dans les trois cas, le plan de données va bien. Le test est simple : si un saut postérieur répond, le saut silencieux a bien relayé votre paquet. Seuls des astérisques ininterrompus jusqu'à la fin de la trace veulent dire quelque chose.\n\nMême rigueur pour les pics. Un saut à 300 ms entre des voisins à 40 ms est un artefact du plan de contrôle : ce routeur a déprioritisé votre sonde. Ce qui compte, c'est de savoir si l'augmentation persiste sur tous les sauts suivants et jusqu'à la destination. Une marche qui se propage jusqu'au bout est réelle, mais peut relever de la géographie plutôt que d'une panne : une traversée transatlantique coûte ses 70 à 90 ms.\n\nLà où la route casse vraiment, c'est au dernier saut qui a répondu — le dernier routeur disposant à la fois d'une route vers votre cible et d'une route vers vous. Si rien après lui ne répond et que la destination reste muette, la rupture est à ce point ou juste après. Un motif de sauts qui se répète indique une boucle de routage. Et !H, !N, !X ou !A sont formels là où les astérisques ne le sont pas : c'est un routeur qui déclare explicitement la destination injoignable ou filtrée administrativement."
      }
    },
    "faq": [
      {
        "question": {
          "en": "Does traceroute really work in the sandboxed Mac App Store build?",
          "fr": "Le traceroute fonctionne-t-il vraiment dans la version Mac App Store, sous bac à sable ?"
        },
        "answer": {
          "en": "Yes, and it is the same trace the direct download performs. The common belief that it cannot is based on a confusion between two kinds of socket. Traceroute needs to set IP_TTL on outgoing probes and read the ICMP Time Exceeded replies routers send back. A *raw* socket would indeed be refused by the App Sandbox — but a *datagram* ICMP socket does both, needs no root, and is permitted. Measured under sandbox-exec with the app's own entitlements: setsockopt(IP_TTL) succeeds and the hops come back, router by router. One caveat found the hard way: com.apple.security.network.client alone is not enough, because the replies are then refused with EPERM; network.server is required as well, and SSHive declares both.",
          "fr": "Oui, et c'est le même parcours que celui du téléchargement direct. L'idée répandue du contraire repose sur une confusion entre deux types de socket. Le traceroute doit positionner IP_TTL sur les sondes sortantes et lire les réponses ICMP Time Exceeded renvoyées par les routeurs. Un socket *brut* serait effectivement refusé par le bac à sable — mais un socket ICMP *datagramme* fait les deux, n'exige pas root, et il est autorisé. Mesuré sous sandbox-exec avec les entitlements réels de l'application : setsockopt(IP_TTL) passe et les paliers remontent, routeur par routeur. Une réserve découverte à la dure : com.apple.security.network.client seul ne suffit pas, les réponses sont alors refusées en EPERM ; network.server est également nécessaire, et SSHive déclare les deux."
        }
      },
      {
        "question": {
          "en": "Can I run a traceroute from an iPhone or iPad?",
          "fr": "Peut-on lancer un traceroute depuis un iPhone ou un iPad ?"
        },
        "answer": {
          "en": "Yes, and it is a genuine measurement rather than an illustration. iOS allows no subprocess spawning and has no setuid binaries, so an app cannot simply call the system traceroute — which is why this is often assumed to be impossible. But the constraint is only on Network.framework, Apple's high-level API, which has no ICMP transport. Beneath it the BSD socket layer is intact: SSHive opens socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP), sets IP_TTL on each probe and reads the Time Exceeded replies, exactly as it does on the Mac. Thirty hops, three probes each. Tracing the same host from cellular and from Wi-Fi is often the quickest way to establish whose network is at fault.",
          "fr": "Oui, et il s'agit d'une vraie mesure, pas d'une illustration. iOS n'autorise pas le lancement de processus et ne dispose d'aucun binaire setuid : une application ne peut donc pas appeler le traceroute du système, d'où l'idée répandue que la chose est impossible. Mais la contrainte ne porte que sur Network.framework, l'API de haut niveau d'Apple, qui n'a aucun transport ICMP. En dessous, la couche de sockets BSD est intacte : SSHive ouvre socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP), positionne IP_TTL sur chaque sonde et lit les réponses Time Exceeded, exactement comme sur Mac. Trente sauts, trois sondes par palier. Tracer le même hôte depuis le réseau cellulaire puis depuis le Wi-Fi est souvent le moyen le plus rapide d'établir quel réseau est en cause."
        }
      },
      {
        "question": {
          "en": "What do three asterisks mean in a traceroute?",
          "fr": "Que signifient trois astérisques dans un traceroute ?"
        },
        "answer": {
          "en": "That none of the three probes for that TTL got an ICMP Time Exceeded back before the timeout. It usually means the router is configured not to emit ICMP errors, is rate-limiting them, or that a firewall dropped the probe or the reply. It rarely means the router is broken. If any later hop answers, that silent router forwarded your packet perfectly. Only asterisks that continue unbroken to the end of the trace are a real signal.",
          "fr": "Qu'aucune des trois sondes de ce TTL n'a reçu de message ICMP Time Exceeded avant expiration du délai. En général, le routeur est configuré pour ne pas émettre d'erreurs ICMP, il en limite le débit, ou un pare-feu a bloqué la sonde ou la réponse. Cela ne signifie presque jamais qu'il est en panne. Si un saut ultérieur répond, ce routeur silencieux a parfaitement relayé votre paquet. Seuls des astérisques ininterrompus jusqu'à la fin de la trace constituent un vrai signal."
        }
      },
      {
        "question": {
          "en": "Why does a middle hop show 300 ms when the destination shows 40 ms?",
          "fr": "Pourquoi un saut intermédiaire affiche-t-il 300 ms quand la destination en affiche 40 ?"
        },
        "answer": {
          "en": "Because answering your probe is not that router's job. Generating an ICMP Time Exceeded is control-plane work, handled by a CPU that deliberately gives it low priority, while the traffic it forwards stays on the fast path. A spike that does not propagate to the following hops is an artefact, not a fault. Only an increase that persists through every subsequent hop and into the destination reflects something the traffic actually experiences.",
          "fr": "Parce que répondre à votre sonde n'est pas le travail de ce routeur. Générer un ICMP Time Exceeded relève du plan de contrôle, traité par un processeur qui lui donne volontairement une faible priorité, tandis que le trafic relayé reste sur le chemin rapide. Un pic qui ne se propage pas aux sauts suivants est un artefact, pas une panne. Seule une hausse qui persiste sur tous les sauts suivants et jusqu'à la destination correspond à ce que subit réellement le trafic."
        }
      },
      {
        "question": {
          "en": "The trace stops at hop 12 and never reaches the host. Is the network down?",
          "fr": "La trace s'arrête au saut 12 sans atteindre l'hôte. Le réseau est-il coupé ?"
        },
        "answer": {
          "en": "Not necessarily. Plenty of destinations behind load balancers, anycast front-ends or cloud firewalls silently drop traceroute probes while serving TCP traffic normally, so a trace that dies near the end while the service works is expected. Confirm with a connectivity test to the real port before concluding anything. If the service is genuinely unreachable, hop 12 is your evidence: it is the last router that had a route to your target and a route back to you, so the break sits at or immediately after it.",
          "fr": "Pas forcément. Beaucoup de destinations derrière un répartiteur de charge, un frontal anycast ou un pare-feu cloud ignorent silencieusement les sondes traceroute tout en servant le trafic TCP normalement : une trace qui s'éteint près de la fin alors que le service fonctionne est attendue. Vérifiez d'abord la connectivité sur le vrai port. Si le service est réellement injoignable, le saut 12 est votre preuve : c'est le dernier routeur ayant une route vers la cible et une route vers vous, la rupture est donc à ce point ou juste après."
        }
      },
      {
        "question": {
          "en": "Can I change the hop limit or force ICMP probes instead of UDP?",
          "fr": "Peut-on changer la limite de sauts ou forcer des sondes ICMP au lieu d'UDP ?"
        },
        "answer": {
          "en": "Not from the SSHive card. The trace runs with a fixed 30-hop ceiling, ICMP probes and three probes per hop, with no protocol, port or probe-count options exposed, and no ASN or geolocation enrichment. If you need those switches on a Mac, /usr/sbin/traceroute accepts them directly in Terminal; the card is there for the common case of tracing a host fast without leaving your sessions — and for iPhone and iPad, where there is no Terminal to fall back on.",
          "fr": "Pas depuis la carte SSHive. La trace s'exécute avec une limite fixe de 30 sauts, des sondes ICMP et trois sondes par palier, sans option de protocole, de port ni de nombre de sondes, et sans enrichissement ASN ou géographique. Si vous avez besoin de ces options sur Mac, /usr/sbin/traceroute les accepte dans le Terminal ; la carte sert au cas courant : tracer un hôte vite, sans quitter vos sessions — et sur iPhone et iPad, où aucun Terminal ne peut prendre le relais."
        }
      },
      {
        "question": {
          "en": "Is traceroute part of SSHive Pro?",
          "fr": "Traceroute fait-il partie de SSHive Pro ?"
        },
        "answer": {
          "en": "No. Traceroute and the rest of the network-tools suite are free on every platform, with no feature gate, no ads and no account to create. SSHive Pro is a one-time purchase, Universal across Mac, iPhone and iPad, with no subscription; it unlocks session-side capabilities rather than diagnostics.",
          "fr": "Non. Traceroute et le reste de la suite d'outils réseau sont gratuits sur toutes les plateformes, sans verrou, sans publicité et sans compte à créer. SSHive Pro est un achat unique, Universel sur Mac, iPhone et iPad, sans abonnement ; il débloque des fonctions de session, pas les diagnostics."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "TTL, ICMP errors, and how a sandboxed app does this anyway",
        "fr": "TTL, erreurs ICMP, et comment une app en bac à sable y parvient quand même"
      },
      "body": {
        "en": "An IPv4 header carries an 8-bit TTL field (IPv6 calls it Hop Limit) whose only purpose is to stop packets circulating forever. Every router that forwards a packet decrements it by one; when it reaches zero the router discards the packet and returns an ICMP Time Exceeded message, type 11 code 0, sourced from the interface the packet arrived on.\n\nTraceroute turns that failure mode into a measurement. It sends a probe with TTL 1, which dies at the first router and elicits an error naming it. Then TTL 2, then TTL 3, walking outward one hop at a time. Three probes per TTL produce the three timings on each line. How the target is recognised depends on the probe type: the BSD traceroute on macOS sends UDP datagrams to unlikely high ports starting at 33434 and treats an ICMP Port Unreachable (type 3, code 3) as the arrival signal, while Windows tracert sends ICMP Echo Requests and stops on an Echo Reply. That difference is not cosmetic. Firewalls treat UDP probes and ICMP Echo very differently, so the same destination legitimately produces different asterisk hops from a Mac and from a Windows machine — worth checking both before you blame a router.\n\nWhich brings us to the question everyone gets wrong, including an earlier version of this page: can a sandboxed app do this at all?\n\nThe reasoning that says no goes like this. /usr/sbin/traceroute on macOS is installed setuid root while /sbin/ping is not, so traceroute must need privileges ping does not; the App Sandbox grants no such privileges; therefore no traceroute in an App Store app. Every step sounds reasonable and the conclusion is still wrong, because the premise conflates the BSD traceroute's chosen probe type with traceroute as a technique. That binary probes with UDP datagrams and needs a raw socket to read the ICMP errors those provoke — hence setuid. Probe with ICMP Echo instead, and the replies arrive on the same datagram ICMP socket that ping already uses without privileges. setsockopt(IP_TTL) is not a privileged call.\n\nSo SSHive does not drive the system binary at all. It opens socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP), sets the TTL, sends three Echo Requests per hop, and reads whatever comes back: a Time Exceeded naming a router, an Echo Reply meaning the destination answered, or nothing within two seconds, which prints as an asterisk. That was measured under sandbox-exec with the app's real entitlements before any of it shipped, and it revealed one trap worth repeating: with com.apple.security.network.client alone, the probe goes out and the reply is refused with EPERM — a silent failure that looks exactly like a filtering network. com.apple.security.network.server is required as well. SSHive declares both, which is why the App Store build traces identically to the direct download.\n\niOS reaches the same place by the same route. Network.framework exposes TCP, UDP, QUIC and TLS and no ICMP at all, but it is not the only API available: the BSD socket layer underneath accepts the identical datagram ICMP socket, and Apple's own SimplePing sample has demonstrated it for years. The iPhone and iPad builds run the same thirty-hop, three-probe loop as the Mac.\n\nKnow the limits before you lean on it. The hop ceiling is fixed at 30, there are no protocol, port or probe-count switches, and there is no ASN or geolocation enrichment. Because the probes are ICMP Echo rather than UDP, a firewall that permits one and drops the other can produce a different asterisk pattern than /usr/sbin/traceroute would — neither result is wrong, and comparing the two is occasionally how you find the firewall.",
        "fr": "Un en-tête IPv4 contient un champ TTL de 8 bits (appelé Hop Limit en IPv6) dont l'unique rôle est d'empêcher les paquets de circuler indéfiniment. Chaque routeur qui relaie un paquet le décrémente de un ; à zéro, il jette le paquet et renvoie un message ICMP Time Exceeded, type 11 code 0, émis depuis l'interface par laquelle le paquet est arrivé.\n\nTraceroute transforme ce mécanisme d'échec en mesure. Il envoie une sonde avec un TTL de 1, qui meurt au premier routeur et provoque une erreur qui l'identifie. Puis un TTL de 2, puis 3, en progressant d'un saut à la fois. Trois sondes par TTL produisent les trois temps affichés sur chaque ligne. La détection de la cible dépend du type de sonde : le traceroute BSD de macOS envoie des datagrammes UDP vers des ports hauts improbables à partir de 33434 et considère un ICMP Port Unreachable (type 3, code 3) comme le signal d'arrivée, tandis que tracert sous Windows envoie des ICMP Echo Request et s'arrête sur un Echo Reply. Cette différence n'est pas cosmétique : les pare-feu traitent très différemment les sondes UDP et l'ICMP Echo, si bien qu'une même destination produit légitimement des sauts en astérisques différents depuis un Mac et depuis une machine Windows. Vérifiez les deux avant d'accuser un routeur.\n\nCe qui mène à la question que tout le monde tranche de travers, y compris une version antérieure de cette page : une application en bac à sable peut-elle seulement faire cela ?\n\nLe raisonnement qui conclut que non tient en trois temps. /usr/sbin/traceroute est installé setuid root sous macOS alors que /sbin/ping ne l'est pas, donc traceroute exigerait des privilèges que ping n'a pas ; le bac à sable n'accorde aucun privilège de ce type ; donc pas de traceroute dans une application App Store. Chaque étape paraît raisonnable et la conclusion est pourtant fausse, car la prémisse confond le type de sonde retenu par le traceroute BSD avec le traceroute en tant que technique. Ce binaire sonde en datagrammes UDP et lui faut un socket brut pour lire les erreurs ICMP qu'ils provoquent — d'où le setuid. Sondez en ICMP Echo, et les réponses arrivent sur ce même socket ICMP datagramme que le ping utilise déjà sans privilèges. setsockopt(IP_TTL) n'est pas un appel privilégié.\n\nSSHive ne pilote donc aucun binaire système. Il ouvre socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP), positionne le TTL, envoie trois requêtes Echo par palier, et lit ce qui revient : un Time Exceeded qui nomme un routeur, une réponse Echo signifiant que la destination a répondu, ou rien en deux secondes, ce qui s'affiche en astérisque. Tout cela a été mesuré sous sandbox-exec avec les entitlements réels de l'application avant d'être livré, et a révélé un piège qui mérite d'être répété : avec com.apple.security.network.client seul, la sonde part et la réponse est refusée en EPERM — un échec silencieux qui ressemble exactement à un réseau filtrant. com.apple.security.network.server est également nécessaire. SSHive déclare les deux, et c'est pourquoi la version App Store trace à l'identique du téléchargement direct.\n\niOS arrive au même point par le même chemin. Network.framework expose TCP, UDP, QUIC et TLS, et aucun ICMP — mais ce n'est pas la seule API disponible : la couche de sockets BSD en dessous accepte le même socket ICMP datagramme, et l'exemple SimplePing d'Apple le démontre depuis des années. Les versions iPhone et iPad exécutent la même boucle de trente sauts et trois sondes que le Mac.\n\nConnaissez les limites avant de vous y fier : plafond fixe de 30 sauts, aucune option de protocole, de port ou de nombre de sondes, et aucun enrichissement ASN ou géographique. Comme les sondes sont des ICMP Echo plutôt que de l'UDP, un pare-feu qui autorise l'un et jette l'autre peut produire un motif d'astérisques différent de celui de /usr/sbin/traceroute — aucun des deux résultats n'est faux, et les comparer est parfois la façon dont on trouve le pare-feu."
      }
    },
    "relatedTools": [
      "ping",
      "dns-lookup",
      "whois"
    ]
  },
  {
    "slug": "dns-lookup",
    "iconName": "Globe",
    "metaTitle": {
      "en": "DNS Lookup on Mac, iPhone and iPad: A, MX, TXT",
      "fr": "DNS Lookup sur Mac et iPhone : A, MX, TXT"
    },
    "metaDescription": {
      "en": "Run a DNS lookup from your Mac, iPhone or iPad. A, AAAA, MX, CNAME, NS and TXT records on macOS and Windows, A and AAAA on iOS. Free, no ads.",
      "fr": "Effectuez une résolution DNS depuis votre Mac, iPhone ou iPad : A, AAAA, MX, CNAME, NS et TXT sur macOS et Windows, A et AAAA sur iOS. Gratuit, sans pub."
    },
    "h1": {
      "en": "Resolve a domain name without opening a terminal",
      "fr": "Résoudre un nom de domaine sans ouvrir de terminal"
    },
    "hero": {
      "en": "A, AAAA, MX, CNAME, NS and TXT in one query on macOS and Windows — A and AAAA on iPhone and iPad. Free on every platform, no ads, no account.",
      "fr": "A, AAAA, MX, CNAME, NS et TXT en une seule requête sur macOS et Windows — A et AAAA sur iPhone et iPad. Gratuit partout, sans pub ni compte."
    },
    "intro": {
      "en": "An A record changed twenty minutes ago and the site still resolves to the old address. Mail stopped being delivered and nobody is sure whether the MX record survived the last registrar migration. A vendor swears their TXT verification record is published, and your provisioning job disagrees. On a Mac with a terminal these are five-second questions — dig, host, nslookup. Away from that Mac, they get genuinely awkward.\n\nmacOS itself no longer helps much. Network Utility's Lookup tab was deprecated in Big Sur, non-functional by Monterey, and the app is simply absent from current macOS builds — (delete this clause — end the sentence at \"absent from current macOS builds.\"). On iPhone and iPad there is no terminal at all, so every DNS question needs an app.\n\nSSHive's DNS Lookup answers the question directly. Type a hostname, get the records back in a table. One search fires seven lookups in parallel — A, AAAA, CNAME, MX, TXT, NS and SOA — on Mac, iPhone and iPad alike. Each runs independently, so a domain missing one type still returns everything else instead of failing. On iPhone and iPad the same screen returns the address records, A and AAAA, resolved through the system resolver.\n\nWe state that difference plainly because it has operational consequences: if you need MX, CNAME, NS or TXT from the phone, DNS Lookup will not give them to you (MX has its own dedicated tool on mobile). And none of this sits behind a paywall — the whole network-tools suite, DNS Lookup included, is free on Mac, Windows, iPhone and iPad. Pro covers SSH, SFTP, RDP and VNC features, not diagnostics.\n\nThe part that usually matters more than the tool is knowing what the answer means. That is what the rest of this page is for.",
      "fr": "L'enregistrement A a été modifié il y a vingt minutes et le site pointe toujours vers l'ancienne adresse. Les mails ne sont plus délivrés et personne ne sait si l'enregistrement MX a survécu à la dernière migration de registrar. Un prestataire jure que son enregistrement TXT de vérification est publié, votre script de provisioning affirme le contraire. Depuis un Mac avec un terminal, ce sont trois questions à cinq secondes : dig, host, nslookup. Loin de ce Mac, elles deviennent nettement moins simples.\n\nmacOS n'aide plus beaucoup. L'onglet Lookup de l'Utilitaire de réseau a été déprécié avec Big Sur, ne fonctionnait plus sous Monterey, et l'application a purement disparu des versions actuelles de macOS — pendant que la page d'assistance d'Apple qui la décrit reste figée sur la documentation 10.15. Sur iPhone et iPad, il n'y a aucun terminal : toute question DNS passe forcément par une app.\n\nLe DNS Lookup de SSHive répond directement. Vous saisissez un nom d'hôte, vous obtenez les enregistrements dans un tableau. Une seule recherche déclenche sept résolutions en parallèle — A, AAAA, CNAME, MX, TXT, NS et SOA — sur Mac, iPhone et iPad. Chacune est indépendante, donc un domaine dépourvu d'un type renvoie quand même tout le reste au lieu d'échouer. Sur iPhone et iPad, le même écran renvoie les enregistrements d'adresse : A et AAAA.\n\nCette différence est annoncée franchement, parce qu'elle a des conséquences concrètes : si vous avez besoin de MX, CNAME, NS ou TXT depuis le téléphone, DNS Lookup ne vous les donnera pas (les MX ont leur outil dédié sur mobile). Et rien de tout cela n'est derrière un paywall : la suite d'outils réseau, DNS Lookup compris, est gratuite sur Mac, Windows, iPhone et iPad. Pro couvre SSH, SFTP, RDP et VNC, pas le diagnostic.\n\nReste le plus important : savoir lire la réponse. C'est l'objet de la suite de cette page."
    },
    "capabilities": [
      {
        "title": {
          "en": "Seven record types, one query",
          "fr": "Sept types d'enregistrements, une requête"
        },
        "body": {
          "en": "A single search fires seven parallel resolutions — A, AAAA, CNAME, MX, TXT, NS and SOA — identically on Mac, iPhone and iPad. Each is handled independently, so a domain with no CNAME or no IPv6 still returns everything else instead of erroring out. Results land in a Type/Value table in a fixed, predictable order.",
          "fr": "Sur macOS — DMG comme version Mac App Store — et sur Windows, une seule recherche déclenche six résolutions en parallèle : A, AAAA, MX, CNAME, NS et TXT. Chacune est traitée séparément : un domaine sans CNAME ou sans IPv6 renvoie quand même tout le reste plutôt que de tomber en erreur. Le résultat s'affiche dans un tableau Type/Valeur, dans un ordre fixe et prévisible."
        }
      },
      {
        "title": {
          "en": "A and AAAA on iPhone and iPad",
          "fr": "A et AAAA sur iPhone et iPad"
        },
        "body": {
          "en": "Mobile resolves through the system resolver and returns address records only: A and AAAA, deduplicated, grouped by type with a colour-coded badge and a copy button on every value. MX, CNAME, NS and TXT are not available from this screen on iOS or iPadOS — for mail routing on the phone, use the separate MX Lookup tool.",
          "fr": "Sur mobile, la résolution passe par le résolveur du système et ne renvoie que les enregistrements d'adresse : A et AAAA, dédoublonnés, regroupés par type avec un badge coloré et un bouton de copie sur chaque valeur. MX, CNAME, NS et TXT ne sont pas accessibles depuis cet écran sur iOS et iPadOS — pour le routage mail depuis le téléphone, utilisez l'outil MX Lookup dédié."
        }
      },
      {
        "title": {
          "en": "Works in the Mac App Store build",
          "fr": "Fonctionne aussi en version Mac App Store"
        },
        "body": {
          "en": "DNS Lookup runs identically in the Mac App Store version, in the direct download, on iPhone and on iPad. A DNS query is ordinary outbound client traffic, so there is no sandbox guard and no degraded mode anywhere — no entitlement to argue about, and no platform where the tool answers less than the others.",
          "fr": "DNS Lookup fonctionne à l'identique dans la version Mac App Store, dans le téléchargement direct, sur iPhone et sur iPad. Une requête DNS est du trafic client sortant ordinaire : aucun garde-fou de bac à sable, aucun mode dégradé nulle part — aucun entitlement à discuter, et aucune plateforme où l'outil répond moins que les autres."
        }
      },
      {
        "title": {
          "en": "Your resolver, not someone else's API",
          "fr": "Votre résolveur, pas l'API d'un tiers"
        },
        "body": {
          "en": "Queries go to the DNS servers your device is already configured to use. The desktop build speaks the DNS wire protocol directly to them; mobile goes through the OS resolution path. Nothing is proxied through a third-party web service, so no analytics vendor or API middleman sees which domains you look up — only the resolver your device is already configured to use — and the answer reflects what this machine will actually resolve.",
          "fr": "Les requêtes partent vers les serveurs DNS que votre appareil utilise déjà. La version desktop leur parle directement le protocole DNS ; le mobile emprunte le chemin de résolution du système. Rien ne transite par un service web tiers : aucun intermédiaire ne voit les domaines que vous interrogez, et la réponse reflète ce que cette machine résoudra réellement."
        }
      },
      {
        "title": {
          "en": "Diagnose, then fix, in the same app",
          "fr": "Diagnostiquer, puis corriger, dans la même app"
        },
        "body": {
          "en": "DNS Lookup sits in the same window as your SSH sessions. Confirm the A record is wrong, then open a shell on the nameserver and fix the zone — no app switching, no re-typing the hostname. On an iPhone at 3am, that is the difference between confirming a page and being able to act on it.",
          "fr": "DNS Lookup se trouve dans la même fenêtre que vos sessions SSH. Vous confirmez que l'enregistrement A est faux, puis vous ouvrez un shell sur le serveur de noms et corrigez la zone — sans changer d'application ni ressaisir le nom d'hôte. Depuis un iPhone à 3 h du matin, c'est la différence entre constater une alerte et pouvoir la traiter."
        }
      },
      {
        "title": {
          "en": "Free on every platform",
          "fr": "Gratuit sur toutes les plateformes"
        },
        "body": {
          "en": "All six network tools — DNS Lookup, ping, traceroute, whois, MX lookup and DNSBL blacklist check — are free on Mac, Windows, iPhone and iPad, with no ads and no account. Pro is a one-time purchase (about 17.99 USD, Universal Purchase across Mac, iPhone and iPad) covering SSH, SFTP, RDP and VNC features. It does not gate diagnostics.",
          "fr": "Les six outils réseau — DNS Lookup, ping, traceroute, whois, MX lookup et vérification de blacklist DNSBL — sont gratuits sur Mac, Windows, iPhone et iPad, sans publicité ni compte. Pro est un achat unique (environ 19,99 €, Achat Universel sur Mac, iPhone et iPad) qui couvre SSH, SFTP, RDP et VNC. Il ne verrouille aucun outil de diagnostic."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open the network tools on macOS or Windows",
          "fr": "Ouvrir les outils réseau sur macOS ou Windows"
        },
        "body": {
          "en": "Click the network icon in the sidebar (its tooltip reads \"Network Tools\"), or the \"Network tools\" pill on the welcome screen. Either one opens a dedicated tools tab containing the full diagnostics panel.",
          "fr": "Cliquez sur l'icône réseau dans la barre latérale (son infobulle indique « Network Tools »), ou sur la pastille « Network tools » de l'écran d'accueil. L'une comme l'autre ouvre un onglet dédié contenant le panneau de diagnostic complet."
        }
      },
      {
        "title": {
          "en": "Or open Tools on iPhone and iPad",
          "fr": "Ou ouvrir les Outils sur iPhone et iPad"
        },
        "body": {
          "en": "On iPhone, tap \"Tools\" in the bottom tab bar. On iPad, select \"Network tools\" in the sidebar. In the Diagnostic section, tap the second row, \"DNS Lookup — Resolve a domain name\".",
          "fr": "Sur iPhone, touchez « Outils » dans la barre d'onglets en bas. Sur iPad, sélectionnez « Outils réseau » dans la barre latérale. Dans la section Diagnostic, touchez la deuxième ligne : « DNS Lookup — Résoudre un nom de domaine »."
        }
      },
      {
        "title": {
          "en": "Enter the hostname",
          "fr": "Saisir le nom d'hôte"
        },
        "body": {
          "en": "On desktop, DNS Lookup is the first card of the two-column grid at the top of the panel. Type the domain on its own — example.com, not https://example.com/path. The desktop build validates the hostname before it reaches the resolver, so a pasted URL will be rejected rather than silently mangled.",
          "fr": "Sur ordinateur, DNS Lookup est la première carte de la grille à deux colonnes en haut du panneau. Saisissez le domaine seul — exemple.fr, et non https://exemple.fr/chemin. La version desktop valide le nom d'hôte avant de le transmettre au résolveur : une URL collée sera rejetée plutôt que tronquée en silence."
        }
      },
      {
        "title": {
          "en": "Run the lookup",
          "fr": "Lancer la résolution"
        },
        "body": {
          "en": "Press Search. The button switches to Running while the six queries fire in parallel; partial answers are not discarded, so results appear even when several record types do not exist for that domain. On iPhone and iPad, run the lookup the same way and the two address record types come back grouped in sections.",
          "fr": "Appuyez sur Search. Le bouton passe à Running pendant que les six requêtes partent en parallèle ; les réponses partielles ne sont pas jetées, si bien qu'un résultat s'affiche même quand plusieurs types n'existent pas pour ce domaine. Sur iPhone et iPad, lancez la résolution de la même façon : les deux types d'adresses reviennent regroupés en sections."
        }
      },
      {
        "title": {
          "en": "Read and copy the records",
          "fr": "Lire et copier les enregistrements"
        },
        "body": {
          "en": "The desktop table lists Type and Value in a fixed order: A, AAAA, MX (priority followed by the exchange hostname), CNAME, NS, then TXT with its segments joined. On mobile each record type gets its own section with a copy button on every value, which flips to a green checkmark once copied.",
          "fr": "Le tableau desktop affiche Type et Valeur dans un ordre fixe : A, AAAA, MX (priorité puis serveur d'échange), CNAME, NS, puis TXT avec ses segments recollés. Sur mobile, chaque type d'enregistrement a sa section, avec un bouton de copie sur chaque valeur qui se transforme en coche verte une fois la copie effectuée."
        }
      },
      {
        "title": {
          "en": "Cross-check mail records if needed",
          "fr": "Recouper les enregistrements mail si nécessaire"
        },
        "body": {
          "en": "If you are chasing a mail problem, open MX Lookup next. On macOS and Windows it resolves every exchange to its IPv4 addresses, adds the reverse DNS name for each, and checks the first address against eight DNSBL zones — the reverse-DNS view that DNS Lookup itself does not provide.",
          "fr": "Si vous traquez un problème de messagerie, enchaînez sur MX Lookup. Sur macOS et Windows, il résout chaque serveur d'échange en adresses IPv4, ajoute le nom en reverse DNS pour chacune et teste la première adresse sur huit zones DNSBL — la vue reverse DNS que DNS Lookup ne fournit pas lui-même."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "Reading the answer — and what it is not telling you",
        "fr": "Lire la réponse — et ce qu'elle ne dit pas"
      },
      "body": {
        "en": "A and AAAA are the address records. Two A records is not a failure state — it is usually round-robin or an anycast fleet, and the client picks. An AAAA published while the IPv6 path is broken is the classic cause of \"slow for some users\": Happy Eyeballs hides the problem until the day it doesn't.\n\nA CNAME is a rename, not a redirect. A name carrying a CNAME may not legally carry any other record type — but seeing a CNAME row next to MX or TXT rows here is not proof of a broken zone: SSHive queries each type independently and the resolver follows the CNAME, so those records usually belong to the canonical target, not to the name you typed. A CNAME at the apex (example.com itself) is invalid; providers that appear to offer one are doing ALIAS/ANAME flattening server-side.\n\nMX priority is a preference, not a ranking of quality. Lower wins. Senders try the lowest number first and fall back on failure; equal numbers share load. A high-numbered \"backup MX\" that does not know your mailbox list produces backscatter, not resilience.\n\nTXT is where mail questions are decided. SPF at the apex (v=spf1 …), DMARC at _dmarc.domain, DKIM at selector._domainkey.domain. Two v=spf1 records at the apex is a permanent error — permerror — and is enough to get your mail rejected. Long TXT values travel as 255-byte chunks; SSHive joins them with spaces, so a DKIM public key copied out of the table needs its whitespace stripped before you compare it.\n\nTTL is a cache lifetime, not a countdown to global propagation. Propagation does not exist: authoritative servers change instantly. What you are waiting on is every recursive resolver that cached the old answer expiring it. If the old record had a 24-hour TTL, that is your worst case — and lowering the TTL after the change does nothing. Lower it 24 hours before.\n\nSSHive does not display TTLs on any platform; on iPhone and iPad the OS resolution API does not expose them at all. For TTL-precise work, dig in a Mac terminal is still the right instrument.\n\nReverse DNS (PTR) answers a different question and is controlled by whoever owns the IP block, not the domain holder. SSHive surfaces it in MX Lookup results, where it earns its place: a sending IP whose PTR does not forward-confirm back to the same host is one of the most reliable ways to get mail rejected.",
        "fr": "A et AAAA sont les enregistrements d'adresse. Deux enregistrements A ne signalent pas une anomalie : c'est en général du round-robin ou une flotte anycast, et c'est le client qui tranche. Un AAAA publié alors que le chemin IPv6 est cassé est la cause classique du « lent pour certains utilisateurs » : Happy Eyeballs masque le problème jusqu'au jour où il ne le masque plus.\n\nUn CNAME est un renommage, pas une redirection. Un nom porteur d'un CNAME n'a le droit de porter aucun autre type d'enregistrement — mais voir ici un CNAME à côté de lignes MX ou TXT ne prouve pas une zone cassée : SSHive interroge chaque type séparément et le résolveur suit le CNAME, ces enregistrements appartiennent donc en général à la cible canonique, pas au nom que vous avez saisi. Et un CNAME à l'apex (exemple.fr lui-même) est invalide — les hébergeurs qui semblent le proposer font en réalité de l'aplatissement ALIAS/ANAME côté serveur.\n\nLa priorité MX est une préférence, pas un classement de qualité. Le plus petit nombre gagne. L'émetteur tente d'abord la valeur la plus basse et bascule en cas d'échec ; à priorité égale, la charge se répartit. Un « MX de secours » à priorité élevée qui ne connaît pas la liste de vos boîtes ne produit pas de résilience, il produit du backscatter.\n\nC'est dans les TXT que se jouent les questions mail. SPF à l'apex (v=spf1 …), DMARC sur _dmarc.domaine, DKIM sur selecteur._domainkey.domaine. Deux enregistrements v=spf1 à l'apex constituent une erreur permanente (permerror) et suffisent à faire rejeter vos messages. Les valeurs TXT longues circulent en segments de 255 octets ; SSHive les recolle avec des espaces, donc une clé publique DKIM copiée depuis le tableau doit être débarrassée de ses espaces avant comparaison.\n\nLe TTL est une durée de cache, pas un compte à rebours de propagation. La propagation n'existe pas : les serveurs faisant autorité changent instantanément. Ce que vous attendez, c'est l'expiration de l'ancienne réponse dans chaque résolveur récursif qui l'a mise en cache. Si l'ancien enregistrement avait un TTL de 24 heures, c'est votre pire cas — et baisser le TTL après la modification ne sert à rien. Il faut le baisser 24 heures avant.\n\nSSHive n'affiche le TTL sur aucune plateforme ; sur iPhone et iPad, l'API de résolution du système ne l'expose tout simplement pas. Pour un travail au TTL près, dig dans un terminal Mac reste l'instrument correct.\n\nLe reverse DNS (PTR) répond à une autre question et dépend du propriétaire du bloc d'adresses, pas du titulaire du domaine. SSHive l'expose dans les résultats de MX Lookup, là où il est utile : une IP émettrice dont le PTR ne se reconfirme pas vers le même hôte est l'un des moyens les plus fiables de faire rejeter son courrier."
      }
    },
    "faq": [
      {
        "question": {
          "en": "Can I run a DNS lookup on an iPhone without a terminal?",
          "fr": "Peut-on faire une résolution DNS sur iPhone sans terminal ?"
        },
        "answer": {
          "en": "Yes, and an app is the only option — iOS ships no terminal and no dig or nslookup binary you can reach. In SSHive, tap Tools in the bottom tab bar, then DNS Lookup in the Diagnostic section, and enter the hostname. On iPhone and iPad the result is the address records: A and AAAA, deduplicated and grouped by type, each with a copy button. It is free, with no ads and no account.",
          "fr": "Oui, et une app est la seule option : iOS n'embarque aucun terminal, ni dig ni nslookup accessibles. Dans SSHive, touchez Outils dans la barre d'onglets, puis DNS Lookup dans la section Diagnostic, et saisissez le nom d'hôte. Sur iPhone et iPad, le résultat correspond aux enregistrements d'adresse : A et AAAA, dédoublonnés et regroupés par type, chacun avec un bouton de copie. C'est gratuit, sans publicité ni compte."
        }
      },
      {
        "question": {
          "en": "Which record types does SSHive return on each platform?",
          "fr": "Quels types d'enregistrements SSHive renvoie-t-il selon la plateforme ?"
        },
        "answer": {
          "en": "A, AAAA, CNAME, MX, TXT, NS and SOA — seven record types in one query, each with its TTL, on Mac, iPhone and iPad alike. Earlier iOS releases returned addresses only, because the high-level resolution API hands back socket addresses rather than DNS resource records; the app now goes to the BSD resolver directly and parses the answer section itself. SRV and CAA are still not supported on any platform.",
          "fr": "Sur macOS (DMG et Mac App Store) et sur Windows : A, AAAA, MX, CNAME, NS et TXT, les six en une requête. Sur iPhone et iPad : A et AAAA uniquement. La résolution mobile passe par l'API du système, qui renvoie des adresses de socket et non des enregistrements DNS : MX, CNAME, NS et TXT n'y sont réellement pas disponibles depuis cet écran. Le routage mail sur mobile est couvert par l'outil MX Lookup. Aucune plateforme ne gère SOA, SRV ni CAA."
        }
      },
      {
        "question": {
          "en": "Does DNS Lookup work in the Mac App Store version?",
          "fr": "DNS Lookup fonctionne-t-il dans la version Mac App Store ?"
        },
        "answer": {
          "en": "Yes, identically to the direct download — all seven record types, each with its TTL. DNS queries are ordinary outbound network client traffic, which the App Sandbox permits, so there is no guard and no reduced feature set. The same is now true of ping and traceroute, which many people assume a sandboxed app cannot do: they run on a datagram ICMP socket, which needs no root and which the sandbox allows. There is no second-class build in this suite.",
          "fr": "Oui, à l'identique du téléchargement direct — les sept types d'enregistrements, chacun avec sa durée de vie. Les requêtes DNS sont du trafic client sortant ordinaire, autorisé par le bac à sable : aucun garde-fou, aucune fonctionnalité en moins. C'est désormais vrai aussi du ping et du traceroute, que l'on croit souvent hors de portée d'une application en bac à sable : ils reposent sur un socket ICMP datagramme, qui n'exige pas les privilèges root et que le bac à sable autorise. Il n'y a pas de version au rabais dans cette suite."
        }
      },
      {
        "question": {
          "en": "Can I check DNS propagation or query a specific nameserver like 8.8.8.8?",
          "fr": "Peut-on vérifier la propagation DNS ou interroger un serveur précis comme 8.8.8.8 ?"
        },
        "answer": {
          "en": "No — SSHive has no custom nameserver field on any platform. Every lookup goes to the resolvers your device is already configured to use, which is the right answer for \"what does this machine see right now\" but not for surveying resolvers worldwide. To sample a different view, change your device's DNS servers, or switch between Wi-Fi and cellular, which usually swaps the resolver too. For a multi-resolver propagation sweep, a web checker remains the better instrument.",
          "fr": "Non — SSHive ne propose de champ serveur de noms personnalisé sur aucune plateforme. Chaque résolution part vers les résolveurs déjà configurés sur votre appareil, ce qui répond parfaitement à « que voit cette machine maintenant », mais pas à un balayage mondial. Pour obtenir un autre point de vue, changez les serveurs DNS de l'appareil, ou basculez entre Wi-Fi et données mobiles, ce qui change généralement de résolveur. Pour un relevé multi-résolveurs, un vérificateur web reste plus adapté."
        }
      },
      {
        "question": {
          "en": "Why doesn't SSHive show TTL values?",
          "fr": "Pourquoi SSHive n'affiche-t-il pas les TTL ?"
        },
        "answer": {
          "en": "The desktop table shows Type and Value only, and on iPhone and iPad the OS resolution API discards TTLs before the app ever sees them — getaddrinfo returns socket addresses, not resource records with their caching metadata. So no platform displays TTLs today. If you are timing a cutover and need exact remaining cache lifetimes, dig in a Mac terminal is the correct tool; SSHive answers the faster question of what the records currently are.",
          "fr": "Le tableau desktop n'affiche que Type et Valeur, et sur iPhone comme sur iPad l'API de résolution du système écarte les TTL avant même que l'app les voie : getaddrinfo renvoie des adresses de socket, pas des enregistrements avec leurs métadonnées de cache. Aucune plateforme n'affiche donc les TTL aujourd'hui. Si vous chronométrez une bascule et avez besoin des durées de cache restantes, dig dans un terminal Mac est l'outil correct ; SSHive répond à la question plus rapide de l'état actuel des enregistrements."
        }
      },
      {
        "question": {
          "en": "Can I do a reverse DNS (PTR) lookup?",
          "fr": "Peut-on faire une résolution inverse (PTR) ?"
        },
        "answer": {
          "en": "Not as a standalone tool — DNS Lookup takes a hostname, not an IP address, and there is no PTR card in the panel. Where reverse DNS actually matters most, SSHive does show it: the MX Lookup results on macOS and Windows include an rDNS column resolving each mail exchange's IPv4 address back to a name. That is the view you need when checking forward-confirmed reverse DNS on a sending host.",
          "fr": "Pas en tant qu'outil autonome : DNS Lookup attend un nom d'hôte, pas une adresse IP, et aucune carte PTR n'existe dans le panneau. En revanche, là où le reverse DNS compte vraiment, SSHive l'affiche : les résultats de MX Lookup sur macOS et Windows comportent une colonne rDNS qui résout l'adresse IPv4 de chaque serveur d'échange en nom. C'est la vue utile pour contrôler le reverse DNS confirmé d'un hôte émetteur."
        }
      },
      {
        "question": {
          "en": "Is DNS Lookup free, or does it require Pro?",
          "fr": "DNS Lookup est-il gratuit ou faut-il Pro ?"
        },
        "answer": {
          "en": "Free, on Mac, Windows, iPhone and iPad, with no ads, no account and no usage limit. The entire network-tools suite — DNS Lookup, ping, traceroute, whois, MX lookup and DNSBL blacklist check — is outside the Pro gate on every platform. Pro is a one-time purchase of about 17.99 USD, Universal Purchase across Mac, iPhone and iPad, and it unlocks SSH, SFTP, RDP and VNC capabilities. There is no subscription.",
          "fr": "Gratuit, sur Mac, Windows, iPhone et iPad, sans publicité, sans compte et sans limite d'utilisation. Toute la suite d'outils réseau — DNS Lookup, ping, traceroute, whois, MX lookup et vérification DNSBL — est hors du périmètre Pro sur chaque plateforme. Pro est un achat unique d'environ 19,99 €, en Achat Universel sur Mac, iPhone et iPad, qui débloque les fonctions SSH, SFTP, RDP et VNC. Il n'y a aucun abonnement."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "How the lookup actually runs, platform by platform",
        "fr": "Ce qui se passe réellement, plateforme par plateforme"
      },
      "body": {
        "en": "On macOS and Windows, SSHive does not call the system's POSIX name-resolution function. It uses the resolver library bundled with the desktop runtime, which builds and parses DNS messages itself and speaks the wire protocol directly to the servers listed in your network configuration. That choice is what makes non-address record types reachable at all: the POSIX getaddrinfo API can only answer one question — \"give me socket addresses for this name\" — and has no way to express \"give me the MX set\". Six queries (A, AAAA, MX, CNAME, NS, TXT) are dispatched concurrently, each with its own independent error handling, so a domain with neither AAAA nor CNAME still returns its A and MX rows instead of collapsing the whole lookup into a failure. The hostname you type is validated against a strict pattern before it ever reaches the resolver.\n\nThis implementation passes through the Mac App Store sandbox untouched. A DNS query is ordinary outbound client traffic, covered by the network-client entitlement, so there is nothing to work around.\n\niOS took longer to reach parity, and the reason is instructive. The obvious path is getaddrinfo with AF_UNSPEC: walk the returned addrinfo chain, convert each address with inet_ntop, deduplicate. It works, and it returns addresses and nothing else — that is the nature of the API, which hands back socket addresses rather than resource records, discarding TTLs, the authority and additional sections, and everything that is not an address. For a long time that was the whole iOS DNS screen: A and AAAA, with no way to ask for an MX set.\n\nThe fix was to stop using the high-level API. SSHive now calls into the BSD resolver in libresolv through a small C helper — res_init, then res_query for each record type — and parses the answer section itself with ns_initparse and ns_parserr, expanding compressed names with dn_expand. That returns the same seven types the Mac returns, each with the TTL the server actually sent. No third-party resolver library and no web API in the path: the query goes from your device to the resolvers it is already using.\n\nOne consequence of following the system's resolution path is worth knowing: it honours whatever the network imposes, including DNS64/NAT64 synthesis on IPv6-only carrier networks, where you can legitimately see an AAAA answer for a host that publishes only an A record. That is not a defect in the tool. It is the network telling you how your device will actually connect.\n\nWhat is missing everywhere, stated plainly: no SRV or CAA; no custom nameserver field; no displayed DNSSEC validation state. The practical consequence is worth internalising. SSHive answers \"what does this machine resolve, right now\" — which is the question you actually have during an incident, and the one a browser-based checker cannot answer for the device in your hand. \"What does the authoritative zone say\" is a dig @ns1.example.com question, and it remains one.",
        "fr": "Sur macOS et Windows, SSHive n'appelle pas la fonction de résolution POSIX du système. Il utilise la bibliothèque résolveur embarquée dans le runtime desktop, qui construit et analyse elle-même les messages DNS et parle directement le protocole aux serveurs déclarés dans la configuration réseau de la machine. C'est précisément ce choix qui rend accessibles les types autres que les adresses : l'API POSIX getaddrinfo ne sait répondre qu'à une seule question — « donne-moi les adresses de socket de ce nom » — et n'a aucun moyen d'exprimer « donne-moi l'ensemble MX ». Six requêtes (A, AAAA, MX, CNAME, NS, TXT) partent en parallèle, chacune avec sa propre gestion d'erreur, si bien qu'un domaine sans AAAA ni CNAME renvoie quand même ses lignes A et MX au lieu de transformer toute la résolution en échec. Le nom d'hôte saisi est validé par un motif strict avant d'atteindre le résolveur.\n\nCette implémentation traverse le bac à sable Mac App Store sans restriction. Une requête DNS est du trafic client sortant ordinaire, couvert par l'entitlement client réseau : il n'y a rien à contourner.\n\niOS a mis plus longtemps à atteindre la parité, et la raison est instructive. Le chemin évident est getaddrinfo avec AF_UNSPEC : parcourir la chaîne addrinfo renvoyée, convertir chaque adresse avec inet_ntop, dédupliquer. Cela fonctionne, et cela renvoie des adresses et rien d'autre — c'est la nature de l'API, qui rend des adresses de socket et non des enregistrements de ressource, en écartant les TTL, les sections d'autorité et additionnelle, et tout ce qui n'est pas une adresse. L'écran DNS d'iOS s'est longtemps arrêté là : des A et des AAAA, sans moyen de demander un ensemble MX.\n\nLa solution a été d'abandonner l'API de haut niveau. SSHive appelle désormais le résolveur BSD de libresolv via un petit assistant en C — res_init, puis res_query pour chaque type d'enregistrement — et analyse lui-même la section de réponse avec ns_initparse et ns_parserr, en étendant les noms compressés par dn_expand. On obtient les sept mêmes types que sur Mac, chacun avec la durée de vie réellement envoyée par le serveur. Aucune bibliothèque de résolution tierce, aucune API web sur le trajet : la requête part de votre appareil vers les résolveurs qu'il utilise déjà.\n\nUne conséquence de ce chemin système mérite d'être connue : il respecte ce que le réseau impose, y compris la synthèse DNS64/NAT64 sur les réseaux mobiles en IPv6 seul, où vous pouvez légitimement voir un AAAA pour un hôte qui ne publie qu'un A. Ce n'est pas un défaut de l'outil : c'est le réseau qui vous dit comment votre appareil se connectera réellement.\n\nCe qui manque partout, dit clairement : ni SRV, ni CAA ; pas de champ serveur de noms personnalisé ; pas d'état de validation DNSSEC affiché. La conséquence pratique mérite d'être intégrée : SSHive répond à « que résout cette machine, maintenant » — la question que l'on se pose réellement pendant un incident, et celle à laquelle un vérificateur web ne peut pas répondre pour l'appareil que vous tenez. « Que dit la zone faisant autorité » reste une question pour dig @ns1.exemple.fr."
      }
    },
    "relatedTools": [
      "mx-lookup",
      "whois",
      "ping"
    ]
  },
  {
    "slug": "whois",
    "iconName": "Search",
    "metaTitle": {
      "en": "Whois Lookup for Mac, iPhone and iPad — Port 43",
      "fr": "Whois sur Mac, iPhone et iPad — port 43 natif"
    },
    "metaDescription": {
      "en": "Run a whois lookup on Mac, iPhone or iPad. SSHive queries port 43 directly, follows registry referrals, and shows registrar, dates, name servers — plus status codes and abuse contacts on desktop.",
      "fr": "Faites un whois depuis un Mac, un iPhone ou un iPad. SSHive interroge le port 43 en direct, suit les renvois et affiche registrar, dates et statuts."
    },
    "h1": {
      "en": "Look up who owns a domain, from your Mac or your iPhone",
      "fr": "Savoir à qui appartient un domaine, depuis votre Mac ou votre iPhone"
    },
    "hero": {
      "en": "SSHive opens the TCP connection to the whois server on port 43 itself — no web API in the middle, no third party logging what you look up.",
      "fr": "SSHive ouvre lui-même la connexion TCP sur le port 43 du serveur whois : aucune API web intermédiaire, aucun tiers qui journalise vos recherches."
    },
    "intro": {
      "en": "A domain stops resolving, a certificate renewal fails, or an abuse complaint lands pointing at an IP address you have never seen. The first question is always the same: who is behind this, and when does it expire? On a Mac you used to open Network Utility, click the Whois tab and type the domain. That tab is gone — Apple deprecated Network Utility in Big Sur and the app no longer exists on current macOS. On an iPhone there was never a terminal in the first place, so whois example.com was never an option.\n\nWhat most people do instead is open a whois website. That works, but it means the domain you are investigating — and the IP of the machine you are investigating it from — passes through someone else's server, absorbs their rate limits, and comes back reformatted or cached in ways that hide what the registry actually returned. Several iOS whois apps do exactly the same thing behind the scenes: they call a third-party REST API and render its JSON.\n\nSSHive does not. It speaks the WHOIS protocol itself: RFC 3912, a plain TCP connection to port 43, one query line terminated with CRLF, and the server answers in free-form text until it closes the socket. That is the entire protocol. Because there is no shelling out to /usr/bin/whois and no raw sockets involved, whois needs nothing but an outbound TCP connection — so it runs on the Mac App Store build, the direct download, iPhone and iPad alike, with no sandbox exceptions. The desktop and mobile builds each speak the protocol directly; the desktop one goes further down the referral chain, as the next section explains.\n\nThe tool is free on every platform. None of SSHive's network tools sits behind a licence check, on any device.",
      "fr": "Un domaine cesse de résoudre, un renouvellement de certificat échoue, ou une plainte pour abus tombe en désignant une IP que vous ne connaissez pas. La question est toujours la même : qui est derrière, et quand est-ce que ça expire ? Sur Mac, on ouvrait l'Utilitaire de réseau, onglet Whois, et on tapait le domaine. Cet onglet n'existe plus : Apple a déprécié l'Utilitaire de réseau à partir de Big Sur et l'application a disparu des versions actuelles de macOS. Sur iPhone, il n'y a jamais eu de terminal, donc whois example.com n'a jamais été une option.\n\nLe réflexe, c'est d'ouvrir un site de whois. Ça marche, mais le domaine sur lequel vous enquêtez — et l'IP de la machine depuis laquelle vous enquêtez — transitent par le serveur de quelqu'un d'autre, subissent ses quotas, et la réponse revient reformatée ou mise en cache d'une manière qui masque ce que le registre a réellement renvoyé. C'est aussi ce que font, en coulisses, les outils whois qui s'appuient sur une API REST tierce plutôt que sur le protocole lui-même.\n\nSSHive, non. L'application parle le protocole WHOIS elle-même : RFC 3912, une simple connexion TCP sur le port 43, une ligne de requête terminée par CRLF, et le serveur répond en texte libre jusqu'à ce qu'il ferme la socket. C'est tout le protocole. Comme il n'y a ni appel à /usr/bin/whois ni socket brute, le whois n'a besoin que d'une connexion TCP sortante : il fonctionne donc sur la version Mac App Store, le téléchargement direct, l'iPhone et l'iPad, sans aucune exception liée au bac à sable. Les versions bureau et mobile parlent chacune le protocole en direct ; la version bureau remonte simplement plus loin la chaîne de renvois, comme expliqué plus bas.\n\nL'outil est gratuit sur toutes les plateformes. Aucun des outils réseau de SSHive n'est réservé à Pro, sur aucun appareil."
    },
    "capabilities": [
      {
        "title": {
          "en": "Direct TCP on port 43, no intermediary",
          "fr": "TCP direct sur le port 43, sans intermédiaire"
        },
        "body": {
          "en": "SSHive opens the WHOIS connection itself: a Node socket on port 43 in the desktop builds, an NWConnection on iPhone and iPad. The query goes to the registry or registrar server and the answer comes back to your device. No proxy of ours sits in the path, and no third-party REST API sees which domains you look up.",
          "fr": "SSHive ouvre lui-même la connexion WHOIS : une socket Node sur le port 43 côté bureau, une NWConnection sur iPhone et iPad. La requête part vers le serveur du registre ou du registrar et la réponse revient sur votre appareil. Aucun proxy maison sur le trajet, aucune API REST tierce ne voit quels domaines vous consultez."
        }
      },
      {
        "title": {
          "en": "A registry table that skips a round trip",
          "fr": "Une table de registres qui évite un aller-retour"
        },
        "body": {
          "en": "On Mac and Windows, SSHive keeps a table of well-known registry servers: .com and .net to Verisign, .org to PIR, .fr to AFNIC, .de to DENIC, .uk to Nominet, plus .io, .ca, .jp, .eu, .it and others. Known TLDs go straight to the right registry instead of asking IANA first. Anything unknown falls back to whois.iana.org.",
          "fr": "Sur Mac et Windows, SSHive embarque une table des serveurs de registre courants : .com et .net chez Verisign, .org chez PIR, .fr chez l'AFNIC, .de chez DENIC, .uk chez Nominet, plus .io, .ca, .jp, .eu, .it et d'autres. Les TLD connus partent directement au bon registre au lieu d'interroger l'IANA d'abord. Le reste retombe sur whois.iana.org."
        }
      },
      {
        "title": {
          "en": "Referral chasing down to the registrar",
          "fr": "Suivi des renvois jusqu'au registrar"
        },
        "body": {
          "en": "Thin registries such as Verisign only hold the registrar, the dates and the name servers. SSHive reads the referral out of the response and re-queries: up to three hops on Mac and Windows, recognising refer:, Registrar WHOIS Server: and ARIN's ReferralServer: rwhois:// lines. Each hop is announced in the output. iPhone and iPad follow exactly one referral, starting from IANA.",
          "fr": "Les registres dits fins, comme Verisign, ne détiennent que le registrar, les dates et les serveurs de noms. SSHive lit le renvoi dans la réponse et relance la requête : jusqu'à trois sauts sur Mac et Windows, en reconnaissant les lignes refer:, Registrar WHOIS Server: et ReferralServer: rwhois:// de l'ARIN. Chaque saut est annoncé dans la sortie. iPhone et iPad suivent exactement un renvoi, depuis l'IANA."
        }
      },
      {
        "title": {
          "en": "Parsed summary and the untouched text",
          "fr": "Résumé structuré et texte brut"
        },
        "body": {
          "en": "The desktop build extracts domain, registrar and registrar site, creation, updated and expiry dates, organisation, contact, country, email, DNSSEC, abuse email, name servers and status codes — showing only the fields the server actually returned. An expiry under sixty days away is highlighted in amber. Show raw exposes the response verbatim, and Copy puts it on the clipboard.",
          "fr": "La version bureau extrait le domaine, le registrar et son site, les dates de création, de mise à jour et d'expiration, l'organisation, le contact, le pays, l'e-mail, DNSSEC, l'e-mail d'abus, les serveurs de noms et les codes de statut — en n'affichant que les champs réellement renvoyés. Une expiration à moins de soixante jours passe en ambre. Show raw révèle la réponse intacte, et Copy la met dans le presse-papiers."
        }
      },
      {
        "title": {
          "en": "IP whois through ARIN",
          "fr": "Whois d'IP via l'ARIN"
        },
        "body": {
          "en": "Type a dotted-quad IPv4 address on Mac or Windows and SSHive detects it, opens at ARIN using ARIN's n <ip> query form, then follows the ReferralServer line onward to RIPE, APNIC, LACNIC or AFRINIC when the block sits outside the ARIN region. You get the netblock, the CIDR range and the holding organisation. There is no manual RIR selector — the referral chain decides.",
          "fr": "Saisissez une IPv4 en notation pointée sur Mac ou Windows : SSHive la détecte, attaque l'ARIN avec la syntaxe n <ip>, puis suit la ligne ReferralServer vers le RIPE, l'APNIC, LACNIC ou AFRINIC si le bloc est alloué hors zone ARIN. Vous obtenez le netblock, la plage CIDR et l'organisation détentrice. Pas de sélecteur de RIR manuel : la chaîne de renvois décide."
        }
      },
      {
        "title": {
          "en": "The same lookup on iPhone and iPad",
          "fr": "La même recherche sur iPhone et iPad"
        },
        "body": {
          "en": "On mobile, Whois lives in the Tools tab under Diagnostics. The result opens with the domain in monospace and the registrar underneath, then a Dates section with creation and expiry, then every name server in lowercase, each with a one-tap copy button (the Dates rows confirm the copy with a checkmark). The full raw response sits in a collapsible section below.",
          "fr": "Sur mobile, Whois se trouve dans l'onglet Outils, section Diagnostic. Le résultat s'ouvre sur le domaine en monospace avec le registrar en sous-titre, puis une section Dates avec création et expiration, puis chaque serveur de noms en minuscules — chacun avec un bouton de copie qui confirme d'une coche. La réponse brute complète est repliée en dessous."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open SSHive's network tools",
          "fr": "Ouvrir les outils réseau de SSHive"
        },
        "body": {
          "en": "On Mac or Windows, click the network icon in the sidebar, or the Network tools pill on the welcome screen. Either one opens a Tools tab. On iPhone, tap Tools in the bottom tab bar; on iPad, pick Network tools in the sidebar.",
          "fr": "Sur Mac ou Windows, cliquez sur l'icône réseau dans la barre latérale, ou sur la pastille Outils réseau de l'écran d'accueil. L'un comme l'autre ouvre un onglet Outils. Sur iPhone, touchez Outils dans la barre d'onglets du bas ; sur iPad, choisissez Outils réseau dans la barre latérale."
        }
      },
      {
        "title": {
          "en": "Find the Whois card",
          "fr": "Trouver la carte Whois"
        },
        "body": {
          "en": "On the desktop, Whois is the third and last full-width card at the bottom of the panel, below Ping and Traceroute. On iPhone and iPad, Whois is the fourth row of the Diagnostics section, the one described as information about a domain.",
          "fr": "Sur ordinateur, Whois est la troisième et dernière carte pleine largeur, en bas du panneau, sous Ping et Traceroute. Sur iPhone et iPad, Whois est la quatrième ligne de la section Diagnostic, sous-titrée Informations sur un domaine."
        }
      },
      {
        "title": {
          "en": "Enter a domain or an IPv4 address",
          "fr": "Saisir un domaine ou une IPv4"
        },
        "body": {
          "en": "Type the target in the input — the placeholder shows e.g. google.com. A bare domain works; so does a dotted-quad IPv4 address on the desktop build, which routes the query to ARIN instead of a TLD registry. Press Run. Cancel stops a query that is still in flight.",
          "fr": "Tapez la cible dans le champ — le texte d'exemple affiche e.g. google.com. Un domaine nu fonctionne ; une IPv4 en notation pointée aussi sur la version bureau, ce qui redirige la requête vers l'ARIN plutôt que vers un registre de TLD. Lancez avec Run. Cancel interrompt une requête en cours."
        }
      },
      {
        "title": {
          "en": "Watch the referral chain",
          "fr": "Suivre la chaîne de renvois"
        },
        "body": {
          "en": "The desktop build prints a line each time it queries a server and each time it follows a referral, so you can tell whether the answer came from IANA, from the registry or from the registrar. Each hop has a ten-second timeout, and only the final response body is displayed.",
          "fr": "La version bureau imprime une ligne à chaque interrogation de serveur et à chaque renvoi suivi : vous voyez si la réponse vient de l'IANA, du registre ou du registrar. Chaque saut dispose d'un délai de dix secondes, et seul le corps de la dernière réponse est affiché."
        }
      },
      {
        "title": {
          "en": "Read the summary, then the raw text",
          "fr": "Lire le résumé, puis le brut"
        },
        "body": {
          "en": "Check the registrar, the expiry date (amber under sixty days) and the status codes first. Then open Show raw — Raw response on mobile — to see exactly what the server sent, including fields SSHive does not parse. The Copy link in the header puts the whole response on the clipboard.",
          "fr": "Regardez d'abord le registrar, la date d'expiration (en ambre sous soixante jours) et les codes de statut. Ouvrez ensuite Show raw — Réponse brute sur mobile — pour voir exactement ce que le serveur a envoyé, y compris les champs que SSHive ne parse pas. Le lien Copy copie l'ensemble."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "Reading a whois response: status codes, dates, name servers and redaction",
        "fr": "Lire une réponse whois : statuts, dates, serveurs de noms et anonymisation"
      },
      "body": {
        "en": "Status codes are the part most people scroll past, and they are usually the answer. Any code prefixed with client was set by the registrar; anything prefixed with server was set by the registry, and only the registry can lift it. clientTransferProhibited is normal and healthy — it is the transfer lock most registrars enable by default, not a warning. The ones that matter are clientHold and serverHold: a held domain is pulled out of the TLD zone entirely, so it stops resolving while the registration itself is still valid. If a site went dark and the apex returns NXDOMAIN, look for a hold before you touch DNS. redemptionPeriod means it already expired and was deleted; pendingDelete means the name drops in about five days. A bare ok, with no locks at all, is arguably worse on a production domain than clientTransferProhibited.\n\nCreation Date is the original registration, not the last renewal — a 2003 creation date on a domain that changed hands last year tells you nothing about who runs it now. Registry Expiry Date is the one that counts, because it is the registry's own record; the desktop build highlights it in amber under sixty days. Your registrar's control panel often shows a later date, since registrars renew ahead of the registry. After expiry a gTLD normally gets around thirty days of auto-renew grace, then a thirty-day redemption period with a punitive restore fee, then five days of pendingDelete.\n\nName servers are shown as the registry holds the delegation, which is what the TLD zone actually hands out. Compare that list against the NS records from a DNS lookup: a mismatch means either a delegation change that has not propagated, or a lame delegation where the parent points at servers that are no longer authoritative — a classic cause of intermittent resolution failures.\n\nRedaction is the default, not evasion. Since GDPR, gTLD whois strips registrant name, address, phone and email, so REDACTED FOR PRIVACY tells you nothing about a domain's reputation. What survives is what ICANN still mandates: registrar, dates, name servers, status codes and Registrar Abuse Contact Email — that last field is the one you actually want for a takedown. ccTLDs vary sharply: AFNIC still publishes legal entities for .fr while hiding individuals, and DENIC returns little beyond technical fields for .de.",
        "fr": "Les codes de statut sont la partie que tout le monde saute, et c'est presque toujours là que se trouve la réponse. Tout code préfixé client a été posé par le registrar ; tout code préfixé server vient du registre, et seul le registre peut le lever. clientTransferProhibited est normal et sain : c'est le verrou de transfert que la plupart des registrars activent par défaut, pas un avertissement. Ceux qui comptent sont clientHold et serverHold : un domaine en hold est retiré de la zone du TLD, il cesse donc de résoudre alors que l'enregistrement reste parfaitement valide. Si un site est tombé et que l'apex renvoie NXDOMAIN, cherchez un hold avant de toucher au DNS. redemptionPeriod signifie qu'il a déjà expiré et été supprimé ; pendingDelete qu'il sera libéré dans environ cinq jours. Un simple ok, sans aucun verrou, est sans doute plus inquiétant sur un domaine de production que clientTransferProhibited.\n\nCreation Date est la date d'enregistrement d'origine, pas celle du dernier renouvellement : une création en 2003 sur un domaine revendu l'an dernier ne dit rien de son exploitant actuel. Registry Expiry Date est la date qui fait foi, parce qu'elle vient du registre lui-même ; la version bureau la surligne en ambre à moins de soixante jours. Le panneau de votre registrar affiche souvent une date plus tardive, car les registrars renouvellent en avance. Après expiration, un gTLD passe généralement par une trentaine de jours de grâce en auto-renew, puis trente jours de redemption avec des frais de restauration dissuasifs, puis cinq jours de pendingDelete.\n\nLes serveurs de noms affichés sont ceux que le registre détient dans la délégation, c'est-à-dire ce que la zone du TLD renvoie réellement. Comparez cette liste aux enregistrements NS obtenus par un DNS lookup : un écart signifie soit un changement de délégation non propagé, soit une délégation boiteuse dont le parent pointe vers des serveurs qui ne font plus autorité — cause classique de résolutions intermittentes.\n\nL'anonymisation est la règle, pas un aveu. Depuis le RGPD, le whois des gTLD supprime nom, adresse, téléphone et e-mail du titulaire : REDACTED FOR PRIVACY ne dit rien de la réputation d'un domaine. Ce qui subsiste est ce que l'ICANN impose toujours : registrar, dates, serveurs de noms, codes de statut et Registrar Abuse Contact Email — c'est ce dernier champ qu'il vous faut pour un signalement. Les ccTLD varient nettement : l'AFNIC publie encore les personnes morales en .fr tout en masquant les particuliers, et DENIC ne renvoie guère plus que des champs techniques pour .de."
      }
    },
    "faq": [
      {
        "question": {
          "en": "Does whois work in the Mac App Store version of SSHive?",
          "fr": "Le whois fonctionne-t-il dans la version Mac App Store de SSHive ?"
        },
        "answer": {
          "en": "Yes, and it is exactly the same code as the direct download. Whois needs nothing more than an outbound TCP connection to port 43, which the App Sandbox allows, so there is no feature gap here — and none in the rest of the suite either: ping and traceroute send real ICMP from the App Store build too, through a datagram socket the sandbox permits.",
          "fr": "Oui, et c'est exactement le même code que le téléchargement direct. Le whois ne demande rien de plus qu'une connexion TCP sortante sur le port 43, que le bac à sable d'Apple autorise : il n'y a donc aucun écart de fonctionnalité — ni pour lui, ni pour le reste de la suite : le ping et le traceroute émettent du vrai ICMP depuis la version App Store également, via un socket datagramme que le bac à sable autorise."
        }
      },
      {
        "question": {
          "en": "Why does whois on my iPhone show fewer fields than on my Mac?",
          "fr": "Pourquoi le whois de mon iPhone affiche-t-il moins de champs que celui de mon Mac ?"
        },
        "answer": {
          "en": "Because the two builds walk the chain differently. Mac and Windows keep a table of registry servers, so a lookup goes straight to Verisign or AFNIC, then chases up to three referrals to reach the sponsoring registrar. iPhone and iPad always start at IANA and follow exactly one referral, which for a .com usually ends at Verisign — a thin registry that returns only registrar, dates and name servers. Mobile also parses just those field groups; DNSSEC, status codes, registrant details and abuse contacts are desktop-only.",
          "fr": "Parce que les deux versions parcourent la chaîne différemment. Mac et Windows embarquent une table de serveurs de registre : la requête part directement chez Verisign ou l'AFNIC, puis suit jusqu'à trois renvois pour atteindre le registrar. iPhone et iPad démarrent toujours à l'IANA et ne suivent qu'un seul renvoi, ce qui, pour un .com, s'arrête généralement chez Verisign — un registre fin qui ne renvoie que registrar, dates et serveurs de noms. Le mobile ne parse d'ailleurs que ces groupes de champs : DNSSEC, codes de statut, titulaire et contact d'abus restent réservés au bureau."
        }
      },
      {
        "question": {
          "en": "Why is the owner's name replaced by REDACTED FOR PRIVACY?",
          "fr": "Pourquoi le nom du propriétaire est-il remplacé par REDACTED FOR PRIVACY ?"
        },
        "answer": {
          "en": "GDPR. Since 2018, gTLD registries and registrars strip registrant name, address, phone and email from public whois output by default, and no client can recover them — the data is simply not sent over port 43. It is not a signal that a domain is suspicious; it applies to essentially every .com. What remains is registrar, dates, name servers, status codes and the Registrar Abuse Contact Email, which is the correct channel for a complaint. Some ccTLDs are less strict: AFNIC still publishes .fr registrations held by legal entities.",
          "fr": "Le RGPD. Depuis 2018, les registres et registrars de gTLD retirent par défaut nom, adresse, téléphone et e-mail du titulaire de la sortie whois publique, et aucun client ne peut les récupérer : la donnée n'est tout simplement pas envoyée sur le port 43. Ce n'est pas un signe de domaine suspect, cela s'applique à quasiment tous les .com. Restent le registrar, les dates, les serveurs de noms, les codes de statut et le Registrar Abuse Contact Email, qui est le bon canal pour un signalement. Certains ccTLD sont moins stricts : l'AFNIC publie encore les .fr détenus par des personnes morales."
        }
      },
      {
        "question": {
          "en": "Can I run a whois on an IP address instead of a domain?",
          "fr": "Puis-je faire un whois sur une adresse IP plutôt que sur un domaine ?"
        },
        "answer": {
          "en": "On Mac and Windows, yes. SSHive detects a dotted-quad IPv4 address, opens the query at ARIN using ARIN's n <ip> syntax, then follows the ReferralServer line to RIPE, APNIC, LACNIC or AFRINIC when the block is allocated outside the ARIN region. You get the netblock, the CIDR range and the organisation holding it. There is no manual RIR picker — the referral chain decides. One caveat: rwhois referrals that carry a non-standard port are still dialled on port 43.",
          "fr": "Sur Mac et Windows, oui. SSHive détecte une IPv4 en notation pointée, ouvre la requête chez l'ARIN avec la syntaxe n <ip>, puis suit la ligne ReferralServer vers le RIPE, l'APNIC, LACNIC ou AFRINIC si le bloc est alloué hors zone ARIN. Vous obtenez le netblock, la plage CIDR et l'organisation détentrice. Pas de sélecteur de RIR manuel : la chaîne de renvois décide. Une réserve : les renvois rwhois portant un port non standard sont malgré tout contactés sur le port 43."
        }
      },
      {
        "question": {
          "en": "Does SSHive send my lookups through its own servers?",
          "fr": "SSHive fait-il transiter mes recherches par ses propres serveurs ?"
        },
        "answer": {
          "en": "No. The connection goes from your Mac, iPhone or iPad straight to the whois server run by IANA, the registry or the registrar. There is no SSHive backend in the path and no third-party REST API, which is how several iOS whois apps are actually built. Be clear-eyed about the limit of that claim: the whois server you query still sees your IP address, because that is how TCP works. What changes is that nobody in between keeps a log of what you asked.",
          "fr": "Non. La connexion part de votre Mac, iPhone ou iPad directement vers le serveur whois de l'IANA, du registre ou du registrar. Aucun backend SSHive sur le trajet, aucune API REST tierce — alors que plusieurs applications whois iOS sont construites exactement ainsi. Soyons précis sur la portée de cette affirmation : le serveur whois interrogé voit toujours votre adresse IP, c'est le fonctionnement de TCP. Ce qui change, c'est que personne entre les deux ne conserve de trace de vos requêtes."
        }
      },
      {
        "question": {
          "en": "Is the whois tool free, or does it need Pro?",
          "fr": "L'outil whois est-il gratuit ou faut-il Pro ?"
        },
        "answer": {
          "en": "Free, on Mac, Windows, iPhone and iPad. None of SSHive's network tools — whois, DNS lookup, ping, traceroute, MX lookup, blacklist check — sits behind a licence check on any platform. SSHive Pro is a one-time purchase of about 17.99 USD, a Universal Purchase covering Mac, iPhone and iPad, with no subscription and no account, and it unlocks things like RDP and VNC sessions, tunnels and SFTP upload. The network tools are not part of that.",
          "fr": "Gratuit, sur Mac, Windows, iPhone et iPad. Aucun outil réseau de SSHive — whois, DNS lookup, ping, traceroute, MX lookup, blacklist check — n'est soumis à une vérification de licence, sur aucune plateforme. SSHive Pro est un achat unique d'environ 19,99 €, en achat universel Mac + iPhone + iPad, sans abonnement ni compte, et il débloque par exemple les sessions RDP et VNC, les tunnels ou l'envoi SFTP. Les outils réseau n'en font pas partie."
        }
      },
      {
        "question": {
          "en": "My query returned nothing or hung. What went wrong?",
          "fr": "Ma requête n'a rien renvoyé ou s'est bloquée. Que s'est-il passé ?"
        },
        "answer": {
          "en": "Three common causes. The TLD may not be in SSHive's registry table, so the query starts at IANA and depends on the referral being present and well-formed. The registry may be rate-limiting you: whois servers cut off repeated queries from the same IP, and SSHive does not detect or back off from that, so you simply get a truncated or empty body. Or the server is silent — the desktop build gives up after ten seconds per hop, but on iPhone and iPad there is no per-query timer, so cancel and retry.",
          "fr": "Trois causes fréquentes. Le TLD n'est peut-être pas dans la table de registres de SSHive : la requête démarre alors à l'IANA et dépend de la présence d'un renvoi bien formé. Le registre vous limite peut-être en débit : les serveurs whois coupent les requêtes répétées venant d'une même IP, et SSHive ne détecte pas cette situation et n'applique aucun back-off, vous obtenez donc un corps tronqué ou vide. Ou le serveur reste muet — la version bureau abandonne au bout de dix secondes par saut, mais sur iPhone et iPad il n'y a pas de minuteur par requête : annulez et relancez."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "The protocol behind the tool: RFC 3912, thin registries and the Apple sandbox",
        "fr": "Le protocole derrière l'outil : RFC 3912, registres fins et sandbox Apple"
      },
      "body": {
        "en": "WHOIS is defined by RFC 3912, and the specification runs to barely two pages. You open a TCP connection to port 43, send a single line terminated by CRLF, and read whatever the server sends back until it closes the connection. There is no schema, no content type, no length header, no authentication and no encryption. The response is free-form text whose layout is decided entirely by the operator, which is why every whois client on earth is a pile of heuristics rather than a parser.\n\nThat missing length header has a concrete consequence on the client side: the only reliable end-of-message signal is the FIN. SSHive's iOS implementation therefore loops on NWConnection receives with a maximum length of 65536 bytes and keeps appending until the stream reports completion, rather than stopping at the first chunk. The desktop implementation does the same over a Node socket, with a ten-second timeout per hop so that a silent server cannot hang the panel. On iPhone and iPad there is currently no such per-query timer, so an unresponsive whois server leaves the spinner running until the network layer gives up on its own — worth knowing before you blame the app.\n\nThe second complication is that the data you want is rarely on the first server you ask. The namespace is hierarchical: IANA knows which registry runs each TLD, the registry knows which registrar sponsors each domain, and for thin registries only that registrar holds the contact details. Verisign is thin for .com and .net, so a query there returns registrar, dates and name servers and little else; PIR is thick for .org and answers with far more in one shot. Following the chain means recognising three different referral spellings: refer: from IANA and ARIN, Registrar WHOIS Server: from gTLD registries, and ReferralServer: rwhois://host:port from ARIN. The desktop build handles all three and follows up to three hops, and it keeps a table of well-known registry servers so common TLDs skip the IANA hop entirely. The iPhone and iPad build always starts at IANA and follows exactly one referral, which for a .com typically lands on Verisign and stops there — fewer fields than the Mac, by construction.\n\nThe rough edges, stated plainly: only the final hop's body is shown, so intermediate registry responses are discarded; rwhois referrals carrying a non-standard port are still dialled on 43; there is no rate-limit detection, so hammering a registry eventually returns a refusal instead of data; and the mobile referral detector matches on substring rather than line prefix, so an unrelated line containing that text can occasionally send it to the wrong server.\n\nThe upside of this design is portability. Port 43 is an ordinary outbound TCP connection, covered by the standard network-client entitlement, with no privileged binary to spawn and no raw sockets to request. That is precisely why whois behaves identically in the Mac App Store build, in the direct download, on iPhone and on iPad. The same now holds for ping and traceroute, which reach that parity a different way: not by avoiding ICMP, but by using the datagram ICMP socket that Darwin grants unprivileged processes and the sandbox permits.",
        "fr": "WHOIS est défini par la RFC 3912, et la spécification tient sur deux pages. On ouvre une connexion TCP sur le port 43, on envoie une seule ligne terminée par CRLF, et on lit ce que le serveur renvoie jusqu'à ce qu'il ferme la connexion. Pas de schéma, pas de type de contenu, pas d'en-tête de longueur, pas d'authentification, pas de chiffrement. La réponse est du texte libre dont la mise en forme dépend entièrement de l'opérateur : c'est pourquoi tout client whois est un empilement d'heuristiques plutôt qu'un parseur.\n\nL'absence d'en-tête de longueur a une conséquence concrète côté client : le seul signal fiable de fin de message est le FIN. L'implémentation iOS de SSHive boucle donc sur des réceptions NWConnection avec une taille maximale de 65536 octets et continue d'accumuler jusqu'à la complétion du flux, au lieu de s'arrêter au premier bloc. La version bureau fait de même sur une socket Node, avec un délai de dix secondes par saut pour qu'un serveur muet ne bloque pas le panneau. Sur iPhone et iPad, il n'existe pour l'instant aucun minuteur par requête : un serveur whois qui ne répond pas laisse tourner l'indicateur jusqu'à ce que la couche réseau abandonne d'elle-même. Autant le savoir avant d'incriminer l'application.\n\nDeuxième complication : la donnée recherchée est rarement sur le premier serveur interrogé. L'espace de noms est hiérarchique. L'IANA sait quel registre gère chaque TLD, le registre sait quel registrar parraine chaque domaine, et pour les registres fins seul ce registrar détient les coordonnées. Verisign est fin pour .com et .net : une requête n'y renvoie guère plus que le registrar, les dates et les serveurs de noms. PIR est épais pour .org et répond bien plus complètement en un seul appel. Suivre la chaîne suppose de reconnaître trois écritures de renvoi : refer: chez l'IANA et l'ARIN, Registrar WHOIS Server: chez les registres de gTLD, et ReferralServer: rwhois://hôte:port chez l'ARIN. La version bureau gère les trois et suit jusqu'à trois sauts, et sa table de serveurs de registre permet aux TLD courants d'éviter complètement le passage par l'IANA. La version iPhone et iPad part toujours de l'IANA et ne suit qu'un renvoi, ce qui pour un .com s'arrête généralement chez Verisign — moins de champs que sur Mac, par construction.\n\nLes limites, dites franchement : seul le corps du dernier saut est affiché, les réponses intermédiaires sont écartées ; les renvois rwhois portant un port non standard sont malgré tout contactés sur le 43 ; il n'y a aucune détection de quota, donc marteler un registre finit par renvoyer un refus plutôt que des données ; et le détecteur de renvoi mobile fait une correspondance par sous-chaîne et non par préfixe de ligne, si bien qu'une ligne sans rapport contenant ce texte peut l'orienter vers le mauvais serveur.\n\nL'avantage de cette conception, c'est la portabilité. Le port 43 n'est qu'une connexion TCP sortante ordinaire, couverte par l'entitlement réseau client standard, sans binaire privilégié à lancer ni socket brute à demander. C'est précisément pour cela que le whois se comporte de façon identique dans la version Mac App Store, dans le téléchargement direct, sur iPhone et sur iPad. C'est désormais vrai aussi du ping et du traceroute, qui atteignent cette parité autrement : non pas en évitant l'ICMP, mais en utilisant le socket ICMP datagramme que Darwin accorde aux processus non privilégiés et que le bac à sable autorise."
      }
    },
    "relatedTools": [
      "dns-lookup",
      "mx-lookup",
      "blacklist-check"
    ]
  },
  {
    "slug": "mx-lookup",
    "iconName": "Mail",
    "metaTitle": {
      "en": "MX Record Lookup on Mac, iPhone and iPad",
      "fr": "Lookup MX : enregistrements MX sur Mac et iPhone"
    },
    "metaDescription": {
      "en": "Run an MX lookup on Mac, iPhone or iPad: mail server priorities, resolved IPs, reverse DNS and DNSBL reputation in one native table. Free, no ads.",
      "fr": "Lookup MX natif sur Mac, iPhone et iPad : priorités des serveurs de messagerie, IP résolues, DNS inverse et réputation DNSBL. Gratuit, sans publicité."
    },
    "h1": {
      "en": "Find out where a domain's mail is really delivered",
      "fr": "Découvrez où le courrier d'un domaine est réellement livré"
    },
    "hero": {
      "en": "Every MX record for a domain, sorted the way a sending mail server reads them — with IPs, reverse DNS and blacklist status on the desktop builds.",
      "fr": "Tous les enregistrements MX d'un domaine, triés comme les lit un serveur expéditeur — avec IP, DNS inverse et réputation DNSBL sur macOS et Windows."
    },
    "intro": {
      "en": "Mail stopped arriving, or it is arriving at the wrong server. The first thing to establish is not whether your firewall is open or your mailbox is full — it is where the internet currently believes your mail should be delivered. That answer lives in one place: the domain's MX records. Every sending mail server on the planet queries them before it opens a single SMTP connection, and if they say something you did not expect, nothing downstream of them matters.\n\nMX lookups are also the step people skip after a migration. You move a domain to a new provider, the change looks correct in the control panel, and mail keeps landing in the old mailbox for another day because the records were never updated or because a stale copy is still being served. A thirty-second lookup would have shown it.\n\nSSHive runs that lookup natively on Mac, iPhone and iPad. It queries the DNS resolvers your device is already configured to use — no web API in the middle, no account, no ads. On macOS and Windows it does not stop at the record list: each exchange is resolved to its IPv4 addresses, each address is reverse-resolved to its PTR name, and the first address of every exchange is checked against eight DNSBL zones. You get the whole mail edge of a domain in one table: who receives, in what order, on which hosts, and whether those hosts carry a reputation problem.\n\nOn iPhone and iPad you get the record list itself — priority and exchange hostname — pulled from the system resolver with a real DNS type 15 query, which is more than iOS's standard APIs will give you. It is free on Mac, Windows, iPhone and iPad — including the sandboxed Mac App Store build; no network tool in SSHive is behind the Pro gate.",
      "fr": "C'est gratuit sur Mac, Windows, iPhone et iPad — version Mac App Store comprise : aucun outil réseau de SSHive n'est réservé à Pro.\n\nOne limit stated plainly: this is an MX and reputation tool, not a full mail-authentication audit. SSHive does not inspect SPF, DKIM, DMARC, MTA-STS or TLS-RPT, does not grab SMTP banners, and does not test port 25 on any platform."
    },
    "capabilities": [
      {
        "title": {
          "en": "Priorities, in the order SMTP reads them",
          "fr": "Les priorités, dans l'ordre où SMTP les lit"
        },
        "body": {
          "en": "SSHive queries the domain's MX records and sorts them ascending by preference, which is exactly the order a sending MTA walks them. The lowest number is tried first. On macOS and Windows the result is a five-column table; on iPhone and iPad each row carries a colour-coded priority capsule — green up to 10, orange up to 20, red above that.",
          "fr": "SSHive interroge les enregistrements MX du domaine et les trie par préférence croissante, exactement l'ordre dans lequel un MTA expéditeur les parcourt. Le plus petit numéro est essayé en premier. Sur macOS et Windows le résultat est un tableau à cinq colonnes ; sur iPhone et iPad chaque ligne porte une capsule de priorité colorée — verte jusqu'à 10, orange jusqu'à 20, rouge au-delà."
        }
      },
      {
        "title": {
          "en": "Each exchange resolved to its addresses",
          "fr": "Chaque serveur résolu en adresses"
        },
        "body": {
          "en": "On macOS and Windows every MX hostname is resolved to its IPv4 addresses and shown comma-separated in the IP column. An em dash means no A record came back — either the host is IPv6-only, since SSHive resolves IPv4 here, or the MX points at a name that no longer exists. Both are worth chasing down.",
          "fr": "Sur macOS et Windows, chaque nom de serveur MX est résolu en adresses IPv4, affichées séparées par des virgules dans la colonne IP. Un tiret cadratin signifie qu'aucun enregistrement A n'est revenu : soit l'hôte est en IPv6 uniquement, puisque SSHive résout ici en IPv4, soit le MX pointe vers un nom qui n'existe plus. Les deux méritent une vérification."
        }
      },
      {
        "title": {
          "en": "Reverse DNS for every mail server IP",
          "fr": "DNS inverse pour chaque IP de serveur mail"
        },
        "body": {
          "en": "The rDNS column shows the PTR name of each resolved address. It reveals who actually operates the host behind a vanity MX hostname, and it exposes the generic provider PTR names that receiving servers commonly penalise on outbound mail. Reverse lookup has no card of its own in the desktop panel — the MX table is where it surfaces.",
          "fr": "La colonne rDNS affiche le nom PTR de chaque adresse résolue. Elle révèle qui exploite réellement l'hôte derrière un nom MX de façade, et met en évidence les PTR génériques d'hébergeur que les serveurs destinataires pénalisent souvent sur le courrier sortant. La résolution inverse n'a pas de carte dédiée dans le panneau desktop : c'est ici qu'elle apparaît."
        }
      },
      {
        "title": {
          "en": "Blacklist status inline, eight zones",
          "fr": "Réputation DNSBL intégrée, huit zones"
        },
        "body": {
          "en": "On macOS and Windows the first IPv4 of each exchange is checked in parallel against zen.spamhaus.org, b.barracudacentral.org, bl.spamcop.net, dnsbl.sorbs.net, bl.mailspike.net, dnsbl-1.uceprotect.net, psbl.surriel.com and all.s5h.net. The column shows a green Not listed pill, or a red Blacklisted pill whose tooltip names the exact zones that flagged the address.",
          "fr": "Sur macOS et Windows, la première IPv4 de chaque serveur est testée en parallèle contre zen.spamhaus.org, b.barracudacentral.org, bl.spamcop.net, dnsbl.sorbs.net, bl.mailspike.net, dnsbl-1.uceprotect.net, psbl.surriel.com et all.s5h.net. La colonne affiche une pastille verte Non listé, ou une pastille rouge dont l'infobulle nomme les zones exactes ayant signalé l'adresse."
        }
      },
      {
        "title": {
          "en": "Real MX queries on iPhone and iPad",
          "fr": "De vraies requêtes MX sur iPhone et iPad"
        },
        "body": {
          "en": "iOS exposes only name-to-address resolution, so getaddrinfo can never return an MX record. SSHive issues a genuine type 15 query through the BSD resolver, parses the answer section itself and reads the 16-bit preference straight off the wire. You get priority and exchange hostname, up to 32 records, with a copy button on every row.",
          "fr": "iOS n'expose que la résolution nom vers adresse : getaddrinfo ne peut jamais renvoyer un enregistrement MX. SSHive émet une véritable requête de type 15 via le résolveur BSD, analyse lui-même la section réponse et lit la préférence 16 bits directement sur le fil. Vous obtenez priorité et nom de serveur, jusqu'à 32 enregistrements, avec un bouton de copie sur chaque ligne."
        }
      },
      {
        "title": {
          "en": "Free on every platform, no ads",
          "fr": "Gratuit sur toutes les plateformes, sans publicité"
        },
        "body": {
          "en": "MX Lookup is not a Pro feature. None of SSHive's network tools are gated on any platform — no upgrade prompt in the tools panel, no ad interstitial before a lookup, no account to create. Pro exists for the SSH, RDP, VNC and SFTP side of the app, as a one-time Universal Purchase across Mac, iPhone and iPad.",
          "fr": "Le Lookup MX n'est pas une fonction Pro. Aucun outil réseau de SSHive n'est verrouillé, sur aucune plateforme : pas d'invitation à passer au payant dans le panneau, pas d'écran publicitaire avant une requête, pas de compte à créer. Pro concerne les volets SSH, RDP, VNC et SFTP, en achat unique valable sur Mac, iPhone et iPad."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open the network tools panel on Mac or Windows",
          "fr": "Ouvrez le panneau d'outils réseau sur Mac ou Windows"
        },
        "body": {
          "en": "In the desktop app, click the network icon in the sidebar, or the Network tools pill on the welcome screen. Either one opens a Network Tools tab. No SSH session and no connection is required first.",
          "fr": "Dans l'application desktop, cliquez sur l'icône réseau de la barre latérale, ou sur la pastille Outils réseau de l'écran d'accueil. L'un comme l'autre ouvre un onglet Outils réseau. Aucune session SSH ni aucune connexion préalable n'est nécessaire."
        }
      },
      {
        "title": {
          "en": "Enter the domain in the MX Lookup card",
          "fr": "Saisissez le domaine dans la carte MX Lookup"
        },
        "body": {
          "en": "MX Lookup is the fourth card in the two-column grid at the top of the panel. Type the apex domain, not a hostname — example.com, not mail.example.com — and click Lookup MX records. The field's placeholder shows the expected format.",
          "fr": "Saisissez le domaine racine, pas un nom d'hôte — exemple.com, et non mail.exemple.com — puis cliquez sur « Lookup MX records ». L'espace réservé du champ indique le format attendu."
        }
      },
      {
        "title": {
          "en": "Read the five columns",
          "fr": "Lisez les cinq colonnes"
        },
        "body": {
          "en": "Results come back as Priority, MX Server, IP, rDNS and DNSBL, sorted ascending by priority. Hover a red Blacklisted pill to see exactly which zones flagged the address; a green Not listed pill means none of the eight zones returned a 127.x answer.",
          "fr": "Les résultats arrivent sous la forme Priorité, Serveur MX, IP, rDNS et DNSBL, triés par priorité croissante. Survolez une pastille rouge pour voir précisément quelles zones ont signalé l'adresse ; une pastille verte signifie qu'aucune des huit zones n'a répondu par un code 127.x."
        }
      },
      {
        "title": {
          "en": "On iPhone or iPad, go to Tools then Email & IP",
          "fr": "Sur iPhone ou iPad, allez dans Outils puis Email & IP"
        },
        "body": {
          "en": "Tap Tools in the bottom tab bar on iPhone, or Network tools in the sidebar on iPad, then MX Lookup — the first row of the Email & IP section. Enter the domain and run it. Each row shows a colour-coded priority capsule and the exchange hostname in monospace.",
          "fr": "Touchez Outils dans la barre d'onglets sur iPhone, ou Outils réseau dans la barre latérale sur iPad, puis MX Lookup — première ligne de la section Email & IP. Saisissez le domaine et lancez la requête. Chaque ligne affiche une capsule de priorité colorée et le nom du serveur en police à chasse fixe."
        }
      },
      {
        "title": {
          "en": "Chain into Blacklist Check on mobile",
          "fr": "Enchaînez sur Blacklist Check en mobilité"
        },
        "body": {
          "en": "The mobile MX view has no reputation column. Tap the copy button on an exchange row, open Blacklist Check in the same Email & IP section and paste the hostname — it resolves the name to its first IPv4 itself, then checks ten DNSBL zones.",
          "fr": "La vue MX mobile n'a pas de colonne réputation. Touchez le bouton de copie d'une ligne, ouvrez Blacklist Check dans la même section Email & IP et collez le nom d'hôte : l'outil le résout lui-même vers sa première adresse IPv4, puis interroge dix zones DNSBL."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "How to actually read an MX table",
        "fr": "Lire correctement un tableau MX"
      },
      "body": {
        "en": "The priority number is a preference, not a quality score, and its absolute value means nothing. 5/10/20 and 1/2/3 describe exactly the same routing. Only the ordering matters: a sending MTA sorts ascending and tries the lowest first, moving to the next only when the connection fails. Two records sharing the same number are picked between at random — that is how MX-level load balancing works.\n\nThat makes the highest-numbered record the one to look at hardest. A backup MX is a classic weak point: it is often older, less filtered and less monitored than the primary, and spam senders target it deliberately for exactly that reason. If your table shows a backup at a different provider than the primary, confirm it is still supposed to be there.\n\nAn empty result is not necessarily a fault. Two legitimate cases exist. Priority 0 with a single dot as the exchange is a null MX (RFC 7505): the domain is declaring that it receives no mail at all, which is correct for a domain used only for a website. And a domain with no MX records is not unreachable — SMTP falls back to the A or AAAA record of the domain itself under the implicit MX rule in RFC 5321. Mail will be attempted against your web server, which is rarely the intention, but it is not silence.\n\nAn em dash in the IP column means the exchange returned no A record. SSHive resolves IPv4 here, so an IPv6-only mail server reads as blank; run DNS Lookup on the exchange hostname and check for an AAAA before you call it broken. The same check catches the other classic misconfiguration — an MX pointing at a CNAME, which RFC 2181 and RFC 5321 forbid and which some MTAs reject outright.\n\nFinally, a DNSBL hit on an inbound MX does not stop you receiving mail. Its value is that in most small deployments the same host also sends, and a listing on zen.spamhaus.org — consulted by a very large share of receivers — is a materially bigger problem than one on dnsbl-1.uceprotect.net, which lists whole netblocks aggressively and is queried by far fewer servers. Read the zone, not the count.",
        "fr": "Le numéro de priorité est une préférence, pas une note de qualité, et sa valeur absolue ne signifie rien. 5/10/20 et 1/2/3 décrivent exactement le même routage. Seul l'ordre compte : un MTA expéditeur trie par ordre croissant et essaie le plus petit d'abord, ne passant au suivant que si la connexion échoue. Deux enregistrements portant le même numéro sont départagés au hasard — c'est ainsi que fonctionne la répartition de charge au niveau MX.\n\nLe serveur au numéro le plus élevé mérite donc l'examen le plus attentif. Un MX de secours est un point faible classique : souvent plus ancien, moins filtré et moins surveillé que le principal, il est ciblé délibérément par les expéditeurs de spam pour cette raison précise. Si votre tableau montre un secours hébergé ailleurs que le principal, vérifiez qu'il a encore une raison d'exister.\n\nUn résultat vide n'est pas forcément une panne. Deux cas légitimes existent. Une priorité 0 avec un simple point comme serveur est un null MX (RFC 7505) : le domaine déclare ne recevoir aucun courrier, ce qui est correct pour un domaine purement web. Et un domaine sans aucun enregistrement MX n'est pas injoignable : SMTP retombe sur l'enregistrement A ou AAAA du domaine lui-même, la règle du MX implicite de la RFC 5321. Le courrier partira vers votre serveur web, ce qui est rarement l'intention, mais ce n'est pas du silence.\n\nUn tiret cadratin dans la colonne IP signifie que le serveur n'a renvoyé aucun enregistrement A. SSHive résout ici en IPv4 : un serveur de messagerie en IPv6 uniquement apparaît donc vide. Lancez DNS Lookup sur ce nom d'hôte et cherchez un AAAA avant de conclure à une panne. Le même contrôle attrape l'autre erreur classique : un MX qui pointe vers un CNAME, ce que les RFC 2181 et 5321 interdisent et que certains MTA rejettent purement et simplement.\n\nEnfin, une inscription DNSBL sur un MX entrant ne vous empêche pas de recevoir. Son intérêt est qu'en petite infrastructure le même hôte émet aussi, et qu'une inscription sur zen.spamhaus.org — consultée par une très large part des destinataires — pèse bien plus lourd qu'une inscription sur dnsbl-1.uceprotect.net, qui liste des blocs entiers de manière agressive et qu'un nombre nettement plus faible de serveurs interroge. Lisez la zone, pas le compteur."
      }
    },
    "faq": [
      {
        "question": {
          "en": "What does the MX priority number actually mean?",
          "fr": "Que signifie réellement le numéro de priorité MX ?"
        },
        "answer": {
          "en": "It is a preference value, and only the ordering matters. A sending mail server sorts the records ascending and tries the lowest number first, moving to the next only if the connection fails. 5/10/20 and 1/2/3 describe identical routing. Records sharing the same number are selected at random, which is how load balancing works at the MX level. The number is not a quality rating and carries no unit.",
          "fr": "C'est une valeur de préférence, et seul l'ordre compte. Un serveur expéditeur trie les enregistrements par ordre croissant et essaie le plus petit numéro d'abord, ne passant au suivant que si la connexion échoue. 5/10/20 et 1/2/3 décrivent un routage identique. Les enregistrements partageant le même numéro sont choisis au hasard : c'est la répartition de charge au niveau MX. Ce numéro n'est ni une note ni une unité."
        }
      },
      {
        "question": {
          "en": "My domain returns no MX records. Is mail broken?",
          "fr": "Mon domaine ne renvoie aucun enregistrement MX. Le courrier est-il cassé ?"
        },
        "answer": {
          "en": "Not necessarily. If a domain has no MX record at all, SMTP falls back to the domain's own A or AAAA record under the implicit MX rule in RFC 5321. Mail is attempted against whatever your web server is, which is usually a misconfiguration but is not silence. The other legitimate case is a null MX: a single record with priority 0 and an exchange of a lone dot, which declares under RFC 7505 that the domain receives no mail and makes senders bounce immediately.",
          "fr": "Pas forcément. Sans aucun enregistrement MX, SMTP retombe sur l'enregistrement A ou AAAA du domaine lui-même, la règle du MX implicite de la RFC 5321. Le courrier est tenté vers votre serveur web, ce qui est généralement une erreur de configuration mais pas un silence. L'autre cas légitime est le null MX : un enregistrement unique de priorité 0 avec un simple point comme serveur, qui déclare selon la RFC 7505 que le domaine ne reçoit aucun courrier et fait rejeter immédiatement les expéditeurs."
        }
      },
      {
        "question": {
          "en": "Does MX Lookup work on iPhone and iPad?",
          "fr": "Le Lookup MX fonctionne-t-il sur iPhone et iPad ?"
        },
        "answer": {
          "en": "Yes, on both, and free. But the mobile version is deliberately narrower than the desktop one: it returns priority and exchange hostname only. There is no IP column, no reverse DNS and no DNSBL reputation check on iOS or iPadOS — those enrichments exist only in the macOS and Windows builds. The mobile parser also stops at 32 records. To check the reputation of a mobile result, copy the hostname into the separate Blacklist Check tool.",
          "fr": "Oui, sur les deux, et gratuitement. Mais la version mobile est volontairement plus étroite que celle du bureau : elle ne renvoie que la priorité et le nom du serveur. Ni colonne IP, ni DNS inverse, ni vérification DNSBL sur iOS ou iPadOS — ces enrichissements n'existent que dans les versions macOS et Windows. L'analyseur mobile s'arrête par ailleurs à 32 enregistrements. Pour tester la réputation d'un résultat mobile, copiez le nom d'hôte dans l'outil Blacklist Check."
        }
      },
      {
        "question": {
          "en": "Is MX Lookup available in the Mac App Store version?",
          "fr": "Le Lookup MX est-il disponible dans la version Mac App Store ?"
        },
        "answer": {
          "en": "Yes, and it is identical to the direct download — same columns, same DNSBL zones. MX Lookup is plain DNS over the system resolver, so it needs no raw sockets and the App Sandbox does not restrict it. Nothing in the tools panel is restricted there: ping and traceroute send real ICMP from the App Store build too, through a datagram socket that needs no privileges.",
          "fr": "Oui, et il est identique à celui du téléchargement direct : mêmes colonnes, mêmes zones DNSBL. Le Lookup MX n'est que du DNS classique via le résolveur système : il n'exige aucun socket brut et le bac à sable ne le restreint pas. Rien n'est restreint dans le panneau d'outils : le ping et le traceroute émettent du vrai ICMP depuis la version App Store également, via un socket datagramme qui n'exige aucun privilège."
        }
      },
      {
        "question": {
          "en": "Does SSHive check SPF, DKIM or DMARC?",
          "fr": "SSHive vérifie-t-il SPF, DKIM ou DMARC ?"
        },
        "answer": {
          "en": "No. There is no SPF, DKIM, DMARC, MTA-STS or TLS-RPT inspection on any platform, no SMTP banner grab and no port 25 connectivity test. What you can do is read the raw records: SPF is published as a TXT record at the domain apex, and the desktop DNS Lookup card returns TXT alongside A, AAAA, MX, CNAME and NS. SSHive shows you that string; it does not parse or validate it. DMARC policies live at the separate _dmarc name.",
          "fr": "Non. Aucune inspection SPF, DKIM, DMARC, MTA-STS ou TLS-RPT sur aucune plateforme, aucune capture de bannière SMTP, aucun test du port 25. Ce que vous pouvez faire, c'est lire les enregistrements bruts : SPF est publié en TXT à la racine du domaine, et la carte DNS Lookup du bureau renvoie les TXT à côté des A, AAAA, MX, CNAME et NS. SSHive affiche la chaîne ; il ne l'analyse ni ne la valide. Les politiques DMARC résident sous le nom distinct _dmarc."
        }
      },
      {
        "question": {
          "en": "Why is the IP column empty for one of my mail servers?",
          "fr": "Pourquoi la colonne IP est-elle vide pour l'un de mes serveurs ?"
        },
        "answer": {
          "en": "The desktop MX Lookup resolves exchanges to IPv4 only, so an IPv6-only mail server has nothing to show and displays an em dash in both the IP and rDNS columns — and is never blacklist-checked, since the DNSBL engine is IPv4-only too. The other explanation is worse: the MX points at a hostname with no address record at all. Run DNS Lookup on that exchange to tell the two apart. If an AAAA record comes back, it is the first case.",
          "fr": "Le Lookup MX du bureau ne résout les serveurs qu'en IPv4 : un serveur de messagerie en IPv6 uniquement n'a rien à afficher et montre un tiret cadratin dans les colonnes IP et rDNS — et n'est jamais testé en DNSBL, le moteur étant lui aussi IPv4 uniquement. L'autre explication est pire : le MX pointe vers un nom d'hôte sans aucun enregistrement d'adresse. Lancez DNS Lookup sur ce nom pour trancher. Si un AAAA revient, c'est le premier cas."
        }
      },
      {
        "question": {
          "en": "Can I trust a \"Not listed\" result?",
          "fr": "Puis-je faire confiance à un résultat « Non listé » ?"
        },
        "answer": {
          "en": "Mostly, with one caveat worth knowing. Several DNSBL operators, Spamhaus in particular, refuse queries arriving from large public resolvers and answer with an error or a blanket return code. SSHive counts any answer beginning with 127. as listed, and everything else — including a DNS error — as not listed. Both directions can mislead you on a public resolver: Spamhaus refuses those queries with a 127.255.255.x code, which reads as Blacklisted even though nothing is listed, while a zone that answers with an outright error reads as clean even if it does list you. When a result matters, confirm it against your ISP's resolver or a dedicated web checker before acting on it.",
          "fr": "SSHive considère comme listée toute réponse commençant par 127., et comme non listée tout le reste, erreur DNS comprise. Les deux sens peuvent tromper sur un résolveur public : Spamhaus refuse ces requêtes avec un code 127.255.255.x, qui s'affiche en « Blacklisté » alors que rien n'est listé, tandis qu'une zone répondant par une erreur franche apparaît propre même si elle vous liste. Quand le résultat compte, confirmez-le via le résolveur de votre opérateur ou un vérificateur web dédié avant d'agir. When a result matters, confirm it against your ISP's resolver or a dedicated web checker before acting on it."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "MX on the wire, and what it takes to query it from an iPhone",
        "fr": "Le MX sur le fil, et ce qu'il faut pour l'interroger depuis un iPhone"
      },
      "body": {
        "en": "An MX record is one of the simplest resource records in DNS and one of the most consequential. Type 15, class IN, and an RDATA section with exactly two parts: a 16-bit preference in network byte order, followed by a domain name for the exchange. That name is subject to DNS name compression, so it is frequently stored as a pointer back into an earlier part of the message rather than as a literal string — which is why you cannot read an MX answer by treating the packet as text.\n\nRFC 5321 section 5.1 defines what a sending MTA does with the set. It queries MX for the recipient domain, sorts the results by preference ascending, resolves each exchange to address records, and attempts delivery in that order, randomising among records that share a preference value. If the MX query returns nothing, the sender falls back to the address records of the domain itself — the implicit MX rule. If it returns a single record with preference 0 and an exchange of a lone dot, RFC 7505 says the domain accepts no mail and the sender must bounce immediately instead of retrying for five days. The exchange must be a hostname with address records; it must not be a CNAME and must not be an address literal.\n\nGetting that answer on macOS or Windows is straightforward. SSHive uses Node's c-ares-backed resolver, which speaks DNS directly to the servers your OS is configured with rather than going through getaddrinfo. resolveMx returns the set, sorted ascending. Each exchange is then passed to resolve4, each resulting address to a PTR lookup, and the first address of each exchange to the DNSBL engine, which fans all eight zones out in parallel. Every enrichment step is independently error-trapped, so an exchange with no PTR record or no A record degrades to an em dash instead of failing the whole lookup. None of this needs a raw socket, which is why MX Lookup behaves identically in the Mac App Store build.\n\niOS is the harder problem. Apple's high-level networking gives you name-to-address resolution and nothing more: getaddrinfo and NWEndpoint return A and AAAA records, and there is no public Swift API for an arbitrary record type. To read MX — and, since the same helper was generalised, every other record type the DNS Lookup screen now shows — SSHive drops to the BSD resolver in libresolv through a small C helper: res_init, then res_query with class C_IN and type T_MX for the raw answer, then ns_initparse and ns_parserr over the answer section, reading the preference big-endian from the first two RDATA bytes and expanding the compressed exchange name with dn_expand. Swift sorts the result by preference and hands it to the view. No third-party resolver library, no web API in the path — the query goes from your device to the resolvers it is already using.\n\nThe costs are honest ones. The query uses the system resolver configuration, so a captive portal or a DNS64/NAT64 network that mishandles type 15 makes res_query fail and the app reports no MX records rather than a network error. The parser stops at 32 records. And across every platform there is no custom nameserver field, no TTL display, and no SPF, DKIM, DMARC, MTA-STS or TLS-RPT inspection.",
        "fr": "L'enregistrement MX est l'un des plus simples du DNS et l'un des plus lourds de conséquences. Type 15, classe IN, et une section RDATA en exactement deux parties : une préférence sur 16 bits en ordre réseau, suivie d'un nom de domaine pour le serveur. Ce nom est soumis à la compression de noms DNS : il est fréquemment stocké sous forme de pointeur vers une portion antérieure du message plutôt qu'en clair — raison pour laquelle on ne peut pas lire une réponse MX en traitant le paquet comme du texte.\n\nLa section 5.1 de la RFC 5321 définit ce qu'un MTA expéditeur fait de cet ensemble. Il interroge le MX du domaine destinataire, trie par préférence croissante, résout chaque serveur en enregistrements d'adresse et tente la livraison dans cet ordre, en tirant au sort entre les enregistrements de préférence égale. Si la requête MX ne renvoie rien, l'expéditeur retombe sur les adresses du domaine lui-même : la règle du MX implicite. Si elle renvoie un unique enregistrement de préférence 0 avec un simple point comme serveur, la RFC 7505 impose de rejeter immédiatement au lieu de réessayer pendant cinq jours. Le serveur doit être un nom d'hôte doté d'enregistrements d'adresse ; ni un CNAME, ni une adresse littérale.\n\nObtenir cette réponse sur macOS ou Windows est direct. SSHive s'appuie sur le résolveur de Node basé sur c-ares, qui parle DNS directement aux serveurs configurés par le système au lieu de passer par getaddrinfo. resolveMx renvoie l'ensemble, trié par ordre croissant. Chaque serveur passe ensuite par resolve4, chaque adresse obtenue par une requête PTR, et la première adresse de chaque serveur par le moteur DNSBL, qui déploie les huit zones en parallèle. Chaque étape d'enrichissement est protégée indépendamment : un serveur sans PTR ou sans enregistrement A dégrade en tiret cadratin au lieu de faire échouer toute la requête. Rien de tout cela n'exige de socket brut, d'où un comportement identique dans la version Mac App Store.\n\niOS est le vrai problème. Le réseau de haut niveau d'Apple ne donne que la résolution nom vers adresse : getaddrinfo et NWEndpoint renvoient des A et des AAAA, et aucune API Swift publique ne permet d'interroger un type d'enregistrement arbitraire. Pour lire les MX — et, le même assistant ayant été généralisé, tous les autres types que l'écran DNS Lookup affiche désormais — SSHive descend jusqu'au résolveur BSD de libresolv via un petit assistant en C : res_init, puis res_query en classe C_IN et type T_MX pour la réponse brute, puis ns_initparse et ns_parserr sur la section réponse, la préférence étant lue en big-endian sur les deux premiers octets du RDATA et le nom compressé étendu par dn_expand. Swift trie le résultat par préférence et le transmet à la vue. Aucune bibliothèque de résolution tierce, aucune API web intermédiaire : la requête part de votre appareil vers les résolveurs qu'il utilise déjà.\n\nLes contreparties sont assumées. La requête suit la configuration du résolveur système : un portail captif ou un réseau DNS64/NAT64 qui traite mal le type 15 fait échouer res_query, et l'application signale alors une absence d'enregistrements MX plutôt qu'une erreur réseau. L'analyseur s'arrête à 32 enregistrements. Et sur toutes les plateformes, il n'y a ni champ de serveur DNS personnalisé, ni affichage des TTL, ni inspection SPF, DKIM, DMARC, MTA-STS ou TLS-RPT."
      }
    },
    "relatedTools": [
      "blacklist-check",
      "dns-lookup",
      "whois"
    ]
  },
  {
    "slug": "blacklist-check",
    "iconName": "ShieldAlert",
    "metaTitle": {
      "en": "IP Blacklist Check (DNSBL) on Mac, iPhone & iPad",
      "fr": "Vérifier si une IP est blacklistée (DNSBL)"
    },
    "metaDescription": {
      "en": "Check any IPv4 against 8 DNSBL zones on Mac and Windows, 10 on iPhone and iPad. Read the return code, the listing reason and how to get delisted.",
      "fr": "Testez une IPv4 sur 8 zones DNSBL sur Mac et Windows, 10 sur iPhone et iPad. Code de retour, motif du listing et procédure de retrait expliqués."
    },
    "h1": {
      "en": "Check an IP against the DNSBLs that actually block your mail",
      "fr": "Vérifiez si votre IP figure sur les DNSBL qui bloquent réellement vos e-mails"
    },
    "hero": {
      "en": "Reverse the octets, query the zone, read the 127.0.0.x code — across 8 DNSBL zones on Mac and Windows, 10 on iPhone and iPad.",
      "fr": "Inverser les octets, interroger la zone, lire le code 127.0.0.x — sur 8 zones DNSBL sur Mac et Windows, 10 sur iPhone et iPad."
    },
    "intro": {
      "en": "Mail that arrived yesterday is bouncing today. The SMTP log shows a 5.7.1 rejection with a URL buried in it, or worse, nothing at all — the receiving side accepted the message and quietly dropped it. The first question is always the same: is the sending IP on a blocklist, and if so, which one?\n\nA DNSBL — a DNS-based blocklist, still widely called an RBL — answers that in one DNS query per zone. There is no API, no login and no scraping involved. You reverse the four octets of the address, append the zone's domain, and ask for an A record. NXDOMAIN means not listed. An answer inside 127.0.0.0/8 means listed, and the low byte tells you which sublist caught you and why.\n\nThe catch is that the answer is only useful if you query the right zones and understand what each one is saying. There are hundreds of public lists; a handful are actually consulted by the mail servers that matter, and several of the rest are aggressive, stale, or shut down entirely. A tool that reports \"listed on 3 of 100 lists\" without naming the three is worse than no answer: it sends you filling in removal forms for zones nobody queries while the one listing that is genuinely blocking your mail stays in place.\n\nSSHive runs the check natively on whatever device you have with you. On macOS and Windows it queries 8 zones in parallel and pulls the TXT record on every hit, so you get the operator's own reason string and removal pointer next to the return code. On iPhone and iPad it queries 10 zones and shows the raw 127.0.0.x code for each. It is IPv4 only, it behaves identically in the sandboxed Mac App Store build and the direct download, and it is free on every platform — no account, no ads, and no server of ours anywhere in the path.",
      "fr": "Des messages qui passaient hier rebondissent aujourd'hui. Le journal SMTP affiche un rejet 5.7.1 avec une URL enfouie dedans — ou pire, rien du tout : le serveur distant a accepté le message puis l'a fait disparaître. La première question est toujours la même : l'IP émettrice est-elle sur une liste noire, et si oui, laquelle ?\n\nUne DNSBL (liste noire diffusée par DNS, encore souvent appelée RBL) répond en une requête DNS par zone. Aucune API, aucun compte, aucun scraping. On inverse les quatre octets de l'adresse, on y accole le domaine de la zone, on demande un enregistrement A. Un NXDOMAIN signifie « non listée ». Une réponse dans 127.0.0.0/8 signifie « listée », et l'octet de poids faible indique quelle sous-liste vous a attrapé, et pourquoi.\n\nLe piège, c'est que la réponse n'a de valeur que si l'on interroge les bonnes zones et que l'on sait lire ce que chacune raconte. Il existe des centaines de listes publiques ; une poignée seulement est réellement consultée par les serveurs de messagerie qui comptent, et parmi les autres, certaines sont agressives, obsolètes ou purement et simplement arrêtées. Un outil qui annonce « listée sur 3 des 100 listes » sans nommer les trois est pire qu'une absence de réponse : il vous envoie remplir des formulaires de retrait pour des zones que personne n'interroge, pendant que le seul listing qui bloque vraiment vos e-mails reste en place.\n\nSSHive effectue la vérification en natif, sur l'appareil que vous avez sous la main. Sur macOS et Windows, 8 zones sont interrogées en parallèle et l'enregistrement TXT est récupéré à chaque hit : vous obtenez le motif rédigé par l'opérateur à côté du code de retour. Sur iPhone et iPad, 10 zones sont interrogées et le code 127.0.0.x brut est affiché pour chacune. C'est de l'IPv4 uniquement, le comportement est identique dans la version sandboxée du Mac App Store et dans le téléchargement direct, et c'est gratuit sur toutes les plateformes — sans compte, sans publicité, et sans aucun serveur SSHive sur le trajet."
    },
    "capabilities": [
      {
        "title": {
          "en": "8 zones on desktop, 10 on mobile — named",
          "fr": "8 zones sur ordinateur, 10 sur mobile — nommées"
        },
        "body": {
          "en": "macOS and Windows query zen.spamhaus.org, b.barracudacentral.org, bl.spamcop.net, dnsbl.sorbs.net, bl.mailspike.net, dnsbl-1.uceprotect.net, psbl.surriel.com and all.s5h.net. iPhone and iPad query the same set minus psbl.surriel.com, plus dnsbl-2.uceprotect.net, ix.dnsbl.manitu.net and dnsbl.dronebl.org — ten in total. The lists differ by platform, and every zone is shown by name.",
          "fr": "macOS et Windows interrogent zen.spamhaus.org, b.barracudacentral.org, bl.spamcop.net, dnsbl.sorbs.net, bl.mailspike.net, dnsbl-1.uceprotect.net, psbl.surriel.com et all.s5h.net. iPhone et iPad interrogent le même ensemble sans psbl.surriel.com, mais avec dnsbl-2.uceprotect.net, ix.dnsbl.manitu.net et dnsbl.dronebl.org — dix au total. Les listes diffèrent selon la plateforme, et chaque zone est affichée nommément."
        }
      },
      {
        "title": {
          "en": "The reason string, not just a red flag",
          "fr": "Le motif, pas seulement un drapeau rouge"
        },
        "body": {
          "en": "On macOS and Windows, every hit triggers a second TXT query against the same name, so the Reason column shows the operator's own explanation — usually including the URL of its removal page. When no TXT is published, the raw 127.0.0.x return code is shown instead. On iPhone and iPad the TXT record is not fetched: the return code alone is displayed under each listed zone.",
          "fr": "Sur macOS et Windows, chaque hit déclenche une seconde requête TXT sur le même nom : la colonne Motif affiche l'explication rédigée par l'opérateur, avec le plus souvent l'URL de sa page de retrait. Si aucun TXT n'est publié, le code de retour 127.0.0.x brut prend le relais. Sur iPhone et iPad, le TXT n'est pas récupéré : seul le code apparaît sous chaque zone listée."
        }
      },
      {
        "title": {
          "en": "IP or hostname, resolved for you",
          "fr": "IP ou nom d'hôte, résolu pour vous"
        },
        "body": {
          "en": "The field accepts a dotted-quad IPv4 or a hostname. A hostname is resolved to its first A record before any zone is queried, so you can paste the name straight out of a bounce message. Bear in mind that resolving a domain gives you its web address, not its mail exchangers — for a mail domain, run MX Lookup instead.",
          "fr": "Le champ accepte une IPv4 en notation pointée ou un nom d'hôte. Le nom d'hôte est résolu vers son premier enregistrement A avant toute interrogation de zone : vous pouvez donc coller directement le nom trouvé dans un rapport de non-remise. Attention : résoudre un domaine donne son adresse web, pas ses serveurs de messagerie — pour un domaine de courrier, passez par MX Lookup."
        }
      },
      {
        "title": {
          "en": "Works inside the App Sandbox",
          "fr": "Fonctionne dans le bac à sable d'Apple"
        },
        "body": {
          "en": "A DNSBL query is an ordinary A-record lookup through the system resolver — no raw sockets, no privileged ports, no spawned binaries. That is why the blacklist check is identical in the Mac App Store build and the direct download, and fully functional on iPhone and iPad — as is every other tool in the panel.",
          "fr": "Une requête DNSBL est une simple résolution d'enregistrement A via le résolveur système — pas de socket brut, pas de port privilégié, aucun binaire lancé. C'est pourquoi la vérification de liste noire est identique dans la version Mac App Store et dans le téléchargement direct, et pleinement fonctionnelle sur iPhone et iPad — comme tous les autres outils du panneau."
        }
      },
      {
        "title": {
          "en": "Every MX server checked automatically",
          "fr": "Chaque serveur MX vérifié automatiquement"
        },
        "body": {
          "en": "On macOS and Windows, MX Lookup runs the same DNSBL engine on its own results: each mail exchanger is resolved, reverse-resolved, and its first IPv4 address checked against all 8 zones, with a Not listed or Blacklisted pill per row.",
          "fr": "chaque serveur de messagerie est résolu, résolu en inverse, et sa première adresse IPv4 est testée sur les 8 zones, avec une pastille « Non listé » ou « Blacklisté » par ligne. Only the first IPv4 per exchanger is checked, and IPv6-only mail servers are not covered. That enrichment is desktop-only."
        }
      },
      {
        "title": {
          "en": "Free, on every platform, with no account",
          "fr": "Gratuit, sur toutes les plateformes, sans compte"
        },
        "body": {
          "en": "The whole network-tools suite is free on Mac, Windows, iPhone and iPad. There is no Pro gate on the blacklist check, no ad interstitial before a result, and no sign-up. SSHive Pro is a separate one-time purchase (around 17.99 USD, Universal across Mac, iPhone and iPad) that unlocks other features entirely — never these.",
          "fr": "SSHive Pro est un achat unique distinct (environ 19,99 €, achat universel Mac + iPhone + iPad) qui débloque d'autres fonctions — jamais celles-ci."
        }
      }
    ],
    "steps": [
      {
        "title": {
          "en": "Open Network Tools",
          "fr": "Ouvrir les outils réseau"
        },
        "body": {
          "en": "On macOS and Windows, click the network icon in the sidebar, or the Network tools pill on the Welcome screen — either one opens a Network Tools tab. On iPhone, tap Tools in the bottom tab bar. On iPad, select Network tools in the split-view sidebar.",
          "fr": "Sur macOS et Windows, cliquez sur l'icône réseau de la barre latérale, ou sur la pastille Outils réseau de l'écran d'accueil — les deux ouvrent un onglet Outils réseau. Sur iPhone, touchez Outils dans la barre d'onglets en bas. Sur iPad, choisissez Outils réseau dans la barre latérale."
        }
      },
      {
        "title": {
          "en": "Find the DNSBL Check card",
          "fr": "Repérer la carte DNSBL Check"
        },
        "body": {
          "en": "On desktop, DNSBL Check is the third card of the grid at the top of the panel, alongside DNS Lookup, Network Interfaces and MX Lookup. (Whois is further down, in the full-width row with Ping and Traceroute.)",
          "fr": "Sur ordinateur, DNSBL Check est la troisième carte de la grille en haut du panneau, aux côtés de DNS Lookup, Interfaces réseau et MX Lookup. (Whois se trouve plus bas, dans la rangée pleine largeur avec Ping et Traceroute.) On iPhone and iPad, Blacklist Check is the second row of the Email & IP section, directly under MX Lookup."
        }
      },
      {
        "title": {
          "en": "Enter an IPv4 address or a hostname",
          "fr": "Saisir une adresse IPv4 ou un nom d'hôte"
        },
        "body": {
          "en": "Type a dotted quad such as 203.0.113.25, or a hostname — the desktop placeholder reads \"e.g. 1.2.3.4 or domain.com\". A hostname is resolved to its first A record before the zones are queried. Press Check blacklists. All zones go out in parallel, so a full run takes roughly as long as the slowest single DNS lookup.",
          "fr": "Appuyez sur « Check blacklists ». Toutes les zones partent en parallèle : un test complet dure à peu près le temps de la résolution DNS la plus lente."
        }
      },
      {
        "title": {
          "en": "Read the summary, then the per-zone rows",
          "fr": "Lire la synthèse, puis le détail par zone"
        },
        "body": {
          "en": "Desktop shows a summary pill reading \"<n>/8 blacklists\" — green at zero, red otherwise — above a three-column table of Zone, Status and Reason. iPhone and iPad show a green Clean shield or a red count of lists, then a Listed section followed by a Clean section, each listed row carrying its raw 127.0.0.x return code.",
          "fr": "Sur ordinateur, une pastille de synthèse affiche « <n>/8 blacklists » — verte à zéro, rouge sinon — au-dessus d'un tableau à trois colonnes : Zone, Statut, Motif. Sur iPhone et iPad, un bouclier vert « Propre » ou un décompte rouge de listes, puis une section Listé suivie d'une section Propre, chaque ligne listée portant son code de retour 127.0.0.x brut."
        }
      },
      {
        "title": {
          "en": "Follow the reason string to the right removal form",
          "fr": "Suivre le motif jusqu'au bon formulaire de retrait"
        },
        "body": {
          "en": "On macOS and Windows the Reason column carries the zone's TXT record, which usually contains the operator's explanation and the address of its removal page. Note the exact zone name, fix the underlying cause first, then go to that operator's own form. Never use a bulk service promising removal from a hundred lists at once.",
          "fr": "Sur macOS et Windows, la colonne Motif reprend l'enregistrement TXT de la zone, qui contient généralement l'explication de l'opérateur et l'adresse de sa page de retrait. Notez le nom exact de la zone, corrigez d'abord la cause, puis rendez-vous sur le formulaire de cet opérateur. N'utilisez jamais un service groupé promettant un retrait de cent listes d'un coup."
        }
      }
    ],
    "interpret": {
      "title": {
        "en": "Reading the result: which listings actually block mail",
        "fr": "Lire le résultat : quels listings bloquent vraiment le courrier"
      },
      "body": {
        "en": "Not all rows carry the same weight, and treating them as equal is the most common mistake.\n\nzen.spamhaus.org is the one that decides whether your mail arrives. It is a composite zone, and the return code says which component fired. 127.0.0.2 and 127.0.0.3 are SBL and CSS — a known spam source or a snowshoe range. 127.0.0.4 through 127.0.0.7 are XBL: a compromised machine emitting through a proxy, bot or worm, which normally means something on your network is infected rather than misconfigured. 127.0.0.9 is DROP, for hijacked or criminal netblocks. 127.0.0.10 and 127.0.0.11 are PBL, and PBL is not an accusation of spamming at all — it states that the address sits in dynamic or end-user space that the network operator itself declared should not deliver directly to MX. A home connection or a fresh cloud instance hitting PBL needs to relay through a smarthost, not file an appeal.\n\nAnything in 127.255.255.0/24 is not a real listing. It is the zone refusing the query, usually because it arrived via a large public resolver such as 8.8.8.8 or 1.1.1.1. Know how SSHive renders that: it counts any answer beginning with 127. as listed, so on a public resolver Spamhaus can come back as a red Listed row whose return code is 127.255.255.254. That is a refused query, not a blocklisting — read the code, not the colour. The opposite failure exists too: when a zone answers with a DNS error rather than an address, SSHive records it as not listed, so a Clean row can also mean no answer at all. Either way, re-run the check on a network using its own or its ISP's recursive resolver before trusting the result.",
        "fr": "Tout code dans 127.255.255.0/24 n'est pas un vrai listing. C'est la zone qui refuse la requête, le plus souvent parce qu'elle est arrivée via un gros résolveur public comme 8.8.8.8 ou 1.1.1.1. Sachez comment SSHive l'affiche : il considère comme listée toute réponse commençant par 127. Sur un résolveur public, Spamhaus peut donc apparaître en ligne rouge « Listé » avec le code 127.255.255.254. C'est une requête refusée, pas une inscription — lisez le code, pas la couleur. L'échec inverse existe aussi : quand une zone répond par une erreur DNS au lieu d'une adresse, SSHive l'enregistre comme non listée, et une ligne « Propre » peut donc n'être aucune réponse du tout. Dans les deux cas, refaites le test depuis un réseau utilisant son propre résolveur récursif, ou celui de son FAI, avant de vous fier au résultat. Re-run the check on a network using its own or its ISP's recursive resolver before trusting a clean sweep.\n\nBelow Spamhaus, b.barracudacentral.org and bl.spamcop.net are widely consulted and worth acting on. bl.mailspike.net is a reputation score, not a binary verdict. psbl.surriel.com and ix.dnsbl.manitu.net are spamtrap-driven and expire on their own, often within hours. dnsbl-1.uceprotect.net lists a single IP; dnsbl-2.uceprotect.net — queried only on iPhone and iPad — lists a whole allocation because a neighbour spammed, so a lone level-2 hit beside otherwise clean rows is usually noise. dnsbl.sorbs.net is a special case: its operator shut the service down in 2024, so that row reads Clean regardless of your reputation. Do not read it as a clean bill of health.\n\nFinally, a full sweep of clean rows is not a delivery guarantee. Gmail, Outlook.com and Yahoo run internal reputation systems that no public DNSBL exposes."
      }
    },
    "faq": [
      {
        "question": {
          "en": "Is the blacklist check available in the Mac App Store version of SSHive?",
          "fr": "La vérification de liste noire est-elle disponible dans la version Mac App Store ?"
        },
        "answer": {
          "en": "Yes, and it is identical to the direct download: the same zones, the same TXT reason lookup, no sandbox guard. A DNSBL query is a plain A-record lookup through the system resolver, so it needs none of the privileges Apple's sandbox withholds — and nor, as it turns out, do ping and traceroute, which send real ICMP from the App Store build through a datagram socket.",
          "fr": "Oui, et à l'identique du téléchargement direct : mêmes zones, même récupération du motif TXT, aucun garde-fou lié au bac à sable. Une requête DNSBL est une simple résolution d'enregistrement A via le résolveur système : elle ne réclame aucun des privilèges que le bac à sable d'Apple refuse — et le ping et le traceroute non plus, en définitive, puisqu'ils émettent du vrai ICMP depuis la version App Store via un socket datagramme."
        }
      },
      {
        "question": {
          "en": "Why does my iPhone check 10 lists and my Mac only 8?",
          "fr": "Pourquoi mon iPhone teste-t-il 10 listes et mon Mac seulement 8 ?"
        },
        "answer": {
          "en": "The two codebases ship different zone sets. macOS and Windows check 8 zones; iPhone and iPad check 10 — the same list minus psbl.surriel.com, plus dnsbl-2.uceprotect.net, ix.dnsbl.manitu.net and dnsbl.dronebl.org. So a result can legitimately differ between your Mac and your phone. The most common case is a UCEPROTECT level 2 hit visible only on mobile, which reflects your allocation's neighbours rather than your own IP.",
          "fr": "Les deux bases de code embarquent des ensembles de zones différents. macOS et Windows testent 8 zones ; iPhone et iPad en testent 10 — la même liste sans psbl.surriel.com, mais avec dnsbl-2.uceprotect.net, ix.dnsbl.manitu.net et dnsbl.dronebl.org. Un résultat peut donc légitimement différer entre votre Mac et votre téléphone. Le cas le plus courant est un hit UCEPROTECT niveau 2 visible uniquement sur mobile, qui reflète le voisinage de votre allocation et non votre propre IP."
        }
      },
      {
        "question": {
          "en": "Can I check an IPv6 address?",
          "fr": "Puis-je tester une adresse IPv6 ?"
        },
        "answer": {
          "en": "No. The tool is IPv4 only on every platform: anything that is not a dotted quad (or a hostname resolving to one) is rejected. IPv6 blocklisting requires a 32-nibble ip6.arpa-style encoding, and real coverage across the major zones remains thin, so SSHive declines the query rather than return a result it cannot stand behind. If your MTA is dual-stacked, check its IPv4 address and use provider postmaster tooling for the v6 side.",
          "fr": "Non. L'outil est IPv4 uniquement sur toutes les plateformes : tout ce qui n'est pas une adresse en notation pointée (ou un nom d'hôte s'y résolvant) est refusé. Le blocage IPv6 impose un encodage en 32 quartets de type ip6.arpa, et la couverture réelle des grandes zones reste très inégale : SSHive préfère refuser la requête plutôt que renvoyer un résultat qu'il ne peut pas assumer. Si votre MTA est en double pile, testez son adresse IPv4 et passez par les outils postmaster des fournisseurs pour la partie v6."
        }
      },
      {
        "question": {
          "en": "I'm listed on Spamhaus PBL — did my server send spam?",
          "fr": "Je suis listé sur le PBL de Spamhaus — mon serveur a-t-il envoyé du spam ?"
        },
        "answer": {
          "en": "Almost certainly not. PBL (return codes 127.0.0.10 and 127.0.0.11 in the zen composite) is a policy list, not an abuse list. It records that the address sits in a range the network operator itself declared as dynamic or end-user space that should not talk directly to remote MX servers. Typical triggers are a residential connection or a cloud IP whose provider has not opened port 25. The fix is to relay through your provider's smarthost, or ask the operator to declassify the range — not to file an abuse appeal.",
          "fr": "Presque certainement pas. Le PBL (codes 127.0.0.10 et 127.0.0.11 dans la zone composite zen) est une liste de politique, pas une liste d'abus. Il consigne que l'adresse appartient à une plage que l'opérateur réseau a lui-même déclarée comme dynamique ou grand public, et qui ne devrait pas dialoguer directement avec des MX distants. Les déclencheurs habituels sont une connexion résidentielle ou une IP cloud dont le fournisseur n'a pas ouvert le port 25. La solution est de relayer par le smarthost du fournisseur, ou de demander la reclassification de la plage — pas de déposer un recours pour abus."
        }
      },
      {
        "question": {
          "en": "Every zone says Clean but my mail still bounces at Outlook. Why?",
          "fr": "Toutes les zones affichent Propre mais mon courrier rebondit toujours chez Outlook. Pourquoi ?"
        },
        "answer": {
          "en": "Two reasons, and both are worth ruling out. First, the large mailbox providers maintain private reputation systems that no public DNSBL exposes; a Microsoft or Google block is theirs alone and is handled through their own postmaster channels, not a delisting form. Second, the zone may not have answered the question you think it did. When a blocklist refuses a query — most do this for traffic arriving via 8.8.8.8 or 1.1.1.1 — it usually replies with a code in 127.255.255.0/24, which SSHive shows as a red Listed row; check the return code before you believe a hit. When it replies with a DNS error instead, SSHive records it as not listed, so a Clean row can be no answer at all. Re-test from a network using its own recursive resolver before concluding anything.",
          "fr": "Ensuite, la zone n'a peut-être pas répondu à la question que vous croyez. Quand une liste noire refuse une requête — la plupart le font pour le trafic passant par 8.8.8.8 ou 1.1.1.1 — elle répond généralement par un code dans 127.255.255.0/24, que SSHive affiche en ligne rouge « Listé » : vérifiez le code avant de croire à une inscription. Quand elle répond par une erreur DNS, SSHive l'enregistre comme non listée, et une ligne « Propre » peut alors n'être aucune réponse. Refaites le test depuis un réseau doté de son propre résolveur récursif avant de conclure. Re-test from a network using its own recursive resolver before concluding anything."
        }
      },
      {
        "question": {
          "en": "Can I check a domain instead of an IP address?",
          "fr": "Puis-je tester un domaine au lieu d'une adresse IP ?"
        },
        "answer": {
          "en": "You can type a hostname, and it is resolved to its first A record before the zones are queried. But be clear about what that tests: for example.com you are checking the IP behind the website, which is frequently not the machine that sends the mail. To check the machines that actually deliver your mail, use MX Lookup — on macOS and Windows it resolves every mail exchanger and runs the same 8-zone DNSBL check on the first IPv4 of each one automatically.",
          "fr": "Vous pouvez saisir un nom d'hôte : il est résolu vers son premier enregistrement A avant l'interrogation des zones. Mais soyez conscient de ce que vous testez : pour example.com, vous vérifiez l'IP derrière le site web, qui n'est très souvent pas la machine qui envoie le courrier. Pour tester les machines qui livrent réellement vos e-mails, utilisez MX Lookup — sur macOS et Windows, il résout chaque serveur de messagerie et applique automatiquement le même contrôle DNSBL sur 8 zones à la première IPv4 de chacun."
        }
      },
      {
        "question": {
          "en": "Do I need SSHive Pro to run a blacklist check?",
          "fr": "Faut-il SSHive Pro pour lancer une vérification de liste noire ?"
        },
        "answer": {
          "en": "No. The entire network-tools suite — blacklist check, MX lookup, DNS lookup, whois, ping and network interfaces — is free on Mac, Windows, iPhone and iPad, with no account and no ads. SSHive Pro is an optional one-time purchase (around 17.99 USD) that is Universal across Mac, iPhone and iPad and unlocks unrelated features. There is no subscription, and none of these diagnostics is behind a paywall on any platform.",
          "fr": "Non. Toute la suite d'outils réseau — vérification de liste noire, MX lookup, DNS lookup, whois, ping et interfaces réseau — est gratuite sur Mac, Windows, iPhone et iPad, sans compte et sans publicité. SSHive Pro est un achat unique optionnel (environ 19,99 €), universel entre Mac, iPhone et iPad, qui débloque d'autres fonctions. Il n'y a pas d'abonnement, et aucun de ces diagnostics n'est derrière un paywall, sur aucune plateforme."
        }
      }
    ],
    "deepDive": {
      "title": {
        "en": "How a DNSBL query works, and why delisting order matters",
        "fr": "Comment fonctionne une requête DNSBL, et pourquoi l'ordre du retrait compte"
      },
      "body": {
        "en": "A DNSBL is a database published entirely through DNS, which is exactly why it is the one diagnostic that behaves identically on every platform SSHive ships on.\n\nTo test 203.0.113.25 against zen.spamhaus.org, the client reverses the four octets and asks for an A record at 25.113.0.203.zen.spamhaus.org. The reversal is not cosmetic. DNS delegates hierarchically from right to left, so writing the address backwards lets a zone operator delegate by /8, /16 or /24 exactly the way in-addr.arpa does for reverse lookups. NXDOMAIN means not listed. Any answer inside 127.0.0.0/8 means listed, with the low bytes encoding which sublist matched. A TXT record at the same name, where the operator publishes one, carries the human-readable reason and the removal URL.\n\nSSHive implements this twice. On macOS and Windows the main process fires all eight zone queries in parallel through Node's c-ares resolver, each caught individually so a dead or rate-limited zone cannot fail the whole run; on a hit it issues a second TXT query against the same name for the reason string. On iPhone and iPad the Swift implementation fans the ten zones out across a throwing task group on a utility queue, one getaddrinfo pinned to AF_INET per zone, then sorts results listed-first and alphabetically. Both accept a literal dotted quad or a hostname, resolving the hostname to its first A record before touching any zone.\n\nBecause all of that is an ordinary A-record lookup through the system resolver, there are no raw sockets, no privileged ports and no spawned binaries involved — so the check runs unmodified inside the App Sandbox. The same is true of every tool in this panel, ping and traceroute included: they send real ICMP from a datagram socket that needs no privileges, so there is no platform here where a diagnostic answers less than it does elsewhere. It also means every query leaves your device for the zone's nameservers directly, through whatever resolver your network assigned — there is no SSHive backend and no third-party web API in the path.\n\nTwo limits are deliberate. The tool is IPv4 only, and it checks IP-based zones only: no URIBL or SURBL domain-based lists, no listing timestamps, no clickable removal links.\n\nWhich brings you to delisting, where the order of operations decides everything. Fix the cause before you submit anything — removing a listing while the source is still active gets you relisted, usually with a longer penalty. The usual causes, roughly by frequency: one compromised SMTP AUTH account (look for a single username authenticating from many source IPs), an abused web contact form, an open relay, a malware-infected workstation sharing your public IP behind NAT, and a legitimate mailing list gone stale enough to hit spamtraps. Then confirm the basics: forward-confirming reverse DNS that matches your HELO name, plus SPF, DKIM and DMARC. Only then use each operator's own removal page. Spamhaus, Barracuda and SpamCop all run self-service forms; PSBL, NiX Spam and UCEPROTECT level 1 expire on their own once the traffic stops. Skip any service offering to remove you from a hundred lists at once, and expect delivery to recover days after the listing itself clears.",
        "fr": "Une DNSBL est une base de données publiée intégralement via DNS — et c'est précisément pour cela qu'elle est le seul diagnostic à se comporter à l'identique sur toutes les plateformes où SSHive est distribué.\n\nPour tester 203.0.113.25 contre zen.spamhaus.org, le client inverse les quatre octets et demande un enregistrement A à 25.113.0.203.zen.spamhaus.org. L'inversion n'a rien de cosmétique. Le DNS délègue hiérarchiquement de droite à gauche : écrire l'adresse à l'envers permet à l'opérateur de la zone de déléguer par /8, /16 ou /24, exactement comme in-addr.arpa le fait pour les résolutions inverses. NXDOMAIN signifie « non listée ». Toute réponse dans 127.0.0.0/8 signifie « listée », les octets de poids faible encodant la sous-liste concernée. Un enregistrement TXT sur le même nom, lorsque l'opérateur en publie un, porte le motif lisible et l'URL de retrait.\n\nSSHive implémente cela deux fois. Sur macOS et Windows, le processus principal lance les huit requêtes de zone en parallèle via le résolveur c-ares de Node, chacune interceptée individuellement pour qu'une zone morte ou limitée en débit ne fasse pas échouer l'ensemble ; en cas de hit, une seconde requête TXT sur le même nom récupère le motif. Sur iPhone et iPad, l'implémentation Swift éclate les dix zones dans un groupe de tâches sur une file utilitaire, un getaddrinfo forcé en AF_INET par zone, puis trie les résultats en plaçant les listings d'abord, ensuite par ordre alphabétique. Les deux acceptent une IPv4 littérale ou un nom d'hôte, ce dernier étant résolu vers son premier enregistrement A avant toute interrogation.\n\nComme tout cela se ramène à une résolution d'enregistrement A via le résolveur système, aucun socket brut, aucun port privilégié et aucun binaire lancé ne sont impliqués : la vérification tourne telle quelle dans le bac à sable d'Apple. C'est vrai de tous les outils de ce panneau, ping et traceroute compris : ils émettent du vrai ICMP depuis un socket datagramme qui n'exige aucun privilège, si bien qu'aucune plateforme ne rend ici un diagnostic moins complet qu'ailleurs. Cela signifie aussi que chaque requête part de votre appareil vers les serveurs de noms de la zone, via le résolveur assigné par votre réseau : aucun backend SSHive, aucune API web tierce sur le trajet.\n\nDeux limites sont assumées. L'outil est IPv4 uniquement, et il n'interroge que des zones basées sur l'IP : pas de listes par domaine de type URIBL ou SURBL, pas d'horodatage des listings, pas de lien de retrait cliquable.\n\nReste le retrait lui-même, où l'ordre des opérations décide de tout. Corrigez la cause avant de soumettre quoi que ce soit : retirer un listing alors que la source est encore active vous fait relister, souvent avec une pénalité plus longue. Les causes habituelles, par fréquence approximative : un compte SMTP AUTH compromis (cherchez un identifiant unique s'authentifiant depuis de nombreuses IP sources), un formulaire de contact web détourné, un relais ouvert, un poste infecté partageant votre IP publique derrière du NAT, et une liste de diffusion légitime devenue assez obsolète pour toucher des pièges à spam. Vérifiez ensuite les fondamentaux : un reverse DNS confirmé dans les deux sens et cohérent avec votre nom HELO, plus SPF, DKIM et DMARC. Alors seulement, utilisez la page de retrait de chaque opérateur. Spamhaus, Barracuda et SpamCop proposent des formulaires en libre-service ; PSBL, NiX Spam et UCEPROTECT niveau 1 expirent d'eux-mêmes une fois le trafic arrêté. Évitez tout service promettant un retrait de cent listes d'un coup, et attendez-vous à ce que la remise se rétablisse plusieurs jours après la levée du listing."
      }
    },
    "relatedTools": [
      "mx-lookup",
      "dns-lookup",
      "whois"
    ]
  }
];

/** Tool pages only — the hub (empty slug) is excluded. */
export const NETWORK_TOOL_SLUGS = NETWORK_TOOLS.filter((t) => t.slug !== '').map(
  (t) => t.slug,
);

export function getNetworkTool(slug: string): NetworkToolSEO | undefined {
  return NETWORK_TOOLS.find((t) => t.slug === slug);
}

export function getNetworkToolsHub(): NetworkToolSEO | undefined {
  return NETWORK_TOOLS.find((t) => t.slug === '');
}
