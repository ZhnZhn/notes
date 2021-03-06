"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _CL = _interopRequireDefault(require("../style/CL"));

var BtCircle = function BtCircle(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      title = _ref.title,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? "-1" : _ref$tabIndex,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: _CL["default"].BT_CIRCLE,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick,
    children: caption
  });
};

var _default = BtCircle;
exports["default"] = _default;
//# sourceMappingURL=BtCircle.js.map