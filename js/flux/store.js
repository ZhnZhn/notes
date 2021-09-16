"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _appConf = _interopRequireDefault(require("./appConf"));

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var _initialState2 = _interopRequireDefault(require("./initialState"));

var _middlewares2 = _interopRequireDefault(require("./zh-middleware/middlewares"));

var _middlewares = [].concat(_middlewares2["default"]);
/*eslint-disable no-undef, no-console*/


if (process.env.NODE_ENV === 'development') {
  /*eslint-enable no-undef, no-console*/
  var logger = function logger(store) {
    return function (next) {
      return function (action) {
        var result;

        try {
          console.group('dispatching', action);
          console.log('before', store.getState());
          result = next(action);
          console.log('after', store.getState());
          console.groupEnd();
          return result;
        } catch (err) {
          console.log(err);
          return result;
        }
      };
    };
  };

  _middlewares.push(logger);
}

var _getInitialState = function _getInitialState() {
  var _initialState;

  try {
    var _str = window.localStorage.getItem(_appConf["default"].STORAGE_KEY);

    if (_str) {
      _initialState = JSON.parse(_str);
    }
  } catch (e) {
    console.log(e.msg);
  }

  return _initialState || _initialState2["default"];
};

var store = (0, _toolkit.configureStore)({
  reducer: _rootReducer["default"],
  preloadedState: _getInitialState(),

  /*eslint-disable no-undef, no-console*/
  devTools: process.env.NODE_ENV === 'development',
  middleware: function middleware(getDefaultMiddleware) {
    return process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(_middlewares) : _middlewares;
  }
  /*eslint-enable no-undef, no-console*/

});
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=store.js.map