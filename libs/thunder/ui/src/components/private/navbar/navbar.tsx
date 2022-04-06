import { Title } from '@v-thomas/shared/ui';
import { InviteButton } from '../../../../../app/src/routes/private/group/components/invite/button/button';
import { ReactNode } from 'react';
import { Container, LeftContainer, NavLinks, Middle } from './navbar.styles';
import styled from 'styled-components';

interface NavbarProps {
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
export function PrivateNavbar({ title, leftButtons, rightButtons, middle }: NavbarProps) {
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
