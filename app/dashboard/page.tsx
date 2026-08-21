import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FolderTree, FileText, Cpu, Plus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const { userId } = await auth();
                                
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      
      <div className="flex-1 pt-28">
        <div className="mx-auto max-w-5xl px-6 py-12">
          {/* Welcome */}
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight text-copy-primary">
              Dashboard
            </h1>
            <p className="mt-3 text-lg text-copy-secondary">
              Welcome back! Your projects and templates are waiting.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-default bg-surface p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <FolderTree className="size-5" />
                </div>
                <span className="text-sm font-medium text-brand">0</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-copy-primary">
                Projects
              </h3>
              <p className="mt-2 text-sm text-copy-secondary">
                Your active projects
              </p>
            </div>

            <div className="rounded-3xl border border-default bg-surface p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <FileText className="size-5" />
                </div>
                <span className="text-sm font-medium text-brand">0</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-copy-primary">
                Templates
              </h3>
              <p className="mt-2 text-sm text-copy-secondary">
                Your saved templates
              </p>
            </div>

            <div className="rounded-3xl border border-default bg-surface p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Cpu className="size-5" />
                </div>
                <span className="text-sm font-medium text-brand">0</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-copy-primary">
                Skills
              </h3>
              <p className="mt-2 text-sm text-copy-secondary">
                Your premium skills
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-copy-primary">
              Quick Actions
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Link
                href="/dashboard/new-project"
                className="group rounded-3xl border border-default bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                    <Plus className="size-5" />
                  </div>
                  <ArrowRight className="size-5 text-copy-muted transition-all group-hover:translate-x-1 group-hover:text-brand" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-copy-primary">
                  New Project
                </h3>
                <p className="mt-2 text-sm text-copy-secondary">
                  Start building with context from scratch
                </p>
              </Link>

              <Link
                href="/dashboard/templates"
                className="group rounded-3xl border border-default bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <FileText className="size-5" />
                  </div>
                  <ArrowRight className="size-5 text-copy-muted transition-all group-hover:translate-x-1 group-hover:text-brand" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-copy-primary">
                  Browse Templates
                </h3>
                <p className="mt-2 text-sm text-copy-secondary">
                  Use ready-made contexts for your project
                </p>
              </Link>
            </div>
          </div>

          {/* Empty State */}
          <div className="mt-16 rounded-3xl border border-dashed border-default bg-subtle p-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <FolderTree className="size-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-copy-primary">
                No projects yet
              </h3>
              <p className="mt-3 text-sm leading-6 text-copy-secondary">
                Start your first project with aisitey and see how context-driven
                development changes the way you build with AI.
              </p>
              <Link
                href="/dashboard/new-project"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                <Plus className="size-4" />
                Create Your First Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}