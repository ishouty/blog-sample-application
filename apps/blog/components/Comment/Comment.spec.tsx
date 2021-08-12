import React from 'react';
import { render } from '@testing-library/react';
import Comment from './Comment';

describe('Comment', () => {
  it('Should render component with mock details', () => {
    const mock = {
      author: 'Michael Jackson',
      comment: 'I am the man in the mirror!',
      post_id: 22,
      date_created: '2021-07-31T15:56:06Z',
      date_updated: '2021-07-31T15:56:06Z',
      date_published: '2021-07-31T15:56:06Z',
      id: 23,
    };
    const { getByText } = render(
      <Comment
        post_id={mock.post_id}
        author={mock.author}
        comment={mock.comment}
        date_updated={mock.date_updated}
        date_published={mock.date_published}
        date_created={mock.date_created}
        id={mock.id}
      />
    );

    expect(getByText(mock.comment)).toBeTruthy();
    expect(getByText(mock.author)).toBeTruthy();
  });
});
