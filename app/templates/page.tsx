// app/templates/page.tsx
export default function TemplatesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base pt-28">
      <div className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h1 className="text-5xl font-semibold text-copy-primary">Templates</h1>
        <p className="mt-4 text-lg text-copy-secondary">
          Ready-made contexts for your projects.
        </p>
        <div className="mt-12 rounded-3xl border border-dashed border-default bg-subtle p-12">
          <p className="text-copy-muted">Coming soon...</p>
        </div>
      </div>
    </main>
  );
}