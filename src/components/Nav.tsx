import { Link } from "react-router";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/work", label: "Work", className: "max-sm:hidden" },
  { to: "/about", label: "About" },
];

const Nav = () => {
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
          <Button to="/contact" size="sm">
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
