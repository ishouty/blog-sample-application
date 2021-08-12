import React from 'react';
import { render } from '@testing-library/react';
import PostItem from './PostItem';

jest.mock('next/image', () => {
  return () => null;
});
describe('PostItem', () => {
  it('Should render component with mock details', () => {
    const mock = {
      id: 12,
      body: 'hdjkhfdsjkhds jkh sdfj',
      headline: 'hdskjh dasj',
      author_id: 21,
      author: 'wdwdwd',
      author_image: 'http://dummyimage.com/250x250.png/dddddd/000000',
      body_image: 'http://dummyimage.com/250x250.png/dddddd/000000',
      genre: 'horror',
      canonical_url: 'http://mock.com/',
      commentCount: 23,
      date_created: '2021-07-31T15:56:06Z',
      date_updated: '2021-07-31T15:56:06Z',
      date_published: '2021-07-31T15:56:06Z',
    };

    const { getByText } = render(
      <PostItem
        id={mock.id}
        body={mock.body}
        headline={mock.headline}
        author_id={mock.author_id}
        author={mock.author}
        author_image={mock.author_image}
        body_image={mock.body_image}
        genre={mock.genre}
        canonical_url={mock.canonical_url}
        commentCount={mock.commentCount}
        date_created={mock.date_created}
        date_updated={mock.date_updated}
        date_published={mock.date_published}
      />
    );

    expect(getByText(mock.headline)).toBeTruthy();
    expect(getByText(mock.genre)).toBeTruthy();
    expect(getByText(mock.commentCount)).toBeTruthy();
    expect(getByText(mock.body)).toBeTruthy();
  });
});
