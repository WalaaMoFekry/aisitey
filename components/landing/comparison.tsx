"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

const comparisons = [
  {
    feature: "Project scope",
    withContext: "Defined and fixed",
    withoutContext: "AI invents features",
  },
  {
    feature: "Architecture",
    withContext: "Clear boundaries",
    withoutContext: "AI guesses structure",
  },
  {
    feature: "Decisions",
    withContext: "Recorded permanently",
    withoutContext: "Lost between sessions",
  },
  {
    feature: "Consistency",
    withContext: "Same rules every time",
    withoutContext: "Changes every session",
  },
  {
    feature: "Speed",
    withContext: "No re-explaining",
    withoutContext: "Start from scratch",
  },
  {
    feature: "Control",
    withContext: "You make decisions",
    withoutContext: "AI takes over",
  },
];

export function Comparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-wide text-brand">
            WHY AISITEY
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
            Context vs. Chaos.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            See the difference between building with aisitey and working
            without structured context.
          </p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-3xl border border-default bg-surface"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-default bg-subtle">
            <div className="px-6 py-5">
              <p className="text-sm font-medium text-copy-muted">Feature</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm font-semibold text-brand">With aisitey</p>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm font-medium text-copy-muted">Without context</p>
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`relative grid grid-cols-3 items-center cursor-pointer transition-all duration-300 ${
                hoveredRow === index
                  ? "bg-brand-soft scale-[1.02] shadow-lg z-10"
                  : index % 2 === 0
                  ? "bg-surface"
                  : "bg-subtle/50"
              } border-b border-default last:border-b-0`}
            >
              {/* Feature */}
              <div className="px-6 py-4">
                <motion.p
                  animate={{
                    scale: hoveredRow === index ? 1.05 : 1,
                    fontWeight: hoveredRow === index ? 600 : 500,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`text-sm ${
                    hoveredRow === index
                      ? "text-brand"
                      : "text-copy-primary"
                  }`}
                >
                  {item.feature}
                </motion.p>
              </div>

              {/* With aisitey */}
              <div className="px-6 py-4">
                <motion.div
                  animate={{
                    x: hoveredRow === index ? 8 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{
                      scale: hoveredRow === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="size-4 shrink-0 text-green-500" />
                  </motion.span>
                  <p
                    className={`text-sm ${
                      hoveredRow === index
                        ? "text-copy-primary font-medium"
                        : "text-copy-secondary"
                    }`}
                  >
                    {item.withContext}
                  </p>
                </motion.div>
              </div>

              {/* Without context */}
              <div className="px-6 py-4">
                <motion.div
                  animate={{
                    x: hoveredRow === index ? -8 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    animate={{
                      scale: hoveredRow === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="size-4 shrink-0 text-red-400" />
                  </motion.span>
                  <p
                    className={`text-sm ${
                      hoveredRow === index
                        ? "text-copy-muted"
                        : "text-copy-muted/70"
                    }`}
                  >
                    {item.withoutContext}
                  </p>
                </motion.div>
              </div>

              {/* Hover indicator */}
              {hoveredRow === index && (
                <motion.div
                  layoutId="hoverIndicator"
                  className="absolute left-0 top-0 h-full w-1 bg-brand"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-copy-muted"
        >
        </motion.p>
      </div>
    </section>
  );
}