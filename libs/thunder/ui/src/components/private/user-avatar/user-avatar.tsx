import { useUser } from '@v-thomas/root/libs/thunder/app/src/hooks/user';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UserAvatarProps {}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  --size: 45px;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.background.third};
`;

export function UserAvatar() {
  const user = useUser()[0];

  if ((user as any).avatar) {
    return (
      <Background>
        <Img src={(user as any).avatar} alt="" />
      </Background>
    );
  } else return null;
}

export default UserAvatar;
