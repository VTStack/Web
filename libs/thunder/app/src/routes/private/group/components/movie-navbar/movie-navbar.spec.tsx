import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MovieNavbar } from './movie-navbar';
import { DarkTheme } from '@v-thomas/shared/theme';

describe('MovieNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <MovieNavbar buttons={void 0} title="tesing" />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
