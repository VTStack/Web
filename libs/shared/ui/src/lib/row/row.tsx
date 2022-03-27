import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export interface RowInputs {
  gap?: string;
}

export const Row = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ gap = '1' }: RowInputs) => {
    if (gap !== 'auto') {
      return css`
        gap: ${gap}rem;
        justify-content: space-between;
      `;
    } else return null;
  }};
`;

export function RowTest(props: RowInputs) {
  return <Row {...props} />;
}
