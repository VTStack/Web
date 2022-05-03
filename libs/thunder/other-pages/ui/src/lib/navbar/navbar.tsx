import { Button, Title } from '@v-thomas/core/ui';
import { NavLinks, Navbar as SNavbar } from './navbar.styles';
import { useNavigate } from 'react-router-dom';
import { Variants } from 'framer-motion';
import { SignInButton, SignOutButton, SignUpButton } from '@v-thomas/thunder/auth/ui';
import { useAuth } from '@v-thomas/thunder/auth/hooks';

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
  const { user } = useAuth();

  const router = useNavigate();

  return (
    <SNavbar>
      <Title size="1.8" variants={NavbarAni} initial="initial" animate="animate" exit="exit">
        Movie Reviewer
      </Title>
      <NavLinks variants={NavbarAni} initial="initial" animate="animate" exit="exit">
        {user.status === 'success' ? (
          user.data.signedIn ? (
            <>
              <SignOutButton />
              <Button onClick={() => router('/app')}>To Lobby</Button>
            </>
          ) : (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          )
        ) : (
          <Title>Loading...</Title>
        )}
      </NavLinks>
    </SNavbar>
  );
}
