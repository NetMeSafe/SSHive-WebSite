import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a1b26' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
};
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.metadata;

  return {
    title: {
      default: t.title,
      template: '%s | SSHive',
    },
    description: t.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      siteName: 'SSHive',
      title: t.title,
      description: t.description,
      url: `${SITE_URL}/${locale}`,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'SSHive — SSH/SFTP client for Mac, iPhone and iPad',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'SSHive — SSH/SFTP client for Mac, iPhone and iPad',
        },
      ],
    },
    manifest: '/manifest.json',
    // Next 16 only auto-emits the <link> for favicon.ico. icon.svg,
    // apple-icon.png and the Safari mask-icon must be declared explicitly.
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      apple: '/apple-icon.png',
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#7aa2f7' },
      ],
    },
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'SSHive',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-medium focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {messages.seoCommon?.skipToContent ?? 'Skip to main content'}
        </a>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <NextIntlClientProvider messages={messages}>
          <GrainOverlay />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
