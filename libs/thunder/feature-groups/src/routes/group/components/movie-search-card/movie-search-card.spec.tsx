import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MovieSearchCard } from './movie-search-card';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
describe('MovieSearchCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <MovieSearchCard
          movie={{ title: 'sj' }}
          onAdd={() => {
            // console.log('tesing');
          }}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
