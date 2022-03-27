import { Button, Card, Code, Col, Modal, Row, Text, Title } from '@v-thomas/shared/ui';
import { createInviteLink, getUserInvites, removeInvite, ROLE } from '@v-thomas/thunder/data-access';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { removeInvite as RemoveInvite } from '@v-thomas/thunder/data-access';
import { useSnackbar } from 'notistack';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled(Button)``;

const ModalBody = styled(motion.div)`
  margin-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
`;

export function InviteButton(props: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [link, setLink] = useState<string | null>(null);

  const [invites, setInvites] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { groupId }: any = useParams();

  useEffect(() => {
    async function main() {
      if (isOpen) {
        const userInvites = await getUserInvites(groupId);
        if (getUserInvites.length) {
          // consoldde.log(await createInviteLink(groupId, ROLE.USER));
          // console.log('USER already has invites', userInvites);
        }
        setInvites(userInvites);
      }
    }
    main();
  }, [isOpen, groupId]);
  async function createInvite() {
    const [data, error] = await createInviteLink(groupId, ROLE.USER);
    console.log(data);
    const userInvites = await getUserInvites(groupId);
    console.log(data, userInvites);
    setInvites(userInvites);
  }
  function toggleOpen() {
    setIsOpen(val => !val);
  }

  async function removeInvite(inviteIndex: number) {
    const invite: any = invites[inviteIndex];
    console.log(invite);
    await RemoveInvite(invite.id);
    setInvites(await getUserInvites(groupId));
    enqueueSnackbar({ message: 'Removed invite' });
  }

  console.log(invites);

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
      <StyledButton onClick={toggleOpen}>Invite Others!</StyledButton>
      <Modal isOpen={isOpen} width="40" onClickAway={() => setIsOpen(val => !val)}>
        <Title>Your invites</Title>
        {!invites.length ? (
          <Text>You don't have any invite links. Would you like to create one?</Text>
        ) : (
          invites.map((v: any, index: number) => {
            return (
              <Card key={index} style={{ cursor: 'unset' }}>
                <Col>
                  <Row gap="0.5" style={{ cursor: 'pointer' }} onClick={() => copyInviteLink(index)}>
                    <Title size="1.3">{v.Group.name}</Title>
                    <Text>Created at: {new Date(v.createdAt).toDateString()}</Text>
                  </Row>
                  <Button variant="outlined" onClick={() => removeInvite(index)}>
                    remove
                  </Button>
                </Col>
              </Card>
            );
          })
          // <Card></Card>
        )}
        <ButtonContainer>
          <Button onClick={() => setIsOpen(val => !val)} variant="text">
            close
          </Button>
          {!invites.length && <Button onClick={createInvite}>Create invite</Button>}
        </ButtonContainer>
        {/* // ) : (
        // <>
        //   <Col>
        //     <Title>Invites</Title>
        //     <img src={Cross} alt="" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
        //   </Col>

        //   <Text>You already have invites. You can view it here:</Text>
        //   {invites.map((invite: any, index: number) => ( */}
        {/* //     <Card whileHover={{ scale: 1.025 }} key={index}>
        //       <Col style={{ paddingBottom: '1rem' }}>
        //         <Title size="1.3">{invite.Group.name}</Title>
        //         <motion.img */}
        {/* //           src={Cross}
        //           alt=""
        //           style={{ cursor: 'pointer' }}
        //           initial={{ scale: 0.8 }}
        //           onClick={() => testing(invite.id)}
        //         />
        //       </Col>
        //       <Text>
        //         Invite created at <Code padding="0.25rem">{new Date(invite.createdAt).toLocaleString()}</Code>
        //       </Text>
        //     </Card> */}
        {/* //   ))}
        // </> 
        // )}  */}
      </Modal>
    </>
  );
}
