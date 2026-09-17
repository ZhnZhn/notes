"use strict";

exports.__esModule = true;
exports.HISTORY_ACTION_REPLACE = exports.HISTORY_ACTION_PUSH = exports.HISTORY_ACTION_POP = void 0;
exports.createPath = createPath;
exports.removeTrailingSlash = exports.removeDoubleSlashes = void 0;
const HISTORY_ACTION_POP = exports.HISTORY_ACTION_POP = "POP";
const HISTORY_ACTION_PUSH = exports.HISTORY_ACTION_PUSH = "PUSH";
const HISTORY_ACTION_REPLACE = exports.HISTORY_ACTION_REPLACE = "REPLACE";
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
const RE_TRAILING_SLASH = /\/+$/;
const removeTrailingSlash = path => path.replace(RE_TRAILING_SLASH, "");
exports.removeTrailingSlash = removeTrailingSlash;
const RE_DOUBLE_SLASHES = /[\\/]{2,}/g;
const removeDoubleSlashes = path => path.replace(RE_DOUBLE_SLASHES, "/");
exports.removeDoubleSlashes = removeDoubleSlashes;
//# sourceMappingURL=RouterFn.js.map