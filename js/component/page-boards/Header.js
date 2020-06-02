"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../../flux/board/actions");

var _Header = _interopRequireDefault(require("../zhn-ch/Header"));

var _Logo = _interopRequireDefault(require("../zhn/Logo"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _HeaderDrawer = _interopRequireDefault(require("../header/HeaderDrawer"));

var _CL = _interopRequireDefault(require("../style/CL"));

var Header = function Header(_ref) {
  var style = _ref.style,
      addBoard = _ref.addBoard;
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    className: _CL["default"].HEADER,
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), /*#__PURE__*/_react["default"].createElement("span", {
    className: _CL["default"].TITLE_GAP
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _CL["default"].HEADER_TITLE
  }, "Notes: Boards"), /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
    caption: "Add Board",
    title: "Click to add new board",
    accessKey: "a",
    timeout: 200,
    onClick: addBoard
  }), /*#__PURE__*/_react["default"].createElement(_HeaderDrawer["default"], null));
};

var mapDispatchToProps = {
  addBoard: _actions.addBoard
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Header);

exports["default"] = _default;
//# sourceMappingURL=Header.js.map