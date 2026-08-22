"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reasons = [
  {
    quote:
      "Every new AI session means re-explaining your project from scratch — the stack, the rules, the decisions you already made.",
    title: "No more re-explaining",
  },
  {
    quote:
      "Left unscoped, AI agents invent features you never asked for and quietly expand your project beyond what you planned.",
    title: "No more scope creep",
  },
  {
    quote:
      "Switch from Cursor to Codex to Claude mid-project, and most tools lose all context. Your project's memory shouldn't be tied to one agent.",
    title: "No more agent lock-in",
  },
  {
    quote:
      "Architectural decisions made in session three get silently ignored by session ten, because nothing wrote them down.",
    title: "No more lost decisions",
  },
];

export function WhyAisitey() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
            Built for real problems.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            The everyday friction of building with AI agents — and how
            structured context removes it.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-default bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                <Quote className="size-4" />
              </div>

              {/* Problem statement */}
              <blockquote className="mt-6">
                <p className="text-base leading-7 text-copy-secondary">
                  {reason.quote}
                </p>
              </blockquote>

              {/* Title */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-copy-primary">
                  {reason.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-default bg-surface px-6 py-3">
            <span className="text-sm text-copy-secondary">
              Open source and free — see it for yourself on GitHub.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
