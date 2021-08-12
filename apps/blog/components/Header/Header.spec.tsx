import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('Should render component with mock details', () => {
    const mock = {
      title: 'My name is mock man',
    };
    const { getByText } = render(<Header title={mock.title} />);

    expect(getByText(mock.title)).toBeTruthy();
  });
});
