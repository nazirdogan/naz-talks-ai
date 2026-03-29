import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The AI Business Playbook — Naz talks AI",
  description:
    "Your free guide: 5 workflow templates, the RCTF prompt framework, a daily AI routine, and an honest tool stack breakdown.",
  robots: { index: false },
};

export default function PlaybookDownloadPage() {
  return (
    <div className="bg-bg min-h-screen font-sans text-body">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 bg-bg border-b border-rule py-3 px-6 flex items-center justify-between">
        <span className="font-mono text-xs text-subtle">
          The AI Business Playbook · by Naz talks AI
        </span>
        <span className="font-mono text-xs text-white bg-accent px-3 py-1 rounded-full uppercase tracking-widest">
          Free Guide
        </span>
      </div>

      {/* Page content */}
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Hero */}
        <header className="mb-12">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Free Guide
          </span>
          <h1 className="font-display italic text-ink text-4xl sm:text-5xl leading-tight mt-3 mb-4">
            The AI Business Playbook
          </h1>
          <p className="font-mono text-xs text-subtle mb-6">by Naz talks AI</p>
          <p className="font-sans text-body text-lg leading-relaxed">
            Four sections. No filler. This playbook gives you the exact workflows, frameworks, and tools I use to run a business with AI — so you can stop experimenting and start saving time this week.
          </p>
        </header>

        {/* Table of contents */}
        <nav className="border border-rule rounded-none p-6 mb-12">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            Contents
          </p>
          <ol className="space-y-3">
            {[
              { num: "01", label: "5 AI Workflow Templates", anchor: "#section-01" },
              { num: "02", label: "The Prompt Framework That Gets 10x Better Output", anchor: "#section-02" },
              { num: "03", label: "My Daily AI System", anchor: "#section-03" },
              { num: "04", label: "Tool Stack Breakdown", anchor: "#section-04" },
            ].map(({ num, label, anchor }) => (
              <li key={num} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent shrink-0">{num}</span>
                <a
                  href={anchor}
                  className="font-sans text-body hover:text-ink transition-colors underline underline-offset-4 decoration-rule hover:decoration-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ─── Section 01 ─── */}
        <div id="section-01" className="mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Section 01
          </span>
          <h2 className="font-display text-ink text-2xl sm:text-3xl mt-0 mb-4">
            5 AI Workflow Templates
          </h2>
          <p className="font-sans text-body leading-relaxed mb-10">
            Copy these into your workflow tool of choice. Each template is built around a specific business task. Replace the bracketed placeholders with your own content and run it — no prompt engineering required.
          </p>

          {/* Template 1 */}
          <div className="mb-10">
            <h3 className="font-sans font-semibold text-ink mb-2">Weekly Content Brief</h3>
            <p className="font-sans text-sm text-subtle leading-relaxed mb-3">
              Use this at the start of any content planning session. It turns a topic into a fully briefed piece in seconds.
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`You are a content strategist. Given this topic: [TOPIC], write a content brief including: hook angle, key points (3–5 bullets), target audience pain point, and a suggested CTA. Keep it under 200 words.`}
            </pre>
          </div>

          {/* Template 2 */}
          <div className="mb-10">
            <h3 className="font-sans font-semibold text-ink mb-2">Client Email Response</h3>
            <p className="font-sans text-sm text-subtle leading-relaxed mb-3">
              Paste in any client email and get a professional draft reply ready to edit and send.
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`Draft a professional reply to this client email: [PASTE EMAIL]. Tone: warm but direct. Keep it under 150 words. End with a clear next step.`}
            </pre>
          </div>

          {/* Template 3 */}
          <div className="mb-10">
            <h3 className="font-sans font-semibold text-ink mb-2">Meeting Summary</h3>
            <p className="font-sans text-sm text-subtle leading-relaxed mb-3">
              Turn messy meeting notes into a clean, shareable summary with action items — in under a minute.
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`Here are my raw meeting notes: [PASTE NOTES]. Convert these into: (1) a 3-sentence summary, (2) action items with owners, (3) decisions made. Format as bullet points.`}
            </pre>
          </div>

          {/* Template 4 */}
          <div className="mb-10">
            <h3 className="font-sans font-semibold text-ink mb-2">Social Media Post</h3>
            <p className="font-sans text-sm text-subtle leading-relaxed mb-3">
              Generate three distinct LinkedIn variations from one topic — with different hook styles so you can test what resonates.
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`Write 3 variations of a LinkedIn post about: [TOPIC]. Each variation should use a different hook style: question, bold statement, and story opener. Keep each under 150 words.`}
            </pre>
          </div>

          {/* Template 5 */}
          <div className="mb-10">
            <h3 className="font-sans font-semibold text-ink mb-2">Competitive Research Brief</h3>
            <p className="font-sans text-sm text-subtle leading-relaxed mb-3">
              Get a structured competitor profile you can drop into a strategy doc or share with your team instantly.
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`Analyse this competitor: [COMPANY/URL]. Summarise their: positioning, key messaging, target audience, apparent strengths and weaknesses. Format as a structured brief I can share with my team.`}
            </pre>
          </div>
        </div>

        <hr className="border-rule mb-16" />

        {/* ─── Section 02 ─── */}
        <div id="section-02" className="mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Section 02
          </span>
          <h2 className="font-display text-ink text-2xl sm:text-3xl mt-0 mb-4">
            The Prompt Framework That Gets 10x Better Output
          </h2>
          <p className="font-sans text-body leading-relaxed mb-8">
            Most people write one-line prompts and get generic results. The difference is context. Use the RCTF framework every time you sit down with an AI tool and watch the output quality jump immediately.
          </p>

          {/* RCTF Framework */}
          <div className="space-y-0 mb-10">
            {[
              {
                letter: "R",
                label: "Role",
                description: 'Tell the AI who to be.',
                example: '"You are a senior copywriter with 10 years of B2B SaaS experience."',
              },
              {
                letter: "C",
                label: "Context",
                description: 'Give it the situation.',
                example: '"I\'m writing a homepage for a project management tool targeting small agencies."',
              },
              {
                letter: "T",
                label: "Task",
                description: 'Be specific about what you want.',
                example: '"Write a hero headline and subheadline. The headline should be under 8 words."',
              },
              {
                letter: "F",
                label: "Format",
                description: 'Tell it how to respond.',
                example: '"Give me 5 variations. Present each as: Headline / Subheadline / One-line rationale."',
              },
            ].map(({ letter, label, description, example }, i, arr) => (
              <div key={letter}>
                <div className="flex items-start gap-4 py-6">
                  <span className="font-mono text-sm text-accent font-medium shrink-0 w-6">{letter}</span>
                  <div>
                    <p className="font-sans font-semibold text-ink">
                      {letter} — {label}
                    </p>
                    <p className="font-sans text-sm text-body leading-relaxed mt-1">
                      {description}{" "}
                      <span className="font-mono text-xs text-subtle">{example}</span>
                    </p>
                  </div>
                </div>
                {i < arr.length - 1 && <hr className="border-rule" />}
              </div>
            ))}
          </div>

          {/* Before/After */}
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            Before vs After
          </p>

          <div className="mb-4">
            <p className="font-sans text-sm font-semibold text-subtle mb-2 uppercase tracking-wide">
              Bad prompt
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`Write me a headline for my website`}
            </pre>
          </div>

          <div className="mb-4">
            <p className="font-sans text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
              RCTF prompt
            </p>
            <pre className="font-mono text-sm bg-indigo-50 border border-indigo-100 p-4 rounded-none text-ink leading-relaxed whitespace-pre-wrap">
{`You are a conversion copywriter. I run a project management tool for small creative agencies (5–20 people) who are drowning in client emails. Write a homepage headline under 8 words that speaks to the pain of disorganisation. Give me 5 variations with a one-line rationale for each.`}
            </pre>
          </div>

          <p className="font-sans text-sm text-subtle leading-relaxed mt-4">
            Same tool. Same model. Completely different result. The quality of your output is a direct reflection of the quality of your input. RCTF gives you the structure to make that input better every single time.
          </p>
        </div>

        <hr className="border-rule mb-16" />

        {/* ─── Section 03 ─── */}
        <div id="section-03" className="mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Section 03
          </span>
          <h2 className="font-display text-ink text-2xl sm:text-3xl mt-0 mb-4">
            My Daily AI System
          </h2>
          <p className="font-sans text-body leading-relaxed mb-10">
            This is the exact routine I run every day. Takes about 20 minutes total. It replaces an hour of context-switching, decision fatigue, and staring at a blank page. Steal it, adapt it, make it yours.
          </p>

          <div className="space-y-0">
            {[
              {
                time: "8:00am",
                label: "Morning Triage",
                duration: "5 min",
                description:
                  'Paste overnight emails into AI. Ask: "Summarise these emails, flag anything urgent, and draft a reply for any that need a response today." You start the day with a clear picture instead of swimming through inboxes.',
              },
              {
                time: "9:00am",
                label: "Content Block",
                duration: "10 min",
                description:
                  "Use the Weekly Content Brief template from Section 01 to plan the day's content piece. Generate a first draft. Edit, don't rewrite. The goal is to get to a 70% draft fast — your job is to refine, not to start from zero.",
              },
              {
                time: "End of day",
                label: "EOD Wrap",
                duration: "5 min",
                description:
                  'Paste today\'s notes and task list into AI. Ask: "What did I complete today? What\'s carrying over? What should be my top 3 priorities for tomorrow?" You close the loop and show up tomorrow with a plan instead of a to-do pile.',
              },
            ].map(({ time, label, duration, description }, i, arr) => (
              <div key={time}>
                <div className="flex items-start gap-4 py-6">
                  <div className="shrink-0 w-24">
                    <p className="font-mono text-xs text-accent">{time}</p>
                    <p className="font-mono text-xs text-subtle mt-0.5">{duration}</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-ink mb-2">{label}</p>
                    <p className="font-sans text-sm text-body leading-relaxed">{description}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <hr className="border-rule" />}
              </div>
            ))}
          </div>

          <div className="border-l-2 border-accent pl-4 mt-8">
            <p className="font-sans text-sm text-body leading-relaxed">
              <strong className="text-ink">Total time: ~20 minutes.</strong> That is a reasonable daily investment to have AI working as a thought partner, drafter, and organiser across your whole business — not just as a fancy search engine.
            </p>
          </div>
        </div>

        <hr className="border-rule mb-16" />

        {/* ─── Section 04 ─── */}
        <div id="section-04" className="mb-16">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Section 04
          </span>
          <h2 className="font-display text-ink text-2xl sm:text-3xl mt-0 mb-4">
            Tool Stack Breakdown
          </h2>
          <p className="font-sans text-body leading-relaxed mb-10">
            These are the tools I actually use and pay for. Honest takes only. No affiliate links, no sponsored opinions. If something is not worth your money, I will tell you.
          </p>

          <div className="space-y-0">
            {[
              {
                name: "Claude (Anthropic)",
                use: "Writing, strategy, analysis",
                worth: "Yes",
                take: "Better than ChatGPT for nuanced writing and long documents. My primary tool.",
              },
              {
                name: "ChatGPT (OpenAI)",
                use: "Quick lookups, code snippets",
                worth: "Maybe",
                take: "Great for fast answers and coding help, but I find Claude produces better prose.",
              },
              {
                name: "Perplexity AI",
                use: "Research with sources",
                worth: "Yes",
                take: "Replaces most Google searches. The source citations save hours of verification.",
              },
              {
                name: "Notion AI",
                use: "In-document writing and summaries",
                worth: "Maybe",
                take: "Convenient if you already use Notion. Not worth switching platforms for.",
              },
            ].map(({ name, use, worth, take }, i, arr) => (
              <div key={name}>
                <div className="py-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-sans font-semibold text-ink">{name}</p>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 shrink-0 ${
                        worth === "Yes"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {worth === "Yes" ? "Worth it" : "Maybe"}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-subtle mb-2">{use}</p>
                  <p className="font-sans text-sm text-body leading-relaxed">
                    &ldquo;{take}&rdquo;
                  </p>
                </div>
                {i < arr.length - 1 && <hr className="border-rule" />}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-rule mb-16" />

        {/* CTA */}
        <div className="text-center py-12">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            Every Thursday
          </p>
          <h2 className="font-display italic text-ink text-3xl sm:text-4xl mb-4">
            Want more like this?
          </h2>
          <p className="font-sans text-body leading-relaxed mb-8 max-w-md mx-auto">
            Subscribe to Naz talks AI Weekly — practical AI workflows, honest tool reviews, and real strategies for business owners. Free, every Thursday.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-white font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-indigo-700 transition-colors"
          >
            Subscribe to Naz talks AI Weekly
          </Link>
          <p className="font-mono text-xs text-subtle mt-4">
            Free · Every Thursday · Unsubscribe anytime
          </p>
        </div>

      </div>
    </div>
  );
}
