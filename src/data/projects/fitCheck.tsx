import { FileCheck } from "lucide-react";
import Phone from "@/components/Phone";
import Zoom from "@/components/Zoom";
import nextStepsPhone from "@/assets/fitcheck/next-steps-phone.png";
import nextStepsZoom from "@/assets/fitcheck/next-steps-zoom.png";
import type { Project } from "./types";

const fitCheck: Project = {
  name: "Dproz Fitcheck",
  kind: "AI feature",
  icon: FileCheck,
  caption: "An AI feature to Fitcheck and tailor resumes.",
  caseStudy: "/work/fitcheck",
  theme: {
    tile: "bg-tab-purple",
    tint: "bg-tab-purple-tint",
    stage:
      "bg-fitcheck bg-radial-[at_40%_30%] from-fitcheck-glow to-transparent",
    caption: "text-ink",
    link: "text-muted-foreground",
  },
  visual: (
    <>
      <Phone
        src={nextStepsPhone}
        alt="Fitcheck's next steps: 3 quick edits for a stronger match, listing the experience and knowledge to add to the CV"
        shadow="shadow-fitcheck"
        className="absolute top-[10%] left-[16.83%] w-[33.17%]"
      />
      <Zoom
        src={nextStepsZoom}
        alt="2 on your CV, 3 to add, 0 to build toward, shown as a five-part bar"
        shadow="shadow-fitcheck-card"
        className="absolute top-[27.5%] left-[53.21%] w-[38.14%]"
      />
    </>
  ),
};

export default fitCheck;
