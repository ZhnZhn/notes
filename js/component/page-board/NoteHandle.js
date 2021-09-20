"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["isDetails"];
var CL_HANDLE = 'note__handle',
    CL_OPEN = 'note__handle--open';

var NoteHandle = function NoteHandle(_ref) {
  var isDetails = _ref.isDetails,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _cl = (0, _crCn["default"])(CL_HANDLE, [isDetails, CL_OPEN]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", (0, _extends2["default"])({
    className: _cl
  }, rest));
};

var _default = NoteHandle;
exports["default"] = _default;
//# sourceMappingURL=NoteHandle.js.map