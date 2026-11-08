# Softek Labs

A responsive Next.js website for online marketing, WhatsApp campaigns, digital content, custom software, and websites.

## Development

Use Node.js 20.9+ and run `npm ci`, then `npm run dev`. Run `npm run build` for the production build. With the local server running, `node scripts/check-enquiry.mjs` exercises nine invalid-request cases without writing any leads.

## Enquiries

Copy `.env.example` to `.env.local` and configure the existing Google service account and spreadsheet. Share the sheet with the service account email. The first worksheet must be named `Sheet1`; the existing A:O column layout is preserved. The API validates input, bounds payload size, checks same-origin browser submissions, and writes literal values using RAW. A hidden honeypot rejects basic form bots. It does not provide distributed rate limiting; configure hosting-level request limits if needed.

The UI only reports success after Sheets confirms the write. Missing configuration returns 503 with an email fallback. Do not commit credentials. Production and preview environments need their own configuration as appropriate.

## Content

Service copy is in `src/data/services.ts`. Shared layout is in `src/components/layout`; studio components are in `src/components/studio`. The original case-study URL is preserved. Visual dashboard and campaign artwork are explicitly illustrative; no campaign performance figures are fabricated.

## Deployment

The existing GitHub-connected Vercel project can deploy this Next.js application. Set `NEXT_PUBLIC_SITE_URL` when changing the canonical domain. Review the supplied privacy and website terms against actual business practices before launch.
