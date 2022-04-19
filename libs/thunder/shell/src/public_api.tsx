/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StrictMode } from 'react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import {
  AUTH_FEATURE_KEY,
  authReducer,
  USER_FEATURE_KEY,
  userReducer,
  GROUPS_FEATURE_KEY,
  groupsReducer,
  MOVIES_FEATURE_KEY,
  moviesReducer,
  INVITE_FEATURE_KEY,
  inviteReducer,
  INVITES_FEATURE_KEY,
  invitesReducer
} from '@v-thomas/thunder/data-access';
import '@v-thomas/shared/web-utils';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { NotFoundPage } from './routes/other/404';

import { FeatureHomePage } from '@v-thomas/thunder/feature-home';
import { FeatureGroupsRouter } from '@v-thomas/thunder/feature-groups';
import { FeatureInviteRouter } from '@v-thomas/thunder/feature-invite';

const store = configureStore({
  reducer: {
    [INVITES_FEATURE_KEY]: invitesReducer,
    [INVITE_FEATURE_KEY]: inviteReducer,
    [USER_FEATURE_KEY]: userReducer,
    [MOVIES_FEATURE_KEY]: moviesReducer,
    [GROUPS_FEATURE_KEY]: groupsReducer,
    [AUTH_FEATURE_KEY]: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  enhancers: []
});

const Root = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  padding: 1.5rem;
`;

if (window.location.hostname !== 'localhost' && /cloudfront\.net$/.test(window.location.hostname))
  window.location.href = '//movie.v-thomas.me';

const Styles = styled.div`
  background-color: ${({ theme }: { theme: { background: { primary: string } } }) =>
    theme.background.primary};
  font-size: 16px;
  margin: 0;
`;

export default () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={ThunderDarkTheme}>
          {/* @ts-ignore */}
          <SnackbarProvider maxSnack={3}>
            {/* @ts-ignore */}
            <HelmetProvider>
              <Styles>
                <BrowserRouter>
                  <Root className={'root'}>
                    <Routes>
                      <Route path="app" element={<Navigate to="groups" replace />} />
                      <Route path="app/groups/*" element={<FeatureGroupsRouter />} />
                      <Route path="app/invite/*" element={<FeatureInviteRouter />} />
                      <Route index element={<FeatureHomePage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </Root>
                </BrowserRouter>
              </Styles>
            </HelmetProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
};
