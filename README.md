# Meghashri Lakshmi S — Portfolio

A React + Vite + Tailwind + Framer Motion portfolio site.

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node.js 18+.

## Adding your resume

The "Download Resume" button in the hero section points to `/resume.pdf`.

Place your resume PDF at:

```
public/resume.pdf
```

Vite serves everything in `public/` from the site root, so it will be
reachable at `/resume.pdf` automatically — no code changes needed.

## Project structure

```
src/
  data/portfolio.js      # all content — name, projects, skills, experience, etc.
                          # edit this file to update site content
  components/             # one component per section (Hero, About, Journey,
                           Skills, Projects, Experience, Certifications,
                           Education, Building, Contact, Footer, Navbar,
                           CustomCursor, ScrollProgress, ProjectDetail)
  hooks/useActiveSection.js
  App.jsx                 # assembles all sections
  index.css                # design tokens, custom cursor, reduced-motion rules
tailwind.config.js         # color palette, fonts, animation tokens
```

To update any content (projects, skills, experience, certifications, stats),
edit `src/data/portfolio.js` only — the UI reads from that file.

## Notes

- Respects `prefers-reduced-motion`.
- Custom cursor and magnetic hover states are desktop-only (disabled on
  touch devices automatically).
- No fabricated stats, testimonials, or company data — all copy is sourced
  directly from the content provided.
