# Homepage Dashboard Design

A beautiful, customizable homepage dashboard for organizing and managing bookmarks — a personal start page with grid, list, and kanban views, built with Next.js.

## Features

- **Bookmark management** — add, edit, and delete bookmarks with titles, URLs, descriptions, and tags
- **Multiple views** — grid, list, and kanban layouts for browsing your links
- **Search** — instant search across all bookmarks
- **Favorites** — star frequently used links for quick access
- **Tags & filtering** — organize bookmarks with tags and filter by them
- **Stats overview** — activity and analytics cards at a glance
- Dark/light theme toggle
- Responsive design — works on desktop and mobile

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router, static export)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
- [shadcn/ui](https://ui.shadcn.com/) components (Radix UI primitives)
- [Lucide](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # run production build
```

Node.js 18+ recommended. If you hit peer-dependency conflicts during install, use:

```bash
npm install --legacy-peer-deps
```

## Project Structure

```
app/                  # Next.js App Router pages and layout
  page.tsx            # bookmark dashboard (main view)
components/           # reusable UI
  theme-provider.tsx
  ui/                 # shadcn/ui primitives
hooks/                # custom React hooks
lib/                  # utilities
public/               # static assets
styles/               # global styles
```

## Environment Variables

None required — the app runs fully client-side with no backend or API keys.

## Deployment

The app is statically exported (`output: 'export'` in `next.config.mjs`), so it can be hosted anywhere that serves static files:

```bash
npm run build   # outputs to ./out
```

Notes:

- The repo is synced from a v0.app project and was originally deployed on Vercel.
- When deployed under a subpath (e.g. GitHub Pages project pages), `next.config.mjs` sets `basePath: '/homepage-dashboard-design'`. Remove `basePath` (and keep `output: 'export'`) when deploying to a root domain or Vercel, otherwise assets will resolve incorrectly.

## Built by

Built by Girish Lade — https://ladestack.in
