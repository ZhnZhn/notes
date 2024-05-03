"use strict";

exports.__esModule = true;
exports.useState = exports.useSelector = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useDispatch = exports.useContext = exports.useCallback = exports.setRefValue = exports.memo = exports.getRefValue = exports.focusRefElement = exports.createElement = exports.createContext = exports.connect = exports.cloneElement = exports.StrictMode = exports.NavLink = exports.Component = void 0;
var _reactRouterDom = require("react-router-dom");
exports.NavLink = _reactRouterDom.NavLink;
var _reactRedux = require("react-redux");
exports.connect = _reactRedux.connect;
exports.useDispatch = _reactRedux.useDispatch;
exports.useSelector = _reactRedux.useSelector;
var _react = require("react");
exports.StrictMode = _react.StrictMode;
exports.Component = _react.Component;
exports.createElement = _react.createElement;
exports.cloneElement = _react.cloneElement;
exports.createContext = _react.createContext;
exports.memo = _react.memo;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useEffect = _react.useEffect;
exports.useContext = _react.useContext;
exports.useImperativeHandle = _react.useImperativeHandle;
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const _isFn = fn => typeof fn === 'function';
const focusRefElement = ref1 => {
  const _el = getRefValue(ref1);
  if (_el && _isFn(_el.focus)) {
    _el.focus();
  }
};
exports.focusRefElement = focusRefElement;
//# sourceMappingURL=uiApi.js.map