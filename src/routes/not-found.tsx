import type { Route } from './+types/not-found';
import Button from '@/components/Button';

export const meta: Route.MetaFunction = () => [{ title: 'Page not found · Clara Kamande' }];

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-6 px-page py-32 text-center">
      <h1 className="text-hero">Page not found</h1>
      <Button to="/">Back home</Button>
    </section>
  );
}
