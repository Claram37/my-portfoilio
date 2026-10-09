import type { Route } from './+types/not-found';
import MessagePage from '@/components/MessagePage';
import site from '@/data/site';
import { pageMeta } from '@/lib/meta';

export const meta: Route.MetaFunction = () => pageMeta({ title: `Page not found · ${site.name}` });

const NotFound = () => {
  return <MessagePage title="Page not found" />;
};

export default NotFound;
