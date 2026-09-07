# Internship Portfolio — P Karthikeya

Hi, I'm **P Karthikeya**, a front-end web development student at Methodist College of Engineering & Technology, Hyderabad. This is my personal portfolio website, which I built as the first task of my web development internship.

**Live pages:** Home (`index.html`) · About (`about.html`) · Projects (`projects.html`) · Contact (`contact.html`)

## How I Made This Website

### 1. I planned the structure first
Before writing any code, I decided what each page needed to do:
- **Home** — introduce who I am, what I do, and highlight my best work
- **About** — share my background, skills, education, and selected projects
- **Projects** — show my real website projects from GitHub with live demo links
- **Contact** — give visitors an accessible way to reach me

I kept one shared design system (`style.css`) and one shared behavior file (`script.js`) so every page looks and behaves consistently.

### 2. I wrote semantic HTML5
I used proper landmark elements on every page instead of generic `div`s:
- `header` for the site banner and logo
- `nav` (with `aria-label="Primary"` and `aria-label="Footer"`) for navigation
- `main` with `id="main-content"` as the primary content area
- `section`, `article`, and `aside` to give each block of content real meaning
- `footer` for the closing site info

I made sure each page has exactly one `h1` and headings follow a logical order (`h1` → `h2` → `h3`), which helps both screen readers and search engines understand the page.

### 3. I made it accessible (WCAG)
Accessibility was a core requirement, so I built it in from the start:
- I added a **skip-to-content link** so keyboard users can jump past the navigation
- I marked the current page with **`aria-current="page"`** so screen readers announce where the visitor is
- I gave every form field a visible **`<label>`**, a hint paragraph (`aria-describedby`), and its own error message area
- I used **`aria-invalid="true"`** on invalid fields and a **`role="status"` live region** so errors are announced automatically
- I added strong **`:focus-visible`** outlines so keyboard focus is always visible
- I made the mobile menu closable with the **Escape** key and return focus to the toggle button
- I respected **`prefers-reduced-motion`** and kept color contrast above 4.5:1
- I tested tab order on the contact page: skip link → nav → name → email → message → submit

### 4. I added SEO best practices
I gave every page a unique `<title>` and `<meta name="description">`, plus:
- `lang="en"` and a responsive `viewport` meta tag
- Open Graph tags for rich link previews
- `theme-color` and an inline SVG favicon
- **JSON-LD `Person` structured data** on the home page
- Descriptive link text (no "click here") and semantic headings

### 5. I built the contact form with JavaScript validation
I wrote vanilla JavaScript (no libraries) that:
- Validates name (min 2 characters), email (regex check), and message (min 10 characters) on submit
- Shows a specific error under each invalid field and moves focus to the first error
- Announces a summary in the live status region
- Only submits (via `mailto:`) when every field is valid

### 6. I styled it with a shared CSS system
I used CSS custom properties (variables) for colors, spacing, and radius so the whole site stays consistent. The layout uses CSS Grid for page sections and card grids, and Flexbox for the header, nav, and buttons. A single media query collapses multi-column layouts on small screens and turns the nav into a toggle menu.

### 7. I verified my work
- I ran Chrome's **axe accessibility audit** on all four pages — **0 violations** everywhere
- I tested the form with invalid input and confirmed every error appears and is announced
- I checked the tab order and Escape-to-close menu behavior with the keyboard

## My Projects (from my GitHub)

- [Aurelia Habitat](https://github.com/KarthikeyaPodicheti/aurelia-habitat) — [live demo](https://realestate-chi-swart.vercel.app)
- [LB Nagar Loans](https://github.com/KarthikeyaPodicheti/lb-nagar-loans) — [live demo](https://lb-nagar-loans.vercel.app)
- [Brain Implants Tutorials](https://github.com/KarthikeyaPodicheti/brain-implants-demo) — [live demo](https://brain-implants.vercel.app)
- [Neo Skin Clinic](https://github.com/KarthikeyaPodicheti/neo-demo) — [live demo](https://luxuary-spa.vercel.app)
- [Portfolio Agency](https://github.com/KarthikeyaPodicheti/portfolio-website) — [live demo](https://portfolio-agency-sooty.vercel.app)
- [National Dental Care](https://github.com/KarthikeyaPodicheti/ndc-clone)

## How to Run It

Just open `index.html` in any browser, or use VS Code's Live Server extension for auto-reload.

## Lighthouse Check

Open Chrome DevTools → Lighthouse → run Accessibility + SEO audits — the site is built to score ~100 on both.

## Contact Me

- Email: [karthikeypodicheti25@gmail.com](mailto:karthikeypodicheti25@gmail.com)
- GitHub: [KarthikeyaPodicheti](https://github.com/KarthikeyaPodicheti)
