import { render } from '@testing-library/react';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

import { RemoveMovie } from './remove-movie';

describe('RemoveMovie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <RemoveMovie onClick={() => void 0} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
