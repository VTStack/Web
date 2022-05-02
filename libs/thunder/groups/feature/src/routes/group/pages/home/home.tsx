/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrivateNavbar } from '@v-thomas/thunder/groups/ui';
import { Helmet } from 'react-helmet-async';
import { useGroups } from '@v-thomas/thunder/groups/hooks';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Divider, Title } from '@v-thomas/external/core-ui';

export function GroupHomePage() {
  const { groupsData } = useGroups();

  const { groupId } = useParams();

  const group = groupsData.data?.find(group => group['_id'] === groupId) || { name: '' };

  const { user } = useAuth();

  const router = useNavigate();

  return (
    <>
      <Helmet>
        <title>{`Movie | ${group?.['name'] || 'Loading...'}`}</title>
      </Helmet>
      <PrivateNavbar
        avatar={`https://avatars.dicebear.com/api/avataaars/${user.data?.user?.uid}.svg`}
        title={group['name']}
        leftButtons={
          <Button onClick={() => router('..')} variant="text">
            To lobby
          </Button>
        }
      />

      <Divider />

      {groupsData.status === 'success'}
      <Title>coming soon...</Title>

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
