import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface TextProps {
  restrictWidth?: boolean;
  bold?: boolean;
}

export const Text = styled(motion.p)<TextProps>`
  color: ${({ theme }) => theme.text.secondary};
  ${({ restrictWidth }) => {
    return restrictWidth
      ? css`
          max-width: 75ch;
        `
      : null;
  }}

  ${({ bold }) => {
    if (bold) {
      return css`
        font-weight: 500;
      `;
    } else {
      return null;
    }
  }}


  width: auto;
`;
