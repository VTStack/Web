import { render } from '@testing-library/react';

import MainError from './main-error';
import { DarkTheme } from '@v-thomas/shared/theme';
import { ThemeProvider } from 'styled-components';

describe('MainError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <MainError />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
