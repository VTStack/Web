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
  background: ${({ theme }) => theme.color.accent};
`;

export function Avatar({ avatar }: { avatar: string | null }) {
  if (avatar) {
    return (
      <Background>
        <Img src={avatar} alt="" />
      </Background>
    );
  } else return null;
}
