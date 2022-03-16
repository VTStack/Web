import { render } from '@testing-library/react';

import { Button } from './button';
import { DarkTheme } from '@v-thomas/libs/thunder/themes';
import { ThemeProvider } from 'styled-components';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={DarkTheme}>
        <Button>testing</Button>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
