import { Title } from '@v-thomas/core-ui';
import { useNavigate } from 'react-router-dom';
import { Image, Container, LowerContainer } from './movie-card.styles';
import { MovieCardProps } from './movie-card.types';

export function MovieCard({ movie, duration }: MovieCardProps) {
  const backgroundURL = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`;

  const router = useNavigate();

  const gotoMovie = () => router(movie.id);

  return (
    <Container
      onClick={gotoMovie}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: duration }}
      data-testid="card">
      <Image src={backgroundURL} alt="" data-testid="movie-card-image-id" />
      <LowerContainer>
        <Title size="1.5" data-testid="movie-card-title">
          {movie.title}
        </Title>
      </LowerContainer>
    </Container>
  );
}

export default MovieCard;
