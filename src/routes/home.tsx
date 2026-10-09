import MoreWork from "@/components/MoreWork";
import type { Route } from "./+types/home";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import site from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const meta: Route.MetaFunction = () =>
  pageMeta({ title: `${site.name} · ${site.role}`, description: site.intro });

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <MoreWork />
    </>
  );
};

export default Home;
