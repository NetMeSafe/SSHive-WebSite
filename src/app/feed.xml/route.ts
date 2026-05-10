import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  pubDate: string;
}

// Empty for now — fill this when blog posts are published.
const POSTS: BlogPost[] = [];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const items = POSTS.map(
    (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/en/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/en/blog/${p.slug}</guid>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${p.pubDate}</pubDate>
    </item>`,
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SSHive Blog</title>
    <link>${SITE_URL}/en/blog</link>
    <description>SSH, SFTP, Mac developer workflows, and AI integration via MCP.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
