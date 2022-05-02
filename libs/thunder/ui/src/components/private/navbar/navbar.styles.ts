import { ReactNode } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  padding-block: 0;
  height: 100%;
  grid-template-columns: ${({ children }) => {
    const allChildren = (children as ReactNode[])?.filter(v => v);
    if (allChildren.length === 2) {
      return '1fr auto';
    } else {
      return 'auto 1fr auto';
    }
  }};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  height: 100%;
`;

export const Middle = styled.div`
  width: 100%;
  height: 100%;
  & > * {
    width: 100%;
  }
  padding-inline: 1rem;
`;
