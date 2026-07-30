"use strict";

exports.__esModule = true;
exports.NavLink = void 0;
exports.Navigate = Navigate;
exports.Route = Route;
exports.Router = Router;
exports.Routes = Routes;
var _react = require("react");
var _isTypeFn = require("../../utils/isTypeFn");
var _matchRouters = require("./matchRouters");
var _RouterFn = require("./RouterFn");
var _jsxRuntime = require("react/jsx-runtime");
function Route(_props) {}
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  const routes = [];
  _react.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/(0, _react.isValidElement)(element)) {
      return;
    }
    const treePath = [...parentPath, index];
    if (element.type === _react.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    const route = {
      id: element.props.id || treePath.join("-"),
      element: element.props.element,
      path: element.props.path
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
const NavigationContext = /*#__PURE__*/(0, _react.createContext)(null);
NavigationContext.displayName = "Navigation";
const LocationContext = /*#__PURE__*/(0, _react.createContext)(null);
LocationContext.displayName = "Location";
function useLocation() {
  return (0, _react.useContext)(LocationContext).location;
}
const DataRouterContext = /*#__PURE__*/(0, _react.createContext)(null);
DataRouterContext.displayName = "DataRouter";
const RouteContext = /*#__PURE__*/(0, _react.createContext)({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches) {
  const pathMatches = getPathContributingMatches(matches);
  return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
}
const removeTrailingSlash = path => path.replace(/\/+$/, "");
function resolvePathname(relativePath, fromPathname) {
  const segments = removeTrailingSlash(fromPathname).split("/"),
    relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
const removeDoubleSlashes = path => path.replace(/[\\/]{2,}/g, "/");
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = (0, _isTypeFn.isStr)(to) ? (0, _matchRouters.parsePath)(to) : to;
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
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  const to = (0, _isTypeFn.isStr)(toArg) ? (0, _matchRouters.parsePath)(toArg) : {
    ...toArg
  };
  const isEmptyPath = toArg === "" || to.pathname === "",
    toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      const toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  const path = resolvePath(to, from),
    hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"),
    hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
function useNavigateUnstable() {
  const dataRouterContext = (0, _react.useContext)(DataRouterContext),
    {
      basename,
      navigator
    } = (0, _react.useContext)(NavigationContext),
    {
      matches
    } = (0, _react.useContext)(RouteContext),
    {
      pathname: locationPathname
    } = useLocation(),
    routePathnamesJson = JSON.stringify(getResolveToMatches(matches)),
    activeRef = (0, _react.useRef)(false);
  (0, _react.useLayoutEffect)(() => {
    activeRef.current = true;
  });
  const navigate = (0, _react.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if ((0, _isTypeFn.isNumber)(to)) {
      navigator.go(to);
      return;
    }
    const path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0, _matchRouters.joinPaths)([basename, path.pathname]);
    }
    (options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useNavigate() {
  return useNavigateUnstable();
}
function RenderedRoute(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RouteContext.Provider, {
    value: props.routeContext,
    children: props.children
  });
}
function _renderMatches(matches, parentMatches, dataRouterOpts) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
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
    const errorIndex = renderedMatches.findIndex(m => m.route.id && errors?.[m.route.id] !== void 0);
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
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
          } = dataRouterState,
          needsToRunLoader = match.route.loader && !(0, _isTypeFn.hasOwnPropertySafe)(loaderData, match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
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
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
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
    const matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1)),
      getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */(0, _react.createElement)(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */(0, _react.createElement)(RenderedRoute, {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        });
      };
    return getChildren();
  }, null);
}
function useRoutesImpl(routes, locationArg, dataRouterOpts) {
  const {
      navigator
    } = (0, _react.useContext)(NavigationContext),
    {
      matches: parentMatches
    } = (0, _react.useContext)(RouteContext),
    routeMatch = parentMatches[parentMatches.length - 1],
    parentParams = routeMatch ? routeMatch.params : {},
    parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  const locationFromContext = useLocation();
  let location;
  if (locationArg) {
    const parsedLocationArg = (0, _isTypeFn.isStr)(locationArg) ? (0, _matchRouters.parsePath)(locationArg) : locationArg;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  const pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    const parentSegments = parentPathnameBase.replace(/^\//, "").split("/"),
      segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  const matches = dataRouterOpts?.state.matches.length ?
  // If we're in a data router, use the matches we've already identified but ensure
  // we have the latest route instances from the manifest in case elements have changed
  dataRouterOpts.state.matches.map(m => Object.assign(m, {
    route: dataRouterOpts.manifest[m.route.id] || m.route
  })) : (0, _matchRouters.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  const renderedMatches = _renderMatches(matches?.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0, _matchRouters.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes.
    // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
    // `new URL()` internally and we need to prevent it from treating
    // them as separators
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _matchRouters.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
    // `new URL()` internally and we need to prevent it from treating
    // them as separators
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathnameBase])
  })), parentMatches, dataRouterOpts);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */(0, _react.createElement)(LocationContext.Provider, {
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
    }, renderedMatches);
  }
  return renderedMatches;
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function Routes(_ref) {
  let {
    children,
    location
  } = _ref;
  return useRoutes(createRoutesFromChildren(children), location);
}
function Router(_ref2) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP" /* Pop */,
    navigator,
    static: staticProp = false,
    useTransitions
  } = _ref2;
  const basename = basenameProp.replace(/^\/*/, "/"),
    navigationContext = (0, _react.useMemo)(() => ({
      basename,
      navigator,
      static: staticProp,
      useTransitions,
      future: {}
    }), [basename, navigator, staticProp, useTransitions]);
  if ((0, _isTypeFn.isStr)(locationProp)) {
    locationProp = (0, _matchRouters.parsePath)(locationProp);
  }
  const {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp,
    locationContext = (0, _react.useMemo)(() => {
      const trailingPathname = (0, _matchRouters.stripBasename)(pathname, basename);
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
  return /* @__PURE__ */(0, _react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */(0, _react.createElement)(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function normalizeProtocolRelativeUrl(url, protocol) {
  return protocol + url.replace(/\\/g, "/");
}
function Navigate(_ref3) {
  let {
    to,
    replace: replace2,
    state,
    relative
  } = _ref3;
  const {
      matches
    } = (0, _react.useContext)(RouteContext),
    {
      pathname: locationPathname
    } = useLocation(),
    navigate = useNavigate(),
    path = resolveTo(to, getResolveToMatches(matches), locationPathname, relative === "path"),
    jsonPath = JSON.stringify(path);
  (0, _react.useEffect)(() => {
    navigate(JSON.parse(jsonPath), {
      replace: replace2,
      state,
      relative
    });
  }, [navigate, jsonPath, relative, replace2, state]);
  return null;
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
const PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
function parseToInfo(_to, basename) {
  let to = _to;
  if (!(0, _isTypeFn.isStr)(to) || !ABSOLUTE_URL_REGEX.test(to)) {
    return {
      absoluteURL: void 0,
      isExternal: false,
      to
    };
  }
  const absoluteURL = to;
  let isExternal = false;
  try {
    const currentUrl = new URL(window.location.href),
      targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to) ? new URL(normalizeProtocolRelativeUrl(to, currentUrl.protocol)) : new URL(to),
      path = (0, _matchRouters.stripBasename)(targetUrl.pathname, basename);
    if (targetUrl.origin === currentUrl.origin && path != null) {
      to = path + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  } catch (_err) {
    console.log("Link contain an invalid URL");
  }
  return {
    absoluteURL,
    isExternal,
    to
  };
}
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  const {
      basename,
      navigator
    } = (0, _react.useContext)(NavigationContext),
    {
      hash,
      pathname,
      search
    } = useResolvedPath(to, {
      relative
    });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0, _matchRouters.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
const isModifiedEvent = evt => !!(evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey);
const shouldProcessLinkClick = (evt, target) => evt.button === 0 && (!target || target === "_self") // Ignore everything but left clicks
&& !isModifiedEvent(evt); // Let browser handle "target=_blank" etc.

function useLinkClickHandler(to, _temp2) {
  let {
    target,
    replace: replaceProp,
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  const navigate = useNavigate(),
    location = useLocation(),
    path = useResolvedPath(to, {
      relative
    });
  return (0, _react.useCallback)(evt => {
    if (shouldProcessLinkClick(evt, target)) {
      evt.preventDefault();
      navigate(to, {
        replace: replaceProp === void 0 ? (0, _RouterFn.createPath)(location) === (0, _RouterFn.createPath)(path) : replaceProp,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, target, to, relative]);
}
const Link = _ref4 => {
  let {
    onClick,
    relative,
    replace: replace2,
    target,
    to,
    children,
    ...restProps
  } = _ref4;
  const {
      basename
    } = (0, _react.useContext)(NavigationContext),
    parsed = parseToInfo(to, basename),
    parsedTo = parsed.to,
    href = useHref(parsedTo, {
      relative
    }),
    internalOnClick = useLinkClickHandler(parsedTo, {
      replace: replace2,
      target,
      relative
    });
  function handleClick(evt) {
    if (onClick) onClick(evt);
    if (!evt.defaultPrevented) {
      internalOnClick(evt);
    }
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    ...restProps,
    href: href,
    onClick: handleClick,
    target: target,
    children: children
  });
};
Link.displayName = "Link";
function useResolvedPath(to, _temp3) {
  let {
    relative
  } = _temp3 === void 0 ? {} : _temp3;
  const {
      matches
    } = (0, _react.useContext)(RouteContext),
    {
      pathname: locationPathname
    } = useLocation(),
    routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return (0, _react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
const NavLink = _ref5 => {
  let {
    "aria-current": ariaCurrentProp = "page",
    end = false,
    className,
    style,
    to,
    children,
    ...restProps
  } = _ref5;
  const path = useResolvedPath(to, {
      relative: restProps.relative
    }),
    {
      navigator
    } = (0, _react.useContext)(NavigationContext),
    location = useLocation(),
    toPathname = (navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname).toLowerCase(),
    locationPathname = location.pathname.toLowerCase(),
    endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length,
    isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/",
    isPending = false;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Link, {
    ...restProps,
    "aria-current": isActive ? ariaCurrentProp : void 0,
    className: [className, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" "),
    style: style,
    to: to,
    children: (0, _isTypeFn.isFn)(children) ? children({
      isActive,
      isPending
    }) : children
  });
};
exports.NavLink = NavLink;
NavLink.displayName = "NavLink";
//# sourceMappingURL=Router.js.map