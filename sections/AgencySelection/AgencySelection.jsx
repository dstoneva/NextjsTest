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
    imageSrc: "/img/icons/edit-tools.png",
    imageAlt: "Tools icon",
    imagePosition: "left",
    marginRight: 60
  },
  {
    heading: "Search",
    text: (
      <div>
        In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due dilligence vetting.
      </div>
    ),
    imageSrc: "/img/icons/business.png",
    imageAlt: "Business icon",
    imagePosition: "left",
    marginRight: 40
  },
  {
    heading: "Pitch",
    text: (
      <div>
        Coperhensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.
      </div>
    ),
    imageSrc: "/img/icons/meeting.png",
    imageAlt: "Business icon",
    imagePosition: "left",
    marginRight: 20
  }
];

export const AgencySelection = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledSectionContentContainer>
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
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                imagePosition={card.imagePosition}
                index={i}
                marginRight={card.marginRight}
              />
            );
          })}
        </StyledCardsContainer>
      </StyledSectionContentContainer>
    </StyledContainer>
  );
};
