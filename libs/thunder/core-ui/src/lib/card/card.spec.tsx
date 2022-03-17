import { render } from '@testing-library/react';
import { DarkTheme } from '@v-thomas/shared/themes';
import { ThemeProvider } from 'styled-components';

import { Card } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Card />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
