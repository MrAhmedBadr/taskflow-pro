# TaskFlow Pro

A premium SaaS project-management application — Apple-clean surfaces meet Linear.app precision. Built with React 19, TypeScript, Vite, TailwindCSS, and a production-grade architecture.

> **Status:** Foundation + marketing site + auth + dashboard shell are complete and runnable. The data-heavy product features (CRUD, Kanban DnD, calendar, real-time Firestore) are scaffolded and documented in the roadmap below.

## ✨ What's built

- **Design system** — HSL token-based theming, light/dark/system modes (no flash on load), soft shadows, glassmorphism, custom scrollbars, reduced-motion support.
- **Landing page** — animated aurora hero with a live app mockup, feature grid + bento, interactive monthly/yearly pricing, masonry testimonials, accordion FAQ, validated contact form, CTA, and footer.
- **Authentication UI** — split-screen Login / Register / Forgot-password with React Hook Form + Zod validation, password visibility, and social-auth entry points.
- **Dashboard shell** — collapsible sidebar, glass topbar with search, KPI stat cards, Recharts velocity + status analytics, and a live activity feed.
- **App infrastructure** — lazy-loaded routes with a branded loader, top-level error boundary, animated 404, scroll restoration, toast notifications, and a configured React Query client.
- **Quality** — strict TypeScript (passes `tsc -b` with `noUnusedLocals`), feature-based folders, reusable primitives, code-split vendor chunks, and SEO/OG meta tags.

## 🧱 Tech stack

React 19 · TypeScript · Vite 6 · TailwindCSS 3 · shadcn-style primitives (Radix) · React Router 7 · TanStack Query · Zustand · React Hook Form · Zod · Framer Motion · Recharts · Lucide · Sonner · Firebase (Auth / Firestore / Storage).

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check + production build
npm run preview    # preview the production build
npm run typecheck  # strict type-check only
```

### Firebase (optional)

The app runs in **demo mode** with mock data out of the box. To enable real auth & data, copy `.env.example` to `.env` and fill in your Firebase project keys. `src/lib/firebase.ts` initializes services lazily and `isFirebaseConfigured` gates real backend calls.

## 📂 Project structure

```
src/
├── components/
│   ├── ui/            # Reusable primitives (Button, Card, Input, Badge, Avatar…)
│   └── common/        # Logo, ThemeToggle, Reveal, ErrorBoundary, loaders
├── features/
│   ├── landing/       # Marketing sections + content data
│   ├── auth/          # AuthLayout, schemas, social auth
│   └── dashboard/     # Sidebar, charts, mock data
├── pages/             # Route-level components (lazy-loaded)
├── providers/         # ThemeProvider
├── store/             # Zustand stores (theme…)
├── lib/               # utils, constants, query-client, firebase
└── types/             # Shared domain models
```

## 🗺️ Roadmap — remaining product features

The foundation is intentionally structured so each of these slots into an existing feature folder:

| Area | Plan |
| --- | --- |
| **Auth wiring** | Connect Firebase Auth to the existing forms + `ProtectedRoute` guard + `useAuth` hook / Zustand `auth.store`. |
| **Projects & Tasks CRUD** | Firestore collections, React Query mutations with optimistic updates, `useProjects` / `useTasks` hooks. |
| **Kanban** | Drag-and-drop columns (status), reorder + cross-column moves persisted to Firestore. |
| **Calendar & Timeline** | Month/week views, drag-to-reschedule due dates. |
| **Real-time** | Firestore `onSnapshot` listeners feeding React Query cache for live updates & presence. |
| **Collaboration** | Comments, attachments (Firebase Storage upload), mentions, team invites & roles. |
| **Filters & search** | Advanced filter bar, saved views, pagination/infinite scroll. |
| **Settings & Profile** | Account, workspace, notification preferences, avatar upload. |

## 📐 Design language

- **Radius** `0.85rem` base with a smooth scale.
- **Primary** indigo→violet gradient; semantic success/warning/destructive tokens.
- **Motion** `cubic-bezier(0.16, 1, 0.3, 1)` easing, scroll-reveal, and layout animations — all respecting `prefers-reduced-motion`.

---

Built as a portfolio-grade reference for a modern, production-quality React SaaS front end.
