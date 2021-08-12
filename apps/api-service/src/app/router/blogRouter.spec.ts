/* eslint-disable prettier/prettier */
import blogRouter from './blogRouter';

describe('blogRouter', () => {

  it('should define all the routes required for application', () => {

    const routes = [
      { path: '/', method: 'get'},
      { path: '/:id', method: 'get'},
      { path: '/:id/comments', method: 'get'},
      { path: '/:id/comment', method: 'post'},
      { path: '/:id/comment', method: 'put'},
    ];

    blogRouter.stack.forEach((item, index) => {
      expect(item.route.path).toEqual(routes[index].path);
      expect(item.route.stack[0].method).toEqual(routes[index].method);
    });
    expect(blogRouter.stack.length).toEqual(5);
  });
});