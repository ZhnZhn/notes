"use strict";

exports.__esModule = true;
exports.BrowserRouter = void 0;
var _react = require("react");
var _isTypeFn = require("../../utils/isTypeFn");
var _matchRouters = require("./matchRouters");
var _Router = require("./Router");
var _RouterFn = require("./RouterFn");
var _jsxRuntime = require("react/jsx-runtime");
const PopStateEventType = "popstate";
const isLocation = obj => (0, _isTypeFn.isObj)(obj) && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
const getHistoryState = (location, index) => ({
  usr: location.state,
  key: location.key,
  idx: index,
  masked: location.mask ? {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash
  } : void 0
});
const createBrowserURLImpl = (windowImpl, to) => {
    const windowImplLocation = windowImpl?.location,
      base = !windowImplLocation ? "http://localhost" : windowImplLocation.origin !== "null" ? windowImplLocation.origin : windowImplLocation.href,
      href = ((0, _isTypeFn.isStr)(to) ? to : (0, _RouterFn.createPath)(to)).replace(/ $/, "%20");
    return new URL(href, base);
  },
  createKey = () => Math.random().toString(36).substring(2, 10),
  createLocation = function (current, to, state, key) {
    if (state === void 0) {
      state = null;
    }
    return {
      pathname: (0, _isTypeFn.isStr)(current) ? current : current.pathname,
      search: "",
      hash: "",
      ...((0, _isTypeFn.isStr)(to) ? (0, _matchRouters.parsePath)(to) : to),
      state,
      key: to?.key || key || createKey()
    };
  },
  getUrlBasedHistory = function (getLocation, windowImpl) {
    if (windowImpl === void 0) {
      windowImpl = document.defaultView;
    }
    const globalHistory = windowImpl.history;
    let action = "POP" /* Pop */,
      listener = null,
      index = getIndex();
    if (index == null) {
      index = 0;
      globalHistory.replaceState({
        ...globalHistory.state,
        idx: index
      }, "");
    }
    function getIndex() {
      const state = globalHistory.state || {
        idx: null
      };
      return state.idx;
    }
    function handlePop() {
      action = "POP" /* Pop */;
      const nextIndex = getIndex(),
        delta = nextIndex == null ? null : nextIndex - index;
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: history.location,
          delta
        });
      }
    }
    function push(to, state) {
      action = "PUSH" /* Push */;
      const location = isLocation(to) ? to : createLocation(history.location, to, state);
      index = getIndex() + 1;
      const historyState = getHistoryState(location, index),
        url = history.createHref(location.mask || location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        windowImpl.location.assign(url);
      }
      if (listener) {
        listener({
          action,
          location: history.location,
          delta: 1
        });
      }
    }
    function replace2(to, state) {
      action = "REPLACE" /* Replace */;
      const location = isLocation(to) ? to : createLocation(history.location, to, state);
      index = getIndex();
      const historyState = getHistoryState(location, index),
        url = history.createHref(location.mask || location);
      globalHistory.replaceState(historyState, "", url);
      if (listener) {
        listener({
          action,
          location: history.location,
          delta: 0
        });
      }
    }
    function createURL(to) {
      return createBrowserURLImpl(windowImpl, to);
    }
    const history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(windowImpl, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        windowImpl.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          windowImpl.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return (0, _isTypeFn.isStr)(to) ? to : (0, _RouterFn.createPath)(to);
      },
      createURL,
      encodeLocation(to) {
        const url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace: replace2,
      go(n) {
        return globalHistory.go(n);
      }
    };
    return history;
  },
  createBrowserLocation = (windowImpl, globalHistory) => {
    const {
        pathname,
        search,
        hash
      } = windowImpl.location,
      state = globalHistory.state;
    return createLocation("", {
      pathname,
      search,
      hash
    }, state?.usr || null, state?.key || "default");
  };
const BrowserRouter = props => {
  const _refHistory = (0, _react.useRef)();
  if (_refHistory.current == null) {
    _refHistory.current = getUrlBasedHistory(createBrowserLocation, props.window);
  }
  const historyImpl = _refHistory.current,
    [state, setStateImpl] = (0, _react.useState)({
      location: historyImpl.location,
      action: historyImpl.action
    });
  (0, _react.useLayoutEffect)(() => historyImpl.listen(setStateImpl), [historyImpl]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.Router, {
    basename: props.basename,
    location: state.location,
    navigationType: state.action,
    navigator: historyImpl,
    children: props.children
  });
};
exports.BrowserRouter = BrowserRouter;
//# sourceMappingURL=BrowserRouter.js.map