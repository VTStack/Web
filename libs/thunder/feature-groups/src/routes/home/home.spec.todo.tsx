import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import { GroupsHomePage } from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HashRouter>
        <GroupsHomePage />
      </HashRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
