'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var InputText = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(InputText, _Component);

  function InputText() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InputText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputText.__proto__ || Object.getPrototypeOf(InputText)).call.apply(_ref, [this].concat(args))), _this), _this.state = _getState(_this.props), _this._hChange = function (evt) {
      var value = evt.target.value;
      if (value.length <= _this.props.maxLength) {
        _this.setState({ value: value });
      }
    }, _this._hKeyDown = function (evt) {
      if (_isKeyEnter(evt)) {
        var el = document.activeElement;
        if (el && typeof el.blur === 'function') {
          el.blur();
        }
      } else if (_isKeyDelete(evt)) {
        _this.setState({ value: '' });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    className: React.PropsType.string,
    style: React.PropsType.obj,
    value: React.PropsType.string,
    onBlur: React.PropsType.func
  }
  */

  (0, _createClass3.default)(InputText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          onBlur = _props.onBlur,
          _className = className ? _CL2.default.INPUT + ' ' + className : _CL2.default.INPUT,
          value = this.state.value;

      return _react2.default.createElement('input', {
        type: 'text',
        className: _className,
        style: style,
        value: value,
        onChange: this._hChange,
        onBlur: onBlur,
        onKeyDown: this._hKeyDown
      });
    }
  }]);
  return InputText;
}(_react.Component), _class.defaultProps = {
  maxLength: 40
}, _temp2);
exports.default = InputText;
//# sourceMappingURL=InputText.js.map