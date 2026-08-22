export const metadata = {
  title: "Privacy Policy — aisitey",
  description: "How aisitey collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-copy-primary">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-copy-muted">
        Effective date: August 21, 2026
      </p>

      <div className="prose prose-neutral mt-10 max-w-none text-copy-secondary">
        <p>
          aisitey (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates aisitey.com (the &quot;Site&quot;). This Privacy Policy
          explains what information we collect, how we use it, and the
          choices you have.
        </p>

        <h2 className="text-copy-primary">Information We Collect</h2>
        <p>
          The only personal information we currently collect is the{" "}
          <strong>email address</strong> you provide if you subscribe to our
          newsletter.
        </p>
        <p>
          We do not require an account to browse the Site, and we do not
          collect names, payment information, or any other personal details
          through the Site itself.
        </p>

        <h2 className="text-copy-primary">How We Use Your Information</h2>
        <p>Your email address is used solely to:</p>
        <ul>
          <li>
            Send you updates about new templates, features, and tips related
            to aisitey.
          </li>
          <li>Respond to you if you contact us directly.</li>
        </ul>
        <p>We do not sell, rent, or trade your email address to third parties.</p>

        <h2 className="text-copy-primary">Data Storage</h2>
        <p>
          Email addresses submitted through the newsletter form are stored
          securely using Supabase, a third-party database provider. Access to
          this data is restricted — the newsletter signup form can only add
          new entries; it cannot read or display existing subscriber data.
        </p>

        <h2 className="text-copy-primary">Third-Party Services</h2>
        <p>
          The Site links to and integrates with the following third-party
          services, each with its own privacy practices:
        </p>
        <ul>
          <li>
            <strong>GitHub</strong> — where our open-source code is hosted.
          </li>
          <li>
            <strong>npm</strong> — where our package is published.
          </li>
          <li>
            <strong>Supabase</strong> — where newsletter subscriber emails are
            stored.
          </li>
        </ul>
        <p>
          We encourage you to review the privacy policies of these services
          if you interact with them directly.
        </p>

        <h2 className="text-copy-primary">Cookies and Tracking</h2>
        <p>
          The Site does not currently use advertising cookies or third-party
          tracking scripts. If this changes in the future, this policy will
          be updated accordingly.
        </p>

        <h2 className="text-copy-primary">Your Choices</h2>
        <ul>
          <li>
            <strong>Unsubscribe:</strong> Every newsletter email includes an
            unsubscribe link. You can also contact us directly to request
            removal.
          </li>
          <li>
            <strong>Data deletion:</strong> You may request that we delete
            your email address from our records at any time by contacting
            us.
          </li>
        </ul>

        <h2 className="text-copy-primary">Children&apos;s Privacy</h2>
        <p>
          The Site is not directed at children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2 className="text-copy-primary">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will
          be posted on this page with an updated effective date.
        </p>

        <h2 className="text-copy-primary">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your data,
          contact us at{" "}
          <a href="mailto:walaafekry.ai@gmail.com" className="text-brand">
            walaafekry.ai@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}