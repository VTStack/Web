import { Text, Title } from '@v-thomas/shared/ui';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../../../../hooks';
import { MovieLayout } from '@v-thomas/thunder/ui';
import { MainContainer, Preview, HeaderContainer, PreviewContainer, ReviewContainer } from './movie.styles';
import { IslandContainerVariant, IslandVariant } from './movie.variants';

export function GroupMoviePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { movieId }: any = useParams();
  const { movie } = useMovie(movieId);

  return (
    <MovieLayout poster={movie?.poster_path} title={movie.title}>
      <MainContainer gap="2" variants={IslandContainerVariant} initial="hidden" animate="show" exit="exit">
        <HeaderContainer variants={IslandVariant} animate="animate" initial="initial">
          <Title>{movie?.title}</Title>
          <Text restrictWidth>{movie?.overview}</Text>
        </HeaderContainer>
        <ReviewContainer variants={IslandVariant} animate="animate" initial="initial">
          <Title size="1.2">Rating a movie, coming soon...</Title>
          {/* <Rating value={4} /> */}
        </ReviewContainer>
        <PreviewContainer variants={IslandVariant} animate="animate" initial="initial">
          {movie.ytKey ? (
            <Preview
              width="100%"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${movie.ytKey}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Text>This movie does not have a trailer</Text>
          )}
        </PreviewContainer>
      </MainContainer>
    </MovieLayout>
  );
}
