import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  color: black;
  text-align: center;
  margin-bottom: 0px;
  line-height: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  text-align: center;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin: auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSectionContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: url("/img/background.png") no-repeat;
  background-size: contain;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  gap: 2rem;
`;
