import { Title } from '@v-thomas/libs/thunder/core-ui';
import { InviteButton } from '../invite/button/button';
import { ReactNode } from 'react';
import { Container, LeftContainer, NavLinks, Middle } from './navbar.styles';

/* eslint-disable-next-line */
export interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
  middle?: ReactNode;
}

export function Navbar({ title, leftButtons, rightButtons, middle }: NavbarProps) {
  return (
    <Container>
      <LeftContainer>
        <Title>{title}</Title>
        {leftButtons}
      </LeftContainer>
      {middle && <Middle>{middle}</Middle>}
      <NavLinks>
        {rightButtons}
        <InviteButton />
      </NavLinks>
    </Container>
  );
}
