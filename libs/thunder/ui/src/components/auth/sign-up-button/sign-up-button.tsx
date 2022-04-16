/* eslint-disable @typescript-eslint/ban-ts-comment */
import Cross from '@v-thomas/shared/assets/x-mark.svg';
import { Button, Input, Link, Modal, Text, Title, Row, SharedButtonVariants } from '@v-thomas/shared/ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthModalState,
  toggleSignInModal,
  toggleSignUpModal,
  updateEmail,
  updatePassword,
  signUpUser,
  getUserState,
  clearAuthErrors
} from '@v-thomas/thunder/data-access';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMsg } from '../sign-in-button/sign-in-button.styles';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(7)
});

export function SignUpButton({
  type = 'contained',
  text = 'Sign Up'
}: {
  type?: SharedButtonVariants;
  text?: string;
}) {
  const onSubmit = (v: { email: string; password: string }) => {
    const { email, password } = v;
    dispatch(signUpUser({ payload: { email, password } }));
  };

  const state = useSelector(selectAuthModalState);

  const userState = useSelector(getUserState);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    watch
  } = useForm({ resolver: joiResolver(schema) });

  const passwordError = formErrors?.['password']?.message;
  const emailError = formErrors?.['email']?.message;

  const email = watch('email');

  useEffect(() => {
    if (userState.error === 'ALREADY_EXISTS') {
      dispatch(clearAuthErrors({}));
    }
  }, [email, dispatch, userState.error]);

  return (
    <>
      <Button
        variant={type}
        onClick={() => dispatch(toggleSignUpModal({ type: 'OPEN' }))}
        id="sign-up-button">
        {text}
      </Button>
      <Modal isOpen={state.signUp} width="45" gap="1">
        {/* @ts-ignore */}
        <Helmet>
          <title>Movie | Sign up</title>
        </Helmet>
        <Row gap="auto" style={{ width: '100%' }}>
          <Title>Sign up today</Title>
          <img
            src={Cross}
            alt="close the modal"
            style={{ cursor: 'pointer', width: 30, height: 30 }}
            onClick={() => dispatch(toggleSignUpModal({ type: 'CLOSE' }))}
          />
        </Row>
        {/* @ts-ignore */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email"
            id="auth-email-input"
            {...register('email', {
              required: true,
              onChange: ({ currentTarget: { value } }) => {
                dispatch(updateEmail(value));
              }
            })}
            value={state.email}
          />
          {emailError && <ErrorMsg> {emailError}</ErrorMsg>}

          <Input
            placeholder="Password"
            type="password"
            autoComplete="on"
            id="auth-password-input"
            {...register('password', {
              required: true,
              onChange: ({ currentTarget: { value } }) => dispatch(updatePassword(value))
            })}
            value={state.password}
          />
          {passwordError && <ErrorMsg> {passwordError}</ErrorMsg>}
          {userState.error === 'ALREADY_EXISTS' && (
            <ErrorMsg>This user already exists. Try another email</ErrorMsg>
          )}

          <Button>SUBMIT</Button>
        </Form>
        <Row gap="auto">
          <Link onClick={() => window.open('mailto:vincent.nathan.thomas@gmail.com')}>
            Forgot your account?
          </Link>
          <Text>
            Already have an account?{' '}
            <Link
              onClick={() => {
                dispatch(toggleSignUpModal({ type: 'CLOSE' }));
                setTimeout(() => {
                  dispatch(toggleSignInModal({ type: 'OPEN' }));
                }, 250);
              }}>
              Sign in!
            </Link>
          </Text>
        </Row>
      </Modal>
    </>
  );
}
