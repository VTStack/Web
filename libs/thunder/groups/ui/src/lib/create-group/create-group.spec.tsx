import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TestTheme } from '@v-thomas/thunder/test-utils';
import { CreateGroupButton } from './create-group';
import { SetupFirebase, SetupFirestore } from '@v-thomas/thunder/test-utils';

describe('GroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SetupFirebase>
        <SetupFirestore>
          <ThemeProvider theme={TestTheme}>
            <CreateGroupButton />
          </ThemeProvider>
        </SetupFirestore>
      </SetupFirebase>
    );
    expect(baseElement).toBeTruthy();
  });
});
