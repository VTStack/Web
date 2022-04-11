import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export interface RowInputs {
  gap?: string;
  padding?: string;
}

export const Row = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  ${({ gap = 'auto' }: RowInputs) =>
    gap === 'auto'
      ? css`
          justify-content: space-between;
        `
      : css`
          gap: ${gap}rem !important;
        `};
  padding: ${({ padding = '0' }: RowInputs) => `${padding}rem`};
`;

export function RowTest(props: RowInputs) {
  return <Row {...props} />;
}
