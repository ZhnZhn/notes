'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./app/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./drawerMsg/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./modal/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./board/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require('./note/reducer');

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = require('./noteLabel/reducer');

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = require('./column/reducer');

var _reducer14 = _interopRequireDefault(_reducer13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  app: _reducer2.default,
  drawerMsg: _reducer4.default,
  modal: _reducer6.default,
  boards: _reducer8.default,
  notes: _reducer10.default,
  noteLabels: _reducer12.default,
  columns: _reducer14.default
});

exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map