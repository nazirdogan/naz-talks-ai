import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Playbook Is On Its Way — Naz talks AI",
  description: "Check your inbox for The AI Business Playbook.",
  robots: { index: false },
};

export default function PlaybookThankYouPage() {
  return (
    <section className="bg-bg min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-lg text-left">
        {/* Icon */}
        <div
          className="w-12 h-12 flex items-center justify-center mb-8"
          style={{ backgroundColor: "#4F46E5" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          You&apos;re in
        </span>

        <h1 className="font-display italic text-ink text-4xl sm:text-5xl leading-tight mt-3 mb-5">
          Your playbook is on its way.
        </h1>

        <p className="font-sans text-body text-lg mb-3">
          Check your inbox — we just emailed you <strong>The AI Business Playbook</strong> with a direct download link.
        </p>
        <p className="font-sans text-subtle text-base mb-10">
          Can&apos;t find it? Check your spam folder and mark us as safe so future editions land in your inbox.
        </p>

        {/* Divider */}
        <div className="border-t border-rule mb-8" />

        {/* Upsell to newsletter */}
        <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-3">
          {"//"} while you wait
        </p>
        <p className="font-sans text-body mb-6">
          You&apos;ve also been added to <strong>Naz talks AI Weekly</strong> — practical AI workflows and real strategies every Thursday morning.
        </p>

        <Link
          href="/"
          className="font-mono text-xs text-accent hover:underline tracking-wide"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
