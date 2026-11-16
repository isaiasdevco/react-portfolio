# Isaías Cordero — Portfolio

My personal portfolio, built with React, Vite, and Tailwind CSS. I’m a Computer Engineering student at Universidad Católica de Santiago de Guayaquil (UCSG), focused on frontend development.

## Run locally

Use Node.js 24 LTS and npm. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

No environment variables or backend services are required to run the site.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Check JavaScript and React code with ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally after building |

## Structure

- `src/components/` — shared interface components.
- `src/pages/` — page compositions.
- `src/sections/` — page sections.
- `src/data/projects.js` — project descriptions, images, and links.
- `src/styles/` — theme variables and shared styles.
- `src/App.jsx` — application layout.
- `public/` — static assets and font licenses.

## Styling

Tailwind CSS uses its Vite plugin. Colors, fonts, and spacing are defined in `src/styles/tokens.css`. Layout uses utility classes; shared controls and base styles live in `globals.css`.

DM Sans and Instrument Serif are served locally through Fontsource. Both use the SIL Open Font License; copies are included in `public/licenses/`.

## Projects

The NovaWeb preview is a screenshot of [my published landing page](https://isaiasdevco.github.io/landing-page-project/), a project for a fictional digital studio. Its source is available in [landing-page-project](https://github.com/isaiasdevco/landing-page-project).

Medicina is an academic Laravel application for managing patients and doctors. Its screenshot was captured from a local installation using a separate database and fictitious demo data. It has no public demo linked.

## Validation

Run `npm run lint` and `npm run build` before committing. For visual changes, check the development server and production preview at mobile, tablet, and desktop widths, including keyboard navigation and reduced motion.
