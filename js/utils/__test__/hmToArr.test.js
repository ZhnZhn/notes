"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _hmToArr = _interopRequireDefault(require("../hmToArr"));

describe('hmToArr', function () {
  test('should return arr with property values from obj', function () {
    expect((0, _hmToArr["default"])({
      'a1': {
        id: 'a1'
      }
    })).toEqual([{
      id: 'a1'
    }]);
  });
});
//# sourceMappingURL=hmToArr.test.js.map