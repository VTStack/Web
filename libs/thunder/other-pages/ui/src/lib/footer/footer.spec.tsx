import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';

import { PublicFooter } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <PublicFooter />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
