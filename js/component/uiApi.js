"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.setRefValue = exports.memo = exports.getRefValue = exports.forwardRef = exports.focusRefElement = exports.createElement = exports.createContext = exports.cloneElement = exports.StrictMode = exports.NavLink = exports.Component = void 0;

var _reactRouterDom = require("react-router-dom");

exports.NavLink = _reactRouterDom.NavLink;

var _react = require("react");

exports.StrictMode = _react.StrictMode;
exports.Component = _react.Component;
exports.createElement = _react.createElement;
exports.cloneElement = _react.cloneElement;
exports.createContext = _react.createContext;
exports.memo = _react.memo;
exports.forwardRef = _react.forwardRef;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useEffect = _react.useEffect;
exports.useContext = _react.useContext;
exports.useImperativeHandle = _react.useImperativeHandle;

var getRefValue = function getRefValue(ref) {
  return (ref || {}).current;
};

exports.getRefValue = getRefValue;

var setRefValue = function setRefValue(ref, value) {
  if (ref) {
    ref.current = value;
  }
};

exports.setRefValue = setRefValue;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var focusRefElement = function focusRefElement(ref1) {
  var _el = getRefValue(ref1);

  if (_el && _isFn(_el.focus)) {
    _el.focus();
  }
};

exports.focusRefElement = focusRefElement;
//# sourceMappingURL=uiApi.js.map