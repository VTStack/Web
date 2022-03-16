/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { Navbar } from '../../components/navbar';
import { motion } from 'framer-motion';
import { useEffect, useReducer } from 'react';
import { getMovieRecommendations } from '@v-thomas/libs/thunder/data-access';
import MovieSearchCard from '../../components/movie-search-card/movie-search-card';
import { Button, Col, Input, Title } from '@v-thomas/libs/thunder/core-ui';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useGroup, useMovies } from '../../../../hooks';
import { searchReducer } from './search.reducers';
import { useNavigate, useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SearchProps {}

const SearchContainer = styled(Col)`
  width: 100%;
  & > * {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }
`;

const Grid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export function GroupSearchPage(props: SearchProps) {
  const { groupId }: any = useParams();

  const { group } = useGroup();

  const [movies, dispatchState] = useReducer(searchReducer, {});

  const { addMovie: AddMovie, movieState } = useMovies();

  const router = useNavigate();

  const dispatch = useDispatch();

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
    dispatch(AddMovie(movies.movies[index]));
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
      </Grid>
    </Container>
  );
}
