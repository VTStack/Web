import { Button, Modal, Row, Text, Title } from '@v-thomas/shared/ui';
import { useNavigate } from 'react-router-dom';

export function MainError() {
  const router = useNavigate();

  return (
    <Modal isOpen={true} width="auto">
      <Row gap="2">
        <Title>Whops!</Title>
        <Text>
          There has been an error! click to come home: <Button onClick={() => router('/')}>Click me</Button>
        </Text>
      </Row>
    </Modal>
  );
}
