"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _crArrFromHm = _interopRequireDefault(require("../crArrFromHm"));

describe('crArrFromHm', function () {
  var fn = _crArrFromHm["default"];
  test('should return array with property values from hm object', function () {
    expect(fn({
      a1: {
        id: 'a1'
      },
      a2: {
        id: 'a2'
      }
    })).toEqual([{
      id: 'a1'
    }, {
      id: 'a2'
    }]);
  });
});
//# sourceMappingURL=crArrFromHm.test.js.map