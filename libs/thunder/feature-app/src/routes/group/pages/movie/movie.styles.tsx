import { Row } from '@v-thomas/shared/core-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 5px;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

export const MainContainer = styled(Row)`
  display: grid;
  max-width: 100%;
  gap: 1rem;
  grid-template-columns: 100%;
`;

export const HeaderContainer = styled(Container)``;
export const ReviewContainer = styled(Container)``;
export const PreviewContainer = styled(Container)``;

export const Preview = styled.iframe`
  width: min(100%, 560px);
  aspect-ratio: 16 / 9;
`;
