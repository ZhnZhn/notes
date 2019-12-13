"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CL = _interopRequireDefault(require("../style/CL"));

var BtCircle = function BtCircle(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      title = _ref.title,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? "-1" : _ref$tabIndex,
      onClick = _ref.onClick;
  return _react["default"].createElement("button", {
    className: _CL["default"].BT_CIRCLE,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick
  }, caption);
};

var _default = BtCircle;
exports["default"] = _default;
//# sourceMappingURL=BtCircle.js.map