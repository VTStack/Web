import styled, { css } from 'styled-components';
import { Props } from '../button';
import { motion } from 'framer-motion';

export const CoreButton = styled(motion.button)`
  color: ${({ theme }) => theme.color.primary};

  border: none;

  background-color: transparent;

  padding: 0.5rem 1rem;
  border-radius: 4px;
  /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
  transition: all 0.3s ease;
  font-size: ${({ size }: Props) => `${size || '1.05'}rem`};
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  line-height: 1.75;

  @media screen and (max-width: 600px) {
    font-size: ${({ size }: Props) => {
      const digit = parseInt(size || '1.15');

      return (digit / 1.15).toString() + 'rem';
    }};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.text.third} !important;
    color: black !important;
    cursor: not-allowed;
    outline: none;
    border: none;
  }
`;
