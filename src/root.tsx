import '@fontsource-variable/montserrat';
import '@fontsource-variable/open-sans';

import type { Route } from './+types/root';
import App from '@/components/App';
import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from '@/components/Layout';
import './styles/global.css';

export const links: Route.LinksFunction = () => [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }];

// React Router looks these up by name: Layout is the HTML document around every page,
// the default export is the shared page shell, and ErrorBoundary is shown when a page crashes
export { Layout, ErrorBoundary };
export default App;
