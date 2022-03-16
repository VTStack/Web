import { Title } from '@v-thomas/libs/thunder/core-ui';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface NavbarProps {
  buttons: ReactNode;
  title: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export function MovieNavbar({ buttons, title }: NavbarProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <NavLinks>{buttons}</NavLinks>
    </Container>
  );
}
