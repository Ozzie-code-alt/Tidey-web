import type { Metadata } from 'next';
import JoinParentBridge from './JoinParentBridge';

export const metadata: Metadata = {
  title: 'Join your household',
  description: 'Open your Tidey parent invite.',
  // Invite pages are one-time handoffs into the app — keep them out of search.
  robots: { index: false, follow: false },
  other: {
    // Apple Smart App Banner: Safari shows Open (installed) / Get (not).
    'apple-itunes-app': 'app-id=6819833203, app-argument=tidey://join-parent',
  },
};

export default function JoinParentPage() {
  return <JoinParentBridge />;
}
