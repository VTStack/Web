import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export interface TextProps {
  restrictWidth?: boolean;
  bold?: boolean;
  width?: string;
  align?: 'center' | 'right' | 'left';
}

export const Text = styled(motion.p)<TextProps>`
  color: ${({ theme }) => theme.text.secondary};
  text-align: ${({ align = 'left' }) => align};
  ${({ restrictWidth, width = '75' }) => {
    return restrictWidth
      ? css`
          max-width: ${width}ch;
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
