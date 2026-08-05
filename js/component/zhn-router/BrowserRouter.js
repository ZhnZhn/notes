"use strict";

exports.__esModule = true;
exports.BrowserRouter = BrowserRouter;
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
const PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
const createBrowserURLImpl = function (windowImpl, to, isAbsolute) {
    if (isAbsolute === void 0) {
      isAbsolute = false;
    }
    const windowImplLocation = windowImpl?.location,
      base = !windowImplLocation ? "http://localhost" : windowImplLocation.origin !== "null" ? windowImplLocation.origin : windowImplLocation.href;
    let href = ((0, _isTypeFn.isStr)(to) ? to : (0, _RouterFn.createPath)(to)).replace(/ $/, "%20");
    if (!isAbsolute && PROTOCOL_RELATIVE_URL_REGEX.test(href)) {
      href = base + href;
    }
    return new URL(href, base);
  },
  createKey = () => Math.random().toString(36).substring(2, 10),
  createLocation = function (current, to, state, key, mask) {
    if (state === void 0) {
      state = null;
    }
    return {
      pathname: (0, _isTypeFn.isStr)(current) ? current : current.pathname,
      search: "",
      hash: "",
      ...((0, _isTypeFn.isStr)(to) ? (0, _matchRouters.parsePath)(to) : to),
      state,
      key: to?.key || key || createKey(),
      mask
    };
  },
  getUrlBasedHistory = function (getLocation, createHref2, validateLocation, options) {
    if (options === void 0) {
      options = {};
    }
    const {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options,
      globalHistory = window2.history;
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
      if (validateLocation) validateLocation(location, to);
      index = getIndex() + 1;
      const historyState = getHistoryState(location, index),
        url = history.createHref(location.mask || location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
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
      if (validateLocation) validateLocation(location, to);
      index = getIndex();
      const historyState = getHistoryState(location, index),
        url = history.createHref(location.mask || location);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 0
        });
      }
    }
    function createURL(to) {
      return createBrowserURLImpl(window2, to);
    }
    const history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref2(window2, to);
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
  createBrowserHistory = function (options) {
    if (options === void 0) {
      options = {};
    }
    const createBrowserLocation = (window2, globalHistory) => {
        const maskedLocation = globalHistory.state?.masked,
          {
            pathname,
            search,
            hash
          } = maskedLocation || window2.location;
        return createLocation("", {
          pathname,
          search,
          hash
        }, globalHistory.state?.usr || null, globalHistory.state?.key || "default", maskedLocation ? {
          pathname: window2.location.pathname,
          search: window2.location.search,
          hash: window2.location.hash
        } : void 0);
      },
      createBrowserHref = (_window2, to) => (0, _isTypeFn.isStr)(to) ? to : (0, _RouterFn.createPath)(to);
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
  };
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  const historyRef = (0, _react.useRef)();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  const history = historyRef.current,
    [state, setStateImpl] = (0, _react.useState)({
      action: history.action,
      location: history.location
    });
  (0, _react.useLayoutEffect)(() => history.listen(setStateImpl), [history]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.Router, {
    basename: basename,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    children: children
  });
}
//# sourceMappingURL=BrowserRouter.js.map