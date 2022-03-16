import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/libs/thunder/themes';
import { SnackbarProvider } from 'notistack';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MovieLayout } from './movie';

describe('Movie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <SnackbarProvider>
          <ThemeProvider theme={DarkTheme}>
            <MovieLayout poster="hello" title="hello">
              <h1>hi</h1>
            </MovieLayout>
          </ThemeProvider>
        </SnackbarProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
