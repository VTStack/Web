import { GroupGrid } from './home.styles';
import { Navbar } from '../../../../../components/navbar';
import { Button, Divider, Title } from '@v-thomas/shared/ui';
import { useGroups } from '../../../../../hooks/groups';
import { useNavigate } from 'react-router-dom';
import { CreateGroupButton } from '../../components/create-group/create-group';
import { NoGroups } from './components/no-groups/no-groups';
import { clearGroups, signOutUser } from '@v-thomas/root/libs/thunder/data-access/src/public_api';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useUser } from '../../../../../hooks/user';
import { UserAvatar } from '@v-thomas/root/libs/thunder/ui/src/components';

export function GroupsHomePage() {
  const router = useNavigate();

  const { groups, allGroups } = useGroups();
  const dispatch = useDispatch();
  const [userState]: any = useUser();

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Movie | {userState.loadingStatus === 'LOADING' ? 'Loading...' : 'Lobby'}</title>
      </Helmet>
      <Navbar
        title="Groups"
        leftButtons={
          <Button
            variant="text"
            onClick={() => {
              dispatch(clearGroups());
              dispatch(signOutUser());
              router('/');
            }}
            disabled={userState.loadingStatus !== 'AUTHED'}>
            Sign out
          </Button>
        }
        rightButtons={
          userState.loadingStatus === 'AUTHED' && (
            <>
              <CreateGroupButton /> <UserAvatar />
            </>
          )
        }
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
