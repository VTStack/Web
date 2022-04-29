import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export interface RowInputs {
  gap?: string;
  padding?: string;
  align?: 'center' | 'right' | 'left';
  inline?: boolean;
}

const test = {
  center: 'center',
  right: 'flex-end',
  left: 'flex-start'
};

export const Row = styled(motion.div)<RowInputs>`
  display: ${({ inline = false }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: row;

  justify-content: ${({ align = 'left' }) => test[align]};
  ${({ gap = 'auto' }) =>
    gap === 'auto'
      ? css`
          justify-content: space-between;
        `
      : css`
          gap: ${gap}rem !important;
        `};
  padding: ${({ padding = '0' }) => `${padding}rem`};
`;
