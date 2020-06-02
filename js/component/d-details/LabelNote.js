"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var LabelNote = function LabelNote(_ref) {
  var className = _ref.className,
      clClose = _ref.clClose,
      item = _ref.item,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: className,
    style: {
      backgroundColor: item.color
    },
    onClick: onRemove
  }, item.title, onRemove && /*#__PURE__*/_react["default"].createElement("span", {
    className: clClose
  }, "x"));
};

var _default = LabelNote;
exports["default"] = _default;
//# sourceMappingURL=LabelNote.js.map