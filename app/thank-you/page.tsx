import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — Naz talks AI",
  description: "You're almost in! Check your inbox to confirm your subscription.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-bg min-h-[70vh] flex items-center justify-center py-24">
      <div className="max-w-screen-md mx-auto px-6 text-center">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          You&apos;re in
        </span>
        <h1 className="font-display italic text-ink text-4xl sm:text-5xl mt-4 mb-6">
          Check your inbox.
        </h1>
        <p className="font-sans text-body text-lg mb-10 max-w-lg mx-auto">
          We just sent you a confirmation email. Click the link inside to
          confirm your subscription.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-ink transition-colors"
        >
          <span>&#8592;</span>
          <span>Back to homepage</span>
        </Link>
      </div>
    </section>
  );
}
