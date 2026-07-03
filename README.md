# My Portfolio

A personal portfolio website with a hero section, a projects showcase, an about section, and a contact section with a Formspree-powered contact form.

Built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies.

## Structure

```
index.html      # Page markup (Hero, Projects, About, Contact)
styles.css      # All styling, responsive layout
script.js       # Nav toggle, smooth scroll offset, contact form submission
plan.md         # Original planning doc
```

## Running locally

Since this is a static site, any local file server works. From the project root:

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173 in your browser.

Alternatively, if you have Node.js installed:

```bash
npx serve
```

## Configuration

Before deploying, update the placeholder content in `index.html`:

- Name, tagline, bio, and project details (currently placeholder text)
- Twitter/LinkedIn URLs in the Contact section
- The contact form's `action` attribute — replace `YOUR_FORM_ID` with your real [Formspree](https://formspree.io) endpoint

## Deployment

Being a static site, it can be deployed as-is to GitHub Pages, Netlify, or Vercel with no build configuration required.
