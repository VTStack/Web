import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/thunder/test-utils';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <HomePage />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
