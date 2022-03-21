import { Button, Title } from '@v-thomas/libs/thunder/core-ui';
import { NavLinks, Navbar as SNavbar } from './navbar.styles';
import { SignInButton } from '../sign-in-button/sign-in-button';
import { SignUpButton } from '../sign-up-button/sign-up-button';
import SignOutButton from '../sign-out-button/sign-out-button';
import { useUser } from '../../hooks/user';
import { useNavigate } from 'react-router-dom';

const NavbarAni = {
  initial: { opacity: 0, y: -10 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function Navbar() {
  const isAuthed = useUser()[1];

  const router = useNavigate();

  return (
    <SNavbar>
      <Title size="1.8" variants={NavbarAni} initial="initial" animate="animate" exit="exit">
        Movie Reviewer
      </Title>
      <NavLinks variants={NavbarAni} initial="initial" animate="animate" exit="exit">
        {isAuthed ? (
          <>
            <SignOutButton />
            <Button onClick={() => router('/app/groups')}>To Lobby</Button>
          </>
        ) : (
          <>
            <SignInButton />
            <SignUpButton />
          </>
        )}
      </NavLinks>
    </SNavbar>
  );
}

export default Navbar;
