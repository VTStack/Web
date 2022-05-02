import { Title, Link, Col } from '@v-thomas/external/core-ui';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  gap: 1rem;
  padding-bottom: 3rem;
`;

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundPage = () => (
  <Root>
    <Helmet>
      <title>Movie | 404 Not found</title>
    </Helmet>
    <Column>
      <Title
        size={'2.5'}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 0.5 }}>
        Error! This page does not exist!
      </Title>
      <Link to="/app">Back to safety</Link>
    </Column>
  </Root>
);
