import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@v-thomas/shared/theme';
import { StrictMode } from 'react';
import { SnackbarProvider } from 'notistack';
import { HashRouter } from 'react-router-dom';
import '@v-thomas/shared/web-utils';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { PrivateRootRoutes } from './routes/private/router';
import { PublicRootRoutes } from './routes/public/router';
export { GROUPS_FEATURE_KEY, groupsReducer } from '@v-thomas/thunder/data-access';
export { MOVIES_FEATURE_KEY, moviesReducer } from '@v-thomas/thunder/data-access';
export { INVITE_FEATURE_KEY, inviteReducer } from '@v-thomas/thunder/data-access';

const Root = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

if (window.location.hostname !== 'localhost' && /cloudfront\.net$/.test(window.location.hostname))
  window.location.href = '//movie.v-thomas.me';

const Styles = styled.div`
  background-color: ${({ theme }: { theme: { background: { primary: string } } }) =>
    theme.background.primary};
  min-height: 100vh;
  font-size: 16px;
  margin: 0;
`;

export default () => {
  return (
    <StrictMode>
      <ThemeProvider theme={DarkTheme}>
        <SnackbarProvider maxSnack={3}>
          <Styles>
            <HashRouter>
              <Root>
                <Routes>
                  <Route path="/app/*" element={<PrivateRootRoutes />} />
                  <Route path="*" element={<PublicRootRoutes />} />
                </Routes>
              </Root>
            </HashRouter>
          </Styles>
        </SnackbarProvider>
      </ThemeProvider>
    </StrictMode>
  );
};
