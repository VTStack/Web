import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export interface RowInputs {
  gap?: string;
  padding?: string;
  align?: 'center' | 'right' | 'left';
}

const test = {
  center: 'center',
  right: 'flex-end',
  left: 'flex-start'
};

export const Row = styled(motion.div)<RowInputs>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align = 'left' }) => {
    return test[align];
  }};
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

export function RowTest(props: RowInputs) {
  return <Row {...props} />;
}
