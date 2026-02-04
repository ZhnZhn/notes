"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _appConf = _interopRequireDefault(require("./appConf"));
var _rootReducer = _interopRequireDefault(require("./rootReducer"));
var _initialState2 = _interopRequireDefault(require("./initialState"));
var _middlewares2 = _interopRequireDefault(require("./zh-middleware/middlewares"));
const _middlewares = [..._middlewares2.default];

/*eslint-disable no-undef*/
if (process.env.NODE_ENV === 'development') {
  const logger = store => next => action => {
    let result;
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
      /*eslint-enable no-undef*/
    }
  };
  _middlewares.push(logger);
}
const _getInitialState = () => {
  let _initialState;
  try {
    const _str = window.localStorage.getItem(_appConf.default.STORAGE_KEY);
    if (_str) {
      _initialState = JSON.parse(_str);
    }
  } catch (e) {
    console.log(e.msg);
  }
  return _initialState || _initialState2.default;
};
const store = (0, _toolkit.configureStore)({
  reducer: _rootReducer.default,
  preloadedState: _getInitialState(),
  /*eslint-disable no-undef*/
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(_middlewares) : _middlewares
  /*eslint-enable no-undef*/
});
var _default = exports.default = store;
//# sourceMappingURL=store.js.map