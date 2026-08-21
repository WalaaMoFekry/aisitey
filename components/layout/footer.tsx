// components/layout/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-default bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="#hero"
              className="text-xl font-semibold tracking-tight text-brand"
            >
              aisitey
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-copy-muted">
              Build with context, not chaos. A structured system for AI-driven
              development.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <Link
              href="#how-it-works"
              className="text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              How it works
            </Link>

            <Link
              href="#memory"
              className="text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              Memory
            </Link>

            <Link
              href="#human-ai"
              className="text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              Human + AI
            </Link>

            <a
              href="https://github.com/WalaaMoFekry/aisitey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              GitHub
            </a>

            <a
              href="https://www.npmjs.com/package/aisitey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-red-500 transition-colors hover:text-red-600"
            >
              npm
            </a>

            <Link
              href="/pricing"
              className="text-sm text-copy-secondary transition-colors hover:text-brand"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-default pt-6 text-sm text-copy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} aisitey.com All rights reserved.</p>

          <div className="flex gap-4">
            <p>Built with AI. Directed by humans.</p>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://github.com/WalaaMoFekry/aisitey"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand"
            >
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
