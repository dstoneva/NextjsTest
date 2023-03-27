import { AgencySelection, Hero } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start"
};

const agencySelectionProps = {
  image: { src: "/img/video.png", alt: "", width: 300, height: 470, objectFit: "contain" },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  backgroundUrl: "/img/background.png"
};

export default function Home() {
  return (
      <div>
        <Hero {...heroProps} />
        <AgencySelection {...agencySelectionProps} />
      </div>
  );
}
