import type { Metadata, Viewport } from 'next';
import { Inter, Oswald, Trade_Winds } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/lib/seo/config';
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema, AmusementParkSchema, SpeakableSchema, HowToBookSchema } from '@/lib/seo/structured-data';
import { TrackingScriptsHead, TrackingScriptsBody } from '@/components/TrackingScripts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const tradeWinds = Trade_Winds({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-trade-winds',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f2e421',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${tradeWinds.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        <AmusementParkSchema />
        <SpeakableSchema />
        <HowToBookSchema />
      </head>
      <body className="antialiased font-[family-name:var(--font-inter)]">
        <TrackingScriptsBody />
        {children}
        <TrackingScriptsHead />
      </body>
    </html>
  );
}
