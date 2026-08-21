"use client";

import { motion } from "framer-motion";
import { FileText, Clock, ShieldCheck, Zap, FolderTree, Repeat } from "lucide-react";

const stats = [
  {
    icon: <FileText className="size-5" />,
    value: "7",
    label: "Context Files",
    description: "Complete project memory",
  },
  {
    icon: <Clock className="size-5" />,
    value: "0",
    label: "Wasted Sessions",
    description: "No re-explaining",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    value: "100%",
    label: "Control",
    description: "You make decisions",
  },
  {
    icon: <Zap className="size-5" />,
    value: "3x",
    label: "Faster",
    description: "Speed up development",
  },
  {
    icon: <FolderTree className="size-5" />,
    value: "Any",
    label: "Tech Stack",
    description: "Framework agnostic",
  },
  {
    icon: <Repeat className="size-5" />,
    value: "∞",
    label: "Agent Switching",
    description: "Any AI can continue",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-default bg-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-copy-primary md:text-4xl">
            Built for developers who want control.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-copy-secondary">
            aisitey turns context into your competitive advantage.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-default bg-base p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="mt-6">
                  <span className="text-4xl font-semibold tracking-tight text-copy-primary">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <h3 className="mt-2 text-base font-medium text-copy-primary">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-copy-secondary">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-brand/20 bg-brand-soft px-6 py-6 text-center"
        >
          <p className="text-base font-medium text-brand">
            Write once. Build forever. Any AI agent can continue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}