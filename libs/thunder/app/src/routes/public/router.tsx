import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar';
import { HomePage } from './home';
import { Pricing } from './pricing';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
`;

export const PublicRootRoutes = () => {
  return (
    <Root>
      <Navbar />
      <Center>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace={true} to="/home" />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Center>
      <Footer />
    </Root>
  );
};
