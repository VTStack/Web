import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { NoMovies } from './no-movies';
import { TestTheme } from '@v-thomas/thunder/test-utils';

describe('NoMovies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <NoMovies />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
