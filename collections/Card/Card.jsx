import { StyledCardWrapper, StyledCardHeading, StyledCardTextWrapper, StyledCardText } from "./elements";

export const Card = ({ heading, text, ...props }) => {
  return (
    <StyledCardWrapper>
      <StyledCardTextWrapper>
        <StyledCardHeading>
          {heading}
        </StyledCardHeading>
        <StyledCardText>{text}</StyledCardText>
      </StyledCardTextWrapper>
    </StyledCardWrapper>
  );
};
