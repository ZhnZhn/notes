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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var K = {
  DELETE: 'Delete',
  DELETE_CODE: 46
};

var _isKeyDelete = function _isKeyDelete(evt) {
  return evt.key === K.DELETE || evt.keyCode === K.DELETE_CODE;
};

var InputTextArea = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputTextArea, _Component);

  function InputTextArea(props) {
    (0, _classCallCheck3.default)(this, InputTextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputTextArea.__proto__ || Object.getPrototypeOf(InputTextArea)).call(this, props));

    _this._hChange = function (evt) {
      _this.setState({
        value: evt.target.value
      });
    };

    _this._hKeyDown = function (evt) {
      if (_isKeyDelete(evt)) {
        _this.setState({ value: '' });
      }
    };

    _this.state = {
      value: props.initValue
    };
    return _this;
  }
  /*
  static propTypes = {
    className: PropsType.string
    style: PropsType.object,
    initValue: PropsType.string
  }
  */

  (0, _createClass3.default)(InputTextArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          maxLength = _props.maxLength;
      var value = this.state.value;

      return _react2.default.createElement('textarea', {
        className: className,
        style: style,
        value: value,
        maxLength: maxLength,
        onChange: this._hChange,
        onKeyDown: this._hKeyDown
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }]);
  return InputTextArea;
}(_react.Component), _class.defaultProps = {
  initValue: ''
}, _temp);
exports.default = InputTextArea;
//# sourceMappingURL=InputTextArea.js.map