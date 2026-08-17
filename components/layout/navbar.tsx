"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Memory", href: "#memory" },
  { label: "Human + AI", href: "#human-ai" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // لو المستخدم نازل لتحت والـ scroll أكبر من 100px، اخفي الـ navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // لو المستخدم طالع لفوق، أظهر الـ navbar
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 transition-all duration-300 ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex h-14 items-center rounded-2xl border border-default bg-surface/95 px-4 shadow-sm backdrop-blur-md">
        {/* Logo */}
        <Link
          href="#hero"
          className="shrink-0 text-lg font-semibold tracking-tight text-brand"
        >
          aisitey
        </Link>

        {/* Navigation */}
        <div className="ml-5 flex min-w-0 flex-1 items-center gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-copy-secondary transition-colors hover:text-brand"
          >
            GitHub
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#start"
          className="ml-4 hidden shrink-0 rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark sm:block"
        >
          Start Building
        </Link>
      </div>
    </nav>
  );
}