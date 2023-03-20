import { StyledCardWrapper, StyledCardHeading, StyledCardTextWrapper, StyledCardText, StyledImageContainer } from "./elements";
import Image from "next/image";

export const Card = ({ heading, text, imageSrc, imageAlt, imageWidth, imageHeight, imagePosition, index, marginRight, ...props }) => {
  return (
    <StyledCardWrapper index={index} style={{ marginRight: marginRight }}>
      {imageSrc && imagePosition === "left" && (
        <StyledImageContainer>
          <Image layout="intrinsic" src={imageSrc} alt={imageAlt ? imageAlt: "Icon"} width={imageWidth ? imageWidth : "40px"} height={imageHeight ? imageHeight : "40px"} position={imagePosition }/>
        </StyledImageContainer>
      )}
      <StyledCardTextWrapper position={imagePosition}>
        <StyledCardHeading className="CardHeading">{heading}</StyledCardHeading>
        <StyledCardText>{text}</StyledCardText>
      </StyledCardTextWrapper>
      {imageSrc && imagePosition === "rigth" && (
        <StyledImageContainer>
          <Image layout="intrinsic" src={imageSrc} alt={imageAlt ? imageAlt: "Icon"} width={imageWidth ? imageWidth : "40px"} height={imageHeight ? imageHeight : "40px"} position={imagePosition}/>
        </StyledImageContainer>
      )}
    </StyledCardWrapper>
  );
};
