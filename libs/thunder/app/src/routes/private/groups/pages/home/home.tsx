import { GroupGrid } from './home.styles';
import { Navbar } from '../../../../../components/navbar';
import { Button, Divider } from '@v-thomas/shared/ui';
import { useGroups } from '../../../../../hooks/groups';
import { useNavigate } from 'react-router-dom';
import { CreateGroupButton } from '../../components/create-group/create-group';
import { NoGroups } from './components/no-groups/no-groups';
import { clearGroups, signOutUser } from '@v-thomas/root/libs/thunder/data-access/src/public_api';
import { useDispatch } from 'react-redux';

export function GroupsHomePage() {
  const router = useNavigate();

  const { groups } = useGroups();
  const dispatch = useDispatch();

  return (
    <>
      <Navbar
        title="Groups"
        leftButtons={
          <Button
            variant="text"
            onClick={() => {
              dispatch(clearGroups());
              dispatch(signOutUser());
              router('/');
            }}>
            Sign out
          </Button>
        }
        rightButtons={<CreateGroupButton />}
      />

      <Divider />
      {groups.length ? <GroupGrid groups={groups} /> : <NoGroups />}
    </>
  );
}
