import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CodeProps {
  children: ReactNode;
  padding?: string;
}

const StyledCode = styled.code`
  color: gray;
  padding: ${({ padding = '0.5rem' }: CodeProps) => padding};
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
`;

export function Code({ children, padding }: CodeProps) {
  return <StyledCode padding={padding}>{children}</StyledCode>;
}
