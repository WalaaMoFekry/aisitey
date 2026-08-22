"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FileText, Download, Copy, Check, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const templates = [
  {
    id: "project-overview",
    name: "project-overview.md",
    role: "What you're building",
    description:
      "Defines your project's goals, core user flow, features, and scope. The source of truth for what's in and out.",
    color: "bg-blue-50 text-blue-600",
    preview: `# Project Overview\n\n## Overview\nWrite your project overview here...\n\n## Goals\n1. Goal one\n2. Goal two\n\n## Scope\n### In Scope\n- What you are building\n\n### Out of Scope\n- What you are not building`,
  },
  {
    id: "architecture",
    name: "architecture.md",
    role: "How it's built",
    description:
      "Specifies your tech stack, system boundaries, data model, and domain entities. No guessing allowed.",
    color: "bg-purple-50 text-purple-600",
    preview: `# Architecture\n\n## Stack\n| Layer | Technology |\n|-------|------------|\n| Framework | Next.js |\n| Database | PostgreSQL |\n\n## Core Entities\n- User\n- Project\n- Task`,
  },
  {
    id: "ui-context",
    name: "ui-context.md",
    role: "How it looks",
    description:
      "Defines your design tokens, typography, layout patterns, and component rules.",
    color: "bg-pink-50 text-pink-600",
    preview: `# UI Context\n\n## Theme\nClean, calm, structured\n\n## Colors\n| Role | Hex |\n|------|-----|\n| Background | #F7F6F3 |\n| Brand | #3D3B6E |`,
  },
  {
    id: "code-standards",
    name: "code-standards.md",
    role: "How code is written",
    description:
      "Sets coding conventions, validation rules, error handling, and file organization.",
    color: "bg-green-50 text-green-600",
    preview: `# Code Standards\n\n## General\n- Keep modules small\n- Prefer readable code\n\n## Validation\n- Treat all input as untrusted`,
  },
  {
    id: "ai-workflow-rules",
    name: "ai-workflow-rules.md",
    role: "How AI works",
    description:
      "Controls how AI agents work with your project. Protected decisions, scoping rules, and implementation order.",
    color: "bg-orange-50 text-orange-600",
    preview: `# AI Workflow Rules\n\n## Scoping\n- One feature at a time\n- No speculative code\n\n## Protected\n- Product scope\n- Auth strategy`,
  },
  {
    id: "memory",
    name: "memory.md",
    role: "What was decided",
    description:
      "Records important decisions, domain rules, and implementation knowledge that persists across sessions.",
    color: "bg-yellow-50 text-yellow-600",
    preview: `# Project Memory\n\n## Technology Decisions\n### Next.js\nChosen because: Server components\n\n## Known Constraints\n- No payment processing`,
  },
  {
    id: "progress-tracker",
    name: "progress-tracker.md",
    role: "Where you are",
    description:
      "Tracks current phase, completed work, next steps, and open questions. Your project's GPS.",
    color: "bg-red-50 text-red-600",
    preview: `# Progress Tracker\n\n## Current Phase\n- Building auth\n\n## Completed\n- Project setup\n\n## Next Up\n- Dashboard`,
  },
];

export default function TemplatesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopy = async (id: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        {/* Header */}
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-medium tracking-wide text-brand">
              TEMPLATES
            </span>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-copy-primary md:text-6xl">
              Seven files. Complete context.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-copy-secondary">
              Download the seven context files that give AI agents complete
              project knowledge. Free and open source.
            </p>
          </motion.div>
        </div>

        {/* Templates Grid */}
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-default bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                {/* File Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${template.color}`}
                  >
                    <FileText className="size-5" />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === template.id ? null : template.id)
                      }
                      className="flex size-9 items-center justify-center rounded-xl border border-default text-copy-muted transition-colors hover:border-brand/30 hover:text-brand"
                      aria-label="Preview"
                    >
                      <Eye className="size-4" />
                    </button>

                    <button
                      onClick={() => handleCopy(template.id, template.preview)}
                      className="flex size-9 items-center justify-center rounded-xl border border-default text-copy-muted transition-colors hover:border-brand/30 hover:text-brand"
                      aria-label="Copy"
                    >
                      {copiedId === template.id ? (
                        <Check className="size-4 text-green-500" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-6 font-mono text-sm font-semibold text-copy-primary">
                  {template.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm font-medium text-brand">
                  {template.role}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-copy-secondary">
                  {template.description}
                </p>

                {/* Preview */}
                {expandedId === template.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden rounded-2xl bg-subtle p-4"
                  >
                    <pre className="text-xs text-copy-secondary whitespace-pre-wrap">
                      {template.preview}
                    </pre>
                  </motion.div>
                )}

                {/* Download */}
                <Link
                  href={`/api/download/${template.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  <Download className="size-4" />
                  Download Template
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-4xl px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-brand/20 bg-brand-soft p-10 text-center"
          >
            <h2 className="text-2xl font-semibold text-copy-primary md:text-3xl">
              Get all seven files at once.
            </h2>
            <p className="mt-3 text-copy-secondary">
              Use the CLI to generate all context files in one command.
            </p>
            <div className="mt-6 inline-block rounded-xl bg-surface border border-default p-4">
              <code className="text-sm text-brand">npm install -g aisitey && aisitey init</code>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}