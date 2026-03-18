# CLAUDE.md

## Project Overview

Static restaurant website for **Bê Thui Hà Nội** (Vietnamese beef BBQ restaurant chain).
UI mirrors bethuihanoi.vn — hero, menu showcase, gallery, features, blog, booking form, contact.
No cart or ecommerce. Data (menu, blog, gallery, config) fetched from Google Sheets at build time.

## Tech Stack

### Frontend

- **Framework:** Astro 4.x (static output)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3.x — utility classes only, no inline styles
- **Key Libraries:** None (zero JS by default, island architecture for interactive components)

### Infrastructure

- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Data source:** Google Sheets published as CSV (fetched at build time via `src/lib/googleSheets.ts`)

## Architecture

- Pure static site — `output: 'static'` in `astro.config.mjs`
- All data fetching happens **at build time** in Astro frontmatter (`---` blocks)
- No server-side rendering, no API routes
- Google Sheets data → typed via `src/types/index.ts` → rendered as static HTML
- Booking form submits to external service (Formspree or similar)

## Repository Structure

```
src/
├── components/
│   ├── layout/       # Header.astro, Footer.astro
│   ├── sections/     # Hero, MenuShowcase, Features, Gallery, Blog, Booking
│   └── ui/           # MenuCard, BlogCard (reusable atoms)
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   └── googleSheets.ts   # All Google Sheets fetch logic
├── pages/
│   ├── index.astro
│   ├── menu.astro
│   ├── about.astro
│   ├── booking.astro
│   ├── food-culture.astro
│   ├── contact.astro
│   └── news/index.astro
├── styles/
│   └── global.css        # @tailwind directives + @layer base/components
└── types/
    └── index.ts           # MenuItem, BlogPost, GalleryImage, SiteConfig
```

## Current State

Greenfield skeleton — structure and components created, no real content/images yet.

---

## Constraints

### Hard Rules

- No `any` types — every value must be typed
- No client-side data fetching — all data comes from build-time fetches
- No ecommerce / cart functionality — excluded by design
- All API keys and sheet URLs must stay in `.env` / GitHub Secrets, never hardcoded

### Forbidden Patterns

- Do NOT use: inline styles — use Tailwind classes
- Do NOT use: `var` — always `const` or `let`
- Do NOT use: default exports for components — use named exports (Astro components export themselves)
- Do NOT use: `console.log` in production code

### Performance

- Images must use `loading="lazy"` unless above the fold
- Prefer Astro components (zero JS) over framework islands unless interactivity is needed

---

## Conventions

### Naming

| Element            | Convention  | Example                 |
| ------------------ | ----------- | ----------------------- |
| Components         | PascalCase  | `MenuCard.astro`        |
| Files (utilities)  | camelCase   | `googleSheets.ts`       |
| Types / Interfaces | PascalCase  | `MenuItem`              |
| CSS classes        | Tailwind    | `text-brand-gold`       |
| Env variables      | UPPER_SNAKE | `GOOGLE_SHEET_MENU_URL` |

### Colors (Tailwind custom tokens)

- `brand-green` → `#004923`
- `brand-gold` → `#faa61a`

### Reusable CSS classes (defined in `global.css`)

- `.btn-primary` — filled gold button with rounded-full
- `.btn-outline` — outlined gold button
- `.section-title` — h2 styling
- `.section-subtitle` — muted subtitle

### Git

- **Commits:** Conventional Commits — `feat:` / `fix:` / `chore:` / `content:`
- **Main branch:** `main` → triggers GitHub Pages deploy

---

## Google Sheets Setup

Each sheet should be published as CSV via **File → Share → Publish to web → CSV**.

### Menu sheet columns

`id | name | description | price | originalPrice | category | image`

### Blog sheet columns

`id | title | slug | excerpt | thumbnail | publishedAt`

### Gallery sheet columns

`id | src | alt | caption`

### Config sheet columns (key–value pairs)

`key | value`
Keys: `name`, `tagline`, `hotline`, `email`, `address`, `facebook`, `tiktok`, `youtube`

---

## GitHub Actions Secrets Required

```
GOOGLE_SHEET_MENU_URL
GOOGLE_SHEET_BLOG_URL
GOOGLE_SHEET_GALLERY_URL
GOOGLE_SHEET_CONFIG_URL
BOOKING_FORM_ENDPOINT    (optional)
```

## Learnings & Corrections

- Don't wait for `npm run build` completion
- Don't replace <Image> with <img>

<!-- Grow this section over time -->
