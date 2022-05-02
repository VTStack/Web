import { Card, Title } from '@v-thomas/external/core-ui';
import { useNavigate } from 'react-router-dom';

export interface GroupCardProps {
  group: { name: string; _id: string };
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
      onClick={() => router(`${group._id}`)}>
      <Title>{group.name}</Title>
    </Card>
  );
}

export default GroupCard;
