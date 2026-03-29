import { NextResponse } from "next/server";

// GET /api/test-beehiiv
// Returns: { ok: true, publication: { name, web_slug } } on success
// Returns: { ok: false, error: "..." } on failure
// Only accessible in non-production environments (NODE_ENV !== 'production')

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(null, { status: 404 });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return NextResponse.json(
      { ok: false, error: "Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID environment variables." },
      { status: 500 }
    );
  }

  let res: Response;
  try {
    res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown network error";
    return NextResponse.json(
      { ok: false, error: `Failed to reach Beehiiv API: ${message}` },
      { status: 502 }
    );
  }

  if (!res.ok) {
    const body = await res.text();
    return NextResponse.json(
      { ok: false, error: `Beehiiv API returned ${res.status}: ${body}` },
      { status: 502 }
    );
  }

  const data = await res.json() as {
    data?: { name?: string; web_slug?: string };
  };

  const publication = data?.data;

  return NextResponse.json({
    ok: true,
    publication: {
      name: publication?.name ?? null,
      web_slug: publication?.web_slug ?? null,
    },
  });
}
