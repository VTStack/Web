/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GroupGrid } from './home.styles';
import { PrivateNavbar } from '@v-thomas/thunder/ui';
import { Button, Divider, Title } from '@v-thomas/shared/ui';
import { useGroups, useUser } from '@v-thomas/thunder/hooks';
import { useNavigate } from 'react-router-dom';
import { CreateGroupButton } from './components/create-group/create-group';
import { NoGroups } from './components/no-groups/no-groups';
import { Helmet } from 'react-helmet-async';

export function GroupsHomePage() {
  const router = useNavigate();

  const { groups, allGroups, clearGroups } = useGroups();
  const { user, signOut } = useUser();

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Movie | {user.loadingStatus === 'LOADING' ? 'Loading...' : 'Lobby'}</title>
      </Helmet>
      <PrivateNavbar
        avatar={user.avatar}
        title="Groups"
        leftButtons={
          <Button
            variant="text"
            onClick={() => {
              clearGroups();
              signOut();
              router('/');
            }}
            disabled={user.loadingStatus !== 'AUTHED'}>
            Sign out
          </Button>
        }
        rightButtons={user.loadingStatus === 'AUTHED' && <CreateGroupButton />}
      />

      <Divider />
      {allGroups.loadingStatus === 'LOADED' ? (
        groups.length ? (
          <GroupGrid groups={groups} />
        ) : (
          <NoGroups />
        )
      ) : (
        <Title>Loading...</Title>
      )}
    </>
  );
}
