"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reducer = _interopRequireDefault(require("../reducer"));

var _actions = _interopRequireDefault(require("../actions"));

var _fns = _interopRequireDefault(require("../fns"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var crMsg = _fns["default"].crMsg;
var state = _initialState["default"].drawerMsg;
describe('reducer drawerMsg', function () {
  test('should init to []', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual([]);
  });
  /*
  test('should add drawer msg', ()=>{
    const mId = 'm-1', msg = 'Msg';
    expect(
      reducer(state, dma.addDrawerMsg(msg, mId))
    ).toEqual([
      crMsg(mId, msg)
    ])
  })
  */

  test('should remove drawer msg', function () {
    var mId = 'm-1',
        msg = 'Msg',
        state1 = (0, _reducer["default"])(state, _actions["default"].addDrawerMsg(msg, mId));
    expect((0, _reducer["default"])(state1, _actions["default"].removeDrawerMsg(mId))).toEqual(state);
  });
});
//# sourceMappingURL=reducer.test.js.map