import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MovieNavbar } from './movie-navbar';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';

describe('MovieNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <MovieNavbar buttons={void 0} title="tesing" />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
