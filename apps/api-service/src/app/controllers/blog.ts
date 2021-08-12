import { Request, Response } from 'express';
import blogPosts = require('../mock/blogposts.json');
import comments = require('../mock/comments.json');

import { BlogPost } from '@tx-group/model';
import { isParamInteger } from '../helpers/common';
import { mapCommentCountBlogPost } from '../helpers/comments';

export const getAllBlogs = (req: Request, res: Response): Response => {
  const blogPostsCommentCount: BlogPost[] = mapCommentCountBlogPost(
    blogPosts,
    comments
  );

  return res.status(200).send(blogPostsCommentCount);
};

export const getBlogById = (req: Request, res: Response): Response => {
  const param = req.params?.id;
  const blogPost: BlogPost[] = blogPosts.filter((item) => {
    if (isParamInteger(parseInt(param))) {
      return item.id === parseInt(param);
    }
    return item.canonical_url.toLowerCase() === param.toLowerCase();
  });

  if (blogPost?.length > 0) {
    const blogPostItem: BlogPost = blogPost[0];

    return res.status(200).send(Object.assign({}, blogPostItem));
  } else {
    return res.status(204).send();
  }
};
