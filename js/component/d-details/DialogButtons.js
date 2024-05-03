"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _jsxRuntime = require("react/jsx-runtime");
const DialogButtons = _ref => {
  let {
    refBtClose,
    className,
    onSave,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Save",
      timeout: 100,
      onClick: onSave
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      refEl: refBtClose,
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })]
  });
};
var _default = exports.default = DialogButtons;
//# sourceMappingURL=DialogButtons.js.map