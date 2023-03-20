import styled from "styled-components";

export const StyledCardWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: ${({ theme }) => theme.grayF4};
  width: 45%;
  margin: 1rem;
  padding: 10px 30px 10px 30px;
  &:hover, &:focus, &:active {
    outline: 2px solid ${({ theme }) => theme.main};
  }
`;

export const StyledCardHeading = styled(({ ...props }) => <div {...props} />)`
  font-size: 18px;
  font-weight: bold;
  font-family: Poppins;
`;

export const StyledCardTextWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  font-size: 16px;
  font-family: Poppins;
`;
