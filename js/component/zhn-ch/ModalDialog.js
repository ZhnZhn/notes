"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DialogCaption = _interopRequireDefault(require("./DialogCaption"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

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

var ModalDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ModalDialog, _Component);

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
  function ModalDialog(props) {
    var _this;

    _this = _Component.call(this) || this;

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
      return _react["default"].createElement("div", {
        className: CL.ACTIONS
      }, commandButtons, !withoutClose && _react["default"].createElement(_FlatButton["default"], {
        ref: _this._refBtClose,
        caption: "Close",
        timeout: 0,
        onClick: onClose
      }));
    };

    _this.wasClosing = false;
    return _this;
  }

  var _proto = ModalDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      if (nextProps.isNotUpdate) {
        return false;
      }
    }

    return true;
  };

  _proto.focusBtClose = function focusBtClose() {
    if (this.props.isFocusClose && this._btClose) {
      this._btClose.focus();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.focusBtClose();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    var _this$props2 = this.props,
        timeout = _this$props2.timeout,
        isShow = _this$props2.isShow;

    if (this.wasClosing) {
      setTimeout(function () {
        _this2.setState({});
      }, timeout);
    }

    if (prevProps.isShow === false && isShow) {
      this.focusBtClose();
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        className = _this$props3.className,
        style = _this$props3.style,
        isShow = _this$props3.isShow,
        isWithButton = _this$props3.isWithButton,
        caption = _this$props3.caption,
        captionStyle = _this$props3.captionStyle,
        children = _this$props3.children,
        onClose = _this$props3.onClose;

    var _className, _style;

    if (this.wasClosing) {
      _style = S.HIDE;
      this.wasClosing = false;
    } else {
      _className = isShow ? CL.DIALOG + " " + className + " " + CL.SHOWING : CL.DIALOG + " " + className + " " + CL.HIDING;
      _style = isShow ? S.SHOW : S.HIDE_POPUP;

      if (!isShow) {
        this.wasClosing = true;
      }
    }

    return _react["default"].createElement("div", {
      role: "dialog",
      className: _className,
      style: (0, _extends2["default"])({}, style, {}, _style),
      onClick: this._hClickDialog
    }, _react["default"].createElement(_DialogCaption["default"], {
      rootStyle: captionStyle,
      caption: caption,
      onClose: onClose
    }), _react["default"].createElement("div", null, children), isWithButton && this._renderCommandButton());
  };

  return ModalDialog;
}(_react.Component);

ModalDialog.defaultProps = {
  className: '',
  isWithButton: true,
  isNotUpdate: false,
  isFocusClose: true,
  timeout: 450
};
var _default = ModalDialog;
exports["default"] = _default;
//# sourceMappingURL=ModalDialog.js.map