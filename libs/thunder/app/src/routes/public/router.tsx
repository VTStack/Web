import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { PublicFooter } from '@v-thomas/thunder/ui';
import { HomePage } from './pages/home';
import { usePublicAuth } from '../../hooks/auth';
import { NotFoundPage } from '../other/404';

const Root = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 1.5rem;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const PublicRootRoutes = () => {
  usePublicAuth();

  return (
    <Root>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <PublicFooter />
    </Root>
  );
};
