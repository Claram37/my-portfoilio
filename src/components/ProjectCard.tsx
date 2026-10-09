import type { MoreProject } from "@/data/projects/types";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

interface ProjectCardProps {
  project: MoreProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li className="group relative flex flex-col">
      <div className="isolate aspect-10/9 overflow-hidden rounded-card bg-surface">
        <div className="size-full transition-transform duration-500 group-hover:scale-103 motion-reduce:transition-none">
          {project.cover}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold">
          <Link
            to={project.to}
            className="focus-ring after:absolute after:inset-0"
          >
            {project.name}
          </Link>
        </h3>
        {project.tag && (
          <span className="shrink-0 rounded-full bg-surface-strong px-3 py-1 text-xs font-semibold text-muted-foreground">
            {project.tag}
          </span>
        )}
      </div>

      <p className="mt-2 text-base text-muted-foreground">{project.summary}</p>

      <span
        aria-hidden="true"
        className="mt-auto pt-4 inline-flex items-center gap-2 text-base font-bold"
      >
        View project
        <ChevronRight className="size-4" />
      </span>
    </li>
  );
};

export default ProjectCard;
