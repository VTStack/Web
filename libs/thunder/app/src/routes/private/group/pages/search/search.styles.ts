import styled from 'styled-components';
import { Col } from '@v-thomas/shared/ui';
import { motion } from 'framer-motion';

export const SearchContainer = styled(Col)`
  width: 100%;
  & > * {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }
`;

export const Grid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
