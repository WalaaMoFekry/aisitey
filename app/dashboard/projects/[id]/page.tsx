import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, FolderTree, Code2, Calendar, FileText, Download, Copy } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // نجيب user
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  // نجيب المشروع
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .eq('user_id', user?.id)
    .single();

  if (!project) {
    redirect('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-4xl px-6 pb-32">
          {/* Back button */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-copy-muted hover:text-brand transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Dashboard
          </Link>

          {/* Project Header */}
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                {project.status}
              </span>
              <span className="flex items-center gap-1 text-xs text-copy-muted">
                <Calendar className="size-3" />
                {new Date(project.created_at).toLocaleDateString()}
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold text-copy-primary">
              {project.name}
            </h1>

            {project.description && (
              <p className="mt-3 text-lg text-copy-secondary">
                {project.description}
              </p>
            )}

            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                {project.tech_stack}
              </span>
            </div>
          </div>

          {/* Context Files */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-copy-primary">
              Context Files
            </h2>
            <p className="mt-2 text-sm text-copy-secondary">
              Your project's seven context files.
            </p>

            <div className="mt-6 space-y-3">
              {[
                'project-overview.md',
                'architecture.md',
                'ui-context.md',
                'code-standards.md',
                'ai-workflow-rules.md',
                'memory.md',
                'progress-tracker.md',
              ].map((file) => (
                <div
                  key={file}
                  className="flex items-center justify-between rounded-2xl border border-default bg-surface p-4 transition-all hover:border-brand/30"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="size-4 text-copy-muted" />
                    <span className="text-sm font-mono text-copy-primary">
                      {file}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-brand/30 hover:text-brand"
                      aria-label="Copy"
                    >
                      <Copy className="size-3.5" />
                    </button>
                    <button
                      className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-brand/30 hover:text-brand"
                      aria-label="Download"
                    >
                      <Download className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Link
              href={`/api/templates/project-overview/download`}
              className="rounded-2xl border border-default bg-surface p-6 text-center transition-all hover:border-brand/30 hover:shadow-sm"
            >
              <FolderTree className="mx-auto size-6 text-brand" />
              <h3 className="mt-3 text-sm font-medium text-copy-primary">
                Download All Templates
              </h3>
            </Link>

            <Link
              href="/templates"
              className="rounded-2xl border border-default bg-surface p-6 text-center transition-all hover:border-brand/30 hover:shadow-sm"
            >
              <Code2 className="mx-auto size-6 text-brand" />
              <h3 className="mt-3 text-sm font-medium text-copy-primary">
                Browse More Templates
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}