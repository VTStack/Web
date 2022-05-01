/* eslint-disable camelcase */
import { render } from '@testing-library/react';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MovieCard } from './movie-card';

enum Objects {
  TITLE = 'TEST_TITLE',
  OVERVIEW = 'TEST_OVERVIEW'
}

describe('MovieCard', () => {
  it('should render successfully', () => {
    const { baseElement, findByText } = render(
      <HashRouter>
        <ThemeProvider theme={ThunderDarkTheme}>
          {/* eslint-disable-next-line camelcase */}
          <MovieCard
            movie={{
              id: 0,
              overview: Objects.OVERVIEW,
              title: Objects.TITLE,
              poster_path: '',
              release_date: '',
              backdrop_path: ''
            }}
            duration={0}
          />
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();

    findByText(Objects.TITLE).then(v => expect(v).toBeDefined());

    findByText(Objects.OVERVIEW).then(v => expect(v).toBeDefined());
  });
});
