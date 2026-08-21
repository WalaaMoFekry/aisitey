"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For developers starting with context-driven development",
    icon: <Zap className="size-5" />,
    features: [
      "All context templates",
      "Basic skills",
      "7 context files",
      "CLI tool access",
      "Community support",
      "Public GitHub repository",
    ],
    cta: "Start Free",
    href: "/sign-up",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For developers who want premium skills and features",
    icon: <Sparkles className="size-5" />,
    features: [
      "Everything in Free",
      "Premium skills library",
      "Custom skills builder",
      "Advanced templates",
      "Priority support",
      "Project sync",
      "Unlimited projects",
      "Team collaboration",
    ],
    cta: "Get Pro",
    href: "/sign-up?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations with specific needs",
    icon: <Building2 className="size-5" />,
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Onboarding assistance",
      "Custom skills development",
      "Security review",
      "Team training",
    ],
    cta: "Contact Us",
    href: "mailto:hello@aisitey.com",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I use aisitey for free?",
    answer:
      "Yes! The core system and context templates are free forever. You can start building with context right away using the CLI tool.",
  },
  {
    question: "What's included in Pro?",
    answer:
      "Pro includes premium skills, custom skills builder, advanced templates, project sync, and priority support.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No! You can start with the free plan without providing any payment information.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your Pro subscription at any time. You'll keep access until the end of your billing period.",
  },
];

export default function PricingPage() {
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
              PRICING
            </span>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-copy-primary md:text-6xl">
              Simple, transparent pricing.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-copy-secondary">
              Start free and upgrade when you need more power. No hidden fees.
            </p>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl border p-8 ${
                  plan.highlighted
                    ? "border-brand/30 bg-brand-soft shadow-xl shadow-brand/10"
                    : "border-default bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1.5 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}

                {/* Plan Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    plan.highlighted
                      ? "bg-brand text-white"
                      : "bg-brand-soft text-brand"
                  }`}
                >
                  {plan.icon}
                </div>

                {/* Plan Name */}
                <h2 className="mt-6 text-2xl font-semibold text-copy-primary">
                  {plan.name}
                </h2>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-semibold text-copy-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-copy-muted">{plan.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-copy-secondary">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-copy-secondary"
                    >
                      <Check className="size-4 shrink-0 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-medium transition-all ${
                    plan.highlighted
                      ? "bg-brand text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/25"
                      : "border border-default bg-surface text-copy-primary hover:border-brand/30 hover:text-brand"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-semibold tracking-tight text-copy-primary">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-lg text-copy-secondary">
              Everything you need to know about pricing.
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-default bg-surface p-6"
              >
                <h3 className="text-base font-medium text-copy-primary">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-copy-secondary">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}