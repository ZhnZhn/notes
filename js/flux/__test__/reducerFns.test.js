'use strict';

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeProp = _reducerFns2.default.removeProp,
    filterBy = _reducerFns2.default.filterBy,
    filterByProp = _reducerFns2.default.filterByProp,
    setInObj = _reducerFns2.default.setInObj;


var returnSame = function returnSame() {
  expect(filterBy(undefined, 'a')).toBe(undefined);
  expect(filterBy(null, 'a')).toBe(null);
  expect(filterBy(true, 'a')).toBe(true);
  expect(filterBy('abc', 'a')).toBe('abc');
  expect(filterBy({}, 'a')).toEqual({});
};

describe('reducerFn removeProp', function () {
  test('should remove prop from obj by prop name', function () {
    var state = { a: 'a', b: 'b' },
        newState = removeProp(state, 'a');
    expect(newState).toEqual({ b: 'b' });
    expect(state === newState).toBe(false);
  });
});

describe('reducerFn filterBy', function () {
  test('should filter array of string by str', function () {
    var state = ['a', 'b'],
        newState = filterBy(state, 'a');
    expect(newState).toEqual(['b']);
    expect(state === newState).toBe(false);
  });
  test('should return same in edge case', returnSame);
});

describe('reducerFn filterByProp', function () {
  test('should filter arr with obj by propValue with default propName id', function () {
    var state = [{ id: '1', m: 'm1' }, { id: '2', m: 'm2' }],
        newState = filterByProp(state, '1');
    expect(newState).toEqual([{ id: '2', m: 'm2' }]);
    expect(state === newState).toBe(false);
  });

  test('should filter arr with obj by propValue and propName', function () {
    var state = [{ id: '1', m: 'm1' }, { id: '2', m: 'm2' }],
        newState = filterByProp(state, 'm1', 'm');
    expect(newState).toEqual([{ id: '2', m: 'm2' }]);
    expect(state === newState).toBe(false);
  });

  test('should return same in edge case', returnSame);
});

describe('setInObj', function () {
  test('should set in state by key object', function () {
    var state = {},
        newState = setInObj(state, 'a', { title: 'a' });
    expect(newState).toEqual({
      a: { title: 'a' }
    });
    expect(state === newState).toBe(false);
  });
});
//# sourceMappingURL=reducerFns.test.js.map