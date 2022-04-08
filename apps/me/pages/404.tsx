import { Modal, Title, Text, ButtonContainer, Button, Link } from '@v-thomas/shared/ui';

import NLink from 'next/link';

export default function ThisPageNotFound() {
  return (
    <>
      <Modal isOpen width="auto">
        <Title>Hi! This website is not finnished!</Title>
        <Text>You can come back later to see if some progress has been made!</Text>
        <ButtonContainer gap="1">
          <NLink href={'/'}>
            <Button>Go Back</Button>
          </NLink>

          <Link external noLine to="https://link.v-thomas.me/github">
            <Button variant="outlined">To my github</Button>
          </Link>
        </ButtonContainer>
      </Modal>
    </>
  );
}
