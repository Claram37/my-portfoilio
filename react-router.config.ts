import type { Config } from '@react-router/dev/config';

export default {
  // The app lives in src/ (React Router's default is app/)
  appDirectory: 'src',
  // No server: every page is rendered to its own HTML file at build time.
  // getStaticPaths() lists the routes without URL params, so the catch-all not-found route is skipped
  ssr: false,
  prerender: ({ getStaticPaths }) => getStaticPaths(),
} satisfies Config;
