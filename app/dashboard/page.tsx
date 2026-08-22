// app/dashboard/page.tsx
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FolderTree, FileText, Cpu, Plus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // نجيب user من Supabase
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', userId)
    .single();

  // نجيب المشاريع
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false });

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
              Welcome back! Your projects are waiting.
            </p>
          </div>

          {/* Stats - الأرقام الحقيقية */}
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-default bg-surface p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <FolderTree className="size-5" />
                </div>
                <span className="text-2xl font-semibold text-brand">
                  {projects?.length || 0}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-copy-primary">Projects</h3>
              <p className="mt-2 text-sm text-copy-secondary">Your active projects</p>
            </div>
            {/* ... باقي الـ stats */}
          </div>

          {/* Projects List */}
          {projects && projects.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-copy-primary">My Projects</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/dashboard/projects/${project.id}`}
                    className="group rounded-3xl border border-default bg-surface p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-copy-primary group-hover:text-brand">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-copy-secondary">
                      {project.description || 'No description'}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                        {project.tech_stack}
                      </span>
                      <span className="rounded-full bg-subtle px-3 py-1 text-xs font-medium text-copy-secondary">
                        {project.status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-16 rounded-3xl border border-dashed border-default bg-subtle p-12 text-center">
              <h3 className="text-xl font-semibold">No projects yet</h3>
              <Link href="/dashboard/new-project" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white">
                <Plus className="size-4" />
                Create Your First Project
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}