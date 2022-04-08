import { Card, Col, Link, Modal, Row, Text, Title } from '@v-thomas/shared/ui';
import styled from 'styled-components';

const Background = styled.div``;
export default function Projects() {
  return (
    <Background>
      <Modal isOpen gap="1" width="30">
        <Title>All My Projects</Title>
        <Text>
          This is my{' '}
          <Link to="https://link.v-thomas.me/codebase" external>
            main repository
          </Link>
          , where all of the code is
        </Text>
        <Link external to="https://link.v-thomas.me/movie" noLine>
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
        </Link>
      </Modal>
    </Background>
  );
}
