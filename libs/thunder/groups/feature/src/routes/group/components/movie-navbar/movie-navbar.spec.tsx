import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { MovieNavbar } from './movie-navbar';
import { TestTheme } from '@v-thomas/thunder/test-utils';

describe('MovieNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <MovieNavbar buttons={void 0} title="tesing" />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
