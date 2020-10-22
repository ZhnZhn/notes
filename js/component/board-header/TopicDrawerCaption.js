"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _CL = _interopRequireDefault(require("./CL"));

var _crTitle = _interopRequireDefault(require("./crTitle"));

var TOPICS = 'Topics';

var TopicDrawerCaption = function TopicDrawerCaption(_ref) {
  var board = _ref.board;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _CL["default"].DRAWER_TITLE,
    children: (0, _crTitle["default"])(board, TOPICS)
  });
};

var _default = TopicDrawerCaption;
exports["default"] = _default;
//# sourceMappingURL=TopicDrawerCaption.js.map