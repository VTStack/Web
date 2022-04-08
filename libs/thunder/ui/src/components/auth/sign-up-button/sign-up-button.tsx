import Cross from '@v-thomas/thunder/assets/x-mark.svg';
import { Button, Input, Link, Modal, Text, Title, Col, Row, SharedButtonVariants } from '@v-thomas/shared/ui';
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
  getUserState
} from '@v-thomas/thunder/data-access';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMsg } from '../sign-in-button/sign-in-button.styles';
import { Helmet } from 'react-helmet-async';

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

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm({ resolver: joiResolver(schema) });

  const passwordError = formErrors?.['password']?.message;
  const emailError = formErrors?.['email']?.message;

  return (
    <>
      <Button
        variant={type}
        onClick={() => dispatch(toggleSignUpModal({ type: 'OPEN' }))}
        id="sign-up-button">
        {text}
      </Button>
      <Modal isOpen={state.signUp} width="45" gap="1">
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
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
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
