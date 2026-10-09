import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";
import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// A project's colours: its tab's icon tile and tint fill, its stage, and the caption and link on the stage
export interface ProjectTheme {
  tile: string;
  tint: string;
  stage: string;
  caption: string;
  link: string;
}

export interface Project {
  name: string;
  kind: string;
  icon: LucideIcon;
  caption: string;
  caseStudy: string;
  theme: ProjectTheme;
  visual: ReactNode;
}

interface ProjectTabProps {
  project: Project;
  index: number;
  onFilled: () => void;
}

const ProjectTab = ({ project, index, onFilled }: ProjectTabProps) => {
  const { tile, tint } = project.theme;

  return (
    <TabsTrigger
      value={index}
      className="group relative flex min-h-15 items-center gap-3 overflow-hidden rounded-lg bg-tab px-4 py-2 text-left text-base font-medium text-tab-inactive transition-colors focus-ring hover:text-ink data-active:text-ink"
    >
      <span
        className={cn(
          "absolute inset-0 hidden origin-left animate-tab-fill group-hover/tabs:paused group-data-active:block motion-reduce:animate-none",
          tint,
        )}
        onAnimationEnd={onFilled}
        aria-hidden="true"
      ></span>

      <span
        className={cn(
          "relative flex size-6 shrink-0 items-center justify-center rounded-sm text-paper",
          tile,
        )}
      >
        <project.icon className="size-4" aria-hidden="true" />
      </span>
      <span className="relative flex flex-col">
        {project.name}
        <span className="text-sm font-normal">{project.kind}</span>
      </span>
    </TabsTrigger>
  );
};

export default ProjectTab;
