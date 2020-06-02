"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./flux/store"));

var _App = _interopRequireDefault(require("./component/App"));

var basename = "/notes";
/*eslint-disable no-undef*/

if (process.env.NODE_ENV === 'development') {
  basename = undefined;
}
/*eslint-enable no-undef*/


(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: _store["default"]
}, /*#__PURE__*/_react["default"].createElement(_App["default"], {
  basename: basename,
  store: _store["default"]
})), document.getElementById('app'));
//# sourceMappingURL=index.js.map