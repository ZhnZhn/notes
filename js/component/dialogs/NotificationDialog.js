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

var _ModalDialog = require('../zhn-ch/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ROW: 'd-notif__row',
  CAPTION: 'd-notif__caption',
  DESCR: 'd-notif__descr'
};

var NotificationDialog = function (_Component) {
  (0, _inherits3.default)(NotificationDialog, _Component);

  function NotificationDialog() {
    (0, _classCallCheck3.default)(this, NotificationDialog);
    return (0, _possibleConstructorReturn3.default)(this, (NotificationDialog.__proto__ || Object.getPrototypeOf(NotificationDialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotificationDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      console.log(nextProps);
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          _props$data = _props.data,
          data = _props$data === undefined ? {} : _props$data,
          onClose = _props.onClose,
          _data$caption = data.caption,
          caption = _data$caption === undefined ? '' : _data$caption,
          _data$descr = data.descr,
          descr = _data$descr === undefined ? '' : _data$descr;

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          caption: 'Notification',
          isShow: isShow,
          onClose: onClose
        },
        caption && _react2.default.createElement(
          'div',
          { className: CL.ROW },
          _react2.default.createElement(
            'p',
            { className: CL.CAPTION },
            caption
          )
        ),
        _react2.default.createElement(
          'div',
          { className: CL.ROW },
          _react2.default.createElement(
            'p',
            { className: CL.DESCR },
            descr
          )
        )
      );
    }
  }]);
  return NotificationDialog;
}(_react.Component);

exports.default = NotificationDialog;
//# sourceMappingURL=NotificationDialog.js.map