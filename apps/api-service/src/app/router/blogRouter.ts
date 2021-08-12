/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { getAllBlogs, getBlogById } from '../controllers/blog';
import { getBlogComments, createNewCommentPost, updateCommentById } from '../controllers/comments';
const router: Router = Router();

router.get('/', getAllBlogs);

router.get('/:id', getBlogById);

router.get('/:id/comments', getBlogComments);

router.post('/:id/comment', createNewCommentPost);

router.put('/:id/comment', updateCommentById);

export default router;