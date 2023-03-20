import styled from "styled-components";

export const StyledCardWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: ${({ theme }) => theme.grayF4};
  margin-right: ${(props) => props.marginRight}px;
  width: calc(100% - ${(props) => props.marginRight}px);
  padding: 10px 30px 10px 30px;
  cursor: default;
  
  &:hover,
  &:focus,
  &:active {
    outline: 2px solid ${({ theme }) => theme.main};
  }
`;

export const StyledCardHeading = styled(({ ...props }) => <div {...props} />)`
  font-size: 1.125rem;
  font-weight: bold;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledCardTextWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  font-size: 1rem;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const StyledCardImage = styled.img.attrs(({ ...props }) => ({
  width: props.width || "40px",
  height: props.height || "40px"
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => (props.position === "right" ? "30px" : 0)};
  margin-right: ${(props) => (props.position === "left" ? "30px" : 0)};
`;
