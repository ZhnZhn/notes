import {
  removeTrailingSlash,
  removeDoubleSlashes,
  normalizeLeadingSlash
} from './RouterFn';

const normalizePathname = (
  pathname
) => removeTrailingSlash(pathname)
  .replace(/^\/*/, "/");

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

export const crPathname = (
  str1,
  str2
) => removeDoubleSlashes(`${str1}/${str2}`)

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

const RE_TRALING_SLASHES_AND_OPTIONAL_TRALING_WILDCARD = /\/*\*?$/;
const RE_METACHARACTERS = /[\\.*+^${}|()[\]]/g;
//const RE_OPTIONAL_PATH_SEGMENTS_THAT_ARE_NOT_PARAMETERS = /\/([\w-]+)\?(\/|$)/g;
const _compilePath = (
  path,
  end = true
) => {
  const params = [];
  let regexpSource = "^" + normalizeLeadingSlash(
    path.replace(RE_TRALING_SLASHES_AND_OPTIONAL_TRALING_WILDCARD, "")
  )
  .replace(RE_METACHARACTERS, "\\$&")
  .replace(
    /\/:([\w-]+)(\?)?/g,
    (match, paramName, isOptional, index, str) => {
      params.push({
        paramName,
        isOptional: isOptional != null
      });
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
  //.replace(RE_OPTIONAL_PATH_SEGMENTS_THAT_ARE_NOT_PARAMETERS, "(/$1)?$2");

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
    const path = crPathname(parentPath, meta.relativePath)
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

, _compareByIndexes = (
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

, _compareByScore = (
  a,
  b
) => a.score !== b.score
  ? b.score - a.score
  : _compareByIndexes(a, b)

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

, _crPathnameBase = (
  pathname
) => pathname.replace(/(.)\/+$/, "$1")
, _matchPathImpl = (
  match,
  compiledParams
) => {
  if (!match) return null;

  const matchedPathname = match[0];
  let pathnameBase = _crPathnameBase(matchedPathname);
  const captureGroups = match.slice(1)
  , params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        const splatValue = captureGroups[index] || "";
        pathnameBase = _crPathnameBase(
          matchedPathname.slice(0, matchedPathname.length - splatValue.length)
        )
      }
      const value = captureGroups[index];
      memo2[paramName] = isOptional && !value
        ? void 0
        : (value || "").replace(/%2F/g, "/");
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase
  };
}

const _matchRouteBranch = (
  routesMeta,
  pathname
) => {
  const matchedParams = {}
  , matches = [];
  let matchedPathname = "/";

  for (const meta of routesMeta) {
    const remainingPathname = matchedPathname === "/"
      ? pathname
      : pathname.slice(matchedPathname.length) || "/"

    // Use precomputed matcher
    , match = _matchPathImpl(
       remainingPathname.match(meta.matcher),
       meta.compiledParams
    )

    if (!match) {
      return null;
    }

    const _matchedPathname = crPathname(
      matchedPathname,
      match.pathnameBase
    );
    matches.push({
      // TODO: Can this as be avoided?
      params: {
        ...matchedParams,
        ...match.params
      },
      pathname: crPathname(
        matchedPathname,
        match.pathname
      ),
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
  locationPathname,
) => {
  const pathname = stripBasename(
    locationPathname || "/",
    "/"
  );

  if (pathname == null) {
    return null;
  }

  const decodedPathname = _decodePathname(pathname)
  , branches = flattenRoutes(routes);
  // Rank route branches
  branches.sort(_compareByScore);

  for (const branch of branches) {
    const matches = _matchRouteBranch(
      branch.routesMeta,
      decodedPathname
    );
    if (matches) return matches;
  }
  return null;
}
