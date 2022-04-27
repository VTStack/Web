import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface DividerProps {
  width?: string;
  marginUnder?: boolean;
}

export const Divider = styled.div<DividerProps>`
  background-color: ${({ theme = {} }) => theme?.background?.third};
  height: 1px;
  margin: 0 auto;

  margin-block: 2rem;
  ${({ marginUnder = true }) =>
    marginUnder
      ? null
      : css`
          margin-bottom: 0;
        `}
  width: ${({ width }) => width || '97.5%'};
`;
