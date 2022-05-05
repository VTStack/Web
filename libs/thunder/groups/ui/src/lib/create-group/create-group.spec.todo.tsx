import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SetupAuth, TestTheme } from '@v-thomas/shared/utils-test';
import { CreateGroupButton } from './create-group';
import { SetupFirebase, SetupFirestore } from '@v-thomas/shared/utils-test';

describe('GroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SetupFirebase>
        <SetupFirestore>
          <SetupAuth>
            <ThemeProvider theme={TestTheme}>
              <CreateGroupButton />
            </ThemeProvider>
          </SetupAuth>
        </SetupFirestore>
      </SetupFirebase>
    );
    expect(baseElement).toBeTruthy();
  });
});
