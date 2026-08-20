// components/landing/how-it-works.tsx
const steps = [
  {
    number: "01",
    title: "Write your context",
    description:
      "Define your project overview, goals, core user flow, and scope in structured markdown files.",
  },
  {
    number: "02",
    title: "Define architecture",
    description:
      "Specify your tech stack, system boundaries, data model, and domain entities before writing code.",
  },
  {
    number: "03",
    title: "Set standards",
    description:
      "Create coding standards, UI rules, and workflow guidelines that keep AI consistent.",
  },
  {
    number: "04",
    title: "Let AI build",
    description:
      "AI agents read your context files and build exactly what's in scope — no guessing, no surprises.",
  },
  {
    number: "05",
    title: "Track everything",
    description:
      "Every decision, update, and change stays in memory and progress files as project knowledge.",
  },
  {
    number: "06",
    title: "Ship with confidence",
    description:
      "Any AI agent can pick up where another left off. Your project remembers everything.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-medium tracking-wide text-brand">
            HOW AISITEY WORKS
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
            From chaos to context.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            Seven structured files turn your idea into a system that AI agents
            can follow precisely — without inventing, forgetting, or expanding
            scope on their own.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-default bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-brand">
                  {step.number}
                </span>

                <span className="h-px w-10 bg-default transition-all duration-200 group-hover:w-16 group-hover:bg-brand" />
              </div>

              {/* Content */}
              <h3 className="mt-8 text-xl font-semibold text-copy-primary">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-copy-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 rounded-3xl border border-brand/20 bg-brand-soft px-8 py-10 text-center">
          <p className="text-lg font-medium text-brand md:text-xl">
            Stop explaining your project from scratch every session.
          </p>

          <p className="mt-2 text-base text-copy-secondary">
            Write it once. Let any AI agent build from the same context.
          </p>
        </div>
      </div>
    </section>
  );
}