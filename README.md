# Fizzy Labs v1.0

The source for `fizzylabs.tech`: a small, typography-first personal technology portfolio.

Fizzy Labs is independent from the sibling `fizzyos` project. It has its own source, dependencies, Git history, build output, and local server.

## Stack

- React and TypeScript
- Vite
- React Router
- Plain CSS
- Static Cloudflare Pages-compatible output

No backend, database, analytics, or paid service is required.

## Local development

Requirements: a current Node.js LTS release and npm.

```sh
npm install
npm run dev
```

The development server uses `http://127.0.0.1:4174`. Fizzy OS can run separately on port 4173.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`.

## Update content

Most portfolio content lives in `src/content/site.ts`:

- Edit the `projects` array to change homepage rows and project pages.
- Add a project by following the existing `Project` shape; its detail route is generated at `/projects/<slug>`.
- Set real GitHub and Instagram URLs in `siteConfig.socials`.
- Set `siteConfig.email.url` to `mailto:hello@fizzylabs.tech` only after that mailbox works.
- The future Fizzy OS destination is stored as `futureUrl` and currently appears as a non-clickable Coming Soon address.

The About copy is in `src/pages/AboutPage.tsx`. Global layout and visual design are in `src/styles.css`.

## Cloudflare Pages preparation

Create a separate Cloudflare Pages project for this repository and use:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`

The `public/_redirects` file provides SPA routing for project and About URLs. Do not attach `os.fizzylabs.tech` to this Pages project; Fizzy OS should receive its own independent project later.

After the first Pages deployment is reviewed, add `fizzylabs.tech` as a custom domain in that Pages project. Cloudflare will show the exact DNS record it needs. Review existing MX/TXT email records before changing nameservers or DNS, and do not remove them while connecting the website.
