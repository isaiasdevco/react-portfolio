# Isaías Cordero — Portfolio

My personal portfolio, built with React, Vite, React Router, and Tailwind CSS. I’m a sixth-semester Computer Engineering student at Universidad Católica de Santiago de Guayaquil (UCSG), with training in programming, web development, and databases.

## Run locally

Use Node.js 24 LTS and npm. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

No environment variables or backend services are required to run the site.

Home is available at `/`, the project gallery at `/projects`, my background and skills at `/about`, and the contact form at `/contact`. Unknown routes show a page with links back to the site.

The gallery filters projects by technology, including partial names regardless of capitalization. It shows the result count and a message when nothing matches.

The contact form validates the name, email, and message, then prepares a link to an email draft. The visitor opens, reviews, and sends it in their email application; this site does not deliver email through a backend service.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Check JavaScript and React code with ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally after building |

## Deployment

Use the Vite preset on Vercel with Node.js 24, build command `npm run build`, and output directory `dist`. No environment variables are required.

`vercel.json` routes page requests to `index.html` so React Router can handle direct visits and refreshes on `/projects`, `/about`, and `/contact`.

## Structure

- `src/components/` — shared interface components.
- `src/pages/` — page compositions.
- `src/sections/` — page sections.
- `src/data/projects.js` — project descriptions, images, and links.
- `src/data/skills.js` — technologies used across my projects.
- `src/data/profile.js` — profile and contact information.
- `src/hooks/useTheme.js` — system preference and saved theme choice.
- `src/styles/` — theme variables and shared styles.
- `src/App.jsx` — shared layout, routes, and navigation focus.
- `public/` — static assets and font licenses.

## Styling

Tailwind CSS uses its Vite plugin. Colors, fonts, and spacing are defined in `src/styles/tokens.css`. Layout uses utility classes; shared controls and base styles live in `globals.css`.

The theme follows your system setting until you choose light or dark with the header button. Your choice is saved locally when the browser allows it.

DM Sans and Instrument Serif are served locally through Fontsource. Both use the SIL Open Font License; copies are included in `public/licenses/`.

## Projects

The NovaWeb preview is a screenshot of [my published landing page](https://isaiasdevco.github.io/landing-page-project/), a project for a fictional digital studio. Its source is available in [landing-page-project](https://github.com/isaiasdevco/landing-page-project).

Medicina is an academic Laravel application for managing patients, doctors, and their assignments, with PDF and QR output. Its screenshot uses fictitious demo records.

## Validation

Run `npm run lint` and `npm run build` before committing. For visual changes, check the development server and production preview at mobile, tablet, and desktop widths, including keyboard navigation and reduced motion.

Check contact validation and review the generated draft with a configured email application.
