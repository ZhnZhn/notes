"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var DialogButtons = function DialogButtons(_ref) {
  var refBtClose = _ref.refBtClose,
      className = _ref.className,
      onSave = _ref.onSave,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      caption: "Save",
      timeout: 100,
      onClick: onSave
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      ref: refBtClose,
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })]
  });
};

var _default = DialogButtons;
exports["default"] = _default;
//# sourceMappingURL=DialogButtons.js.map