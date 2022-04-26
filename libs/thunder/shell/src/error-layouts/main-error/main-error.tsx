import { Button, Modal, Row, Text, Title } from '@v-thomas/shared/ui';

export function MainError() {
  return (
    <Modal isOpen width="auto">
      <Row gap="2">
        <Title>Whops!</Title>
        <Text>
          There has been an error! click to come home:{' '}
          <Button onClick={() => (window.location.href = '/')}>Click me</Button>
        </Text>
      </Row>
    </Modal>
  );
}
