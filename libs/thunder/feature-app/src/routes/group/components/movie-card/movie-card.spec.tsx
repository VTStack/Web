import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/shared/themes';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MovieCard } from './movie-card';

describe('MovieCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <ThemeProvider theme={DarkTheme}>
          <MovieCard movie={{ backdrop_path: '' }} />
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
