/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@tx-group/model';
import BlockContainer from '../Common/StyleComponents/BlockContainer';
import { BodyText } from '../Common/StyleComponents/BodyText';
import { Page } from '../../model/page';
import { TEXT } from '../../constants/text';
import { DATE_FORMAT } from '../../config/settings';

import moment from 'moment';

const BodyContainer = styled.div`
  padding: 0px 20px 20px 20px;
  width: 70%;
`;

const ImageContainer = styled.div`
  width: 30%;
`;

const AHref = styled.a`
  color: ${(props) => props.theme['$btn-primary-color']};
  text-decoration: none;
`;

const PostItem: FunctionComponent<BlogPost> = ({
  headline,
  commentCount,
  body_image,
  body,
  author,
  date_created,
  canonical_url,
  genre,
  type,
}: BlogPost & Page): ReactElement => {
  const isPageBlog: boolean = type === 'Blogs';
  return (
    <>
      <Link href={`/posts/${canonical_url}`} passHref>
        <AHref>
          <BlockContainer padding="10px" extraClasses="block-container-item">
            <ImageContainer>
              {body_image && (
                <Image
                  src={body_image as any}
                  alt={headline}
                  width="400"
                  height="400"
                />
              )}
            </ImageContainer>
            <BodyContainer>
              <h4>{headline}</h4>
              <BodyText ellipsis={isPageBlog ? true : false}>{body}</BodyText>

              {!isPageBlog && (
                <>
                  {genre && (
                    <p>
                      <b>{TEXT.GENRE} : </b>
                      {genre}
                    </p>
                  )}
                  {author && (
                    <p>
                      <b>{TEXT.AUTHOR} : </b>
                      {author}
                    </p>
                  )}
                </>
              )}
              {date_created && (
                <p>
                  <b>{TEXT.PUBLISHED} : </b>
                  {moment(date_created).format(DATE_FORMAT)}
                </p>
              )}

              {commentCount && (
                <p>
                  <b>Comments : </b>
                  {commentCount}
                </p>
              )}
            </BodyContainer>
          </BlockContainer>
        </AHref>
      </Link>
    </>
  );
};

export default PostItem;
