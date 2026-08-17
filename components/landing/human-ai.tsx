const roles = [
  {
    title: "You",
    subtitle: "Direction & Creativity",
    items: [
      "Define the idea",
      "Choose the product direction",
      "Make design and UX decisions",
      "Review and change the result",
    ],
    className: "border-default bg-surface",
    badgeClass: "bg-brand-soft text-brand",
  },
  {
    title: "AI",
    subtitle: "Execution & Assistance",
    items: [
      "Turn decisions into code",
      "Handle repetitive work",
      "Connect APIs and systems",
      "Suggest and improve solutions",
    ],
    className: "border-brand/20 bg-brand-soft",
    badgeClass: "bg-white text-brand",
  },
];

export function HumanAI() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-brand">
            HUMAN + AI
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
            You stay in control.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            AI should amplify human creativity and decision-making, not
            replace it.
          </p>
        </div>

        {/* Roles */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <div
              key={role.title}
              className={`rounded-3xl border p-8 ${role.className}`}
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${role.badgeClass}`}
              >
                {role.title}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-copy-primary">
                {role.subtitle}
              </h3>

              <div className="mt-8 space-y-4">
                {role.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-copy-secondary"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-medium text-brand">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-10 rounded-3xl border border-default bg-surface p-8 text-center">
          <p className="text-lg font-medium text-copy-primary">
            Better tools don't remove people from the process.
          </p>

          <p className="mt-2 text-base text-copy-secondary">
            They give people more time to think, create, and build.
          </p>
        </div>
      </div>
    </section>
  );
}