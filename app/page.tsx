import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Memory } from "@/components/landing/memory";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      <div className="flex-1">
        <section id="hero">
          <Hero />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="memory">
          <Memory />
        </section>

        <section id="client-flow">{/* <ClientFlow /> */}</section>

        <section id="start">
          <CTA />
        </section>
      </div>
      <Footer />
    </main>
  );
}
