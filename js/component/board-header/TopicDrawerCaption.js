"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CL = _interopRequireDefault(require("./CL"));

var _crTitle = _interopRequireDefault(require("./crTitle"));

var TOPICS = 'Topics';

var TopicDrawerCaption = function TopicDrawerCaption(_ref) {
  var board = _ref.board;
  return _react["default"].createElement("div", {
    className: _CL["default"].DRAWER_TITLE
  }, (0, _crTitle["default"])(board, TOPICS));
};

var _default = TopicDrawerCaption;
exports["default"] = _default;
//# sourceMappingURL=TopicDrawerCaption.js.map