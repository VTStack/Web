import { Button, Code, Modal, Row, Text, Title } from '@v-thomas/libs/thunder/core-ui';
import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addMember, fetchInvite, getInviteState } from '@v-thomas/libs/thunder/data-access';
import InviteOwner from './components/invite-owner/invite-owner';

const BtnContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export function InvitePage() {
  const dispatch = useDispatch();
  const state = useSelector(getInviteState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { inviteId }: any = useParams();

  const router = useNavigate();

  useLayoutEffect(() => void dispatch(fetchInvite({ payload: { inviteId } })), [dispatch, inviteId]);

  if (state.error === 'OWNER_OF_INVITE') return <InviteOwner />;

  async function accept() {
    dispatch(addMember({ payload: { inviteId: inviteId } }));
    // router(`/app/group/${invite.Group.id}`);
  }

  async function decline() {
    // router('../../groups');
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
