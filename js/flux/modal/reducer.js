'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('./actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const initState = {
 id: null
 data: null
}
*/

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.modal;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.SHOW_MODAL:
      {
        var id = action.id,
            data = action.data;

        return (0, _extends3.default)({}, state, {
          id: id,
          data: data
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map