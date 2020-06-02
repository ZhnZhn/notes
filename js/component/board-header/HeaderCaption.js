"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _selectors = _interopRequireDefault(require("../../flux/selectors"));

var _Logo = _interopRequireDefault(require("../zhn/Logo"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _crTitle = _interopRequireDefault(require("./crTitle"));

var HeaderCaption = function HeaderCaption(_ref) {
  var board = _ref.board;
  return [/*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    key: "logo",
    className: _CL["default"].LOGO_BOARD
  }), /*#__PURE__*/_react["default"].createElement("span", {
    key: "title",
    className: _CL["default"].HEADER_TITLE + " " + _CL["default"].TITLE_BOARD
  }, (0, _crTitle["default"])(board))];
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