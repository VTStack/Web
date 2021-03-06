import { Avatar, Title } from '@v-thomas/core/ui';
import { ReactNode } from 'react';
import { Container, LeftContainer, NavLinks, Middle } from './navbar.styles';
import styled from 'styled-components';

interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
  middle?: ReactNode;
  avatar: string | null;
  inviteButton?: boolean;
}

const NavbarTitle = styled(Title)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export function PrivateNavbar({
  title,
  leftButtons,
  rightButtons,
  middle,
  avatar = '',
  inviteButton = false
}: NavbarProps) {
  return (
    <Container>
      <LeftContainer>
        <NavbarTitle size="1.5">{title}</NavbarTitle>
        {leftButtons}
      </LeftContainer>
      {middle && <Middle>{middle}</Middle>}
      <NavLinks>
        {rightButtons}
        <Avatar avatar={avatar || ''} />
      </NavLinks>
    </Container>
  );
}
