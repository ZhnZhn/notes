"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useImperativeHandle = exports.useEffect = exports.useContext = exports.useCallback = exports.setRefValue = exports.memo = exports.getRefValue = exports.forwardRef = exports.createElement = exports.createContext = exports.cloneElement = exports.StrictMode = exports.Component = void 0;

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
//# sourceMappingURL=uiApi.js.map