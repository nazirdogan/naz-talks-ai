import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";
import PlaybookMockup from "@/components/PlaybookMockup";

export const metadata: Metadata = {
  title: "The AI Business Playbook — Free Download | Naz talks AI",
  description:
    "Get the exact AI frameworks, prompts, and workflows used to run a business with AI. Free instant download.",
  openGraph: {
    title: "The AI Business Playbook — Free Download | Naz talks AI",
    description:
      "Get the exact AI frameworks, prompts, and workflows used to run a business with AI. Free instant download.",
    url: "https://naztalksai.com/playbook",
    siteName: "Naz talks AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Business Playbook — Free Download | Naz talks AI",
    description:
      "Get the exact AI frameworks, prompts, and workflows used to run a business with AI. Free instant download.",
  },
};

const playbookBenefits = [
  {
    number: "01",
    title: "5 ready-to-use AI workflow templates",
    description: "Copy, paste, and customise for your business",
  },
  {
    number: "02",
    title: "The prompt framework that gets 10x better output",
    description: "Stop writing one-line prompts that give generic results",
  },
  {
    number: "03",
    title: "My daily AI system for content, email, and ops",
    description: "The exact routine that saves me 10+ hours a week",
  },
  {
    number: "04",
    title: "Tool stack breakdown with honest pros/cons",
    description: "Which tools are worth paying for (and which aren't)",
  },
];

const whoItIsFor = [
  "You're a business owner who knows AI matters but doesn't know where to start",
  "You've tried ChatGPT but feel like you're only scratching the surface",
  "You want systems, not just tips — things that save you time every week",
];

export default function PlaybookPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Form */}
            <div>
              <span className="font-mono text-xs tracking-widest text-accent uppercase">
                Free Download
              </span>
              <h1 className="font-display italic text-ink text-4xl sm:text-5xl leading-tight mt-3 mb-5">
                The AI Business Playbook
              </h1>
              <p className="font-sans text-body text-lg mb-6">
                The exact frameworks, prompts, and workflows I use to run my
                business with AI. Yours free.
              </p>
              <hr className="border-rule my-6" />
              <EmailCapture
                buttonText="Send Me the Playbook"
                placeholder="Enter your email"
                variant="light"
                source="playbook"
              />
              <p className="font-mono text-xs text-subtle mt-4">
                Free instant download · No spam
              </p>
            </div>

            {/* Right: Mockup */}
            <div className="flex justify-center md:justify-end">
              <PlaybookMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Inside the Playbook */}
      <section className="bg-white py-20">
        <div className="max-w-screen-lg mx-auto px-6">
          <span className="font-mono text-xs text-subtle"><span>{"//"}</span> what&apos;s inside</span>
          <h2 className="font-display text-ink text-3xl sm:text-4xl mt-2 mb-12">
            Inside the Playbook
          </h2>
          <div className="space-y-0 max-w-xl">
            {playbookBenefits.map((benefit, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-4 py-6">
                  <span className="font-mono text-xs text-accent shrink-0">
                    {benefit.number}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-sm text-subtle mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                {i < playbookBenefits.length - 1 && (
                  <hr className="border-rule" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Who It's For */}
      <section className="bg-bg py-20">
        <div className="max-w-screen-lg mx-auto px-6">
          <span className="font-mono text-xs text-subtle"><span>{"//"}</span> is this for you?</span>
          <h2 className="font-display text-ink text-3xl sm:text-4xl mt-2 mb-12">
            This playbook is for you if...
          </h2>
          <div className="max-w-xl space-y-0">
            {whoItIsFor.map((statement, i) => (
              <div
                key={i}
                className="border-l-2 border-accent pl-4 py-1 my-4"
              >
                <p className="font-sans text-body">{statement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="py-20" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-3xl sm:text-4xl mb-4">
            Get the Playbook — Free
          </h2>
          <p className="font-sans text-lg mb-10" style={{ color: "#9ca3af" }}>
            Start using AI like a business advantage, not a toy.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              buttonText="Send Me the Playbook"
              placeholder="Enter your email"
              variant="dark"
              source="playbook"
            />
          </div>
        </div>
      </section>
    </>
  );
}
