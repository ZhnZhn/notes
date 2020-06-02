"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../../flux/app/actions");

var _actions2 = require("../../flux/modal/actions");

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DrawerMsgList = _interopRequireDefault(require("./DrawerMsgList"));

var TITLE = "Web App Notes v0.2.0";
var CL = {
  HEADER: 'header__title',
  ROOT: 'drawer__list',
  BT: 'drawer__list-bt'
};
var S = {
  HEADER: {
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  UL: {
    listStyleType: 'none'
  }
};

var DrawerMenu = function DrawerMenu(_ref) {
  var showSettings = _ref.showSettings,
      saveBoard = _ref.saveBoard,
      cleanStorage = _ref.cleanStorage;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: CL.ROOT
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: CL.HEADER,
    style: S.HEADER
  }, TITLE), /*#__PURE__*/_react["default"].createElement("ul", {
    style: S.UL
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
    className: CL.BT,
    caption: "User Settings",
    title: "Click to open user settings dialog",
    onClick: showSettings
  })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
    className: CL.BT,
    caption: "Save Boards",
    title: "Click to save boards to localStorage",
    onClick: saveBoard
  })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
    className: CL.BT,
    caption: "Clean Storage",
    title: "Click to remove boards from localStorage",
    onClick: cleanStorage
  }))), /*#__PURE__*/_react["default"].createElement(_DrawerMsgList["default"], null));
};

var mapDispatchToProps = {
  showSettings: _actions2.showSettings,
  saveBoard: _actions.saveBoard,
  cleanStorage: _actions.cleanStorage
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DrawerMenu);

exports["default"] = _default;
//# sourceMappingURL=DrawerMenu.js.map