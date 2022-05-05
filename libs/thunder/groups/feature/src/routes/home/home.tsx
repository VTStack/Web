import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { SignOutButton } from '@v-thomas/thunder/auth/ui';
import { NewGroupModal, PrivateNavbar } from '@v-thomas/thunder/groups/ui';
import { NoGroups } from '@v-thomas/thunder/groups/ui';
import { Button, Divider, Title } from '@v-thomas/core/ui';

import { GroupGrid } from './home.styles';

import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGroups } from '@v-thomas/thunder/groups/hooks';
import { useUrlSearchParams } from 'use-url-search-params';

const types = {
  createGroupModal: Boolean
};

export const GroupsHomePage: FC = () => {
  const { groupsData } = useGroups({ idField: '_id' });

  const [params, setParams] = useUrlSearchParams({ createGroupModal: false }, types, true);

  const { user } = useAuth();

  const switchOpen = () => setParams({ createGroupModal: !params['createGroupModal'] });

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
      <NewGroupModal isOpen={params['createGroupModal'] as boolean} toggleOpen={switchOpen} />
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
