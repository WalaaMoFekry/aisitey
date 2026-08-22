import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export const metadata = {
  title: "About | aisitey",
  description: "Learn about the creator of aisitey.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      
      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-4xl px-6 pb-32">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-copy-primary">
              About aisitey
            </h1>
            <p className="mt-4 text-lg text-copy-secondary">
              Built by one developer who wanted to work better with AI.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Avatar */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl bg-brand-soft text-4xl font-semibold text-brand">
              WM
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-copy-primary">
                Walaa MoFekry
              </h2>
              <p className="mt-1 text-sm text-copy-muted">
                Founder & Developer
              </p>

              <p className="mt-4 text-copy-secondary leading-7">
                I built aisitey because I was tired of AI agents going off track.
                I needed a system that would keep my projects organized, my
                decisions recorded, and my AI agents focused on what matters.
              </p>

              <p className="mt-4 text-copy-secondary leading-7">
                aisitey is the result: seven context files that give any AI agent
                complete project knowledge. So you can build faster, with more
                control, and without losing track of your work.
              </p>

              <div className="mt-6 flex justify-center gap-3 md:justify-start">
                <a
                  href="https://github.com/WalaaMoFekry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-default text-copy-secondary hover:border-brand/30 hover:text-brand"
                >
                  <FaGithub className="size-5" />
                </a>
                <a
                  href="https://x.com/walaamoaly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-default text-copy-secondary hover:border-brand/30 hover:text-brand"
                >
                  <BsTwitterX className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/walaa-mohammed-88b51a319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-default text-copy-secondary hover:border-brand/30 hover:text-brand"
                >
                  <FaLinkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16 rounded-3xl border border-default bg-surface p-8 text-center">
            <h3 className="text-2xl font-semibold text-copy-primary">
              Our Mission
            </h3>
            <p className="mt-4 text-copy-secondary leading-7">
              Make AI-powered development more reliable, more controlled, and
              more accessible to every developer.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}