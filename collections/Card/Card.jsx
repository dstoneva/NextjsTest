import {
  StyledCardWrapper,
  StyledCardHeading,
  StyledCardTextWrapper,
  StyledCardText,
  StyledImageContainer
} from "./elements";
import Image from "next/image";

export const Card = ({
  heading,
  text,
  image,
  index,
  marginRight,
  href,
  borderRadius,
  background,
  padding,
  borderColor,
  hoverStyles,
  ...props
}) => {
  return (
    <StyledCardWrapper
      {...props}
      index={index}
      borderRadius={borderRadius}
      background={background}
      padding={padding}
      borderColor={borderColor}
      hoverStyles={hoverStyles}
      style={{ marginRight: marginRight }}
    >
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
        <StyledCardHeading href={href} className="CardHeading">{heading}</StyledCardHeading>
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
