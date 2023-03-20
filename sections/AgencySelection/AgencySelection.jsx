import Image from "next/image";
import { Card } from "../../collections/Card";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledSectionContentContainer
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
        <Card
          heading='Title'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
          imageSrc="/img/edit-tools.png"
          imageAlt="Tools icon"
          imagePosition="left"
        />
      </StyledSectionContentContainer>
    </StyledContainer>
  );
};
