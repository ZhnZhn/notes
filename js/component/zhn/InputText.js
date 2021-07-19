"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _CL = _interopRequireDefault(require("../style/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var K = {
  ENTER: 'Enter',
  ENTER_CODE: 13,
  DELETE: 'Delete',
  DELETE_CODE: 46
};

var _isKeyEnter = function _isKeyEnter(evt) {
  return evt.key === K.ENTER || evt.keyCode === K.ENTER_CODE;
};

var _isKeyDelete = function _isKeyDelete(evt) {
  return evt.key === K.DELETE || evt.keyCode === K.DELETE_CODE;
};

var _getState = function _getState(props) {
  return {
    value: props.value
  };
};

var InputText = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputText, _Component);

  function InputText() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = _getState(_this.props);

    _this._hChange = function (evt) {
      var value = evt.target.value;

      if (value.length <= _this.props.maxLength) {
        _this.setState({
          value: value
        });
      }
    };

    _this._hKeyDown = function (evt) {
      if (_isKeyEnter(evt)) {
        var el = document.activeElement;

        if (el && typeof el.blur === 'function') {
          el.blur();
        }
      } else if (_isKeyDelete(evt)) {
        _this.setState({
          value: ''
        });
      }
    };

    return _this;
  }

  var _proto = InputText.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        onBlur = _this$props.onBlur,
        _className = className ? _CL["default"].INPUT + " " + className : _CL["default"].INPUT,
        value = this.state.value;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      className: _className,
      style: style,
      value: value,
      onChange: this._hChange,
      onBlur: onBlur,
      onKeyDown: this._hKeyDown
    });
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  return InputText;
}(_react.Component);

InputText.defaultProps = {
  className: '',
  maxLength: 40
};
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map