import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrowserProps {
  src: string;
  alt: string;
  url: string;
  className?: string;
  shadow?: string;
  loading?: "eager" | "lazy";
}

// A desktop browser window: a grey top bar with three window dots and an address bar, above a screenshot
// that sets the window's height. Scaled to whatever width it is given: the window-* tokens are shares of
// the window's width, so they need the @container. The address only shows from 1024px, where it fits
const Browser = ({
  src,
  alt,
  url,
  className,
  shadow,
  loading = "lazy",
}: BrowserProps) => {
  return (
    <div className={cn("@container", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-window border border-window-line bg-paper",
          shadow,
        )}
      >
        <div
          className="relative flex h-window-bar items-center gap-window-gap border-b border-window-line bg-window-bar px-window-pad"
          aria-hidden="true"
        >
          <span className="size-window-dot rounded-full bg-window-close"></span>
          <span className="size-window-dot rounded-full bg-window-minimise"></span>
          <span className="size-window-dot rounded-full bg-window-zoom"></span>
          <span className="absolute top-1/2 left-1/2 flex aspect-440/28 w-window-address -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-window-address border border-window-line bg-paper text-xs leading-none text-muted-foreground">
            <span className="hidden items-center gap-1 lg:flex">
              <Lock className="size-3" />
              {url}
            </span>
          </span>
        </div>
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="block w-full"
        />
      </div>
    </div>
  );
};

export default Browser;
