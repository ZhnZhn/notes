import {
  isValidElement,
  createElement,
  Children,
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect
} from 'react';

import {
  isStr,
  isNumber,
  isFn
} from '../../utils/isTypeFn';

import {
  matchRoutes,
  joinPaths,
  parsePath,
  stripBasename
} from './matchRouters';
import {
  createPath,
  removeTrailingSlash,
  removeDoubleSlashes
} from './RouterFn';

const _assign = Object.assign;

export const Route = (_props) => {}

const createRoutesFromChildren = (
  children,
  parentPath = []
) => {
  const routes = [];
  Children.forEach(children, (element, index) => {
    if (!isValidElement(element)) {
      return;
    }
    const treePath = [...parentPath, index]
    , elementProps = element.props
    , route = {
      id: elementProps.id || treePath.join("-"),
      element: elementProps.element,
      path: elementProps.path,
    };
    if (elementProps.children) {
      route.children = createRoutesFromChildren(
        elementProps.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}

const NavigationContext = createContext(null);
NavigationContext.displayName = "Navigation";

const LocationContext = createContext(null);
LocationContext.displayName = "Location";

const useLocation = () => useContext(LocationContext)
 .location;

const DataRouterContext = createContext(null);
DataRouterContext.displayName = "DataRouter";

const RouteContext = createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";

const resolvePathname = (
  relativePath,
  fromPathname
) => {
  const segments = removeTrailingSlash(fromPathname)
    .split("/")
  , relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === ".." && segments.length > 1) {
      segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1
    ? segments.join("/")
    : "/";
}

, normalizeSearch = (
  search
) => !search || search === "?"
  ? ""
  : search.startsWith("?")
  ? search
  : "?" + search
, normalizeHash = (
  hash
) => !hash || hash === "#"
  ? ""
  : hash.startsWith("#")
  ? hash
  : "#" + hash

, resolvePath = (
  to,
  fromPathname = "/"
) => {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = isStr(to) ? parsePath(to) : to;
  let pathname;
  if (toPathname) {
    toPathname = removeDoubleSlashes(toPathname);
    pathname = toPathname.startsWith("/")
      ? resolvePathname(toPathname.substring(1), "/")
      : resolvePathname(toPathname, fromPathname)
  } else {
    pathname = fromPathname;
  }
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
};

const resolveTo = (
  toArg,
  locationPathname
) => {
  const to = isStr(toArg)
    ? parsePath(toArg)
    : { ...toArg }
  , isEmptyPath = toArg === "" || to.pathname === ""
  , toPathname = isEmptyPath
    ? "/"
    : to.pathname
  , from = toPathname == null
    ? locationPathname
    : "/"
  , path = resolvePath(to, from)
  , hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/")
  , hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}

, useNavigateUnstable = () => {
  const dataRouterContext = useContext(DataRouterContext)
  , { basename, navigator } = useContext(NavigationContext)
  , { pathname: locationPathname } = useLocation()

  , activeRef = useRef(false);

  useLayoutEffect(() => {
    activeRef.current = true;
  })

  const navigate = useCallback(
    (to, options = {}) => {
      if (!activeRef.current) return;
      if (isNumber(to)) {
        navigator.go(to);
        return;
      }
      const path = resolveTo(
        to,
        locationPathname
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (options.replace ? navigator.replace : navigator.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}

, useNavigate = () => useNavigateUnstable()

, RenderedRoute = (props) => (
  <RouteContext.Provider value={props.routeContext}>
    {props.children}
  </RouteContext.Provider>
)

, _renderMatches = (
  matches,
  parentMatches = []
) => matches == null
  ? null
  : matches.reduceRight((outlet, match, index) => {

      const getChildren = () => /* @__PURE__ */ createElement(
        RenderedRoute,
        {
          match,
          routeContext: {
            outlet,
            matches: parentMatches.concat(
              matches.slice(0, index + 1)
            ),
            isDataRoute: false
          },
          children: match.route.Component
            ? /* @__PURE__ */ createElement(match.route.Component, null)
            : match.route.element || outlet
        }
      );

      return getChildren();
    },
    null
  );


// Re-encode pathnames that were decoded inside matchRoutes.
// Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
// `new URL()` internally and we need to prevent it from treating
// them as separators
const _encodeLocation = (
  navigator,
  location
) => navigator.encodeLocation ? navigator.encodeLocation(
  location.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
).pathname : location;

const useRoutesImpl = (
  routes,
  locationArg
) => {
  const { navigator } = useContext(NavigationContext)
  , { matches: parentMatches } = useContext(RouteContext)
  , routeMatch = parentMatches[parentMatches.length - 1]
  , parentParams = routeMatch
    ? routeMatch.params
    : {}
  , parentPathnameBase = routeMatch
    ? routeMatch.pathnameBase
    : "/"

  const locationFromContext = useLocation();

  const location = isStr(locationArg)
    ? parsePath(locationArg)
    : locationArg || locationFromContext;

  const pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    const parentSegments = parentPathnameBase.replace(/^\//, "").split("/")
    , segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }

  const matches = matchRoutes(routes, { pathname: remainingPathname })

  const renderedMatches = _renderMatches(
    matches?.map(
      (match) => _assign({}, match, {
        params: _assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          _encodeLocation(navigator, match.pathname)
        ]),
        pathnameBase: match.pathnameBase === "/"
          ? parentPathnameBase
          : joinPaths([
              parentPathnameBase,
             _encodeLocation(navigator, match.pathnameBase)
            ])
      })
    ),
    parentMatches
  );

  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            mask: void 0,
            ...location
          },
          navigationType: "POP" /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}

export const Routes = ({
  children,
  location
}) => useRoutesImpl(
  createRoutesFromChildren(children),
  location
)

export const Router = ({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP" /* Pop */,
  navigator,
  static: staticProp = false,
  useTransitions
}) => {
  const basename = basenameProp.replace(/^\/*/, "/")
  , navigationContext = useMemo(
    () => ({
      basename,
      navigator,
      static: staticProp,
      useTransitions,
      future: {}
    }),
    [basename, navigator, staticProp, useTransitions]
  );
  if (isStr(locationProp)) {
    locationProp = parsePath(locationProp);
  }
  const {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default",
    mask
  } = locationProp
  , locationContext = useMemo(() => {
    const trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key,
        mask
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType, mask]);

  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ createElement(
    NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ createElement(LocationContext.Provider, { children, value: locationContext })
  );
}

const normalizeProtocolRelativeUrl = (
  url,
  protocol
) => protocol + url.replace(/\\/g, "/");

export const Navigate = ({
  to,
  replace: replace2,
  state
}) => {
  const {
    pathname: locationPathname
  } = useLocation()
  , navigate = useNavigate()
  , path = resolveTo(
    to,
    locationPathname
  )
  , jsonPath = JSON.stringify(path);
  useEffect(() => {
    navigate(
      JSON.parse(jsonPath), {
        replace: replace2,
        state
      });
  }, [navigate, jsonPath, replace2, state]);
  return null;
}


const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
const PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
const parseToInfo = (
  _to,
  basename
) => {
  let to = _to;
  if (!isStr(to) || !ABSOLUTE_URL_REGEX.test(to)) {
    return {
      absoluteURL: void 0,
      isExternal: false,
      to
    };
  }
  const absoluteURL = to;
  let isExternal = false;
  try {
    const currentUrl = new URL(window.location.href)
    , targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to)
      ? new URL(normalizeProtocolRelativeUrl(to, currentUrl.protocol))
      : new URL(to)
    , path = stripBasename(targetUrl.pathname, basename);
    if (targetUrl.origin === currentUrl.origin && path != null) {
      to = path + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  } catch {
    console.log("Link contain an invalid URL");
  }
  return {
    absoluteURL,
    isExternal,
    to
  };
};

const useResolvedPath = (
  to
) => {
  const {
    pathname: locationPathname
  } = useLocation()

  return useMemo(
    () => resolveTo(
      to,
      locationPathname
    ),
    [to, locationPathname]
  );
}

, useHref = (
  to
) => {
  const {
    basename,
    navigator
  } = useContext(NavigationContext)
  , {
    hash,
    pathname,
    search
  } = useResolvedPath(to);

  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/"
      ? basename
      : joinPaths([basename, pathname]);
  }
  return navigator
   .createHref({
     pathname: joinedPathname,
     search,
     hash
   });
}

, isModifiedEvent = (
  evt
) => !!(evt.metaKey
  || evt.altKey
  || evt.ctrlKey
  || evt.shiftKey
)

, shouldProcessLinkClick = (
  evt,
  target
) => evt.button === 0
  && (!target || target === "_self")  // Ignore everything but left clicks
  && !isModifiedEvent(evt) // Let browser handle "target=_blank" etc.

, useLinkClickHandler = (to, {
  target,
  replace: replaceProp
} = {}) => {
  const navigate = useNavigate()
  , location = useLocation()
  , path = useResolvedPath(to);
  return useCallback(
    (evt) => {
      if (shouldProcessLinkClick(evt, target)) {
        evt.preventDefault();
        navigate(to, {
           replace: replaceProp === void 0
             ? createPath(location) === createPath(path)
             : replaceProp
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      target,
      to
    ]
  );
}

, Link = ({
  onClick,
  replace: replace2,
  target,
  to,
  children,
  ...restProps
}) => {
  const {
    basename
  } = useContext(NavigationContext)

  , parsed = parseToInfo(to, basename)
  , parsedTo = parsed.to
  , href = useHref(parsedTo)

  , internalOnClick = useLinkClickHandler(parsedTo, {
      replace: replace2,
      target
  })

  , handleClick = (evt) => {
    if (onClick) onClick(evt);
    if (!evt.defaultPrevented) {
      internalOnClick(evt);
    }
  };

  return (
    <a
       {...restProps}
       href={href}
       onClick={handleClick}
       target={target}
    >
      {children}
    </a>
  );
};
Link.displayName = "Link";

export const NavLink = ({
  "aria-current": ariaCurrentProp = "page",
  end = false,
  className,
  style,
  to,
  children,
  ...restProps
}) => {
    const path = useResolvedPath(to)
    , {
      navigator
    } = useContext(NavigationContext)
    , location = useLocation()

    , toPathname = (navigator.encodeLocation
      ? navigator.encodeLocation(path).pathname
      : path.pathname).toLowerCase()
    , locationPathname = location.pathname.toLowerCase()

    , endSlashPosition = toPathname !== "/" && toPathname.endsWith("/")
       ? toPathname.length - 1
       : toPathname.length
    , isActive = locationPathname === toPathname
       || !end
       && locationPathname.startsWith(toPathname)
       && locationPathname.charAt(endSlashPosition) === "/"
    , isPending = false;

    return (
      <Link
        {...restProps}
        aria-current={isActive
          ? ariaCurrentProp
          : void 0
        }
        className={[
          className,
          isActive ? "active" : null,
          isPending ? "pending" : null,
        ].filter(Boolean).join(" ")}
        style={style}
        to={to}
      >
         {isFn(children)
           ? children({ isActive, isPending })
           : children
         }
      </Link>
    );
};
NavLink.displayName = "NavLink";
