import styled, { css } from 'styled-components';

interface Inputs {
  gap?: string;
}

export const Col = styled.div`
  display: flex;
  flex-direction: row;

  /* gap: ${({ gap = '1' }: Inputs) => `${gap}rem`}; */
  ${({ gap }: Inputs) =>
    gap === 'auto'
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: space-between;
          gap: ${gap};
        `}
`;
