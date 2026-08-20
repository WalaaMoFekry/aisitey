import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default async function NewProjectPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      
      <div className="flex-1 pt-28">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-4xl font-semibold tracking-tight text-copy-primary">
            New Project
          </h1>
          <p className="mt-3 text-lg text-copy-secondary">
            Start building with context from scratch.
          </p>

          {/* Coming soon */}
          <div className="mt-12 rounded-3xl border border-dashed border-default bg-subtle p-12 text-center">
            <h3 className="text-xl font-semibold text-copy-primary">
              Coming Soon
            </h3>
            <p className="mt-3 text-sm text-copy-secondary">
              Project creation will be available soon. For now, use the CLI:
            </p>
            <div className="mt-6 inline-block rounded-xl bg-surface border border-default p-4">
              <code className="text-sm text-brand">aisitey init</code>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}