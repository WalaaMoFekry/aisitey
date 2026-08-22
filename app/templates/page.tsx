"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  FileText,
  Download,
  Copy,
  Check,
  Eye,
  ArrowRight,
  MoreVertical,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { BsOpenai, BsClaude } from "react-icons/bs";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const templates = [
  {
    id: "project-overview",
    name: "project-overview.md",
    role: "What you're building",
    description:
      "Defines your project's goals, core user flow, features, and scope.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "architecture",
    name: "architecture.md",
    role: "How it's built",
    description:
      "Specifies your tech stack, system boundaries, data model, and domain entities.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "ui-context",
    name: "ui-context.md",
    role: "How it looks",
    description:
      "Defines design tokens, typography, layout patterns, and component rules.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "code-standards",
    name: "code-standards.md",
    role: "How code is written",
    description:
      "Sets coding conventions, validation rules, error handling, and file organization.",
    color: "bg-green-50 text-green-600",
  },
  {
    id: "ai-workflow-rules",
    name: "ai-workflow-rules.md",
    role: "How AI works",
    description: "Controls how AI agents work with your project.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "memory",
    name: "memory.md",
    role: "What was decided",
    description: "Records important decisions and implementation knowledge.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: "progress-tracker",
    name: "progress-tracker.md",
    role: "Where you are",
    description: "Tracks current phase, completed work, and next steps.",
    color: "bg-red-50 text-red-600",
  },
];

export default function TemplatesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [previewContent, setPreviewContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // One ref PER template, keyed by id — fixes the bug where a single
  // shared ref only ever pointed at the last card in the list, causing
  // the "click outside" handler to close every other card's dropdown
  // before its buttons could register a click.
  const menuRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuOpenId) return;
      const currentMenuEl = menuRefs.current.get(menuOpenId);
      if (currentMenuEl && !currentMenuEl.contains(event.target as Node)) {
        setMenuOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpenId]);

  const handlePreview = async (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }

    try {
      const response = await fetch(`/api/templates/${id}`);
      const data = await response.json();
      setPreviewContent(data.content);
      setExpandedId(id);
    } catch (error) {
      console.error("Failed to load preview:", error);
    }
  };

  const handleCopy = async (id: string) => {
    try {
      const response = await fetch(`/api/templates/${id}`);
      const data = await response.json();

      await navigator.clipboard.writeText(data.content);

      setCopiedId(id);
      setMenuOpenId(null);
      setTimeout(() => setCopiedId(null), 2000);
      toast.success("Copied to clipboard!", {
        description: "Template content has been copied.",
      });
    } catch (error) {
      console.error("Copy error:", error);
    }
  };

  const openInChatGPT = async (id: string, name: string) => {
    // ChatGPT has no URL parameter for pre-filling a prompt (unlike Claude),
    // so we have to copy the prompt to the clipboard instead. The Clipboard
    // API requires the document to still be focused — opening a new window
    // first would shift focus away and make writeText() throw. So here we
    // do the copy FIRST, then open the window. This means window.open runs
    // slightly later than the click itself, so as a safety net we detect
    // whether the popup got blocked and let the user know the prompt was
    // still copied successfully.
    setMenuOpenId(null);

    try {
      const response = await fetch(`/api/templates/${id}`);
      const data = await response.json();

      const prompt = `Help me fill out this aisitey template (${name}):\n\n${data.content}`;

      await navigator.clipboard.writeText(prompt);

      const newWindow = window.open("https://chatgpt.com", "_blank");

      if (newWindow) {
        alert("Prompt copied! Paste it (Ctrl+V) into the ChatGPT chat box.");
      } else {
        alert(
          "Prompt copied! Your browser blocked the popup — please open chatgpt.com and paste it in.",
        );
      }
    } catch (error) {
      console.error("Failed to open in ChatGPT:", error);
    }
  };

  const openInClaude = async (id: string, name: string) => {
    const newWindow = window.open("about:blank", "_blank");
    setMenuOpenId(null);

    try {
      const response = await fetch(`/api/templates/${id}`);
      const data = await response.json();

      const prompt = `I'm looking at this aisitey template: ${name}.\n\n${data.content}\n\nHelp me fill this out for my project.`;

      if (newWindow) {
        newWindow.location.href = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
      }
    } catch (error) {
      console.error("Failed to open in Claude:", error);
      newWindow?.close();
    }
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
                    {/* Preview button */}
                    <button
                      onClick={() => handlePreview(template.id)}
                      className="flex size-9 items-center justify-center rounded-xl border border-default text-copy-muted transition-colors hover:border-brand/30 hover:text-brand"
                      aria-label="Preview"
                    >
                      <Eye className="size-4" />
                    </button>

                    {/* Dropdown Menu — each item gets its own ref via the
                        callback below, stored in the menuRefs Map keyed
                        by this template's id */}
                    <div
                      className="relative"
                      ref={(el) => {
                        menuRefs.current.set(template.id, el);
                      }}
                    >
                      <button
                        onClick={() =>
                          setMenuOpenId(
                            menuOpenId === template.id ? null : template.id,
                          )
                        }
                        className="flex size-9 items-center justify-center rounded-xl border border-default text-copy-muted transition-colors hover:border-brand/30 hover:text-brand"
                        aria-label="More options"
                      >
                        {menuOpenId === template.id ? (
                          <X className="size-4" />
                        ) : (
                          <MoreVertical className="size-4" />
                        )}
                      </button>

                      {/* Dropdown */}
                      {menuOpenId === template.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-default bg-surface p-2 shadow-xl"
                        >
                          {/* Copy */}
                          <button
                            onClick={() => handleCopy(template.id)}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-copy-secondary transition-colors hover:bg-subtle hover:text-brand"
                          >
                            {copiedId === template.id ? (
                              <Check className="size-4 text-green-500" />
                            ) : (
                              <Copy className="size-4" />
                            )}
                            {copiedId === template.id ? "Copied!" : "Copy"}
                          </button>

                          {/* Open in ChatGPT */}
                          <button
                            onClick={() =>
                              openInChatGPT(template.id, template.name)
                            }
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-copy-secondary transition-colors hover:bg-subtle hover:text-brand"
                          >
                            <BsOpenai className="size-4" />
                            Open in ChatGPT
                          </button>

                          {/* Open in Claude */}
                          <button
                            onClick={() =>
                              openInClaude(template.id, template.name)
                            }
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-copy-secondary transition-colors hover:bg-subtle hover:text-brand"
                          >
                            <BsClaude className="size-4 text-orange-500" />
                            Open in Claude
                          </button>
                        </motion.div>
                      )}
                    </div>
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
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden rounded-2xl bg-subtle p-4"
                  >
                    {isLoading ? (
                      <div className="space-y-3">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-5/6" />
                        <Skeleton className="h-3 w-4/6" />
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-2/3" />
                      </div>
                    ) : (
                      <pre className="max-h-64 overflow-y-auto text-xs text-copy-secondary whitespace-pre-wrap">
                        {previewContent}
                      </pre>
                    )}
                  </motion.div>
                )}

                {/* Download */}
                <Link
                  href={`/api/templates/${template.id}/download`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  <Download className="size-4" />
                  Download
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
              <code className="text-sm text-brand">
                npm install -g aisitey && aisitey init
              </code>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
