import { StrictMode } from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AboutShell } from '@v-thomas/about/shell';

const root = document.getElementById('root') as Element;

render(
  <StrictMode>
    <AboutShell />
  </StrictMode>,
  root
);
