"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _CellColor = _interopRequireDefault(require("../zhn-ch/CellColor"));

var C_DF = '#2f7ed8';
var COLORS1 = ['#8abb5d', '#f7a35c', '#795548', '#f45b5b', '#d2b772', '#dda0dd'];
var COLORS2 = ['#f1d600', '#008b8b', '#2f7ed8', '#000000', '#607d8b', '#7092be'];
var S = {
  ROOT: {
    paddingBottom: 4
  },
  ROW2: {
    paddingLeft: 56,
    paddingTop: 4
  },
  TO_CELL: {
    marginLeft: 12,
    marginRight: 12
  },
  CELL: {
    marginRight: 4,
    position: 'relative',
    display: 'inline-block',
    height: 32,
    width: 32,
    borderRadius: 2,
    verticalAlign: 'bottom',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

var _initColor = function _initColor(props) {
  return props.initColor || C_DF;
};

var PaneColors = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(PaneColors, _Component);

  function PaneColors(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._hInit = function () {
      _this.setState({
        color: _initColor(_this.props)
      });
    };

    _this._hClick = function (color) {
      if (color) {
        _this.setState({
          color: color
        });
      }
    };

    _this._renderColors = function (colors, isLong) {
      return colors.map(function (c) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor["default"], {
          color: c,
          style: S.CELL,
          onClick: _this._hClick
        }, c);
      });
    };

    _this.state = {
      color: _initColor(props)
    };
    return _this;
  }

  var _proto = PaneColors.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var onReg = this.props.onReg;

    if (typeof onReg === 'function') {
      onReg(this);
    }
  };

  _proto.render = function render() {
    var color = this.state.color;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor["default"], {
          color: color,
          style: (0, _extends2["default"])({}, S.CELL, S.TO_CELL),
          onClick: this._hInit
        }), this._renderColors(COLORS1)]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.ROW2,
        children: this._renderColors(COLORS2)
      })]
    });
  };

  _proto.getColor = function getColor() {
    return this.state.color;
  };

  return PaneColors;
}(_react.Component);

var _default = PaneColors;
exports["default"] = _default;
//# sourceMappingURL=PaneColors.js.map