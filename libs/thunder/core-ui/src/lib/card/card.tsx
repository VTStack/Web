import { motion } from 'framer-motion';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {
  width?: string;
  height?: string;
  padding?: string;
  theme?: { background: { third: string } };
  hoverColor?: boolean;
}

export const Card = styled(motion.div)`
  padding: ${({ padding = '1' }: CardProps) => `${padding}rem`};
  display: flex;
  flex-direction: column;

  cursor: pointer;

  position: relative;

  width: ${(props: CardProps) => props.width};
  height: ${(props: CardProps) => props.height};

  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  background-color: ${({ theme }) => theme.background.secondary};

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }: CardProps) => theme?.background.third};
  }
`;
