import styled from "styled-components";
import Link from "next/link";

export const StyledCardWrapper = styled(
  ({
    borderRadius = 6,
    background = "#eeeeee",
    padding = "10px",
    borderOnHover = "none",
    hoverStyles = "color: #4492f9",
    marginRight = 0,
    ...props
  }) => <div {...props} />
)`
  display: flex;
  flex-direction: ${(props) => (props.position === "right" ? "row-reverse" : "row")};
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background: ${({ background }) => background};
  max-width: 100%;
  padding: ${({ padding }) => padding};
  margin-right: ${({ marginRight }) => marginRight}px;
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

export const StyledImageContainer = styled(({ position = "right", ...props }) => <div {...props} />)`
  max-width: 2.5rem;
  max-height: 2.5rem;
  width: 100%;
  height: 100%;
  margin-left: ${({ position }) => (position === "right" ? "40px" : 0)};
  margin-right: ${({ position }) => (position === "left" ? "40px" : 0)};
`;
