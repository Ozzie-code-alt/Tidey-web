import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'tidey — coming soon',
  description:
    'Tidey turns everyday chores into fun little missions — kids earn coins, build streaks, and grow into capable humans. Join the waitlist.',
};

export const viewport: Viewport = {
  themeColor: '#01AEFA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
