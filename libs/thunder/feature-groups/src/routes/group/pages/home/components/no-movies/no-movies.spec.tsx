import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { NoMovies } from './no-movies';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';

describe('NoMovies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <NoMovies />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
