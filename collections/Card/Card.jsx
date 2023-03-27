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
  borderOnHover,
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
      borderOnHover={borderOnHover}
      hoverStyles={hoverStyles}
      marginRight={marginRight}
      position={image ? image.position : null}
    >
      {image && (
        <StyledImageContainer position={image.position}>
          <Image
            layout='responsive'
            src={image.src}
            alt={image.alt ? image.alt : "Icon"}
            width={image.width ? image.width : "40px"}
            height={image.height ? image.height : "40px"}
          />
        </StyledImageContainer>
      )}
      <StyledCardTextWrapper>
        <StyledCardHeading href={href} className="CardHeading">{heading}</StyledCardHeading>
        <StyledCardText>{text}</StyledCardText>
      </StyledCardTextWrapper>
    </StyledCardWrapper>
  );
};
