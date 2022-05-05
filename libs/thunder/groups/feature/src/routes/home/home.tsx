/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { SignOutButton } from '@v-thomas/thunder/auth/ui';
import { NewGroupModal, PrivateNavbar } from '@v-thomas/thunder/groups/ui';
import { NoGroups } from '@v-thomas/thunder/groups/ui';
import { Button, Divider, Title } from '@v-thomas/core/ui';

import { GroupGrid } from './home.styles';

import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGroups } from '@v-thomas/thunder/groups/hooks';
import { useSearchParams } from 'react-router-dom';

export const GroupsHomePage: FC = () => {
  const { groupsData } = useGroups({ idField: '_id' });

  const [params, setParams] = useSearchParams({ createGroupModal: false as any });

  const { user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const switchOpen = () => setParams({ createGroupModal: !params.get('createGroupModal') as any });

  return (
    <>
      <Helmet>
        <title>Movie | {user.status === 'loading' ? 'Loading...' : 'Lobby'}</title>
      </Helmet>
      <PrivateNavbar
        title="All Groups"
        avatar
        leftButtons={<SignOutButton variant="text" />}
        rightButtons={<Button onClick={switchOpen}>Create Group</Button>}
      />
      <NewGroupModal isOpen={params.get('createGroupModal') as unknown as boolean} toggleOpen={switchOpen} />
      <Divider />
      {groupsData.status === 'success' ? (
        groupsData.data.length ? (
          <GroupGrid groups={groupsData} />
        ) : (
          <NoGroups />
        )
      ) : (
        <Title>Loading...</Title>
      )}
    </>
  );
};
