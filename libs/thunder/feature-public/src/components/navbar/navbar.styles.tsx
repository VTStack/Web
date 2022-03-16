import { Link } from '@v-thomas/libs/thunder/core-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.header)`
  display: flex;
  justify-content: space-between;
`;

export const NavLinks = styled(motion.nav)`
  display: flex;
  gap: 3rem;
  align-items: center;
  font-size: 1.05rem !important;
`;

export const NavLink = styled(Link)`
  font-size: 1.05rem;
  margin-bottom: 0.1rem;
`;
