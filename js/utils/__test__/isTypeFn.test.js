"use strict";

var _isTypeFn = require("../isTypeFn");
describe('isArrEmpty', () => {
  test('should return true for empty array', () => {
    expect((0, _isTypeFn.isArrEmpty)([])).toBe(true);
  });
  test('should return false for not empty array', () => {
    expect((0, _isTypeFn.isArrEmpty)([1])).toBe(false);
    expect((0, _isTypeFn.isArrEmpty)([{}])).toBe(false);
    expect((0, _isTypeFn.isArrEmpty)([{
      id: 1
    }])).toBe(false);
  });
  test('should return true for edge case', () => {
    expect((0, _isTypeFn.isArrEmpty)({})).toBe(true);
    expect((0, _isTypeFn.isArrEmpty)(null)).toBe(true);
    expect((0, _isTypeFn.isArrEmpty)()).toBe(true);
    expect((0, _isTypeFn.isArrEmpty)(1)).toBe(true);
    expect((0, _isTypeFn.isArrEmpty)('str')).toBe(true);
  });
});
//# sourceMappingURL=isTypeFn.test.js.map