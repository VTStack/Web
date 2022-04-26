import { Button } from '@v-thomas/shared/ui';
import { useDispatch } from 'react-redux';
import { signOutUser } from '@v-thomas/thunder/data-access';

/* eslint-disable-next-line */
console.log('THUUNK', signOutUser());

export function SignOutButton() {
  // const dispatch = useDispatch();

  return (
    <Button
      variant="outlined"
      // onClick={() => dispatch(signOutUser())}
    >
      Sign out
    </Button>
  );
}
