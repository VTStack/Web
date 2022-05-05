/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CreateGroupButton, PrivateNavbar } from '@v-thomas/thunder/groups/ui';
import { Helmet } from 'react-helmet-async';
import { useGroups, useMovies } from '@v-thomas/thunder/groups/hooks';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Divider, Link, Text, Title } from '@v-thomas/core/ui';
import { NoMovies } from './components/no-movies';

export function GroupHomePage() {
  const { groupsData } = useGroups();

  const { groupId } = useParams();

  const group = groupsData.data?.find(group => group['_id'] === groupId);

  const { movies, movieData } = useMovies({ groupId: group?.['_id'] || 'f' });

  const { user } = useAuth();

  const router = useNavigate();

  const loadingStatus = groupsData.status;

  const finishedLoading =
    loadingStatus === 'success' && movieData.status === 'success' && movies !== undefined;

  return (
    <>
      <Helmet>
        <title>{`Movie | ${group?.['name'] || 'Loading...'}`}</title>
      </Helmet>
      <PrivateNavbar
        avatar
        title={group?.['name'] || ''}
        leftButtons={
          <Button onClick={() => router('..')} variant="text">
            To lobby
          </Button>
        }
        rightButtons={
          <Link to={`/app/groups/${groupId}/search`}>
            <Button>Add Movie</Button>
          </Link>
        }
      />

      <Divider />

      {loadingStatus === 'loading' && <Title>loading...</Title>}
      {finishedLoading && movies.length ? (
        movies?.map((movie, index: number) => (
          <Link to={movie['_id']} key={movie['_id']}>
            <Card key={index}>
              <Title>{movie['name']}</Title>
              <Text>{movie['description']}</Text>
            </Card>
          </Link>
        ))
      ) : (
        <NoMovies />
      )}

      {/* <Container>
        <PrivateNavbar
          avatar={user.avatar}
          title={group?.name}
          rightButtons={
            <Button variant="text" onClick={() => router(`/app/groups/${group.id}/search`)}>
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
    </>
  );
}
