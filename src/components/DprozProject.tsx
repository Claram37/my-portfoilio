import { LayoutList, ListChecks, Sparkles, UserRound } from "lucide-react";
import ProjectSection, { type ProjectTheme } from "./ProjectSection";
import { type ProjectTab } from "./FeatureTab";
import Phone from "./Phone";
import Browser from "./Browser";
import onboardingDesktop from "@/assets/dproz/onboarding-desktop.png";
import smartProfilePhone from "@/assets/dproz/smart-profile-phone.png";
import profileDesktop from "@/assets/dproz/profile-desktop.png";
import profileStrengthZoom from "@/assets/dproz/profile-strength-zoom.png";
import homepageDesktop from "@/assets/dproz/homepage-desktop.png";
import homeFeedPhone from "@/assets/hero/dproz-home-feed.png";
import jobPicksZoom from "@/assets/dproz/job-picks-zoom.png";

const theme: ProjectTheme = {
  stage: "bg-dproz bg-radial-[at_28%_35%] from-dproz-glow to-transparent",
  caption: "text-paper",
  link: "text-dproz-label",
};

const tabs: ProjectTab[] = [
  {
    label: "Guided onboarding",
    icon: ListChecks,
    caption: "A complete profile in under 60 seconds.",
    visual: (
      <>
        <Browser
          url="dproz.com"
          src={onboardingDesktop}
          alt="Dproz onboarding on desktop, welcoming Amani with questions on dream job, skills, experience and location"
          shadow="shadow-dproz"
          className="absolute top-[6.25%] left-[39.42%] w-[56.09%]"
        />
        <Phone
          src={smartProfilePhone}
          alt="Let's Build Your Smart Profile screen with an uploaded CV"
          shadow="shadow-dproz"
          className="absolute top-[23.44%] left-[13.62%] w-[33.17%]"
        />
      </>
    ),
  },
  {
    label: "Rich profiles",
    icon: UserRound,
    caption: "A clear picture of every job seeker.",
    visual: (
      <>
        <Browser
          url="dproz.com"
          src={profileDesktop}
          alt="Jane's Dproz dashboard with recommended job picks and her profile card"
          shadow="shadow-dproz"
          className="absolute top-[7.5%] left-[-4.01%] w-[64.1%]"
        />
        <img
          src={profileStrengthZoom}
          alt="Profile strength at 87%, with areas of expertise, seniority, job types and location"
          loading="lazy"
          decoding="async"
          className="absolute top-[6.25%] left-[58.97%] w-[30.45%] rounded-card shadow-dproz"
        />
      </>
    ),
  },
  {
    label: "One job feed",
    icon: LayoutList,
    caption: "Jobs from across the market in one feed.",
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
  },
  {
    label: "AI recommendations",
    icon: Sparkles,
    caption: "AI-matched roles, each with a match score.",
    visual: (
      <img
        src={jobPicksZoom}
        alt="Job picks for you, each recommended role with its match score"
        loading="lazy"
        decoding="async"
        className="absolute top-[8.75%] left-[3.85%] w-[56.89%] rounded-card shadow-dproz"
      />
    ),
  },
];

const DprozProject = () => {
  return (
    <ProjectSection
      id="work"
      heading="One home for Tanzania's scattered job market."
      caseStudy="/work/dproz"
      theme={theme}
      tabs={tabs}
    />
  );
};

export default DprozProject;
