import { Button, Card, Code, Col, Modal, Text, Title } from '@v-thomas/shared/core-ui';
import { createInviteLink, getUserInvites, removeInvite, ROLE } from '@v-thomas/thunder/data-access';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Cross from '../../../../../../assets/x.svg';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled(Button)``;

const ModalBody = styled(motion.div)`
  margin-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
          console.log(await createInviteLink(groupId, ROLE.USER));
          console.log('USER already has invites', userInvites);
        }
        setInvites(userInvites);
        // const [data, errorCode] = await createInviteLink(groupId, 'USER');
        console.log(userInvites);
        console.log(userInvites);
        // if (errorCode === 409) {
        //   setError(true);
        // } else {
        //   setLink(data);
        // }
      }
    }
    main();
  }, [isOpen, groupId]);
  function testing(id: string) {
    console.log(id);
    removeInvite(id);
  }

  return (
    <>
      <StyledButton onClick={() => setIsOpen(val => !val)}>Invite Others!</StyledButton>
      <Modal isOpen={isOpen} width="auto" onClickAway={() => setIsOpen(val => !val)}>
        {/* {invites.length > 1 ? (
          <>
            <Title>Invite others</Title>
            <ModalBody>
              <Text>Share this link to other people to join your group:</Text>
              <Code>{link}</Code>
            </ModalBody>

            <Button onClick={() => setIsOpen(val => !val)}>close</Button>
          </>
        ) : ( */}
        <>
          <Col>
            <Title>Invites</Title>
            <img src={Cross} alt="" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
          </Col>
          <Text>You already have invites. You can view it here:</Text>
          {invites.map((invite: any, index: number) => (
            <Card whileHover={{ scale: 1.025 }} key={index}>
              <Col style={{ paddingBottom: '1rem' }}>
                <Title size="1.3">{invite.Group.name}</Title>
                <motion.img
                  src={Cross}
                  alt=""
                  style={{ cursor: 'pointer' }}
                  initial={{ scale: 0.8 }}
                  onClick={() => testing(invite.id)}
                />
              </Col>
              <Text>
                Invite created at <Code padding="0.25rem">{new Date(invite.createdAt).toLocaleString()}</Code>
              </Text>
            </Card>
          ))}
        </>
        {/* )} */}
      </Modal>
    </>
  );
}
