import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';

import { NotFoundPage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <NotFoundPage />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
