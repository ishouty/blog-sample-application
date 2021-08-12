const selectorsName = {
  blockContainer: '.block-container-item',
  commentContainer: '.comment-item',
};

describe('Blog App', () => {
  beforeEach(() => cy.visit('/'));

  describe('Blog HomePage', () => {
    it('Should be able to see a list of blog posted', () => {
      cy.get(selectorsName.blockContainer).should('have.length.above', 1);
    });
  });

  describe('Blog Detail page', () => {
    it('Should render blog details', () => {
      cy.get(selectorsName.blockContainer).first().click();
      cy.get(selectorsName.commentContainer).should('have.length.above', 1);
    });
  });
});
