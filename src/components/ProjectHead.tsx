import Button from "@/components/Button";

interface ProjectHeadProps {
  heading: string;
  caseStudy: string;
  headingId: string;
}
const ProjectHead = ({ heading, caseStudy, headingId }: ProjectHeadProps) => {
  return (
    <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
      <h2 className="text-chapter max-w-195 text-balance" id={headingId}>
        {heading}
      </h2>
      <Button to={caseStudy} arrow className="shrink-0">
        View case study
      </Button>
    </div>
  );
};

export default ProjectHead;
