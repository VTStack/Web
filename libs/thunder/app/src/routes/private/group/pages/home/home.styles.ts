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

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

export const Form = styled.form`
  padding-right: 1rem;
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveAtSmall = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
