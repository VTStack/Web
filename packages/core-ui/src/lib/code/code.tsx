import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CodeProps {
  children: ReactNode;
  padding?: string;
}

export const Code = styled.code`
  color: gray;
  padding: ${({ padding = '0.5rem' }: CodeProps) => padding};
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
`;

export function TestCode({ children, padding }: CodeProps) {
  return <Code padding={padding}>{children}</Code>;
}
