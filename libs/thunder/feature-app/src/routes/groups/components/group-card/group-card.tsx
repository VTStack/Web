import { Card, Title } from '@v-thomas/libs/thunder/core-ui';
import { useNavigate } from 'react-router-dom';
import { GroupsEntity } from '@v-thomas/libs/thunder/data-access';

export interface GroupCardProps {
  group: GroupsEntity;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function GroupCard({ group, ...props }: GroupCardProps) {
  const router = useNavigate();

  return (
    <Card
      // padding="0.75"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...props}
      onClick={() => router(`../group/${group.id}`)}>
      <Title>{group.name}</Title>
    </Card>
  );
}

export default GroupCard;
