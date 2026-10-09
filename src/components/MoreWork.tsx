import { useId } from "react";
import ProjectCard from "./ProjectCard";
import moreWork from "@/data/projects/moreWork";
import SectionHead from "./SectionHead";

const MoreWork = () => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="px-page pt-30 lg:pt-28 2xl:pt-35 pb-30 lg:pb-28 2xl:pb-35"
    >
      <div className="mx-auto max-w-content">
        <SectionHead id={headingId} title="More work">
          Smaller product pieces, plus concepts I took on to stretch my visual
          range.
        </SectionHead>
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MoreWork;
