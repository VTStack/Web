import Cross from '../../../../feature-public/assets/x.svg';
import { Button, Col, Input, Link, Modal, Text, Title } from '@v-thomas/shared/core-ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthState,
  toggleSignInModal,
  toggleSignUpModal,
  updateEmail,
  updatePassword,
  signUpUser
} from '@v-thomas/thunder/data-access';

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export function SignUpButton({
  type = 'contained',
  text = 'Sign Up'
}: {
  type?: 'contained' | 'outlined' | 'text';
  text?: string;
}) {
  const onSubmit = (v: { email: string; password: string }) => {
    const { email, password } = v;
    dispatch(signUpUser({ payload: { email, password } }));
  };

  const state = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Button
        variant={type}
        onClick={() => dispatch(toggleSignUpModal({ type: 'OPEN' }))}
        id="sign-up-button">
        {text}
      </Button>
      <Modal isOpen={state.signUp} width="45" gap="1">
        <Col gap="auto" style={{ width: '100%' }}>
          <Title>Sign up today</Title>
          <img
            src={Cross}
            alt="close the modal"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(toggleSignUpModal({ type: 'CLOSE' }))}
          />
        </Col>
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
          <Button>SUBMIT</Button>
        </Form>
        <Col gap="auto">
          <Link onClick={() => window.open('mailto:vincent.nathan.thomas@gmail.com')}>
            Forgot your account?
          </Link>
          <Text>
            Already have an account?{' '}
            <Link
              onClick={() => {
                dispatch(toggleSignUpModal({ type: 'CLOSE' }));
                dispatch(toggleSignInModal({ type: 'OPEN' }));
              }}>
              Sign in!
            </Link>
          </Text>
        </Col>
      </Modal>
    </>
  );
}
