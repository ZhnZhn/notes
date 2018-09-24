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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogButtons = function (_Component) {
  (0, _inherits3.default)(DialogButtons, _Component);

  function DialogButtons() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DialogButtons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DialogButtons.__proto__ || Object.getPrototypeOf(DialogButtons)).call.apply(_ref, [this].concat(args))), _this), _this._refBtClose = function (node) {
      return _this._btClose = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DialogButtons, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          onSave = _props.onSave,
          onClose = _props.onClose;

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_FlatButton2.default, {
          caption: 'Save',
          timeout: 100,
          onClick: onSave
        }),
        _react2.default.createElement(_FlatButton2.default, {
          ref: this._refBtClose,
          caption: 'Close',
          timeout: 0,
          onClick: onClose
        })
      );
    }
  }, {
    key: 'focusBtClose',
    value: function focusBtClose() {
      if (this._btClose && this._btClose.focus) {
        this._btClose.focus();
      }
    }
  }]);
  return DialogButtons;
}(_react.Component);

exports.default = DialogButtons;
//# sourceMappingURL=DialogButtons.js.map