import { Navbar } from '../../components/navbar/navbar';
import MovieCard from '../../components/movie-card/movie-card';
import { Button, Input } from '@v-thomas/libs/thunder/core-ui';
import { Grid, GridAnimation } from './home.styles';
import { useGroup, useMovies } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@v-thomas/libs/thunder/core-ui';
import NoMovies from './components/no-movies/no-movies';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGroupMovies, getMovieBySearch } from '@v-thomas/libs/thunder/data-access';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

const Form = styled.form`
  padding-right: 1rem;
  & > * {
    width: 100%;
    height: 100%;
  }
`;

const RemoveAtSmall = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export function GroupHomePage() {
  const { movies, clearMovies } = useMovies();
  const { group, clearGroups } = useGroup();
  const router = useNavigate();

  const { register, watch, handleSubmit } = useForm();

  const [lastSearch, setLastSearch] = useState<null | string>('');

  const dispatch = useDispatch();

  const search = watch('search', '');

  useEffect(() => {
    if (!search.length && group) dispatch(fetchGroupMovies({ payload: { groupId: group.id } }));
    setLastSearch(null);
  }, [search, dispatch, group]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit({ search: searchTerm }: any) {
    if (lastSearch === searchTerm) return;
    if (searchTerm.length) dispatch(getMovieBySearch({ payload: { text: searchTerm, groupId: group?.id } }));
    else dispatch(fetchGroupMovies({ payload: { groupId: group?.id } }));
    setLastSearch(searchTerm);
  }

  return (
    <Container>
      <Navbar
        title={group?.name}
        rightButtons={
          <Button variant="text" onClick={() => router('../search')}>
            Add Movie
          </Button>
        }
        leftButtons={
          <>
            <Button
              variant="text"
              onClick={() => {
                clearMovies();
                router('../..');
              }}>
              To Lobby
            </Button>
            <RemoveAtSmall>
              <Button
                variant="text"
                onClick={() => {
                  clearMovies();
                  clearGroups();
                  router('/');
                }}>
                To Home
              </Button>
            </RemoveAtSmall>
          </>
        }
        middle={
          <RemoveAtSmall>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input {...register('search')} />
            </Form>
          </RemoveAtSmall>
        }
      />
      <Divider />
      {movies.length > 0 ? (
        <Grid variants={GridAnimation} initial={'initial'} animate="show">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {movies?.map((movie: any, index: number) => (
            <MovieCard movie={movie} key={index} duration={index / movies.length} />
          ))}
        </Grid>
      ) : (
        <NoMovies />
      )}
    </Container>
  );
}
