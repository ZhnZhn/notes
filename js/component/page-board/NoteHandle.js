"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["isDetails"];
var CL = {
  HANDLE: 'note__handle',
  OPEN: 'note__handle--open'
};

var NoteHandle = function NoteHandle(_ref) {
  var isDetails = _ref.isDetails,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _cl = isDetails ? CL.HANDLE + " " + CL.OPEN : CL.HANDLE;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", (0, _extends2["default"])({
    className: _cl
  }, rest));
};

var _default = NoteHandle;
exports["default"] = _default;
//# sourceMappingURL=NoteHandle.js.map