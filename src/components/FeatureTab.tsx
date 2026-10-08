import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";
import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface ProjectTab {
  label: string;
  icon: LucideIcon;
  caption: string;
  visual: ReactNode;
}

// The icon tile and tint of tabs 1–4, the same in every project
const colors = [
  { tile: "bg-tab-blue", tint: "bg-tab-blue-tint" },
  { tile: "bg-tab-purple", tint: "bg-tab-purple-tint" },
  { tile: "bg-tab-green", tint: "bg-tab-green-tint" },
  { tile: "bg-tab-orange", tint: "bg-tab-orange-tint" },
];

interface FeatureTabProps {
  tab: ProjectTab;
  index: number;
  onFilled: () => void;
}

// One of the tabs above a project's stage ("Site/Feature Tab"). While it's open, its tint fills over
// 6 seconds and then calls onFilled. Hovering the tabs or the stage pauses the fill; with reduced motion
// the tint just shows in full and never finishes, so the tabs don't move on by themselves
const FeatureTab = ({ tab, index, onFilled }: FeatureTabProps) => {
  const { tile, tint } = colors[index % colors.length];

  return (
    <TabsTrigger
      value={index}
      className="group relative flex min-h-15 items-center gap-3 overflow-hidden rounded-lg bg-tab px-4 py-2 text-left text-base font-medium text-tab-inactive transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink data-active:text-ink"
    >
      <span
        className={cn(
          "absolute inset-0 hidden origin-left animate-tab-fill group-hover/tabs:paused group-data-active:block motion-reduce:animate-none",
          tint,
        )}
        onAnimationEnd={onFilled}
        aria-hidden="true"
      ></span>
      {/* relative so the tile and label sit above the absolutely placed tint */}
      <span
        className={cn(
          "relative flex size-6 shrink-0 items-center justify-center rounded-sm text-paper",
          tile,
        )}
      >
        <tab.icon className="size-4" aria-hidden="true" />
      </span>
      <span className="relative">{tab.label}</span>
    </TabsTrigger>
  );
};

export default FeatureTab;
