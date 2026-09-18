"use strict";

exports.__esModule = true;
exports.removeTrailingSlash = exports.removeDoubleSlashes = exports.parsePath = exports.normalizeLeadingSlash = exports.createPath = exports.HISTORY_ACTION_REPLACE = exports.HISTORY_ACTION_PUSH = exports.HISTORY_ACTION_POP = void 0;
const HISTORY_ACTION_POP = exports.HISTORY_ACTION_POP = "POP";
const HISTORY_ACTION_PUSH = exports.HISTORY_ACTION_PUSH = "PUSH";
const HISTORY_ACTION_REPLACE = exports.HISTORY_ACTION_REPLACE = "REPLACE";
const _addTokenToIf = (pathname, token, character) => token && token !== character ? pathname += token.charAt(0) === character ? token : character + token : pathname;
const createPath = ({
  pathname = "/",
  search = "",
  hash = ""
}) => {
  pathname = _addTokenToIf(pathname, search, "?");
  return _addTokenToIf(pathname, hash, "#");
};
exports.createPath = createPath;
const RE_TRAILING_SLASH = /\/+$/;
const removeTrailingSlash = path => path.replace(RE_TRAILING_SLASH, "");
exports.removeTrailingSlash = removeTrailingSlash;
const RE_DOUBLE_SLASHES = /[\\/]{2,}/g;
const removeDoubleSlashes = path => path.replace(RE_DOUBLE_SLASHES, "/");
exports.removeDoubleSlashes = removeDoubleSlashes;
const RE_LEADING_SLASHES = /^\/*/;
const normalizeLeadingSlash = path => !path || path === "/" ? "/" : path.replace(RE_LEADING_SLASHES, "/");
exports.normalizeLeadingSlash = normalizeLeadingSlash;
const _addParsedPathPropIf = (parsedPath, path, propName, character) => {
  const tokenIndex = path.indexOf(character);
  if (tokenIndex >= 0) {
    parsedPath[propName] = path.slice(tokenIndex);
    path = path.slice(0, tokenIndex);
  }
  return path;
};
const parsePath = path => {
  const parsedPath = {};
  if (path) {
    path = _addParsedPathPropIf(parsedPath, path, "hash", "#");
    path = _addParsedPathPropIf(parsedPath, path, "search", "?");
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
};
exports.parsePath = parsePath;
//# sourceMappingURL=RouterFn.js.map