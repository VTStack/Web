import { Button, Card, Col, Link, Modal, Row, Text, Title } from '@v-thomas/shared/ui';
import styled from 'styled-components';
import Cross from '@v-thomas/shared/assets/x-mark.svg';
import { useNavigate } from 'react-router-dom';
import { ReactEventHandler, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '@v-thomas/shared/hooks';
const Background = styled(motion.div)``;
export function ProjectsPage() {
  const [isOpen, toggleOpen] = useToggle(false);

  const router = useNavigate();

  useEffect(toggleOpen, []);

  const toHome = () => {
    toggleOpen();
    router('/');
  };

  const handleClick = (e: any) => {
    if (e.target.href) return;
    window.open('https://link.v-thomas.me/movie', '_blank');
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
          <Link to="https://link.v-thomas.me/org" external line>
            github orginization
          </Link>{' '}
          where i put all of my serious projects
        </Text>
        <Button onClick={e => handleClick(e)} noStyle>
          <Card noHover>
            <Row gap="1">
              <img src="https://movie.v-thomas.me/favicon.svg" alt="" height="100%" width="60px" />
              <Col gap="0.25">
                <Title size="1.5">MovieReviewer</Title>
                <Link icon to="https://link.v-thomas.me/movie" external>
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
