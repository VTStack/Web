import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar';
import { HomePage } from './lib/home/home';
import Pricing from './lib/pricing/pricing';

const Root = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100%;
  padding: 1rem;
`;

const PublicRoot = () => {
  return (
    <Root>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </Root>
  );
};
export default PublicRoot;
