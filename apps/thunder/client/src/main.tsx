import { render } from 'react-dom';
import App from '@v-thomas/thunder/shell';
import '@v-thomas/shared/web-utils';

const Root = document.getElementById('root') as Element;

render(<App />, Root);
