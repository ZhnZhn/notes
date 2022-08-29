"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_DRAWER_BT = 'drawer-bt',
    CL_DRAWER_SPAN = 'drawer-span',
    CL_DRAWER_SVG = 'drawer-svg',
    CL_DRAWER = 'drawer',
    CL_DRAWER_MODAL = 'drawer-modal',
    S_BT_DRAWER = {
  position: 'absolute',
  top: 4,
  right: 16
},
    S_DRAWER_OFF = {
  //transform: 'translateX(-264px)',
  transform: 'translateX(264px)',
  pointerEvents: 'none'
},
    S_DRAWER_ON = {
  transform: 'translate(0px, 0px)'
},
    S_MODAL_OFF = {
  opacity: 0,
  zIndex: -1,
  transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
},
    S_MODAL_ON = {
  opacity: 1,
  zIndex: 1000,
  transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
};

var Drawer = function Drawer(_ref) {
  var btStyle = _ref.btStyle,
      children = _ref.children;

  var _useToggle = (0, _useToggle2["default"])(false),
      isOpen = _useToggle[0],
      toggleIsOpen = _useToggle[1],
      TS = (0, _useTheme["default"])(_Comp["default"]),
      _drawerStyle = isOpen ? S_DRAWER_ON : S_DRAWER_OFF,
      _drawerModalStyle = isOpen ? S_MODAL_ON : S_MODAL_OFF,
      _onClickWrapper = isOpen ? toggleIsOpen : void 0;

  return [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL_DRAWER_BT,
    style: (0, _extends2["default"])({}, S_BT_DRAWER, btStyle),
    "aria-label": "Open Drawer",
    onClick: toggleIsOpen,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_DRAWER_SPAN,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        className: CL_DRAWER_SVG,
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
    role: "presentation",
    "aria-hidden": !isOpen,
    className: CL_DRAWER_MODAL,
    style: _drawerModalStyle,
    onClick: _onClickWrapper
  }, "wrapper"), /*#__PURE__*/(0, _jsxRuntime.jsx)("aside", {
    className: CL_DRAWER,
    style: (0, _extends2["default"])({}, _drawerStyle, TS.COMP),
    children: children
  }, "aside")];
};

var _default = Drawer;
exports["default"] = _default;
//# sourceMappingURL=Drawer.js.map