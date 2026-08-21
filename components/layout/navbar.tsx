"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Memory", href: "#memory" },
  { label: "Human + AI", href: "#human-ai" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
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
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/aisitey-logo.png"
            alt="aisitey logo"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight text-brand">
            aisitey
          </span>
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
            href="https://github.com/WalaaMoFekry/aisitey"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-copy-secondary transition-colors hover:text-brand"
          >
            GitHub
          </Link>

          <a
            href="https://www.npmjs.com/package/aisitey"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold text-red-500 transition-colors hover:text-red-600"
          >
            npm
          </a>
        </div>

        {/* Auth */}
        <div className="ml-4 flex shrink-0 items-center gap-2">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="hidden rounded-xl px-4 py-2 text-sm font-medium text-copy-secondary transition-colors hover:text-brand sm:block">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                  Get Started
                </button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}