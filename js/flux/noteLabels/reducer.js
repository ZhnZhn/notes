'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../note/actions');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.noteLabels;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map