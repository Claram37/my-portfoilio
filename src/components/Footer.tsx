import site from "@/data/site";

const stack = ["React", "TypeScript", "Tailwind CSS"];

const Footer = () => {
  return (
    <footer className="px-page pb-10">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t pt-6 text-sm text-muted-foreground">
        <p suppressHydrationWarning>
          Designed and built by {site.name} · © {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <p>Made with</p>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-pill px-3 py-1 text-xs font-semibold text-ink-soft"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
