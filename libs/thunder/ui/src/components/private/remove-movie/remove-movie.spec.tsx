import { render } from '@testing-library/react';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

import { RemoveMovieButton } from './remove-movie';

describe('RemoveMovie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <RemoveMovieButton onClick={() => void 0} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
