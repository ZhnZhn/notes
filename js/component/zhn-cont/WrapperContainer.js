"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _modalRouter = _interopRequireDefault(require("../dialogs/modalRouter"));

var _WrapperModalDialog = _interopRequireDefault(require("../zhn-ch/WrapperModalDialog"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var WrapperContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(WrapperContainer, _Component);

  function WrapperContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };

    _this._onStore = function () {
      var store = _this.props.store,
          _store$getState = store.getState(),
          _store$getState$modal = _store$getState.modal,
          modal = _store$getState$modal === void 0 ? {} : _store$getState$modal,
          type = modal.id,
          _modal$data = modal.data,
          dialogProps = _modal$data === void 0 ? {} : _modal$data;

      if (type && _this.modal !== modal) {
        _this.modal = modal;

        _this.setState(function (prevState) {
          var inits = prevState.inits,
              shows = prevState.shows,
              data = prevState.data,
              dialogs = prevState.dialogs;

          if (!inits[type]) {
            dialogs.push({
              type: type,
              comp: _modalRouter["default"].getDialog(type)
            });
            inits[type] = true;
            shows[type] = true;
            data[type] = dialogProps;
            return {
              isShow: true,
              currentDialog: type,
              shows: shows,
              data: data,
              dialogs: dialogs
            };
          } else {
            shows[type] = true;
            data[type] = dialogProps;
            return {
              isShow: true,
              currentDialog: type,
              shows: shows,
              data: data
            };
          }
        });
      }
    };

    _this._hClose = function (type) {
      _this.setState(function (prevState) {
        prevState.shows[type] = false;
        return {
          isShow: false,
          currentDialog: null,
          shows: prevState.shows
        };
      });
    };

    _this._renderDialogs = function () {
      var _this$props = _this.props,
          store = _this$props.store,
          theme = _this$props.theme;
      var _this$state = _this.state,
          shows = _this$state.shows,
          data = _this$state.data,
          dialogs = _this$state.dialogs;
      return dialogs.map(function (dialog) {
        var type = dialog.type,
            comp = dialog.comp;
        return /*#__PURE__*/(0, _react.createElement)(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          onClose: _this._hClose.bind(null, type),
          store: store,
          dispatch: store.dispatch,
          TS: theme.createStyle(_Dialog["default"])
        });
      });
    };

    return _this;
  }

  var _proto = WrapperContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.state.currentDialog === nextState.currentDialog) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$state2 = this.state,
        isShow = _this$state2.isShow,
        currentDialog = _this$state2.currentDialog;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperModalDialog["default"], {
      isShow: isShow,
      onClose: this._hClose.bind(null, currentDialog),
      children: this._renderDialogs()
    });
  };

  return WrapperContainer;
}(_react.Component);

var _default = (0, _withTheme["default"])(WrapperContainer);

exports["default"] = _default;
//# sourceMappingURL=WrapperContainer.js.map