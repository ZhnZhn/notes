"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ThemeContext = _interopRequireDefault(require("./hoc/ThemeContext"));

var _theme = _interopRequireDefault(require("./style/theme"));

var _selectors = require("../flux/selectors");

var _PageBoard = _interopRequireDefault(require("./page-board/PageBoard"));

var _PageBoards = _interopRequireDefault(require("./page-boards/PageBoards"));

var _WrapperContainer = _interopRequireDefault(require("./zhn-cont/WrapperContainer"));

var App = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(App, _Component);

  function App(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._onStore = function () {
      var store = _this.props.store,
          theme = _this.state.theme,
          uiTheme = _selectors.sApp.uiTheme(store.getState());

      if (uiTheme !== theme.getThemeName()) {
        _this.setState(function (prevState) {
          prevState.theme.setThemeName(uiTheme);
          return {
            theme: (0, _extends2["default"])({}, prevState.theme)
          };
        });
      }
    };

    var _store = props.store,
        _uiTheme = _selectors.sApp.uiTheme(_store.getState());

    _theme["default"].setThemeName(_uiTheme);

    _this.state = {
      theme: _theme["default"]
    };
    return _this;
  }

  var _proto = App.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this._unsubscribe = store.subscribe(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._unsubscribe();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        basename = _this$props.basename,
        store = _this$props.store,
        theme = this.state.theme;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, {
      basename: basename
    }, /*#__PURE__*/_react["default"].createElement(_ThemeContext["default"].Provider, {
      value: theme
    }, /*#__PURE__*/_react["default"].createElement(_WrapperContainer["default"], {
      store: store
    }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/boards/:id",
      component: _PageBoard["default"]
    }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/boards",
      component: _PageBoards["default"]
    }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
      from: "/",
      to: "/boards"
    })))));
  };

  return App;
}(_react.Component);

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=App.js.map