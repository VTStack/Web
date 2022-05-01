import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MovieSearchCard } from './movie-search-card';
import { TestTheme } from '@v-thomas/shared/utils-test';
describe('MovieSearchCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
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
