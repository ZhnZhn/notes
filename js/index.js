'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _store = require('./flux/store');

var _store2 = _interopRequireDefault(_store);

var _App = require('./component/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = "/notes";
/*eslint-disable no-undef*/
if (process.env.NODE_ENV === 'development') {
  basename = undefined;
}
/*eslint-enable no-undef*/

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_App2.default, { basename: basename })
), document.getElementById('app'));
//# sourceMappingURL=index.js.map