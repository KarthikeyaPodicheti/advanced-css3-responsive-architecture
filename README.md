# Advanced CSS3 & Responsive Architecture — P Karthikeya

Hi, I'm **P Karthikeya**, a front-end web development student at Methodist College of Engineering & Technology, Hyderabad. This is the second task of my web development internship, where I transformed my semantic portfolio into a fully responsive design using advanced CSS3.

**Live pages:** Home (`index.html`) · About (`about.html`) · Projects (`projects.html`) · Contact (`contact.html`)

## How I Made This Responsive Design

### 1. I rebuilt the CSS mobile-first
I threw out the desktop-first stylesheet and rewrote `style.css` starting from the smallest screen. My base styles target mobile phones, then I layer on complexity with `min-width` media queries — 640px for larger phones/tablets and 960px for desktop. This way small devices only download and apply what they need.

### 2. I used CSS Grid for page layouts
I used Grid for every two-dimensional layout on the site:
- The hero section becomes a Grid area layout on desktop (title, lead, and actions in named areas)
- The skills section uses a Grid that goes 1 column on mobile, 2 on tablet, and 3 on desktop
- The featured projects use a 2-column Grid on desktop and stack on mobile
- The About page bio/skills pair and the Contact form/info pair share the same responsive Grid

### 3. I used Flexbox for component alignment
I used Flexbox everywhere alignment is one-dimensional:
- The header row (logo, nav, and theme/menu buttons) is a Flex container
- The nav link list is a horizontal Flex row on desktop and a vertical Flex column in the mobile dropdown
- The hero buttons wrap with Flex so they stack gracefully on narrow screens
- The footer spreads its items with Flex and wraps on small screens
- The technology tags wrap with Flex so they flow onto new lines

### 4. I built a light/dark theme with CSS variables
I defined every color as a custom property in `:root` (background, surface, ink, muted text, accent, borders, tags, error, focus ring, shadows). The dark theme is a single `[data-theme="dark"]` block that overrides those variables — no duplicated selectors. A toggle button in the header flips the attribute, and I persist the choice in `localStorage` so it survives reloads. I also respect the visitor's OS preference on first load, and a tiny inline script in the `<head>` applies the saved theme before first paint so there's no flash.

### 5. I kept accessibility and SEO intact
The Task 1 foundation still holds: semantic landmarks, skip link, `aria-current`, labeled form with live error announcements, unique SEO meta per page, and JSON-LD on Home. I re-ran the axe accessibility audit on all four pages after the restyle — **0 violations** everywhere. I also fixed a real issue the audit caught: my first gradient hero failed contrast checks, so I replaced it with a solid surface and an accent top border.

### 6. I verified mobile, tablet, and desktop
I tested the site at 390px (phone), 768px (tablet), and 1280px (desktop):
- The nav collapses into a Menu button below 960px, opening a full-width dropdown that closes with Escape
- Cards stack vertically on phones and spread into grids on larger screens
- The theme toggle works at every width and the choice persists across pages

## My Projects (from my GitHub)

- [Aurelia Habitat](https://github.com/KarthikeyaPodicheti/aurelia-habitat) — [live demo](https://realestate-chi-swart.vercel.app)
- [LB Nagar Loans](https://github.com/KarthikeyaPodicheti/lb-nagar-loans) — [live demo](https://lb-nagar-loans.vercel.app)
- [Brain Implants Tutorials](https://github.com/KarthikeyaPodicheti/brain-implants-demo) — [live demo](https://brain-implants.vercel.app)
- [Neo Skin Clinic](https://github.com/KarthikeyaPodicheti/neo-demo) — [live demo](https://luxuary-spa.vercel.app)
- [Portfolio Agency](https://github.com/KarthikeyaPodicheti/portfolio-website) — [live demo](https://portfolio-agency-sooty.vercel.app)
- [National Dental Care](https://github.com/KarthikeyaPodicheti/ndc-clone)

## How to Run It

Just open `index.html` in any browser, or use VS Code's Live Server extension for auto-reload.

## Contact Me

- Email: [karthikeypodicheti25@gmail.com](mailto:karthikeypodicheti25@gmail.com)
- GitHub: [KarthikeyaPodicheti](https://github.com/KarthikeyaPodicheti)
