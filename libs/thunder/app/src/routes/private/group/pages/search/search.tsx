import { PrivateNavbar } from '@v-thomas/thunder/ui';
import { useEffect, useReducer } from 'react';
import { getMovieRecommendations } from '@v-thomas/thunder/data-access';
import MovieSearchCard from '../../components/movie-search-card/movie-search-card';
import { Button, Input, Title } from '@v-thomas/shared/ui';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useGroup, useMovies } from '../../../../../hooks';
import { searchReducer } from './search.reducers';
import { useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import { Container, Grid, SearchContainer } from './search.styles';
import { Helmet } from 'react-helmet-async';

import { useQueryState } from 'react-router-use-location-state';

export function GroupSearchPage() {
  const { groupId }: any = useParams();

  const { group } = useGroup();

  const [movies, dispatchState] = useReducer(searchReducer, {});

  const { addMovie: AddMovie, movieState } = useMovies();
  const [movieSearch, setMovieSearch] = useQueryState(
    'movieSearch',
    new URLSearchParams().get('movieSearch') || ''
  );

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
    setMovieSearch(movie);
  }, [movie]);

  useEffect(() => {
    async function main() {
      if (movieSearch === '') {
        const [movies] = await getMovieRecommendations(groupId);
        const movieIds: any[] = [];
        Object.values(movieState?.entities || {}).map((v: any) => movieIds.push(v?.movie_id));
        dispatchState({ payload: { movies: movies.results, already: movieIds, popular: true } });
      }
    }
    main();
  }, [movieSearch, groupId, movieState]);

  const addMovie = async (index: number) => {
    AddMovie(movies.movies[index]);
    enqueueSnackbar({ message: 'Added movie!', variant: 'success' });
  };

  return (
    <>
      <Helmet>
        <title>Movie | Search</title>
      </Helmet>
      <Container>
        <PrivateNavbar
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
    </>
  );
}
