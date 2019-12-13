"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../actions"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var state = _initialState["default"].modal;
/*
const initState = {
  id: undefined,
  data: undefined
}
*/

describe('reducer columm', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(state);
  });
  test('should show modal dialog', function () {
    var mId = 'NOTIF',
        data = {
      descr: 'Description'
    };
    expect((0, _reducer["default"])(state, _actions["default"].showModal(mId, data))).toEqual({
      id: mId,
      data: data
    });
  });
});
//# sourceMappingURL=reducer.test.js.map