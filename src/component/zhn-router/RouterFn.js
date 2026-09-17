
export const HISTORY_ACTION_POP = "POP"
export const HISTORY_ACTION_PUSH = "PUSH"
export const HISTORY_ACTION_REPLACE = "REPLACE"

export function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?"
      ? search
      : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#"
      ? hash
      : "#" + hash;
  return pathname;
}

const RE_TRAILING_SLASH = /\/+$/;
export const removeTrailingSlash = (
  path
) => path.replace(RE_TRAILING_SLASH, "")

const RE_DOUBLE_SLASHES = /[\\/]{2,}/g;
export const removeDoubleSlashes = (
  path
) => path.replace(RE_DOUBLE_SLASHES, "/")

const RE_LEADING_SLASHES = /^\/*/;
export const normalizeLeadingSlash = (
  path
) => !path || path === "/"
  ? "/"
  : path.replace(RE_LEADING_SLASHES, "/")

const _addParsedPathPropIf = (
  parsedPath,
  path,
  propName,
  character
) => {
  const tokenIndex = path.indexOf(character);
  if (tokenIndex >= 0) {
    parsedPath[propName] = path.slice(tokenIndex);
    path = path.slice(0, tokenIndex);
  }
  return path;
};
export const parsePath = (path) => {
  const parsedPath = {};
  if (path) {
    path = _addParsedPathPropIf(parsedPath, path, "hash", "#")
    path = _addParsedPathPropIf(parsedPath, path, "search", "?")    
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
