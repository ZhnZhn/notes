"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./app/reducer"));

var _reducer2 = _interopRequireDefault(require("./drawerMsg/reducer"));

var _reducer3 = _interopRequireDefault(require("./modal/reducer"));

var _reducer4 = _interopRequireDefault(require("./board/reducer"));

var _reducer5 = _interopRequireDefault(require("./note/reducer"));

var _reducer6 = _interopRequireDefault(require("./noteLabel/reducer"));

var _reducer7 = _interopRequireDefault(require("./column/reducer"));

var rootReducer = (0, _redux.combineReducers)({
  app: _reducer["default"],
  drawerMsg: _reducer2["default"],
  modal: _reducer3["default"],
  boards: _reducer4["default"],
  notes: _reducer5["default"],
  noteLabels: _reducer6["default"],
  columns: _reducer7["default"]
});
var _default = rootReducer;
exports["default"] = _default;
//# sourceMappingURL=rootReducer.js.map