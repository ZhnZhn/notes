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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _PageBoard = require('./board/PageBoard');

var _PageBoard2 = _interopRequireDefault(_PageBoard);

var _PageBoards = require('./boards/PageBoards');

var _PageBoards2 = _interopRequireDefault(_PageBoards);

var _WrapperContainer = require('./zhn-cont/WrapperContainer');

var _WrapperContainer2 = _interopRequireDefault(_WrapperContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          basename = _props.basename,
          store = _props.store;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { basename: basename },
        _react2.default.createElement(
          _react.Fragment,
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
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=App.js.map