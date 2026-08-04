import {
  isValidElement,
  createElement,
  Children,
  Fragment,
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
  isFn,
  hasOwnPropertySafe
} from '../../utils/isTypeFn';

import {
  matchRoutes,
  joinPaths,
  parsePath,
  stripBasename
} from './matchRouters';
import {
  createPath
} from './RouterFn';

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
    const treePath = [...parentPath, index];
    if (element.type === Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }

    const route = {
      id: element.props.id || treePath.join("-"),
      element: element.props.element,
      path: element.props.path,
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
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

const getPathContributingMatches = (
  matches
) => matches.filter(
  (match, index) => index === 0
  || match.route.path && match.route.path.length > 0
)

, getResolveToMatches = (
  matches
) => {
  const pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1
      ? match.pathname
      : match.pathnameBase
  );
}

, removeTrailingSlash = (
  path
) => path.replace(/\/+$/, "")

, resolvePathname = (
  relativePath,
  fromPathname
) => {
  const segments = removeTrailingSlash(fromPathname).split("/")
  , relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1
    ? segments.join("/")
    : "/";
}

, removeDoubleSlashes = (
  path
) => path.replace(/[\\/]{2,}/g, "/")
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
    if (toPathname.startsWith("/")) {
      pathname = resolvePathname(toPathname.substring(1), "/");
    } else {
      pathname = resolvePathname(toPathname, fromPathname);
    }
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
  routePathnames,
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
  , { matches } = useContext(RouteContext)
  , { pathname: locationPathname } = useLocation()

  , routePathnamesJson = JSON.stringify(getResolveToMatches(matches))

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
        JSON.parse(routePathnamesJson),
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
      routePathnamesJson,
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
  parentMatches = [],
  dataRouterOpts
) => {
  const dataRouterState = dataRouterOpts?.state;
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  const errors = dataRouterState?.errors;
  if (errors != null) {
    const errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && errors?.[m.route.id] !== void 0
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterOpts && dataRouterState) {
    renderFallback = dataRouterState.renderFallback;
    for (let i = 0; i < renderedMatches.length; i++) {
      const match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        const {
          loaderData,
          errors: errors2
        } = dataRouterState
        , needsToRunLoader = match.route.loader
          && !hasOwnPropertySafe(loaderData, match.route.id)
          && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          if (dataRouterOpts.isStatic) {
            renderFallback = true;
          }
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }

  return renderedMatches.reduceRight(
    (outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id
          ? errors[match.route.id]
          : void 0;
        errorElement = match.route.errorElement;

        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      const matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1))
      , getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ createElement(
          RenderedRoute,
          {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          }
        );
      };
      return getChildren();
    },
    null
  );
};

const useRoutesImpl = (
  routes,
  locationArg,
  dataRouterOpts
) => {

  const { navigator } = useContext(NavigationContext)
  , { matches: parentMatches } = useContext(RouteContext)
  , routeMatch = parentMatches[parentMatches.length - 1]
  , parentParams = routeMatch ? routeMatch.params : {}
  , parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/"

  const locationFromContext = useLocation();
  let location;
  if (locationArg) {
    const parsedLocationArg = isStr(locationArg)
      ? parsePath(locationArg)
      : locationArg;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  const pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    const parentSegments = parentPathnameBase.replace(/^\//, "").split("/")
    , segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  const matches = dataRouterOpts?.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    dataRouterOpts.state.matches.map(
      (m) => Object.assign(m, {
        route: dataRouterOpts.manifest[m.route.id] || m.route
      })
    )
  ) : matchRoutes(routes, { pathname: remainingPathname });

  const renderedMatches = _renderMatches(
    matches?.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          navigator.encodeLocation ? navigator.encodeLocation(
            match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          navigator.encodeLocation ? navigator.encodeLocation(
            match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterOpts
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

, useRoutes = (
  routes,
  locationArg
) => useRoutesImpl(routes, locationArg);

export const Routes = ({
  children,
  location
}) => useRoutes(
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
  const { matches } = useContext(RouteContext)
  , { pathname: locationPathname } = useLocation()
  , navigate = useNavigate()
  , path = resolveTo(
    to,
    getResolveToMatches(matches),
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
  const { matches } = useContext(RouteContext)
  , { pathname: locationPathname } = useLocation()
  , routePathnamesJson = JSON.stringify(getResolveToMatches(matches));

  return useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname
    ),
    [to, routePathnamesJson, locationPathname]
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
