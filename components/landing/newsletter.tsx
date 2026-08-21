"use client";

import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-brand/20 bg-brand-soft px-6 py-16 text-center md:px-12"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-32 w-32 rounded-full bg-highlight/10 blur-3xl" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
              <Mail className="size-8" />
            </div>

            {/* Title */}
            <h2 className="mt-8 text-4xl font-semibold tracking-tight text-copy-primary md:text-5xl">
              Stay in the loop.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-copy-secondary md:text-lg">
              Get updates on new templates, skills, and tips for building with
              context. No spam, unsubscribe anytime.
            </p>

            {/* Form */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-green-500/30 bg-green-50 px-6 py-4"
              >
                <CheckCircle2 className="size-5 text-green-600" />
                <p className="text-sm font-medium text-green-700">
                  You're on the list! Check your inbox. 🎉
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-default bg-surface px-5 py-3.5 text-sm text-copy-primary placeholder:text-copy-muted outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-copy-muted">
              <span>✓ Free forever</span>
              <span>✓ No spam</span>
              <span>✓ Unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}