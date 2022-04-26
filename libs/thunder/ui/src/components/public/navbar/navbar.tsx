import { Button, Title } from '@v-thomas/shared/ui';
import { NavLinks, Navbar as SNavbar } from './navbar.styles';
import { SignInButton } from '../../auth/sign-in-button/sign-in-button';
import { SignUpButton } from '../../auth/sign-up-button/sign-up-button';
import { useUser } from '@v-thomas/thunder/hooks';
import { SignOutButton } from '../../auth';
import { useNavigate } from 'react-router-dom';
import { Variants } from 'framer-motion';

const NavbarAni: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function PublicNavbar() {
  const { isAuthed } = useUser();

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
            <Button onClick={() => router('/app')}>To Lobby</Button>
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
