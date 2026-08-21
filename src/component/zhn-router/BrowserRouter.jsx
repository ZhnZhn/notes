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

const createBrowserURLImpl = (
  windowImpl,
  to
) => {
  const windowImplLocation = windowImpl?.location
  , base = !windowImplLocation
    ? "http://localhost"
    : windowImplLocation.origin !== "null"
    ? windowImplLocation.origin
    : windowImplLocation.href

  , href = (isStr(to) ? to : createPath(to))
    .replace(/ $/, "%20");

  return new URL(href, base);
}

, createKey = () => Math
  .random()
  .toString(36)
  .substring(2, 10)

, createLocation = (
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
})

, getUrlBasedHistory = (
  getLocation,
  createHref2,
  windowImpl = document.defaultView
) => {
  const globalHistory = windowImpl.history;

  let action = "POP" /* Pop */
  , listener = null
  , index = getIndex();

  if (index == null) {
    index = 0;
    globalHistory.replaceState({
      ...globalHistory.state,
      idx: index
    }, "");
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
    index = getIndex() + 1;
    const historyState = getHistoryState(location, index)
    , url = history.createHref(location.mask || location);
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
    const location = isLocation(to)
      ? to
      : createLocation(history.location, to, state);
    index = getIndex();
    const historyState = getHistoryState(location, index)
    , url = history.createHref(location.mask || location);
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
      return createHref2(windowImpl, to);
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

, createBrowserLocation = (
  windowImpl,
  globalHistory
) => {
  const maskedLocation = globalHistory.state?.masked
  , {
    pathname,
    search,
    hash
  } = maskedLocation || windowImpl.location;
  return createLocation(
    "",
    { pathname, search, hash },
    globalHistory.state?.usr || null,
    globalHistory.state?.key || "default",
    maskedLocation ? {
      pathname: windowImpl.location.pathname,
      search: windowImpl.location.search,
      hash: windowImpl.location.hash
    } : void 0
  );
}
, createBrowserHref = (
  _windowImpl,
  to
) => isStr(to)
  ? to
  : createPath(to);

export const BrowserRouter = (
  props
) => {
  const _refHistory = useRef();
  if (_refHistory.current == null) {
    _refHistory.current = getUrlBasedHistory(
       createBrowserLocation,
       createBrowserHref,
       props.window
    );    
  }
  const historyImpl = _refHistory.current
  , [
    state,
    setStateImpl
  ] = useState({
    location: historyImpl.location,
    action: historyImpl.action
  });

  useLayoutEffect(
    () => historyImpl.listen(setStateImpl),
    [historyImpl]
  );

  return (
    <Router
      basename={props.basename}
      location={state.location}
      navigationType={state.action}
      navigator={historyImpl}
    >
      {props.children}
    </Router>
  );
}
