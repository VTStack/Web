import { Text, Title } from '@v-thomas/libs/thunder/core-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SignInButton } from '../../components/sign-in-button/sign-in-button';
import { SignUpButton } from '../../components/sign-up-button/sign-up-button';

const Root = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

const Center = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  padding-bottom: 3rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const HomePage = () => (
  <Root>
    <Center>
      <Title
        size={'2.5'}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 0.5 }}>
        Share all of your favorite shows!
      </Title>
      <Text
        style={{ fontSize: '1.25rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}>
        A movie platform to cure your boredom.
      </Text>
      <ButtonContainer>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.25 }}>
          <SignUpButton type="contained" text="Sign up!" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}>
          <SignInButton text="Sign in" />
        </motion.div>
      </ButtonContainer>
    </Center>
  </Root>
);
