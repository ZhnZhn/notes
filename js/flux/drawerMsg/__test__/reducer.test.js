'use strict';

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _fns = require('../fns');

var _fns2 = _interopRequireDefault(_fns);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crMsg = _fns2.default.crMsg;

var state = _initialState2.default.drawerMsg;

describe('reducer drawerMsg', function () {
  test('should init to []', function () {
    expect((0, _reducer2.default)(undefined, {})).toEqual([]);
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
        state1 = (0, _reducer2.default)(state, _actions2.default.addDrawerMsg(msg, mId));
    expect((0, _reducer2.default)(state1, _actions2.default.removeDrawerMsg(mId))).toEqual(state);
  });
});
//# sourceMappingURL=reducer.test.js.map