"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

//import PropTypes from 'prop-types'
var CellColor = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(CellColor, _Component);

  function CellColor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refCellNode = function (node) {
      return _this.cellNode = node;
    };

    return _this;
  }

  var _proto = CellColor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var onReg = this.props.onReg;

    if (typeof onReg === 'function') {
      onReg(this.cellNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        tabIndex = _this$props.tabIndex,
        style = _this$props.style,
        color = _this$props.color,
        onClick = _this$props.onClick,
        children = _this$props.children,
        _styleColor = color ? {
      backgroundColor: color
    } : undefined,
        _onClick = onClick ? onClick.bind(null, color) : undefined;

    return /*#__PURE__*/_react["default"].createElement("button", {
      ref: this._refCellNode,
      tabIndex: tabIndex,
      style: (0, _extends2["default"])({}, style, _styleColor),
      onClick: _onClick
    }, children);
  };

  return CellColor;
}(_react.Component);

CellColor.defaultProps = {
  tabIndex: '-1'
};
var _default = CellColor;
exports["default"] = _default;
//# sourceMappingURL=CellColor.js.map