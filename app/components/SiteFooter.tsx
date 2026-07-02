/* eslint-disable @next/next/no-img-element */

// Shared site footer — single source of truth for the legal/contact links
// used by both the home page and the legal pages.
export default function SiteFooter() {
  return (
    <footer>
      <img
        className="logo"
        src="/assets/illustrations/wordmark-white.png"
        alt="tidey"
      />
      <div className="links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="mailto:hello@tidey.app">Contact</a>
      </div>
      <div className="copy">© 2026 Tidey. Made for families. 💙</div>
    </footer>
  );
}
