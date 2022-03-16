// import { useNavigate } from '@tanstack/react-location';
import { Modal, Row, Text, Title } from '@v-thomas/libs/thunder/core-ui';

/* eslint-disable-next-line */
export interface MainErrorProps {}

export function MainError(props: MainErrorProps) {
  // const router = useNavigate();

  return (
    <Modal isOpen={true} width="auto">
      <Row gap="2">
        <Title>Whops!</Title>
        <Text>
          There has been an error! click to come home:{' '}
          {/* <Button onClick={() => router({ to: '/' })}>Click me</Button> */}
        </Text>
      </Row>
    </Modal>
  );
}

export default MainError;
