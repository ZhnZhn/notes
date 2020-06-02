"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DrawerLeft = _interopRequireDefault(require("../zhn-ch/DrawerLeft"));

var _HeaderCaption = _interopRequireDefault(require("./HeaderCaption"));

var _TopicDrawerMenu = _interopRequireDefault(require("./TopicDrawerMenu"));

var TopicDrawer = function TopicDrawer() {
  return /*#__PURE__*/_react["default"].createElement(_DrawerLeft["default"], {
    captionComp: /*#__PURE__*/_react["default"].createElement(_HeaderCaption["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_TopicDrawerMenu["default"], null));
};

var _default = TopicDrawer;
exports["default"] = _default;
//# sourceMappingURL=TopicDrawer.js.map