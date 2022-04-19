import { StrictMode } from 'react';
import { render } from 'react-dom';
import '@v-thomas/shared/styles';
import { App } from './app/app';
import '@v-thomas/shared/web-utils';
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root') as Element
);
