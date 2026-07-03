# Personal Portfolio Website — Plan

## 1. Recommended Tech Stack

| Concern | Choice | Why |
|---|---|---|
| Markup | **Plain HTML5** (single `index.html`, or one file per section if it grows) | No build step, no framework — easiest to understand, edit, and host anywhere. |
| Styling | **Plain CSS** (`styles.css`) using Flexbox/Grid + CSS custom properties for theme colors | Full control, zero dependencies, small enough file size that a preprocessor isn't needed. |
| Interactivity | **Vanilla JS** (`script.js`), only if needed (e.g., mobile nav toggle, smooth scroll) | Keep JS minimal — this is a mostly-static page. |
| Icons | Inline SVGs (e.g., from [Simple Icons](https://simpleicons.org/) for Twitter/LinkedIn) | No icon library/npm dependency required. |
| Content | Directly in HTML (4 project entries hand-written) | No CMS or data layer needed for a page this small. |
| Deployment | **GitHub Pages, Netlify, or Vercel (static)** | Any of these can host a plain static site for free with a simple drag-and-drop or git-push deploy. |
| Fonts | Self-hosted `.woff2` file(s) or a single `@font-face`/Google Fonts `<link>` | Keep it to one font family to avoid extra requests. |

No build tools, package manager, or framework — just HTML, CSS, and a touch of JS, deployed as static files.

## 2. File Structure

```
my-portfolio/
├── index.html               # Full page: Hero, Projects, About, Contact sections
├── styles.css                # All styling (layout, colors, responsive breakpoints)
├── script.js                  # Optional: nav toggle, smooth scroll, small interactions
├── images/
│   ├── projects/              # Project screenshots (4)
│   └── avatar.jpg             # Headshot for About section (optional)
├── fonts/                     # Self-hosted font files (optional, if not using a CDN link)
└── plan.md
```

## 3. Design Considerations

- **Single-page scroll layout**: Hero → Projects → About → Contact, each as a full-width `<section>` with generous vertical spacing (common, proven pattern for portfolios).
- **Mobile-first & responsive**: plain CSS media queries; stack project cards to 1 column on mobile, 2x2 grid on desktop using CSS Grid.
- **Dark mode**: default to a dark or dark/light theme using CSS custom properties (`:root` variables), optionally toggled via a small vanilla JS script.
- **Typography-led design**: since there's no logo/brand system yet, lean on strong type hierarchy (large hero name, clear section headings) rather than heavy graphics.
- **Performance**: hand-optimize/compress images before adding them, keep CSS/JS to single small files, no external dependencies to slow down load.
- **Accessibility**: semantic HTML (`<section>`, `<nav>`, `<main>`), proper heading order, alt text on project images, sufficient color contrast, keyboard-navigable links.
- **SEO basics**: meta title/description, Open Graph tags in `<head>` for link previews when shared on Twitter/LinkedIn.
- **Contact section**: simple icon buttons/links to Twitter and LinkedIn (no contact form needed per your spec — keeps it fully static with no backend).

## 4. Step-by-Step Implementation Plan

1. **Scaffold the project**
   - Create `index.html`, `styles.css`, and `images/` folder. Add basic HTML boilerplate with meta tags and a link to `styles.css`.
2. **Set up global styles**
   - Define CSS custom properties for colors/fonts in `:root` (and a dark theme if desired).
   - Add font (self-hosted `@font-face` or a single Google Fonts `<link>`).
   - Set up base reset (margin/padding, box-sizing) and typography scale.
   - Set page metadata (title, description, Open Graph tags) in `<head>`.
3. **Build Hero section**
   - `<section id="hero">` with name as large heading, tagline as subheading, optional CTA link that smooth-scrolls to Projects.
4. **Build Projects section**
   - `<section id="projects">` with a CSS Grid of 4 project cards, each hand-written with image, title, description, tech tags, and a "View project" link.
5. **Build About section**
   - `<section id="about">` with bio paragraph(s), optionally a headshot image.
6. **Build Contact section**
   - `<section id="contact">` with icon links to Twitter and LinkedIn (open in new tab, `rel="noopener noreferrer"`), styled as buttons.
7. **Add navigation (optional)**
   - Small sticky `<nav>` with anchor links to each section; add smooth-scroll behavior via CSS (`scroll-behavior: smooth`) or a few lines of `script.js`.
8. **Style and polish**
   - Responsive check at mobile/tablet/desktop breakpoints using media queries.
   - Add subtle CSS transitions/hover states (no JS animation library needed).
   - Add favicon and OG image.
9. **Test & deploy**
   - Open `index.html` locally (or use a simple local server) to verify all sections and links work; check with browser dev tools / Lighthouse.
   - Push to GitHub, deploy as a static site via GitHub Pages, Netlify, or Vercel (no build step required).
   - Optionally attach a custom domain.

---

**Open questions for you before implementation:**
- Do you have project images/screenshots ready, or should I use placeholders?
- Any preference on color palette / dark vs. light default?
- Do you want a nav bar, or keep it a single continuous scroll with no navigation?
