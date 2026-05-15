import type { Bilingual, QA } from './features';

export interface IntegrationStep {
  title: Bilingual;
  body: Bilingual;
  code?: string;
}

export interface IntegrationSEO {
  slug: string;
  /** Brand name shown in headings */
  clientName: string;
  /** Marketing 1-liner for the client */
  clientTagline: Bilingual;
  metaTitle: Bilingual;
  metaDescription: Bilingual;
  h1: Bilingual;
  hero: Bilingual;
  intro: Bilingual;
  /** Step-by-step setup, 3-5 steps */
  steps: IntegrationStep[];
  /** Real-world examples of what to ask the AI once set up */
  examplesHeading: Bilingual;
  examples: Array<{ prompt: Bilingual; behaviour: Bilingual }>;
  faq: QA[];
  /** Long-form context */
  whyHeading: Bilingual;
  why: Bilingual;
}

export const INTEGRATIONS: IntegrationSEO[] = [
  /* ────────────────────────────────────────────────────────────────────
     1. Claude Code (CLI + IDE)
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'claude-code',
    clientName: 'Claude Code',
    clientTagline: {
      en: 'Anthropic\'s CLI + IDE coding assistant',
      fr: 'L\'assistant CLI + IDE d\'Anthropic',
    },
    metaTitle: {
      en: 'Claude Code + SSH, MCP Integration via SSHive (macOS)',
      fr: 'Claude Code + SSH, Integration MCP via SSHive (macOS)',
    },
    metaDescription: {
      en: 'Connect Claude Code to your live SSH and SFTP sessions through SSHive\'s built-in MCP server. One-shot `claude mcp add` command, 100% local, Bearer-token auth. macOS only.',
      fr: 'Connectez Claude Code a vos sessions SSH et SFTP via le serveur MCP integre de SSHive. Commande one-shot `claude mcp add`, 100 % local, auth Bearer token. macOS uniquement.',
    },
    h1: {
      en: 'Claude Code + SSH through SSHive\'s MCP server',
      fr: 'Claude Code + SSH via le serveur MCP de SSHive',
    },
    hero: {
      en: 'Let Claude Code run commands on your servers, read remote files, and explore your fleet, via SSHive\'s local MCP server. One-shot CLI setup, no cloud relay.',
      fr: 'Laissez Claude Code lancer des commandes sur vos serveurs, lire des fichiers distants et explorer votre flotte, via le serveur MCP local de SSHive. Setup CLI one-shot, pas de relais cloud.',
    },
    intro: {
      en: 'Claude Code is Anthropic\'s CLI and IDE assistant, `claude` in your terminal, plus integrations for VS Code, Cursor and JetBrains. It is great at writing and refactoring code, but until you give it MCP servers, it has no idea what is running on your actual infrastructure. SSHive\'s built-in MCP server bridges that gap on macOS: every SSH and SFTP session you have open in SSHive becomes a tool Claude can call, with the same credentials, the same jump-host chain, the same Keychain protection. No new authentication, no separate session pool, Claude reuses what you already have.\n\nThe MCP server runs on `127.0.0.1` only, with a random Bearer token regenerated on every SSHive launch. Nothing leaves your machine. Note: MCP is a macOS-only feature because it needs an always-on local HTTP server that iOS background restrictions prevent.',
      fr: 'Claude Code est l\'assistant CLI et IDE d\'Anthropic, `claude` dans votre terminal, plus des integrations pour VS Code, Cursor et JetBrains. Il est tres bon pour ecrire et refactorer du code, mais tant que vous ne lui donnez pas de serveurs MCP, il n\'a aucune idee de ce qui tourne sur votre vraie infrastructure. Le serveur MCP integre de SSHive comble ce gap sur macOS : chaque session SSH et SFTP ouverte dans SSHive devient un outil que Claude peut appeler, avec les memes credentials, la meme chaine de jump-host, la meme protection Trousseau. Pas de nouvelle auth, pas de pool de sessions separe, Claude reutilise ce que vous avez deja.\n\nLe serveur MCP tourne sur `127.0.0.1` uniquement, avec un Bearer token aleatoire regenere a chaque lancement de SSHive. Rien ne quitte votre machine. Note : MCP est une feature macOS uniquement parce qu\'il faut un serveur HTTP local toujours actif, ce que les restrictions de background iOS empechent.',
    },
    steps: [
      {
        title: { en: 'Enable the MCP server in SSHive', fr: 'Activez le serveur MCP dans SSHive' },
        body: {
          en: 'Open SSHive on macOS, go to Settings → MCP, toggle "Enable MCP server". A random Bearer token appears just below, copy it. The server is now listening on `http://127.0.0.1:49422/mcp`.',
          fr: 'Ouvrez SSHive sur macOS, allez dans Reglages → MCP, activez "Enable MCP server". Un Bearer token aleatoire apparait juste en dessous, copiez-le. Le serveur ecoute sur `http://127.0.0.1:49422/mcp`.',
        },
      },
      {
        title: { en: 'Run the one-shot `claude mcp add` command', fr: 'Lancez la commande one-shot `claude mcp add`' },
        body: {
          en: 'In your terminal, paste the command SSHive shows you in the same Settings panel. It tears down any old `sshive` MCP entry and registers the new one in `~/.claude.json` in a single step.',
          fr: 'Dans votre terminal, collez la commande que SSHive affiche dans le meme panneau Reglages. Elle supprime toute ancienne entree `sshive` et enregistre la nouvelle dans `~/.claude.json` en une etape.',
        },
        code: 'claude mcp remove sshive --scope user 2>/dev/null; claude mcp add --transport http --scope user sshive http://127.0.0.1:49422/mcp --header "Authorization:Bearer <your-token>"',
      },
      {
        title: { en: 'Restart Claude Code', fr: 'Redemarrez Claude Code' },
        body: {
          en: 'Quit any running `claude` session and reopen. The next time you run `claude` (or launch the IDE plugin), it loads the new MCP config and discovers the SSHive tools: `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file`, `sftp_write_file`, `sftp_write_file_chunk`, `sftp_write_from_local_path`.',
          fr: 'Quittez toute session `claude` en cours et rouvrez. La prochaine fois que vous lancez `claude` (ou le plugin IDE), il charge la nouvelle config MCP et decouvre les outils SSHive : `ssh_list_sessions`, `ssh_execute`, `sftp_list`, `sftp_read_file`, `sftp_write_file`, `sftp_write_file_chunk`, `sftp_write_from_local_path`.',
        },
      },
      {
        title: { en: 'Open the SSH sessions you want Claude to see', fr: 'Ouvrez les sessions SSH que vous voulez exposer' },
        body: {
          en: 'Claude only sees sessions that are actually connected in SSHive. Open the prod, staging, db-master profiles you want, Claude can now `ssh_list_sessions` to discover them and `ssh_execute` to run commands. Sessions you close vanish from Claude\'s tools.',
          fr: 'Claude ne voit que les sessions reellement connectees dans SSHive. Ouvrez les profils prod, staging, db-master que vous voulez, Claude peut ensuite faire `ssh_list_sessions` pour les decouvrir et `ssh_execute` pour lancer des commandes. Les sessions fermees disparaissent des outils de Claude.',
        },
      },
    ],
    examplesHeading: {
      en: 'What to ask Claude Code once connected',
      fr: 'Que demander a Claude Code une fois connecte',
    },
    examples: [
      {
        prompt: {
          en: '"List all Docker containers on my prod server and tell me which ones have been up the longest."',
          fr: '« Liste tous les conteneurs Docker du serveur prod et dis-moi lesquels tournent depuis le plus longtemps. »',
        },
        behaviour: {
          en: 'Claude calls `ssh_list_sessions`, picks the prod profile, runs `docker ps --format "..."` via `ssh_execute`, parses the output and replies in natural language.',
          fr: 'Claude appelle `ssh_list_sessions`, choisit le profil prod, lance `docker ps --format "..."` via `ssh_execute`, parse la sortie et repond en langage naturel.',
        },
      },
      {
        prompt: {
          en: '"Read the nginx config on staging and tell me which sites it serves."',
          fr: '« Lis la config nginx de staging et dis-moi quels sites elle sert. »',
        },
        behaviour: {
          en: 'Claude calls `sftp_list` on `/etc/nginx/sites-enabled/`, then `sftp_read_file` on each entry, summarizes server blocks and listed domains.',
          fr: 'Claude appelle `sftp_list` sur `/etc/nginx/sites-enabled/`, puis `sftp_read_file` sur chaque entree, resume les blocs server et les domaines listes.',
        },
      },
      {
        prompt: {
          en: '"My deploy script just failed on prod, check `/var/log/deploy.log` and tell me what went wrong."',
          fr: '« Mon script de deploy a echoue sur prod, check `/var/log/deploy.log` et dis-moi ce qui ne va pas. »',
        },
        behaviour: {
          en: 'Claude `sftp_read_file`s the log, finds the error stanza, correlates with the previous successful entry, and proposes the likely root cause in plain English.',
          fr: 'Claude `sftp_read_file` le log, trouve la stanza d\'erreur, la correle avec l\'entree reussie precedente, et propose la cause racine probable en clair.',
        },
      },
    ],
    faq: [
      {
        question: {
          en: 'Does Claude see my SSH private keys?',
          fr: 'Claude voit-il mes cles privees SSH ?',
        },
        answer: {
          en: 'No. SSHive\'s MCP server exposes the *sessions*, not the credentials. Your keys, passphrases, and host configs stay inside SSHive\'s Keychain entries. Claude can call `ssh_execute` on a connected session, but it cannot ask for your private key.',
          fr: 'Non. Le serveur MCP de SSHive expose les *sessions*, pas les credentials. Vos cles, passphrases et configs d\'hote restent dans les entrees Trousseau de SSHive. Claude peut appeler `ssh_execute` sur une session connectee, mais il ne peut pas demander votre cle privee.',
        },
      },
      {
        question: {
          en: 'Where does the MCP traffic go?',
          fr: 'Ou va le trafic MCP ?',
        },
        answer: {
          en: 'Localhost only. The MCP server binds to `127.0.0.1`, it is not reachable from the network. Claude Code\'s `claude` process and SSHive talk over the loopback interface, Bearer-token authenticated. No cloud relay, no telemetry.',
          fr: 'Localhost uniquement. Le serveur MCP est lie a `127.0.0.1`, pas accessible depuis le reseau. Le process `claude` de Claude Code et SSHive parlent via l\'interface loopback, avec auth Bearer token. Pas de relais cloud, pas de telemetrie.',
        },
      },
      {
        question: {
          en: 'Can Claude write files to my servers via SFTP?',
          fr: 'Claude peut-il ecrire des fichiers sur mes serveurs via SFTP ?',
        },
        answer: {
          en: 'Yes, if you let it, the `sftp_write_file`, `sftp_write_file_chunk` and `sftp_write_from_local_path` tools are exposed. Claude will ask you to confirm before writing if your Claude Code permission profile is set to require approval. You can also disable individual tools in SSHive Settings → MCP.',
          fr: 'Oui si vous l\'autorisez, les outils `sftp_write_file`, `sftp_write_file_chunk` et `sftp_write_from_local_path` sont exposes. Claude demande confirmation avant d\'ecrire si le profil de permission Claude Code l\'exige. Vous pouvez aussi desactiver des outils individuellement dans Reglages → MCP.',
        },
      },
      {
        question: {
          en: 'Why is MCP macOS-only and not iOS?',
          fr: 'Pourquoi MCP est macOS uniquement et pas iOS ?',
        },
        answer: {
          en: 'MCP needs an always-on local HTTP server. iOS aggressively suspends background apps to save battery, which would kill the MCP server every time you switched apps. macOS does not have this restriction. Note that iOS still gets every other SSHive feature, SSH, SFTP, RDP, VNC, VPN, tunnels, broadcast, network tools.',
          fr: 'MCP a besoin d\'un serveur HTTP local toujours actif. iOS suspend agressivement les apps en arriere-plan pour economiser la batterie, ce qui tuerait le serveur MCP a chaque switch d\'app. macOS n\'a pas cette restriction. Note que l\'iOS recoit toutes les autres features SSHive, SSH, SFTP, RDP, VNC, VPN, tunnels, broadcast, outils reseau.',
        },
      },
    ],
    whyHeading: {
      en: 'Why pair Claude Code with SSHive specifically',
      fr: 'Pourquoi associer Claude Code et SSHive specifiquement',
    },
    why: {
      en: 'Claude Code does its best work when it has real context. Without MCP, you spend half the session pasting `docker ps` output back and forth, summarizing log files for Claude, copy-pasting config blocks one screenful at a time. SSHive\'s MCP server collapses that loop: Claude calls the tool, gets the live output, reasons over it, suggests a fix. The fix lands faster, the conversation stays terse, and your hands stop translating between two terminals.\n\nWhat is unique about SSHive vs other ways of giving Claude SSH access:\n\n• It uses sessions you already have open. Other approaches require you to give Claude raw SSH credentials, which means the credentials end up in the model\'s context, which is a security risk for any non-toy fleet. SSHive instead exposes *your existing authenticated sessions*, Claude never sees the key material, only the side effect of running commands.\n\n• It runs locally. Some "SSH for AI" tools spin up a cloud relay so the model can reach your servers through their infrastructure. SSHive\'s MCP server is bound to `127.0.0.1`, your traffic never leaves your Mac.\n\n• It survives across model versions. The MCP standard is Anthropic\'s, and Claude Code, Cursor, Claude Desktop and an increasing number of other clients implement it. The same SSHive MCP server works with all of them without per-client configuration drift.',
      fr: 'Claude Code donne le meilleur quand il a du vrai contexte. Sans MCP, vous passez la moitie de la session a copier-coller la sortie de `docker ps` aller-retour, a resumer des fichiers de log pour Claude, a copier-coller des blocs de config un ecran a la fois. Le serveur MCP de SSHive ecrase cette boucle : Claude appelle l\'outil, recupere la sortie live, raisonne dessus, propose un fix. Le fix arrive plus vite, la conversation reste concise, et vos mains arretent de traduire entre deux terminaux.\n\nCe qui est unique a SSHive vs d\'autres facons de donner du SSH a Claude :\n\n• Il utilise les sessions deja ouvertes. Les autres approches obligent a donner a Claude des credentials SSH bruts, ce qui les fait atterrir dans le contexte du modele, risque securite pour toute flotte non-jouet. SSHive expose plutot *vos sessions deja authentifiees*, Claude ne voit jamais le materiel cle, seulement l\'effet de bord des commandes.\n\n• Il tourne en local. Certains outils "SSH pour IA" montent un relais cloud pour que le modele atteigne vos serveurs via leur infra. Le serveur MCP de SSHive est lie a `127.0.0.1`, votre trafic ne quitte jamais votre Mac.\n\n• Il survit aux versions de modeles. Le standard MCP est d\'Anthropic, et Claude Code, Cursor, Claude Desktop et un nombre croissant d\'autres clients l\'implementent. Le meme serveur MCP de SSHive marche avec tous, sans drift de config par client.',
    },
  },
  /* ────────────────────────────────────────────────────────────────────
     2. Cursor
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'cursor',
    clientName: 'Cursor',
    clientTagline: {
      en: 'The AI-first code editor (VS Code fork)',
      fr: 'L\'editeur de code AI-first (fork de VS Code)',
    },
    metaTitle: {
      en: 'Cursor + SSH, MCP Integration via SSHive (macOS)',
      fr: 'Cursor + SSH, Integration MCP via SSHive (macOS)',
    },
    metaDescription: {
      en: 'Give Cursor access to your live SSH and SFTP sessions through SSHive\'s built-in MCP server. JSON config snippet, 100% local, Bearer-token auth. macOS only.',
      fr: 'Donnez a Cursor l\'acces a vos sessions SSH et SFTP via le serveur MCP integre de SSHive. Snippet JSON, 100 % local, auth Bearer token. macOS uniquement.',
    },
    h1: {
      en: 'Cursor + SSH through SSHive\'s MCP server',
      fr: 'Cursor + SSH via le serveur MCP de SSHive',
    },
    hero: {
      en: 'Let Cursor inspect your running fleet, list containers, read logs, edit configs over SFTP. Local MCP server, no cloud relay.',
      fr: 'Laissez Cursor inspecter votre flotte qui tourne, lister les conteneurs, lire les logs, editer les configs en SFTP. Serveur MCP local, pas de relais cloud.',
    },
    intro: {
      en: 'Cursor is a VS Code fork built around AI-assisted coding, Cmd+K for inline edits, Cmd+L for chat, agent mode for multi-step refactors. Its MCP support lets external tool servers expose capabilities the model can call. SSHive\'s MCP server gives Cursor seven tools: list active SSH sessions, run SSH commands, browse and read/write files over SFTP, and stream large file uploads without base64 overhead. All scoped to sessions you have actively open in SSHive, all authenticated through the macOS Keychain, all running on `127.0.0.1` only.\n\nThe pairing is most useful when Cursor is editing code that depends on remote state, a Dockerfile that needs the host\'s actual `apt list --installed`, an nginx config that has to match the deployed version, a database migration that needs to know what tables actually exist. Instead of guessing or asking you to paste, Cursor asks the SSHive MCP server.',
      fr: 'Cursor est un fork de VS Code construit autour du coding assiste par IA, Cmd+K pour les edits inline, Cmd+L pour le chat, mode agent pour les refactors multi-etapes. Son support MCP laisse des serveurs d\'outils externes exposer des capacites que le modele peut appeler. Le serveur MCP de SSHive donne a Cursor sept outils : lister les sessions SSH actives, lancer des commandes SSH, parcourir et lire/ecrire des fichiers en SFTP, et streamer les gros uploads sans overhead base64. Tout cible aux sessions actives dans SSHive, tout authentifie via le Trousseau macOS, tout sur `127.0.0.1` uniquement.\n\nLa paire est la plus utile quand Cursor edite du code qui depend d\'etat distant, un Dockerfile qui a besoin du vrai `apt list --installed` de l\'hote, une config nginx qui doit matcher la version deployee, une migration de base qui doit savoir quelles tables existent. Au lieu de deviner ou de vous demander de coller, Cursor demande au serveur MCP de SSHive.',
    },
    steps: [
      {
        title: { en: 'Enable the MCP server in SSHive', fr: 'Activez le serveur MCP dans SSHive' },
        body: {
          en: 'Open SSHive on macOS, Settings → MCP, toggle "Enable MCP server". Copy the Bearer token displayed below.',
          fr: 'Ouvrez SSHive sur macOS, Reglages → MCP, activez "Enable MCP server". Copiez le Bearer token affiche.',
        },
      },
      {
        title: { en: 'Open Cursor\'s MCP settings', fr: 'Ouvrez les reglages MCP de Cursor' },
        body: {
          en: 'In Cursor: Cmd+Shift+J → Cursor Settings → MCP. Click "Add new MCP server" and paste the JSON snippet from SSHive\'s MCP settings panel (replace `<your-token>` with the actual Bearer token).',
          fr: 'Dans Cursor : Cmd+Shift+J → Cursor Settings → MCP. Cliquez "Add new MCP server" et collez le snippet JSON depuis le panneau Reglages MCP de SSHive (remplacez `<your-token>` par le vrai Bearer token).',
        },
        code: `{
  "mcpServers": {
    "sshive": {
      "type": "http",
      "url": "http://127.0.0.1:49422/mcp",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}`,
      },
      {
        title: { en: 'Reload Cursor', fr: 'Rechargez Cursor' },
        body: {
          en: 'Cmd+Shift+P → "Reload Window". When Cursor restarts, the MCP indicator in the bottom bar should show `sshive` connected with 7 tools. Click it to verify.',
          fr: 'Cmd+Shift+P → "Reload Window". Au redemarrage, l\'indicateur MCP en bas doit afficher `sshive` connecte avec 7 outils. Cliquez pour verifier.',
        },
      },
      {
        title: { en: 'Open SSH sessions to expose', fr: 'Ouvrez les sessions SSH a exposer' },
        body: {
          en: 'In SSHive, connect to the servers you want Cursor to see (Cursor only sees connected sessions). Now in Cursor chat, ask: "What containers are running on prod?", Cursor calls `ssh_list_sessions`, picks prod, runs `docker ps`, replies.',
          fr: 'Dans SSHive, connectez-vous aux serveurs que vous voulez exposer a Cursor (Cursor ne voit que les sessions connectees). Dans le chat Cursor, demandez : « Quels conteneurs tournent sur prod ? », Cursor appelle `ssh_list_sessions`, choisit prod, lance `docker ps`, repond.',
        },
      },
    ],
    examplesHeading: {
      en: 'What to ask Cursor once connected',
      fr: 'Que demander a Cursor une fois connecte',
    },
    examples: [
      {
        prompt: {
          en: '"Refactor this Dockerfile to match the package versions actually installed on prod."',
          fr: '« Refactore ce Dockerfile pour matcher les versions de package reellement installees sur prod. »',
        },
        behaviour: {
          en: 'Cursor pulls `apt list --installed` via `ssh_execute` on the prod session, diffs against your Dockerfile, proposes minimal changes.',
          fr: 'Cursor pull `apt list --installed` via `ssh_execute` sur la session prod, diff contre votre Dockerfile, propose des changements minimaux.',
        },
      },
      {
        prompt: {
          en: '"Generate the docker-compose.yml from the running compose stack on staging."',
          fr: '« Genere le docker-compose.yml depuis le stack compose qui tourne sur staging. »',
        },
        behaviour: {
          en: 'Cursor reads the deployed compose file via `sftp_read_file` and `docker compose config` via `ssh_execute`, produces a clean compose file aligned with reality.',
          fr: 'Cursor lit le fichier compose deploye via `sftp_read_file` et `docker compose config` via `ssh_execute`, produit un fichier compose propre aligne sur la realite.',
        },
      },
      {
        prompt: {
          en: '"Tail the api-gateway logs and tell me when the next 500 error happens."',
          fr: '« Tail les logs api-gateway et dis-moi quand la prochaine erreur 500 arrive. »',
        },
        behaviour: {
          en: 'Cursor calls `ssh_execute` with `docker logs -f api-gateway 2>&1 | head -200`, scans for 500-status entries, summarizes the stack trace.',
          fr: 'Cursor appelle `ssh_execute` avec `docker logs -f api-gateway 2>&1 | head -200`, scanne les entrees 500, resume la stack trace.',
        },
      },
    ],
    faq: [
      {
        question: {
          en: 'Can Cursor accidentally run a destructive command?',
          fr: 'Cursor peut-il accidentellement lancer une commande destructrice ?',
        },
        answer: {
          en: 'Cursor asks for confirmation before any tool call by default, including `ssh_execute`. You see the exact command, you click "Approve" or "Deny". You can set Cursor to auto-approve specific tools, but the default is approve-each.',
          fr: 'Cursor demande confirmation avant tout appel d\'outil par defaut, y compris `ssh_execute`. Vous voyez la commande exacte, vous cliquez "Approuver" ou "Refuser". Vous pouvez regler Cursor pour auto-approuver des outils specifiques, mais le defaut est approuver-chacune.',
        },
      },
      {
        question: {
          en: 'Does this work for Cursor agent mode?',
          fr: 'Ca marche pour le mode agent de Cursor ?',
        },
        answer: {
          en: 'Yes. The MCP tools are exposed to both chat mode and agent mode. In agent mode, Cursor can chain multiple SSHive tool calls automatically, for instance, `ssh_list_sessions` → `ssh_execute` → `sftp_read_file`, without you confirming each step if you set agent permissions accordingly.',
          fr: 'Oui. Les outils MCP sont exposes au mode chat et au mode agent. En mode agent, Cursor peut chainer plusieurs appels SSHive automatiquement, par exemple `ssh_list_sessions` → `ssh_execute` → `sftp_read_file`, sans que vous confirmiez chaque etape si les permissions agent le permettent.',
        },
      },
      {
        question: {
          en: 'What if I run Cursor remotely (over Cursor SSH Remote)?',
          fr: 'Si je tourne Cursor a distance (via Cursor SSH Remote) ?',
        },
        answer: {
          en: 'The MCP server runs on the host where Cursor\'s UI lives, i.e. your local Mac. Cursor SSH Remote runs the language server on the remote machine, but the MCP integration is configured client-side, so it points at your local SSHive. Your Mac talks to SSHive, your Mac talks to the remote dev box, the two are independent.',
          fr: 'Le serveur MCP tourne sur l\'hote ou vit l\'UI de Cursor, c\'est-a-dire votre Mac local. Cursor SSH Remote fait tourner le language server sur la machine distante, mais l\'integration MCP est configuree cote client, donc elle pointe sur votre SSHive local. Votre Mac parle a SSHive, votre Mac parle au dev box distant, les deux sont independants.',
        },
      },
    ],
    whyHeading: {
      en: 'Why pair Cursor with SSHive',
      fr: 'Pourquoi associer Cursor a SSHive',
    },
    why: {
      en: 'Cursor is at its best when generating code; it is at its weakest when reasoning about deployed state. Your repo and the deployed system drift constantly, and Cursor cannot know about that drift without help. SSHive\'s MCP server is the bridge: Cursor edits the code, SSHive feeds it ground truth about the running fleet. The result is code changes that align with reality on day one instead of after the second deploy fails.\n\nThe security tradeoff is favorable: SSHive\'s sessions are pre-authenticated on the Mac running Cursor, so Cursor never sees credentials. The MCP server is loopback-only and Bearer-token-gated, so even another app on the same Mac cannot piggyback. And because the protocol is open (Anthropic\'s MCP), you can disable, switch to a different MCP client, or audit the traffic anytime, nothing is proprietary lock-in.',
      fr: 'Cursor est a son meilleur pour generer du code ; son point faible est raisonner sur l\'etat deploye. Votre repo et le systeme deploye drift constamment, et Cursor ne peut pas connaitre ce drift sans aide. Le serveur MCP de SSHive est le pont : Cursor edite le code, SSHive lui fournit la verite terrain sur la flotte qui tourne. Le resultat : des changements de code alignes sur la realite des le jour 1 au lieu d\'apres le deuxieme deploy raté.\n\nLe tradeoff securite est favorable : les sessions SSHive sont pre-authentifiees sur le Mac qui fait tourner Cursor, donc Cursor ne voit jamais les credentials. Le serveur MCP est loopback-only et Bearer-token-gated, donc meme une autre app sur le meme Mac ne peut pas piggyback. Et comme le protocole est ouvert (le MCP d\'Anthropic), vous pouvez desactiver, switcher vers un autre client MCP, ou auditer le trafic n\'importe quand, pas de lock-in proprietaire.',
    },
  },
  /* ────────────────────────────────────────────────────────────────────
     3. Claude Desktop
     ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'claude-desktop',
    clientName: 'Claude Desktop',
    clientTagline: {
      en: 'Anthropic\'s standalone macOS desktop client',
      fr: 'Le client desktop macOS d\'Anthropic',
    },
    metaTitle: {
      en: 'Claude Desktop + SSH, MCP Setup via SSHive (macOS)',
      fr: 'Claude Desktop + SSH, Setup MCP via SSHive (macOS)',
    },
    metaDescription: {
      en: 'Add SSH and SFTP tools to Claude Desktop via SSHive\'s built-in MCP server. Paste a JSON config into claude_desktop_config.json, 100% local, Bearer-token auth.',
      fr: 'Ajoutez SSH et SFTP a Claude Desktop via le serveur MCP integre de SSHive. Collez une config JSON dans claude_desktop_config.json, 100 % local, auth Bearer token.',
    },
    h1: {
      en: 'Claude Desktop + SSH through SSHive\'s MCP server',
      fr: 'Claude Desktop + SSH via le serveur MCP de SSHive',
    },
    hero: {
      en: 'Use the standalone Claude Desktop app on macOS to talk to your live SSH/SFTP sessions. JSON snippet, restart, done.',
      fr: 'Utilisez l\'app Claude Desktop autonome sur macOS pour parler a vos sessions SSH/SFTP live. Snippet JSON, redemarrage, termine.',
    },
    intro: {
      en: 'Claude Desktop is Anthropic\'s standalone macOS app, chat with Claude in a window outside of any IDE, with file uploads, project memory, and MCP server support. SSHive\'s MCP integration with Claude Desktop is the simplest of the three (Claude Code, Cursor, Claude Desktop) because the config is a single JSON edit. You paste, you restart, you ask Claude to look at your servers.\n\nThis is the right pairing when you want a "chat with my fleet" experience without committing to a coding session. Open Claude Desktop, ask "What is the disk usage on prod?", Claude calls SSHive\'s `ssh_execute` with `df -h`, replies with a summary. No IDE context, no code edits, just a stateful conversation about your infrastructure.',
      fr: 'Claude Desktop est l\'app macOS autonome d\'Anthropic, chattez avec Claude dans une fenetre hors IDE, avec uploads de fichiers, memoire de projet, et support des serveurs MCP. L\'integration MCP de SSHive avec Claude Desktop est la plus simple des trois (Claude Code, Cursor, Claude Desktop) parce que la config est un seul edit JSON. Vous collez, vous redemarrez, vous demandez a Claude de regarder vos serveurs.\n\nC\'est la bonne paire quand vous voulez une experience « chat avec ma flotte » sans s\'engager dans une session de code. Ouvrez Claude Desktop, demandez « C\'est combien le disk usage de prod ? », Claude appelle `ssh_execute` de SSHive avec `df -h`, repond avec un resume. Pas de contexte IDE, pas d\'edits de code, juste une conversation persistante sur votre infrastructure.',
    },
    steps: [
      {
        title: { en: 'Enable the MCP server in SSHive', fr: 'Activez le serveur MCP dans SSHive' },
        body: {
          en: 'Open SSHive, Settings → MCP, toggle on. Copy the Bearer token.',
          fr: 'Ouvrez SSHive, Reglages → MCP, activez. Copiez le Bearer token.',
        },
      },
      {
        title: { en: 'Open the Claude Desktop config file', fr: 'Ouvrez le fichier de config Claude Desktop' },
        body: {
          en: 'In Finder, navigate to `~/Library/Application Support/Claude/claude_desktop_config.json`. If it does not exist, create it with the snippet below. Otherwise, merge the `mcpServers.sshive` key into the existing `mcpServers` object.',
          fr: 'Dans le Finder, naviguez vers `~/Library/Application Support/Claude/claude_desktop_config.json`. S\'il n\'existe pas, creez-le avec le snippet ci-dessous. Sinon, mergez la cle `mcpServers.sshive` dans l\'objet `mcpServers` existant.',
        },
        code: `{
  "mcpServers": {
    "sshive": {
      "type": "http",
      "url": "http://127.0.0.1:49422/mcp",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}`,
      },
      {
        title: { en: 'Restart Claude Desktop', fr: 'Redemarrez Claude Desktop' },
        body: {
          en: 'Quit Claude Desktop completely (Cmd+Q) and reopen. The next chat will show `sshive` in the tool list, click the small plug icon to verify.',
          fr: 'Quittez Claude Desktop completement (Cmd+Q) et rouvrez. Le prochain chat affichera `sshive` dans la liste d\'outils, cliquez la petite icone prise pour verifier.',
        },
      },
      {
        title: { en: 'Connect SSH sessions to expose', fr: 'Connectez les sessions SSH a exposer' },
        body: {
          en: 'In SSHive, open the sessions you want Claude to be able to use. Then in Claude Desktop, just ask in plain English, Claude figures out which session to use via `ssh_list_sessions` and which command to run.',
          fr: 'Dans SSHive, ouvrez les sessions que vous voulez exposer. Puis dans Claude Desktop, demandez en clair, Claude trouve quelle session utiliser via `ssh_list_sessions` et quelle commande lancer.',
        },
      },
    ],
    examplesHeading: {
      en: 'What to ask Claude Desktop',
      fr: 'Que demander a Claude Desktop',
    },
    examples: [
      {
        prompt: {
          en: '"What is the disk usage on prod, and which directories are the worst offenders?"',
          fr: '« C\'est combien le disk usage sur prod, et quels repertoires sont les pires ? »',
        },
        behaviour: {
          en: 'Claude calls `ssh_execute` with `df -h` then `du -sh /var/* 2>/dev/null | sort -h`, summarizes hot spots.',
          fr: 'Claude appelle `ssh_execute` avec `df -h` puis `du -sh /var/* 2>/dev/null | sort -h`, resume les points chauds.',
        },
      },
      {
        prompt: {
          en: '"How many active connections does my postgres have right now?"',
          fr: '« Combien de connexions actives a mon postgres en ce moment ? »',
        },
        behaviour: {
          en: 'Claude `ssh_execute`s `sudo -u postgres psql -c "SELECT count(*) FROM pg_stat_activity"` on the db-master session, returns the number with context.',
          fr: 'Claude `ssh_execute` `sudo -u postgres psql -c "SELECT count(*) FROM pg_stat_activity"` sur la session db-master, retourne le nombre avec contexte.',
        },
      },
      {
        prompt: {
          en: '"Read the systemd unit for nginx and tell me if it has any odd flags."',
          fr: '« Lis le fichier systemd de nginx et dis-moi s\'il a des flags bizarres. »',
        },
        behaviour: {
          en: 'Claude `sftp_read_file`s `/etc/systemd/system/nginx.service` (or wherever it lives), audits ExecStart/ExecReload/Restart settings, flags anything non-standard.',
          fr: 'Claude `sftp_read_file` `/etc/systemd/system/nginx.service` (ou ou il vit), audite les reglages ExecStart/ExecReload/Restart, signale tout non-standard.',
        },
      },
    ],
    faq: [
      {
        question: {
          en: 'Where is Claude Desktop\'s config file again?',
          fr: 'Ou est le fichier de config Claude Desktop deja ?',
        },
        answer: {
          en: '`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS. If you have never installed an MCP server, the file does not exist yet, create it with the snippet from SSHive Settings → MCP.',
          fr: '`~/Library/Application Support/Claude/claude_desktop_config.json` sur macOS. Si vous n\'avez jamais installe de serveur MCP, le fichier n\'existe pas encore, creez-le avec le snippet depuis Reglages → MCP de SSHive.',
        },
      },
      {
        question: {
          en: 'Claude Desktop says "sshive: failed to start", what now?',
          fr: 'Claude Desktop dit "sshive: failed to start", et maintenant ?',
        },
        answer: {
          en: 'Two likely causes. 1) SSHive is not running, Claude Desktop tries to reach the local MCP server on port 49422 and gets a connection refused. Open SSHive. 2) The Bearer token is wrong, token rotates on every SSHive launch, so if you closed SSHive and reopened, copy the new token into `claude_desktop_config.json`.',
          fr: 'Deux causes probables. 1) SSHive ne tourne pas, Claude Desktop essaie d\'atteindre le serveur MCP local sur le port 49422 et recoit un connection refused. Ouvrez SSHive. 2) Le Bearer token est faux, le token tourne a chaque lancement de SSHive, donc si vous l\'avez ferme et rouvert, copiez le nouveau token dans `claude_desktop_config.json`.',
        },
      },
      {
        question: {
          en: 'Does Claude Desktop see my whole Mac or just SSHive sessions?',
          fr: 'Claude Desktop voit-il tout mon Mac ou juste les sessions SSHive ?',
        },
        answer: {
          en: 'Just the SSHive sessions and SFTP paths SSHive exposes. The MCP server is sandboxed to seven specific tools, it cannot run arbitrary `ls` on your local Mac, cannot read your local files, cannot access apps other than SSHive. The Claude Desktop "filesystem" MCP server (separate, optional) is what lets Claude touch your local files.',
          fr: 'Juste les sessions SSHive et les chemins SFTP que SSHive expose. Le serveur MCP est sandboxe a sept outils specifiques, il ne peut pas lancer `ls` arbitraire sur votre Mac local, ne peut pas lire vos fichiers locaux, ne peut pas acceder aux apps autres que SSHive. Le serveur MCP "filesystem" de Claude Desktop (separe, optionnel) est ce qui laisse Claude toucher vos fichiers locaux.',
        },
      },
    ],
    whyHeading: {
      en: 'Why use Claude Desktop with SSHive (vs Claude Code or Cursor)',
      fr: 'Pourquoi Claude Desktop avec SSHive (vs Claude Code ou Cursor)',
    },
    why: {
      en: 'Claude Desktop is the right paired client when your task is not "write code" but "ask questions about my fleet". Examples: triaging an alert at 9pm, doing a security audit pass on a server config, getting a summary of what is unusual in the last 24h of logs. You do not need an IDE\'s editing context for those; you need a conversational interface with the ability to actually look. Claude Desktop\'s standalone window stays out of your way and keeps a longer-running thread alive than a code-focused CLI session.\n\nThe other reason to pick Claude Desktop is multi-MCP composition. Anthropic ships a Claude Desktop MCP server registry with filesystem, GitHub, Slack, Linear, Sentry, and dozens more. You can have SSHive\'s SSH/SFTP MCP server alongside the Sentry MCP server, Claude can correlate an alert from Sentry with a `journalctl -u myservice` on the implicated host via SSHive, in one chat, without you switching apps. The composability is where Claude Desktop\'s MCP shines, and SSHive slots in naturally as the SSH/SFTP/Mac-fleet provider.',
      fr: 'Claude Desktop est le bon client paire quand la tache n\'est pas « ecrire du code » mais « poser des questions sur ma flotte ». Exemples : trier une alerte a 21h, faire une passe d\'audit securite sur une config serveur, avoir un resume de ce qui est inhabituel dans les 24h de logs. Pas besoin du contexte d\'edition d\'un IDE ; il faut une interface conversationnelle avec la capacite de vraiment regarder. La fenetre autonome de Claude Desktop reste hors du chemin et garde un thread plus long que une session CLI orientee code.\n\nL\'autre raison de choisir Claude Desktop est la composition multi-MCP. Anthropic livre un registre de serveurs MCP Claude Desktop avec filesystem, GitHub, Slack, Linear, Sentry, et des dizaines d\'autres. Vous pouvez avoir le serveur MCP SSH/SFTP de SSHive a cote du serveur MCP Sentry, Claude peut correler une alerte Sentry avec un `journalctl -u myservice` sur l\'hote implique via SSHive, dans un chat, sans switch d\'app. La composabilite est la ou le MCP de Claude Desktop brille, et SSHive s\'y insere naturellement comme provider SSH/SFTP/flotte Mac.',
    },
  },
];

export const INTEGRATION_SLUGS = INTEGRATIONS.map((i) => i.slug);

export function getIntegration(slug: string): IntegrationSEO | undefined {
  return INTEGRATIONS.find((i) => i.slug === slug);
}
