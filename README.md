# Shipfront

Warehousing and fulfillment for eCommerce merchants. Public marketing site rebuilt from the live copy at [myshipfront.com](https://www.myshipfront.com/).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4 with CSS design tokens
- Motion for UI choreography
- Phosphor icons

## Pages

- `/` Why Shipfront
- `/how-it-works` How it Works
- `/get-a-quote` Get a Quote
- `/about` About
- `/contact` Contact
- `/partners` Partners
- `/pricing` Quotes (no public price list on the source site)

## GitHub Pages

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/shipfront-crate-os npm run build
```

The static export is written to `out/`.
