# CLAUDE.md

Context for future Claude Code sessions working in this repo.

## What this is

A single-page personal portfolio site: Hero → Projects → About → Contact. Deliberately built with **plain HTML/CSS/JS — no framework, no build step, no npm dependencies**. That was an explicit choice (keep it simple) after an earlier version of the plan considered Next.js/Tailwind/React; don't reintroduce a framework or bundler without checking with the user first.

## Architecture

- `index.html` — single page, all four sections live here as `<section>` elements (`#hero`, `#projects`, `#about`, `#contact`). No templating, no partials.
- `styles.css` — one stylesheet. Theme values (colors, max-width, radius) are CSS custom properties in `:root`. Dark theme only, no light mode toggle.
- `script.js` — small, targeted vanilla JS:
  - mobile nav hamburger toggle (`#navToggle` / `#navLinks`, `.open` class)
  - footer year
  - contact form AJAX submit handler (`#contactForm` → Formspree via `fetch`, shows status in `#formStatus`)
- No JS framework, no state management — DOM queries by id/class are fine here given the page's size.

## Responsive breakpoints

Defined in `styles.css`, bottom of the file:
- `900px` — project grid drops from a wider layout to 2 columns
- `768px` — nav collapses to hamburger menu; project grid becomes 1 column
- `420px` — tighter container padding for small phones

Keep these three breakpoints when adding new responsive rules rather than introducing new arbitrary widths.

## Current state — placeholder content

Real content has not been filled in yet. Search `index.html` for these before considering the site launch-ready:
- Name, tagline, and eyebrow text in the hero (currently "Your Name" / generic tagline)
- 4 project entries — titles, descriptions, tags, and links are all placeholder text; thumbnails are CSS gradient placeholders (`.project-thumb`), not real images
- About section bio text and avatar (`.about-avatar` is a gradient placeholder, no real photo)
- Twitter/LinkedIn URLs in Contact (`yourhandle` placeholders)
- **Contact form endpoint**: `index.html` has `action="https://formspree.io/f/YOUR_FORM_ID"` — this must be replaced with a real Formspree endpoint before the form will work. Form posts via `fetch` in `script.js`, expects Formspree's JSON response format.

## Deployment / hosting

No build step means this can be deployed as-is (static files) to GitHub Pages, Netlify, or Vercel — no CI config exists yet.

## Git

- Remote: `origin` → `https://github.com/plainstrategies/Test-MyPortfolio.git`, default branch `main`.
- This machine had no git identity or GitHub auth configured initially; `gh` (GitHub CLI) was installed and `gh auth setup-git` was used to wire GitHub auth into git's credential system. If push fails with "could not read Username," that wiring may need to be redone (`gh auth login` then `gh auth setup-git`).

## Conventions to keep

- No comments in HTML/CSS/JS beyond the one explaining the Formspree endpoint swap-in — keep it that way; don't add explanatory comments for self-evident markup/styling.
- Don't add a CSS preprocessor, JS bundler, or component framework unless the user asks — the whole point of this stack is zero build tooling.
