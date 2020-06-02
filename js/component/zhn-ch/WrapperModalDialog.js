"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

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

var WrapperModalDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WrapperModalDialog, _Component);

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    timeout: PropTypes.number,
    onClose: PropTypes.func
  }
  */
  function WrapperModalDialog(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._hideModal = function () {
      _this.wasClosing = true;

      _this.setState({});
    };

    _this.wasClosing = true;
    return _this;
  }

  var _proto = WrapperModalDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (!this.wasClosing && !nextProps.isShow && !this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.isShow && !this.props.isShow) {
      setTimeout(this._hideModal, this.props.timeout);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        children = _this$props.children,
        onClose = _this$props.onClose;

    var _className, _style, _isHidden;

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

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _className,
      style: _style,
      "aria-hidden": _isHidden,
      onClick: onClose
    }, children);
  };

  return WrapperModalDialog;
}(_react.Component);

WrapperModalDialog.defaultProps = {
  timeout: 450
};
var _default = WrapperModalDialog;
exports["default"] = _default;
//# sourceMappingURL=WrapperModalDialog.js.map