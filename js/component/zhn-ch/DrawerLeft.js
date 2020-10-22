"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Comp = _interopRequireDefault(require("../style/Comp.Style"));

var CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer-left',
  DRAWER_MODAL: 'drawer-modal'
};
var S = {
  BT_DRAWER: {
    width: 'auto',
    height: 'auto'
  },
  DRAWER_OFF: {
    transform: 'translateX(-264px)',
    //transform: 'translateX(264px)',
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

var DrawerLeft = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DrawerLeft, _Component);

  function DrawerLeft() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isOpen: false
    };

    _this._hToggle = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    return _this;
  }

  var _proto = DrawerLeft.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        btStyle = _this$props.btStyle,
        theme = _this$props.theme,
        captionComp = _this$props.captionComp,
        children = _this$props.children,
        isOpen = this.state.isOpen,
        _drawerStyle = isOpen ? S.DRAWER_ON : S.DRAWER_OFF,
        _drawerModalStyle = isOpen ? S.MODAL_ON : S.MODAL_OFF,
        _onClickWrapper = isOpen ? this._hToggle : undefined,
        TS = theme.createStyle(_Comp["default"]);

    return [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: CL.DRAWER_BT,
      style: (0, _extends2["default"])({}, S.BT_DRAWER, btStyle),
      "aria-label": "Open Drawer",
      onClick: this._hToggle,
      children: captionComp
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

  return DrawerLeft;
}(_react.Component);

var _default = (0, _withTheme["default"])(DrawerLeft);

exports["default"] = _default;
//# sourceMappingURL=DrawerLeft.js.map