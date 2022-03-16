import { Title } from '@v-thomas/libs/thunder/core-ui';
import { ReactNode } from 'react';
import { Container, LeftContainer, NavLinks } from './navbar.styles';

/* eslint-disable-next-line */
export interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
}

export function Navbar({ title, leftButtons, rightButtons }: NavbarProps) {
  return (
    <Container>
      <LeftContainer>
        <Title>{title}</Title>
        {leftButtons}
      </LeftContainer>
      <NavLinks>{rightButtons}</NavLinks>
    </Container>
  );
}
