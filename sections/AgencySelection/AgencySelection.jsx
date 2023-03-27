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
    text: "Complete **brief writing or simple guidance** on what to include, we've got you covered",
    image: { src: "/img/icons/edit-tools.png", alt: "Tools icon", position: "left" },
    marginRight: 60,
    href: "https://goodbrief.io/"
  },
  {
    heading: "Search",
    text: "In-depth agency search covering; **criteria matching**, door knocking and due dilligence vetting.",
    image: { src: "/img/icons/business.png", alt: "Business icon", position: "left" },
    marginRight: 40,
    href: "#"
  },
  {
    heading: "Pitch",
    text: "Coperhensive **pitch management**, including comms, diary management and pitch hosting.",
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
                borderRadius={6}
                background={"#F4F4F4"}
                borderOnHover={"2px solid #0070f3"}
                padding={"10px 30px"}
                hoverStyles={"text-decoration: underline; color: #0070f3"}
              />
            );
          })}
        </StyledCardsContainer>
      </StyledSectionContentContainer>
    </StyledContainer>
  );
};
