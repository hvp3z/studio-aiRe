import type { Metadata } from 'next';
import Navigation from '@/components/Navigation/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Studio Aire',
  description: 'Design d\'espaces et d\'identités — Emma Reilhac',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main style={{ paddingTop: 'var(--nav-height)' }}>{children}</main>
      </body>
    </html>
  );
}
