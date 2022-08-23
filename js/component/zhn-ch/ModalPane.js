"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));

var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));

var _jsxRuntime = require("react/jsx-runtime");

var ModalPane = function ModalPane(_ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      onClose = _ref.onClose;

  var _refNode = (0, _useClickOutside["default"])(isShow, onClose),
      _hKeyEscape = (0, _useKeyEscape["default"])(onClose),
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

var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map