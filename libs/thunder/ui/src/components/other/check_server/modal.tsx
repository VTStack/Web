import { useToggle } from '@v-thomas/hooks';
import { Button, ButtonContainer, Col, Link, Modal, Row, Text, Title } from '@v-thomas/core-ui';
import { usePing } from '@v-thomas/thunder/hooks';
import { useEffect } from 'react';

export default () => {
  const [isServerUp, toggleIsServerUp] = useToggle(true);
  const [showButtons, toggleShowButtons] = useToggle(false);

  useEffect(() => {
    usePing().then(toggleIsServerUp);
  }, []);

  return (
    <Modal isOpen={!isServerUp} width="auto">
      <Title>
        <i className="material-symbols-outlined">back_hand</i> Woah, Looks like the server is down!
      </Title>
      <Col gap="0.5">
        <Text>
          If you see this, it means that something has gone wrong!
          <br />
          Please report this issue to this email-address:
        </Text>
      </Col>
      <Link external to="mailto:vincent@v-thomas.me" icon>
        vincent@v-thomas.me
      </Link>
      <Text>
        If you are a developer, check if the server is up{' '}
        <Link to="https://api.v-thomas.me/thunder/ping" external line>
          here
        </Link>
        .
      </Text>
      <ButtonContainer align="right">
        <Button onClick={() => void toggleShowButtons()} variant="text" size="0.9">
          I know what i'm doing
        </Button>
        {showButtons && (
          <Row gap="1">
            <Text>Are you sure?</Text>
            <Button variant="text" size="0.8" onClick={() => void toggleIsServerUp()}>
              Yes
            </Button>
            <Button onClick={() => void toggleShowButtons()} size="0.8">
              No
            </Button>
          </Row>
        )}
      </ButtonContainer>
    </Modal>
  );
};
