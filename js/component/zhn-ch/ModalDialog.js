'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;
//import { PropTypes } from 'react'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogCaption = require('./DialogCaption');

var _DialogCaption2 = _interopRequireDefault(_DialogCaption);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  DIALOG: 'modal-dialog',
  ACTIONS: 'md__actions',
  SHOWING: 'show-popup',
  HIDING: 'hide-popup'
};

var S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_POPUP: {
    opacity: 0,
    transform: 'scaleY(0)'
  }
};

var ModalDialog = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ModalDialog, _Component);

  function ModalDialog(props) {
    (0, _classCallCheck3.default)(this, ModalDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this));

    _this._hClickDialog = function (event) {
      event.stopPropagation();
    };

    _this._refBtClose = function (n) {
      return _this._btClose = n;
    };

    _this._renderCommandButton = function () {
      var _this$props = _this.props,
          commandButtons = _this$props.commandButtons,
          withoutClose = _this$props.withoutClose,
          onClose = _this$props.onClose;

      return _react2.default.createElement(
        'div',
        { className: CL.ACTIONS },
        commandButtons,
        !withoutClose && _react2.default.createElement(_FlatButton2.default, {
          ref: _this._refBtClose,
          caption: 'Close',
          timeout: 0,
          onClick: onClose
        })
      );
    };

    _this.wasClosing = false;
    return _this;
  }
  /*
   static propTypes = {
     style: PropTypes.object,
     caption: PropTypes.string,
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     isNotUpdate: PropTypes.bool,
     withoutClose: PropTypes.bool,
     isFocusClose: PropTypes.bool,
     commandButtons: PropTypes.arrayOf(PropTypes.element),
     timeout: PropTypes.number,
     onClose: PropTypes.func
   }
   */


  (0, _createClass3.default)(ModalDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props) {
        if (nextProps.isNotUpdate) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'focusBtClose',
    value: function focusBtClose() {
      if (this.props.isFocusClose && this._btClose) {
        this._btClose.focus();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focusBtClose();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          timeout = _props.timeout,
          isShow = _props.isShow;

      if (this.wasClosing) {
        setTimeout(function () {
          _this2.setState({});
        }, timeout);
      }
      if (prevProps.isShow === false && isShow) {
        this.focusBtClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style,
          isShow = _props2.isShow,
          isWithButton = _props2.isWithButton,
          caption = _props2.caption,
          captionStyle = _props2.captionStyle,
          children = _props2.children,
          onClose = _props2.onClose;


      var _className = void 0,
          _style = void 0;

      if (this.wasClosing) {
        _style = S.HIDE;
        this.wasClosing = false;
      } else {
        _className = isShow ? CL.DIALOG + ' ' + className + ' ' + CL.SHOWING : CL.DIALOG + ' ' + className + ' ' + CL.HIDING;
        _style = isShow ? S.SHOW : S.HIDE_POPUP;
        if (!isShow) {
          this.wasClosing = true;
        }
      }

      return _react2.default.createElement(
        'div',
        {
          role: 'dialog',
          className: _className,
          style: (0, _extends3.default)({}, style, _style),
          onClick: this._hClickDialog
        },
        _react2.default.createElement(_DialogCaption2.default, {
          rootStyle: captionStyle,
          caption: caption,
          onClose: onClose
        }),
        _react2.default.createElement(
          'div',
          null,
          children
        ),
        isWithButton && this._renderCommandButton()
      );
    }
  }]);
  return ModalDialog;
}(_react.Component), _class.defaultProps = {
  className: '',
  isWithButton: true,
  isNotUpdate: false,
  isFocusClose: true,
  timeout: 450
}, _temp);
exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map