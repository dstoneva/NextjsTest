import styled from "styled-components";

export const StyledCardWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: ${({ background, theme }) => background || theme.grayF4};
  max-width: 100%;
  padding: 10px 30px;
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    outline: 2px solid ${({ theme, borderColor }) => borderColor || theme.blue};
  }

  &:hover .CardHeading {
    text-decoration: underline;
    color: ${({ theme }) => theme.main};
  }
`;

export const StyledCardTextWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${(props) => (props.position === "left" ? "30px" : 0)};
  margin-right: ${(props) => (props.position === "right" ? "30px" : 0)};
`;

export const StyledCardHeading = styled(({ ...props }) => <h2 {...props} />)`
  font-size: 1.125rem;
  margin: 0;
  font-weight: bold;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  font-size: 1rem;
  margin: 0;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 2.5rem;
  max-height: 2.5rem;
  width: 100%;
  height: 100%;
`;
