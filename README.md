# Naz talks AI — Marketing Website

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- `/` — Newsletter signup (homepage)
- `/playbook` — Lead magnet / free playbook download
- `/thank-you` — Post-signup confirmation page

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in Vercel
3. Deploy — no environment variables required

## Swap Beehiiv Embed

1. Open `components/EmailCapture.tsx`
2. Find the comment: `<!-- BEEHIIV EMBED: Replace this form with Beehiiv embed code -->`
3. Replace the `<form>` block with your Beehiiv embed snippet

## Replace GA4 ID

1. Open `app/layout.tsx`
2. Find all instances of `G-XXXXXXXXXX`
3. Replace with your real Google Analytics 4 Measurement ID

## OG Image

Place a 1200x630px `og-image.png` in the `/public` folder and update the `openGraph.images` field in each page's metadata export.

## Brand Colors

Defined in `tailwind.config.ts`:
- `brand` — #4F46E5 (indigo)
- `dark` — #0F172A
- `muted` — #64748B
- `light` — #F8FAFC
- `border` — #E2E8F0
