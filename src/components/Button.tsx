import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const variants = {
  dark: 'bg-ink text-paper hover:bg-ink/85',
  soft: 'bg-surface-strong text-ink hover:brightness-95',
  light: 'bg-paper text-ink hover:bg-paper/90',
};

type ButtonProps = {
  to: string;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

// The design's pill button ("Site/Button"). It's a link; for interactive UI use @/components/ui/button
export default function Button({ to, variant = 'dark', arrow = false, className, children }: ButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full px-6 py-4 text-base leading-5 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink max-sm:px-5',
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </Link>
  );
}
