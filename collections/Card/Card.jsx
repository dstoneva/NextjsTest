import {
  StyledCardWrapper,
  StyledCardHeading,
  StyledCardTextWrapper,
  StyledCardText,
  StyledImageContainer
} from "./elements";
import Image from "next/image";

export const Card = ({ heading, text, image, index, marginRight, href, ...props }) => {
  return (
    <StyledCardWrapper {...props} index={index} style={{ marginRight: marginRight }}>
      {image && image.position === "left" && (
        <StyledImageContainer>
          <Image
            layout='responsive'
            src={image.src}
            alt={image.alt ? image.alt : "Icon"}
            width={image.width ? image.width : "40px"}
            height={image.height ? image.height : "40px"}
            position={image.position}
          />
        </StyledImageContainer>
      )}
      <StyledCardTextWrapper position={image.position}>
        <StyledCardHeading as={as || 'h2'} href={href} className='CardHeading'>
          {heading}
        </StyledCardHeading>
        <StyledCardText>{text}</StyledCardText>
      </StyledCardTextWrapper>
      {image && image.position === "right" && (
        <StyledImageContainer>
          <Image
            layout='responsive'
            src={image.src}
            alt={image.alt ? image.alt : "Icon"}
            width={image.width ? image.width : "40px"}
            height={image.height ? image.height : "40px"}
            position={image.position}
          />
        </StyledImageContainer>
      )}
    </StyledCardWrapper>
  );
};
