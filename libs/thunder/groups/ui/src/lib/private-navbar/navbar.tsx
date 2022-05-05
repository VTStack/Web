import { Avatar, Title } from '@v-thomas/core/ui';
import { FC, ReactNode } from 'react';
import { Container, LeftContainer, NavLinks, Middle } from './navbar.styles';
import styled from 'styled-components';
import { useAuth } from '@v-thomas/thunder/auth/hooks';

interface NavbarProps {
  title: string;
  leftButtons?: ReactNode;
  rightButtons?: ReactNode;
  middle?: ReactNode;
  avatar?: boolean;
  inviteButton?: boolean;
}

const NavbarTitle = styled(Title)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const PrivateNavbar: FC<NavbarProps> = ({
  title,
  leftButtons,
  rightButtons,
  middle,
  avatar = false,
  inviteButton = false
}) => {
  const { user } = useAuth();

  const userId = user?.data?.user?.uid;

  return (
    <Container>
      <LeftContainer>
        <NavbarTitle size="1.5">{title}</NavbarTitle>
        {leftButtons}
      </LeftContainer>
      {middle && <Middle>{middle}</Middle>}
      <NavLinks>
        {rightButtons}
        {avatar && userId && <Avatar avatar={`https://avatars.dicebear.com/api/avataaars/${userId}.svg`} />}
      </NavLinks>
    </Container>
  );
};
