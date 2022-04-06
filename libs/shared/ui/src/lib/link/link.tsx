import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

import { Link as NavLink } from 'react-router-dom';
export interface LinkProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  external?: boolean;
  noLine?: boolean;
}

const StyledLink = styled(NavLink)<LinkProps>`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledA = styled.a<LinkProps>`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  ${({ noLine }) =>
    !noLine &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;

export function Link({ children, external, ...props }: LinkProps) {
  return !external ? (
    <StyledLink {...(props as any)}>{children}</StyledLink>
  ) : (
    <StyledA href={props.to} {...props} target="_blank">
      {children}
    </StyledA>
  );
}
