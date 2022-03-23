import { render } from '@testing-library/react';

import { RowTest } from './row';

describe('Row', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RowTest />);
    expect(baseElement).toBeTruthy();
  });
});
