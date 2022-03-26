import Cross from '../../../../feature-public/assets/x.svg';
import { Button, Col, Input, Link, Modal, Text, Title } from '@v-thomas/shared/core-ui';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { ErrorMsg, Form } from './sign-in-button.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  selectAuthState,
  signInUser,
  toggleSignInModal,
  toggleSignUpModal,
  updateEmail,
  updatePassword
} from '@v-thomas/thunder/data-access';

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(7)
});

export function SignInButton({
  type = 'outlined',
  text = 'Sign in'
}: {
  type?: 'outlined' | 'contained' | 'text';
  text?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm({ resolver: joiResolver(schema) });

  const dispatch = useDispatch();

  // const isAuthed = useUser()[1];

  // const router = useNavigate();

  const state = useSelector(selectAuthState);

  const onSubmit = async (values: { email: string; password: string }) => {
    dispatch(signInUser({ payload: { email: values.email, password: values.password } }));
    dispatch(closeModal());
  };

  // useEffect(() => {
  // if (isAuthed) router('/app');
  // }, [isAuthed, router]);

  const passwordError = formErrors?.['password']?.message;
  const emailError = formErrors?.['email']?.message;

  return (
    <>
      <Button
        variant={type}
        onClick={() => dispatch(toggleSignInModal({ type: 'OPEN' }))}
        id="sign-in-button">
        {text}
      </Button>
      <Modal isOpen={state.signIn} width="45" gap="1">
        <Col gap="auto" style={{ width: '100%' }}>
          <Title>Sign in</Title>
          <img
            src={Cross}
            alt="close the modal"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(toggleSignInModal({ type: 'CLOSE' }));
            }}
          />
        </Col>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: true,
              onChange: ({ target: { value } }) => {
                dispatch(updateEmail(value));
              },
              value: state.email
            })}
          />
          {emailError && <ErrorMsg> {emailError}</ErrorMsg>}
          <Input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: true,
              onChange: ({ target: { value } }) => dispatch(updatePassword(value)),
              value: state.password
            })}
          />
          {passwordError && <ErrorMsg> {passwordError}</ErrorMsg>}
          <Button>SUBMIT</Button>
        </Form>
        <Col gap="auto">
          <Link onClick={() => window.open('mailto:vincent.nathan.thomas@gmail.com')}>
            Forgot your account?
          </Link>
          <Text>
            Don't have an account?{' '}
            <Link
              onClick={() => {
                dispatch(toggleSignInModal({ type: 'CLOSE' }));
                setTimeout(() => {
                  dispatch(toggleSignUpModal({ type: 'OPEN' }));
                }, 250);
              }}>
              Sign Up!
            </Link>
          </Text>
        </Col>
      </Modal>
    </>
  );
}
