import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy | aisitey",
  description: "How aisitey collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-3xl px-6 pb-32">
          <h1 className="text-4xl font-semibold tracking-tight text-copy-primary">
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm text-copy-muted">
            Effective date: August 22, 2026
          </p>

          <div className="prose prose-neutral mt-10 max-w-none text-copy-secondary">
            <p>
              aisitey ("we," "us," or "our") operates aisitey.com (the
              "Site"). This Privacy Policy explains what information we
              currently collect, how we use it, how it is stored, and the
              choices available to you.
            </p>

            <h2 className="text-copy-primary">Information We Collect</h2>

            <p>
              The Site currently collects only the information you voluntarily
              provide through the newsletter subscription form: your{" "}
              <strong>email address</strong>.
            </p>

            <p>
              You do not need to create an account to browse the Site. We do
              not currently collect your name, payment information, or other
              personal information through the Site itself.
            </p>

            <h2 className="text-copy-primary">
              How We Use Your Information
            </h2>

            <p>
              When you submit your email address through the newsletter form, we
              use it to maintain a list of people who have chosen to receive
              future aisitey updates.
            </p>

            <p>
              We may use the email address to contact subscribers with updates
              about aisitey, including new templates, features, resources, and
              related information.
            </p>

            <p>
              We do not sell, rent, or trade your email address to third
              parties.
            </p>

            <h2 className="text-copy-primary">Data Storage</h2>

            <p>
              Email addresses submitted through the newsletter form are stored
              using Supabase, a third-party database service.
            </p>

            <p>
              The newsletter form communicates with our server-side API, which
              stores the submitted email address in our Supabase database. The
              public website does not provide a way for visitors to browse,
              search, or retrieve the subscriber list.
            </p>

            <p>
              Access to the database is restricted to the systems and
              authorized access necessary to operate the Site.
            </p>

            <h2 className="text-copy-primary">Third-Party Services</h2>

            <p>
              The Site may link to or use third-party services, including:
            </p>

            <ul>
              <li>
                <strong>GitHub</strong> — where aisitey open-source code may be
                hosted.
              </li>
              <li>
                <strong>npm</strong> — where aisitey packages may be published.
              </li>
              <li>
                <strong>Supabase</strong> — used to store newsletter
                subscriber email addresses.
              </li>
            </ul>

            <p>
              If you interact directly with these third-party services, their
              own privacy policies and terms may apply.
            </p>

            <h2 className="text-copy-primary">Cookies and Tracking</h2>

            <p>
              The Site does not currently use advertising cookies or
              third-party advertising tracking scripts.
            </p>

            <p>
              If our use of cookies, analytics, advertising, or other tracking
              technologies changes, we will update this Privacy Policy
              accordingly.
            </p>

            <h2 className="text-copy-primary">Your Choices</h2>

            <ul>
              <li>
                <strong>Newsletter subscription:</strong> Providing your email
                address is voluntary. You can choose not to subscribe.
              </li>

              <li>
                <strong>Data deletion:</strong> You may request deletion of
                your email address from our newsletter subscriber records at
                any time by contacting us.
              </li>
            </ul>

            <h2 className="text-copy-primary">Children's Privacy</h2>

            <p>
              The Site is not directed at children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-copy-primary">Data Security</h2>

            <p>
              We take reasonable measures to protect the information we store
              and to limit access to authorized systems and personnel.
              However, no method of transmission or electronic storage is
              completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-copy-primary">Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time as the Site,
              its features, or its data practices change. Changes will be
              posted on this page with an updated effective date.
            </p>

            <h2 className="text-copy-primary">Contact Us</h2>

            <p>
              If you have questions about this Privacy Policy, want to request
              deletion of your email address, or have questions about how your
              information is handled, contact us at{" "}
              <a
                href="mailto:aisiteyclub@gmail.com"
                className="text-brand hover:text-brand-dark"
              >
                aisiteyclub@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}