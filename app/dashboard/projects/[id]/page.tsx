"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, FileText, Download, Copy, Edit2, Save, X, Plus } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ProjectPage() {
  const { id } = useParams();
  const [editingFile, setEditingFile] = useState<string | null>(null);
  
  // نبدأ بملف واحد بس - project-overview.md
  const [files, setFiles] = useState<Array<{ name: string; content: string }>>([
    {
      name: "project-overview.md",
      content: "# Project Overview\n\n## Overview\nWrite your project overview here...",
    },
  ]);

  // نجيب بيانات المشروع من Supabase
  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
      
      if (data.project?.name) {
        setFiles([
          {
            name: "project-overview.md",
            content: `# ${data.project.name}\n\n## Overview\n${data.project.description || ''}\n\n## Goals\n1. ...\n\n## Features\n- ...`,
          },
        ]);
      }
    };

    fetchProject();
  }, [id]);

  const handleEdit = (fileName: string) => {
    setEditingFile(fileName);
  };

  const handleSave = (fileName: string) => {
    setEditingFile(null);
    toast.success("File saved!", {
      description: `${fileName} has been updated.`,
    });
  };

  const handleCopy = async (fileName: string) => {
    const file = files.find((f) => f.name === fileName);
    if (file) {
      await navigator.clipboard.writeText(file.content);
      toast.success("Copied!", {
        description: `${fileName} content copied.`,
      });
    }
  };

  const handleDownload = (fileName: string) => {
    const file = files.find((f) => f.name === fileName);
    if (file) {
      const blob = new Blob([file.content], { type: "text/markdown" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-4xl px-6 pb-32">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-copy-muted hover:text-brand transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Dashboard
          </Link>

          <div className="mt-8">
            <h1 className="text-4xl font-semibold text-copy-primary">
              Context Files
            </h1>
            <p className="mt-3 text-lg text-copy-secondary">
              {files.length} file{files.length !== 1 ? "s" : ""} generated so far.
            </p>
          </div>

          {/* Files List - بيعرض الملفات الموجودة بس */}
          <div className="mt-12 space-y-4">
            {files.map((file) => (
              <div
                key={file.name}
                className="rounded-2xl border border-default bg-surface overflow-hidden"
              >
                {/* File Header */}
                <div className="flex items-center justify-between border-b border-default px-5 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="size-4 text-copy-muted" />
                    <span className="text-sm font-mono font-medium text-copy-primary">
                      {file.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {editingFile === file.name ? (
                      <>
                        <button
                          onClick={() => handleSave(file.name)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-dark"
                        >
                          <Save className="size-3.5" />
                          Save
                        </button>
                        <button
                          onClick={() => setEditingFile(null)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-default px-3 py-1.5 text-xs font-medium text-copy-secondary hover:text-brand"
                        >
                          <X className="size-3.5" />
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(file.name)}
                          className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-brand/30 hover:text-brand"
                        >
                          <Edit2 className="size-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopy(file.name)}
                          className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-brand/30 hover:text-brand"
                        >
                          <Copy className="size-3.5" />
                        </button>
                        <button
                          onClick={() => handleDownload(file.name)}
                          className="flex size-8 items-center justify-center rounded-lg border border-default text-copy-muted hover:border-brand/30 hover:text-brand"
                        >
                          <Download className="size-3.5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* File Content */}
                {editingFile === file.name ? (
                  <textarea
                    value={file.content}
                    onChange={(e) => {
                      const newFiles = files.map((f) =>
                        f.name === file.name ? { ...f, content: e.target.value } : f
                      );
                      setFiles(newFiles);
                    }}
                    rows={15}
                    className="w-full resize-y bg-subtle px-5 py-4 font-mono text-sm text-copy-primary outline-none focus:ring-2 focus:ring-brand/20"
                  />
                ) : (
                  <div className="max-h-40 overflow-y-auto bg-subtle px-5 py-4">
                    <pre className="text-xs text-copy-secondary whitespace-pre-wrap">
                      {file.content}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Next file hint */}
          <div className="mt-8 rounded-2xl border border-dashed border-default bg-subtle p-6 text-center">
            <p className="text-sm text-copy-muted">
              Next file to generate: <span className="font-mono text-brand">architecture.md</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}