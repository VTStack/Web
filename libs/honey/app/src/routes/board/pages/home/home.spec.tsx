import { render } from '@testing-library/react';
import { AboutDarkTheme } from '@v-thomas/about/theme';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={AboutDarkTheme}>
        <HomePage />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
