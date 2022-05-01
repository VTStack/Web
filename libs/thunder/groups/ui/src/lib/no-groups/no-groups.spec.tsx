import { Matcher, MatcherOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThunderDarkTheme } from '@v-thomas/thunder/theme';
import { NoGroups } from './no-groups';
import { AuthProvider, FirebaseAppProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBF6geOiV5lxyg2eU5WpDeCOo0YgaxXXl0',
  authDomain: 'movie-2a28c.firebaseapp.com',
  projectId: 'movie-2a28c',
  storageBucket: 'movie-2a28c.appspot.com',
  messagingSenderId: '681444141056',
  appId: '1:681444141056:web:55d91b33860e421fda50e5'
};
const OtherComponents = () => {
  return (
    <FirestoreProvider sdk={getFirestore(useFirebaseApp())}>
      <AuthProvider sdk={getAuth(useFirebaseApp())}>
        <ThemeProvider theme={ThunderDarkTheme}>
          <NoGroups />
        </ThemeProvider>
      </AuthProvider>
    </FirestoreProvider>
  );
};

describe('NoGroups', () => {
  let baseElement: HTMLElement, getByTestId: (id: Matcher, options?: MatcherOptions | any) => HTMLElement;
  beforeEach(() => {
    const element = render(
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <OtherComponents />
      </FirebaseAppProvider>
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
