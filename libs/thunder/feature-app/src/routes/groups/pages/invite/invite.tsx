import { Button, Code, Modal, Row, Text, Title } from '@v-thomas/libs/thunder/core-ui';
import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchInvite, getInviteState } from '@v-thomas/libs/thunder/data-access';

const BtnContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export function InvitePage() {
  const dispatch = useDispatch();
  const state = useSelector(getInviteState);

  const router = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = useParams();

  useLayoutEffect(() => {
    async function main() {
      dispatch(fetchInvite({ payload: { inviteId: params['inviteId'] } }));
    }
    main();
  }, [dispatch, params]);

  if (state.error === 'OWNER_OF_INVITE') return <div>owner of invite</div>;

  async function accept() {
    // console.log(await addMemberToGroup(state.invite.id));
    // dispatch(addMember({ payload: { inviteId: params['inviteId'] } }));
    // router(`/app/group/${invite.Group.id}`);
  }

  async function decline() {
    router('../../groups');
  }

  return (
    <Modal width="auto" isOpen={true}>
      <Row gap="1">
        <Title>
          Invite to group <Code>{state.group?.name}</Code>
        </Title>

        <Text>You have been invited to {state.group?.name}. Do you want to join?</Text>

        <BtnContainer style={{ marginLeft: 'auto' }}>
          <Button variant="outlined" onClick={decline}>
            Decline
          </Button>
          <Button onClick={accept}>Accept</Button>
        </BtnContainer>
      </Row>
    </Modal>
  );
}
