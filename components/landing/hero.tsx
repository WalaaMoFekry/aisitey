import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-28">
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-default bg-surface px-4 py-2 text-sm text-copy-secondary">
          <span className="h-2 w-2 rounded-full bg-ai" />
          AI-powered development system
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-copy-primary sm:text-6xl md:text-7xl">
          Turn your ideas into{" "}
          <span className="text-brand">real products.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-copy-secondary">
          aisitey helps you turn an idea into a working web product while
          keeping your project context, architecture, and decisions connected.
        </p>

        {/* Prompt Box */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-default bg-surface p-3 shadow-sm">
          <div className="rounded-2xl bg-subtle p-5 text-left">
            <p className="mb-4 text-sm text-copy-muted">
              What do you want to build?
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex-1 text-base text-copy-secondary">
                Build a modern SaaS platform for...
              </div>

              <Link
                href="#start"
                className="rounded-xl bg-brand px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Build with AI →
              </Link>
            </div>
          </div>
        </div>

        {/* Flow */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-copy-muted">
          <span>Idea</span>
          <span>→</span>
          <span>Context</span>
          <span>→</span>
          <span>Architecture</span>
          <span>→</span>
          <span>AI</span>
          <span>→</span>
          <span className="font-medium text-brand">Product</span>
        </div>
      </div>
    </section>
  );
}