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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('../style/Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _actions = require('../../flux/app/actions');

var _selectors = require('../../flux/selectors');

var _ModalDialog = require('../zhn-ch/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'md-settings';

var DF_THEME = { caption: "Dark", value: "DARK" };
var _themeOptions = [{ caption: "Dark", value: "DARK" }, { caption: "Light", value: "WHITE" }, { caption: "Sand", value: "SAND" }];

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
  return (0, _extends3.default)({}, item);
};

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  function SettingsDialog(props) {
    (0, _classCallCheck3.default)(this, SettingsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this));

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

  (0, _createClass3.default)(SettingsDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
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
          theme = _props.theme,
          onClose = _props.onClose,
          initItem = this.state.initItem,
          TS = theme.createStyle(_Dialog2.default);


      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          className: CL,
          style: TS.DIALOG,
          caption: 'User Settings',
          isShow: isShow,
          onClose: onClose
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_InputSelect2.default, {
            styleConfig: TS.SELECT,
            caption: 'UI Theme (Default: Dark)',
            initItem: initItem,
            options: _themeOptions,
            onSelect: this._selectTheme
          })
        )
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map