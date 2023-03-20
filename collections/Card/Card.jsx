import { StyledCardWrapper, StyledCardHeading, StyledCardTextWrapper, StyledCardText, StyledCardImage } from "./elements";

export const Card = ({ heading, text, imageSrc, imageAlt, imageWidth, imageHeight, imagePosition, index, marginRight, ...props }) => {
  return (
    <StyledCardWrapper index={index} style={{ marginRight: marginRight }}>
      {imageSrc && imagePosition === "left" && (
        <StyledCardImage src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} position={imagePosition}/>
      )}
      <StyledCardTextWrapper>
        <StyledCardHeading>{heading}</StyledCardHeading>
        <StyledCardText>{text}</StyledCardText>
      </StyledCardTextWrapper>
      {imageSrc && imagePosition === "rigth" && (
        <StyledCardImage src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} position={imagePosition}/>
      )}
    </StyledCardWrapper>
  );
};
