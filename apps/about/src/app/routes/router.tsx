import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { AboutPage } from './pages/about';
import { HomePage } from './pages/home';
import { ProjectsPage } from './pages/projects';

const LRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default () => {
  return (
    <BrowserRouter>
      <LRoutes />
    </BrowserRouter>
  );
};
