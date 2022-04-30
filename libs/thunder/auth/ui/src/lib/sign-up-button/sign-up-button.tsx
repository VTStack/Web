import Cross from '@v-thomas/shared/assets/x-mark.svg';
import { Button, Input, Link, Modal, Text, Title, Row, SharedButtonVariants } from '@v-thomas/core-ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import * as Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMsg } from '../auth-modal/sign-in-modal.styles';
import { Helmet } from 'react-helmet-async';
import { ReducerAction, ReducerWithoutAction, useEffect, useReducer, useState } from 'react';
import { AuthModal } from '../auth-modal';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
import { useToggle } from '@v-thomas/thunder/hooks';

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

interface Props {
  lastUsedValues: null | string;
  email: string;
  password: string;
  isHashesEqual?: boolean;
}

export function SignUpButton({
  type = 'contained',
  text = 'Sign Up'
}: {
  type?: SharedButtonVariants;
  text?: string;
}) {
  const [isOpen, toggle] = useToggle(false);

  const { signUp } = useAuth();

  console.log(signUp);

  return (
    <>
      <Button variant={type} onClick={toggle} id="sign-up-button">
        {text}
      </Button>
      <AuthModal isOpen={isOpen} title="Sign up Today!" onClose={toggle} type="sign-up" />
    </>
  );
}
