import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render page successfully', () => {
    const { baseElement } = render(<Index data={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
