import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { SignOutButton } from '@v-thomas/thunder/auth/ui';
import { PrivateNavbar } from '@v-thomas/thunder/groups/ui';
import { NoGroups } from '@v-thomas/thunder/groups/ui';
import { Divider, Title } from '@v-thomas/core/ui';

import { GroupGrid } from './home.styles';

import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useGroups } from '@v-thomas/thunder/groups/hooks';

export const GroupsHomePage: FC = () => {
  const { groupsData } = useGroups({ idField: '_id' });

  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Movie | {user.status === 'loading' ? 'Loading...' : 'Lobby'}</title>
      </Helmet>
      <PrivateNavbar
        title="All Groups"
        avatar={`https://avatars.dicebear.com/api/avataaars/${user.data?.user?.uid}.svg`}
        leftButtons={<SignOutButton variant="text" />}
      />

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
