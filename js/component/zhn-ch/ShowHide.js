"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const CL_SHOW_POPUP = 'show-popup',
  S_SHOW = {
    display: 'block'
  },
  S_HIDE = {
    display: 'none'
  };
const ShowHide = _ref => {
  let {
    isShow,
    className,
    style,
    children
  } = _ref;
  const _cl = (0, _styleFn.crCn)(className, [isShow, CL_SHOW_POPUP]),
    _style = (0, _styleFn.crStyle)(style, isShow ? S_SHOW : S_HIDE);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _cl,
    style: _style,
    children: children
  });
};
var _default = exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map