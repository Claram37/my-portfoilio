# Clara Kamande — Portfolio

Portfolio site for Clara Kamande, Product Designer in Nairobi. Built from the pen.dev design direction **Idea 06 · Full-bleed Chapters**, in its **Home v2 · Feature tabs** version.

## Stack

- React 19 + React Router 8 in framework mode, on Vite 8. Tailwind CSS 4 via `@tailwindcss/vite`, TypeScript strict. The owner codes in React themselves, so keep to plain React patterns
- Static site: `react-router.config.ts` sets `ssr: false` and pre-renders every route without URL params to its own HTML file in `build/client/` (real HTML per page, so link previews and first paint work). There is no server, so no `loader`s that need one; use static data or `clientLoader`
- The app lives in `src/` (`appDirectory`), not React Router's default `app/`: `src/root.tsx` (the root route: imports the fonts and global CSS, and re-exports the HTML document `Layout`, shared shell `App` and `ErrorBoundary` from `src/components/`), `src/routes.ts` (route list), `src/routes/*.tsx` (pages)
- Component library: shadcn/ui, style `base-nova` (Base UI primitives), configured in `components.json`. Components are copied into `src/components/ui/` and are ours to edit
- Fonts: Montserrat for headings (`h1`–`h4`, `font-display`, shadcn's `font-heading`) and Open Sans for body (`font-sans`, the default), via `@fontsource-variable/*` imported in `src/root.tsx`. The design file still uses Sora; the code overrides it on purpose
- Icons: `lucide-react` (`import { ArrowRight } from 'lucide-react'`); the design uses Lucide icons
- Images: `vite-imagetools` converts every PNG/JPG import to WebP (`import screen from '@/assets/hero/x.png'` gives the WebP URL), set in `vite.config.ts`
- Import alias: `@/` is `src/` (`import { Button } from '@/components/ui/button'`)

```sh
npm run dev         # http://localhost:5173
npm run build       # static site in build/client/
npm run preview     # serve build/client/
npm run typecheck   # generate route types, then tsc
npx shadcn@latest add dialog   # add a shadcn/ui component
```

## Design source

- File: `C:\Users\Joe\Desktop\images\porfoilio-ideas.pen` (read it through the pencil MCP; it must be open in pen.dev)
- Homepage frame: `RneR8` "Page · Home v2 · Feature tabs" (1440 wide). Sections in order: Nav `ldxnR`, Hero `DywD6`, Project 01 · Dproz `BlBfv`, Project 02 · Dproz Fitcheck `r8BIvg`, Project 03 · ShopXray `P8EYO`, More work `hOBYs`, About teaser `Zs391`, Contact banner `i4QwKx`
- Don't build from `xEZwv` "Page · Home" (the earlier v1 layout with full-bleed colour chapters) or `UpWYc` (the archived Safari Spirits project section, replaced by ShopXray)
- "Spec · Feature tabs" `r1RONp` describes how the project tabs move and lists every tab's caption
- Each tab's screen is a 1248×640 component named `<Project>/Tab screen · <n> <tab>`, e.g. `rIDiR` "Dproz/Tab screen · 1 Guided onboarding"
- Shared "Site/…" components: Nav, Button, Feature Tab, Details Bar, Next Project, Contact Banner, Footer, Screen Placeholder (phone and desktop)
- The site map `rzyDd` lists the 12 planned pages (case studies, project pages, concepts, About, Contact); so far only the homepage has a page frame
- The "… · Real mockups" rows (Dproz, Fitcheck, ShopXray and others, from x 10000) are components built from Clara's real screens, and the tab screens use them. Grey screen placeholders and the older `Phone · …`, `Cover · …` and `Desktop · …` components are illustrative, not her real screens

## Conventions

- Tokens live in `src/styles/global.css` `@theme`: use `bg-dproz`, `text-muted-foreground`, `text-hero`, `px-page`, `max-w-content`, `rounded-device` etc. Add new tokens there, never hard-code hex values in components
- shadcn's colour names (`primary`, `secondary`, `muted`, `accent`…) are mapped onto the design tokens in `:root` of `global.css` (`primary` = ink, `muted` = surface, `muted-foreground` = the grey body text). There is no dark mode. If `shadcn init` or `add` rewrites `global.css`, keep that mapping and drop any font it adds (it tries to add Geist)
- Layout grid: 96px page margins (`px-page`) and 1248px content (`max-w-content`) at 1440; the nav uses 56px (`px-nav`)
- Style with Tailwind classes only: no px or rem values in components (`py-[26px]`, `text-[17px]`, `size={17}`). Use the scale (`py-6`, `text-lg`, `max-w-160`, `size-4`) or, when nothing fits, add a token to `@theme` and use its class (`shadow-phone`, `p-bezel`). Percentages for absolutely placed groups are the one exception
- Sizing rules (they override the design's values):
  - Padding, margins and gaps are multiples of 4px: whole Tailwind steps (`p-4`, `gap-6`), never `.5` steps (`gap-2.5`) or odd arbitrary values (`py-[26px]`)
  - Font sizes sit on the scale 12 14 16 18 20 24 28 32 36 40 48 56 64 72 80 (steps of 2 up to 20, of 4 up to 40, of 8 above)
  - Every card has a 16px radius (`rounded-card`)
  - Round a design value that's off the rules to the nearest allowed one
  - Re-check shadcn components after `npx shadcn add`, since they ship with `.5` spacing steps
- Responsive: heading sizes and page margins step up at `md` (768), `lg` (1024), `xl` (1280) and `2xl` (1440, the design width, redefined in `@theme`) instead of scaling with the viewport, so every size stays on the scale. The per-breakpoint values are in the `:root` block and table in `global.css`
- Components are arrow functions in the rafce shape: `const Hero = () => { return (…); };` with `export default Hero;` at the bottom. Route modules too. Components React Router needs as named exports (`Layout`, `ErrorBoundary`) live in `src/components/` like any other and are re-exported from `root.tsx`; `meta` and `links` are `export const` arrows. No `import React` line, since the JSX transform doesn't need it. `src/components/ui/` keeps shadcn's own style
- Pages: add the file in `src/routes/`, register it in `src/routes.ts` (`route('about', 'routes/about.tsx')`), and export `meta` with the title, description and `og:` tags (see `routes/home.tsx`). Unknown URLs fall through to `routes/not-found.tsx`
- Internal links use `<Link to>` from `react-router`, not `<a href>`
- Buttons are pills: use `@/components/Button` (`to`, `dark` / `soft` / `light`, optional `arrow`) for page links and CTAs. `@/components/ui/button` is shadcn's button for interactive UI
- Phones: use `@/components/Phone` with a screen image. Export only the phone's inner "Screen" node from pen.dev at 2× into `src/assets/<section>/`; the bezel, corners and shadow are CSS and scale with the phone's width
- Browser windows: use `@/components/Browser` with a desktop screenshot and its `url`; the top bar, corners and border are CSS (the `window-*` tokens) and scale with the window's width. Clara's original screenshots are in `C:\Users\Joe\Desktop\images\portfolio-assets\`, and when one has the same proportions as the design's screen node, copy it rather than exporting
- `cn` (`src/lib/utils.ts`) only knows the text sizes listed there. When you add a `--text-*` size to `@theme`, add its name to that list, or `cn("text-feature", "text-paper")` reads it as a colour and drops it
- `src/components/ui/tabs.tsx` is cut down to Base UI's parts with no styles of its own; style tabs where they're used (the open tab has `data-active`)
- Absolutely placed design groups (the hero's device fan, the mockups on each tab screen) are converted to percentages of their stage so they scale
- The three homepage projects share one layout: a head (number label, heading, "Read the case study" button), four feature tabs, and a stage in the project's colour showing the open tab's screen and caption. Keep sections as their own components in `src/components/`
- Feature tabs play like a slideshow (spec `r1RONp`): only the open tab fills, left to right over 6 seconds, then the next tab opens and its screen and caption fade in, looping back after the fourth. Clicking a tab opens it straight away and restarts its timer
- Style: clean, minimal, premium; generous whitespace, strong type, image-led, one accent per project. Keep copy trimmed to what the design shows
- Match the design's text and layout, with spacing, type and radii snapped to the sizing rules above; the design is desktop-only, so work out tablet and mobile layouts
