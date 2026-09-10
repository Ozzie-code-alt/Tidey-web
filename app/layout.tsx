import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';

const SITE_URL = "https://www.gettidey.com";
const SITE_TITLE = "Tidey — everyday chores made fun";
const SITE_DESCRIPTION =
  "Tidey turns everyday chores into fun little missions — kids earn coins, build streaks, and grow into capable humans. Out now on iOS & Android.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Tidey",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: "/assets/icons/favicon.png", type: "image/png" }],
    apple: [{ url: "/assets/icons/favicon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Tidey",
    locale: "en_US",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
