"use strict";

exports.__esModule = true;
exports.joinPaths = void 0;
exports.matchRoutes = matchRoutes;
exports.parsePath = parsePath;
exports.stripBasename = stripBasename;
var _isTypeFn = require("../../utils/isTypeFn");
const removeTrailingSlash = path => path.replace(/\/+$/, "");
const normalizePathname = pathname => removeTrailingSlash(pathname).replace(/^\/*/, "/");
function parsePath(path) {
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
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  const startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length,
    nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
const removeDoubleSlashes = path => path.replace(/[\\/]{2,}/g, "/");
const joinPaths = paths => removeDoubleSlashes(paths.join("/"));
exports.joinPaths = joinPaths;
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  const segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  const params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (match, paramName, isOptional, index, str) => {
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
  }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else {}
  const matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function explodeOptionalSegments(path) {
  const segments = path.split("/");
  if (segments.length === 0) return [];
  const [first, ...rest] = segments,
    isOptional = first.endsWith("?"),
    required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  const restExploded = explodeOptionalSegments(rest.join("/")),
    result = [];
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function flattenRoutes(routes, branches, parentsMeta, parentPath, _hasParentOptionalSegments) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  if (_hasParentOptionalSegments === void 0) {
    _hasParentOptionalSegments = false;
  }
  const flattenRoute = function (route, index, hasParentOptionalSegments, relativePath) {
    if (hasParentOptionalSegments === void 0) {
      hasParentOptionalSegments = _hasParentOptionalSegments;
    }
    const meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
        return;
      }
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    const path = joinPaths([parentPath, meta.relativePath]),
      routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      flattenRoutes(route.children, branches, routesMeta, path, hasParentOptionalSegments);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta: routesMeta.map((meta2, i) => {
        const [matcher, params] = compilePath(meta2.relativePath, meta2.caseSensitive, i === routesMeta.length - 1);
        return {
          ...meta2,
          matcher,
          compiledParams: params
        };
      })
    });
  };
  routes.forEach((route, index) => {
    if (route.path === "" || !route.path?.includes("?")) {
      flattenRoute(route, index);
    } else {
      for (const exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, true, exploded);
      }
    }
  });
  return branches;
}
function compareIndexes(a, b) {
  const siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
function flattenAndRankRoutes(routes) {
  const branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  return branches;
}
function decodePath(value) {
  try {
    return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (_err) {
    console.log("The URL path could not be decoded");
    return value;
  }
}
function matchPathImpl(pattern, pathname, matcher, compiledParams) {
  const match = pathname.match(matcher);
  if (!match) return null;
  const matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  const captureGroups = match.slice(1),
    params = compiledParams.reduce((memo2, _ref, index) => {
      let {
        paramName,
        isOptional
      } = _ref;
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
    }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function matchPath(pattern, pathname) {
  if ((0, _isTypeFn.isStr)(pattern)) {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  const [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  return matchPathImpl(pattern, pathname, matcher, compiledParams);
}
function matchRouteBranch(branch, pathname, allowPartial) {
  if (allowPartial === void 0) {
    allowPartial = false;
  }
  const {
      routesMeta
    } = branch,
    matchedParams = {},
    matches = [];
  let matchedPathname = "/";
  for (let i = 0; i < routesMeta.length; ++i) {
    const meta = routesMeta[i],
      end = i === routesMeta.length - 1,
      remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/",
      pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
    let match =
    // Use precomputed matcher if it exists
    meta.matcher && meta.compiledParams ? matchPathImpl(pattern, remainingPathname, meta.matcher, meta.compiledParams) : matchPath(pattern, remainingPathname);
    const route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
  const location = (0, _isTypeFn.isStr)(locationArg) ? parsePath(locationArg) : locationArg,
    pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  const branches = precomputedBranches ?? flattenAndRankRoutes(routes),
    decoded = decodePath(pathname);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], decoded, allowPartial);
  }
  return matches;
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename, false);
}
//# sourceMappingURL=matchRouters.js.map