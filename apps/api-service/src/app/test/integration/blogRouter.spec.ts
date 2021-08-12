import axios from 'axios';
import { environment } from '../../../environments/environment';
import blogPosts = require('../../mock/blogposts.json');
import comments = require('../../mock/comments.json');

import * as status from '../../constant/response';
import { mapCommentCountBlogPost } from '../../helpers/comments';
const blogUrl = `${environment.baseUrl}/blog`;

describe('blogRouter', () => {
  describe('/blog', () => {
    it('GET: should return a list of all blogs', async () => {
      const response = await axios.get(blogUrl);
      expect(response.status).toEqual(200);
      expect(response.data).toEqual(
        mapCommentCountBlogPost(blogPosts, comments)
      );
    });
  });

  describe('/blog/:id', () => {
    it('GET: should return me a blog post from param by id', async () => {
      const response = await axios.get(`${blogUrl}/1`);
      expect(response.status).toEqual(200);
      expect(response.data).toEqual(blogPosts[0]);
    });

    it('GET: should return me a blog post from param by canonical_url', async () => {
      const responseLowerCase = await axios.get(`${blogUrl}/stephi-1-ejkjdd`);
      expect(responseLowerCase.status).toEqual(200);
      expect(responseLowerCase.data).toEqual(blogPosts[0]);

      const responseUpperCase = await axios.get(`${blogUrl}/Stephi-1-ejkjdd`);
      expect(responseUpperCase.status).toEqual(200);
      expect(responseUpperCase.data).toEqual(blogPosts[0]);
    });

    it('GET: should return me 204 response if blog post is not found', async () => {
      const response = await axios.get(`${blogUrl}/random28738hjjh`);
      expect(response.status).toEqual(204);
      expect(response.data).toBe('');
    });
  });

  describe('/:id/comments', () => {
    it('GET: should return back all comments for the blog post by id', async () => {
      const response = await axios.get(`${blogUrl}/1/comments`);
      expect(response.status).toEqual(200);
      response.data.forEach((element) => {
        expect(element.post_id).toBe(1);
      });
      expect.assertions(15);
    });

    it('GET: should return empty array if comments are not found for blog post by id', async () => {
      const response = await axios.get(`${blogUrl}/12902290/comments`);
      expect(response.status).toEqual(200);
      expect(response.data).toEqual([]);
    });

    it('GET: should return the count of comments for a blog post', async () => {
      const response = await axios.get(`${blogUrl}/1/comments?type=count`);
      expect(response.status).toEqual(200);
      expect(response.data).toEqual({ count: 14 });
    });
  });

  describe('/:id/comment', () => {
    it('POST: should create new comment to blog post', async () => {
      const response = await axios.post(`${blogUrl}/1/comment`, {
        comment: 'Man in the mirror',
        author: 'Micheal jackson',
      });
      expect(response.status).toEqual(201);
      expect(response.data).toEqual(status.created);
    });

    it('POST: should return 400 if missing comment in body', async () => {
      try {
        await axios.post(`${blogUrl}/1/comment`, {
          author: 'Micheal jackson',
        });
      } catch (e) {
        expect(e.response.status).toEqual(400);
        expect(e.response.data).toEqual({
          error: status.errorValidationComment,
        });
      }
    });

    it('POST: should return 400 if blog post id is not valid', async () => {
      try {
        await axios.post(`${blogUrl}/389484/comment`, {
          comment: 'billie jean',
          author: 'Micheal jackson',
        });
      } catch (e) {
        expect(e.response.status).toEqual(400);
        expect(e.response.data).toEqual(status.error);
      }
    });

    it('PUT: should return 201 if comment is updated for post ', async () => {
      const response = await axios.put(`${blogUrl}/18/comment`, {
        id: 2,
      });

      expect(response.status).toEqual(201);
      expect(response.data).toEqual(status.updated);
    });

    it('PUT: should return 400 if invalid post ', async () => {
      try {
        await axios.put(`${blogUrl}/2222222/comment`, {
          id: 222232323,
        });
      } catch (e) {
        expect(e.response.status).toEqual(400);
        expect(e.response.data).toEqual(status.error);
      }
    });
  });
});
