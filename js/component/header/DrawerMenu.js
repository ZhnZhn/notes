"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _actions = require("../../flux/app/actions");

var _actions2 = require("../../flux/modal/actions");

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DrawerMsgList = _interopRequireDefault(require("./DrawerMsgList"));

var _jsxRuntime = require("react/jsx-runtime");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL.HEADER,
      style: S.HEADER,
      children: TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      style: S.UL,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: CL.BT,
          caption: "User Settings",
          title: "Click to open user settings dialog",
          onClick: showSettings
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: CL.BT,
          caption: "Save Boards",
          title: "Click to save boards to localStorage",
          onClick: saveBoard
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          className: CL.BT,
          caption: "Clean Storage",
          title: "Click to remove boards from localStorage",
          onClick: cleanStorage
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DrawerMsgList["default"], {})]
  });
};

var mapDispatchToProps = {
  showSettings: _actions2.showSettings,
  saveBoard: _actions.saveBoard,
  cleanStorage: _actions.cleanStorage
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DrawerMenu);

exports["default"] = _default;
//# sourceMappingURL=DrawerMenu.js.map