import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES } from '@/lib/constants';
import { McpPage } from '@/components/mcp/McpPage';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { getPageMetadata, isLocale } from '@/lib/seo/alternates';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'mcpPage' });

  return getPageMetadata({
    locale,
    path: '/mcp',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function McpPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'SSHive', href: '' },
          { name: 'MCP', href: '/mcp' },
        ]}
      />
      <FAQSchema items={mcpFaqItems(locale)} />
      <McpPage />
      {/* Hidden FAQ block so rich results validate the FAQPage schema content */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {locale === 'fr' ? 'FAQ MCP' : 'MCP FAQ'}
          </h2>
          <div className="space-y-6">
            {mcpFaqItems(locale).map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function mcpFaqItems(locale: string) {
  if (locale === 'fr') {
    return [
      {
        question: 'Qu’est-ce que MCP et pourquoi l’utiliser avec SSH ?',
        answer:
          'MCP (Model Context Protocol) est un standard ouvert d’Anthropic qui permet à un assistant IA comme Claude Code, Cursor ou Claude Desktop d’interagir avec des outils externes. SSHive expose un serveur MCP local qui rend vos sessions SSH et SFTP actives utilisables par l’IA, vous décrivez ce que vous voulez et Claude exécute les commandes ou lit les fichiers à votre place.',
      },
      {
        question: 'Mes serveurs sont-ils exposés sur Internet ?',
        answer:
          'Non. Le serveur MCP écoute uniquement sur 127.0.0.1 (loopback), avec authentification par Bearer token généré aléatoirement. Rien ne sort de votre machine, pas de relais cloud, pas de proxy tiers. Les commandes passent via vos sessions SSH déjà ouvertes.',
      },
      {
        question: 'Comment configurer Claude Code avec SSHive ?',
        answer:
          'Activez le serveur MCP dans Settings > MCP. Copiez la commande Claude Code one-shot affichée, elle exécute `claude mcp add ...` et inscrit SSHive dans `~/.claude.json` en une seule étape. Redémarrez Claude Code, vos sessions sont disponibles.',
      },
      {
        question: 'Quels outils MCP SSHive expose-t-il ?',
        answer:
          'Sept outils : ssh_list_sessions, ssh_execute, sftp_list, sftp_read_file, sftp_write_file, sftp_write_file_chunk, sftp_write_from_local_path. Ils couvrent l’exécution de commandes SSH et la navigation/lecture/écriture SFTP, y compris des transferts streaming sans overhead base64.',
      },
      {
        question: 'MCP marche-t-il avec Cursor, Claude Desktop, Cline ?',
        answer:
          'Oui. SSHive affiche dans Settings la config JSON prête à coller dans Cursor, Claude Desktop ou Cline (Streamable HTTP ou SSE selon le client). Une fois collée dans le fichier de config MCP du client et le client redémarré, vos sessions actives sont visibles côté IA.',
      },
    ];
  }
  return [
    {
      question: 'What is MCP and why use it with SSH?',
      answer:
        'MCP (Model Context Protocol) is an open standard from Anthropic that lets AI assistants like Claude Code, Cursor, and Claude Desktop interact with external tools. SSHive exposes a local MCP server that makes your active SSH and SFTP sessions usable by the model, you describe what you want and Claude executes commands or reads files for you.',
    },
    {
      question: 'Are my servers exposed to the internet?',
      answer:
        'No. The MCP server binds to 127.0.0.1 (loopback) only, with Bearer-token authentication using a randomly generated secret. Nothing leaves your machine, no cloud relay, no third-party proxy. Commands flow through SSH sessions you already opened in SSHive.',
    },
    {
      question: 'How do I set up Claude Code with SSHive?',
      answer:
        'Enable the MCP server in Settings > MCP. Copy the Claude Code one-shot command SSHive shows, it runs `claude mcp add ...` and registers SSHive in `~/.claude.json` in a single step. Restart Claude Code and your sessions are available.',
    },
    {
      question: 'Which MCP tools does SSHive expose?',
      answer:
        'Seven tools: ssh_list_sessions, ssh_execute, sftp_list, sftp_read_file, sftp_write_file, sftp_write_file_chunk, sftp_write_from_local_path. They cover SSH command execution and SFTP browse/read/write, including streaming uploads with no base64 overhead.',
    },
    {
      question: 'Does MCP work with Cursor, Claude Desktop, Cline?',
      answer:
        'Yes. SSHive shows ready-to-paste JSON config (Streamable HTTP or SSE depending on the client) in Settings. Paste it into your client’s MCP config file, restart the client, and your active SSHive sessions become visible to the AI.',
    },
  ];
}
