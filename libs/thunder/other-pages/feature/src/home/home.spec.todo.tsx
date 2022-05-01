import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
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
