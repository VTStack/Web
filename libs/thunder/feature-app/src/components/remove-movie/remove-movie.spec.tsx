import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/shared/themes';
import { ThemeProvider } from 'styled-components';

import RemoveMovie from './remove-movie';

describe('RemoveMovie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <RemoveMovie onClick={() => void 0} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
