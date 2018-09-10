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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Comp = require('../style/Comp.Style');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer-left',
  DRAWER_MODAL: 'drawer-modal'
};

var S = {
  BT_DRAWER: {
    width: 'auto',
    height: 'auto'
  },
  DRAWER_OFF: {
    transform: 'translateX(-264px)',
    //transform: 'translateX(264px)',
    pointerEvents: 'none'
  },
  DRAWER_ON: {
    transform: 'translate(0px, 0px)'
  },
  MODAL_OFF: {
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  MODAL_ON: {
    opacity: 1,
    zIndex: 1000,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
};

var DrawerLeft = function (_Component) {
  (0, _inherits3.default)(DrawerLeft, _Component);

  function DrawerLeft() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DrawerLeft);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DrawerLeft.__proto__ || Object.getPrototypeOf(DrawerLeft)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isOpen: false }, _this._hToggle = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DrawerLeft, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btStyle = _props.btStyle,
          theme = _props.theme,
          captionComp = _props.captionComp,
          children = _props.children,
          isOpen = this.state.isOpen,
          _drawerStyle = isOpen ? S.DRAWER_ON : S.DRAWER_OFF,
          _drawerModalStyle = isOpen ? S.MODAL_ON : S.MODAL_OFF,
          _onClickWrapper = isOpen ? this._hToggle : undefined,
          TS = theme.createStyle(_Comp2.default);

      return [_react2.default.createElement(
        'button',
        {
          className: CL.DRAWER_BT,
          style: (0, _extends3.default)({}, S.BT_DRAWER, btStyle),
          'aria-label': 'Open Drawer',
          onClick: this._hToggle
        },
        captionComp
      ), _react2.default.createElement('div', {
        'aria-hidden': !isOpen,
        className: CL.DRAWER_MODAL,
        style: _drawerModalStyle,
        onClick: _onClickWrapper
      }), _react2.default.createElement(
        'aside',
        {
          className: CL.DRAWER,
          style: (0, _extends3.default)({}, _drawerStyle, TS.COMP)
        },
        children
      )];
    }
  }]);
  return DrawerLeft;
}(_react.Component);

exports.default = (0, _withTheme2.default)(DrawerLeft);
//# sourceMappingURL=DrawerLeft.js.map