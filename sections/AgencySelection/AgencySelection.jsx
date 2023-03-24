import Image from "next/image";
import { Card } from "../../collections/Card";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledSectionContentContainer,
  StyledCardsContainer
} from "./elements";

const cardsData = [
  {
    heading: "Brief",
    text: (
      <div>
        Complete <strong>brief writing or simple guidance</strong> on what to include, we&apos;ve got you covered
      </div>
    ),
    image: { src: "/img/icons/edit-tools.png", alt: "Tools icon", position: "left" },
    marginRight: 60,
    href: "#"
  },
  {
    heading: "Search",
    text: (
      <div>
        In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due dilligence vetting.
      </div>
    ),
    image: { src: "/img/icons/business.png", alt: "Business icon", position: "left" },
    marginRight: 40,
    href: "#"
  },
  {
    heading: "Pitch",
    text: (
      <div>
        Coperhensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.
      </div>
    ),
    image: { src: "/img/icons/meeting.png", alt: "Business icon", position: "left" },
    marginRight: 20,
    href: "#"
  }
];

export const AgencySelection = ({ image, title, description, backgroundUrl, ...props }) => {
  return (
    <StyledContainer {...props} topMargin={4} bottomMargin={4}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledSectionContentContainer backgroundUrl={backgroundUrl}>
        <StyledImageContainer>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={true} />
        </StyledImageContainer>
        <StyledCardsContainer>
          {cardsData.map((card, i) => {
            return (
              <Card
                key={i}
                heading={card.heading}
                text={card.text}
                image={card.image}
                index={i}
                marginRight={card.marginRight}
                href={card.href}
              />
            );
          })}
        </StyledCardsContainer>
      </StyledSectionContentContainer>
    </StyledContainer>
  );
};
