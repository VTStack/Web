import { Button, Text, Title, ButtonContainer } from '@v-thomas/external/core-ui';
import { PublicFooter, PublicNavbar } from '@v-thomas/thunder/other-pages/ui';
import { AuthModal } from '@v-thomas/thunder/auth/ui';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Center = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Movie | Home</title>
      </Helmet>

      <Root className="testing">
        <PublicNavbar />
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
                variant="outlined"
                onClick={() => window.open('mailto:vincent@email.v-thomas.xyz', '_blank')}>
                Get in touch!
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25 }}>
              <Button onClick={() => setIsOpen(val => !val)}>Get Started!</Button>
            </motion.div>
          </ButtonContainer>
        </Center>
        <PublicFooter />
        <AuthModal isOpen={isOpen} onClose={() => setIsOpen(val => !val)} title="Sign In" type="sign-in" />
      </Root>
    </>
  );
};
