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

//import PropTypes from 'prop-types'

var CL = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};

var S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_BACKGROUND: {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
};

var WrapperModalDialog = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(WrapperModalDialog, _Component);

  function WrapperModalDialog(props) {
    (0, _classCallCheck3.default)(this, WrapperModalDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WrapperModalDialog.__proto__ || Object.getPrototypeOf(WrapperModalDialog)).call(this));

    _this._hideModal = function () {
      _this.wasClosing = true;
      _this.setState({});
    };

    _this.wasClosing = true;
    return _this;
  }
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    timeout: PropTypes.number,
    onClose: PropTypes.func
  }
  */


  (0, _createClass3.default)(WrapperModalDialog, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.isShow && !this.props.isShow) {
        setTimeout(this._hideModal, this.props.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          children = _props.children,
          onClose = _props.onClose;

      var _className = void 0,
          _style = void 0,
          _isHidden = void 0;
      if (!isShow && this.wasClosing) {
        _className = CL.INIT;
        _style = S.HIDE;
        _isHidden = true;
        this.wasClosing = false;
      } else {
        _className = isShow ? CL.SHOWING : CL.HIDING;
        _style = isShow ? S.SHOW : S.HIDE_BACKGROUND;
        _isHidden = false;
      }
      return _react2.default.createElement(
        'div',
        {
          className: _className,
          style: _style,
          'aria-hidden': _isHidden,
          onClick: onClose
        },
        children
      );
    }
  }]);
  return WrapperModalDialog;
}(_react.Component), _class.defaultProps = {
  timeout: 450
}, _temp);
exports.default = WrapperModalDialog;
//# sourceMappingURL=WrapperModalDialog.js.map