import { Button, SharedButtonVariants } from '@v-thomas/core-ui';

import { AuthModal } from '../auth-modal';
import { useToggle } from '@v-thomas/thunder/hooks';

export function SignUpButton({
  type = 'contained',
  text = 'Sign Up'
}: {
  type?: SharedButtonVariants;
  text?: string;
}) {
  const [isOpen, toggle] = useToggle(false);

  return (
    <>
      <Button variant={type} onClick={toggle} id="sign-up-button">
        {text}
      </Button>
      <AuthModal isOpen={isOpen} title="Sign up Today!" onClose={toggle} type="sign-up" />
    </>
  );
}
