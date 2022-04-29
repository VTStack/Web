import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { ObservableStatus, SigninCheckResult, useAuth as useAuthF, useSigninCheck } from 'reactfire';

interface SignInOutput {
  signOut: () => Promise<void>;
  signIn: ({ email, password }: { email: string; password: string }) => Promise<UserCredential>;
  user: ObservableStatus<SigninCheckResult>;
}

export const useAuth = ({ idField = '' }): SignInOutput => {
  const auth = useAuthF();

  const signIn = ({ email, password }: { email: string; password: string }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => auth.signOut();

  return { signIn, signOut, user: useSigninCheck({ idField }) };
};
