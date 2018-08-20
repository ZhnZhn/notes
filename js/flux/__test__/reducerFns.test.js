'use strict';

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeProp = _reducerFns2.default.removeProp,
    filterBy = _reducerFns2.default.filterBy;


describe('reducerFn removeProp', function () {
  test('should remove prop from obj by prop name', function () {
    expect(removeProp({
      a: 'a',
      b: 'b'
    }, 'a')).toEqual({
      b: 'b'
    });
  });
});

describe('reducerFn filterBy', function () {
  test('should filter array of string by str', function () {
    expect(filterBy(['a', 'b'], 'a')).toEqual(['b']);
  });
  test('should return same in edge case', function () {
    expect(filterBy(undefined, 'a')).toBe(undefined);
    expect(filterBy(null, 'a')).toBe(null);
    expect(filterBy(true, 'a')).toBe(true);
    expect(filterBy('abc', 'a')).toBe('abc');
    expect(filterBy({}, 'a')).toEqual({});
  });
});
//# sourceMappingURL=reducerFns.test.js.map