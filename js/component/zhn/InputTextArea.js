"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var K = {
  DELETE: 'Delete',
  DELETE_CODE: 46
};

var _isKeyDelete = function _isKeyDelete(evt) {
  return evt.key === K.DELETE || evt.keyCode === K.DELETE_CODE;
};

var InputTextArea = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputTextArea, _Component);

  /*
  static propTypes = {
    className: PropsType.string
    style: PropsType.object,
    initValue: PropsType.string
  }
  */
  function InputTextArea(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hChange = function (evt) {
      _this.setState({
        value: evt.target.value
      });
    };

    _this._hKeyDown = function (evt) {
      if (_isKeyDelete(evt)) {
        _this.setState({
          value: ''
        });
      }
    };

    _this._refInputNode = function (node) {
      return _this._inputNode = node;
    };

    _this.state = {
      value: props.initValue
    };
    return _this;
  }

  var _proto = InputTextArea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        maxLength = _this$props.maxLength;
    var value = this.state.value;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
      ref: this._refInputNode,
      className: className,
      style: style,
      value: value,
      maxLength: maxLength,
      onChange: this._hChange,
      onKeyDown: this._hKeyDown
    });
  };

  _proto.getValue = function getValue() {
    return this.state.value;
  };

  _proto.focus = function focus() {
    if (this._inputNode && this._inputNode.focus) {
      this._inputNode.focus();
    }
  };

  return InputTextArea;
}(_react.Component);

InputTextArea.defaultProps = {
  initValue: ''
};
var _default = InputTextArea;
exports["default"] = _default;
//# sourceMappingURL=InputTextArea.js.map