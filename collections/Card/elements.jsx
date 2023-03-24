import styled from "styled-components";
import Link from "next/link";

export const StyledCardWrapper = styled(
  ({ borderRadius = 6, background, padding, borderOnHover, hoverStyles, ...props }) => <div {...props} />
)`
  display: flex;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background: ${({ background }) => background};
  max-width: 100%;
  padding: ${({ padding }) => padding};
  cursor: default;

  &:hover,
  &:focus,
  &:active {
    outline: ${({ borderOnHover }) => borderOnHover};
  }

  &:hover .CardHeading {
    ${({ hoverStyles }) => hoverStyles}
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
  const isExternal = !href.startsWith("/") && !href.startsWith("#");

  if (href && !isExternal) {
    return (
      <Link href={href} passHref>
        <StyledCardHeadingLink>
          <CardHeading {...rest}>{children}</CardHeading>
        </StyledCardHeadingLink>
      </Link>
    );
  }

  return (
    <StyledCardHeadingLink
      href={href}
      target={isExternal ? "_blank" : null}
      rel={isExternal ? "noopener noreferrer" : null}
    >
      <CardHeading {...rest}>{children}</CardHeading>
    </StyledCardHeadingLink>
  );
};

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  font-size: 1rem;
  margin: 0;
  font-family: "Poppins";

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
