import { AboutDarkTheme } from '@v-thomas/about/theme';
import styled, { ThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '@v-thomas/about/feature-home';
import { ProjectsPage } from '@v-thomas/about/feature-projects';
import '@v-thomas/shared/web-utils';

const StyledApp = styled.main`
  background: ${({ theme }) => theme.background.primary};
  min-height: 100vh;
  max-width: 100%;
`;

function CRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export function AboutShell() {
  return (
    <ThemeProvider theme={AboutDarkTheme}>
      <StyledApp>
        <BrowserRouter>
          <CRoutes />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}
