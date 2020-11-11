"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

//import withTheme from '../hoc/withTheme'
var CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer',
  DRAWER_MODAL: 'drawer-modal'
};
var S = {
  BT_DRAWER: {
    position: 'absolute',
    top: 4,
    right: 16
  },
  DRAWER_OFF: {
    //transform: 'translateX(-264px)',
    transform: 'translateX(264px)',
    pointerEvents: 'none'
  },
  DRAWER_ON: {
    transform: 'translate(0px, 0px)'
  },
  MODAL_OFF: {
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  MODAL_ON: {
    opacity: 1,
    zIndex: 1000,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
};

var Drawer = function Drawer(_ref) {
  var btStyle = _ref.btStyle,
      children = _ref.children;

  var _useToggle = (0, _useToggle2["default"])(false),
      isOpen = _useToggle[0],
      toggleIsOpen = _useToggle[1],
      TS = (0, _useTheme["default"])(_Comp["default"]),
      _drawerStyle = isOpen ? S.DRAWER_ON : S.DRAWER_OFF,
      _drawerModalStyle = isOpen ? S.MODAL_ON : S.MODAL_OFF,
      _onClickWrapper = isOpen ? toggleIsOpen : void 0;

  return [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL.DRAWER_BT,
    style: (0, _extends2["default"])({}, S.BT_DRAWER, btStyle),
    "aria-label": "Open Drawer",
    onClick: toggleIsOpen,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL.DRAWER_SPAN,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        className: CL.DRAWER_SVG,
        focusable: "false",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        })]
      })
    })
  }, "bt-drawer"), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    "aria-hidden": !isOpen,
    className: CL.DRAWER_MODAL,
    style: _drawerModalStyle,
    onClick: _onClickWrapper
  }, "wrapper"), /*#__PURE__*/(0, _jsxRuntime.jsx)("aside", {
    className: CL.DRAWER,
    style: (0, _extends2["default"])({}, _drawerStyle, TS.COMP),
    children: children
  }, "aside")];
};

var _default = Drawer;
exports["default"] = _default;
//# sourceMappingURL=Drawer.js.map