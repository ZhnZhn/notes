"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var LabelNote = function LabelNote(_ref) {
  var className = _ref.className,
      clClose = _ref.clClose,
      item = _ref.item,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    className: className,
    style: {
      backgroundColor: item.color
    },
    onClick: onRemove,
    children: [item.title, onRemove && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: clClose,
      children: "x"
    })]
  });
};

var _default = LabelNote;
exports["default"] = _default;
//# sourceMappingURL=LabelNote.js.map