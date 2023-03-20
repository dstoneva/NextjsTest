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
        <Card
          heading='Title'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci '
          imageSrc="/img/edit-tools.png"
          imageAlt="Tools icon"
          imagePosition="left"
        />
        </StyledCardsContainer>
      </StyledSectionContentContainer>
    </StyledContainer>
  );
};
