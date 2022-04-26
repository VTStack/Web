import { render } from '@testing-library/react';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { ThemeProvider } from 'styled-components';

import UserAvatar from './user-avatar';

describe('UserAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={ThunderDarkTheme}>
        <UserAvatar avatar={'testing'} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
