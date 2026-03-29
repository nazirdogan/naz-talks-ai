import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";
import ValuePropCard from "@/components/ValuePropCard";

export const metadata: Metadata = {
  title: "Naz talks AI Weekly — AI Insights for Business Owners",
  description:
    "Practical AI workflows, honest tool reviews, and real strategies for business owners. Free weekly newsletter every Thursday.",
  openGraph: {
    title: "Naz talks AI Weekly — AI Insights for Business Owners",
    description:
      "Practical AI workflows, honest tool reviews, and real strategies for business owners. Free weekly newsletter every Thursday.",
    url: "https://naztalksai.com/",
    siteName: "Naz talks AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naz talks AI Weekly — AI Insights for Business Owners",
    description:
      "Practical AI workflows, honest tool reviews, and real strategies for business owners. Free weekly newsletter every Thursday.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-bg py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            Free Weekly Newsletter
          </span>
          <h1 className="font-display italic text-ink text-5xl sm:text-6xl leading-tight mt-4 mb-6">
            AI insights for business owners.{" "}
            <span className="block">Every week.</span>
          </h1>
          <p className="font-sans text-body text-lg mb-8">
            Practical workflows, honest tool reviews, and real strategies — not hype.
          </p>
          <hr className="border-rule my-8" />
          <EmailCapture
            buttonText="Get Weekly AI Insights"
            placeholder="Enter your email"
            variant="light"
          />
          <p className="font-mono text-xs text-subtle mt-4">
            Free · Every Thursday · Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Section 2: What You'll Get */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="font-mono text-xs text-subtle"><span>{"//"}</span> every week</span>
          <h2 className="font-display text-ink text-3xl sm:text-4xl mt-2 mb-12">
            What you&apos;ll get every Thursday
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <ValuePropCard
              number="01"
              title="AI Workflows"
              description="Step-by-step systems you can use today"
            />
            <ValuePropCard
              number="02"
              title="Tool Reviews"
              description="Honest takes on what's worth your time"
            />
            <ValuePropCard
              number="03"
              title="Real Strategies"
              description="Tactics that move the needle for your business"
            />
          </div>
          <hr className="border-rule mt-16" />
        </div>
      </section>
    </>
  );
}
