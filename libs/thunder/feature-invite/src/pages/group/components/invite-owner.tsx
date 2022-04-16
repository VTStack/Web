import { Modal, Row, Text, Title } from '@v-thomas/shared/ui';

export function InviteOwner() {
  return (
    <Modal isOpen={true} width="30">
      <Row gap="1">
        <Title>You are the owner of the invite!</Title>
        <Text>You are not allowed to join a server with your own invite!</Text>
        <Text>Try to send this link to someone else!</Text>
      </Row>
    </Modal>
  );
}

export default InviteOwner;
