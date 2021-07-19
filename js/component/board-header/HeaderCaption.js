"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _selectors = _interopRequireDefault(require("../../flux/selectors"));

var _Logo = _interopRequireDefault(require("../zhn/Logo"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _crTitle = _interopRequireDefault(require("./crTitle"));

var _jsxRuntime = require("react/jsx-runtime");

var HeaderCaption = function HeaderCaption(_ref) {
  var board = _ref.board;
  return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo["default"], {
    className: _CL["default"].LOGO_BOARD
  }, "logo"), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _CL["default"].HEADER_TITLE + " " + _CL["default"].TITLE_BOARD,
    children: (0, _crTitle["default"])(board)
  }, "title")];
};

var mapStateToProps = function mapStateToProps(state
/*: StoreState */
) {
  return {
    board: _selectors["default"].board.currentBoard(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(HeaderCaption);

exports["default"] = _default;
//# sourceMappingURL=HeaderCaption.js.map