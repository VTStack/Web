import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TestTheme } from '@v-thomas/thunder/test-utils';
import { GroupCard } from './group-card';

enum Objects {
  TEST_NAME = 'TEST_NAME',
  TEST_ID = 'TEST_ID'
}

describe('GroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <ThemeProvider theme={TestTheme}>
          <GroupCard group={{ _id: Objects.TEST_ID, name: Objects.TEST_NAME }} />
        </ThemeProvider>
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
