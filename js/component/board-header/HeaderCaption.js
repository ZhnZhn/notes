"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _selectors = require("../../flux/selectors");
var _uiApi = require("../uiApi");
var _styleFn = require("../styleFn");
var _Logo = _interopRequireDefault(require("../zhn/Logo"));
var _crTitle = _interopRequireDefault(require("./crTitle"));
var _jsxRuntime = require("react/jsx-runtime");
const _CL_TITLE = `${_styleFn.CL_HEADER_TITLE} ${_styleFn.CL_TITLE_BOARD}`;
const HeaderCaption = () => {
  const board = (0, _uiApi.useSelector)(_selectors.selectCurrentBoard);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo.default, {
      className: _styleFn.CL_LOGO_BOARD
    }, "logo"), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL_TITLE,
      children: (0, _crTitle.default)(board)
    })]
  });
};
var _default = exports.default = HeaderCaption;
//# sourceMappingURL=HeaderCaption.js.map