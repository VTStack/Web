import { StrictMode } from 'react';
import { render } from 'react-dom';
import '@v-thomas/shared/styles';
import { AboutShell } from '@v-thomas/about/shell';

const root = document.getElementById('root') as Element;

render(
  <StrictMode>
    <AboutShell />
  </StrictMode>,
  root
);
