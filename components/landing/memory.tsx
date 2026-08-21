// components/landing/memory.tsx
const contextFiles = [
  {
    name: "project-overview.md",
    role: "What you're building",
    description:
      "Goals, core user flow, features, and scope. The source of truth for what's in and out.",
  },
  {
    name: "architecture.md",
    role: "How it's built",
    description:
      "Tech stack, system boundaries, data model, and domain entities. No guessing allowed.",
  },
  {
    name: "ui-context.md",
    role: "How it looks",
    description:
      "Design tokens, typography, layout patterns, and component rules.",
  },
  {
    name: "code-standards.md",
    role: "How code is written",
    description:
      "Coding conventions, validation rules, error handling, and file organization.",
  },
  {
    name: "ai-workflow-rules.md",
    role: "How AI works",
    description:
      "Scoping rules, implementation order, and protected decisions AI can't change.",
  },
  {
    name: "memory.md",
    role: "What was decided",
    description:
      "Important decisions, domain rules, and implementation knowledge that persists.",
  },
  {
    name: "progress-tracker.md",
    role: "Where you are",
    description:
      "Current phase, completed work, and next steps. Updated constantly.",
  },
];

export function Memory() {
  return (
    <section className="px-6 py-16">
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
            Seven context files work together to give AI agents complete
            project knowledge — before a single line of code is written.
          </p>
        </div>

        {/* File structure visualization */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-default bg-surface p-6 shadow-sm md:p-8">
          <div className="rounded-2xl bg-subtle p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-copy-muted mb-6">
              <span>📁</span>
              <span>.aisitey/</span>
            </div>

            <div className="space-y-2">
              {contextFiles.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-3 rounded-xl border border-default bg-surface px-4 py-3"
                >
                  <span className="text-sm">📄</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-copy-primary">
                      {file.name}
                    </p>
                    <p className="text-xs text-copy-muted">{file.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Context cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contextFiles.map((file) => (
            <div
              key={file.name}
              className="rounded-3xl border border-default bg-surface p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                📄
              </div>

              <h3 className="mt-6 font-mono text-sm font-semibold text-copy-primary">
                {file.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-brand">{file.role}</p>

              <p className="mt-3 text-sm leading-6 text-copy-secondary">
                {file.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 text-center">
          <p className="text-base text-copy-muted">
            One project. Seven files. Complete context for any AI agent.
          </p>
        </div>
      </div>
    </section>
  );
}