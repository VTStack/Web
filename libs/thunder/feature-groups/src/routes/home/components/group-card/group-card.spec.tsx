import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { GroupCard } from './group-card';

describe('GroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <ThemeProvider theme={ThunderDarkTheme}>
          <GroupCard group={{ name: 'testing' }} />
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
