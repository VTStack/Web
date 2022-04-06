import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { PublicFooter, PublicNavbar } from '@v-thomas/thunder/ui';
import { HomePage } from './pages/home';
import { usePublicAuth } from '../../hooks/auth';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem;
`;

export const PublicRootRoutes = () => {
  usePublicAuth();

  return (
    <Root>
      <PublicNavbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate replace={true} to="/home" />} />
      </Routes>
      <PublicFooter />
    </Root>
  );
};
