import {
  useRef,
  useState,
  useLayoutEffect
} from 'react';

import {
  isObj,
  isStr
} from '../../utils/isTypeFn';

import { parsePath } from './matchRouters';
import { Router } from './Router';
import { createPath } from './RouterFn';

const PopStateEventType = "popstate";
const isLocation = (
  obj
) => isObj(obj)
  && "pathname" in obj
  && "search" in obj
  && "hash" in obj
  && "state" in obj
  && "key" in obj;

const getHistoryState = (
  location,
  index
) => ({
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
function createBrowserURLImpl(windowImpl, to, isAbsolute = false) {
  let base = "http://localhost";
  if (windowImpl) {
    base = windowImpl.location.origin !== "null"
      ? windowImpl.location.origin
      : windowImpl.location.href;
  }

  let href = isStr(to)
    ? to
    : createPath(to);
  href = href.replace(/ $/, "%20");

  if (!isAbsolute && PROTOCOL_RELATIVE_URL_REGEX.test(href)) {
    href = base + href;
  }
  return new URL(href, base);
}

function createKey() {
  return Math
   .random()
   .toString(36)
   .substring(2, 10);
}

const createLocation = (
  current,
  to,
  state = null,
  key,
  mask
) => ({
  pathname: isStr(current)
    ? current
    : current.pathname,
  search: "",
  hash: "",
  ...isStr(to) ? parsePath(to) : to,
  state,
  key: to?.key || key || createKey(),
  mask
});

function getUrlBasedHistory(
  getLocation,
  createHref2,
  validateLocation,
  options = {}
) {
  const {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options
  , globalHistory = window2.history;
  let action = "POP" /* Pop */;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    const state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP" /* Pop */;
    const nextIndex = getIndex()
    , delta = nextIndex == null
      ? null
      : nextIndex - index;
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
    const location = isLocation(to)
      ? to
      : createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    const historyState = getHistoryState(location, index)
    , url = history.createHref(location.mask || location);
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
    const location = isLocation(to)
      ? to
      : createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    const historyState = getHistoryState(location, index)
    , url = history.createHref(location.mask || location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
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
}

function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    const maskedLocation = globalHistory.state?.masked
    , { pathname, search, hash } = maskedLocation || window2.location;
    return createLocation(
      "",
      { pathname, search, hash },
      globalHistory.state?.usr || null,
      globalHistory.state?.key || "default",
      maskedLocation ? {
        pathname: window2.location.pathname,
        search: window2.location.search,
        hash: window2.location.hash
      } : void 0
    );
  }
  function createBrowserHref(_window2, to) {
    return isStr(to)
      ? to
      : createPath(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}

export function BrowserRouter({
  basename,
  children,
  window: window2
}) {
  const historyRef = useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  const history = historyRef.current
  , [
    state,
    setStateImpl
  ] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(
    () => history.listen(setStateImpl),
    [history]
  );

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
