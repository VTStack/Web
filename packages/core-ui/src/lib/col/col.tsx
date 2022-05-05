import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export interface ColProps {
  gap?: string;
  padding?: string;
  align?: 'top' | 'center' | 'bottom';
}
const test = {
  center: 'center',
  top: 'flex-start',
  bottom: 'flex-end'
};
export const Col = styled(motion.div)<ColProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ align = 'top' }) => {
    return test[align];
  }};
  ${({ gap = '1' }) => {
    return gap === 'auto'
      ? css`
          justify-content: space-between;
        `
      : css`
          gap: ${gap}rem !important;
        `;
  }}
  padding: ${({ padding = '0' }) => `${padding}rem`};
`;
