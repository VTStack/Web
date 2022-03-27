import styled from 'styled-components';
import { ReactNode } from 'react';

import { Link as NavLink } from 'react-router-dom';
export interface LinkProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  external?: boolean;
}

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function Link({ to, children, onClick, external }: LinkProps) {
  return !external ? (
    <StyledLink to={to || '#'} {...{ onClick: onClick }}>
      {children}
    </StyledLink>
  ) : (
    <StyledA href={to} {...{ onClick: onClick }}>
      {children}
    </StyledA>
  );
}
