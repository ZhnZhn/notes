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

const POP_STATE_EVENT_TYPE = "popstate";
const _getHistoryState = (
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
})

, _createBrowserURLImpl = (
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

, _createKey = () => Math
  .random()
  .toString(36)
  .substring(2, 10)

, _isLocation = (
  obj
) => isObj(obj)
  && "pathname" in obj
  && "search" in obj
  && "hash" in obj
  && "state" in obj
  && "key" in obj
, _createLocation = (
  current,
  to,
  state = null,
  key = "default"
) => ({
  pathname: isStr(current)
    ? current
    : current.pathname,
  search: "",
  hash: "",
  ...isStr(to) ? parsePath(to) : to,
  state,
  key: to?.key || key || _createKey()
})
, _getLocation = (
  to,
  history,
  state
) => _isLocation(to)
  ? to
  : _createLocation(history.location, to, state)

, _getUrlBasedHistory = (
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
    const location = _getLocation(to, history, state);
    index = getIndex() + 1;
    const historyState = _getHistoryState(location, index)
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
    const location = _getLocation(to, history, state)
    index = getIndex();
    const historyState = _getHistoryState(location, index)
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
    return _createBrowserURLImpl(windowImpl, to);
  }
  const history = {
    get action() {
      return action;
    },
    get location() {
      const {
        pathname,
        search,
        hash
      } = windowImpl.location
      , state = globalHistory.state;
      return _createLocation(
        "",
        { pathname, search, hash },
        state?.usr,
        state?.key
      );
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      windowImpl.addEventListener(POP_STATE_EVENT_TYPE, handlePop);
      listener = fn;
      return () => {
        windowImpl.removeEventListener(POP_STATE_EVENT_TYPE, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return isStr(to)
        ? to
        : createPath(to);
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
};

export const BrowserRouter = (
  props
) => {
  const _refHistory = useRef();
  if (_refHistory.current == null) {
    _refHistory.current = _getUrlBasedHistory(
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
