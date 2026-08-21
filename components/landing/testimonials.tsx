"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "aisitey changed how I work with AI. I write my context once, and any agent can build exactly what I need. No more re-explaining from scratch.",
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "The seven context files are genius. My AI agents stopped inventing features and started following my architecture. Game changer.",
    name: "Mohammed Ali",
    role: "Tech Lead",
    avatar: "MA",
    rating: 5,
  },
  {
    quote:
      "I switched from Cursor to Codex mid-project, and the AI picked up right where the other left off. Context is everything.",
    name: "Alex Rivera",
    role: "Freelance Developer",
    avatar: "AR",
    rating: 5,
  },
  {
    quote:
      "Finally, a system that stops AI from going off track. The scope control alone saves me hours every week.",
    name: "Emma Thompson",
    role: "Product Engineer",
    avatar: "ET",
    rating: 5,
  },
];

export function Testimonials() {
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
            Loved by developers.
          </h2>

          <p className="mt-5 text-lg leading-8 text-copy-secondary">
            See what developers say about building with context.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-6">
                <p className="text-base leading-7 text-copy-secondary">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
                  {testimonial.avatar}
                </div>

                <div>
                  <p className="text-sm font-medium text-copy-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-copy-muted">{testimonial.role}</p>
                </div>
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
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-copy-secondary">
              Rated 5/5 by early users
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}