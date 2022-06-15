"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./flux/store"));

var _App = _interopRequireDefault(require("./component/App"));

var _jsxRuntime = require("react/jsx-runtime");

var basename = ((window || {}).location || {}).pathname;
(0, _reactDom.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
  store: _store["default"],
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {
    basename: basename,
    store: _store["default"]
  })
}), document.getElementById('app'));
//# sourceMappingURL=index.js.map