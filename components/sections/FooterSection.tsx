"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const NAV_COLUMNS = [
  {
    heading: "Company",
    links: [
      
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[#080808]">
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[clamp(80px,18vw,220px)] font-bold leading-none tracking-tighter text-white/[0.03]"
      >
        FORGE
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* ── Brand column ──────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image
                src="/logo-short.png"
                alt="Forge"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg invert"
              />
              <span className="font-serif text-xl font-semibold tracking-tight text-white">
                forge
              </span>
            </Link>

            {/* Tagline */}
            <p className="max-w-xs text-sm leading-relaxed text-white/35">
              The AI-powered app builder for developers who move fast. Describe
              it. Ship it. Iterate.
            </p>

            {/* Newsletter */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/40">
                Get the weekly dev drop
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="h-10 flex-1 rounded-lg border border-white/10 bg-white/5 px-3.5 text-sm text-white placeholder:text-white/25 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/10 transition-colors"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-black transition-all hover:bg-white/90 active:scale-95"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* ── Nav columns ───────────────────────────────────── */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/40">
                {col.heading}
              </p>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="relative border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-10">
          {/* Copyright */}
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Forge. All rights reserved. Built with
            obsession.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ svg, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-white/30 transition-colors hover:text-white/80"
              >
                {svg}
              </Link>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4 text-xs text-white/25">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
