import { Store } from "lucide-react";
import Browser from "@/components/Browser";
import Zoom from "@/components/Zoom";
import openVisitsDesktop from "@/assets/shopxray/open-visits-desktop.png";
import visitCardZoom from "@/assets/shopxray/visit-card-zoom.png";
import type { Project } from "./types";

const shopXray: Project = {
  name: "ShopXray",
  kind: "Shop management",
  icon: Store,
  caption:
    "A digital daftari to records visits and reconcile cash in real time.",
  caseStudy: "/work/shopxray",
  theme: {
    tile: "bg-tab-green",
    tint: "bg-tab-green-tint",
    stage:
      "bg-shopxray bg-radial-[at_28%_35%] from-shopxray-glow to-transparent",
    caption: "text-paper",
    link: "text-shopxray-label",
  },
  visual: (
    <>
      <Browser
        url="mkatabahq.com/shopxray"
        src={openVisitsDesktop}
        alt="ShopXray's Today page with the day's revenue and its open visits, each listing services and a total"
        shadow="shadow-shopxray"
        className="absolute top-[7.5%] left-[-4.01%] w-[64.1%]"
      />
      <Zoom
        src={visitCardZoom}
        alt="Visit #05: pedicure, wash and set, and gel nails, totalling TZS 45,000"
        shadow="shadow-shopxray"
        className="absolute top-[8.75%] left-[57.69%] w-[32.05%]"
      />
    </>
  ),
};

export default shopXray;
