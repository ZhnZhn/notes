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
    CL_DRAWER = 'drawer-left',
    CL_DRAWER_MODAL = 'drawer-modal',
    S_BT_DRAWER = {
  width: 'auto',
  height: 'auto'
},
    S_DRAWER_OFF = {
  transform: 'translateX(-264px)',
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

var DrawerLeft = function DrawerLeft(_ref) {
  var btStyle = _ref.btStyle,
      captionEl = _ref.captionEl,
      children = _ref.children;

  var _useToggle = (0, _useToggle2["default"])(false),
      isOpen = _useToggle[0],
      toggleIsOpen = _useToggle[1],
      TS = (0, _useTheme["default"])(_Comp["default"]),
      _ref2 = isOpen ? [S_DRAWER_ON, S_MODAL_ON, toggleIsOpen] : [S_DRAWER_OFF, S_MODAL_OFF],
      _drawerStyle = _ref2[0],
      _drawerModalStyle = _ref2[1],
      _onClickWrapper = _ref2[2];

  return [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL_DRAWER_BT,
    style: (0, _extends2["default"])({}, S_BT_DRAWER, btStyle),
    "aria-label": "Open Drawer",
    onClick: toggleIsOpen,
    children: captionEl
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

var _default = DrawerLeft;
exports["default"] = _default;
//# sourceMappingURL=DrawerLeft.js.map