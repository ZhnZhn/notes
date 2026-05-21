"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
const BtCircle = _ref => {
  let {
    style,
    caption,
    title,
    tabIndex = "-1",
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: _CL.CL_BT_CIRCLE,
    style: style,
    tabIndex: tabIndex,
    title: title,
    onClick: onClick,
    children: caption
  });
};
var _default = exports.default = BtCircle;
//# sourceMappingURL=BtCircle.js.map