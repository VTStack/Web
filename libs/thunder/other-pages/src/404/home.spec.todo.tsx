import { render } from '@testing-library/react';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

import { NotFoundPage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <NotFoundPage />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
