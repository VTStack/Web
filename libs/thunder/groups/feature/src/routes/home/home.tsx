import { useGroups } from '@v-thomas/thunder/groups/hooks';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { PrivateNavbar } from '@v-thomas/thunder/ui';
import { Divider, Title } from '@v-thomas/core-ui';
import { GroupGrid } from './home.styles';
import NoGroups from './components/no-groups/no-groups';
import { SignOutButton } from '@v-thomas/thunder/auth/ui';

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
