import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MovieSearchCard } from './movie-search-card';
import { DarkTheme } from '@v-thomas/shared/theme';
describe('MovieSearchCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
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
