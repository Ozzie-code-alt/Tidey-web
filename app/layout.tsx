import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'tidey — coming soon',
  description:
    'Tidey turns everyday chores into fun little missions — kids earn coins, build streaks, and grow into capable humans. Join the waitlist.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
