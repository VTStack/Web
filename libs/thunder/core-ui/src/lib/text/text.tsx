import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
interface TextProps {
  restrictWidth?: boolean;
  bold?: boolean;
  [key: string]: any;
}

export const Text = styled(motion.p)`
  color: ${({ theme }: TextProps) => theme.text.secondary};
  ${({ restrictWidth }: TextProps) => {
    return restrictWidth
      ? css`
          max-width: 75ch;
        `
      : null;
  }}

  ${({ bold }: TextProps) => {
    return css`
      font-weight: 500;
    `;
  }}


  width: auto;
`;
