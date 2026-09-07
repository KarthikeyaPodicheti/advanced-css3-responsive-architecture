# Web Development Internship — Task 1: Accessible Portfolio

A multi-page personal portfolio built with **semantic HTML5**, **WCAG 2.2 AA** practices, and **SEO** best practices.

## Pages
| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, skills, featured projects |
| About | `about.html` | Bio, skills, timeline, education table |
| Projects | `projects.html` | 3 case studies with semantic articles |
| Contact | `contact.html` | Accessible tab-navigable form + info |

## Accessibility Features (WCAG)
- Landmarks: `header`, `nav` (labeled), `main`, `section`, `article`, `aside`, `footer`
- Skip-to-content link, single `h1` per page, logical heading order
- Visible `:focus-visible` styles, keyboard-operable menu (Escape closes)
- Form: visible `label`s, `aria-describedby` hints, `aria-invalid` + `role="status"` live errors
- `prefers-reduced-motion` support, 4.5:1+ contrast, `meter`/`table` semantics

## SEO Features
- Unique title + description per page, canonical-ready URLs
- Open Graph + Twitter cards, `theme-color`, favicon
- JSON-LD `Person` structured data on home page
- Semantic headings, descriptive `alt` text, lazy-loaded images

## How to Run
Open `index.html` in a browser, or use VS Code Live Server.

## Lighthouse Check
In Chrome DevTools → Lighthouse → Accessibility + SEO → should score ~100.
