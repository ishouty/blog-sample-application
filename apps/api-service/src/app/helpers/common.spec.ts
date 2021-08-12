import * as common from './common';

describe('common', () => {
  describe('isParamInteger', () => {
    it('should return true if param is integer', () => {
      expect(common.isParamInteger(2)).toBe(true);
    });

    it('should return false if param is string', () => {
      expect(common.isParamInteger('string item')).toBe(false);
    });
  });
});
