'use strict';

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _initialState = require('../../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = _initialState2.default.modal;
/*
const initState = {
  id: undefined,
  data: undefined
}
*/

describe('reducer columm', function () {
  test('should init to initialState', function () {
    expect((0, _reducer2.default)(undefined, {})).toEqual(state);
  });
  test('should show modal dialog', function () {
    var mId = 'NOTIF',
        data = { descr: 'Description' };
    expect((0, _reducer2.default)(state, _actions2.default.showModal(mId, data))).toEqual({
      id: mId,
      data: data
    });
  });
});
//# sourceMappingURL=reducer.test.js.map