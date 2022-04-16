import { Title } from '@v-thomas/shared/ui';
import { InviteButton } from '../invite-button/button';
import { ReactNode } from 'react';
import { Container, LeftContainer, NavLinks, Middle } from './navbar.styles';
import styled from 'styled-components';
import UserAvatar from '../user-avatar/user-avatar';

interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
  middle?: ReactNode;
  avatar: string | null;
  inviteButton?: boolean;
}

const NavbarTitle = styled(Title)`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export function PrivateNavbar({
  title,
  leftButtons,
  rightButtons,
  middle,
  avatar,
  inviteButton = false
}: NavbarProps) {
  return (
    <Container>
      <LeftContainer>
        <NavbarTitle>{title}</NavbarTitle>
        {leftButtons}
      </LeftContainer>
      {middle && <Middle>{middle}</Middle>}
      <NavLinks>
        {rightButtons}
        {inviteButton && <InviteButton />}
        <UserAvatar avatar={avatar} />
      </NavLinks>
    </Container>
  );
}
