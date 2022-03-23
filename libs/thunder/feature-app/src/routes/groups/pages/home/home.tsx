import { GroupGrid } from './home.styles';
import { Navbar } from '../../../../components/navbar';
import { Button, Divider } from '@v-thomas/shared/core-ui';
import { useGroups } from '../../../../hooks/groups';
import { useNavigate } from 'react-router-dom';
import { CreateGroupButton } from '../../components/create-group/create-group';
import { NoGroups } from '../../pages/home/components/no-groups/no-groups';

export function GroupsHomePage() {
  const router = useNavigate();

  const { groups } = useGroups();

  return (
    <>
      <Navbar
        title="Groups"
        leftButtons={
          <Button variant="text" onClick={() => router('/home')}>
            To Home
          </Button>
        }
        rightButtons={<CreateGroupButton />}
      />

      <Divider />
      {groups.length ? <GroupGrid groups={groups} /> : <NoGroups />}
    </>
  );
}
