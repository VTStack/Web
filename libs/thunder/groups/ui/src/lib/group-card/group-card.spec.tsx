import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { GroupCard } from './group-card';

enum Objects {
  TEST_NAME = 'TEST_NAME',
  TEST_ID = 'TEST_ID'
}

describe('GroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <ThemeProvider theme={ThunderDarkTheme}>
          <GroupCard group={{ _id: Objects.TEST_ID, name: Objects.TEST_NAME }} />
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
