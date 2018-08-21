'use strict';

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeProp = _reducerFns2.default.removeProp,
    filterBy = _reducerFns2.default.filterBy,
    filterByProp = _reducerFns2.default.filterByProp;


var returnSame = function returnSame() {
  expect(filterBy(undefined, 'a')).toBe(undefined);
  expect(filterBy(null, 'a')).toBe(null);
  expect(filterBy(true, 'a')).toBe(true);
  expect(filterBy('abc', 'a')).toBe('abc');
  expect(filterBy({}, 'a')).toEqual({});
};

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
  test('should return same in edge case', returnSame);
});

describe('reducerFn filterByProp', function () {
  test('should filter arr with obj by propValue with default propName id', function () {
    expect(filterByProp([{ id: '1', m: 'm1' }, { id: '2', m: 'm2' }], '1')).toEqual([{ id: '2', m: 'm2' }]);
  });

  test('should filter arr with obj by propValue and propName', function () {
    expect(filterByProp([{ id: '1', m: 'm1' }, { id: '2', m: 'm2' }], 'm1', 'm')).toEqual([{ id: '2', m: 'm2' }]);
  });

  test('should return same in edge case', returnSame);
});
//# sourceMappingURL=reducerFns.test.js.map