import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TitleProps {
  size?: string;
  align?: 'center' | 'right' | 'left';
  children: ReactNode;
}
export const Title = styled(motion.h1)<TitleProps>`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: ${props => (props.size || '2') + 'rem'};
  color: ${({ theme }) => theme.text.primary};

  text-align: ${({ align }) => {
    return align || 'left';
  }};

  @media screen and (max-width: 500px) {
    font-size: ${(props: TitleProps) => {
      const digit = parseInt(props.size || '2');

      return (digit / 1.5).toString() + 'rem';
    }};
  }
`;

export const TitleTest: FC<TitleProps> = props => {
  return <Title {...props}>{props.children}</Title>;
};
