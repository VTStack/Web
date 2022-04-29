import { render } from '@testing-library/react';

import { GroupMoviePage } from './movie';

describe('Movie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GroupMoviePage />);
    expect(baseElement).toBeTruthy();
  });
});
