import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { ObservableStatus, SigninCheckResult, useAuth as useAuthF, useSigninCheck } from 'reactfire';

interface EmailPassword {
  email: string;
  password: string;
}

interface AuthOutput {
  signOut: () => Promise<void>;
  signIn: ({ email, password }: EmailPassword) => Promise<UserCredential>;
  user: ObservableStatus<SigninCheckResult>;
  signUp: ({ email, password }: EmailPassword) => Promise<UserCredential>;
}

export const useAuth = (props: { idField: string } = { idField: '_id' }): AuthOutput => {
  const auth = useAuthF();

  const signIn = ({ email, password }: EmailPassword) => signInWithEmailAndPassword(auth, email, password);

  const signOut = () => auth.signOut();

  const signUp = ({ email, password }: EmailPassword) =>
    createUserWithEmailAndPassword(auth, email, password);
  const user = useSigninCheck({ idField: props.idField });

  return { signIn, signOut, signUp, user };
};
