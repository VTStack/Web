/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy, StrictMode, Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';

import { Provider } from 'react-redux';

import { CheckServer } from '@v-thomas/thunder/ui';
import { ThunderStore } from '@v-thomas/thunder/data-access';
import '@v-thomas/shared/assets/globals.css';

const Root = styled(Suspense)`
  min-height: 100vh;
  max-width: 100vw;
  padding: 1.5rem;
  background-color: ${({ theme }: { theme: { background: { primary: string } } }) =>
    theme.background.primary};
  font-size: 16px;
  margin: 0;
`;

if (window.location.hostname !== 'localhost' && /cloudfront\.net$/.test(window.location.hostname))
  window.location.href = '//movie.v-thomas.me';

const FeatureGroupsRouter = lazy(() =>
  import('@v-thomas/thunder/feature-groups').then(v => ({ default: v.FeatureGroupsRouter }))
);
const FeatureInviteRouter = lazy(() =>
  import('@v-thomas/thunder/feature-invite').then(v => ({ default: v.FeatureInviteRouter }))
);

const FeatureHomePage = lazy(() =>
  import('@v-thomas/thunder/feature-home').then(v => ({ default: v.FeatureHomePage }))
);

const Feature404Page = lazy(() =>
  import('@v-thomas/thunder/feature-404-page').then(v => ({ default: v.NotFoundPage }))
);

export default () => {
  return (
    <StrictMode>
      <Provider store={ThunderStore}>
        <ThemeProvider theme={ThunderDarkTheme}>
          <SnackbarProvider maxSnack={3}>
            <HelmetProvider>
              <CheckServer />
              <BrowserRouter>
                <Root fallback={<div>loading...</div>}>
                  <Routes>
                    <Route path="app" element={<Navigate to="groups" replace />} />
                    <Route path="app/groups/*" element={<FeatureGroupsRouter />} />
                    <Route path="app/invite/*" element={<FeatureInviteRouter />} />
                    <Route index element={<FeatureHomePage />} />
                    <Route path="*" element={<Feature404Page />} />
                  </Routes>
                </Root>
              </BrowserRouter>
            </HelmetProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
};
