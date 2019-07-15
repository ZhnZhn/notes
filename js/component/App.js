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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ThemeContext = require('./hoc/ThemeContext');

var _ThemeContext2 = _interopRequireDefault(_ThemeContext);

var _theme = require('./style/theme');

var _theme2 = _interopRequireDefault(_theme);

var _selectors = require('../flux/selectors');

var _PageBoard = require('./page-board/PageBoard');

var _PageBoard2 = _interopRequireDefault(_PageBoard);

var _PageBoards = require('./page-boards/PageBoards');

var _PageBoards2 = _interopRequireDefault(_PageBoards);

var _WrapperContainer = require('./zhn-cont/WrapperContainer');

var _WrapperContainer2 = _interopRequireDefault(_WrapperContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _initialiseProps.call(_this);

    var store = props.store,
        uiTheme = _selectors.sApp.uiTheme(store.getState());


    _theme2.default.setThemeName(uiTheme);

    _this.state = {
      theme: _theme2.default
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this._unsubscribe = store.subscribe(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          basename = _props.basename,
          store = _props.store,
          theme = this.state.theme;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { basename: basename },
        _react2.default.createElement(
          _ThemeContext2.default.Provider,
          { value: theme },
          _react2.default.createElement(
            _react2.default.StrictMode,
            null,
            _react2.default.createElement(_WrapperContainer2.default, { store: store }),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { path: '/boards/:id', component: _PageBoard2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/boards', component: _PageBoards2.default }),
              _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/boards' })
            )
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._onStore = function () {
    var store = _this2.props.store,
        theme = _this2.state.theme,
        uiTheme = _selectors.sApp.uiTheme(store.getState());

    if (uiTheme !== theme.getThemeName()) {
      _this2.setState(function (prevState) {
        prevState.theme.setThemeName(uiTheme);
        return {
          theme: (0, _extends3.default)({}, prevState.theme)
        };
      });
    }
  };
}, _temp);
exports.default = App;
//# sourceMappingURL=App.js.map