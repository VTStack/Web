import { Title, Text, ButtonContainer, Button, Col, Link } from '@v-thomas/shared/ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from '../../components/Section';

const Section2 = styled(Section)`
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const HomePage = () => {
  // const [exiting, setExiting] = useState(false);

  const router = useNavigate();

  // const toProjects = () => {
  //   setExiting(true);
  //   setTimeout(() => {
  //     router('/projects');
  //   }, 500);
  // };

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Section>
        <Col
          gap="1"
          padding="1"
          initial={{ opacity: 0, paddingTop: '20%', x: -10 }}
          animate={{ opacity: 1, x: 0, paddingTop: '20%' }}>
          <Col gap="0.25">
            <Title size="3">Hello! I'm Vincent.</Title>
            <Text>I like programming and made this website! BETTER_DESC</Text>
          </Col>
          <ButtonContainer gap="1">
            <Link noLine external to="https://link.v-thomas.me/email">
              <Button>Get in touch!</Button>
            </Link>
            {/* <Button onClick={() => router('/projects')} variant="no-style"> */}
            <Button variant="outlined" onClick={() => router('/projects')}>
              Projects
            </Button>
            {/* </Button> */}
          </ButtonContainer>
        </Col>
      </Section>
      <Section2></Section2>
    </motion.div>
  );
};
