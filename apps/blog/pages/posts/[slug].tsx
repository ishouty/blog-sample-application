/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { BASE_API_URL } from '../../config/settings';
import PostItem from '../../components/PostItem/PostItem';
import { ReactElement, FunctionComponent } from 'react';
import Comment from '../../components/Comment/Comment';
import PageContainer from '../../components/Common/StyleComponents/PageContainer';
import { TEXT } from '../../constants/text';

const BlogPost: FunctionComponent<any> = ({
  postItemData,
  commentsPostItem,
}): ReactElement => {
  // TODO: create a seperate component
  const CommentList = ({ commentsPostItem }): ReactElement => {
    return commentsPostItem.map((comment, key) => {
      return <Comment key={key} {...comment} />;
    });
  };

  return (
    <>
      <PageContainer>
        <PostItem {...postItemData} type="blogPost" />
        <>
          <h3>
            {TEXT.COMMENTS} : {commentsPostItem?.length}
          </h3>
          {commentsPostItem && (
            <CommentList commentsPostItem={commentsPostItem} />
          )}
        </>
      </PageContainer>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async ({ params }): Promise<any> => {
  const responsePostItem = await axios.get(
    `${BASE_API_URL}/blog/${params.slug}`
  );
  const commentsPostItem = await axios.get(
    `${BASE_API_URL}/blog/${responsePostItem.data.id}/comments`
  );
  //TODO: error handling if no response
  return {
    props: {
      postItemData: responsePostItem.data,
      commentsPostItem: commentsPostItem.data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = [];
  return {
    paths,
    fallback: true,
  };
};

export default BlogPost;
