import { render } from '@testing-library/react';
import { AboutDarkTheme } from '@v-thomas/about/theme';
import { ThemeProvider } from 'styled-components';

import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={AboutDarkTheme}>
        <Footer />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
