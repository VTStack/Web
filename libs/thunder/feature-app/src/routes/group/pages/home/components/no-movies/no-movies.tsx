import { Text, Title } from '@v-thomas/shared/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NoMoviesProps {}

const StyledNoMovies = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 15vh;
`;

export function NoMovies(props: NoMoviesProps) {
  return (
    <StyledNoMovies>
      <Title>You don't have any movies!</Title>
      <Text>Add one by clicking the top-right button </Text>
    </StyledNoMovies>
  );
}

export default NoMovies;
