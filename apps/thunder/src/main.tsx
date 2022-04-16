import { createRoot } from 'react-dom/client';
import App from '@v-thomas/thunder/shell';
import '@v-thomas/shared/styles';
// import '@v-thomas/shared/web-utils';

const Root = document.getElementById('root') as Element;

createRoot(Root).render(<App />);
