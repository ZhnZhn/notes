"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _actions = require("../../flux/app/actions");

var _selectors = require("../../flux/selectors");

var _ModalDialog = _interopRequireDefault(require("../zhn-ch/ModalDialog"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var CL = 'md-settings';
var DF_THEME = {
  caption: "Dark",
  value: "DARK"
};
var _themeOptions = [{
  caption: "Dark",
  value: "DARK"
}, {
  caption: "Light",
  value: "WHITE"
}, {
  caption: "Sand",
  value: "SAND"
}];

var _crInitItem = function _crInitItem(uiTheme) {
  if (!uiTheme) {
    return DF_THEME;
  }

  var item = _themeOptions.find(function (item) {
    return item.value === uiTheme;
  });

  if (!item) {
    return DF_THEME;
  }

  return (0, _extends2["default"])({}, item);
};

var SettingsDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(SettingsDialog, _Component);

  function SettingsDialog(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._selectTheme = function (item) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          dispatch = _this$props.dispatch;

      if (item.value !== theme.getThemeName()) {
        dispatch((0, _actions.setUiTheme)(item.value));

        _this.forceUpdate();
      }
    };

    var uiTheme = _selectors.sApp.uiTheme(props.store.getState());

    _this.state = {
      initItem: _crInitItem(uiTheme)
    };
    return _this;
  }

  var _proto = SettingsDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onClose = _this$props2.onClose,
        initItem = this.state.initItem,
        TS = theme.createStyle(_Dialog["default"]);
    return _react["default"].createElement(_ModalDialog["default"], {
      className: CL,
      style: TS.DIALOG,
      caption: "User Settings",
      isShow: isShow,
      onClose: onClose
    }, _react["default"].createElement("div", null, _react["default"].createElement(_InputSelect["default"], {
      styleConfig: TS.SELECT,
      caption: "UI Theme (Default: Dark)",
      initItem: initItem,
      options: _themeOptions,
      onSelect: this._selectTheme
    })));
  };

  return SettingsDialog;
}(_react.Component);

var _default = (0, _withTheme["default"])(SettingsDialog);

exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map