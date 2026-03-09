import type { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';
import WorkInProgress from '@/components/WorkInProgress/WorkInProgress';
import './globals.css';

const isProd = process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  title: 'Studio Aire',
  description: 'Space and identity design — Emma Reilhac',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        {isProd ? (
          <WorkInProgress />
        ) : (
          <>
            <Navigation />
            <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
