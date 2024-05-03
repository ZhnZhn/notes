"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CellColor = _interopRequireDefault(require("../zhn-ch/CellColor"));
var _jsxRuntime = require("react/jsx-runtime");
const C_DF = '#2f7ed8';
const COLORS1 = ['#8abb5d', '#f7a35c', '#795548', '#f45b5b', '#d2b772', '#dda0dd'];
const COLORS2 = ['#f1d600', '#008b8b', '#2f7ed8', '#000000', '#607d8b', '#7092be'];
const S_PANE_COLOR = {
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
  S_CELL_COLOR = {
    ...S_CELL,
    ...S_TO_CELL
  };
const ColorStack = _ref => {
  let {
    colors,
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: colors.map(c => /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor.default, {
      color: c,
      style: S_CELL,
      onClick: onClick
    }, c))
  });
};
const PaneColors = _ref2 => {
  let {
    refEl,
    initColor = C_DF
  } = _ref2;
  const [color, setColor] = (0, _uiApi.useState)(initColor),
    _hClick = (0, _uiApi.useCallback)(color => {
      if (color) {
        setColor(color);
      }
    }, []),
    _hInit = (0, _uiApi.useCallback)(() => setColor(initColor), [initColor]);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getColor: () => color
  }), [color]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_PANE_COLOR,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor.default, {
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
};
var _default = exports.default = PaneColors;
//# sourceMappingURL=PaneColors.js.map