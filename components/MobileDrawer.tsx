import { useEffect } from "react";
import Link from "next/link";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export default function MobileDrawer({ open, onClose, links }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={`md:hidden`}>
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 z-40 bg-[rgba(11,80,150,0.45)] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-[320px] flex-col gap-2 bg-white p-6 pt-[calc(var(--header-h)+8px)] shadow-[var(--shadow-lg)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "invisible translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-[var(--radius-md)] px-4 py-3 text-lg font-extrabold text-ink transition hover:bg-brand-soft"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="mailto:hello@tidey.app"
          onClick={onClose}
          className="mt-4 rounded-full bg-brand px-6 py-3 text-center font-extrabold text-white transition hover:bg-brand-hover"
        >
          hello@tidey.app
        </a>
      </aside>
    </div>
  );
}