import { Title } from '@v-thomas/shared/ui';
import { NavLinks, Navbar as SNavbar } from './navbar.styles';
import { SignInButton } from '../../auth/sign-in-button/sign-in-button';
import { SignUpButton } from '../../auth/sign-up-button/sign-up-button';

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

export function PublicNavbar() {
  return (
    <SNavbar>
      <Title size="1.8" variants={NavbarAni} initial="initial" animate="animate" exit="exit">
        Movie Reviewer
      </Title>
      <NavLinks variants={NavbarAni} initial="initial" animate="animate" exit="exit">
        <SignInButton />
        <SignUpButton />
      </NavLinks>
    </SNavbar>
  );
}
