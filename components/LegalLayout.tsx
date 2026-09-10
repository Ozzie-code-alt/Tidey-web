/* eslint-disable @next/next/no-img-element */

// Branded shell for legal/content pages (Privacy, Terms): slim sky header
// with the wordmark + a way home, a readable content column, and the shared
// site footer.
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="legal-head">
        <div className="legal-head-inner">
          <a href="/" aria-label="Tidey home" className="legal-logo-link">
            <img
              className="logo"
              src="/assets/illustrations/wordmark-white.png"
              alt="tidey"
            />
          </a>
          <a className="legal-back" href="/">
            ← Back home
          </a>
        </div>
      </header>

      <main className="legal">
        <article className="legal-inner">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-updated">Last updated: {updated}</p>
          {children}
        </article>
      </main>
    </>
  );
}
