// components/landing/hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-28">
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-default bg-surface px-4 py-2 text-sm text-copy-secondary">
          <span className="h-2 w-2 rounded-full bg-ai" />
          Context-driven AI development system
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-copy-primary sm:text-6xl md:text-7xl">
          Build with{" "}
          <span className="text-brand">context</span>,
          <br />
          not chaos.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-copy-secondary">
          aisitey gives your AI agents a complete project memory — context,
          architecture, standards, and workflow rules. So they build exactly
          what you need, nothing more, nothing less.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#how-it-works"
            className="rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            See How It Works →
          </Link>

          <Link
            href="#memory"
            className="rounded-xl border border-default bg-surface px-6 py-3 text-sm font-medium text-copy-primary transition-colors hover:border-brand/30 hover:text-brand"
          >
            View Project Memory
          </Link>
        </div>

        {/* Flow */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-copy-muted">
          <span>Idea</span>
          <span>→</span>
          <span>Context Files</span>
          <span>→</span>
          <span>AI Agent</span>
          <span>→</span>
          <span className="font-medium text-brand">Product</span>
        </div>
      </div>
    </section>
  );
}