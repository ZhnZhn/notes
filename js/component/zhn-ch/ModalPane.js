"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _fUseKey = require("../hooks/fUseKey");
var _jsxRuntime = require("react/jsx-runtime");
const ModalPane = _ref => {
  let {
    isShow,
    className,
    style,
    children,
    onClose
  } = _ref;
  const _refNode = (0, _useClickOutside.default)(isShow, onClose),
    _hKeyEscape = (0, _fUseKey.useKeyEscape)(onClose),
    _hKeyDown = isShow ? _hKeyEscape : void 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    ref: _refNode,
    className: className,
    style: style,
    onKeyDown: _hKeyDown,
    children: children
  });
};
var _default = exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map