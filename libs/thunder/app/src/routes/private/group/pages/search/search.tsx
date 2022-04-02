import { Navbar } from '../../components/navbar';
import { useEffect, useReducer } from 'react';
import { getMovieRecommendations } from '@v-thomas/thunder/data-access';
import MovieSearchCard from '../../components/movie-search-card/movie-search-card';
import { Button, Input, Title } from '@v-thomas/shared/ui';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useGroup, useMovies } from '../../../../../hooks';
import { searchReducer } from './search.reducers';
import { useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { Container, Grid, SearchContainer } from './search.styles';

export function GroupSearchPage() {
  const { groupId }: any = useParams();

  const { group } = useGroup();

  const [movies, dispatchState] = useReducer(searchReducer, {});

  const { addMovie: AddMovie, movieState } = useMovies();

  const router = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async ({ movie }: { movie?: string }) => {
    const [recommendations] = await getMovieRecommendations(groupId, movie);
    const movieIds: any[] = [];
    Object.values(movieState?.entities || {}).map((v: any) => movieIds.push(v?.movie_id));
    dispatchState({
      payload: { movies: recommendations.results, popular: false, already: movieIds }
    });
  };

  const { register, watch, handleSubmit } = useForm();

  const movie = watch('movie', '');

  useEffect(() => {
    async function main() {
      if (movie === '') {
        const [movies] = await getMovieRecommendations(groupId);
        const movieIds: any[] = [];
        Object.values(movieState?.entities || {}).map((v: any) => movieIds.push(v?.movie_id));
        dispatchState({ payload: { movies: movies.results, already: movieIds, popular: true } });
      }
    }
    main();
  }, [movie, groupId, movieState]);

  const addMovie = async (index: number) => {
    console.log(movies.movies[index]);
    AddMovie(movies.movies[index]);
    enqueueSnackbar({ message: 'Added movie!', variant: 'success' });
  };

  return (
    <Container>
      <Navbar
        title={group?.name}
        leftButtons={
          <Button variant="text" onClick={() => router('..')}>
            Go back
          </Button>
        }
      />
      <SearchContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('movie')} />
          <Button variant="outlined" type="submit">
            Search Movies
          </Button>
        </form>
      </SearchContainer>
      {movies.popular && <Title>Popular movies</Title>}
      <Grid initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {movies?.movies?.map((movie: any, index: number) => (
          <MovieSearchCard key={index} movie={movie} onAdd={() => addMovie(index)} />
        ))}
        {movieState?.loadingStatus === 'LOADING' && <Title>Loading...</Title>}
      </Grid>
    </Container>
  );
}
