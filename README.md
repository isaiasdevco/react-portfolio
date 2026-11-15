# Isaías Cordero — Portfolio

My personal portfolio, built as Task 2 of the AppRo8 Frontend Development Internship. I’m a Computer Engineering student at Universidad Católica de Santiago de Guayaquil (UCSG).

## Current stage

Block 1 establishes the React app and visual foundation: warm cream backgrounds, forest green accents, editorial typography, and a responsive layout. The initial screen introduces me and provides a working link to my GitHub profile. It is a starting point, not the finished portfolio.

Projects, full navigation, contact, light/dark mode, and deployment will be added in later blocks. Project screenshots and a CV will only be included when the real files are available.

## Run locally

Use Node.js 24 LTS and npm. If you use nvm, run `nvm use` first.

```sh
npm ci
npm run dev
```

No environment variables, API keys, or backend services are needed for this stage.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Check JavaScript and React code with ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally after building |

## Structure

```text
react-portfolio/
├── public/
│   ├── favicon.svg
│   └── licenses/
│       ├── dm-sans.txt
│       └── instrument-serif.txt
├── src/
│   ├── components/ui/ArrowUpRight.jsx
│   ├── sections/FoundationPreview.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── tokens.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── .nvmrc
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

`App.jsx` provides the basic page frame. `FoundationPreview.jsx` holds the temporary introduction screen. Reusable UI goes in `components/ui`; layout components and project data will be added when they are needed.

## Styling

Tailwind CSS uses its Vite plugin. Colors, fonts, spacing, and shape tokens live in `src/styles/tokens.css`, using Tailwind’s CSS-first theme configuration. Layout uses utility classes; shared controls, typography, and accessibility rules live in `globals.css`.

Instrument Serif and DM Sans are bundled locally through Fontsource, so the page does not request Google Fonts. Both fonts use the SIL Open Font License; copies are included in `public/licenses/` and distributed with the site. System font fallbacks are also configured.

The layout starts with one column and uses a 12-column grid on desktop. Links have visible keyboard focus, the page includes a skip link, and reduced-motion preferences disable smooth scrolling and transitions.

## Validation

For Block 1, the development server and production preview were checked in Chromium at 375, 768, and 1280 px. Checks covered font loading, layout changes, horizontal overflow, internal links, keyboard access, reduced motion, and browser errors. Automated axe checks found no WCAG A/AA violations on the initial screen; this is not a full accessibility audit.

Run lint and build before committing. There is no unit test suite yet; this stage has no application state or business logic to test.

## Next block

Build the responsive header and main hero on this foundation. Review the real NovaWeb and Medicina repositories before presenting their features or adding project previews. Add routing, project state, form validation, and theme switching in the appropriate later blocks.
