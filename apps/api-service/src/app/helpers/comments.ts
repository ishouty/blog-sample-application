import { CommentType, BlogPost } from '@tx-group/model';
export const mapCommentCountBlogPost = (
  blogPosts: BlogPost[],
  comments: CommentType[]
): BlogPost[] => {
  return blogPosts.map((postItem) => {
    const commentCount: CommentType[] = comments.filter((comment) => {
      return comment.post_id === postItem.id;
    });

    return {
      ...postItem,
      commentCount: commentCount.length,
    };
  });
};
