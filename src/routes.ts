import { type RouteConfig, index, route } from '@react-router/dev/routes';

// Each page is listed here. Add one with route('about', 'routes/about.tsx')
export default [
  index('routes/home.tsx'),
  // Any URL that matches nothing above
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
