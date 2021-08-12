import React from 'react';
import { render } from '@testing-library/react';
import BlogPostPage from '../pages/posts/[slug]';

describe('Blog Post Page aka [slug]', () => {
  it('Should render page', () => {
    const { container, baseElement } = render(<BlogPostPage />);

    expect(container.querySelector('h3')).toBeTruthy();
    expect(container.querySelector('a')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });
});
