"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var ModalPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(ModalPane, _Component);

  function ModalPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._isEventTargetOutside = function (event) {
      return _this.rootNode && _this.rootNode.contains && !_this.rootNode.contains(event.target);
    };

    _this._hClickOutside = function (event) {
      var onClose = _this.props.onClose;

      if (_this._isEventTargetOutside(event)) {
        event.stopPropagation();
        onClose(event);
      }
    };

    _this._addOutsideListener = function () {
      document.addEventListener('click', _this._hClickOutside, true);
    };

    _this._removeOutsideListener = function () {
      document.removeEventListener('click', _this._hClickOutside, true);
    };

    _this._initShowMode = function () {
      _this._addOutsideListener();

      if (_this.rootNode) {
        _this.rootNode.focus();
      }
    };

    _this._hKeyDown = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();

        _this.props.onClose(evt);
      }
    };

    _this._refRootNode = function (n) {
      return _this.rootNode = n;
    };

    return _this;
  }

  var _proto = ModalPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.isShow) {
      this._initShowMode();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._removeOutsideListener();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.isShow) {
        this._initShowMode();
      } else {
        this._removeOutsideListener();
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children;
    return _react["default"].createElement("div", {
      ref: this._refRootNode,
      className: className,
      style: style,
      tabIndex: "0" //role="dialog"
      //aria-modal={true}
      ,
      onKeyDown: this._hKeyDown
    }, children);
  };

  return ModalPane;
}(_react.Component);

ModalPane.defaultProps = {
  onClose: function onClose() {}
};
var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map