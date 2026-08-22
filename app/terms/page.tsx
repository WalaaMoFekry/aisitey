import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Terms of Service | aisitey",
  description: "Terms and conditions for using aisitey.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-base">
      <Navbar />

      <div className="flex-1 pt-32">
        <div className="mx-auto max-w-3xl px-6 pb-32">
          <h1 className="text-4xl font-semibold text-copy-primary">
            Terms of Service
          </h1>

          <p className="mt-2 text-sm text-copy-muted">
            Last updated: August 22, 2026
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                By accessing or using aisitey, you agree to these Terms of
                Service. If you do not agree with these terms, please do not use
                the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                2. About aisitey
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                aisitey is a context-driven development project that provides
                resources, templates, and guidance for building software with
                AI-assisted development workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                3. Use of the Site
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                You may use the Site and its publicly available resources for
                lawful purposes. You are responsible for how you use any
                information, templates, code, or other resources provided by
                aisitey.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                4. Open Source License
              </h2>

              <p className="mt-3 leading-7 text-copy-secondary">
                The aisitey open-source software is released under the MIT
                License. You may use, copy, modify, merge, publish, distribute,
                sublicense, and sell copies of the software, subject to the
                terms of the MIT License.
              </p>

              <p className="mt-3 leading-7 text-copy-secondary">
                The applicable copyright notice and license notice must be
                included in copies or substantial portions of the software, as
                required by the MIT License.
              </p>

              <p className="mt-3 leading-7 text-copy-secondary">
                The MIT License applies to the open-source software and does not
                automatically grant rights to aisitey's name, branding, website
                content, or other materials that are not part of the licensed
                software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                5. Intellectual Property
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                Unless otherwise stated, the aisitey name, branding, website
                design, and original content are owned by aisitey or its
                respective rights holders. Open source components remain subject
                to their applicable licenses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                6. Third-Party Services and Links
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                The Site may link to or reference third-party services,
                including GitHub, npm, and Supabase. These services operate
                independently and are subject to their own terms and policies.
                aisitey is not responsible for third-party services or content
                outside its control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                7. No Warranty
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                The Site and its content are provided on an "as is" and "as
                available" basis. To the extent permitted by applicable law,
                aisitey makes no warranties, express or implied, regarding the
                availability, accuracy, reliability, or suitability of the Site
                or its content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                8. Limitation of Liability
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                To the maximum extent permitted by applicable law, aisitey will
                not be liable for indirect, incidental, special, consequential,
                or other damages arising from or related to your use of the Site
                or its content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                9. Changes to These Terms
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                We may update these Terms of Service from time to time. Any
                changes will be posted on this page with an updated revision
                date. Your continued use of the Site after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-copy-primary">
                10. Contact
              </h2>
              <p className="mt-3 leading-7 text-copy-secondary">
                If you have questions about these Terms of Service, contact us
                at{" "}
                <a
                  href="mailto:aisiteyclub@gmail.com"
                  className="text-brand hover:text-brand-dark"
                >
                  aisiteyclub@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
