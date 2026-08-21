"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is aisitey?",
    answer:
      "aisitey is a context-driven development system that helps you build products with AI agents. It provides seven structured files that define your project scope, architecture, standards, and workflow — so AI builds exactly what you need.",
  },
  {
    question: "How is aisitey different from just using AI?",
    answer:
      "Without context, AI agents often invent features, forget decisions, and expand scope. aisitey gives AI complete project context upfront, so it follows your rules and boundaries precisely. No guessing, no surprises.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Basic coding knowledge helps, but the system is designed for developers who work with AI agents. If you can describe what you want to build, aisitey helps AI understand and execute it correctly.",
  },
  {
    question: "Which AI agents work with aisitey?",
    answer:
      "Any AI coding agent works — Codex, Cursor, Claude, Gemini, and others. The context files are plain markdown, so any agent can read and follow them.",
  },
  {
    question: "Which tech stacks are supported?",
    answer:
      "All of them! aisitey is framework-agnostic. Whether you use Next.js, Vue, Laravel, Flutter, or anything else, the context files work the same way.",
  },
  {
    question: "Is aisitey free?",
    answer:
      "The core system and context templates are free and open source. Premium skills and advanced templates will be available as a paid offering in the future.",
  },
  {
    question: "How do I get started?",
    answer:
      "Install the CLI with 'npm install -g aisitey', then run 'aisitey init' to create your first project. The CLI will guide you through creating all seven context files.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-brand">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
            Frequently asked questions.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            Everything you need to know about building with context.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-default bg-surface transition-all duration-200 hover:border-brand/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-medium text-copy-primary">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`size-5 shrink-0 text-copy-muted transition-transform duration-200 ${
                    openIndex === index ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-7 text-copy-secondary">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center">
          <p className="text-base text-copy-muted">
            Still have questions?{" "}
            <a
              href="https://github.com/WalaaMoFekry/aisitey"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              Open an issue on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}