# Kendi Mercy - Portfolio

A concise one-page portfolio for a programme and operations leader working across data, metrics and strategy execution. Built with Next.js 15, React, TypeScript and Tailwind CSS.

## Content

The main page includes four service areas, ALX Africa / Founders Factory Africa / Ruji Pure Waters case studies, a five-step working approach, an about section, a short professional summary and direct email, phone and LinkedIn links. Case studies expand using native disclosure controls. The Founders Factory work is explicitly identified as a proposal that was not implemented.

Update the portfolio content and contact details in `lib/portfolio.ts`. Layout styles are in `app/portfolio.css`. The downloadable two-page resume is `public/downloads/kendi-mercy-resume.pdf`. A KM monogram occupies the hero portrait slot until a professional portrait is supplied.

Existing work, resources, about, approach and inquiry URLs redirect to the relevant home-page sections. Legal pages remain at `/privacy`, `/cookies` and `/terms`. Shared legal contact details live in `lib/site.ts`.

## Run locally

```sh
npm ci
npm run dev
```

## Production check

```sh
npm run build
```

Deploy from `main` using the existing Vercel connection. Next.js downloads the existing Inter and Playfair Display fonts during the build. The one-page portfolio does not require Supabase credentials or a contact-form relay; its contact actions open email and phone apps directly. Legacy library components and seeding tools remain in the repository but are not used by the portfolio page.

## Source and editorial notes

The website copy and resume are based on the two supplied portfolio documents, with the user-confirmed name Kendi Mercy and company Ruji Pure Waters. No company dates or quantified business outcomes were invented. Dashboard and workflow illustrations are schematic, not client screenshots. Power BI is not listed as a current capability.
