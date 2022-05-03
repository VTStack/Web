import { Button, SharedButtonVariants } from '@v-thomas/core-ui';
import { useAuth } from '@v-thomas/thunder/auth/hooks';

export function SignOutButton({ variant }: { variant?: SharedButtonVariants }) {
  const { signOut } = useAuth();

  return (
    <Button variant={variant || 'outlined'} onClick={signOut}>
      Sign out
    </Button>
  );
}
