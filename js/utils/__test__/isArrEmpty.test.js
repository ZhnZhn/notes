'use strict';

var _isArrEmpty = require('../isArrEmpty');

var _isArrEmpty2 = _interopRequireDefault(_isArrEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isArrEmpty', function () {

  test('should return true for empty array', function () {
    expect((0, _isArrEmpty2.default)([])).toBe(true);
  });

  test('should return false for not empty array', function () {
    expect((0, _isArrEmpty2.default)([1])).toBe(false);
    expect((0, _isArrEmpty2.default)([{}])).toBe(false);
    expect((0, _isArrEmpty2.default)([{ id: 1 }])).toBe(false);
  });

  test('should return true for edge case', function () {
    expect((0, _isArrEmpty2.default)({})).toBe(true);
    expect((0, _isArrEmpty2.default)(null)).toBe(true);
    expect((0, _isArrEmpty2.default)()).toBe(true);
    expect((0, _isArrEmpty2.default)(1)).toBe(true);
    expect((0, _isArrEmpty2.default)('str')).toBe(true);
  });
});
//# sourceMappingURL=isArrEmpty.test.js.map