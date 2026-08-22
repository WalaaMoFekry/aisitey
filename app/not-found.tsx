import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />
      
      <div className="flex flex-1 items-center justify-center px-6 pt-32">
        <div className="text-center">
          <h1 className="text-8xl font-semibold text-brand">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-copy-primary">
            Page not found
          </h2>
          <p className="mt-3 text-copy-secondary">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}