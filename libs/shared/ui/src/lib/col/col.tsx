import styled, { css } from 'styled-components';

export interface ColProps {
  gap?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: row;
  ${({ gap }) =>
    gap === 'auto'
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: space-between;
          gap: ${gap};
        `}
`;
