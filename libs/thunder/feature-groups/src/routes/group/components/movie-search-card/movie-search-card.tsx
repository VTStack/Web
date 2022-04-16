import { Button, Card, Col, Text, Title, ButtonContainer } from '@v-thomas/shared/ui';
import styled from 'styled-components';

export interface MovieSearchCardProps {
  movie: {
    title: string;
    poster_path: string;
    overview: string;
  };
  onAdd: () => void;
}

const SMovieSearchCard = styled(Card)`
  padding: 0;
  display: flex;

  flex-direction: row;
`;

// const Container = styled(Row)`
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `;

export function MovieSearchCard({ movie, onAdd }: MovieSearchCardProps) {
  const poster = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

  return (
    <SMovieSearchCard>
      <img src={poster} alt="" width="200" height="300" />
      <Col padding="2" gap="1rem">
        <div>
          <Title>{movie.title}</Title>
          <Text>{movie.overview}</Text>
        </div>
        <ButtonContainer>
          <Button variant="text" onClick={onAdd}>
            Add To group
          </Button>
        </ButtonContainer>
      </Col>
    </SMovieSearchCard>
  );
}

export default MovieSearchCard;
