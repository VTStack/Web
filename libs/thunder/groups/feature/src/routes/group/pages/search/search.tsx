// import { PrivateNavbar } from '@v-thomas/thunder/ui';
// import { useEffect, useReducer, useState } from 'react';
// import MovieSearchCard from '../../components/movie-search-card/movie-search-card';
// import { Button, Input, Title } from '@v-thomas/core/ui';
// import { useForm } from 'react-hook-form';
// import { useSnackbar } from 'notistack';
// import { useGroup, useMovies, useUser } from '@v-thomas/thunder/hooks';
// import { searchReducer } from './search.reducers';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Container, Grid, SearchContainer } from './search.styles';
// import { Helmet } from 'react-helmet-async';

import { Button, Col, Input, Link, Row, Title } from '@v-thomas/core/ui';
import { useMovies } from '@v-thomas/thunder/groups/hooks';
import { ApiMovieModel } from '@v-thomas/thunder/groups/types';
import { PrivateNavbar } from '@v-thomas/thunder/groups/ui';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useSearchParams } from 'react-router-dom';
import MovieSearchCard from '../../components/movie-search-card/movie-search-card';
import { Container } from './search.styles';

export function GroupSearchPage() {
  const { groupId } = useParams();
  const [query, setQuery] = useSearchParams({ query: '' });

  const { getRecommendedMovies } = useMovies({ groupId: groupId as string });

  const [movies, setMovies] = useState<ApiMovieModel[]>([]);

  useEffect(() => {
    if ((query.get('query') as string).length === 0) {
      getRecommendedMovies().then(setMovies);
      console.log(movies);
    }
  }, []);

  // const { groupId }: any = useParams();

  // const { group } = useGroup();

  // const [movies, dispatchState] = useReducer(searchReducer, {});

  // const { addMovie: AddMovie, movieState, getMovieRecommendations } = useMovies();
  // const [movieSearch, setMovieSearch] = useState('');

  // const router = useNavigate();

  // const { enqueueSnackbar } = useSnackbar();
  // const onSubmit = async ({ movie }: { movie?: string }) => {
  //   const [recommendations] = await getMovieRecommendations(movie);
  //   const movieIds: string[] = [];
  //   Object.values(movieState?.entities || {}).map((v: any) => movieIds.push(v?.movie_id));
  //   dispatchState({
  //     payload: { movies: recommendations.results, popular: false, already: movieIds }
  //   });
  // };

  // const { register, watch, handleSubmit } = useForm();

  // const movie = watch('movie', '');
  // useEffect(() => {
  //   setMovieSearch(movie);
  // }, [movie, setMovieSearch]);

  // useEffect(() => {
  //   async function main() {
  //     if (movieSearch === '') {
  //       const [movies] = await getMovieRecommendations();
  //       const movieIds: any[] = [];
  //       Object.values(movieState?.entities || {}).map((v: any) => movieIds.push(v?.movie_id));
  //       dispatchState({ payload: { movies: movies.results, already: movieIds, popular: true } });
  //     }
  //   }
  //   main();
  // }, [movieSearch, groupId, movieState, getMovieRecommendations]);

  // const addMovie = async (index: number) => {
  //   AddMovie(movies.movies[index]);
  //   enqueueSnackbar({ message: 'Added movie!', variant: 'success' });
  // };

  // const { user } = useUser();
  return (
    <Col gap="1">
      <Helmet>
        <title>Movie | Search</title>
      </Helmet>
      <PrivateNavbar
        title="Search"
        avatar
        leftButtons={
          <Link to={`/app/groups/${groupId}/m`}>
            <Button variant="text">Go Back</Button>
          </Link>
        }></PrivateNavbar>
      <Container>
        <Row gap="1" grid={['1fr', 'auto']}>
          <Input
            placeholder="Search term here..."
            value={query.get('query') || ''}
            onChange={e => setQuery({ query: e.currentTarget.value })}
          />
          <Button style={{ width: 'auto' }}>Submit Search</Button>
        </Row>

        <Col>
          {query.get('query') === '' && movies.length && (
            <>
              <Title>Popular Movies</Title>

              {movies.map((movie: ApiMovieModel) => (
                <MovieSearchCard key={movie.id} movie={movie} />
              ))}
            </>
          )}
        </Col>
        {query.get('query')}
      </Container>
    </Col>
  );
}

/* <Container>
        <PrivateNavbar
          avatar={user.avatar}
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
    /* {movies.popular && <Title>Popular movies</Title>}
        <Grid initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {movies?.movies?.map((movie: any, index: number) => (
            <MovieSearchCard key={index} movie={movie} onAdd={() => addMovie(index)} />
          ))}
          {movieState?.loadingStatus === 'LOADING' && <Title>Loading...</Title>}
        </Grid> */
//   </Container>
// </> */
