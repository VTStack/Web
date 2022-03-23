import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '@v-thomas/thunder/theme';
import { GroupCard } from './group-card';

describe('GroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <ThemeProvider theme={DarkTheme}>
          <GroupCard group={{ name: 'testing' }} />
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
