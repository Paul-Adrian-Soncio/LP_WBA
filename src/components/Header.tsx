"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#listings", label: "Listings" },
  { href: "#move", label: "Let's Move" },
  { href: "#about", label: "About Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:flex items-center justify-between bg-charcoal text-cream/90 text-xs tracking-wide px-6 lg:px-12 py-2">
        <a href="tel:2069196886" className="flex items-center gap-2 hover:text-gold-light transition-colors">
          <PhoneIcon /> (206) 919-6886
        </a>
        <span>Open Daily &middot; 8:00 AM &ndash; 7:00 PM</span>
        <a href="#contact" className="hover:text-gold-light transition-colors">
          Get In Touch
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-cream"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between py-3">
          <a href="#top" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Marci Metzger Homes"
              width={220}
              height={69}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 font-heading text-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-charcoal-soft visited:text-charcoal-soft hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:2069196886"
            className="hidden md:inline-block border border-charcoal px-5 py-2 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors"
          >
            Call Now
          </a>

          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9"
          >
            <span
              className={`h-[1.5px] w-7 bg-charcoal transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-7 bg-charcoal transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-7 bg-charcoal transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-cream ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-6 pb-6 gap-4 font-heading text-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-charcoal-soft hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:2069196886"
              className="mt-2 text-center border border-charcoal px-5 py-2 text-sm tracking-widest uppercase"
            >
              Call Now: (206) 919-6886
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
