import { render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { ThemeProvider } from 'styled-components';
import { Text } from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={TestTheme}>
        <Text>hello</Text>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
