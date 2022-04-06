import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export interface RowInputs {
  gap?: string;
  padding?: string;
}

export const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
  ${({ gap = '1' }: RowInputs) =>
    gap !== 'auto'
      ? css`
          gap: ${gap}rem !important;
        `
      : css`
          justify-content: space-between;
        `};
  padding: ${({ padding = '0' }: RowInputs) => `${padding}rem`};
`;

export function RowTest(props: RowInputs) {
  return <Row {...props} />;
}
