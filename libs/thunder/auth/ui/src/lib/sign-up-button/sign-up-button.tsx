import { Button, SharedButtonVariants } from '@v-thomas/external/core-ui';

import { AuthModal } from '../auth-modal';
import { useToggle } from '@v-thomas/external/hooks';

export function SignUpButton({
  type = 'contained',
  text = 'Sign Up'
}: {
  type?: SharedButtonVariants;
  text?: string;
}) {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <Button variant={type} onClick={() => toggle} id="sign-up-button">
        {text}
      </Button>
      <AuthModal isOpen={isOpen} title="Sign up Today!" onClose={toggle} type="sign-up" />
    </>
  );
}
