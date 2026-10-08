import type { Route } from './+types/home';

const title = 'Clara Kamande · Product Designer';
const description =
  "Hi, I'm Clara. Two years shaping mobile-first products for job seekers, employers and small business owners across East Africa.";

// The page's <title> and the text shown in link previews (LinkedIn, WhatsApp, Slack)
export const meta: Route.MetaFunction = () => [
  { title },
  { name: 'description', content: description },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
];

export default function Home() {
  return (
    <section className="mx-auto flex min-h-screen max-w-content flex-col items-center justify-center gap-6 px-page text-center">
      <p className="rounded-full bg-pill px-4 py-2 text-sm font-medium">Product Designer · Nairobi, Kenya</p>
      <h1 className="text-hero">
        I design products people can actually use,
        <br />
        and I can help build them too.
      </h1>
      <p className="max-w-2xl text-lead text-muted-foreground">
        Setup check: Montserrat, Open Sans, colours and type scale are loaded. The real homepage comes next.
      </p>
      <div className="flex gap-3">
        <span className="size-10 rounded-full bg-dproz" />
        <span className="size-10 rounded-full bg-fitcheck" />
        <span className="size-10 rounded-full bg-safari" />
        <span className="size-10 rounded-full bg-contact" />
      </div>
    </section>
  );
}
