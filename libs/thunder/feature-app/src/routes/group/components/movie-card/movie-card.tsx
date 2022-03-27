import { Card, Title } from '@v-thomas/shared/ui';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MovieCardProps {
  movie: unknown;
  duration: number;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
`;

const Container = styled(Card)`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
  padding: 0;
`;

const LowerContainer = styled.div`
  padding: 0.75rem;
`;

export function MovieCard({ movie, duration = 0 }: MovieCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const backgroundURL = `https://image.tmdb.org/t/p/w200/${(movie as any).backdrop_path}`;

  const router = useNavigate();

  const gotoMovie = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router((movie as any).id);
  };

  return (
    <Container
      onClick={gotoMovie}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: duration }}>
      <Image src={backgroundURL} alt="" />
      <LowerContainer>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Title size="1.5">{(movie as any).title}</Title>
      </LowerContainer>
    </Container>
  );
}

export default MovieCard;
