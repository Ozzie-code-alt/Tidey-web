# Tidey — Coming Soon (Next.js)

The Tidey pre-launch landing page as a ready-to-deploy **Next.js 14** (App Router) project.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

**Vercel (easiest):** push this folder to a Git repo and import it at vercel.com — zero config.

**Any static host (Netlify, GitHub Pages, S3, Cloudflare Pages):**

```bash
npm run build
```

This produces a fully static site in `./out` (config has `output: 'export'`). Upload that folder anywhere.

## Project structure

```
app/
  layout.tsx     Root layout + <head> metadata
  page.tsx       The landing page (client component: animations + waitlist form)
  globals.css    Tidey design tokens + page styles
public/assets/   Brand illustrations + app screenshots
```

## Notes

- Fonts (**Baloo 2** + **Nunito**) load from Google Fonts via `@import` in `globals.css`.
  These are **placeholder substitutions** for Tidey's real brand typefaces — swap them in for production.
- The waitlist form is front-end only (shows a success state). Wire `handleSubmit` in `page.tsx`
  to your email/CRM endpoint to capture real signups.
- Images use plain `<img>` with `images.unoptimized` so the static export works without a server.
