export default function PlaybookMockup() {
  return (
    <div className="relative">
      {/* Drop shadow layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: "rotate(2deg) translate(8px, 8px)",
          backgroundColor: "#4F46E5",
          opacity: 0.15,
          borderRadius: "2px",
        }}
      />

      {/* Book spine */}
      <div
        className="playbook-float"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "12px",
          background: "linear-gradient(to right, #e2e2de, #f0f0ec)",
          borderRadius: "2px 0 0 2px",
          transform: "rotate(2deg)",
          borderRight: "1px solid #d8d8d2",
        }}
      />

      {/* Main cover */}
      <div
        className="relative playbook-float overflow-hidden"
        style={{
          width: "220px",
          height: "300px",
          backgroundColor: "#FAFAF8",
          borderRadius: "2px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid #E5E4E0",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", backgroundColor: "#4F46E5" }} />

        {/* Subtle dot-grid background */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#C7C7C2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Content */}
        <div className="relative flex flex-col h-full p-6 pt-7">
          {/* Label */}
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.15em", color: "#4F46E5", textTransform: "uppercase", marginBottom: "14px" }}>
            FREE GUIDE
          </span>

          {/* Icon square */}
          <div style={{ width: "40px", height: "40px", backgroundColor: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          {/* Title */}
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#111111", fontSize: "18px", lineHeight: "1.3", marginBottom: "6px" }}>
            The AI Business Playbook
          </p>

          {/* Divider */}
          <div style={{ width: "32px", height: "2px", backgroundColor: "#4F46E5", marginBottom: "14px" }} />

          {/* Chapter list */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { label: "01", text: "Workflow Templates" },
              { label: "02", text: "Prompt Framework" },
              { label: "03", text: "Daily AI System" },
              { label: "04", text: "Tool Stack" },
            ].map(({ label, text }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", color: "#4F46E5", minWidth: "14px" }}>
                  {label}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", color: "#888888" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Author + badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", color: "#AAAAAA" }}>
              by Naz talks AI
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", fontWeight: 600, backgroundColor: "#4F46E5", color: "#ffffff", padding: "2px 8px", letterSpacing: "0.05em" }}>
              FREE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
