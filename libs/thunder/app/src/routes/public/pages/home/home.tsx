import { Button, Text, Title } from '@v-thomas/shared/ui';
import { SignUpButton, SignInButton, ButtonContainer } from '@v-thomas/thunder/ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}>
          <Button
            variant="always-outlined"
            onClick={() => window.open('mailto:vincent@email.v-thomas.xyz', '_blank')}>
            Get in touch!
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.25 }}>
          <SignUpButton type="contained" text="Get Started!" />
        </motion.div>
      </ButtonContainer>
    </Center>
  </Root>
);
