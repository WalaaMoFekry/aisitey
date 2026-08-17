const steps = [
  {
    number: "01",
    title: "Start with an idea",
    description:
      "Describe what you want to build and define the problem your product should solve.",
  },
  {
    number: "02",
    title: "Build the context",
    description:
      "Turn your idea into structured project context, requirements, decisions, and goals.",
  },
  {
    number: "03",
    title: "Design the architecture",
    description:
      "Define the product structure, technical approach, data flow, and architecture before building.",
  },
  {
    number: "04",
    title: "Let AI build with context",
    description:
      "AI uses the project context and defined skills to help turn decisions into working software.",
  },
  {
    number: "05",
    title: "Review and improve",
    description:
      "Keep the human in control. Review the result, change the direction, and improve the product.",
  },
  {
    number: "06",
    title: "Ship the product",
    description:
      "Move from an idea to a real, maintainable product that can continue evolving.",
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
            From idea to product.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            A structured development flow that keeps your idea, decisions,
            architecture, and AI working together.
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
            The goal isn't to generate more code.
          </p>

          <p className="mt-2 text-base text-copy-secondary">
            It's to build better products with better context.
          </p>
        </div>
      </div>
    </section>
  );
}