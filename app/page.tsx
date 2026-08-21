import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Memory } from "@/components/landing/memory";
import { HumanAI } from "@/components/landing/human-ai";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import { Marquee } from "@/components/landing/marquee";

export const metadata: Metadata = {
  title: "Build with Context, Not Chaos",
  description: "aisitey helps you turn ideas into real products with AI that understands your project context, architecture, and decisions.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      <div className="flex-1">
        <section id="hero">
          <Hero />
        </section>

        {/* الشريط المتحرك */}
        <Marquee />


        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="memory">
          <Memory />
        </section>

        <section id="human-ai">
          <HumanAI />
        </section>

        <section id="start">
          <CTA />
        </section>
      </div>
      <Footer />
    </main>
  );
}
