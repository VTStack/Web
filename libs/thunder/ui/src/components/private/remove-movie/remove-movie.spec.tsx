import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';

import { RemoveMovieButton } from './remove-movie';

describe('RemoveMovie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <RemoveMovieButton onClick={() => void 0} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
