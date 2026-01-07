

A responsive React + Vite prototype for a local junk removal business. This repo contains UI components, booking flow screens, and shared design primitives used to demonstrate a service booking experience.

**Quick Snapshot**
- **Tech:** React 18, Vite, TypeScript (inferred), Radix UI primitives, Tailwind-style CSS
- **Local dev:** `npm install` then `npm run dev`
- **Build:** `npm run build`

**Table of Contents**
- **Project Overview**
- **Tech Stack**
- **Getting Started**
- **Project Structure**
- **Scripts**
- **Development Notes**
- **Deployment**
- **Contributing**
- **Credits & License**

**Project Overview**

This repository is a front-end prototype for a junk removal service. It includes a multi-step booking flow, components for selecting junk type, schedule, volume, and a simple marketing home page.

**Tech Stack**
- **Framework:** React 18
- **Bundler / Dev server:** Vite
- **UI primitives:** Radix UI packages (various components under `@radix-ui/*`)
- **Other libs:** `react-day-picker`, `react-hook-form`, `lucide-react`, `recharts`, `embla-carousel-react`, `sonner`, and utility libs like `clsx` and `class-variance-authority`.

**Getting Started**

Prerequisites
- Node.js (v18+ recommended)
- npm (or use pnpm/yarn if you prefer — adjust commands accordingly)

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
# open http://localhost:5173 (default vite port)
```

Build for production

```bash
npm run build
```

Preview production build

```bash
# either install vite globally or use npx
npx vite preview
```

**Available Scripts**
- `dev` — start Vite dev server
- `build` — produce production build via Vite

If you want a `preview` script in `package.json`, add: `"preview": "vite preview"`.

**Project Structure (important files/folders)**
- `index.html` — app entry
- `src/main.tsx` — React bootstrap
- `src/App.tsx` — top-level app
- `src/index.css` & `src/styles/globals.css` — global styles
- `src/components/` — UI components and screens
	- `booking/` — booking flow screens (`BookingFlow.tsx`, `ScheduleStep.tsx`, `VolumeSelector.tsx`, etc.)
	- `home/` — home page sections and marketing components
	- `shared/` — reusable small components like `Button.tsx`, `FormInput.tsx`
	- `ui/` — design system primitives and wrappers (Radix wrappers, inputs, dialogs, etc.)

**Development Notes & Conventions**
- The project uses component-based organization grouped by feature (e.g., `booking/`) and a shared `ui/` primitives folder for low-level building blocks.
- Forms often use `react-hook-form` for validation and state.
- UI components rely on Radix primitives; look under `src/components/ui` for wrappers and utilities.
- Styles are split between `index.css` and `styles/globals.css` — update those for global design tokens.

**Deployment**
- This is a static front-end app; recommended hosts: Vercel, Netlify, or any static hosting that supports a single-page app. Configure the deploy to serve `dist/` after `npm run build`.

**Contributing**
- Create an issue for any bug or enhancement.
- For code contributions: fork → branch → PR. Keep changes focused and provide a short description of intent.

**Credits & License**
- Built as a private prototype. No license file included — add a `LICENSE` if you intend to open-source it.
- UI primitives and small components use Radix UI and several open-source libraries as listed in `package.json`.

---

