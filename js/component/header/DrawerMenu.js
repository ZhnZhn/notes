"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _actions = require("../../flux/app/actions");

var _reducer = require("../../flux/modal/reducer");

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DrawerMsgList = _interopRequireDefault(require("./DrawerMsgList"));

var _jsxRuntime = require("react/jsx-runtime");

var TITLE = "Web App Notes v0.3.0";
var CL_HEADER = 'header__title',
    CL_DRAWER_LIST = 'drawer__list',
    CL_DRAWER_BT = 'drawer__list-bt',
    S_HEADER = {
  padding: '16px 0 8px 0',
  marginLeft: 16
},
    S_UL = {
  listStyleType: 'none'
};

var DrawerMenu = function DrawerMenu(_ref) {
  var showSettings = _ref.showSettings,
      saveBoard = _ref.saveBoard,
      cleanStorage = _ref.cleanStorage;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_DRAWER_LIST,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL_HEADER,
      style: S_HEADER,
      children: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      style: S_UL,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: CL_DRAWER_BT,
          caption: "User Settings",
          title: "Click to open user settings dialog",
          onClick: showSettings
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: CL_DRAWER_BT,
          caption: "Save Boards",
          title: "Click to save boards to localStorage",
          onClick: saveBoard
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: CL_DRAWER_BT,
          caption: "Clean Storage",
          title: "Click to remove boards from localStorage",
          onClick: cleanStorage
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrawerMsgList["default"], {})]
  });
};

var mapDispatchToProps = {
  showSettings: _reducer.showSettings,
  saveBoard: _actions.saveBoard,
  cleanStorage: _actions.cleanStorage
};

var _default = (0, _uiApi.connect)(null, mapDispatchToProps)(DrawerMenu);

exports["default"] = _default;
//# sourceMappingURL=DrawerMenu.js.map