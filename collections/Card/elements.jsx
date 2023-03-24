import styled from "styled-components";
import Link from "next/link";

export const StyledCardWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
  background: ${({ background, theme }) => background || theme.grayF4};
  max-width: 100%;
  padding: ${({ padding }) => padding || "10px 30px"};
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    outline: 2px solid ${({ theme, borderColor }) => borderColor || theme.blue};
  }

  &:hover .CardHeading {
    text-decoration: underline;
    color: ${({ theme }) => theme.blue};
  }
`;

export const StyledCardTextWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${(props) => (props.position === "left" ? "30px" : 0)};
  margin-right: ${(props) => (props.position === "right" ? "30px" : 0)};
`;

const CardHeading = styled(({ ...props }) => <h2 {...props} />)`
  font-size: 1.125rem;
  margin: 0;
  font-weight: bold;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledCardHeadingLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const StyledCardHeading = ({ href, children, ...rest }) => {
  const isLink = !!href;

  if (isLink) {
    return (
      <Link href={href} passHref>
        <StyledCardHeadingLink>
          <CardHeading {...rest}>{children}</CardHeading>
        </StyledCardHeadingLink>
      </Link>
    );
  }

  return <CardHeading {...rest}>{children}</CardHeading>;
};

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
