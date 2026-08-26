import { isStr } from '../../utils/isTypeFn';

import {
  removeTrailingSlash,
  removeDoubleSlashes
} from './RouterFn';

const normalizePathname = (
  pathname
) => removeTrailingSlash(pathname)
  .replace(/^\/*/, "/");

export function parsePath(path) {
  const parsedPath = {};
  if (path) {
    const hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    const searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
export function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  const startIndex = basename.endsWith("/")
    ? basename.length - 1
    : basename.length
  , nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}

export const joinPaths = (
  paths
) => removeDoubleSlashes(paths.join("/"));

const RE_PARAM = /^:[\w-]+$/

, DYNAMIC_SEGMENT_VALUE = 3
, INDEX_ROUTE_VALUE = 2
, EMPTY_SEGMENT_VALUE = 1
, STATIC_SEGMENT_VALUE = 10

, SPLAT_PENALTY = -2
, _isSplat = (s) => s === "*"

, _computeScore = (
  path,
  index
) => {
  const segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(_isSplat)) {
    initialScore += SPLAT_PENALTY;
  }
  if (index) {
    initialScore += INDEX_ROUTE_VALUE;
  }
  return segments
    .filter((s) => !_isSplat(s))
    .reduce(
      (score, segment) => score + (RE_PARAM.test(segment)
        ? DYNAMIC_SEGMENT_VALUE
        : segment === ""
        ? EMPTY_SEGMENT_VALUE
        : STATIC_SEGMENT_VALUE
      ), initialScore
    );
};

const _compilePath = (
  path,
  end = true
) => {
  const params = [];
  let regexpSource = "^" + path
  .replace(/\/*\*?$/, "")
  .replace(/^\/*/, "/")
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
  .replace(
    /\/:([\w-]+)(\?)?/g,
    (match, paramName, isOptional, index, str) => {
      params.push({ paramName, isOptional: isOptional != null });
      if (isOptional) {
        const nextChar = str.charAt(index + match.length);
        if (nextChar && nextChar !== "/") {
          return "/([^\\/]*)";
        }
        return "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  )
  .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");

  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  }

  return {
    matcher: new RegExp(regexpSource, "i"),
    compiledParams: params
  };
}

function flattenRoutes(
  routes,
  branches = [],
  parentsMeta = [],
  parentPath = "",
  _hasParentOptionalSegments = false
) {
  const flattenRoute = (
    route,
    index,
    hasParentOptionalSegments = _hasParentOptionalSegments,
    relativePath
  ) => {
    const meta = {
      relativePath: relativePath === void 0
        ? route.path || ""
        : relativePath,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
        return;
      }
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    const path = joinPaths([parentPath, meta.relativePath])
    , routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      flattenRoutes(
        route.children,
        branches,
        routesMeta,
        path,
        hasParentOptionalSegments
      );
    }
    if (route.path == null && !route.index) {
      return;
    }
    const _isRecentRouteMeta = i => i === routesMeta.length - 1;
    branches.push({
      path,
      score: _computeScore(path, route.index),
      routesMeta: routesMeta.map((routeMeta, i) => ({
        ...routeMeta,
        ..._compilePath(
          routeMeta.relativePath,
          _isRecentRouteMeta(i)
        )
      }))
    });
  };
  routes.forEach((route, index) => {
    flattenRoute(route, index);
  });
  return branches;
}

const _getBranchRoutesMetaChildrenIndex = (
  branch
) => branch.routesMeta
  .map(meta => meta.childrenIndex)

, _compareIndexes = (
  branchA,
  branchB
) => {
  const a = _getBranchRoutesMetaChildrenIndex(branchA)
  , b = _getBranchRoutesMetaChildrenIndex(branchB)
  , isSiblings = a.length === b.length
     && a.slice(0, -1).every((n, i) => n === b[i]);
  return isSiblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}

, _flattenAndRankRoutes = (
  routes
) => {
  const branches = flattenRoutes(routes);
  // Rank route branches
  branches.sort(
    (a, b) => a.score !== b.score
      ? b.score - a.score
      : _compareIndexes(a, b)
  );
  return branches;
}

, _decodePathname = (pathname) => {
  try {
    return pathname
      .split("/")
      .map((v) => decodeURIComponent(v).replace(/\//g, "%2F"))
      .join("/");
  } catch {
    console.log("The URL path could not be decoded")
    return pathname;
  }
}

, _matchPathImpl = (
  pattern,
  pathname,
  matcher,
  compiledParams
) => {
  const match = pathname.match(matcher);
  if (!match) return null;

  const matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  const captureGroups = match.slice(1)
  , params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        const splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

const _matchRouteBranch = (
  routesMeta,
  pathname
) => {
  const matchedParams = {}
  , matches = []
  , numberOfMetaRoutes = routesMeta.length - 1;
  let matchedPathname = "/";

  for (let i = 0; i < routesMeta.length; ++i) {
    const meta = routesMeta[i]
    , end = i === numberOfMetaRoutes
    , remainingPathname = matchedPathname === "/"
       ? pathname
       : pathname.slice(matchedPathname.length) || "/"
    , pattern = {
       path: meta.relativePath,
       end
    }
    // Use precomputed matcher
    , match = _matchPathImpl(
       pattern,
       remainingPathname,
       meta.matcher,
       meta.compiledParams
    )

    if (!match) {
      return null;
    }

    const _matchedPathname = joinPaths([
      matchedPathname,
      match.pathnameBase
    ]);
    matches.push({
      // TODO: Can this as be avoided?
      params: {
        ...matchedParams,
        ...match.params
      },
      pathname: joinPaths([
        matchedPathname,
        match.pathname
      ]),
      pathnameBase: normalizePathname(
        _matchedPathname
      ),
      route: meta.route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = _matchedPathname
    }
  }
  return matches;
};

export const matchRoutes = (
  routes,
  locationArg,
  basename = "/"
) => {
  const location = isStr(locationArg)
    ? parsePath(locationArg)
    : locationArg
  , pathname = stripBasename(
     location.pathname || "/",
     basename
  );

  if (pathname == null) {
    return null;
  }

  const branches = _flattenAndRankRoutes(routes)
  , decodedPathname = _decodePathname(pathname);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = _matchRouteBranch(
      branches[i].routesMeta,
      decodedPathname
    );
  }
  return matches;
}
