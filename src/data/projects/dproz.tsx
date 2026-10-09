import { BriefcaseBusiness } from "lucide-react";
import Browser from "@/components/Browser";
import Phone from "@/components/Phone";
import homepageDesktop from "@/assets/dproz/homepage-desktop.png";
import homeFeedPhone from "@/assets/hero/dproz-home-feed.png";
import type { Project } from "./types";

const dproz: Project = {
  name: "Dproz",
  kind: "Job platform",
  icon: BriefcaseBusiness,
  caption: "One home for Tanzania's job market.",
  caseStudy: "/work/dproz",
  theme: {
    tile: "bg-tab-blue",
    tint: "bg-tab-blue-tint",
    stage: "bg-dproz bg-radial-[at_28%_35%] from-dproz-glow to-transparent",
    caption: "text-paper",
    link: "text-dproz-label",
  },
  visual: (
    <>
      <Browser
        url="dproz.com"
        src={homepageDesktop}
        alt="Dproz homepage with a job search and jobs grouped by category"
        shadow="shadow-dproz"
        className="absolute top-[6.25%] left-[39.42%] w-[56.09%]"
      />
      <Phone
        src={homeFeedPhone}
        alt="Dproz home feed with job categories and the latest jobs"
        shadow="shadow-dproz"
        className="absolute top-[23.44%] left-[13.62%] w-[33.17%]"
      />
    </>
  ),
};

export default dproz;
