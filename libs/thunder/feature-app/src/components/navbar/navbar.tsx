import { Title } from '@v-thomas/shared/core-ui';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Container, LeftContainer, NavLinks } from './navbar.styles';

/* eslint-disable-next-line */
export interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
}

const NavbarTitle = styled(Title)`
  @media screen and (min-width: 600px) {
    display: none;
  }
  color: black;
`;

export function Navbar({ title, leftButtons, rightButtons }: NavbarProps) {
  return (
    <Container>
      <LeftContainer>
        <NavbarTitle>{title}</NavbarTitle>
        {leftButtons}
      </LeftContainer>
      <NavLinks>{rightButtons}</NavLinks>
    </Container>
  );
}
