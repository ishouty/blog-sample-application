import { Request, Response } from 'express';
import comments = require('../mock/comments.json');
import * as status from '../constant/response';
import { CommentType, BlogPost } from '@tx-group/model';
import { errorValidationComment } from '../constant/response';
import blogPosts = require('../mock/blogposts.json');

export const getBlogComments = (req: Request, res: Response): Response => {
  const commentsPost: CommentType[] = comments.filter((item) => {
    return item.post_id === parseInt(req.params?.id);
  });

  if (req.query?.type === 'count') {
    return res.status(200).send({ count: commentsPost.length });
  }

  return res.status(200).send(commentsPost);
};

export const createNewCommentPost = (req: Request, res: Response): Response => {
  const comment = req.body?.comment;

  if (!comment && typeof comment !== 'string') {
    return res.status(400).send({
      error: errorValidationComment,
    });
  }

  const validPost: BlogPost = blogPosts.find((post) => {
    return parseInt(req?.params.id) === post.id;
  });

  if (!validPost) {
    return res.status(400).send(status.error);
  }
  return res.status(201).send(status.created);
};

export const updateCommentById = (req: Request, res: Response): Response => {
  const commentsPost: CommentType[] = comments.filter((item) => {
    return item.post_id === parseInt(req.params?.id);
  });

  if (commentsPost.length > 0) {
    const commentsByPostId: CommentType[] = commentsPost.filter((comment) => {
      return comment.id === parseInt(req.body?.id);
    });

    if (commentsByPostId.length > 0) {
      return res.status(201).send(status.updated);
    }
  }

  return res.status(400).send(status.error);
};
