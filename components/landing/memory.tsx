const memoryItems = [
  {
    title: "Project Context",
    description:
      "Your product requirements, goals, and important context stay connected throughout development.",
  },
  {
    title: "Technical Decisions",
    description:
      "Architecture and technical decisions remain part of the project instead of disappearing after each task.",
  },
  {
    title: "Reusable Skills",
    description:
      "Define reusable skills and rules that guide AI to work consistently across your product.",
  },
];

export function Memory() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-brand">
            PROJECT MEMORY
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
            Your project remembers.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            AI works better when it understands the project beyond the current
            prompt.
          </p>
        </div>

        {/* Memory visualization */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-default bg-surface p-6 shadow-sm md:p-8">
          <div className="rounded-2xl bg-subtle p-6 md:p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
              <div className="rounded-2xl border border-default bg-surface px-6 py-5 text-center">
                <p className="text-sm text-copy-muted">Your Project</p>

                <p className="mt-1 font-semibold text-copy-primary">
                  Context
                </p>
              </div>

              <div className="text-xl text-brand">→</div>

              <div className="rounded-2xl border border-brand/20 bg-brand-soft px-6 py-5 text-center">
                <p className="text-sm text-brand">aisitey</p>

                <p className="mt-1 font-semibold text-brand">
                  Project Memory
                </p>
              </div>

              <div className="text-xl text-brand">→</div>

              <div className="rounded-2xl border border-default bg-surface px-6 py-5 text-center">
                <p className="text-sm text-copy-muted">AI</p>

                <p className="mt-1 font-semibold text-copy-primary">
                  Better Decisions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Memory cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {memoryItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-default bg-surface p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                ✦
              </div>

              <h3 className="mt-6 text-lg font-semibold text-copy-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-copy-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 text-center">
          <p className="text-base text-copy-muted">
            One project. One connected context. Better AI collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}