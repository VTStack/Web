import { Navbar } from '../../components/navbar/navbar';
import MovieCard from '../../components/movie-card/movie-card';
import { Button, Input } from '@v-thomas/shared/ui';
import { Container, Form, Grid, GridAnimation, RemoveAtSmall } from './home.styles';
import { useGroup, useMovies } from '../../../../../hooks';
import { useNavigate } from 'react-router-dom';
import { Divider, Title } from '@v-thomas/shared/ui';
import NoMovies from './components/no-movies/no-movies';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGroupMovies, getMovieBySearch, groupsAdapter } from '@v-thomas/thunder/data-access';

export function GroupHomePage() {
  const { movies, clearMovies, movieState } = useMovies();
  const { group, allGroups } = useGroup();
  const router = useNavigate();

  const { register, watch, handleSubmit } = useForm();

  const [lastSearch, setLastSearch] = useState<null | string>('');

  const dispatch = useDispatch();

  const search = watch('search', '');

  useEffect(() => {
    if (!search.length && group && search !== lastSearch)
      dispatch(fetchGroupMovies({ payload: { groupId: group.id } }));
  }, [search, dispatch, group, lastSearch]);

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
          <Button
            variant="text"
            onClick={() => {
              clearMovies();
              router('../..');
            }}>
            To Lobby
          </Button>
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
      {allGroups.loadingStatus === 'LOADED' && movies.length ? (
        <Grid variants={GridAnimation} initial={'initial'} animate="show">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {movies?.map((movie: any, index: number) => (
            <MovieCard movie={movie} key={index} duration={index / movies.length} />
          ))}
        </Grid>
      ) : null}
      {movieState?.loadingStatus === 'LOADED' && !movies.length && <NoMovies />}
      {movieState?.loadingStatus === 'LOADING' && <Title>Loading...</Title>}
    </Container>
  );
}
