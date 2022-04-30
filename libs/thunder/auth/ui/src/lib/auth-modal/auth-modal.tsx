import { Button, Input, Modal, Row, Text, Title } from '@v-thomas/core-ui';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { useEffect, useState } from 'react';
import { ErrorMsg, Form } from './sign-in-modal.styles';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  type: 'sign-in' | 'sign-up';
}

export function AuthModal({ isOpen, onClose, title = 'Sign in', type }: Props) {
  const [pastUsernamePassword, setPastUsernamePassword] = useState<string>('');

  const { signIn, signUp } = useAuth();

  const [errorMsg, setErrorMsg] = useState<string | null>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e: any) => {
    setErrorMsg(null);
    e.preventDefault();
    const [{ value: email }, { value: password }] = e.target;
    setPastUsernamePassword(window.btoa(`${email}:${password}`));

    try {
      if (type === 'sign-up') await signUp({ email, password });
      else await signIn({ email, password });
    } catch (e: any) {
      console.error(e);
      if (e.code === 'auth/user-not-found')
        setErrorMsg('User not found. Try again with another email or password.');
      if (e.code === 'auth/email-already-in-use')
        setErrorMsg('Email already in use. Try again with another email or password.');
    }
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
