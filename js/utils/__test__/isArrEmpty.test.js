"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isArrEmpty = _interopRequireDefault(require("../isArrEmpty"));

describe('isArrEmpty', function () {
  test('should return true for empty array', function () {
    expect((0, _isArrEmpty["default"])([])).toBe(true);
  });
  test('should return false for not empty array', function () {
    expect((0, _isArrEmpty["default"])([1])).toBe(false);
    expect((0, _isArrEmpty["default"])([{}])).toBe(false);
    expect((0, _isArrEmpty["default"])([{
      id: 1
    }])).toBe(false);
  });
  test('should return true for edge case', function () {
    expect((0, _isArrEmpty["default"])({})).toBe(true);
    expect((0, _isArrEmpty["default"])(null)).toBe(true);
    expect((0, _isArrEmpty["default"])()).toBe(true);
    expect((0, _isArrEmpty["default"])(1)).toBe(true);
    expect((0, _isArrEmpty["default"])('str')).toBe(true);
  });
});
//# sourceMappingURL=isArrEmpty.test.js.map