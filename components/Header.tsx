"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] h-[var(--header-h)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[calc(var(--header-h)+20px)] transition-opacity duration-300"
        style={{
          background: "var(--header-fade)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className="relative mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
        <Link href="/" aria-label="Tidey home">
          <Image
            src="/assets/illustrations/wordmark-white.png"
            alt="Tidey"
            width={120}
            height={34}
            priority
            className="h-[34px] w-auto drop-shadow-[0_2px_6px_rgba(11,80,150,0.25)]"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-white/90 transition hover:bg-white/20 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileDrawer open={open} onClose={() => setOpen(false)} links={links} />

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/20 md:hidden cursor-pointer"
        >
          <span
            className={`absolute block h-[2.5px] w-5 rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-ink" : "-translate-y-[6px] bg-white"
            }`}
          />
          <span
            className={`absolute block h-[2.5px] w-5 rounded-full bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[2.5px] w-5 rounded-full transition-all duration-300 ${
              open ? "-rotate-45 bg-ink" : "translate-y-[6px] bg-white"
            }`}
          />
        </button>

        <a href="mailto:hello@tidey.app" className="hidden md:inline-flex pill-glass">
          hello@tidey.app
        </a>
      </div>
    </header>
  );
}