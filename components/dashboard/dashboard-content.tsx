"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FolderTree, FileText, Cpu, Plus, ArrowRight, Sparkles, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export function DashboardContent({ userName, projects }: { userName: string | null; projects: any[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (projectId: string) => {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    setDeletingId(projectId);

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

      toast.success("Project deleted!", {
        description: "The project has been removed.",
      });

      router.refresh();
    } catch (error) {
      toast.error("Failed to delete", {
        description: "Please try again.",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="flex-1 pt-28">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-copy-primary">
            Dashboard
          </h1>
          <p className="mt-3 text-lg text-copy-secondary">
            Welcome back{userName ? `, ${userName}` : ''}! Your projects are waiting.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-default bg-surface p-7">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <FolderTree className="size-5" />
              </div>
              <span className="text-2xl font-semibold text-brand">
                {projects.length}
              </span>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-copy-primary">Projects</h3>
            <p className="mt-2 text-sm text-copy-secondary">Your active projects</p>
          </div>

          <div className="rounded-3xl border border-default bg-surface p-7">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <FileText className="size-5" />
              </div>
              <span className="text-2xl font-semibold text-brand">0</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-copy-primary">Templates</h3>
            <p className="mt-2 text-sm text-copy-secondary">Your saved templates</p>
          </div>

          <div className="rounded-3xl border border-default bg-surface p-7">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Cpu className="size-5" />
              </div>
              <span className="text-2xl font-semibold text-brand">0</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-copy-primary">Skills</h3>
            <p className="mt-2 text-sm text-copy-secondary">Your premium skills</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-copy-primary">Quick Actions</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Link
              href="/dashboard/new-project"
              className="group rounded-3xl border border-brand/30 bg-brand-soft p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                  <Plus className="size-5" />
                </div>
                <ArrowRight className="size-5 text-brand transition-all group-hover:translate-x-1" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-copy-primary">New Project</h3>
              <p className="mt-2 text-sm text-copy-secondary">
                Start the wizard and generate your context files step by step
              </p>
            </Link>

            <Link
              href="/templates"
              className="group rounded-3xl border border-default bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Sparkles className="size-5" />
                </div>
                <ArrowRight className="size-5 text-copy-muted transition-all group-hover:translate-x-1 group-hover:text-brand" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-copy-primary">Browse Templates</h3>
              <p className="mt-2 text-sm text-copy-secondary">
                Use ready-made contexts for your project
              </p>
            </Link>
          </div>
        </div>

        {/* Projects List */}
        {projects.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-copy-primary">My Projects</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-3xl border border-default bg-surface p-7 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-copy-primary group-hover:text-brand">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/projects/${project.id}`}
                        className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-brand/30 hover:text-brand"
                      >
                        <ArrowRight className="size-3.5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        disabled={deletingId === project.id}
                        className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-red-300 hover:text-red-500 disabled:opacity-50"
                      >
                        {deletingId === project.id ? (
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-red-300 border-t-red-500" />
                        ) : (
                          <Trash2 className="size-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-dashed border-default bg-subtle p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <FolderTree className="size-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-copy-primary">
              No projects yet
            </h3>
            <p className="mt-3 text-sm leading-6 text-copy-secondary">
              Start your first project with the wizard and generate your
              context files step by step.
            </p>
            <Link
              href="/dashboard/new-project"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              <Plus className="size-4" />
              Create Your First Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}