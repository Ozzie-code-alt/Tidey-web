"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const forceFade = pathname === "/privacy" || pathname === "/terms";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] h-[91px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[calc(var(--header-h)+20px)] transition-opacity duration-300"
        style={{
          background: "var(--header-fade)",
          opacity: forceFade || scrolled ? 1 : 0,
        }}
      />
      <div className="relative mx-auto flex h-full max-w-[1940px] items-center justify-between md:px-7.5 lg:px-[60px]">
        <Link href="/" aria-label="Tidey home" className="shrink-0">
          <Image
            src="/assets/illustrations/tidey-logo-white.svg"
            alt="Tidey"
            width={104}
            height={64}
            priority
            className="h-auto w-auto drop-shadow-[0_1.2px_6px_rgba(12,56,178,0.25)]"
          />
        </Link>

        <nav className="hidden items-center gap-[69px] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-normal leading-5 tracking-[-0.01em] text-white/90 transition hover:text-white"
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
          className="relative z-[60] flex flex-col w-[25px] items-center justify-center md:hidden cursor-pointer mr-4 md:mr-0 h-9"
        >
          <span
            aria-hidden
            className={`absolute block h-1 w-[25px] rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-[#232323]" : "-translate-y-[9px] bg-white"
            }`}
          />
          <span
            aria-hidden
            className={`absolute block  h-1 w-[25px] rounded-full transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100 bg-white"
            }`}
          />
          <span
            aria-hidden
            className={`absolute block h-1 w-[25px] rounded-full transition-all duration-300 ${
              open ? "-rotate-45 bg-[#232323]" : "translate-y-[9px] bg-white"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
