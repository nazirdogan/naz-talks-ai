import { NextRequest, NextResponse } from "next/server";

type SubscribeSource = "newsletter" | "playbook";

export async function POST(req: NextRequest) {
  const { email, source }: { email: string; source?: SubscribeSource } =
    await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error("Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  // Tag playbook vs newsletter subscribers so Beehiiv automations can
  // send the right welcome email to each group.
  const utmMedium = source === "playbook" ? "playbook-download" : "newsletter";
  const utmCampaign = source === "playbook" ? "playbook-download" : "newsletter-signup";

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: source !== "playbook", // Beehiiv welcome email for newsletter only
        utm_source: "website",
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
      }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    console.error("Beehiiv API error:", res.status, body);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
