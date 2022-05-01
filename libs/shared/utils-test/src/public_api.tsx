import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FC, ReactNode } from 'react';
import { AuthProvider, FirebaseAppProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyBF6geOiV5lxyg2eU5WpDeCOo0YgaxXXl0',
  authDomain: 'movie-2a28c.firebaseapp.com',
  projectId: 'movie-2a28c',
  storageBucket: 'movie-2a28c.appspot.com',
  messagingSenderId: '681444141056',
  appId: '1:681444141056:web:55d91b33860e421fda50e5'
};

export const SetupFirebase: FC<{ children: ReactNode }> = ({ children }) => {
  return <FirebaseAppProvider firebaseConfig={firebaseConfig}>{children}</FirebaseAppProvider>;
};

export const SetupFirestore: FC<{ children: ReactNode }> = ({ children }) => {
  const app = useFirebaseApp();

  const firestore = getFirestore(app);

  return <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>;
};

export const SetupAuth: FC<{ children: ReactNode }> = ({ children }) => {
  const app = useFirebaseApp();

  const auth = getAuth(app);

  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};

export * from './theme/theme';
