import { Button, Card, Row, Modal, Text, Title, Col, ButtonContainer } from '@v-thomas/shared/ui';
import { createInviteLink, getUserInvites, ROLE } from '@v-thomas/thunder/data-access';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { removeInvite as RemoveInvite } from '@v-thomas/thunder/data-access';
import { useSnackbar } from 'notistack';
export function InviteButton() {
  const [isOpen, setIsOpen] = useState(false);

  const [invites, setInvites] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { groupId }: any = useParams();

  useEffect(() => {
    async function main() {
      if (isOpen) {
        const userInvites = await getUserInvites(groupId);

        setInvites(userInvites);
      }
    }
    main();
  }, [isOpen, groupId]);
  async function createInvite() {
    const [data] = await createInviteLink(groupId, ROLE.USER);
    const userInvites = await getUserInvites(groupId);
    setInvites(userInvites);
  }
  function toggleOpen() {
    setIsOpen(val => !val);
  }

  async function removeInvite(inviteIndex: number) {
    const invite: any = invites[inviteIndex];
    await RemoveInvite(invite.id);
    setInvites(await getUserInvites(groupId));
    enqueueSnackbar({ message: 'Removed invite' });
  }

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  function copyInviteLink(index: number) {
    const invite: any = invites[index];
    navigator.clipboard.writeText(
      `${
        new RegExp(/localhost/).test(window.location.origin.split('/', 3)[2])
          ? 'http://localhost:3000'
          : 'https://movie.v-thomas.xyz'
      }/#/app/invite/group/${invite.id}`
    );
    enqueueSnackbar({
      message: 'Invite Link copied to clipboard',
      variant: 'default',
      action: (
        <Button variant="outlined" onClick={void closeSnackbar}>
          close
        </Button>
      )
    });
  }

  return (
    <>
      <Button onClick={toggleOpen}>Invite Others!</Button>
      <Modal isOpen={isOpen} width="40" onClickAway={() => setIsOpen(val => !val)}>
        <Title>Your invites</Title>
        {!invites.length ? (
          <Text>You don't have any invite links. Would you like to create one?</Text>
        ) : (
          invites.map((v: any, index: number) => (
            <Card key={index} style={{ cursor: 'unset' }}>
              <Col>
                <Row gap="0.5" style={{ cursor: 'pointer' }} onClick={() => copyInviteLink(index)}>
                  <Title size="1.3">{v.Group.name}</Title>
                  <Text>Created at: {new Date(v.createdAt).toDateString()}</Text>
                </Row>
                <Button variant="outlined" onClick={() => removeInvite(index)}>
                  Remove
                </Button>
              </Col>
            </Card>
          ))
        )}
        <ButtonContainer gap="1">
          <Button onClick={() => setIsOpen(val => !val)} variant="text">
            close
          </Button>
          {!invites.length && <Button onClick={createInvite}>Create invite</Button>}
        </ButtonContainer>
      </Modal>
    </>
  );
}
