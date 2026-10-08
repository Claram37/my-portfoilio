# Clara Kamande — Portfolio

Portfolio site for Clara Kamande, Product Designer in Nairobi. Built from the pen.dev design **Idea 06 · Full-bleed Chapters**.

## Stack

- React 19 + React Router 8 in framework mode, on Vite 8. Tailwind CSS 4 via `@tailwindcss/vite`, TypeScript strict. The owner codes in React themselves, so keep to plain React patterns
- Static site: `react-router.config.ts` sets `ssr: false` and pre-renders every route without URL params to its own HTML file in `build/client/` (real HTML per page, so link previews and first paint work). There is no server, so no `loader`s that need one; use static data or `clientLoader`
- The app lives in `src/` (`appDirectory`), not React Router's default `app/`: `src/root.tsx` (HTML document, shared shell, error boundary), `src/routes.ts` (route list), `src/routes/*.tsx` (pages)
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
- Homepage frame: `xEZwv` "Page · Home" (1440 wide). Sections in order: Nav `nd1At`, Hero `ERydX`, Chapter 01 · Dproz `tjTd4`, Chapter 02 · Fitcheck `F35VCK`, Chapter 03 · Safari Spirits `VolDJ`, More work `EGStP`, About teaser `lVZL5`, Contact banner `J1osG`
- The other 11 pages sit in the same row (case studies, About, Contact). Shared "Site/…" components: Nav, Button, Details Bar, Next Project, Contact Banner, Footer
- Phone/cover/desktop mockup screens in the design are illustrative placeholders, not Clara's real screens

## Conventions

- Tokens live in `src/styles/global.css` `@theme`: use `bg-dproz`, `text-muted-foreground`, `text-hero`, `px-page`, `max-w-content`, `rounded-device` etc. Add new tokens there, never hard-code hex values in components
- shadcn's colour names (`primary`, `secondary`, `muted`, `accent`…) are mapped onto the design tokens in `:root` of `global.css` (`primary` = ink, `muted` = surface, `muted-foreground` = the grey body text). There is no dark mode. If `shadcn init` or `add` rewrites `global.css`, keep that mapping and drop any font it adds (it tries to add Geist)
- Layout grid: 96px page margins (`px-page`) and 1248px content (`max-w-content`) at 1440; the nav uses 56px (`px-nav`)
- Pages: add the file in `src/routes/`, register it in `src/routes.ts` (`route('about', 'routes/about.tsx')`), and export `meta` with the title, description and `og:` tags (see `routes/home.tsx`). Unknown URLs fall through to `routes/not-found.tsx`
- Internal links use `<Link to>` from `react-router`, not `<a href>`
- Buttons are pills: use `@/components/Button` (`to`, `dark` / `soft` / `light`, optional `arrow`) for page links and CTAs. `@/components/ui/button` is shadcn's button for interactive UI
- Phones: use `@/components/Phone` with a screen image. Export only the phone's inner "Screen" node from pen.dev at 2× into `src/assets/<section>/`; the bezel, corners and shadow are CSS and scale with the phone's width
- Absolutely placed design groups (device fan, chips) are converted to percentages of their stage so they scale
- Each project is a full-width colour chapter; keep sections as their own components in `src/components/`
- Style: clean, minimal, premium; generous whitespace, strong type, image-led, one accent per chapter. Keep copy trimmed to what the design shows
- Match the design's text, spacing and radii exactly; the design is desktop-only, so work out tablet and mobile layouts (fluid type is already in the tokens)
