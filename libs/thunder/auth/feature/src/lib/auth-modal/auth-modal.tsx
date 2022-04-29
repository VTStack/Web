// import Cross from '@v-thomas/shared/assets/x-mark.svg';
// import { Button, Input, Link, Modal, Text, Title, Row, SharedButtonVariants } from '@v-thomas/core-ui';
// import { useForm } from 'react-hook-form';
// import { joiResolver } from '@hookform/resolvers/joi';
// import * as Joi from 'joi';
// import { ErrorMsg, Form } from './sign-in-button.styles';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectAuthModalState,
//   getUserState,
//   signInUser,
//   toggleSignInModal,
//   toggleSignUpModal,
//   updateEmail,
//   updatePassword
// } from '@v-thomas/thunder/data-access';
// import { Helmet } from 'react-helmet-async';

import { Button, Input, Modal, Row, Text, Title } from '@v-thomas/core-ui';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { useEffect, useState } from 'react';
import { ErrorMsg, Form } from './sign-in-modal.styles';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  authAction: (...any: any) => any;
}

export function AuthModal({ isOpen, onClose, title = 'Sign in', authAction }: Props) {
  const [pastUsernamePassword, setPastUsernamePassword] = useState<any>('');

  const [errorMsg, setErrorMsg] = useState<string | null>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: any) => {
    setErrorMsg(null);
    e.preventDefault();
    const [{ value: email }, { value: password }] = e.target;
    setPastUsernamePassword(window.btoa(`${email}:${password}`) as any);
    authAction({ email, password }).catch(({ code }: { code: string }) => {
      if (code === 'auth/user-not-found')
        setErrorMsg('User not found. Try again with another email or password.');
    });
  };

  useEffect(() => {
    if (!(`${email}:${password}` !== window.atob(pastUsernamePassword))) return;
    if (errorMsg?.length) setErrorMsg(null);
  }, [email, password, pastUsernamePassword, errorMsg]);

  return (
    <Modal isOpen={isOpen} width="30">
      <Row>
        <Title>{title}</Title>
        <Button noStyle onClick={onClose}>
          <img src={'/assets/x-mark.svg'} alt="" />
        </Button>
      </Row>
      <Text>Type your credentials below to complete sign-in.</Text>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <Input
          placeholder="Password"
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={!!errorMsg} type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

// export function SignInButton({
//   type = 'hover-outlined',
//   text = 'Sign in'
// }: {
//   type?: SharedButtonVariants;
//   text?: string;
// }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors: formErrors }
//   } = useForm({ resolver: joiResolver(schema) });

//   const dispatch = useDispatch();

//   const state = useSelector(selectAuthModalState);

//   const userState = useSelector(getUserState);

//   // const { signIn } = useAuth;

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const onSubmit: (values: any) => void = (values: { email: string; password: string }) => {};

//   const passwordError = formErrors?.['password']?.message;
//   const emailError = formErrors?.['email']?.message;

//   return (
//     <>
//       <Button
//         variant={type}
//         onClick={() => {
//           dispatch(toggleSignInModal({ type: 'OPEN' }));
//         }}
//         id="sign-in-button">
//         {text}
//       </Button>
//       <Modal isOpen={state.signIn} width="45" gap="1">
//         {/* @ts-ignore */}
//         <Helmet>
//           <title>Movie | Sign in</title>
//         </Helmet>
//         <Row gap="auto" style={{ width: '100%' }}>
//           <Title>Sign in</Title>
//           <img
//             src={Cross}
//             alt="close the modal"
//             style={{ cursor: 'pointer', width: 30, height: 30 }}
//             onClick={() => dispatch(toggleSignInModal({ type: 'CLOSE' }))}
//           />
//         </Row>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Input
//             type="text"
//             placeholder="Email"
//             {...register('email', {
//               required: true,
//               onChange: ({ target: { value } }) => dispatch(updateEmail(value)),
//               value: state.email
//             })}
//           />
//           {emailError && <ErrorMsg> {emailError}</ErrorMsg>}
//           <Input
//             placeholder="Password"
//             type="password"
//             {...register('password', {
//               required: true,
//               onChange: ({ target: { value } }) => dispatch(updatePassword(value)),
//               value: state.password
//             })}
//           />
//           {passwordError && <ErrorMsg> {passwordError}</ErrorMsg>}
//           {userState.loadingStatus === 'WRONG_CREDENTIALS' && (
//             <ErrorMsg>You have entered the wrong credentials. Please try again</ErrorMsg>
//           )}
//           <Button disabled={userState.loadingStatus === 'LOADING'}>SUBMIT</Button>
//         </Form>
//         <Row gap="auto">
//           <Link
//             onClick={() => {
//               window.open('mailto:vincent.nathan.thomas@gmail.com');
//             }}>
//             Forgot your account?
//           </Link>
//           <Text>
//             Don't have an account?{' '}
//             <Link
//               onClick={() => {
//                 dispatch(toggleSignInModal({ type: 'CLOSE' }));
//                 setTimeout(() => dispatch(toggleSignUpModal({ type: 'OPEN' })), 250);
//               }}>
//               Sign Up!
//             </Link>
//           </Text>
//         </Row>
//       </Modal>
//     </>
//   );
// }
