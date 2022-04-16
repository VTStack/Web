import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { NoGroups } from './no-groups';

describe('NoGroups', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <NoGroups />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
