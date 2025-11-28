"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56V24H.22zM8.08 8.5h4.38v2.11h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.01V24h-4.56v-7.22c0-1.72-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24H8.08z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com",
    icon: (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M21.4 5.5a6.7 6.7 0 0 1-1.9.5 3.3 3.3 0 0 0 1.5-1.8 6.6 6.6 0 0 1-2.1.8A3.3 3.3 0 0 0 12 7.4a9.4 9.4 0 0 1-6.8-3.5 3.3 3.3 0 0 0 1 4.4 3.3 3.3 0 0 1-1.5-.4v.1a3.3 3.3 0 0 0 2.7 3.2 3.3 3.3 0 0 1-1.5.1 3.3 3.3 0 0 0 3.1 2.3A6.6 6.6 0 0 1 3 15.6a9.3 9.3 0 0 0 5 1.4c6.1 0 9.5-5 9.5-9.5v-.4a6.5 6.5 0 0 0 1.6-1.6z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.9.2 1.9.2v2h-1.1c-1 0-1.3.7-1.3 1.3V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12" />
      </svg>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-[var(--ink)] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://shwetha.org/wp-content/uploads/2025/03/logo_sw-5.png"
            alt="Lawyera logo"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-[2px] w-5 bg-white mb-[5px]" />
          <span className="block h-[2px] w-5 bg-white mb-[5px]" />
          <span className="block h-[2px] w-5 bg-white" />
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`uppercase tracking-wide hover:text-[var(--gold)] transition-colors ${
                  active ? "text-[var(--gold)]" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--black)] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-[#c99b04] transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--ink)]/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-3 gap-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 text-sm uppercase tracking-wide border-b border-white/5 last:border-b-0 ${
                    active ? "text-[var(--gold)]" : "text-white/90"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 py-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-full items-center justify-center bg-[var(--gold)] text-[var(--black)] px-4 py-3 rounded-md font-semibold uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
