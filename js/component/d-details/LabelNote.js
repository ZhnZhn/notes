"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const LabelNote = _ref => {
  let {
    className,
    clClose,
    item,
    onRemove
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    type: "button",
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
var _default = exports.default = LabelNote;
//# sourceMappingURL=LabelNote.js.map