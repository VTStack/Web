import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/shared/themes';
import { ThemeProvider } from 'styled-components';

import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Footer />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
