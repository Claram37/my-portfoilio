import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  dark: "bg-ink text-paper hover:bg-ink/85",
  soft: "bg-surface-strong text-ink hover:brightness-95",
  light: "bg-paper text-ink hover:bg-paper/90",
};

const sizes = {
  md: "px-6 py-4 text-base leading-5 max-sm:px-5", // button
  sm: "px-4 py-2 text-sm leading-5", // contact pill
};

interface ButtonProps {
  to?: string;
  type?: "button" | "submit";
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

const Button = ({
  to,
  type = "button",
  variant = "dark",
  size = "md",
  arrow = false,
  className,
  children,
}: ButtonProps) => {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full font-semibold transition focus-ring",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  return to ? (
    <Link to={to} className={classes}>
      {content}
    </Link>
  ) : (
    <button type={type} className={classes}>
      {content}
    </button>
  );
};

export default Button;
