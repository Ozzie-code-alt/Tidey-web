import Link from "next/link";
import Image from "next/image";

type FooterLink = { label: string; href: string; external?: boolean };

const navColumn = {
  title: "Navigation",
  links: [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Subscriptions", href: "#" },
  ] as FooterLink[],
};

const contactColumn = {
  title: "Contact",
  links: [
    { label: "Help center", href: "/contact" },
    { label: "Support", href: "/contact" },
  ] as FooterLink[],
};

const followColumn = {
  title: "Follow us",
  links: [
    { label: "Instagram", href: "https://instagram.com", external: true },
    { label: "Facebook", href: "https://facebook.com", external: true },
  ] as FooterLink[],
};

const columns = [navColumn, contactColumn, followColumn];

export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[1940px] bg-white px-6 pb-10 pt-20 lg:px-[162px] lg:pb-[100px]">
      <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
        <Link
          href="/"
          aria-label="Tidey home"
          className="inline-flex max-w-[381px] shrink-0 justify-center lg:justify-start"
        >
          <Image
            src="/assets/illustrations/tidey-logo-blue.svg"
            alt="Tidey"
            width={330}
            height={163}
            className="w-[220px] max-w-full lg:w-[330px]"
          />
        </Link>

        <div className="flex flex-1 flex-row justify-between gap-6 lg:gap-[99px]">
          {columns.map((col) => (
            <div
              key={col.title}
              className="flex flex-col items-start justify-center gap-[26px] lg:items-start"
            >
              <span className="text-[16px] font-bold leading-[150%] text-[#232323] lg:text-[20px]">
                {col.title}
              </span>
              {col.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium leading-[150%] text-[#232323] hover:text-[#0088FA] lg:text-[20px]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14px] font-medium leading-[150%] text-[#232323] hover:text-[#0088FA] lg:text-[20px]"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
