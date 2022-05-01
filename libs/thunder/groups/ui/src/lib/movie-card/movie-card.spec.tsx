/* eslint-disable camelcase */
import { findByTestId, render } from '@testing-library/react';
import { TestTheme } from '@v-thomas/shared/utils-test';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MovieCard } from './movie-card';

enum Objects {
  TITLE = 'TEST_TITLE',
  OVERVIEW = 'TEST_OVERVIEW'
}

describe('MovieCard', () => {
  let baseElement: HTMLElement;

  beforeEach(() => {
    const element = render(
      <HashRouter>
        <ThemeProvider theme={TestTheme}>
          <MovieCard
            movie={{
              id: 0,
              overview: Objects.OVERVIEW,
              title: Objects.TITLE,
              poster_path: '',
              release_date: '',
              backdrop_path: ''
            }}
            duration={0}
          />
        </ThemeProvider>
      </HashRouter>
    );
    baseElement = element.baseElement;
  });

  it('Should render correctly', () => {
    expect(baseElement).toBeDefined();
    expect(baseElement).toBeTruthy();
    expect(baseElement).toBeInstanceOf(HTMLBodyElement);
  });

  test('route changes when clicking', () => {
    // TODO: Test that the route changes when clicking on the card
    // act(() => {
    //   getByTestId(baseElement, 'card').click();
    // });
  });

  test('title rendering', async () => {
    const TITLE_ELEMENT = await findByTestId(baseElement, 'movie-card-title');

    expect(TITLE_ELEMENT).toBeDefined();
    expect(TITLE_ELEMENT).toBeTruthy();
    expect(TITLE_ELEMENT).toBeInstanceOf(HTMLHeadingElement);
  });

  test('Image rendering', async () => {
    const IMAGE_ELEMENT = await findByTestId(baseElement, 'movie-card-image-id');

    expect(IMAGE_ELEMENT).toBeDefined();
    expect(IMAGE_ELEMENT).toBeTruthy();
    expect(IMAGE_ELEMENT).toBeInstanceOf(HTMLImageElement);
  });
});
