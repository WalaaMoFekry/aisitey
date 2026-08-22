"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, Plus, FolderTree, Code2, FileText } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const techStacks = [
  "Next.js + TypeScript",
  "Vue 3 + TypeScript",
  "React + TypeScript",
  "Laravel",
  "Flutter",
  "Node.js + Express",
  "Python + Django",
  "Custom",
];

export default function NewProjectPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tech_stack: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create project");
      }

      toast.success("Project created!", {
        description: "Your project has been created successfully.",
      });

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      toast.error("Failed to create project", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-2xl px-6 pb-32">
          {/* Back button */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-copy-muted hover:text-brand transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Dashboard
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h1 className="text-4xl font-semibold text-copy-primary">
              Create New Project
            </h1>
            <p className="mt-3 text-lg text-copy-secondary">
              Start building with context from scratch.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            {/* Project Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-copy-primary">
                <FolderTree className="size-4 text-brand" />
                Project Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. My SaaS Platform"
                required
                className="w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm text-copy-primary placeholder:text-copy-muted outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-copy-primary">
                <FileText className="size-4 text-brand" />
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="What does this project do?"
                rows={4}
                className="w-full resize-none rounded-xl border border-default bg-surface px-5 py-3.5 text-sm text-copy-primary placeholder:text-copy-muted outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            {/* Tech Stack */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-copy-primary">
                <Code2 className="size-4 text-brand" />
                Tech Stack
              </label>
              <select
                value={formData.tech_stack}
                onChange={(e) => setFormData({ ...formData, tech_stack: e.target.value })}
                required
                className="w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm text-copy-primary outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option value="">Select tech stack</option>
                {techStacks.map((stack) => (
                  <option key={stack} value={stack}>
                    {stack}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Creating...
                </>
              ) : (
                <>
                  <Plus className="size-4" />
                  Create Project
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <Footer />
    </main>
  );
}