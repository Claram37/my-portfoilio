import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import type { Route } from './+types/root';
import Button from '@/components/Button';
import Nav from '@/components/Nav';
import './styles/global.css';

export const links: Route.LinksFunction = () => [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }];

// The HTML document around every page
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Shared page shell; the current route renders into <Outlet />
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// Shown when a page crashes. Unknown URLs go to routes/not-found.tsx instead
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <main className="flex flex-col items-center gap-6 px-page py-32 text-center">
      <h1 className="text-hero">Something went wrong</h1>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="max-w-full overflow-x-auto text-left text-sm text-muted-foreground">{error.stack}</pre>
      )}
      <Button to="/">Back home</Button>
    </main>
  );
}
