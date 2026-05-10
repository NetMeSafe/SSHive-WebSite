import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { routing } from '@/i18n/routing';

function pickLocale(acceptLanguage: string): 'en' | 'fr' {
  const ordered = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, qStr] = part.trim().split(';q=');
      const q = qStr ? Number.parseFloat(qStr) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ordered) {
    const base = tag.split('-')[0];
    if (routing.locales.includes(base as 'en' | 'fr')) {
      return base as 'en' | 'fr';
    }
  }
  return routing.defaultLocale;
}

export default async function RootRedirect() {
  const h = await headers();
  const cookieLocale = h.get('cookie')?.match(/NEXT_LOCALE=([^;]+)/)?.[1];
  if (cookieLocale && routing.locales.includes(cookieLocale as 'en' | 'fr')) {
    redirect(`/${cookieLocale}`);
  }
  const accept = h.get('accept-language') ?? '';
  redirect(`/${pickLocale(accept)}`);
}
