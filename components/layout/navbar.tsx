"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          href="/"
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

        {/* Desktop Navigation */}
        <div className="ml-8 hidden min-w-0 flex-1 items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="ml-auto flex size-9 items-center justify-center rounded-xl border border-default lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-4" />
          ) : (
            <Menu className="size-4" />
          )}
        </button>

        {/* Auth */}
        <div className="ml-6 hidden shrink-0 items-center gap-3 lg:flex">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                <button className="rounded-xl px-4 py-2 text-sm font-medium text-copy-secondary transition-colors hover:text-brand">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
                <button className="rounded-xl bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                  Get Started
                </button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-default bg-surface p-4 shadow-lg lg:hidden">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm text-copy-secondary hover:bg-subtle hover:text-brand"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 border-t border-default" />

            {isSignedIn ? (
              <div className="px-4 py-2">
                <UserButton />
              </div>
            ) : (
              <div className="flex flex-col gap-2 px-4 py-2">
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <button className="rounded-xl px-4 py-2 text-sm font-medium text-copy-secondary hover:bg-subtle">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <button className="rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}