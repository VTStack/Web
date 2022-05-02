import { StrictMode, Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ThunderDarkTheme, ThunderLightTheme } from './theme';

import { createRoot } from 'react-dom/client';
import '@v-thomas/shared/assets/globals.css';
import { FeatureGroupsRouter, FeatureInviteRouter, HomePage, NotFoundPage } from './routes';
import { AuthProvider, FirebaseAppProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const RootE = styled.div`
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

const firebaseConfig = {
  apiKey: 'AIzaSyBF6geOiV5lxyg2eU5WpDeCOo0YgaxXXl0',
  authDomain: 'movie-2a28c.firebaseapp.com',
  projectId: 'movie-2a28c',
  storageBucket: 'movie-2a28c.appspot.com',
  messagingSenderId: '681444141056',
  appId: '1:681444141056:web:55d91b33860e421fda50e5'
};

const RootApp = () => {
  return (
    <StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </StrictMode>
  );
};

const App = () => {
  const app = useFirebaseApp();
  const firestoreInstance = getFirestore(app);

  const authInstance = getAuth(app);

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={authInstance}>
        <ThemeProvider theme={ThunderDarkTheme}>
          <SnackbarProvider maxSnack={3}>
            <HelmetProvider>
              <HashRouter>
                <Suspense fallback={<div>loading...</div>}>
                  <RootE>
                    <Routes>
                      <Route path="app" element={<Navigate to="groups" replace />} />
                      <Route path="app/groups/*" element={<FeatureGroupsRouter />} />
                      <Route path="app/invite/*" element={<FeatureInviteRouter />} />
                      <Route index element={<HomePage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </RootE>
                </Suspense>
              </HashRouter>
            </HelmetProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </AuthProvider>
    </FirestoreProvider>
  );
};

const Root = document.getElementById('root') as Element;

createRoot(Root).render(<RootApp />);
