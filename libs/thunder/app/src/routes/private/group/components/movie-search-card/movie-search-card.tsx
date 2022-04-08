import { Button, Card, Col, Row, Text, Title, ButtonContainer } from '@v-thomas/shared/ui';
import styled from 'styled-components';

export interface MovieSearchCardProps {
  movie: unknown;
  onAdd: () => void;
}

const SMovieSearchCard = styled(Card)`
  padding: 0;
  display: flex;

  flex-direction: row;
`;

const Container = styled(Row)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export function MovieSearchCard({ movie, onAdd }: MovieSearchCardProps) {
  const poster = `https://image.tmdb.org/t/p/w200/${(movie as any).poster_path}`;

  return (
    <SMovieSearchCard>
      <img src={poster} alt="" width="200" height="300" />
      <Col padding="2" gap="1rem">
        <div>
          <Title>{(movie as any).title}</Title>
          <Text>{(movie as any).overview}</Text>
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
