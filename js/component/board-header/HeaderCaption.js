"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _selectors = require("../../flux/selectors");

var _Logo = _interopRequireDefault(require("../zhn/Logo"));

var _crTitle = _interopRequireDefault(require("./crTitle"));

var _CL = require("../style/CL");

var _jsxRuntime = require("react/jsx-runtime");

var _CL_TITLE = _CL.CL_HEADER_TITLE + " " + _CL.CL_TITLE_BOARD;

var HeaderCaption = function HeaderCaption() {
  var board = (0, _uiApi.useSelector)(_selectors.sBoard.currentBoard);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo["default"], {
      className: _CL.CL_LOGO_BOARD
    }, "logo"), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL_TITLE,
      children: (0, _crTitle["default"])(board)
    })]
  });
};

var _default = HeaderCaption;
exports["default"] = _default;
//# sourceMappingURL=HeaderCaption.js.map