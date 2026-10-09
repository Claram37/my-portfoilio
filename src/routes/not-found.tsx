import type { Route } from './+types/not-found';
import MessagePage from '@/components/MessagePage';

export const meta: Route.MetaFunction = () => [{ title: 'Page not found · Clara Kamande' }];

const NotFound = () => {
  return <MessagePage title="Page not found" />;
};

export default NotFound;
