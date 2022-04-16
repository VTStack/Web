import { Button, Card, Col, Link, Modal, Row, Text, Title } from '@v-thomas/shared/ui';
import styled from 'styled-components';
import Cross from '@v-thomas/thunder/assets/x-mark.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
const Background = styled(motion.div)``;
export function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useNavigate();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toHome = () => {
    setIsOpen(false);
    router('/');
  };

  return (
    <Background exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Modal isOpen={isOpen} gap="1" width="30">
        <Row>
          <Title>All My Projects</Title>
          <Button noStyle>
            <img src={Cross} onClick={toHome} alt="Close this modal" />
          </Button>
        </Row>
        <Text>
          This is my{' '}
          <Link to="https://link.v-thomas.me/org" external>
            github orginization
          </Link>{' '}
          where i put all of my serious projects
        </Text>
        <Button onClick={() => window.open('https://link.v-thomas.me/movie', '_blank')} noStyle>
          <Card noHover>
            <Row gap="1">
              <img src="https://movie.v-thomas.me/favicon.svg" alt="" height="100%" width="60px" />
              <Col gap="0.25">
                <Title size="1.5">MovieReviewer</Title>
                <Link external to="https://link.v-thomas.me/movie">
                  https://movie.v-thomas.me
                </Link>
              </Col>
            </Row>
          </Card>
        </Button>
      </Modal>
    </Background>
  );
}
