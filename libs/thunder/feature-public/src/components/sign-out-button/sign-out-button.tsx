import { Button } from '@v-thomas/libs/thunder/core-ui';
import { useDispatch } from 'react-redux';
import { signOutUser } from '@v-thomas/libs/thunder/data-access';

/* eslint-disable-next-line */
export interface SignOutButtonProps {}

export function SignOutButton() {
  const dispatch = useDispatch();

  return (
    <Button variant="outlined" onClick={() => dispatch(signOutUser())}>
      Sign out
    </Button>
  );
}

export default SignOutButton;
