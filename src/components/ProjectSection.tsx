import { useId } from "react";
import ProjectHead from "./ProjectHead";
import FeatureTab, { type ProjectTab } from "./FeatureTab";

export interface ProjectTheme {
  stage: string;
  caption: string;
  link: string;
}

interface ProjectSectionProps {
  id?: string;
  heading: string;
  caseStudy: string;
  theme: ProjectTheme;
  tabs: ProjectTab[];
}

const ProjectSection = ({
  id,
  heading,
  caseStudy,
  theme,
  tabs,
}: ProjectSectionProps) => {
  const headingId = useId();
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="px-page pt-20 lg:pt-28 2xl:pt-35"
    >
      <div className="mx-auto max-w-content">
        <ProjectHead
          heading={heading}
          caseStudy={caseStudy}
          headingId={headingId}
        />
        <div>
          {tabs.map((tab, index) => (
            <FeatureTab key={tab.label} tab={tab} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
