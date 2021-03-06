import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Link } from './link';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <ThemeProvider theme={TestTheme}>
          <Link to="f">TESTING_LINK</Link>
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
