import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@v-thomas/shared/styles';
import { App } from './app/app';
import '@v-thomas/shared/web-utils';
createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
