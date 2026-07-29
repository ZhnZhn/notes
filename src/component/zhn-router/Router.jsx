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
  matchRoutes,
  joinPaths,
  parsePath,
  stripBasename
} from './matchRouters';
import {
  createPath
} from './RouterFn';

export function Route(props) {}

function createRoutesFromChildren(
  children,
  parentPath = []
) {
  let routes = [];
  Children.forEach(children, (element, index) => {
    if (!isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }

    let route = {
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

function useLocation() {
  return useContext(LocationContext).location;
}

const DataRouterContext = createContext(null);
DataRouterContext.displayName = "DataRouter";

const RouteContext = createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";

function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}

const removeTrailingSlash = (path) => path.replace(/\/+$/, "");
function resolvePathname(relativePath, fromPathname) {
  let segments = removeTrailingSlash(fromPathname).split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

const removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
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
}

function resolveTo(
  toArg,
  routePathnames,
  locationPathname,
  isPathRelative = false
) {
  const to = typeof toArg === "string"
    ? parsePath(toArg)
    : { ...toArg };

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}

function useNavigateUnstable() {

  let dataRouterContext = useContext(DataRouterContext);
  let { basename, navigator } = useContext(NavigationContext);
  let { matches } = useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();

  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));

  let activeRef = useRef(false);

  useLayoutEffect(() => {
    activeRef.current = true;
  })

  let navigate = useCallback(
    (to, options = {}) => {
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator.replace : navigator.push)(
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

function useNavigate() {
  return useNavigateUnstable()
}

function RenderedRoute(props) {
  return (
    <RouteContext.Provider value={props.routeContext}>
        {props.children}
    </RouteContext.Provider>
  );
}

function _renderMatches(
  matches,
  parentMatches = [],
  dataRouterOpts
) {
  let dataRouterState = dataRouterOpts?.state;
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
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
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
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
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
  let onErrorHandler = dataRouterOpts?.onError;
  let onError;

  return renderedMatches.reduceRight(
    (outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : void 0;
        errorElement = match.route.errorElement || defaultErrorElement;
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
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
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
}

function useRoutesImpl(
  routes,
  locationArg,
  dataRouterOpts
) {

  let { navigator } = useContext(NavigationContext);
  let { matches: parentMatches } = useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string"
      ? parsePath(locationArg)
      : locationArg;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    dataRouterOpts.state.matches.map(
      (m) => Object.assign(m, {
        route: dataRouterOpts.manifest[m.route.id] || m.route
      })
    )
  ) : matchRoutes(routes, { pathname: remainingPathname });

  let renderedMatches = _renderMatches(
    matches && matches.map(
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

function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

export function Routes({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}


export function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP" /* Pop */,
  navigator,
  static: staticProp = false,
  useTransitions
}) {
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = useMemo(
    () => ({
      basename,
      navigator,
      static: staticProp,
      useTransitions,
      future: {}
    }),
    [basename, navigator, staticProp, useTransitions]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default",
    mask
  } = locationProp;
  let locationContext = useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
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


export function Navigate({
  to,
  replace: replace2,
  state,
  relative
}) {
  let { static: isStatic } = useContext(NavigationContext);

  let { matches } = useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let navigate = useNavigate();
  let path = resolveTo(
    to,
    getResolveToMatches(matches),
    locationPathname,
    relative === "path"
  );
  let jsonPath = JSON.stringify(path);
  useEffect(() => {
    navigate(JSON.parse(jsonPath), { replace: replace2, state, relative });
  }, [navigate, jsonPath, relative, replace2, state]);
  return null;
}


const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
const PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
function parseToInfo(_to, basename) {
  let to = _to;
  if (typeof to !== "string" || !ABSOLUTE_URL_REGEX.test(to)) {
    return {
      absoluteURL: void 0,
      isExternal: false,
      to
    };
  }
  let absoluteURL = to;
  let isExternal = false;
  if (isBrowser) {
    try {
      let currentUrl = new URL(window.location.href);
      let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to) ? new URL(normalizeProtocolRelativeUrl(to, currentUrl.protocol)) : new URL(to);
      let path = stripBasename(targetUrl.pathname, basename);
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    } catch (e) {
      console.log("Link contain an invalid URL");
    }
  }
  return {
    absoluteURL,
    isExternal,
    to
  };
}

function useHref(
  to,
  { relative } = {}
) {
  const {
    basename,
    navigator
  } = useContext(NavigationContext)
  , {
    hash,
    pathname,
    search
  } = useResolvedPath(to, { relative });

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

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0
    && (!target || target === "_self")  // Ignore everything but left clicks
    && !isModifiedEvent(event); // Let browser handle "target=_blank" etc.
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  mask,
  state,
  preventScrollReset,
  relative,
  viewTransition,
  defaultShouldRevalidate,
  useTransitions
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, { relative });
  return useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        let doNavigate = () => navigate(to, {
          replace: replace2,
          mask,
          state,
          preventScrollReset,
          relative,
          viewTransition,
          defaultShouldRevalidate
        });
        doNavigate();
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      mask,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition,
      defaultShouldRevalidate,
      useTransitions
    ]
  );
}

const Link = ({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    mask,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    defaultShouldRevalidate,
    children,
    ...restProps
  }) => {
    let { basename, navigator, useTransitions } = useContext(NavigationContext);
    let isAbsolute = typeof to === "string"
      && ABSOLUTE_URL_REGEX.test(to);
    let parsed = parseToInfo(to, basename);
    to = parsed.to;
    let href = useHref(to, { relative });
    let location = useLocation();
    let maskedHref = null;
    if (mask) {
      let resolved = resolveTo(
        mask,
        [],
        location.mask ? location.mask.pathname : "/",
        true
      );
      if (basename !== "/") {
        resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
      }
      maskedHref = navigator.createHref(resolved);
    }

    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      mask,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition,
      defaultShouldRevalidate,
      useTransitions
    });

    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }

    }
    const isSpaLink = !(parsed.isExternal || reloadDocument);
    return (
      <a
         {...restProps}
         href={(isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href}
         onClick={isSpaLink ? handleClick : onClick}
         target={target}
      >
        {children}
      </a>
    );
}

Link.displayName = "Link";

function useResolvedPath(to, { relative } = {}) {
  let { matches } = useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();

  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}

export const NavLink = ({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...restProps
  }) => {
    let path = useResolvedPath(to, { relative: restProps.relative });
    let location = useLocation();

    let { navigator, basename } = useContext(NavigationContext);


    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = null;

    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/")
      ? toPathname.length - 1
      : toPathname.length
    , isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/"
    , isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");

    return (
      <Link
        {...restProps}
        aria-current={isActive
          ? ariaCurrentProp
          : void 0
        }
        className={[
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
        ].filter(Boolean).join(" ")}
        style={styleProp}
        to={to}
        viewTransition={viewTransition}
      >
         {typeof children === "function"
           ? children({isActive, isPending})
           : children
         }
      </Link>
    );
}

NavLink.displayName = "NavLink";
