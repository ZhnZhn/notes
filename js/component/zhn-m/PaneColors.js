"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _CellColor = _interopRequireDefault(require("../zhn-ch/CellColor"));

var _jsxRuntime = require("react/jsx-runtime");

var C_DF = '#2f7ed8';
var COLORS1 = ['#8abb5d', '#f7a35c', '#795548', '#f45b5b', '#d2b772', '#dda0dd'];
var COLORS2 = ['#f1d600', '#008b8b', '#2f7ed8', '#000000', '#607d8b', '#7092be'];
var S_PANE_COLOR = {
  paddingBottom: 4
},
    S_ROW_2 = {
  padding: '4px 0 0 56px'
},
    S_TO_CELL = {
  margin: '0 12px'
},
    S_CELL = {
  position: 'relative',
  display: 'inline-block',
  height: 32,
  width: 32,
  marginRight: 4,
  borderRadius: 2,
  verticalAlign: 'bottom',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
},
    S_CELL_COLOR = (0, _extends2["default"])({}, S_CELL, S_TO_CELL);

var ColorStack = function ColorStack(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: colors.map(function (c) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor["default"], {
        color: c,
        style: S_CELL,
        onClick: onClick
      }, c);
    })
  });
};

var PaneColors = (0, _uiApi.forwardRef)(function (_ref2, ref) {
  var _ref2$initColor = _ref2.initColor,
      initColor = _ref2$initColor === void 0 ? C_DF : _ref2$initColor;

  var _useState = (0, _uiApi.useState)(initColor),
      color = _useState[0],
      setColor = _useState[1],
      _hClick = (0, _uiApi.useCallback)(function (color) {
    if (color) {
      setColor(color);
    }
  }, []),
      _hInit = (0, _uiApi.useCallback)(function () {
    return setColor(initColor);
  }, [initColor]);

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getColor: function getColor() {
        return color;
      }
    };
  }, [color]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_PANE_COLOR,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor["default"], {
        style: S_CELL_COLOR,
        color: color,
        onClick: _hInit
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorStack, {
        colors: COLORS1,
        onClick: _hClick
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ROW_2,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorStack, {
        colors: COLORS2,
        onClick: _hClick
      })
    })]
  });
});
var _default = PaneColors;
exports["default"] = _default;
//# sourceMappingURL=PaneColors.js.map