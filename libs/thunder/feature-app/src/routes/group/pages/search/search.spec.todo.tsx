import { render } from '@testing-library/react';

import { GroupSearchPage } from './search';

describe('Search', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GroupSearchPage />);
    expect(baseElement).toBeTruthy();
  });
});
