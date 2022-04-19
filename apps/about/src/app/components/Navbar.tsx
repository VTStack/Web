import { Button, Row, Title } from '@v-thomas/shared/ui';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Root = styled.div`
  padding: 1rem 2rem;
  max-width: calc(1400px - 4rem);
  margin-inline: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const Navbar = () => {
  const router = useNavigate();

  return (
    <Root>
      {/* <Card padding="0.2" noHover> */}
      <Row padding="1" gap="auto">
        <Title>Vincent Thomas</Title>
        <Row gap="1">
          <Button variant="text" onClick={() => router('/')}>
            Home
          </Button>
          <Button variant="text" onClick={() => router('/about')}>
            About
          </Button>
          <Button variant="outlined" onClick={() => router('/projects')}>
            Projects
          </Button>
        </Row>
      </Row>
      {/* </Card> */}
    </Root>
  );
};
