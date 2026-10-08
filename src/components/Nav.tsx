import { Link } from "react-router";
import { cn } from "@/lib/utils";

// "Work" is hidden on phones, where it doesn't fit; the homepage is the work and the hero links to it
const links = [
  { to: "/work", label: "Work", className: "max-sm:hidden" },
  { to: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header>
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-6 px-nav py-6"
      >
        <Link
          to="/"
          className="font-display text-lg font-semibold whitespace-nowrap"
        >
          Clara Kamande
        </Link>
        <div className="flex items-center gap-8 max-sm:gap-5">
          {links.map(({ to, label, className }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "text-base leading-5 transition-colors hover:text-muted-foreground",
                className,
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-ink px-4 py-2 text-sm leading-5 font-semibold text-paper transition hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
