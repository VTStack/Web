import styled, { css } from 'styled-components';

export interface ColProps {
  gap?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ gap = '1' }) =>
    gap !== 'auto'
      ? css`
          gap: ${gap}rem !important;
        `
      : null};
`;
