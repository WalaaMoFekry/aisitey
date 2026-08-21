// components/landing/cta.tsx
import Link from "next/link";

export function CTA() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand/20 bg-brand-soft px-6 py-20 text-center md:px-12">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-32 w-32 rounded-full bg-highlight/10 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-medium tracking-wide text-brand">
              START BUILDING
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
              Ready to build with context?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-copy-secondary md:text-lg">
              Get the seven context files that will change how you work with
              AI agents. Free and open source.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#memory"
                className="rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                View the Files →
              </Link>

              <a
                href="https://github.com/WalaaMoFekry/aisitey"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-default bg-surface px-6 py-3 text-sm font-medium text-copy-primary transition-colors hover:border-brand/30 hover:text-brand"
              >
                Get on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}