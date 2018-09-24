'use strict';

var _hmToArr = require('../hmToArr');

var _hmToArr2 = _interopRequireDefault(_hmToArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('hmToArr', function () {
  test('should return arr with property values from obj', function () {
    expect((0, _hmToArr2.default)({ 'a1': { id: 'a1' } })).toEqual([{ id: 'a1' }]);
  });
});
//# sourceMappingURL=hmToArr.test.js.map