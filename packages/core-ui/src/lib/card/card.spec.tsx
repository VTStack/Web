import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';

import { Card } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <Card />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
