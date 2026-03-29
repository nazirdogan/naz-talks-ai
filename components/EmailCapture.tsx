"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface EmailCaptureProps {
  buttonText: string;
  placeholder: string;
  variant: "light" | "dark";
  source?: "newsletter" | "playbook";
}

export default function EmailCapture({
  buttonText,
  placeholder,
  variant,
  source = "newsletter",
}: EmailCaptureProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      // Redirect to the appropriate thank-you page based on source
      router.push(source === "playbook" ? "/thank-you/playbook" : "/thank-you");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const isDark = variant === "dark";

  const inputClass = isDark
    ? "w-full px-4 py-3 text-white text-sm font-sans rounded-none focus:outline-none focus:ring-1 focus:ring-white/50"
    : "w-full px-4 py-3 bg-white border border-rule text-ink placeholder-subtle focus:outline-none focus:border-accent text-sm font-sans rounded-none";

  const inputStyle = isDark
    ? { backgroundColor: "#1e1e1e", border: "1px solid rgba(255,255,255,0.25)", color: "#ffffff" }
    : undefined;

  return (
    <div>
      {/* BEEHIIV EMBED: Replace this entire block with Beehiiv embed code if preferred */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
          style={inputStyle}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 font-sans font-semibold text-sm whitespace-nowrap rounded-none transition-opacity disabled:opacity-60"
          style={{ backgroundColor: "#4F46E5", color: "#ffffff" }}
        >
          {loading ? "Sending..." : buttonText}
        </button>
      </form>

      {error && (
        <p className="mt-2 text-sm font-sans" style={{ color: isDark ? "#fca5a5" : "#dc2626" }}>
          {error}
        </p>
      )}
    </div>
  );
}
