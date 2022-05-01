import { Matcher, MatcherOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TestTheme } from '@v-thomas/thunder/test-utils';
import { NoGroups } from './no-groups';

import { SetupAuth, SetupFirebase, SetupFirestore } from '@v-thomas/thunder/test-utils';
describe('NoGroups', () => {
  let baseElement: HTMLElement, getByTestId: (id: Matcher, options?: MatcherOptions) => HTMLElement;
  beforeEach(() => {
    const element = render(
      <SetupFirebase>
        <SetupFirestore>
          <SetupAuth>
            <ThemeProvider theme={TestTheme}>
              <NoGroups />
            </ThemeProvider>
          </SetupAuth>
        </SetupFirestore>
      </SetupFirebase>
    );
    baseElement = element.baseElement;
    getByTestId = element.getByTestId;
  });
  it('Should render correctly', () => {
    expect(baseElement).toBeDefined();
    expect(baseElement).toBeInstanceOf(HTMLBodyElement);
  });

  test("Should have 'You don't have any groups!' as title", () => {
    const TITLE_ELEMENT = getByTestId('nogroups-title');
    expect(TITLE_ELEMENT).toBeDefined();
    expect(TITLE_ELEMENT).toBeInstanceOf(HTMLHeadingElement);
  });

  test('Description being defined and of the right instance', () => {
    const DESC_ELEMENT = getByTestId('nogroups-description');
    expect(DESC_ELEMENT).toBeDefined();
    expect(DESC_ELEMENT).toBeInstanceOf(HTMLParagraphElement);
  });

  test('The button should be defined and of the right instance', () => {
    const BUTTON_ELEMENT = baseElement.lastChild?.lastChild?.lastChild;
    expect(BUTTON_ELEMENT).toBeDefined();
    expect(BUTTON_ELEMENT).toBeInstanceOf(HTMLButtonElement);
  });
});
