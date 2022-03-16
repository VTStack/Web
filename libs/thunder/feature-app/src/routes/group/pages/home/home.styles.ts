import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const GridAnimation: Variants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  },
  initial: {
    opacity: 0
  }
};
