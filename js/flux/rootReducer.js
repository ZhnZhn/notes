'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./app/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./board/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./note/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./column/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  app: _reducer2.default,
  boards: _reducer4.default,
  notes: _reducer6.default,
  columns: _reducer8.default
});

exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map