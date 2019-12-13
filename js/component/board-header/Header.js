"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("../zhn-ch/Header"));

var _TopicDrawer = _interopRequireDefault(require("./TopicDrawer"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _HeaderDrawer = _interopRequireDefault(require("../header/HeaderDrawer"));

var _CL = _interopRequireDefault(require("../style/CL"));

var Header = function Header(_ref) {
  var addColumn = _ref.addColumn;
  return _react["default"].createElement(_Header["default"], {
    className: _CL["default"].HEADER
  }, _react["default"].createElement(_TopicDrawer["default"], null), _react["default"].createElement(_FlatButton["default"], {
    caption: "Add Topic",
    title: "Click to add topic to board",
    accessKey: "a",
    timeout: 500,
    onClick: addColumn
  }), _react["default"].createElement("nav", null, _react["default"].createElement(_reactRouterDom.NavLink, {
    to: "/boards",
    className: _CL["default"].NAV_LINK + " " + _CL["default"].ML_8
  }, "ToBoards")), _react["default"].createElement(_HeaderDrawer["default"], null));
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map