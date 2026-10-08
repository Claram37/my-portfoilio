import type { Route } from './+types/home';
import Hero from '@/components/Hero';

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

const Home = () => {
  return <Hero />;
};

export default Home;
