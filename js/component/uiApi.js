"use strict";

exports.__esModule = true;
exports.useState = exports.useSelector = exports.useRef = exports.useReducer = exports.useMemo = exports.useImperativeHandle = exports.useId = exports.useEffect = exports.useDispatch = exports.useContext = exports.useCallback = exports.stopDefaultFor = exports.setRefValue = exports.safeMap = exports.memo = exports.getRefValue = exports.focusRefElement = exports.focusElementById = exports.createContext = exports.cloneUiElement = exports.StrictMode = exports.NavLink = exports.KEY_TAB = exports.KEY_SPACE = exports.KEY_HOME = exports.KEY_ESCAPE = exports.KEY_ENTER = exports.KEY_END = exports.KEY_DELETE = exports.KEY_ARROW_UP = exports.KEY_ARROW_DOWN = exports.Component = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _jsxRuntime = require("react/jsx-runtime");
var _Router = require("./zhn-router/Router");
exports.NavLink = _Router.NavLink;
var _reactRedux = require("react-redux");
exports.useDispatch = _reactRedux.useDispatch;
exports.useSelector = _reactRedux.useSelector;
var _react = require("react");
exports.StrictMode = _react.StrictMode;
exports.Component = _react.Component;
exports.createContext = _react.createContext;
exports.memo = _react.memo;
exports.useId = _react.useId;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useEffect = _react.useEffect;
exports.useContext = _react.useContext;
exports.useImperativeHandle = _react.useImperativeHandle;
const KEY_ARROW_DOWN = exports.KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_UP = exports.KEY_ARROW_UP = "ArrowUp";
const KEY_ENTER = exports.KEY_ENTER = "Enter";
const KEY_SPACE = exports.KEY_SPACE = " ";
const KEY_HOME = exports.KEY_HOME = "Home";
const KEY_END = exports.KEY_END = "End";
const KEY_ESCAPE = exports.KEY_ESCAPE = "Escape";
const KEY_TAB = exports.KEY_TAB = "Tab";
const KEY_DELETE = exports.KEY_DELETE = "Delete";
const cloneUiElement = function (Element, overrideProps, key) {
  if (key === void 0) {
    key = Element.key;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Element.type, {
    ...Element.props,
    ...overrideProps
  }, key);
};
exports.cloneUiElement = cloneUiElement;
const getRefValue = ref => ref?.current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const _focusHtmlElement = element => {
  if (element && (0, _isTypeFn.isFn)(element.focus)) {
    element.focus();
  }
};
const focusElementById = id => {
  _focusHtmlElement(document.getElementById(id));
};
exports.focusElementById = focusElementById;
const focusRefElement = ref1 => {
  _focusHtmlElement(getRefValue(ref1));
};
exports.focusRefElement = focusRefElement;
const stopDefaultFor = evt => {
  evt.stopPropagation();
  evt.preventDefault();
};
exports.stopDefaultFor = stopDefaultFor;
const safeMap = (itemsOr, crElement) => (0, _isTypeFn.isArr)(itemsOr) && itemsOr.length > 0 ? itemsOr.map(crElement) : null;
exports.safeMap = safeMap;
//# sourceMappingURL=uiApi.js.map