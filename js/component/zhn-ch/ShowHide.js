"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const ShowHide = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  className: (0, _styleFn.crCn)(props.className, [props.isShow, _styleFn.CL_SHOWING]),
  style: (0, _styleFn.crBlockNoneStyle)(props),
  children: props.children
});
var _default = exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map