import { Title } from '@v-thomas/libs/thunder/core-ui';
import { InviteButton } from '../invite/button/button';
import { ReactNode } from 'react';
import { Container, LeftContainer, NavLinks, Middle } from './navbar.styles';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
  middle?: ReactNode;
}

const NavbarTitle = styled(Title)`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export function Navbar({ title, leftButtons, rightButtons, middle }: NavbarProps) {
  return (
    <Container>
      <LeftContainer>
        <NavbarTitle>{title}</NavbarTitle>
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
